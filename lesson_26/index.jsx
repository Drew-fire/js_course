import React from 'react';
import ReactDOM from 'react-dom';

const Thead = () => {
  return (
    <tr>
      <th>Ячейка 1</th>
      <th>Ячейка 2</th>
      <th>Ячейка 3</th>
      <th>Ячейка 4</th>

    </tr>
  )
}

class Tr extends React.Component {
  render() {
    const info = this.props;
    return(
      <tr>
        <td width="100px" style={ { background: "lightgreen",} }>ячейка5</td>
        <td width="100px" style={ { background: "lightgreen",} }>ячейка6</td>
        <td width="100px" style={ { background: "lightcoral",} }>ячейка7</td>
        <td width="100px" style={ { background: "lightgreen",} }>ячейка8</td>
      </tr>
    )
  }
}

class Table extends React.Component {
  render() {
    return (
      <table style={ { margin: "0 auto", textAlign: "center" } }>
        <caption>
          <h1 style={ { color: "grey", textShadow: "0px 0px 2px blue" } }>Super Table</h1>
        </caption>
        <tbody style={ { fontSize: "21px" } }>
          <Thead />
          <Tr/>
          <Tr/>
          <Tr/>
          <Tr/>
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(
  <Table/>,
  document.getElementById("root"),
)