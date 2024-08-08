import { Provider } from 'react-redux'
//Componentes e Containers
import Header from './components/Header'
import Produtos from './containers/Produtos'
// Styles
import { GlobalStyle } from './styles'
//Redux
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
