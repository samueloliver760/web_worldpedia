import css from 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends HTMLElement {

	constructor() {
		super();
	 }

	connectedCallback() {
		this.render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.querySelector('#searchCountry').value;
	}

	render() {
		this.innerHTML = `
		<style>
			${css}
		</style>

		<div class="wrapper">
			<div class="input-group">
				<input type="search" class="form-control rounded" id="searchCountry" placeholder="Search country..." aria-label="Search" aria-describedby="search-addon" />
				<button type="button" class="btn btn-outline-primary" id="searchButton">Search</button>
			</div>
		</div>

		
		`;
		this.querySelector('#searchButton')
		.addEventListener('click', this._clickEvent);
	}
}

customElements.define('search-bar', SearchBar);