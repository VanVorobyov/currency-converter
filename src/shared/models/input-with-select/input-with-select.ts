export interface IInputWithSelect {
	id: string;
	name: string;
	isDisabled: boolean;
	inputValue: string | number;
	selectValue: string;
	selectOptions: { value: string; icon: string }[];
	onInputChange?: (value: string) => void;
	onSelectChange?: (value: string) => void;
}
