import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      nav: 'AAA',
      navigate: {
        id: '▲',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  }

  componentDidMount() {
    const { data } = this.props;
    this.list(data);
    this.sorting('id');
  }

  filtration = (e) => {
    const { data } = this.props;
    if (e === '') this.list(data);
    const newdata = data.filter((elem) => {
      let count = 0;
      const val = Array.from(e.matchAll(/(?<name>\S+?)($|\t)/g));
      const search = [];
      val.map((el) => search.push(el.groups.name));
      const elems = [
        elem.id.toString(),
        elem.firstName,
        elem.lastName,
        elem.email,
        elem.phone,
      ];
      const dataV = (dE, sE) => {
        if (sE === dE) {
          count += 1;
        }
      };
      const searchV = (sE) => elems.forEach((dataE) => dataV(dataE, sE));
      search.forEach((searchE) => searchV(searchE));
      if (count >= search.length) {
        return true;
      }
      return false;
    });
    this.list(newdata);
    this.setState({ newData: true });
  };

  list(data) {
    const { select } = this.props;
    const tables = [];
    const sizeP = 32;
    for (let i = 0; i < Math.ceil(data.length / sizeP); i++) {
      tables.push(
        data.slice(i * sizeP, i * sizeP + sizeP).map((elem) => (
          <tr onClick={() => select(elem)}>
            <th>{elem.id}</th>
            <th>{elem.firstName}</th>
            <th>{elem.lastName}</th>
            <th>{elem.email}</th>
            <th>{elem.phone}</th>
            {/* <th>{`${elem.address.streetAddress},
                ${elem.address.city},
                ${elem.address.state},
                ${elem.address.zip}`}</th>
            <th>{elem.description}</th> */}
          </tr>
        )),
      );
    }
    this.setState({
      list: tables,
      table: <tbody>{tables[0]}</tbody>,
    });
  }

  sorting(elem) {
    const { data } = this.props;
    let { nav } = this.state;
    const { navigate } = this.state;

    if (navigate[elem] !== '') {
      if (navigate[elem] === '▲') navigate[elem] = '▼';
      else navigate[elem] = '▲';
    } else {
      navigate[nav] = '';
      navigate[elem] = '▲';
    }

    if (elem === nav) {
      data.reverse();
    } else if (elem === 'id') {
      data.sort((a, b) => a.id - b.id);
      nav = 'id';
    } else if (elem === 'phone') {
      data.sort((a, b) => {
        const phoneA = parseInt(`${a.phone}`.replace(/\D/g, ''), 10);
        const phoneB = parseInt(`${b.phone}`.replace(/\D/g, ''), 10);
        return phoneA - phoneB;
      });
    } else {
      data.sort((a, b) => a[elem].localeCompare(b[elem]));
    }
    this.setState({ nav: elem, navigate });
    this.list(data);
  }

  select(i) {
    const { list } = this.state;
    this.setState({
      table: <tbody>{list[i]}</tbody>,
    });
  }

  render() {
    const { list } = this.state;
    const { navigate } = this.state;
    const { table } = this.state;
    const { newData } = this.state;
    const pagination = [];
    if (list !== undefined) {
      for (let i = 0; i < list.length; i++) {
        pagination.push(
          <button type="button" onClick={() => this.select(i)}>
            {i + 1}
          </button>,
        );
      }
    }
    return (
      <div>
        <input
          ref={this.input}
          onChange={(e) => {
            if (!newData) this.filtration(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            this.filtration(this.input.current.value);
          }}
        >
          Найти
        </button>
        <table>
          <thead>
            <tr>
              <th className="head" onClick={() => this.sorting('id')}>
                id
                {navigate.id}
              </th>
              <th className="head" onClick={() => this.sorting('firstName')}>
                firstName
                {navigate.firstName}
              </th>
              <th className="head" onClick={() => this.sorting('lastName')}>
                lastName
                {navigate.lastName}
              </th>
              <th className="head" onClick={() => this.sorting('email')}>
                email
                {navigate.email}
              </th>
              <th className="head" onClick={() => this.sorting('phone')}>
                phone
                {navigate.phone}
              </th>
              {/* <th>address</th>
            <th>description</th> */}
            </tr>
          </thead>
          {table}
        </table>
        {pagination}
      </div>
    );
  }
}

Table.defaultProps = { data: [], select: () => {} };

Table.propTypes = {
  data: PropTypes.objectOf(),
  select: PropTypes.func,
};

export default Table;
