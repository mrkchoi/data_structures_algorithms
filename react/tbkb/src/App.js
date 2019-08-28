import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import Card from './card.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      todos: {}
    };

    this.handleNewCardClick = this.handleNewCardClick.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  handleNewCardClick() {
    let newCardName = window.prompt('Add new card:');
    let newCardId = shortid.generate();

    let newCard = {
      id: newCardId,
      name: newCardName
    };

    this.setState(
      {
        cards: [...this.state.cards, newCard],
        todos: Object.assign({}, this.state.todos, { [newCardId]: {} })
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleAddTodo(cardId) {
    console.log(cardId);
    let newTodoText = window.prompt("Add new todo:");
    let newTodoId = shortid.generate();

    let newTodo = {
      id: newTodoId,
      text: newTodoText
    };

    let newTodoState = { ...this.state.todos };
    newTodoState[cardId][newTodoId] = newTodo;

    this.setState(
      {
        todos: newTodoState
      }
    );
  }

  handleDeleteTodo(cardId, todoId) {
    let todosState = this.state.todos;
    delete todosState[cardId][todoId];

    this.setState({
      todos: todosState
    }, () => console.log(this.state));
  }

  handleUpdateTodo(cardId, todoId) {
    let newText = window.prompt('Update todo:');
    let todosState = this.state.todos;
    todosState[cardId][todoId].text = newText;

    this.setState(
      {
        todos: todosState
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>TBKB</h1>
          <button className="uglybtn ui button" onClick={this.handleNewCardClick}>+ Card</button>
        </div>

        <div className="main">
          {this.state.cards.map(card => {
            return (
              <Card
                name={card.name}
                todos={this.state.todos[card.id]}
                key={card.id}
                id={card.id}
                handleAddTodo={this.handleAddTodo}
                handleDeleteTodo={this.handleDeleteTodo}
                handleUpdateTodo={this.handleUpdateTodo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;