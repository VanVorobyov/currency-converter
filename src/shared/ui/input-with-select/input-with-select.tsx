import { FC } from 'react';
import styles from './styles.module.scss';

export interface IInputWithSelectProps {
	id: string;
	name: string;
	isDisabled: boolean;
	inputValue: number;
	selectValue: string;
	selectOptions: string[];
	onInputChange?: (value: number) => void;
	onSelectChange?: (value: string) => void;
}

export const InputWithSelect: FC<IInputWithSelectProps> = ({
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
				<input
					id={id}
					name={name}
					placeholder=""
					disabled={isDisabled}
					value={inputValue}
					onChange={(e) =>
						onInputChange && onInputChange(Number(e.target.value))
					}
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
