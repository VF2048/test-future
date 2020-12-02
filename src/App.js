import React from 'react';
import './App.css';

function Table(props) {
  let list = props.data.map((elem) => {
    return (
      <tr key={elem.id}>
        <th>{elem.id}</th>
        <th>{elem.firstName}</th>
        <th>{elem.lastName}</th>
        <th>{`${elem.address.streetAddress},${elem.address.city},${elem.address.state},${elem.address.zip}`}</th>
        <th>{elem.email}</th>
        <th>{elem.phone}</th>
        <th>{elem.description}</th>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>address</th>
          <th>email</th>
          <th>phone</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
      .then(res => res.json())
      .then(json => this.setState({ data: json }))
  }

  render() {
    if (this.state.data)
      return (
        <div>
          <Table data={this.state.data} />
        </div>
      )
    else
      return (<div></div>)
  }
}

export default App;
