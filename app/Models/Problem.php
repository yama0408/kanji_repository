<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    use HasFactory;
    public function users(){
    //生徒は多数の科目を履修。
    return $this->belongsToMany(User::class);
    }
}

