<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition(): array
    {
        $title = $this->faker->sentence(6);
        $content = $this->faker->paragraphs(3, true);

        return [
            'user_id' => User::factory(),
            'title' => $title,
            'slug' => Str::slug($title),
            'content' => $content,
            'published_at' => $this->faker->optional(0.8)->dateTimeBetween('-1 year', 'now'),
        ];
    }

    public function configure(): self
    {
        return $this->afterCreating(function (Post $post) {
            // Attach tags to the post
            $tags = Tag::factory()->count(3)->create();
            $post->tags()->attach($tags->pluck('id')->toArray());
        });
    }

    /**
     * Indicate that the post is published.
     */
    public function published(): PostFactory
    {
        return $this->state(fn (array $attributes) => [
            'published_at' => now(),
        ]);
    }

    /**
     * Indicate that the post is unpublished.
     */
    public function unpublished(): PostFactory
    {
        return $this->state(fn (array $attributes) => [
            'published_at' => null,
        ]);
    }

    /**
     * Attach a specific user to the post.
     */
    public function forUser(User $user): PostFactory
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user->id,
        ]);
    }
}
