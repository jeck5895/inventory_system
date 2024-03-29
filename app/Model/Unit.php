<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $guarded = [];

    public function items() 
    {
        return $this->hasMany(Item::class, 'unit', 'id');
    }
}
