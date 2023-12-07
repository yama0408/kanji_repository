<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlayController extends Controller
{
    public function writing()
    {
        return view('profile.writing');
        
    }
    
    public function reading1()
    {
        return view('profile.reading1');
        
    }
    
    public function reading()
    {
        return view('profile.reading');
        
    }
    
    public function readingquestion()
    {   
        
    }
    
    
}
