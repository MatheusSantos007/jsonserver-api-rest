import React, { useState } from "react" // Importa React e o hook useState
import DropCompanies from "./DropCompanies" // Importa o componente DropCompanies (corrigido o nome do componente)

const Form = ({ userData = {}, postUser, updateUser }) => {
	const [user, setUser] = useState({
		name: userData.name ?? "", // Define o estado inicial do nome do usuário
		username: userData.username ?? "", // Define o estado inicial do nome de usuário
		email: userData.email ?? "", // Define o estado inicial do email
		phone: userData.phone ?? "", // Define o estado inicial do telefone
		companiesId: userData.companiesId ?? "0", // Define o estado inicial do ID da empresa
	})

	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value }) // Atualiza o estado do usuário com os novos valores
	}

	const submitUser = e => {
		e.preventDefault() // Previne o comportamento padrão do formulário

		if (user.companiesId === "0") return // Se nenhuma empresa for selecionada, não faz nada

		if (userData.id) {
			updateUser(userData.id, user) // Se o usuário já existir, chama a função de atualização
		} else {
			postUser(user) // Se o usuário for novo, chama a função de criação
		}
	}

	return (
		<form onSubmit={submitUser} className='row'>
			<input
				type='text'
				name='name'
				value={user.name} // Valor do campo de nome
				placeholder='Name'
				onChange={e => handleValue(e)} // Atualiza o estado quando o valor muda
			/>
			<input
				type='email'
				name='email'
				value={user.email} // Valor do campo de email
				placeholder='Email'
				onChange={e => handleValue(e)} // Atualiza o estado quando o valor muda
			/>
			<input
				type='tel'
				name='phone'
				value={user.phone} // Valor do campo de telefone
				placeholder='Phone (10)'
				pattern='[0-9]{10}' // Padrão de validação para o telefone
				onChange={e => handleValue(e)} // Atualiza o estado quando o valor muda
			/>
			<DropCompanies companiesId={user.companiesId} handleValue={handleValue} /> {/* Componente de dropdown para selecionar a empresa */}
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`} // Texto do botão de submit
			/>
		</form>
	)
}

export default Form // Exporta o componente Form
