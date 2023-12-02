<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produtos;

class ProdutosController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(Produtos::all());

    }
    public function store(Request $request)
{
    $nome_produto = Produtos::create($request->all());

    return response()->json($nome_produto, 201);
}

public function show(Produtos $nome_produto)
{
    return response()->json($nome_produto);
}

public function update(Request $request, Produtos $nome_produto)
{
    $nome_produto->update($request->all());

    return response()->json($nome_produto);
}

public function destroy(Produtos $nome_produto)
{
    $nome_produto->delete();

    return response()->json(null, 204);
}
}
