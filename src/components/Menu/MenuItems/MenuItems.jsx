import MenuItem from '@material-ui/core/MenuItem';
import React, { Component } from 'react';

class MenuItems extends Component {
  render() {
    return (
      <div>
        {(this.props.items || []).map((item, index) => (
          <MenuItem key={index}>{item.label}</MenuItem>
        ))}
      </div>
    )
  }
}

export default MenuItems
