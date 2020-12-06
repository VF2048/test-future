import React from 'react';
import './App.css';
import Table from './Table';
import Selected from './Selected';
import Addition from './Addition';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  smallData = () => {
    this.setState({ data: 1 });
    fetch(
      'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    )
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  };

  bugData = () => {
    this.setState({ data: 1 });
    fetch(
      'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    )
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  };

  select = (elem) => {
    this.setState({
      selected: <Selected selected={elem} />,
    });
  };

  add = (elem) => {
    const { data } = this.state;
    this.setState({
      data: [elem].concat(data),
    });
  };

  render() {
    const { data } = this.state;
    const { selected } = this.state;
    if (data === 1) {
      return <div className="loader" />;
    }
    if (data) {
      return (
        <div>
          <Addition add={this.add} />
          <Table data={data} select={this.select} />
          {selected}
        </div>
      );
    }
    return (
      <div>
        набор данных:
        <button type="button" onClick={this.smallData}>
          маленький
        </button>
        или
        <button type="button" onClick={this.bugData}>
          большой
        </button>
      </div>
    );
  }
}
export default App;
