import AppBar from '@material-ui/core/AppBar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

import Menu from '../../Menu/Menu';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
})

const topbar = (props) => {
  const { classes } = props

  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          {props.showToggle ? (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              onClick={props.handleSidenavToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography variant='h6' className={classes.title}>
            {props.appName}
          </Typography>
          <IconButton
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={props.handleMenu}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id='menu-appbar'
            link={props.anchorEl}
            onClose={props.handleClose}
            items={props.userMenuOptions}
          />
        </Toolbar>
      </AppBar>
    </ClickAwayListener>
  )
}

export default withStyles(styles)(topbar)
