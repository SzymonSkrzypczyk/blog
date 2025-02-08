<?php
namespace Tests\Unit;

use App\Models\Comment;
use App\Models\User;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the validation of the Comment model.
     *
     * @return void
     */
    public function testCommentValidation()
    {
        // Create a user and a post for relationships
        $user = User::factory()->create();
        $post = Post::factory()->create();

        $validData = [
            'user_id' => $user->id,
            'post_id' => $post->id,
            'content' => 'This is a valid comment content.',
            'published_at' => now(),
        ];

        $invalidData = [
            'user_id' => $user->id,
            'post_id' => $post->id,
            'content' => '',
            'published_at' => now(),
        ];

        $validComment = new Comment($validData);
        $this->assertTrue($validComment->save(), 'Valid comment should be saved.');

        $invalidComment = new Comment($invalidData);
        $this->assertFalse($invalidComment->save(), 'Invalid comment should not be saved.');
        $this->assertNotEmpty($invalidComment->validationErrors, 'Validation errors should be present for invalid comment.');
    }

    /**
     * Test the relationship between Comment and User.
     *
     * @return void
     */
    public function testCommentHasUserRelationship()
    {
        // Create a user first
        $user = User::factory()->create();

        $comment = Comment::factory()->create(['user_id' => $user->id]);

        $comment->refresh();

        // Assert the user relationship
        $this->assertNotNull($comment->user, 'The comment should have a user.');
        $this->assertEquals($user->id, $comment->user->id, 'The comment should belong to the user.');
    }


    /**
     * Test the relationship between Comment and Post.
     *
     * @return void
     */
    public function testCommentHasPostRelationship()
    {
        // Create a post and a comment
        $post = Post::factory()->create();
        $comment = Comment::factory()->create(['post_id' => $post->id]);

        // Assert that the comment belongs to the post
        $this->assertEquals($post->id, $comment->post->id, 'The comment should belong to the post.');
    }
}
