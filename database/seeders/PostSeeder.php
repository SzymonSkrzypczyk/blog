<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory(10)->create()->each(function (Post $post) {
            $user = User::inRandomOrder()->first() ?? User::factory()->create();

            Comment::factory(rand(1, 5))->create([
                'post_id' => $post->id,
                'user_id' => $user->id,
            ]);
        });
    }
}
