<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Validator;

class Tag extends Model
{
    use HasFactory;

    public static function validate($data): \Illuminate\Validation\Validator
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:tags,slug|max:255',
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

    protected $fillable = ["name", "slug"];

    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class);
    }
}
