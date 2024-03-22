export interface ICurrencyConverterEntity {
	valueFrom: string | number;
	valueTo: string | number;
	currencyFrom: string;
	currencyTo: string;
	handleSetValueFrom: (arg0: string) => void;
	handleSetValueTo: (arg0: string) => void;
	handleCurrencyFromChange: (arg0: string) => void;
	handleCurrencyToChange: (arg0: string) => void;
}
