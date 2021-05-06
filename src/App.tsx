import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Level1 } from './pages/level1'
import { Level2 } from './pages/level2'

function App() {
  return (
    <Router>
      <div className='App'>
        <Menu>
          <Link to='/level1'>
            <Menu.Item name='level1'>Level 1</Menu.Item>
          </Link>
          <Link to='/level2'>
            <Menu.Item name='level2'>Level 2</Menu.Item>
          </Link>
        </Menu>
      </div>

      <Switch>
        <Route exact path='/' component={Level1} />
        <Route exact path='/level1' component={Level1} />
        <Route exact path='/level2' component={Level2} />
      </Switch>
    </Router>
  )
}

export default App
