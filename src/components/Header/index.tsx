import { useSelector } from 'react-redux'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

import * as S from './styles'

import cesta from '../../assets/cesta.png'

const Header = ({ itensNoCarrinho, favoritos }: Props) => {
  const valorTotal = itensProduto.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img src={cesta} title="cesta do carrinho" />
        <span>
          {itensProduto.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
