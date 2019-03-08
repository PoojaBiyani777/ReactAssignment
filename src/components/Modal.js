import React, { Component } from 'react';
import '../CSS/Modal.css';
import ToDoItem from './ToDoItem';

class Modal extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        show: this.props.show,
        task: '',
    };
    this.submitHandler = this.submitHandler.bind(this);
  };


handleInput = (e) =>
{
  this.setState({task : e.target.value})
  console.log("task"+this.state.task);
};


submitHandler = (event) => {
    event.preventDefault();
    //console.log(this.state.tasks);
    var task=this.state.task;
    //console.log("t"+tasks.length);
    this.props.handlerFromParent(task);
    this.setState({task: ''});
}

render()
{
    return (
        <div>
            <div className="modal"
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                    display: this.props.show ? 'block' : 'none'
                }}>
                <div className="modal-content">
                <div className="modal-header">
                    <input type="text" className="inputText" placeholder="I want to...." value={this.state.task} onChange={this.handleInput}  />
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {this.props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <form onSubmit={this.submitHandler}>
                        <input type="submit" className="addTask-button"/>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}
}
export default Modal;
