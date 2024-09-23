import React from "react" // Importa React
import Form from "./Form" // Importa o componente Form

const Table = ({ users, postUser, updateUser, deleteUser }) => {
	// Função para mostrar/ocultar o formulário de atualização
	const showUpdateUser = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	// Componente para renderizar uma linha da tabela
	const Row = ({ user }) => {
		return (
			<>
				<div className='row'>
					<div>{user.name}</div> {/* Nome do usuário */}
					<div>{user.email}</div> {/* Email do usuário */}
					<div>{user.phone}</div> {/* Telefone do usuário */}
					<div>{user.companies.name}</div> {/* Nome da empresa do usuário */}
					<div className='buttons'>
						<button onClick={() => showUpdateUser(user.id)}>Update</button> {/* Botão para atualizar o usuário */}
						<button onClick={() => deleteUser(user.id)}>Delete</button> {/* Botão para deletar o usuário */}
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user} postUser={postUser} updateUser={updateUser} /> {/* Formulário para atualizar o usuário */}
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			<div className='titles'>
				<div>Name</div> {/* Título da coluna Nome */}
				<div>Email</div> {/* Título da coluna Email */}
				<div>Phone</div> {/* Título da coluna Telefone */}
				<div>Company</div> {/* Título da coluna Empresa */}
				<div>Actions</div> {/* Título da coluna Ações */}
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)} {/* Renderiza uma linha para cada usuário */}
			</div>
		</div>
	)
}

export default Table // Exporta o componente Table
