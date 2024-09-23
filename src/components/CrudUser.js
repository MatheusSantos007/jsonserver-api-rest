import React, { useState, useEffect } from "react" // Importa React e hooks useState e useEffect
import Form from "./Form" // Importa o componente Form
import Table from "./Table" // Importa o componente Table

import { httpHelper } from "../helpers/httpHelper" // Importa o helper para requisições HTTP

const CrudUser = () => {
	const [users, setUsers] = useState(null) // Define o estado inicial para armazenar os usuários

	const url = "http://localhost:5000/users" // URL da API
	const api = httpHelper() // Instância do helper HTTP

	useEffect(() => {
		getUsers() // Chama a função para obter usuários ao montar o componente
	}, [])

	const postUser = user => {
		api
			.post(`${url}`, { body: user }) // Envia uma requisição POST para adicionar um novo usuário
			.then(res => getUsers()) // Atualiza a lista de usuários após a adição
			.catch(err => console.log(err)) // Trata erros
	}

	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user }) // Envia uma requisição PUT para atualizar um usuário existente
			.then(res => getUsers()) // Atualiza a lista de usuários após a atualização
			.catch(err => console.log(err)) // Trata erros
	}

	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {}) // Envia uma requisição DELETE para remover um usuário
			.then(res => getUsers()) // Atualiza a lista de usuários após a remoção
			.catch(err => console.log(err)) // Trata erros
	}

	const getUsers = () => {
		api
			.get(`${url}?_expand=companies`) // Envia uma requisição GET para obter todos os usuários, expandindo os dados das empresas
			.then(res => {
				setUsers(res) // Atualiza o estado com os usuários obtidos
			})
			.catch(err => console.log(err)) // Trata erros
	}

	if (!users) return null // Retorna null se os usuários ainda não foram carregados

	return (
		<>
			<h3>New user</h3>
			<Form postUser={postUser} /> {/* Componente de formulário para adicionar um novo usuário */}
			<div className='all-users'>
				<h3>All users</h3>
				<Table
					users={users} // Passa a lista de usuários para o componente Table
					setUsers={setUsers} // Passa a função para atualizar os usuários
					postUser={postUser} // Passa a função para adicionar um novo usuário
					updateUser={updateUser} // Passa a função para atualizar um usuário
					deleteUser={deleteUser} // Passa a função para deletar um usuário
				/>
			</div>
		</>
	)
}

export default CrudUser // Exporta o componente CrudUser
