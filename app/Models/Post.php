<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Validator;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'title', 'slug', 'content', 'published_at', 'image'];
    protected $casts = ['published_at' => 'datetime'];
    protected $appends = ['image_url'];

    public static function validate($data)
    {
        $rules = [
            'title' => 'required|string',
            'content' => 'required|string',
        ];

        return Validator::make($data, $rules);
    }

    public function save(array $options = []): bool
    {
        $validator = self::validate($this->attributes);

        // If validation fails, return false and don't save the model
        if ($validator->fails()) {
            $this->validationErrors = $validator->errors();
            return false;
        }

        return parent::save($options);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'post_tag');
    }

    public function getImageUrlAttribute()
    {
        return $this->image ? asset($this->image) : null;
    }

}
