import Produto from '../components/Produto'
import { useGetProductQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductQuery()

  {
    if (isLoading)
      return (
        <S.Loading>
          <h1>...Carregando</h1>
        </S.Loading>
      )
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
