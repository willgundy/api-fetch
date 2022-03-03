//file to fetch information from APIs for the page
export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

    const response = await fetch(url);

    const jsonResponse = await response.json();

    return jsonResponse.results;
}

export async function getDarkSided() {
    let url = 'https://swapi.dev/api/people';

    const response = await fetch(url);

    const jsonResponse = await response.json();

    return jsonResponse.results;
}