import React, { Fragment } from 'react';
import Form from '../../../components/FormFields';
import FormHeading from '../../../components/FormHeading';

export default function Merchant() {
  const fields = [
    {
      label: 'Customer',
      type: 'select',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
    },
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
    <Fragment>
      <FormHeading label="Merchant" grid>
        {fields.map(fields => (
          <Form {...fields} />
        ))}
      </FormHeading>
    </Fragment>
  );
}
