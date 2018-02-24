<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class MenuGroup extends Model
{
    public function menu(){
        return $this->belongsTo(Menu::class);
    }

    public function page(){
        return $this->belongsTo(Page::class);
    }
}
