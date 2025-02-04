<?php
namespace Tests\Unit;

use App\Models\Vote;
use App\Models\User;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class VoteTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the validation of the Vote model.
     *
     * @return void
     */
    public function testVoteValidation()
    {
        // Create a user and a post for relationships
        $user = User::factory()->create();
        $post = Post::factory()->create();

        // Valid vote data
        $validData = [
            'user_id' => $user->id,
            'post_id' => $post->id,
            'vote' => 1, // or -1
        ];

        // Invalid vote data (missing vote)
        $invalidData = [
            'user_id' => $user->id,
            'post_id' => $post->id,
            'vote' => null,
        ];

        // Invalid vote data (invalid vote value)
        $invalidData2 = [
            'user_id' => $user->id,
            'post_id' => $post->id,
            'vote' => 2, // Invalid value (must be -1 or 1)
        ];

        $validVote = new Vote($validData);
        $this->assertTrue($validVote->save(), 'Valid vote should be saved.');

        $invalidVote = new Vote($invalidData);
        $this->assertFalse($invalidVote->save(), 'Invalid vote should not be saved due to null value.');
        $this->assertNotEmpty($invalidVote->validationErrors, 'Validation errors should be present for invalid vote.');

        $invalidVote2 = new Vote($invalidData2);
        $this->assertFalse($invalidVote2->save(), 'Invalid vote should not be saved due to invalid value.');
        $this->assertNotEmpty($invalidVote2->validationErrors, 'Validation errors should be present for invalid vote value.');
    }

    /**
     * Test the relationship between Vote and User.
     *
     * @return void
     */
    public function testVoteHasUserRelationship()
    {
        $user = User::factory()->create();
        $vote = Vote::factory()->create(['user_id' => $user->id]);

        // Assert that the vote belongs to the user
        $this->assertEquals($user->id, $vote->user->id, 'The vote should belong to the user.');
    }

    /**
     * Test the relationship between Vote and Post.
     *
     * @return void
     */
    public function testVoteHasPostRelationship()
    {
        $post = Post::factory()->create();
        $vote = Vote::factory()->create(['post_id' => $post->id]);

        $this->assertEquals($post->id, $vote->post->id, 'The vote should belong to the post.');
    }
}
