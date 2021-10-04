<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration {
    public function up() {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('lead');
            $table->text('content');
            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('topic_id')->index();
            $table->timestamps();

            $table->foreign('author_id')->references('id')->on('users');
            $table->foreign('topic_id')->references('id')->on('topics');
        });
    }

    public function down()  {
        Schema::dropIfExists('posts');
    }

}