<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produtos', function (Blueprint $table) {

            $table->string('nome_produto')->primary(); 
            $table->foreignId('categoria_id')->constrained('categoria', 'categoria_id');
            $table->decimal('valor_produto', 15, 2);
            $table->date('data_vencimento');
            $table->integer('quantidade_estoque');
            $table->boolean('produto_perecivel');
           
                    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};

