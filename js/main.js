var blueberries = {
    name: "Blueberries",
    latinName: "Vaccinium Corymbosum",
    shrub: true,
    energy: 240,
    carbohydrates: 14.49,
    protein: 0.74
};

var grapes = {
    name: "Grapes",
    latinName: "Vitis Vinifera",
    shrub: false,
    energy: 288,
    carbohydrates: 18.81,
    protein: 0.72
};

var redCurrant = {
    name: "Red Currant",
    latinName: "Ribes Rubrum",
    shrub: true,
    energy: 234,
    carbohydrates: 13.8,
    protein: 1.4
};
    
var writeFruit = function (fruit) {
    document.write("<h1>" + fruit.name + "</h1>");
    document.write("<dl>");
    document.write("<dt>Latin Name</dt>");
    document.write("<dd>" + fruit.latinName + "</dd>");
    document.write("<dt>Grows on Shrub</dt>");
    document.write("<dd>" + fruit.shrub + "</dd>");
    document.write("<dt>Energy</dt>");
    document.write("<dd>" + fruit.energy + "</dd>");
    document.write("<dt>Carbohydrates</dt>");
    document.write("<dd>" + fruit.carbohydrates + "</dd>");
    document.write("<dt>Protein</dt>");
    document.write("<dd>" + fruit.protein + "</dd>");
    document.write("</dl>");
};

var allFruits = [blueberries, grapes, redCurrant];

allFruits.forEach(writeFruit);


//writeFruit(redCurrant);
//writeFruit(grapes);
//writeFruit(blueberries);
