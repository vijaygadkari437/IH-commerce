import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function AutoComplete() {
  return (
    <Autocomplete
      options={selectOption}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      size="small"
      renderInput={params => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
    />
  );
}

// Select Option
const selectOption = [
  { title: 'The Great Dictator' },
  { title: 'Cinema Paradiso' },
  { title: 'The Lives of Others' },
  { title: 'Grave of the Fireflies' },
  { title: 'Paths of Glory' },
];
