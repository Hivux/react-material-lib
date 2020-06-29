import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
})

class NestedList extends Component {
  state = { open: {} }

  handleClick = (key) => () => {
    this.setState({ [key]: !this.state[key] })
  }

  render() {
    const { lists, classes } = this.props

    return (
      <div>
        <List component='nav' className={classes.root}>
          {lists.map(({ label, icon: Icon, url, children }) => {
            const open = this.state[label] || false

            let arrowIcon = null
            if (children && children.length) {
              arrowIcon = open ? <ExpandLess /> : <ExpandMore />
            }

            return (
              <div key={label}>
                <ListItem
                  button
                  to={url}
                  component={Link}
                  onClick={this.handleClick(label)}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                  {arrowIcon}
                </ListItem>
                {children ? (
                  <Collapse in={open} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                      {(children || []).map(
                        ({ label: childLabel, icon: ChildIcon, url }) => (
                          <ListItem
                            key={childLabel}
                            button
                            to={url}
                            component={Link}
                            className={classes.nested}
                          >
                            <ListItemIcon>
                              <ChildIcon />
                            </ListItemIcon>
                            <ListItemText primary={childLabel} />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Collapse>
                ) : null}
              </div>
            )
          })}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(NestedList)
