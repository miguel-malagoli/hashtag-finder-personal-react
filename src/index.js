// Importar base do React
import React from 'react';
import ReactDOM from 'react-dom';
// Importar componentes
import Home from './pages/home/Home';

// Renderizar
ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.getElementById('root')
);