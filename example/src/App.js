import { Layout } from '@hivux/react-material-lib';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

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
        url: '/test'
      },
      {
        label: 'Components',
        icon: DraftsIcon,
        url: '',
        children: [
          {
            label: 'Test',
            icon: SendIcon,
            url: '/chaves'
          }
        ]
      }
    ]
  }

  return (
    <div>
      <Layout settings={settings} />
    </div>
  )
}

export default App
