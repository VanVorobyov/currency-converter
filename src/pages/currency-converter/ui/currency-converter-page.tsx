import { FC } from 'react';
import styles from './styles.module.scss';

import { CurrencyConverterFeature } from '../../../features';

export const CurrencyConverterPage: FC = () => {
	return (
		<>
			<div className={styles.container}>
				<CurrencyConverterFeature />
			</div>
		</>
	);
};
