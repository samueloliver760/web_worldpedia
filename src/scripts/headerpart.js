class headerPart extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}
	
	render() {
		this.innerHTML = `
		<style>
			@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

			.wrapper {
				width: 1100px;
				margin: auto;
				position: relative;
				margin-bottom: 40px;
				margin-top: 20px;
			}


			.header {
				width: 100%;
				height: 700px;
			}

			nav {
				width: 100%;
				margin: auto;
				line-height: 60px;
				position: sticky;
				padding: 2px;
				background-color: transparent;
				position: fixed;
				z-index: 1;
			}

			.active_nav {
				background-color:  rgb(255, 255, 255);
				top: 0;
				left: 0;
				right: 0;
				border-bottom: 3px solid black;
			}

			.logo img {
				width: 100px;
				height: 100px;
				float: left;
				padding: 10px;
			}

			.title {
				font-size: 40px;
				font-weight: 800;
				color: white;
				font-family: Pacifico;
				float: left;
				margin: 20px;
				padding: 5px;
			}

			.active_nav .title {
				color: navy;
			}

			.cover_header img {
				position: absolute;
				height: 700px;
				opacity: 0.8;
				width: 100%;
				background-size: cover;
			}

			.caption {
				position: relative;
				overflow: hidden;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				text-align: center;
				font-size: 60px;
				color: white;
				width: 800px;
			}

			.caption h2 {
				font-size: 60px;
				margin-bottom: 50px;
			}
			.caption p {
				font-size: 30px;
			}
		</style>

		<div class="header">
			<nav>
				<div class="wrapper">
					<div class="logo"><img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/globe-307634_1280.png"></div>
					<div class="title">Worldpedia</div>
				</div>
			</nav>

			<div class="cover_header">
				<img src="https://media.istockphoto.com/id/1205492659/video/planet-earth-is-spinning-in-outer-space-against-black-background-with-stars.jpg?s=640x640&k=20&c=_Nk3AXpf1ow-3JBo4hgcGG0x_3kuT6czozt5QnIgS6s="/>
			</div>

			<div class="caption">
			<h2>Welcome to Worldpedia</h2>
			<p>Website to know all information about your countries (Included the UN unrecognized countries) in one place</p>
		</div>
		</div>

		`
			const nav = document.querySelector('nav');

			window.addEventListener('scroll', ()=> {
				if (window.scrollY >=10) {
					nav.classList.add('active_nav');
				}

				else {
					nav.classList.remove('active_nav');
				}
			})
	}
}

customElements.define('header-part', headerPart);