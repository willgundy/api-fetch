// import functions
import { getPokedex, theForce } from './fetch.js';

// grab DOM elements
const template = document.querySelector('#template');
const selector = document.querySelector('#api-select');
const list = document.querySelector('#list');


//console.log(template, selector, list);

async function loadPokedex() {
    const pokedex = await getPokedex();

    for (let pokemon of pokedex) {

        const clone = template.content.cloneNode(true);
        const name = clone.querySelector('h2');
        const type = clone.querySelector('h6');
        const image = clone.querySelector('img');

        name.textContent = 'Name: ' + pokemon.pokemon;
        type.textContent = 'Egg: ' + pokemon.egg_group_1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;

        list.appendChild(clone);

    }

}

async function useTheForce() {
    const peopleInStarWars = await theForce();

    for (let character of peopleInStarWars) {

        const clone = template.content.cloneNode(true);
        const name = clone.querySelector('h2');
        const type = clone.querySelector('h6');

        name.textContent = 'Name: ' + character.name;
        type.textContent = 'Gender: ' + character.gender;

        list.appendChild(clone);
    }

}

// set event listeners 
selector.addEventListener('change', (event) => {
    const selectedAPI = event.target.value;

    if (selectedAPI === 'pokemon') {
        list.innerHTML = '';
        loadPokedex();
    } else if (selectedAPI === 'star-wars') {
        list.innerHTML = '';
        useTheForce();
    } else {
        list.innerHTML = '';
        list.innerHTML = 'Select an API!';
    }
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
