<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    public function pagetable()
    {
        return $this->morphTo();
    }

    public function template(){
        return $this->hasOne(PageTemplate::class, 'id', 'page_template_id');
    }
}
