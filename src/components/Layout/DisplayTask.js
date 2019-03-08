import React, { Component } from 'react';

class DisplayTask extends Component{
  render() {
      return (
          <div className="ToDoItem">
              <p className="ToDoItem-Text">{this.props.item}</p>
          </div>
      );
  }
};
export default DisplayTask;
