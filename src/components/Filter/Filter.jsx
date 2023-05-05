import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

export default function Filter({ value, handleChange }) {
  return (
    <StyledFilter>
      Find by name
      <input name="filter" type="text" value={value} onChange={handleChange} />
    </StyledFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
