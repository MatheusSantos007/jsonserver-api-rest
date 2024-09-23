// Função helper para realizar requisições HTTP
export const httpHelper = () => {
	// Função customFetch para realizar a requisição com opções personalizadas
	const customFetch = async (url, options = {}) => {
		const defaultMethod = "GET" // Método padrão é GET
		const defaultHeaders = {
			"Content-Type": "application/json", // Cabeçalho padrão para JSON
			Accept: "application/json",
		}
		const controller = new AbortController() // Controlador para abortar a requisição
		options.signal = controller.signal // Adiciona o sinal de controle às opções

		// Define o método e cabeçalhos da requisição
		options.method = options.method || defaultMethod
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders

		// Converte o corpo da requisição para JSON, se existir
		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body // Remove o corpo se for falso

		// Aborta a requisição após 3 segundos
		setTimeout(() => {
			controller.abort()
		}, 3000)

		try {
			const response = await fetch(url, options) // Realiza a requisição
			return await response.json() // Retorna a resposta em JSON
		} catch (err) {
			return err // Retorna o erro em caso de falha
		}
	}

	// Função para realizar requisição GET
	const get = (url, options = {}) => customFetch(url, options)

	// Função para realizar requisição POST
	const post = (url, options) => {
		options.method = "POST"
		return customFetch(url, options)
	}

	// Função para realizar requisição PUT
	const put = (url, options) => {
		options.method = "PUT"
		return customFetch(url, options)
	}

	// Função para realizar requisição DELETE
	const del = (url, options) => {
		options.method = "DELETE"
		return customFetch(url, options)
	}

	// Retorna as funções de requisição
	return {
		get,
		post,
		put,
		del,
	}
}
