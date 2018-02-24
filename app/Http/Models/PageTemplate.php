<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class PageTemplate extends Model
{
    public function page(){
        return $this->hasOne(Page::class);
    }
}
