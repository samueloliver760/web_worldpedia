
class DataSource {
	static searchCountry(countrySearched) {
		return fetch(`https://restcountries.com/v3.1/name/${countrySearched}`)
			.then(response => {
				return response.json();
			})

			.then(responseJson => {
				console.log(responseJson);
				if (responseJson[0]) {
					return Promise.resolve(responseJson);
				}

				else {
					return Promise.reject(`${countrySearched} is not found`)
				}
			})
	}

	static allAsian() {
		return fetch(`https://restcountries.com/v3.1/region/asia`)
		.then(response => {
			return response.json();
		})

		.then(responseJson => {
			if (responseJson[0]) {
				console.log(responseJson[0])
				return Promise.resolve(responseJson);
			}

			
			else {
				return Promise.reject("There is no data ");
			}
		});
	}

	static allSpanish() {
		return fetch(`https://restcountries.com/v3.1/lang/spanish`)
		.then(response => {
			return response.json();
		})

		.then(responseJson => {
			if (responseJson[0]) {
				console.log(responseJson[0])
				return Promise.resolve(responseJson);
			}

			
			else {
				return Promise.reject("There is no data");
			}
		});
	}

	static allDollar() {
		return fetch(`https://restcountries.com/v3.1/currency/dollar`)
		.then(response => {
			return response.json();
		})

		.then(responseJson => {
			if (responseJson[0]) {
				console.log(responseJson[0])
				return Promise.resolve(responseJson);
			}

			
			else {
				return Promise.reject("There is no data");
			}
		});
	}
}

export default DataSource;