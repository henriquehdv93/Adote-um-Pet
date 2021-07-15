const express = require('express');
const connection = require('./database/connection');
const routes = express.Router();

// ROTAS DOS USUÁRIOS
routes.get('/users', async (request, response) => {
  try {
    const users = await connection('users').select('name', 'email', 'group_id');
    response.json({
      status: 'success',
      data: users
    });
  }
  catch {
    response.status(500).json({
      status: 'error',
      msg: 'Não foi possível obter a lista de usuários.', 
    });
  }
  
});
routes.post('/users', async (request, response) => {
  const group_id = 3;
  const {name, email, password, phone, address_cep, address_name, address_number, address_complement, address_discrict, address_city, address_state } = request.body;
  try {
    await connection('users').insert({
      group_id,
      name,
      email,
      password,
      phone,
      address_cep,
      address_name,
      address_number,
      address_complement,
      address_discrict,
      address_city,
      address_state,
    })
    response.status(201).json({
      status: 'success',
      msg: `Usuário ${name} foi criado com sucesso!`,
    })
  }
  catch {
    response.status(500).json({
      status: 'error',
      msg: `Ocorreu um erro ao criar o usuário ${name}.`,
    })
  }
});
// ROTA DOS GRUPOS DE USUÁRIOS
routes.post('/user-groups', async (request, response) => {
  const { name } = request.body;
  try {
    await connection('user_groups').insert({
      name,
    })
    response.json({
      status: 'success',
      msg: `Grupo ${name} foi criado com sucesso!`
    });
  }
  catch {
    response.status(500).json({
      status: 'error',
      msg: `Ocorreu um erro ao criar o grupo ${name}.`
    });
  }
});
routes.get('/user-groups', async (request, response) => {
  try {
    const groups = await connection('user_groups').select('*');
    response.json({
      status: 'success',
      data: groups
    });
  }
  catch {
    response.status(500).json({
      status: 'error',
      msg: 'Não foi possível obter a lista de grupos.'
    });
  }
});
module.exports = routes;