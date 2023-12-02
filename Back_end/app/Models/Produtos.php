<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produtos extends Model
{
    public $timestamps = false; // desabilitar sistema de hora de criacao e update
    protected $primaryKey = 'nome_produto'; // Nome da coluna de chave primária
    public $incrementing = false; // identificar que a chave primaria nao é autoincremento
    protected $keyType = 'string'; // Tipo da chave primária
    protected $table = "produtos";

    protected $fillable = [
        'nome_produto',
        'categoria_id',
        'valor_produto',
        'data_vencimento',
        'quantidade_estoque',
        'produto_perecivel',
     ];

    use HasFactory;
}
