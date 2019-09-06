import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './Login.css';

class Register extends Component {
  
  state = {
    email: '',
    password: ''
  }

  handelSubmit = async e => {
    e.preventDefault();

    let data = {
      'email': this.state.email,
      'password': this.state.password
    }

    console.log('AQUIIIIIIIIIIIIIII')
    console.log(data)

    await api.post('auth', data);

    this.props.history.push('/');
  }

  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form id="register" onSubmit={this.handelSubmit}>

        <text id='title'>LOGIN</text>

        <input
            type='text'
            name='email'
            placeholder='E-mail'
            onChange={this.handelChange}
            value={this.state.email}
        />

        <input
            type='password'
            name='password'
            placeholder='Senha'
            onChange={this.handelChange}
            value={this.state.password}
        />
        
        <button type='submit'>Entrar</button>

        <text id='create-text'>Ainda não possui cadastro?</text>
        
        <Link style={{ textDecoration: 'none' }}>Criar nova conta</Link>
      </form>
    );
  }
}

export default Register;