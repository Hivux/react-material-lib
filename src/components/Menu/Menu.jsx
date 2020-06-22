import Menu from '@material-ui/core/Menu';
import React from 'react';

import MenuItems from './MenuItems/MenuItems';

const menu = (props) => {
  const open = Boolean(props.link)

  return (
    <Menu
      id={props.id}
      anchorEl={props.link}
      open={open}
      onClose={props.onClose}
    >
      <MenuItems items={props.items} />
    </Menu>
  )
}

export default menu
