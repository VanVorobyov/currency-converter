import { FC } from 'react';
import { CurrencyConverterEntity } from '../../../entities';

export interface ICurrencyConverterFeatureProps {}

export const CurrencyConverterFeature: FC<
	ICurrencyConverterFeatureProps
> = () => {
	return (
		<>
			<div className="">
				<CurrencyConverterEntity />
			</div>
		</>
	);
};
