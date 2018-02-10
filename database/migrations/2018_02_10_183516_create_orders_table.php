<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(env('APP_WEBTYPE') == 'ECOMMERCE'){
            Schema::create('orders', function (Blueprint $table) {
                $table->increments('id');
                $table->timestamps();
                $table->string('address');
                $table->string('city');
                $table->string('zipcode');
                $table->integer('product_id')->unsigned();
                $table->boolean('fullfiled')->default(0);
    
                $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
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
            Schema::dropIfExists('orders');
        }
    }
}
