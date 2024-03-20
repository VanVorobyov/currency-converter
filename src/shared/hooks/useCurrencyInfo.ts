import { useState, useEffect } from 'react';

interface ICurrencyInfo {
	[key: string]: number;
}

export const useCurrencyInfo = (
	currencyFrom: string,
	currencyTo: string
): ICurrencyInfo => {
	const [data, setData] = useState({});

	const getSymbol = (from: string, to: string) => {
		if (from === 'USDT') {
			return `${to}USDT`;
		} else if (to === 'ETH') {
			return `ETH${from}`;
		} else {
			return `${from + to}`;
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const symbol = getSymbol(currencyFrom, currencyTo);
			const response = await fetch(
				`https://testnet.binancefuture.com/fapi/v1/ticker/price?symbol=${symbol}`
			);
			const result = await response.json();
			setData({ ...result });
		};

		fetchData();

		// const intervalId = setInterval(fetchData, 5000);

		// return () => clearInterval(intervalId);
	}, [currencyFrom, currencyTo]);

	return data;
};
