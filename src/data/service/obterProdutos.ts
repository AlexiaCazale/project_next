'use server';

import { esperar } from "./utilis";
import produtos from "../constants/produtos";

export default async function obterProdutos(){
    await esperar(3000);
    return produtos;
}