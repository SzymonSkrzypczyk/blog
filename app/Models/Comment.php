<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Validator;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ["user_id", "post_id", "content", "published_at"];
    protected $casts = ['published_at' => 'datetime'];

    public static function validate(array $data): \Illuminate\Validation\Validator
    {
        return Validator::make($data, [
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
            'content' => 'required|string|max:1000',
            'published_at' => 'nullable|date',
        ]);
    }

    public function save(array $options = []): bool
    {
        $validator = self::validate($this->attributes);

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

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
