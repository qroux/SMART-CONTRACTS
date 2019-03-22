import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting for the transaction to be performed...'});

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!' });
  };

  onClick = async (event) => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting for the transaction to be performed...' });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: 'A winner has been picked!' });
  };

  render() {
    return (
      <div className="my-container">
        <div className="title">
          <h2>Lottery Contract</h2>
        </div>
        <p className="manager">This contract is managed by {this.state.manager}</p>
        <p>There are currently <strong>{this.state.players.length} people</strong> competing to win <strong>{web3.utils.fromWei(this.state.balance, 'ether')} ether </strong>!
        </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try you luck?</h4>
          <div>
            <p>Your bid (min .011 eth)</p>
            <input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <div>



        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>

        <h4>{this.state.message}</h4>

        </div>

      </div>

    );
  }
}

export default App;
