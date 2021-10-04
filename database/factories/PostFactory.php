<?php
namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory {
    protected $model = Post::class;

    public function definition() {

        return [
            'title'     => $this->faker->sentence(3),
            'lead'      => $this->faker->paragraph(10, true),
            'content'   => $this->faker->text(200),
            'author_id' => random_int(1, 20),
            'topic_id'  => random_int(1, 20),
        ];
    }

}
