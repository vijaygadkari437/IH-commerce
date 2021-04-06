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
import {
  Box,
  Collapse,
  Hidden,
  Icon,
  Typography,
  useTheme,
} from '@material-ui/core';
import { withRouter } from 'react-router';

const drawerWidth = 280;
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
          id: 2,
          ListItemText: 'Customer',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/customer',
          SubMenu: [],
        },
        {
          id: 3,
          ListItemText: 'Customer Staff',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/customer-staff',
          SubMenu: [],
        },
        {
          id: 4,
          ListItemText: 'Merchant',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/merchant',
          SubMenu: [],
        },
        {
          id: 5,
          ListItemText: 'Merchant Staff',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/merchant-staff',
          SubMenu: [],
        },
        {
          id: 6,
          ListItemText: 'User',
          ListItemIcon: 'remove',
          ListItemPath: '/customer-management/user',
          SubMenu: [],
        },
      ],
    },
    {
      id: 7,
      ListItemText: 'Administration',
      ListItemIcon: 'move_to_inbox',
      ListItemPath: '',
      SubMenu: [
        {
          id: 8,
          ListItemText: 'Customer',
          ListItemIcon: 'remove',
          ListItemPath: '',
          SubMenu: [
            {
              id: 9,
              ListItemText: 'Category',
              ListItemIcon: '',
              ListItemPath: '/category',
              SubMenu: [],
            },
            {
              id: 10,
              ListItemText: 'Category',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
          ],
        },
        {
          id: 11,
          ListItemText: 'Geography',
          ListItemIcon: 'remove',
          ListItemPath: '',
          SubMenu: [
            {
              id: 12,
              ListItemText: 'Country',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
            {
              id: 13,
              ListItemText: 'State',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
            {
              id: 14,
              ListItemText: 'Country/Region',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
            {
              id: 15,
              ListItemText: 'Region',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
          ],
        },
        {
          id: 16,
          ListItemText: 'Subscription',
          ListItemIcon: 'remove',
          ListItemPath: '',
          SubMenu: [
            {
              id: 17,
              ListItemText: 'Market Management',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
            {
              id: 18,
              ListItemText: 'APP Master',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
            {
              id: 19,
              ListItemText: 'Pricing Plan',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
            {
              id: 20,
              ListItemText: 'Bundle Plan',
              ListItemIcon: '',
              ListItemPath: '',
              SubMenu: [],
            },
            {
              id: 21,
              ListItemText: 'Bundle Pricing',
              ListItemIcon: '',
              ListItemPath: '',
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
    activeList.length = 0;
  };

  const handleActiveDrawer = () => {
    let cur = false;
    for (let i = 0; i < listItem.length; i += 1) {
      for (let j = 0; j < listItem[i].SubMenu.length; j += 1) {
        // console.log(listItem[i].id); //demo to represt optimised code
        if (listItem[i].SubMenu[j].ListItemPath === window.location.pathname) {
          setActiveList([listItem[i].id]);
          cur = true;
          break;
        }
        if (cur) break;
      }
    }
  };

  useEffect(() => {
    handleActiveDrawer();
  }, []);

  useEffect(() => {
    openDrawer && handleActiveDrawer();
  }, [openDrawer]);

  const handleClick = i => {
    if (activeList.includes(i)) {
      activeList.indexOf(i) !== -1 &&
        activeList.splice(activeList.indexOf(i), 1); // delete the present item
      setActiveList([...activeList]); // set the new array without this item
    } else {
      // activeList.length = 0;
      setActiveList([...activeList, i]);
    }
  };

  const SidebarList = () => (
    <Fragment>
      <div className={classes.toolbar}>
        <Box mx="auto">
          <Typography
            variant="h2"
            noWrap
            className={clsx({
              [classes.hide]: openDrawer,
            })}
          >
            Commersify
          </Typography>
        </Box>
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
            <ListItem
              button
              title={li.ListItemText}
              onClick={() =>
                li.SubMenu.length > 0
                  ? handleClick(li.id)
                  : history.push(li.ListItemPath)
              }
            >
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
                    onClick={() =>
                      subLi.SubMenu.length > 0
                        ? handleClick(subLi.id)
                        : history.push(subLi.ListItemPath)
                    }
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
                  {subLi.SubMenu.map(thirdLi => (
                    <Collapse
                      in={activeList.includes(subLi.id)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItem
                          button
                          className={classes.subListItem}
                          selected={
                            thirdLi.ListItemPath === window.location.pathname
                          }
                          onClick={() => history.push(thirdLi.ListItemPath)}
                        >
                          <ListItemIcon
                            classes={{
                              root: classes.listItemIcon,
                            }}
                          >
                            <Icon>{thirdLi.ListItemIcon}</Icon>
                          </ListItemIcon>
                          <ListItemText primary={thirdLi.ListItemText} />
                        </ListItem>
                      </List>
                    </Collapse>
                  ))}
                </List>
              </Collapse>
            ))}
          </Fragment>
        ))}
      </List>
    </Fragment>
  );

  return (
    <Fragment>
      <Hidden xsDown>
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
          <SidebarList />
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={openDrawer}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <SidebarList />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}

export default withRouter(Sidebar);
