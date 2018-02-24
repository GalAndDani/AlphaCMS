<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    public function images(){
        return $this->hasMany(Image::class);
    }
}
