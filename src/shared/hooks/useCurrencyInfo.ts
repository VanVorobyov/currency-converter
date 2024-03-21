import { useState, useEffect } from 'react';

interface ICurrencyInfo {
	[key: string]: number;
}

export const useCurrencyInfo = (
	currency: string
	// currencyTo: string
): ICurrencyInfo => {
	const [data, setData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://testnet.binancefuture.com/fapi/v1/ticker/price?symbol=${currency}USDT`
			);
			const result = await response.json();

			// if (symbol.startsWith(currencyTo)) {
			// 	setData({ ...result, rate: 1 / result.price });
			// } else {
			setData({ ...result });
			// }
		};
		console.log(data);

		fetchData();

		// const intervalId = setInterval(fetchData, 5000);

		// return () => clearInterval(intervalId);
	}, [currency]);

	return data;
};
