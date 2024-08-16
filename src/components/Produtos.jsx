import CardProduto from "./Card"
import DescProduto from "./DescriptionProduto";
import ImagemProduto from "./Image";
import OrdemLista from "./OrdemLista";
import ProdutoTitle from "./TituloProduto";


function ListaProdutos(listaProdutosProps){
    const listaProdutos = listaProdutosProps.lista;
    
    return (
        <OrdemLista>
                {
                    listaProdutos.map((produto) => 
                        (
                            <CardProduto>
                                <ImagemProduto src={produto.imageUrl} />
                                <ProdutoTitle>{produto.title}</ProdutoTitle>
                                <DescProduto>{produto.description}</DescProduto>
                            </CardProduto>
                        )
                    )
                }
        </OrdemLista>
    );
}

export default ListaProdutos;