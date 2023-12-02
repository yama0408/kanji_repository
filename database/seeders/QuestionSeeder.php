<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->insert([
                'kanji' => '小',
                'kanji' => '校',
                'kanji' => '先',
                'kanji' => '車',
                'kanji' => '校',
                'kanji' => '金',
                'kanji' => '手',
                'kanji' => '青',
                'kanji' => '見',
                'kanji' => '十',
         ]);
    }
}
