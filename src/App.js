import {Layout} from './layout'
import './App.css'

const App = props => {
  return (
    <Layout>
      <div className="App" id="dev-test">{props.children}</div>
    </Layout>
  )
}

export default App
