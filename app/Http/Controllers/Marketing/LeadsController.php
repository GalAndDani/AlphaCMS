<?php

namespace App\Http\Controllers\Marketing;

use App\Http\Models\Lead;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LeadsController extends Controller
{
    public function index(){
        return view('marketing/leads/index');
    }

    public function getLeads(){
        return Lead::get();
    }

    public function create(){
        //
    }

    public function update(){
        //
    }

    public function delete(){
        //
    }
}
