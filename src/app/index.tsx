import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { CurrencyConverterPage } from '../pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CurrencyConverterPage />
	</React.StrictMode>
);
