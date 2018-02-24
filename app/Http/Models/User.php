<?php

namespace App\Http\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = ['name', 'email', 'password'];
        
    protected $hidden = ['password', 'remember_token'];
        
    public function activity($name, $value = NULL, $success = true){
        $activity           = new Activity;
        $activity->user_id  = $this->id;
        $activity->name     = $name;
        $activity->value    = $value;
        $activity->success  = $success;
        $activity->ip       = \Request::ip();
        $activity->activitytable()->associate($this);
        $activity->save();
    }

    public function activities()
    {
        return $this->morphMany(Activity::class,'activitytable');
    }
}
