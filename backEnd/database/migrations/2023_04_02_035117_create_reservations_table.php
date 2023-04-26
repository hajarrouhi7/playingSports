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
            $table->increments('id');
            $table->string('FirstName');
            $table->string('LastName');
            $table->string('Email');
            $table->integer('Number');
            $table->date('DateBook');
            $table->time('BookTime');
            $table->integer('Duration');
            $table->float('Price');
            $table->unsignedInteger('infoTerrain_id');
            $table->foreign('infoTerrain_id')
            ->references('id')
            ->on('info_terrains');
            $table->unsignedInteger('client_id');
            $table->foreign('client_id')
            ->references('id')
            ->on('clients');
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
