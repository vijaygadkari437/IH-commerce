import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Form from '../../../components/FormFields';
import FormHeading from '../../../components/FormHeading';

const useStyles = makeStyles(theme => ({
  customerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: 20,
    gridRowGap: 20,
  },
}));

export default function User() {
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
      label: 'Change Password',
      type: 'button',
      value: ' ',
      color: 'primary',
      variant: 'contained',
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
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: params =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') ||
          ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <Fragment>
      <FormHeading label="User" buttontext="Back" grid>
        {fields.map(field => (
          <Form {...field} />
        ))}
      </FormHeading>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Fragment>
  );
}
