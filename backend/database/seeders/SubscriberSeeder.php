<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SubscriberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('subscribers')->insert(
            [
                [
                    'email' => 'nghia@gmail.com',
                ],
                [
                    'email' => 'khoa@gmail.com',
                ],
            ]
        );
    }
}
