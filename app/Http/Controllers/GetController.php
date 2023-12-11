<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GetController extends Controller
{
    public function how()
    {
        return view('profile.how');
        
    }
    
    
    
    public function score()
    {
        return view('profile.score');
        
    }
}
