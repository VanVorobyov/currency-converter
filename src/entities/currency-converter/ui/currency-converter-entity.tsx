import { FC } from 'react';
import styles from './styles.module.scss';
import { InputWithSelect } from '../../../shared/ui';

import { ICurrencyConverterEntity } from '../models/currency-converter-entity.ts';

export const CurrencyConverterEntity: FC<ICurrencyConverterEntity> = ({
	valueFrom,
	valueTo,
	currencyFrom,
	currencyTo,
	handleSetValueFrom,
	handleCurrencyFromChange,
	handleSetValueTo,
	handleCurrencyToChange,
}) => {
	return (
		<>
			<div className={styles.container}>
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
			</div>
		</>
	);
};
