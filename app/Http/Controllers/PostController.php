<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use App\Models\Tag;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Parsedown;
use function Webmozart\Assert\Tests\StaticAnalysis\string;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $results = Post::with('tags')->get();

        return Inertia::render('Posts/Index', [
            'posts' => $results->map(function ($post) {
                $post->image_url = $post->image ? asset($post->image) : null;
                return $post;
            })
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $tags = Tag::all();

        return Inertia::render('Posts/Create', [
            'tags' => $tags,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (!auth()->check()) {
            return redirect()->route('login')->with('error', 'You must be logged in to create a post.');
        }

        $validated = $request->validate([
            'title' => 'required|string|unique:posts,title',
            'content' => 'required|string',
            'image' => 'nullable|file',
            'tags' => 'nullable|string',
        ]);

        if (is_string($validated['tags'])) {
            $validated['tags'] = json_decode($validated['tags'], true);
        }

        // Generate a unique slug
        $slug = Str::slug($validated['title']);
        $count = Post::where('slug', $slug)->count();
        if ($count > 0) {
            $slug .= '-' . ($count + 1);
        }

        // Assign the user ID
        $validated['slug'] = $slug;
        $validated['user_id'] = auth()->id();

        $validated['published_at'] = now();

        if ($request->hasFile("image")){
            $imagePath = $request->file("image")->store("public/posts", "public");
            $validated["image"] = "storage/$imagePath";
        }

        $post = Post::create($validated);

        if ($request->has('tags')) {
            // Get all tags by name
            $tags = Tag::whereIn('name', $validated['tags'])->get();
            Log::log('info', $tags);

            // Attach the tags to the post
            $post->tags()->attach($tags);
        }

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $post = Post::with('comments.user', 'votes', 'tags')->findOrFail($id);

        $comments = $post->comments;
        $votes = $post->votes;
        $tags = $post->tags;

        $Parsedown = new Parsedown();
        $Parsedown->setSafeMode(true);
        $html_content = $Parsedown->text($post->content);
        $recommended_articles = Post::where('id', '!=', $id)->inRandomOrder()->limit(3)->get();

        $summed_points = $votes->sum('vote');

        return Inertia::render('Posts/Show', [
            'post' => $post->append('image_url'),
            'comments' => $comments,
            'votes' => $votes,
            'tags' => $tags,
            'points_summed' => $summed_points,
            'html_content' => $html_content,
            'recentPosts' => $recommended_articles
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Posts/Create', [
            'post' => Post::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Post::findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Post::destroy($id);

        $results = Post::all();

        return Inertia::render('Posts/Index', [
            'posts' => $results
        ]);
    }
}
