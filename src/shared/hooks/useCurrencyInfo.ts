import { useState, useEffect } from 'react';

interface ICurrencyInfo {
	[key: string]: number;
}

export const useCurrencyInfo = (currency: string): ICurrencyInfo => {
	const [data, setData] = useState({});

	useEffect(() => {
		if (currency === 'USDT') return setData({ price: 1 });
		const fetchData = async () => {
			const response = await fetch(
				`https://testnet.binancefuture.com/fapi/v1/ticker/price?symbol=${currency}USDT`
			);
			const result = await response.json();
			setData({ ...result });
		};
		fetchData();

		const intervalId = setInterval(fetchData, 25000);

		return () => clearInterval(intervalId);
	}, [currency]);

	return data;
};
