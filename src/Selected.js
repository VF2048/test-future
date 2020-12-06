import React from 'react';
import PropTypes from 'prop-types';

function Selected(props) {
  const { selected } = props;
  let { address } = selected;
  if (!address) {
    address = {
      streetAddress: 'бездомный',
      city: 'бездомный',
      state: 'бездомный',
      zip: 'бездомный',
    };
  }
  return (
    <div>
      <body>
        Выбран пользователь
        <b>
          {` ${selected.firstName}`}
          {` ${selected.lastName}`}
        </b>
        <br />
        Описание:
        <textarea
          disabled
          rows="1"
          cols="100"
          value={` ${selected.description}`}
        />
        <br />
        Адрес проживания:
        <b>{address.streetAddress}</b>
        <br />
        Город:
        <b>{` ${address.city}`}</b>
        <br />
        Провинция/штат:
        <b>{` ${address.state}`}</b>
        <br />
        Индекс:
        <b>{` ${address.zip}`}</b>
      </body>
    </div>
  );
}

Selected.defaultProps = { selected: {} };

Selected.propTypes = {
  selected: PropTypes.objectOf(),
};

export default Selected;
