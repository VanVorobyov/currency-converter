import { FC, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { InputWithSelect } from '../../../shared/ui';
import { useCurrencyInfo } from '../../../shared/hooks/useCurrencyInfo.ts';

export const CurrencyConverterPage: FC = () => {
	const [currencyFrom, setCurrencyFrom] = useState<string>('BTC');
	const [currencyTo, setCurrencyTo] = useState<string>('USDT');

	// const { price: priceFrom } = useCurrencyInfo(currencyFrom);
	// const { price: priceTo } = useCurrencyInfo(currencyTo);

	const { price: price_BTC } = useCurrencyInfo('BTC');
	const { price: price_ETH } = useCurrencyInfo('ETH');

	console.log(`price_BTC --> `, price_BTC);
	console.log(`price_ETH --> `, price_ETH);

	const [valueFrom, setValueFrom] = useState<number>(0);
	const [valueTo, setValueTo] = useState<number>(0);

	const getConversionRate = (from: string, to: string): number => {
		switch (`${from}_${to}`) {
			case 'USDT_BTC':
				return 1 / price_BTC;
			case 'USDT_ETH':
				return 1 / price_ETH;
			case 'BTC_USDT':
				return price_BTC;
			case 'ETH_USDT':
				return price_ETH;
			case 'BTC_ETH':
				return price_BTC / price_ETH;
			case 'ETH_BTC':
				return price_ETH / price_BTC;
			default:
				return 1;
		}
	};

	const handleSetValueFrom = (value: number) => {
		setValueFrom(value);
		if (currencyFrom === currencyTo) return setValueTo(value);
		setValueTo(value * getConversionRate(currencyFrom, currencyTo));
	};

	const handleSetValueTo = (value: number) => {
		setValueTo(value);
		if (currencyFrom === currencyTo) return setValueFrom(value);
		setValueFrom(value * getConversionRate(currencyTo, currencyFrom));
	};

	// const handleCurrencyFromChange = (value: string) => {
	// 	setCurrencyFrom(value);
	// 	const newValueFrom = valueTo * getConversionRate(value, currencyTo);
	// 	setValueFrom(newValueFrom);
	// };

	const handleCurrencyFromChange = (value: string) => {
		setCurrencyFrom(value);
		const newValueTo = valueFrom * getConversionRate(value, currencyTo);
		setValueTo(newValueTo);
	};

	const handleCurrencyToChange = (value: string) => {
		setCurrencyTo(value);
		const newValueTo = valueFrom * getConversionRate(currencyFrom, value);
		setValueTo(newValueTo);
	};

	useEffect(() => {
		if (currencyFrom === currencyTo) setValueTo(valueFrom);
	}, [currencyTo]);

	useEffect(() => {
		if (currencyFrom === currencyTo) setValueFrom(valueTo);
	}, [currencyFrom]);

	return (
		<>
			<div className={styles.container}>
				<InputWithSelect
					id={'1'}
					name={'name'}
					isDisabled={false}
					inputValue={valueFrom}
					selectValue={currencyFrom}
					selectOptions={['USDT', 'BTC', 'ETH']}
					onInputChange={handleSetValueFrom}
					onSelectChange={handleCurrencyFromChange}
				/>
			</div>
			<div className={styles.container}>
				<InputWithSelect
					id={'1'}
					name={'name'}
					isDisabled={false}
					inputValue={valueTo}
					selectValue={currencyTo}
					selectOptions={['USDT', 'BTC', 'ETH']}
					onInputChange={handleSetValueTo}
					onSelectChange={handleCurrencyToChange}
				/>
			</div>
		</>
	);
};
