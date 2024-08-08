import { Provider } from 'react-redux'

import Header from './components/Header'
import Produtos from './containers/Produtos'

//styles
import { GlobalStyle } from './styles'

//redux
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <>
    <Provider store={store}>
        <Header />
        <Produtos />
      </div>
    </>
    </Provider>
  )
}

export default App
