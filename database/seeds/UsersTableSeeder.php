<?php

use App\Http\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'        => 'Dani Mezhi',
            'email'       => 'mezhidani@gmail.com',
            'password'    => bcrypt('kamagistdani')
        ]);

        User::create([
            'name'        => 'Gal Amitai',
            'email'       => 'galamitai@gmail.com',
            'password'    => bcrypt('q1w2e3r4')
        ]);
    }
}
