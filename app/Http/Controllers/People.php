<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class People extends Controller
{
    //
    function getPeople() { 
     
        
        return Http::get("https://swapi.dev/api/people/?page=3");
    }
}
