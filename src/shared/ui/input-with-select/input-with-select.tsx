import { FC } from 'react';
import styles from './styles.module.scss';
import { IInputWithSelect } from '../../models/input-with-select/input-with-select.ts';
import { NumericFormat } from 'react-number-format';
import Select from 'react-select';

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
					allowLeadingZeros={false}
					thousandSeparator=" "
					decimalSeparator="."
					prefix=""
					suffix=""
				/>
			</div>
			<div className={styles.selectContainer}>
				<Select
					id={id}
					name={name}
					isDisabled={isDisabled}
					components={{
						IndicatorSeparator: () => null,
					}}
					value={{ label: selectValue, value: selectValue }}
					onChange={(selectedOption) =>
						onSelectChange &&
						selectedOption &&
						onSelectChange(selectedOption.value)
					}
					formatOptionLabel={(option) => (
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<img
								src={`/src/shared/icons/${option.value}.svg`}
								style={{
									marginLeft: '12px',
									marginRight: '5px',
									height: '25px',
								}}
								alt={option.value}
							/>
							{option.value}
						</div>
					)}
					options={selectOptions.map((option) => ({
						label: option.value,
						value: option.value,
					}))}
					styles={{
						input: (baseStyles) => ({
							...baseStyles,
							color: 'transparent',
						}),
						valueContainer: (baseStyles) => ({
							...baseStyles,
							width: '100px',
							'&:hover': {
								cursor: 'pointer',
								scale: '105%',
							},
						}),
						control: (baseStyles, state) => ({
							...baseStyles,
							width: '100%',
							borderColor: state.isFocused ? 'none' : '#4d91f7',
							backgroundColor: state.isFocused ? '#ffffff' : '#ffffff',
							borderRadius: '6px',
							'&:hover': {
								cursor: 'pointer',
								scale: '105%',
							},
						}),
						placeholder: (baseStyles) => ({
							...baseStyles,
							color: '#9ca3af',
						}),
						menu: (baseStyles) => ({
							...baseStyles,
							marginTop: '4px',
							backgroundColor: '#ffffff',
							cursor: 'pointer',
							zIndex: 100,
							'&:hover': {
								backgroundColor: '#ffffff',
								cursor: 'pointer',
							},
						}),
						option: (provided, state) => ({
							...provided,
							backgroundColor: state.isSelected ? '#EFEFEF' : '#ffffff',
							color: '#000000',
							'&:hover': {
								backgroundColor: '#4d91f7',
								cursor: 'pointer',
							},
						}),
						clearIndicator: (baseStyles) => ({
							...baseStyles,
							position: 'absolute',
							top: '50%',
							right: '0',
							transform: 'translateY(-50%)',
						}),
						dropdownIndicator: (baseStyles, state) => ({
							...baseStyles,
							display: state.hasValue ? 'none' : 'none',
						}),
					}}
				/>
			</div>
		</div>
	);
};
