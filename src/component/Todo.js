import React from "react";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import "./todo.css";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  addTodo = (event) => {
    event.preventDefault();

    const data = event.target,
      newTodo = {
        taskTitle: data.taskTitle.value,
        date: data.date.value,
        time: data.time.value,
      };

    this.state.todoList.push(newTodo);
    this.setState({
      todoList: this.state.todoList,
    });
  };
  deleteTodo = (event) => {
    this.state.todoList.splice(event.target.value, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  };
  render() {
    return (
      <div className="font">
        <h1 className="judul">TodoList</h1>
        <Card style={{ width: "18rem" }} className="bg-primary color">
          <Form onSubmit={this.addTodo} style={{ width: "17rem" }}>
            <Form.Label>Task Title :</Form.Label>
            <input type="text" className="form-control" name="taskTitle" />
            <br />
            <Form.Label>Date :</Form.Label>
            <input type="date" className="form-control" name="date" />
            <br />
            <Form.Label>Time :</Form.Label>
            <input type="time" className="form-control" name="time" />
            <br />
            <Button variant="dark" type="submit">
              Add+
            </Button>
          </Form>
        </Card>

        <ListGroup style={{ width: "18rem" }} className="list">
          {this.state.todoList.map((task, index) => {
            return (
              <ListGroup.Item>
                {task.taskTitle} at {task.time}, date: {task.date}
                <Button type="button" variant="dark" onClick={this.deleteTodo} value={index} className="button">
                  Delete
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default Todo;
