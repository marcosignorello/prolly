import {Layout} from './layout'
import './App.css'

const App = props => {
  return (
    <Layout>
      <div className="App">{props.children}</div>
    </Layout>
  )
}

export default App
