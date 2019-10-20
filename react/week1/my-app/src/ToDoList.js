import React, {Component} from 'react';
import './ToDoList.css';
class ToDoList extends Component {
    render(){
        return(
            <div className="ToDoListMain"> 
                <div className ="Header">
                    <h1>ToDoList Application</h1>
                    <form onSubmit= {this.props.addItem}>
                        <input placeholder="Enter Task"
                        ref={this.props.inputElement}
                        value ={this.props.currentItem}
                        onChange={this.props.handleInput}></input>
                        <button type="submit"> Add your Task</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default ToDoList;