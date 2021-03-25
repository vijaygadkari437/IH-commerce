import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextBox from '../../components/FormFields';

const useStyles = makeStyles(theme => ({
  customergrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: 20,
    gridRowGap: 20,
    margin: 30,
    marginTop: 100,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();

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
      label: 'Password',
      type: 'password',
      value: '',
    },
    {
      label: 'Phone no',
      type: 'number',
      value: '',
    },
    {
      label: 'Select Search',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Normal Select',
      type: 'select',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
    },
    {
      label: 'Radio Button',
      type: 'radio',
      value: '',
    },
    {
      label: 'Checkbox Button',
      type: 'checkbox',
      value: '',
    },
    {
      label: 'Phone no',
      type: 'phone',
      fieldType: 'tel',
      value: '',
    },
    {
      label: 'Switch Button',
      type: 'switch',
      value: '',
    },
    {
      label: '',
      type: 'file',
      value: ' ',
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
          <Typography variant="h2" noWrap>
            IH Commerce
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.customergrid}>
          {fields.map(fields => (
            <TextBox {...fields} />
          ))}
        </div>
      </main>
    </div>
  );
}
