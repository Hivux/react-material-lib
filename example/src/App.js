import React from 'react'

import { Layout } from '@hivux/react-material-lib'
import '@hivux/react-material-lib/dist/index.css'
import { Redirect, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={Layout} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
