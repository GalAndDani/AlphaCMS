<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class LeadType extends Model
{
    public function leads(){
        return $this->hasMany(Lead::class);
    }
}
