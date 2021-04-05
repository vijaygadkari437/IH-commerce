import React, { useEffect, Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Collapse, Icon, useTheme } from '@material-ui/core';
import { withRouter } from 'react-router';

const drawerWidth = 260;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  listItemIcon: {
    minWidth: 40,
  },
  subListItem: {
    paddingLeft: 30,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(11) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(11) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

function Sidebar({ openDrawer, setOpenDrawer, history }) {
  const classes = useStyles();
  const theme = useTheme();
  const listItem = [
    {
      id: 1,
      ListItemText: 'Customer Management',
      ListItemIcon: 'perm_identity',
      ListItemPath: '',
      SubMenu: [
        {
          ListItemText: 'Customer',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/customer',
          SubMenu: [],
        },
        {
          ListItemText: 'Customer Staff',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/customer-staff',
          SubMenu: [],
        },
        {
          ListItemText: 'Merchant',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/merchant',
          SubMenu: [],
        },
        {
          ListItemText: 'Merchant Staff',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/merchant-staff',
          SubMenu: [],
        },
        {
          ListItemText: 'User',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/user',
          SubMenu: [],
        },
      ],
    },
    {
      id: 2,
      ListItemText: 'Administration',
      ListItemIcon: 'move_to_inbox',
      ListItemPath: '',
      SubMenu: [
        {
          ListItemText: 'Customer',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/admin',
          SubMenu: [
            {
              ListItemText: 'Category',
              ListItemIcon: '',
              ListItemPath: '/category',
              SubMenu: [],
            },
          ],
        },
      ],
    },
  ];
  const [activeList, setActiveList] = React.useState([]);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    let cur = false;
    for (let i = 0; i < listItem.length; i += 1) {
      for (let j = 0; j < listItem[i].SubMenu.length; j += 1) {
        console.log(listItem[i].id); //demo to represt optimised code
        if (listItem[i].SubMenu[j].ListItemPath === window.location.pathname) {
          setActiveList([listItem[i].id]);
          cur = true;
          break;
        }
        if (cur) break;
      }
    }
  }, []);

  const handleClick = i => {
    if (activeList.includes(i)) {
      activeList.indexOf(i) !== -1 &&
        activeList.splice(activeList.indexOf(i), 1); // delete the present item
      setActiveList([...activeList]); // set the new array without this item
    } else {
      activeList.length = 0;
      setActiveList([...activeList, i]);
    }
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: openDrawer,
        [classes.drawerClose]: !openDrawer,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {listItem.map((li, i) => (
          <Fragment>
            <ListItem button onClick={() => handleClick(li.id)}>
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <Icon>{li.ListItemIcon}</Icon>
              </ListItemIcon>
              <ListItemText primary={li.ListItemText} />
            </ListItem>
            {li.SubMenu.map(subLi => (
              <Collapse
                in={activeList.includes(li.id)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem
                    button
                    className={classes.subListItem}
                    selected={subLi.ListItemPath === window.location.pathname}
                    onClick={() => history.push(subLi.ListItemPath)}
                  >
                    <ListItemIcon
                      classes={{
                        root: classes.listItemIcon,
                      }}
                    >
                      <Icon>{subLi.ListItemIcon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={subLi.ListItemText} />
                  </ListItem>
                </List>
              </Collapse>
            ))}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withRouter(Sidebar);
