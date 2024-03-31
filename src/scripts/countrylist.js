class CountryList extends HTMLElement {
	constructor() {
		super();
	}

	set countries (countries) {
		this._countries = countries;
		this.render();
	}

	render() {
		this.innerHTML = `
			<style>
				.wrapper {
					width: 1100px;
					margin: auto;
					position: relative;
					margin-bottom: 40px;
					margin-top: 20px;
					justify-content: center;	
				}

				#countryList {
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: minmax(min-content, max-content);
					gap: 15px;
					margin-bottom: 48px;
					margin-top: 20px;
					padding: 10px;
				}
				
				.card {
					margin: 10px;
					border: 3px solid black;
					border-radius: 5px;
					height: 450px;
				}

				.card-img-top {
					width:250px;
					height:150px;
					padding: 10px;
					margin: 0 auto;

				}

				h4 {
					text-align: center;
					height: 100px;
				}

				.card-text {
					font-size: 20px;
					text-align: justify;
				}

				@media screen and (min-width: 500px) {
					#countryList {
						 grid-template-columns: 1fr 1fr;
					}
			  }

			  @media screen and (min-width: 800px) {
				#countryList {
					 grid-template-columns: repeat(3, 1fr);
				}
		  }

			</style>
		  	
			<div class="wrapper">
		  		<div id="countryList">

				</div>
			</div>
		`;
		const listCountryElement = document.querySelector('#countryList');
		listCountryElement.innerHTML = '';
		
		this._countries.slice(0,27).forEach(country => {
			listCountryElement.innerHTML += `
			<div class = "card" style="width: 18rem;">
				<img class="card-img-top" src = ${country.flags.png}>
				<div class="card-body">
					<h4 class="card-title"><b>${country.name.common} (${country.cca3})</b></h4>
					<p class="card-text">${country.name.common} is a country located in ${country.region} with ${country.capital} as a capital city. </p>
				</div>
			</div>
			
			`
		});
	}

	renderError(message) {
		this.innerHTML = `
			<style>
			.wrapper {
				width: 1100px;
				margin: auto;
				position: relative;
				margin-bottom: 40px;
				margin-top: 20px;
				justify-content: center;	
			}

			#countryList {
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: minmax(min-content, max-content);
				gap: 15px;
				margin-bottom: 48px;
				margin-top: 20px;
				padding: 10px;
			}

			.error_message {
				color: red;
				text-align: center;
				margin-top: 60px;

			}

			.error_image {
				width: 500px;
				height: 250px;
				margin: 0 auto;
			}

			</style>
		`;

		this.innerHTML += `
		<div class="wrapper">
			<div id="countryList">
				<img class = "error_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqSmCcyYatmFWjn8NG0F5HEgk2PHC037xzb4QztSyZOnAf1ltIwiJF-QZOMgQ2nI-cNI&usqp=CAU">
				<h2 class="error_message">${message}</h2>
	 		</div>
 		</div>
		`;
	}
}

customElements.define('country-list', CountryList);