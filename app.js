// import functions
import { getPokedex, theForce } from './fetch.js';

// grab DOM elements
const template = document.querySelector('#template');
const selector = document.querySelector('#api-select');
const list = document.querySelector('#list');

//console.log(template, selector, list);

async function loadPokedex() {
    const pokedex = await getPokedex;

    for (let pokemon of pokedex) {
        console.log(pokemon);

        const clone = template.textContent.cloneNode(true);
        const name = clone.querySelector('h2');
        const type = clone.querySelector('h6');
        const image = clone.querySelector('img');

        name.textContent = 'Name: ' + pokemon.pokemon;
        type.textContent = 'Egg: ' + pokemon.egg_group1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;

        list.appendChild(clone);

    }

}

async function useTheForce() {
    const peopleInStarWars = await theForce;

    for (let character of peopleInStarWars) {
        console.log(character);

        const clone = template.textContent.cloneNode(true);
        const name = clone.querySelector('h2');
        const type = clone.querySelector('h6');

        name.textContent = 'Name: ' + character.name;
        type.textContent = 'Gender: ' + character.gender;

        list.appendChild(clone);
    }

}

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
