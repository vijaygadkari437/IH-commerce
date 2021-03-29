import React, { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse, Icon } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from 'react-router';

// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
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
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function CustomerStaff({ history }) {
  const classes = useStyles();
  const theme = useTheme();
  const listItem = [
    {
      id: 1,
      ListItemText: 'Customer Management',
      ListItemIcon: 'move_to_inbox',
      ListItemPath: '',
      SubMenu: [
        {
          ListItemText: 'Customer',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/customer',
          SubMenu: [],
        },
        {
          ListItemText: 'Customer Staff',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/customer-staff',
          SubMenu: [],
        },
        {
          ListItemText: 'Merchant',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/merchant',
          SubMenu: [],
        },
        {
          ListItemText: 'Merchant Staff',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/merchant-staff',
          SubMenu: [],
        },
        {
          ListItemText: 'User',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/user',
          SubMenu: [],
        },
      ],
    },
    {
      id: 2,
      ListItemText: 'Customer Management',
      ListItemIcon: 'move_to_inbox',
      ListItemPath: '',
      SubMenu: [
        {
          ListItemText: 'Customer',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/customer',
          SubMenu: [],
        },
        {
          ListItemText: 'Customer Staff',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/customer-staffs',
          SubMenu: [],
        },
        {
          ListItemText: 'Merchant',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/merchant',
          SubMenu: [],
        },
        {
          ListItemText: 'Merchant Staff',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/merchant-staff',
          SubMenu: [],
        },
        {
          ListItemText: 'User',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/user',
          SubMenu: [],
        },
      ],
    },
  ];
  const [openDrawer, setOpenDrawer] = useState(true);
  const [activeList, setActiveList] = useState([]);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    console.log(activeList);
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" noWrap>
            IH Commerce
          </Typography>
        </Toolbar>
      </AppBar>
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
                <ListItemIcon>
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
                      className={classes.nested}
                      // onClick={() => history.push(subLi.ListItemPath)}
                    >
                      <ListItemIcon>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph />
      </main>
    </div>
  );
}

export default withRouter(CustomerStaff);
