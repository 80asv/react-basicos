import './App.css';
import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7 } from './components/Eventos';
import { EventosNativos } from './components/EventosNativos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxAPIs from './components/AjaxAPIs';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import CustomHooks from './components/CustomHooks';

function App() {
return (
	<div className="App">
	<header className="App-header">
		<section>
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</section>
		<section>
			<Componente mensaje="Hola soy un componente funcional"/>
			<Propiedades 
				cadena="esto es una cadena de texto" 
				numero={98} 
				booleano={false}
				arreglo={[12, 3, 4]}
				objeto={{nombre: "Andres", edad: 21}}
				funcion = {num => num * num}
				elementoReact = {<i>Esto es un elemento react</i>}
				componenteReact = {<Componente mensaje="componente pasado como prop"/>}
			/>
			<hr />
			{/** Este componente se actualiza cada segundo con un setInterval */}
			<Estado />
			<hr />
			<RenderizadoCondicional />
			<hr />
			<RenderizadoElementos />
			<hr />
			<EventosES6 />
			<hr />
			<EventosES7 />
			<hr />
			<EventosNativos />
			<hr />
			<ComunicacionComponentes />
			<hr />
			<CicloVida />
			<hr />
			<AjaxAPIs />
			<hr />
			<ContadorHooks/>
			<hr />
			<ScrollHooks />
			<hr />
			<RelojHooks />
			<hr />
			<AjaxHooks />
			<hr />
			<CustomHooks />
		</section>
	</header>
	</div>
);
}

export default App;
