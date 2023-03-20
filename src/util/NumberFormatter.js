export const currencyConverter = (countryName, number = 0, currencyName = 'EUR') => {
    return new Intl.NumberFormat(countryName, { style: 'currency', currency: currencyName }).format(number);
};
