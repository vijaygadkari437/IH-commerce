import React from 'react';
import DataTable from '../../../components/DataTable';
import FormHeading from '../../../components/FormHeading';

export default function Customer() {
  return (
    <FormHeading label="Customer" buttontext="Add Customer">
      <DataTable />
    </FormHeading>
  );
}
