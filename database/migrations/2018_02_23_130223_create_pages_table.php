<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pagetable_id');
            $table->string('pagetable_type');
            $table->boolean('home_page')->default(0);
            $table->integer('page_template_id')->unsigned()->index()->default(1);
            $table->boolean('active')->default(1);
            $table->timestamps();

            $table->foreign('page_template_id')->references('id')->on('page_templates');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
}
