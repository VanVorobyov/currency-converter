import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { InputWithSelect } from '../../../shared/ui';
import { useCurrencyInfo } from '../../../shared/hooks/useCurrencyInfo.ts';

export const CurrencyConverterPage: FC = () => {
	const [valueFrom, setValueFrom] = useState<number>(1);
	const [valueTo, setValueTo] = useState<number>(0);
	const [currencyFrom, setCurrencyFrom] = useState<string>('BTC');
	const [currencyTo, setCurrencyTo] = useState<string>('USDT');

	const { price: priceFrom } = useCurrencyInfo(currencyFrom);
	const { price: priceTo } = useCurrencyInfo(currencyTo);

	console.log('priceFrom', priceFrom);
	console.log('priceTo', priceTo);
	console.log('currencyFrom', currencyFrom);

	const handleSetValueFrom = (value: number) => {
		setValueFrom(value);
		if (currencyFrom === currencyTo) return setValueTo(value); // +

		if (currencyFrom !== 'USDT' && currencyTo !== 'USDT') {
			setValueTo(value * (priceFrom / priceTo)); //+
		}

		if (currencyTo === 'USDT') {
			setValueTo(value * priceFrom);
		}

		if (currencyFrom === 'USDT') {
			setValueTo(value / priceTo);
		}
	};

	const handleSetValueTo = (value: number) => {
		setValueTo(value);
		if (currencyFrom === currencyTo) return setValueFrom(value); // +

		if (currencyFrom !== 'USDT' && currencyTo !== 'USDT') {
			setValueFrom(value * (priceTo / priceFrom)); //+
		}

		if (currencyFrom === 'USDT') {
			setValueFrom(value * priceTo);
		}

		if (currencyTo === 'USDT') {
			setValueFrom(value / priceFrom);
		}
	};

	const handleCurrencyFromChange = (value: string) => {
		setCurrencyFrom(value);
	};

	const handleCurrencyToChange = (value: string) => {
		setCurrencyTo(value);
	};

	// useEffect(() => {
	// 	if (priceFrom) {
	// 		setValueTo(valueFrom * priceFrom);
	// 	}
	// }, [priceFrom, valueFrom]);

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
