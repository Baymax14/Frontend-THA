import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.add}> {this.state.count}</button>
      </div>
    );
  }
}
export default Counter;