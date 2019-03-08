import React, {Component} from 'react';
import ToDoItem from '../components/ToDoItem';
import '../CSS/ToDoItem.css';
import '../CSS/ToDo.css';
import Tasks from './Tasks/Tasks';

class ToDo extends Component {


    handleInput = event => {
      if(event.keyCode === 13)
      {
        this.props.addNewItem(event.target.value);
        event.target.value="";
      }
    };


    // this is now being emitted back to the parent from the child component
    deleteItem = indexToDelete => {
      this.setState(({ list }) => ({
        list: list.filter((toDo, index) => index !== indexToDelete)
      }));
    };


    render() {
        return (
            <div className="ToDo">
                <div className="ToDo-Container">
                <div style={{marginLeft: 20}}><h3>My Lists</h3></div>
                    <div className="ToDo-Content">

                        {this.props.list.map((item, key) => {
                                return (
                                  <ToDoItem     key={key}
                                                item={item.group}
                                                deleteItem={this.deleteItem.bind(this, key)}
                                                />);
                          }
                        )}
                    </div>
                    <div>
                       <input className="ToDoItem-Text" type="text" placeholder="Add some task" onKeyUp={this.handleInput.bind(this)}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
