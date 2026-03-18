<!-- app/Models/Setting.php 
| -- This model represents a setting in the application. 
-->
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $table = 'settings';
    protected $primaryKey = 'setting_id';
    public $timestamps = false; // Disable Laravel's default timestamps

    protected $fillable = [
        'key',
        'value',
        'created_at',
        'updated_at',
    ];
}

