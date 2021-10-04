<?php
namespace Database\Factories;

use App\Models\Topic;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class TopicFactory extends Factory {
    protected $model = Topic::class;

    public function definition() {
        $name = $this->faker->name();
        return [
            'name' => $name,
            'slug' => Str::slug($name)
        ];
    }
}
