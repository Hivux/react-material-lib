import React from 'react'

import { Gordo } from '@hivux/react-material-lib'
import Layout from '@hivux/react-material-lib'
import '@hivux/react-material-lib/dist/index.css'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
