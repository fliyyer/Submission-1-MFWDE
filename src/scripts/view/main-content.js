import data from '../../DATA.json';

const mainContent = () => {
    let restaurantElement = '';

    data.restaurants.forEach(restaurant => {
        restaurantElement += `
        <section class="box">
            <img src="${restaurant.pictureId}" alt="${restaurant.name} Image">
            <p class="info">${restaurant.city} <b>★ ${restaurant.rating}</b></p>
            <h3 class="title">${restaurant.name}</h3>
            <p>${restaurant.description}</p>
        </section>`;
    });
    document.querySelector(".wrapper").innerHTML = restaurantElement;
    document.querySelector(".jumbotron").style.backgroundImage = "url('./images/heros/hero-image_2.jpg')";

    class customFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<footer>
                                <p>Copyright © 2022 - Cafetaria</p>
                              </footer>`
        }
    }
    
    customElements.define('custom-footer', customFooter);
}

export default mainContent;