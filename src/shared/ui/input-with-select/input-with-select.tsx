import React, { FC, useState } from 'react';
import styles from './styles.module.scss';

export interface IInputWithSelectProps {
	id: string;
	name: string;
	isDisabled: boolean;
	inputValue: number;
	selectValue: string;
	selectOptions: string[];
	onInputChange: (value: number) => void;
	onSelectChange: (value: string) => void;
}

export const InputWithSelect: FC<IInputWithSelectProps> = ({
	id,
	name,
	isDisabled,
	inputValue: initialInputValue,
	selectValue: initialSelectValue,
	selectOptions,
}) => {
	const [inputValue, setInputValue] = useState(initialInputValue);
	const [selectValue, setSelectValue] = useState(initialSelectValue);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		setInputValue(value);
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSelectValue(value);
	};

	return (
		<div className={styles.container}>
			<div className={styles.inputContainer}>
				<input
					id={id}
					name={name}
					placeholder=""
					disabled={isDisabled}
					value={inputValue}
					onChange={handleInputChange}
				/>
			</div>
			<div className={styles.selectContainer}>
				<select
					className=""
					disabled={isDisabled}
					value={selectValue}
					onChange={handleSelectChange}
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
