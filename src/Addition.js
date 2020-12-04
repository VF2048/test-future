import React from 'react';
import PropTypes from 'prop-types';

class Addition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: false, addButton: '' };
    this.elem = {};
  }

  change = (e) => {
    const { add } = this.props;
    this.elem[e.target.id] = e.target.value;
    if (
      this.elem.id &&
      this.elem.firstName &&
      this.elem.lastName &&
      this.elem.email &&
      this.elem.phone
    ) {
      this.setState({
        addButton: (
          <button
            type="button"
            onClick={() => {
              this.setState({
                input: false,
                addButton: '',
              });
              add(this.elem);
            }}
          >
            Добавить в таблицу
          </button>
        ),
      });
    }
  };

  render() {
    const { input } = this.state;
    const { addButton } = this.state;
    if (input) {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>email</th>
                <th>phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input id="id" onChange={this.change} />
                </th>
                <th>
                  <input id="firstName" onChange={this.change} />
                </th>
                <th>
                  <input id="lastName" onChange={this.change} />
                </th>
                <th>
                  <input id="email" onChange={this.change} />
                </th>
                <th>
                  <input id="phone" onChange={this.change} />
                </th>
              </tr>
            </tbody>
          </table>
          {addButton}
        </div>
      );
    }
    return (
      <button
        type="button"
        onClick={() => {
          this.setState({ input: true });
        }}
      >
        Добавить
      </button>
    );
  }
}

Addition.defaultProps = { add: () => {} };

Addition.propTypes = {
  add: PropTypes.func,
};

export default Addition;
