<?php
namespace Tests\Unit;

use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Vote;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the relationship between User and Posts.
     *
     * @return void
     */
    public function testUserHasPosts()
    {
        // Create a user
        $user = User::factory()->create();

        // Create posts for the user
        $post = Post::factory()->create(['user_id' => $user->id]);

        // Assert that the user has the post
        $this->assertTrue($user->posts->contains($post), 'User should have the post.');
    }

    /**
     * Test the relationship between User and Comments.
     *
     * @return void
     */
    public function testUserHasComments()
    {
        // Create a user
        $user = User::factory()->create();

        // Create a comment for the user
        $comment = Comment::factory()->create(['user_id' => $user->id]);

        // Assert that the user has the comment
        $this->assertTrue($user->comments->contains($comment), 'User should have the comment.');
    }

    /**
     * Test the relationship between User and Votes.
     *
     * @return void
     */
    public function testUserHasVotes()
    {
        // Create a user
        $user = User::factory()->create();

        // Create a post for the user to vote on
        $post = Post::factory()->create(['user_id' => $user->id]);

        // Create a vote and associate it with the user and the post
        $vote = Vote::factory()->create([
            'user_id' => $user->id,
            'post_id' => $post->id,
            'vote' => 1, // Assuming vote is an integer value, 1 or -1
        ]);

        // Assert that the user has the vote
        $this->assertTrue($user->votes->contains($vote), 'User should have the vote.');
    }

    /**
     * Test the isAdmin method returns the correct value.
     *
     * @return void
     */
    public function testIsAdmin()
    {
        // Create a user with is_admin set to true
        $adminUser = User::factory()->create(['is_admin' => true]);

        // Create a user with is_admin set to false
        $normalUser = User::factory()->create(['is_admin' => false]);

        // Assert that isAdmin() returns true for admin user
        $this->assertTrue($adminUser->isAdmin(), 'Admin user should return true from isAdmin method.');

        // Assert that isAdmin() returns false for normal user
        $this->assertFalse($normalUser->isAdmin(), 'Normal user should return false from isAdmin method.');
    }

    /**
     * Test the fillable attributes of the User model.
     *
     * @return void
     */
    public function testUserFillableAttributes()
    {
        // Create a new user with fillable attributes
        $user = User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'is_admin' => false,
        ]);

        // Assert that the user has the correct attributes
        $this->assertEquals('John Doe', $user->name);
        $this->assertEquals('john@example.com', $user->email);
        $this->assertEquals(false, $user->is_admin);
    }

    /**
     * Test the hidden attributes of the User model.
     *
     * @return void
     */
    public function testUserHiddenAttributes()
    {
        // Create a user
        $user = User::factory()->create([
            'password' => 'password123',
            'remember_token' => 'token123',
        ]);

        // Assert that the password and remember_token are hidden
        $this->assertArrayNotHasKey('password', $user->toArray());
        $this->assertArrayNotHasKey('remember_token', $user->toArray());
    }
}
