import React, { Fragment } from 'react';
import Form from '../../../../components/FormFields';
import FormHeading from '../../../../components/FormHeading';

export default function Company() {
  const fields = [
    {
      label: 'Company name',
      type: 'text',
      value: '',
    },
    {
      label: 'Company Email Id',
      type: 'email',
      value: '',
    },
    {
      label: 'Account Email Id',
      type: 'email',
      value: '',
    },
    {
      label: 'Tax type',
      type: 'select',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
    },
    {
      label: 'Tax number',
      type: 'select',
      value: '',
      selectOption: [{ title: 'Mr' }, { title: 'Mrs.' }, { title: 'Miss' }],
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
  ];
  return (
    <Fragment>
      <FormHeading
        label="Add Company"
        linkDetails={{
          text: 'Back',
          link: '/administration/organization/company',
        }}
        grid
      >
        {fields.map(fields => (
          <Form {...fields} />
        ))}
      </FormHeading>
    </Fragment>
  );
}
