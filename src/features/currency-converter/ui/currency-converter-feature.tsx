import { FC, useState, useEffect } from 'react';
import { CurrencyConverterEntity } from '../../../entities';
import { useCurrencyInfo } from '../../../shared/hooks/useCurrencyInfo.ts';

export interface ICurrencyConverterFeatureProps {}

export const CurrencyConverterFeature: FC<
	ICurrencyConverterFeatureProps
> = () => {
	const [currencyFrom, setCurrencyFrom] = useState<string>('BTC');
	const [currencyTo, setCurrencyTo] = useState<string>('USDT');

	const { price: price_BTC } = useCurrencyInfo('BTC');
	const { price: price_ETH } = useCurrencyInfo('ETH');

	const [valueFrom, setValueFrom] = useState<number | string>(0);
	const [valueTo, setValueTo] = useState<number | string>(0);

	const getConversionRate = (from: string, to: string): string => {
		switch (`${from}_${to}`) {
			case 'USDT_BTC':
				return (1 / price_BTC).toString();
			case 'USDT_ETH':
				return (1 / price_ETH).toString();
			case 'BTC_USDT':
				return price_BTC.toString();
			case 'ETH_USDT':
				return price_ETH.toString();
			case 'BTC_ETH':
				return (price_BTC / price_ETH).toString();
			case 'ETH_BTC':
				return (price_ETH / price_BTC).toString();
			default:
				return '1';
		}
	};

	const handleSetValueFrom = (value: string) => {
		setValueFrom(value);
		if (currencyFrom === currencyTo) return setValueTo(value);

		const numericValue =
			Number(value.split(' ').join('')) *
			Number(getConversionRate(currencyFrom, currencyTo));
		setValueTo(numericValue);
		console.log(`numericValue1 --> `, numericValue);
		console.log(`numericValue1.toPrecision() --> `, numericValue.toString());
	};

	const handleSetValueTo = (value: string) => {
		setValueTo(value);
		if (currencyFrom === currencyTo) return setValueFrom(value);
		const numericValue =
			Number(value.split(' ').join('')) *
			Number(getConversionRate(currencyTo, currencyFrom));
		setValueFrom(numericValue);
		console.log(`numericValue2 --> `, numericValue);
		console.log(`numericValue2.toPrecision() --> `, numericValue.toString());
	};

	const handleCurrencyFromChange = (value: string) => {
		setCurrencyFrom(value);
		const newValue =
			Number(String(valueFrom).split(' ').join('')) *
			Number(getConversionRate(value, currencyTo));

		setValueTo(newValue.toString());
	};

	const handleCurrencyToChange = (value: string) => {
		setCurrencyTo(value);
		const newValue =
			Number(String(valueFrom).split(' ').join('')) *
			Number(getConversionRate(currencyFrom, value));
		setValueTo(newValue.toString());
	};

	useEffect(() => {
		if (currencyFrom === currencyTo) setValueTo(valueFrom);
	}, [currencyFrom, currencyTo, valueFrom]);

	useEffect(() => {
		if (currencyFrom === currencyTo) setValueFrom(valueTo);
	}, [currencyFrom, currencyTo, valueTo]);
	return (
		<>
			<CurrencyConverterEntity
				valueFrom={valueFrom}
				valueTo={valueTo}
				currencyFrom={currencyFrom}
				currencyTo={currencyTo}
				handleSetValueFrom={handleSetValueFrom}
				handleCurrencyFromChange={handleCurrencyFromChange}
				handleSetValueTo={handleSetValueTo}
				handleCurrencyToChange={handleCurrencyToChange}
			/>
		</>
	);
};
