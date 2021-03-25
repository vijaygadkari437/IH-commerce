import React from 'react';
// import TextBox from '../../components/TextBox';
// import PasswordBox from '../../components/PasswordBox';
// import PhoneNoBox from '../../components/PhoneNoBox';
// import TitleSelect from '../../components/TitleSelect';
// import Select2 from '../../components/Select2';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  customerforms: {
    margin: 20,
  },
  customer3grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: 20,
    gridRowGap: 20,
  },
  customer2grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridColumnGap: 20,
  },
  customerfullwidth: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
    '& TextBox': {
      width: '100%',
    },
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fields = [
    {
      label: 'First name',
      type: 'text',
      value: '',
    },
    {
      label: 'Last name',
      type: 'text',
      value: '',
    },
    {
      label: 'Email',
      type: 'email',
      value: '',
    },
    {
      label: 'Phone no',
      type: 'number',
      value: '',
    },
    {
      label: 'Code',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Country',
      type: 'select',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" noWrap>
            IH Commerce
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            'Customer',
            'Customer Staff',
            'Merchant',
            'Merchant Staff',
            'User',
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.customerforms}>
          <h1>Customer</h1>
          <div className={classes.customer3grid}>
            {fields.map(f =>
              f.type === 'autocomplete' ? (
                <Autocomplete
                  id="combo-box-demo"
                  options={f.selectOption}
                  getOptionLabel={option => option.title}
                  renderInput={params => (
                    <TextField {...params} label={f.label} variant="outlined" />
                  )}
                />
              ) : f.type === 'select' ? (
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={title}
                  onChange={handleChange}
                  label="Title"
                />
              ) : (
                <TextField
                  label={f.label}
                  type={f.type}
                  variant="outlined"
                  autoComplete="off"
                />
              ),
            )}
            {/* <TitleSelect />
            <TextBox label="First name" />
            <TextBox label="Middle name" />
            <TextBox label="Last name" />
            <PasswordBox />
            <TextBox label="E-mail" type="email" />
            <PhoneNoBox />
            <TextBox label="Phone no" />
            <Select2 label="Business type" />
            <TextBox label="Business name" />
            <TextBox label="Business website" />
            <TextBox label="Address" />
            <Select2 label="Country/Region" />
            <Select2 label="State/Province" />
            <Select2 label="City" />
            <TextBox label="Pincode" />
            <Select2 label="Timezone" />
            <Select2 label="Currency" />
            <Select2 label="Company" />
            <Select2 label="Entity" />
            <TextBox label="Channel Partner name" />
            <Select2 label="Category" />
            <Select2 label="Persona" />
            <Select2 label="Account manager" />
            <TitleSelect />
            <TextBox label="Tax Number" /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
