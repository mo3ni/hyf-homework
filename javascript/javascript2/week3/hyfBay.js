// Homework assignment hyfBay - get the okay'est products here
// JavaScript 2 week6 
const productNames, prefixes;
    function getAvailableProducts (){
    function getRandomInt(min, max) {
        max = Math.floor(max);
        min = Math.ceil(min);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomItem(availableProduct) {
        return availableProduct[getRandomInt(0, availableProduct.length - 1)];
    } // above peice of codes copied
    const getRandomProductName = function(){
         prefixes = ['Wet', 'Green', 'Sloppy','Used', 'Fantastic', '"Used"', 'Broken', 'Beautiful'];
        productNames = ['Milk', 'Chalk', 'Fish fingers','Carrot', 'Drone', 'Giftcard', 'Puppy', 'Car', 'Shirt', 'Socks', 'Chocolate'];
        let selectedProductName = getRandomItem(productNames);
        const prefixesNames = getRandomInt(0, 10) > 6;
        if (prefixesNames) {
            const getPrefixes =  prefixes[getRandomInt(0,  prefixes.length - 1)];
            selectedProductName = prefixes + " " + selectedProductName;
        }
        return selectedProductName;}
    function getRandomCountries() {
        const availableCountries = ['Germany', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
        const numberOfCountries = getRandomInt(1, 3);
        const randomCountries = [];
        while (randomCountries.length < numberOfCountries) {
            const randomIndex = getRandomInt(0, availableCountries.length - 1);
            const randomCountry = availableCountries[randomIndex];
            if(!randomCountries.includes(randomCountry)) {                
                randomCountries.push(randomCountry);
            }
        }
        return randomCountries;
    }
    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(null, Array(numberOfAvailableProducts))
        .map(() => {
            const name = getRandomProductname();
            return {
                id: `${name}${getRandomInt(0, 100000)}`,
                name,
                price: getRandomInt(0, 10000),
                rating: getRandomInt(1, 10),
                shipsTo: getRandomCountries(), 
            };
        });
    return availableProducts;
}
    function sendPrice(prices){
    console.log("Sending these prices: " + prices + "to server");
}