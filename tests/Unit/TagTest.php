<?php

namespace Tests\Unit;

use App\Models\Tag;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TagTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the relationship between Tag and Post.
     *
     * @return void
     */
    public function testTagCanHavePosts()
    {
        // Create a user and a post
        $user = User::factory()->create();
        $post = Post::factory()->create(['user_id' => $user->id]);

        // Create a tag and associate it with the post
        $tag = Tag::create([
            'name' => 'Test Tag',
            'slug' => 'test-tag',
        ]);

        // Attach the tag to the post
        $post->tags()->attach($tag);

        // Assert that the tag is associated with the post
        $this->assertTrue($post->tags->contains($tag));

        // Assert that the post is associated with the tag
        $this->assertTrue($tag->posts->contains($post));
    }

    /**
     * Test that a tag can be created with the necessary attributes.
     *
     * @return void
     */
    public function testTagCanBeCreated()
    {
        // Create a tag instance
        $tag = Tag::create([
            'name' => 'New Tag',
            'slug' => 'new-tag',
        ]);

        // Assert that the tag was created
        $this->assertDatabaseHas('tags', [
            'name' => 'New Tag',
            'slug' => 'new-tag',
        ]);
    }

    /**
     * Test that a tag requires a name and slug when being created.
     *
     * @return void
     */
    public function testTagValidation()
    {
        // Try to create a tag without a name
        $tag = Tag::create([
            'slug' => 'slug-only',
        ]);

        // Assert that the tag was not created due to validation failure
        $this->assertFalse($tag->exists);
    }
}
