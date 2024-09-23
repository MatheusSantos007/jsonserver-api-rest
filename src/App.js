import { LogoIcon } from "./assets/icons" // Importa o ícone do logo
import CrudUser from "./components/CrudUser" // Importa o componente CrudUser
import "./styles/App.css" // Importa o arquivo de estilos CSS

function App() {
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon /> {/* Renderiza o ícone do logo */}
						<strong>JSON SERVER API</strong> {/* Texto do logo */}
					</div>
				</div>
			</header>
			<main>
				<CrudUser /> {/* Renderiza o componente CrudUser */}
			</main>
		</>
	)
}

export default App // Exporta o componente App
