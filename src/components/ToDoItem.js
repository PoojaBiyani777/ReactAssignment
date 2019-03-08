import React, {Component} from 'react';
import '../CSS/ToDoItem.css';
import '../CSS/ToDo.css';

class ToDoItem extends Component {

    render() {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.item}</p>
            </div>
        );
    }
}

export default ToDoItem;
