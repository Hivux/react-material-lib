import { Layout, Test } from '@hivux/react-material-lib';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

const App = () => {
  const settings = {
    showSidenav: false,
    showToggle: true,
    anchorEl: null,
    userMenu: [
      {
        label: 'Profile',
        url: ''
      },
      {
        label: 'My account',
        url: ''
      }
    ],
    menu: [
      {
        label: 'Inbox',
        icon: InboxIcon,
        url: ''
      },
      {
        label: 'Components',
        icon: DraftsIcon,
        children: [
          {
            label: 'Test',
            icon: SendIcon,
            url: '/test'
          }
        ]
      }
    ]
  }

  return (
    <div>
      <Layout settings={settings}>
        <Switch>
          <Route path='/test' component={Test} />
          <Route path='/' exact component={Layout} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  )
}

export default withRouter(App)
