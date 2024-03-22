export interface ICurrencyConverterEntity {
	valueFrom: number;
	valueTo: number;
	currencyFrom: string;
	currencyTo: string;
	handleSetValueFrom: (arg0: number) => void;
	handleSetValueTo: (arg0: number) => void;
	handleCurrencyFromChange: (arg0: string) => void;
	handleCurrencyToChange: (arg0: string) => void;
}
