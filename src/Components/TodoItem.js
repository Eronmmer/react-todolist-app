import React, { Component } from "react";

export default class TodoItem extends Component {

  itemStyle () {
    return {
      textDecoration:
        this.props.todo.completed === true ? "line-through" : "none",
        color: this.props.todo.completed === true ? "#7e7e7e" : "black"
    };
  }

  render () {
    const{ id, value, completed} = this.props.todo
    return (
      <div className="todo-item">
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed ? true : false} />
        <p style={this.itemStyle()}>{value}</p>
        <button onClick={this.props.removeItem.bind(this, id)} className="remove btn">X</button>
      </div>
    );
  }
}
