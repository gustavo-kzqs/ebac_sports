import { Produto as ProductType } from '../../App'
import { RootReducer } from '../Store'

export const SelecionaCarrinho = (root: RootReducer) =>
  root.carrinho.CompraProduto.length

export const ValorTotal = (root: RootReducer) =>
  root.carrinho.CompraProduto.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

export const SelecionaFavoritoQtd = (root: RootReducer) =>
  root.carrinho.favoritos.length

export const SelecionaFavorito = (favoritos: number[], id: number) =>
  favoritos.some((pid) => pid === id)

export const SelecionaNoCarrinho = (Produto: ProductType[], id: number) =>
  Produto.some((p) => p.id === id)
