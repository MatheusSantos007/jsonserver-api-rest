import React, { useState, useEffect } from "react" // Importa React e os hooks useState e useEffect
import { httpHelper } from "../helpers/httpHelper" // Importa o helper para requisições HTTP

const DropCompanies = ({ companiesId, handleValue }) => {
	const [companies, setCompanies] = useState(null) // Estado para armazenar as empresas
	const [company, setCompany] = useState(companiesId) // Estado para armazenar a empresa selecionada

	const url = "http://localhost:5000/companies" // URL da API
	const api = httpHelper() // Instância do helper HTTP

	useEffect(() => {
		api
			.get(url) // Faz uma requisição GET para obter as empresas
			.then(res => {
				setCompanies([{ id: 0, name: "Select Company" }, ...res]) // Atualiza o estado com as empresas obtidas
			})
			.catch(err => console.log(err)) // Trata erros
	}, [])

	if (!companies) return null // Retorna null se as empresas ainda não foram carregadas

	return (
		<select
			name='companiesId'
			value={company} // Define o valor selecionado
			onChange={e => {
				setCompany(e.target.value) // Atualiza o estado com a empresa selecionada
				handleValue(e) // Chama a função handleValue passada como prop
			}}
		>
			{companies.map(c => (
				<option value={c.id} key={c.id}>
					{c.name} {/* Renderiza o nome da empresa */}
				</option>
			))}
		</select>
	)
}

export default DropCompanies // Exporta o componente DropCompanies
