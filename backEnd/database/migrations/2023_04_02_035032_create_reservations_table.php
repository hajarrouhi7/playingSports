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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('FirstName');
            $table->string('LastName');
            $table->string('Email');
            $table->integer('Number');
            $table->date('DateBook');
            $table->time('BookTime');
            $table->integer('Duration');
            $table->float('Price');
            $table->foreignId('infoTerrain_id')->contrained('info_terrains');
            $table->foreignId('client_id')->contrained('clients');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
};
