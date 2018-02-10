<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsletterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('newsletter', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('lead_id')->unsigned();
            $table->integer('mail_id')->unsigned();
            $table->string('token');
            $table->boolean('opened')->default(0);

            $table->foreign('lead_id')->references('id')->on('leads')->onDelete('cascade');
            $table->foreign('mail_id')->references('id')->on('mail')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('newsletter');
    }
}
