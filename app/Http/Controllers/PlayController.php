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
        $client = new \GuzzleHttp\Client();
        
        $response = $client->request('GET', 'https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=1', [
        	'headers' => [
        		'X-RapidAPI-Host' => 'kanjialive-api.p.rapidapi.com',
        		'X-RapidAPI-Key' => '2e1f7f1f17mshde85943a4deb2b9p1aeed4jsn7367b14e5ec7',
        	],
        ]);
    
        echo $response->getBody();
        
    }
    
    
}
