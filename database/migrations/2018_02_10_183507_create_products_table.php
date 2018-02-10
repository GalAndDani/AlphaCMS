<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(env('APP_WEBTYPE') == 'ECOMMERCE'){
            Schema::create('products', function (Blueprint $table) {
                $table->increments('id');
                $table->timestamps();
                $table->string('title');
                $table->string('description');
                $table->float('price', 8, 2);
                $table->boolean('active')->default(1);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if(env('APP_WEBTYPE') == 'ECOMMERCE'){
            Schema::dropIfExists('products');
        }
    }
}
