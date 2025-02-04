import ProdutoDetalhes from "@/components/produto/ProdutoDetalhes"
import obterProdutosPorId from "@/data/service/obterProdutosPorId"
import Link from "next/link"

export default async function PaginaProdutoPorId(props: any){
    const produto = await obterProdutosPorId(+props.params.id)
    if(!produto) return <div>Produto não encontrado!</div>
    return (
        <div className="flex flex-col gap-5">
            <ProdutoDetalhes produto={produto}/>
            <Link href="/produtos" className="self-center botao">Voltar</Link>
        </div>
    )
}