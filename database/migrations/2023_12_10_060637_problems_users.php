<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('problem_user', function (Blueprint $table) {
        $table->foreignId('problem_id')->constrained('problems');
        $table->foreignId('user_id')->constrained('users');
        $table->primary(['problem_id', 'user_id']);  
    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
