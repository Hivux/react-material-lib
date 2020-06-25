import React, { Component } from 'react';

import Sidenav from '../../components/Navigation/Sidenav/Sidenav';
import TopBar from '../../components/Navigation/TopBar/TopBar';
import AuxDiv from '../AuxDiv/AuxDiv';

export class Layout extends Component {
  state = {
    showSidenav: this.props.settings.showSidenav,
    showToggle: this.props.settings.showToggle,
    anchorEl: this.props.settings.anchorEl,
    userMenu: this.props.settings.userMenu,
    menu: this.props.settings.menu
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  sidenavToggleHandler = () => {
    this.setState((prevState) => {
      return { showSidenav: !prevState.showSidenav }
    })
  }

  sidenavClose = () => {
    this.setState({ showSidenav: false })
  }

  render() {
    return (
      <AuxDiv>
        <TopBar
          appName='React Material Lib'
          handleSidenavToggle={this.sidenavToggleHandler}
          handleClickAway={this.sidenavClose}
          handleMenu={this.handleMenu}
          handleClose={this.handleClose}
          anchorEl={this.state.anchorEl}
          userMenuOptions={this.state.userMenu}
          showToggle={this.state.showToggle}
        />
        <Sidenav
          handleSidenavToggle={this.sidenavToggleHandler}
          open={this.state.showSidenav}
          showToggle={this.state.showToggle}
          menu={this.state.menu}
        />
        <main>{this.props.children}</main>
      </AuxDiv>
    )
  }
}
