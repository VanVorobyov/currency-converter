export interface IInputWithSelect {
	id: string;
	name: string;
	isDisabled: boolean;
	inputValue: number;
	selectValue: string;
	selectOptions: string[];
	onInputChange?: (value: number) => void;
	onSelectChange?: (value: string) => void;
}
