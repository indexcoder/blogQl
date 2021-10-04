<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    public function run() {
        \App\Models\User::factory(20)->create();
        \App\Models\Topic::factory(20)->create();
        \App\Models\Post::factory(50)->create();
    }
}