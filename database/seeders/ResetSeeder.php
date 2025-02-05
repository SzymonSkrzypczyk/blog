<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use App\Models\Comment;
use App\Models\Vote;


class ResetSeeder extends Seeder
{
    public function run()
    {
        User::truncate();
        Tag::truncate();
        Post::truncate();
        Comment::truncate();
        Vote::truncate();
    }
}
