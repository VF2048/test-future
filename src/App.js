import React from 'react';
import './App.css';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    )
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <div>
          <Table data={data} />
        </div>
      );
    }
    return <div />;
  }
}
export default App;
