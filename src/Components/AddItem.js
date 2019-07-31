import React, { Component } from "react";

export default class AddItem extends Component {
  state = {
    item: ""
  };

  addItem = e => {
    if (!/\S/.test(this.state.item)) {
      alert("Please add an Item");
    } else {
      this.props.addItem(this.state.item);
      this.props.updateStorage();
      this.setState({ item: "" });
    }
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="add-item-form" onSubmit={this.addItem}>
        <label htmlFor="addTodo">Add Item:{"  "}</label>
        <input
          type="text"
          name="item"
          id="addTodo"
          value={this.state.item}
          onChange={this.onChange}
        />
        <input type="submit" className="btn" value="Submit" />
      </form>
    );
  }
}
