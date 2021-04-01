import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from '../../../components/FormFields';

const useStyles = makeStyles(theme => ({
  customerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: 20,
    gridRowGap: 20,
    margin: 20,
  },
}));

export default function Merchant() {
  const classes = useStyles();
  const fields = [
    {
      label: 'Customer',
      type: 'select',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
    },
    {
      label: 'Title',
      type: 'select',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
    },
    {
      label: 'First name',
      type: 'text',
      value: '',
    },
    {
      label: 'Middle name',
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
      type: 'phone',
      fieldType: 'tel',
      value: '',
    },
    {
      label: 'Address',
      type: 'text',
      value: '',
      addClass: 'fullWidth',
    },
    {
      label: 'Country/Region',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'State/Province',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'City',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Pincode',
      type: 'number',
      value: '',
    },
    {
      label: 'Business category',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Change Password',
      type: 'button',
      value: ' ',
      color: 'primary',
      variant: 'contained',
    },
    {
      label: 'Role',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
  ];
  return (
    <div className={classes.customerGrid}>
      {fields.map(fields => (
        <Form {...fields} />
      ))}
    </div>
  );
}
