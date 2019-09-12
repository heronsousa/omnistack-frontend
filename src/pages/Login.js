import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { login } from '../services/auth';
import { setUser } from '../services/user';
import './Login.css';

class Register extends Component {
  
  state = {
    email: '',
    password: '',
    error: ""
  }

  handelSubmit = async e => {
    e.preventDefault();

    let data = {
      'email': this.state.email,
      'password': this.state.password
    }
    try {
      
      const response = await api.post('auth', data);
      login(response.data.token);
      setUser(response.data.user.name);
      this.props.history.push('/');
      window.location.reload(); 

    } catch (erro) {
      
      this.setState({ error: erro.response.data.error });
    
    }

  }

  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form id="register" onSubmit={this.handelSubmit}>

        <text id='title'>LOGIN</text>

        {this.state.error && <p>{this.state.error}</p>}

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
        
        <Link to='/register' style={{ textDecoration: 'none' }}>Criar nova conta</Link>
      </form>
    );
  }
}

export default Register;