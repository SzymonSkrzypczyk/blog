<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Validator;
use Inertia\Testing\Concerns\Has;

class Vote extends Model
{
    use HasFactory;

    protected $fillable = ["user_id", "post_id", "vote"];

    public $timestamps = true;

    protected $casts = [
        'vote' => 'integer',
    ];

    public static function validate(array $data): \Illuminate\Validation\Validator
    {
        return Validator::make($data, [
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
            'vote' => 'required|integer|in:-1,1',
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

