import PropTypes from 'prop-types';
import React from './App.css';
import Checkbox from './Checkbox';
import DataFetching from './DataFetching';
import ParentProps from './ParentProps';

function AppGuestList() {
  return (
    <>
      <h1>Data</h1>
      <Checkbox />
      <DataFetching />
    </>
  );
}

export default AppGuestList;
