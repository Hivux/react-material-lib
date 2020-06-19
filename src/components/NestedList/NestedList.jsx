import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
})

class NestedList extends React.Component {
  state = { open: {} }

  handleClick = (key) => () => {
    this.setState({ [key]: !this.state[key] })
  }

  render() {
    const { lists, classes } = this.props

    return (
      <div>
        <List component='nav' className={classes.root}>
          {lists.map(({ label, icon: Icon, children }) => {
            const open = this.state[label] || false
            return (
              <div key={label}>
                <ListItem button onClick={this.handleClick(label)}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                  {open && children ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {children ? (
                  <Collapse in={open} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                      {(children || []).map(
                        ({ label: childLabel, icon: ChildIcon }) => (
                          <ListItem
                            key={childLabel}
                            button
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
