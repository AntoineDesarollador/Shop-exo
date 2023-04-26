// random produit sur le home

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { getRandomInteger };