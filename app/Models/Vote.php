<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vote extends Model
{
    protected $fillable = ["user_id", "post_id", "vote"];

    public $timestamps = true;

    protected $casts = [
        'vote' => 'integer',
    ];

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function post(): BelongsTo{
        return $this->belongsTo(Post::class);
    }
}
