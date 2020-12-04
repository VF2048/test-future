import React from 'react';
import PropTypes from 'prop-types';

function Selected(props) {
  const { selected } = props;
  return (
    <table>
      <thead />
      <tbody>
        <tr>
          <th>id</th>
          <th>{selected.id}</th>
        </tr>
        <tr>
          <th>firstName</th>
          <th>{selected.firstName}</th>
        </tr>
        <tr>
          <th>lastName</th>
          <th>{selected.lastName}</th>
        </tr>
        <tr>
          <th>email</th>
          <th>{selected.email}</th>
        </tr>
        <tr>
          <th>phone</th>
          <th>{selected.phone}</th>
        </tr>
      </tbody>
    </table>
  );
}

Selected.defaultProps = { selected: {} };

Selected.propTypes = {
  selected: PropTypes.objectOf(),
};

export default Selected;
