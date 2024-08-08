import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  }

  return (
    <>
      <S.Produtos>
      {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} favorito={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
