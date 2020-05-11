<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ["imei"];

    public function scopeAvailable($query)
    {
        return $query->where('is_available', 1);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function model()
    {
        return $this->belongsTo(ItemModel::class);
    }

    public function color()
    {
        return $this->belongsTo(Color::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function sales()
    {
        return $this->belongsToMany(Sale::class);
    }

    // public function freebies()
    // {
    //     return $this->hasManyThrough(Freebie::class, SaleItem::class, 'item_id');
    // }
}
