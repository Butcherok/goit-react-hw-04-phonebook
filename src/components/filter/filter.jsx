import PropTypes from 'prop-types';
import { FilterInput, FilterLabel, Filters } from './filter.styled';

export const Filter = ({ contactChange, filter }) => {
  return (
    <Filters>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={contactChange}
      />
    </Filters>
  );
};

Filter.propTypes = {
  contactChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
