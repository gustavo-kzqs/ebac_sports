import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  adicionarCarrinho,
  SelecionaFavorito
} from '../../Redux/Carrinho/slice'
import { RootReducer } from '../../Redux/Store'
import { SelecionaCarrinho } from '../../Redux/Carrinho/selecionar'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const adicionar = () => dispatch(adicionarCarrinho(produto))
  const fav = () => dispatch(SelecionaFavorito(produto.id))
  const favoritar = useSelector((root: RootReducer) =>
    SelecionaFavorito(root.carrinho.favoritos, produto.id)
  )
  const NoCarrinho = useSelector((root: RootReducer) =>
    SelecionaCarrinho(root.carrinho.CompraProduto, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={fav} type="button">
        {favoritar ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionar} type="button">
        {NoCarrinho ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
