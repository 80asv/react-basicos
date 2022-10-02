import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import './App.css';

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
		</section>
	</header>
	</div>
);
}

export default App;
