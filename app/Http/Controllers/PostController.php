<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $results = Post::with('tags')->paginate(9);

        return Inertia::render('Posts/Index', [
            'posts' => $results->items(),
            'nextPageUrl' => $results->nextPageUrl(),
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Post::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $post = Post::with('comments', 'votes', 'tags')->findOrFail($id);

        $comments = $post->comments;
        $votes = $post->votes;
        $tags = $post->tags;

        return Inertia::render('Posts/Show', [
            'post' => $post,
            'comments' => $comments,
            'votes' => $votes,
            'tags' => $tags
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
