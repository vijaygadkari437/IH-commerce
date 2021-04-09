import React, { Fragment } from 'react';
// import { CSVLink } from 'react-csv';

export default () => {
  const mystyle = {
    paddingTop: 200,
    marginLeft: 200,
  };
  const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Email', key: 'email' },
  ];

  const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
    { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
    { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
  ];
  return (
    // <CSVLink data={data} headers={headers} separator={';'}>
    //   Download me
    // </CSVLink>
    <div>heelo</div>
  );
};

