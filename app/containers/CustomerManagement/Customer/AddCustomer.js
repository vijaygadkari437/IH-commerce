import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from '../../../components/FormFields';
import FormHeading from '../../../components/FormHeading';

const useStyles = makeStyles(theme => ({
  customerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 20,
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.10)',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 4,
  },
}));

export default function AddCustomer() {
  const classes = useStyles();
  const fields = [
    {
      label: 'Title',
      textlabel: 'First name',
      type: 'title',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
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
      label: 'Business type',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Business name',
      type: 'text',
      value: '',
    },
    {
      label: 'Business website',
      type: 'text',
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
      label: 'Timezone',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Currency',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Company',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Entity',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Channel Partner',
      type: 'checkbox',
      value: '',
    },
    {
      label: 'Channel Partner Name',
      type: 'text',
      value: '',
    },
    {
      label: 'Category',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Persona',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Account manager',
      type: 'autocomplete',
      value: '',
      selectOption: [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
      ],
    },
    {
      label: 'Tax type',
      type: 'select',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
    },
    {
      label: 'Tax number',
      type: 'text',
      value: '',
    },
    {
      label: 'Change Password',
      type: 'button',
      value: ' ',
      color: 'primary',
      variant: 'contained',
    },
    {
      label: 'Attach Logo',
      type: 'dropzone',
      value: ' ',
      fileClass: 'attachFileClass',
    },
  ];
  return (
    <Fragment>
      <FormHeading label="Customer" />
      <div className={classes.customerGrid}>
        {fields.map(fields => (
          <Form {...fields} />
        ))}
      </div>
    </Fragment>
  );
}
