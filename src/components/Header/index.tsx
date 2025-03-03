import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import {
  SelecionaCarrinho,
  SelecionaFavoritoQtd,
  ValorTotal
} from '../../Redux/Carrinho/selecionar'

const Header = () => {
  const valorTotal = useSelector(ValorTotal)
  const quantidade = useSelector(SelecionaCarrinho)
  const favoritos = useSelector(SelecionaFavoritoQtd)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidade} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
