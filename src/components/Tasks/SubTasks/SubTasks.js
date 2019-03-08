import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubTasks extends Component {
  render() {

  let subTasks = null;

  switch (this.props.type){
    case('Today'):
      subTasks = <div className = "Today">Today</div>;
      break;
    case('Tomorrow'):
      subTasks = <div className = "Tomorrow">Tomorrow</div>;
      break;
    case('Upcoming'):
      subTasks = <div className = "Upcoming">Upcoming</div>;
      break;
    case('Someday'):
      subTasks = <div className = "Someday">Someday</div>;
      break;
    default:
      subTasks = null;
    }
    return subTasks;
  }

};

export default SubTasks;
