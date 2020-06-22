import '@hivux/react-material-lib/dist/index.css';

import { Layout } from '@hivux/react-material-lib';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

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
        icon: InboxIcon
      },
      {
        label: 'Drafts',
        icon: DraftsIcon,
        children: [
          {
            label: 'Sent Items',
            icon: SendIcon
          }
        ]
      }
    ]
  }

  return (
    <div>
      <Layout settings={settings}>
        <Switch>
          <Route path='/' exact component={Layout} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
