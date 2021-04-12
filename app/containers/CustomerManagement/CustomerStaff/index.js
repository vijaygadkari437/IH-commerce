import React, { Fragment } from 'react';
import DataTable from '../../../components/DataTable';
import FormHeading from '../../../components/FormHeading';
import Form from '../../../components/FormFields';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.10)',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 20,
  },
}));
function createData(
  tableCell1,
  tableCell2,
  tableCell3,
  tableCell4,
  tableCell5,
  tableCell6,
  tableCell7,
  tableCell8,
  tableCell9,
  tableCell10,
  tableCell11,
) {
  return {
    tableCell1,
    tableCell2,
    tableCell3,
    tableCell4,
    tableCell5,
    tableCell6,
    tableCell7,
    tableCell8,
    tableCell9,
    tableCell10,
    tableCell11,
  };
}
const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3, 67, 4.3, 67, 4.3, 67),
  createData('Donut', 452, 25.0, 51, 4.9, 67, 4.3, 67, 4.3, 67),
  createData('Eclair', 262, 16.0, 24, 6.0, 67, 4.3, 67, 4.3, 67),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 67, 4.3, 67, 4.3, 67),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 67, 4.3, 67, 4.3, 67),
  createData('Honeycomb', 408, 3.2, 87, 6.5, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67, 4.3, 67),
];
const headCells = [
  {
    id: 'cId',
    numeric: false,
    label: 'Sr No.',
  },
  {
    id: 'cName',
    numeric: false,
    label: 'Customer Name',
  },
  {
    id: 'sName',
    numeric: false,
    label: 'Staff Name',
  },
  { id: 'cRole', numeric: false, label: 'Email' },
  { id: 'cEmail', numeric: false, label: 'Email' },
  { id: 'cPhone', numeric: false, label: 'Phone' },
  {
    id: 'cCountry',
    numeric: false,
    label: 'Country',
  },
  {
    id: 'cCity',
    numeric: false,
    label: 'City',
  },
  {
    id: 'cStatus',
    numeric: true,
    label: 'Status',
  },
  {
    id: 'cActions',
    numeric: true,
    label: 'Actions',
  },
];
const fields = [
  {
    label: 'Customer Name',
    type: 'text',
    value: '',
  },
  {
    label: 'Staff Name',
    type: 'text',
    value: '',
  },
  {
    label: 'Email',
    type: 'email',
    value: '',
  },
  {
    label: 'Country',
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
    label: 'Role',
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
];

export default function CustomerStaff() {
  const classes = useStyles();
  return (
    <Fragment>
      <FormHeading
        grid
        label="Customer Staff"
        linkDetails={{
          text: 'Add Customer Staff',
          link: '/customer-management/customer-staff/add-customer-staff/',
        }}
      >
        {fields.map(field => (
          <Form {...field} />
        ))}
      </FormHeading>
      <FormHeading>
        <DataTable rows={rows} headCells={headCells} />
      </FormHeading>
    </Fragment>
  );
}
