import React, { Fragment } from 'react';
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
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Collapse, Icon } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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

export default function CustomerStaff() {
  const classes = useStyles();
  const theme = useTheme();
  const listItem = [
    {
      ListKey: 'mainCustomer',
      ListItemText: 'Customer Management',
      ListItemIcon: 'move_to_inbox',
      ListItemPath: '',
      SubMenu: [
        {
          ListKey: 'secondCustomer',
          ListItemText: 'Customer',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/customer',
          SubMenu: [
            {
              ListKey: 'customerStaff',
              ListItemText: 'Customer Staff',
              ListItemIcon: 'InboxIcon',
              ListItemPath: '/customer',
              SubMenu: [],
            },
          ],
        },

        {
          ListKey: 'secondMerchant',
          ListItemText: 'Merchant',
          ListItemIcon: 'InboxIcon',
          ListItemPath: '/merchant',
          SubMenu: [
            {
              ListKey: 'merchantStaff',
              ListItemText: 'Merchant Staff',
              ListItemIcon: 'InboxIcon',
              ListItemPath: '/merchant-staff',
              SubMenu: [],
            },
          ],
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
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [openList, setOpenList] = React.useState([]);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleClick = menu => {
    // console.log('handleClick called ', menu);
    const newOpenList = [...openList];

    if (newOpenList.includes(menu)) {
      const index = newOpenList.indexOf(menu);
      if (index > -1) {
        newOpenList.splice(index, 1);
      }
    } else {
      newOpenList.push(menu);
    }
    setOpenList(newOpenList);
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
          {listItem.map(li => (
            <Fragment>
              <ListItem button onClick={() => handleClick(li.ListKey)}>
                <ListItemIcon>
                  <Icon>{li.ListItemIcon}</Icon>
                </ListItemIcon>
                <ListItemText primary={li.ListItemText} />
              </ListItem>
              <Collapse
                in={openList.includes(li.ListKey)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {li.SubMenu.map(subli => (
                    <Fragment>
                      <ListItem
                        button
                        className={classes.nested}
                        onClick={() => handleClick(subli.ListKey)}
                      >
                        <ListItemIcon>
                          <Icon>{subli.ListItemIcon}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={subli.ListItemText} />
                      </ListItem>
                      <Collapse
                        in={openList.includes(subli.ListKey)}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {subli.SubMenu.map(thirdli => (
                            <ListItem
                              button
                              className={classes.nested}
                              onClick={() => handleClick(thirdli.ListKey)}
                            >
                              <ListItemIcon>
                                <Icon>{thirdli.ListItemIcon}</Icon>
                              </ListItemIcon>
                              <ListItemText primary={thirdli.ListItemText} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </Fragment>
                  ))}
                </List>
              </Collapse>
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
