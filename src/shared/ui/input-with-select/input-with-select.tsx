import { FC } from 'react';
import styles from './styles.module.scss';
import { IInputWithSelect } from '../../models/input-with-select/input-with-select.ts';
import { NumericFormat } from 'react-number-format';

export const InputWithSelect: FC<IInputWithSelect> = ({
	id,
	name,
	isDisabled,
	inputValue,
	selectValue,
	selectOptions,
	onInputChange,
	onSelectChange,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.inputContainer}>
				<NumericFormat
					id={id}
					name={name}
					placeholder=""
					disabled={isDisabled}
					value={inputValue}
					onChange={(e) => onInputChange && onInputChange(e.target.value)}
					allowNegative={false}
					decimalScale={9}
					allowLeadingZeros={true}
					thousandSeparator=" "
					decimalSeparator="."
					prefix=""
					suffix=""
				/>
			</div>
			<div className={styles.selectContainer}>
				<select
					className=""
					disabled={isDisabled}
					value={selectValue}
					onChange={(e) => onSelectChange && onSelectChange(e.target.value)}
				>
					{selectOptions?.map((selectOption) => (
						<option key={selectOption} value={selectOption}>
							{selectOption}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
