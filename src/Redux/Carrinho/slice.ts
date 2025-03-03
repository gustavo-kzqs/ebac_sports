import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto as ProductType } from '../../App'

type TipoCarrinho = {
  CompraProduto: ProductType[]
  favoritos: number[]
}

const initialState: TipoCarrinho = {
  CompraProduto: [],
  favoritos: []
}

const CarrinhoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<ProductType>) => {
      if (state.CompraProduto.find((item) => item.id === action.payload.id)) {
        state.CompraProduto = state.CompraProduto.filter(
          (item) => item.id !== action.payload.id
        )
        console.log(`RMV: [ ${action.payload.nome} ]`)
      } else {
        state.CompraProduto = [...state.CompraProduto, action.payload]
        console.log(`ADD: [ ${action.payload.nome}]`)
      }
    },
    SelecionaFavorito: (state, action: PayloadAction<number>) => {
      console.log(`Favoritar: ${action.payload}`)
      if (state.favoritos.includes(action.payload))
        state.favoritos = state.favoritos.filter((id) => id !== action.payload)
      else state.favoritos = [...state.favoritos, action.payload]
      console.log(`Lista: ${state.favoritos}`)
    }
  }
})

export const { adicionarCarrinho, SelecionaFavorito } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
