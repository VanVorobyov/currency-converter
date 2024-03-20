import { FC } from 'react';
import styles from './styles.module.scss';
import { InputWithSelect } from '../../../shared/ui';

export const CurrencyConverterPage: FC = () => {
	return (
		<>
			<div className={styles.container}>
				<InputWithSelect
					id={'1'}
					name={'name'}
					isDisabled={false}
					inputValue={5}
					selectValue={''}
					selectOptions={['USDT', 'BTC', 'ETH']}
					onInputChange={() => {}}
					onSelectChange={() => {}}
				/>
			</div>
		</>
	);
};
