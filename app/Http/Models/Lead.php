<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    public function type(){
        return $this->hasOne(LeadType::class, 'id', 'lead_type_id');
    }
}
