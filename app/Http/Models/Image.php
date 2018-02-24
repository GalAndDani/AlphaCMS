<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function gallery(){
        return $this->belongsTo(Gallery::class);
    }
}
