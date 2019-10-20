import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state ={
    todos:[
        {
          "id": 1,
          "description": "Get out of bed"
        },
        {
          "id": 2,
          "content": "Brush teeth"
        },
        {
          "id": 3,
          "description": "Eat breakfast"
        }
      ]
  }

  deleteTodo =(id)=>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos :todos
    })
  }
  addTodo =(todo) =>{
todo.id = Math.random();
let todos = [...this.state.todos, todo];
this.setState({
  todos:todos
})
  }


  checked = id => {
    this.setState ({
      todos: this.state.todos.map (todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
    };

    countCompletedTodos = () => {
      let completedTodos = [];
      completedTodos = [...this.state.todos.filter (todo => todo.completed)];
      const sumTodos = this.state.todos.length;
      let text = '';
      if (sumTodos < 1) {
        text = 'Nothing to do.';
      } else {
        text = `Completed tasks: ${completedTodos.length}
        Uncompleted tasks: ${sumTodos - completedTodos.length}`;
      }
  
      return text;
    };



  render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">To Do list</h1>
      <Todos todos={this.state.todos}
      deleteTodo ={this.deleteTodo}
      checked ={this.checked}
      />
      <AddTodo addTodo ={this.addTodo}
      countCompletedTodos={this.countCompletedTodos}/>
    </div>
  );
 }
}
export default App;
