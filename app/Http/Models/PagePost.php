<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class PagePost extends Model
{
    public function page() {
        return $this->morphOne(Page::class,'pagetable');
    }

    public function seo(){
        return $this->belongsTo(Seo::class);
    }
}
