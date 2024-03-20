import { FC, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { InputWithSelect } from '../../../shared/ui';
import { useCurrencyInfo } from '../../../shared/hooks/useCurrencyInfo.ts';

export const CurrencyConverterPage: FC = () => {
	const [valueFrom, setValueFrom] = useState<number>(1);
	const [valueTo, setValueTo] = useState<number>(0);
	const [currencyFrom, setCurrencyFrom] = useState<string>('BTC');
	const [currencyTo, setCurrencyTo] = useState<string>('USDT');

	const { price } = useCurrencyInfo(currencyFrom, currencyTo);

	const handleSetValueFrom = (value: number) => {
		setValueFrom(value);
		setValueTo(value * price);
	};

	const handleSetValueTo = (value: number) => {
		setValueTo(value);
		setValueFrom(value / price);
	};

	const handleCurrencyFromChange = (value: string) => {
		setCurrencyFrom(value);
	};

	const handleCurrencyToChange = (value: string) => {
		setCurrencyTo(value);
	};

	console.log(price);

	useEffect(() => {
		if (price) {
			setValueTo(valueFrom * price);
		}
	}, [price, valueFrom]);

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
