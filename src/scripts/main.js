import './countrylist.js';
import './searchbar.js';
import DataSource from './datasource.js';
import './countrylist_asia.js';
import './countrylist_spanish.js';
import './countrylist_dollar.js';


const main = () => {
	const searchElement = document.querySelector('search-bar');
	const countryListElement = document.querySelector('country-list');
	const asiaListElemenet = document.querySelector('country-list-asia');
	const spanishListElement = document.querySelector('country-list-spanish');
	const dollarListElement = document.querySelector('country-list-dollar');

	const onButtonSearchClicked = async () => {
		try {
			const result = await DataSource.searchCountry(searchElement.value);
			renderResult(result);
		}
		
		catch(message) {
			fallbackResult(message);
		}
	};

	const onCountryinAsia = async () => {
		try {
			const result = await DataSource.allAsian();
			renderResultAsia(result);
		}

		catch (message) {
			fallbackResultAsia(message);
		}
	};

	const onCountryspeakSpanish = async () => {
		try {
			const result = await DataSource.allSpanish();
			renderResultSpanish(result);
		}

		catch (message) {
			fallbackResultSpanish(message);
		}
	};

	const onCountryuseDollar = async () => {
		try {
			const result = await DataSource.allDollar();
			renderResultDollar(result);
		}

		catch (message) {
			fallbackResultDollar(message);
		}
	};

	const renderResult = results => {
		countryListElement.countries = results;
	}

	const fallbackResult = message => {
		countryListElement.renderError(message);
	};

	const renderResultAsia = results => {
		asiaListElemenet.countries = results;
		
	};

	const fallbackResultAsia = message => {
		asiaListElemenet.renderError(message);
		
	};

	const renderResultSpanish = results => {
		spanishListElement.countries = results;
	}

	const fallbackResultSpanish = message => {
		spanishListElement.renderError(message);
	}

	const renderResultDollar = results => {
		dollarListElement.countries = results;
	}

	const fallbackResultDollar = message => {
		dollarListElement.renderError(message);
	}
	

	searchElement.clickEvent = onButtonSearchClicked;
	onCountryinAsia();
	onCountryspeakSpanish();
	onCountryuseDollar();
}

export default main;