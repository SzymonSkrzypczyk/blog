<?php

namespace Tests\Unit;

use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test creating a post with valid data
     *
     * @return void
     */
    public function testCreatePost()
    {
        $user = User::factory()->create(); // Create a user to associate with the post

        // Create a post with attributes
        $post = Post::create([
            'user_id' => $user->id,
            'title' => 'Sample Post',
            'slug' => 'sample-post',
            'content' => 'This is a sample content for the post.',
            'published_at' => now()
        ]);

        // Assert that the post is in the database
        $this->assertDatabaseHas('posts', [
            'title' => 'Sample Post',
            'slug' => 'sample-post',
            'content' => 'This is a sample content for the post.',
        ]);

        // Assert the post's relationship with the user
        $this->assertEquals($user->id, $post->user->id);
    }

    /**
     * Test that post requires title, content, and slug
     *
     * @return void
     */
    public function testPostValidation()
    {
        $user = User::factory()->create();

        // Attempt to create a post without required fields
        $post = new Post([
            'user_id' => $user->id,
            'slug' => 'invalid-slug', // missing title and content
        ]);

        // Assert that the post is not saved (validation should fail)
        $this->assertFalse($post->save());
    }

    /**
     * Test the post can have multiple tags
     *
     * @return void
     */
    public function testPostHasManyTags()
    {
        $user = User::factory()->create();
        $post = Post::create([
            'user_id' => $user->id,
            'title' => 'Sample Post',
            'slug' => 'sample-post',
            'content' => 'Content for the post.',
            'published_at' => now()
        ]);

        // Create tags and associate them with the post
        $tag1 = Tag::create(['name' => 'Tag1', 'slug' => 'tag1']);
        $tag2 = Tag::create(['name' => 'Tag2', 'slug' => 'tag2']);

        $post->tags()->attach([$tag1->id, $tag2->id]);

        // Assert that the post has the tags
        $this->assertTrue($post->tags->contains($tag1));
        $this->assertTrue($post->tags->contains($tag2));
    }

    /**
     * Test post can have many comments
     *
     * @return void
     */
    public function testPostHasManyComments()
    {
        $user = User::factory()->create();
        $post = Post::create([
            'user_id' => $user->id,
            'title' => 'Sample Post',
            'slug' => 'sample-post',
            'content' => 'Content for the post.',
            'published_at' => now()
        ]);

        // Create comments for the post
        $post->comments()->create([
            'user_id' => $user->id,
            'content' => 'This is a comment on the post.'
        ]);

        // Assert that the post has at least one comment
        $this->assertCount(1, $post->comments);
    }

    /**
     * Test post can have many votes
     *
     * @return void
     */
    public function testPostHasManyVotes()
    {
        $user = User::factory()->create();
        $post = Post::create([
            'user_id' => $user->id,
            'title' => 'Sample Post',
            'slug' => 'sample-post',
            'content' => 'Content for the post.',
            'published_at' => now()
        ]);

        // Create votes for the post
        $post->votes()->create([
            'user_id' => $user->id,
            'vote' => 1 // Upvote
        ]);

        // Assert that the post has at least one vote
        $this->assertCount(1, $post->votes);
    }
}
