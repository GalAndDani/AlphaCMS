<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    public function groups(){
        return $this->hasMany(MenuGroup::class);
    }
}
