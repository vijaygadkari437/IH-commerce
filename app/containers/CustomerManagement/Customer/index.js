import React from 'react';
import DataTable from '../../../components/DataTable';
import FormHeading from '../../../components/FormHeading';

export default function Customer() {
  return (
    <FormHeading
      label="Customer"
      linkDetails={{
        text: 'Add Customer',
        link: '/customer-management/customer/add-customer',
      }}
    >
      <DataTable />
    </FormHeading>
  );
}
