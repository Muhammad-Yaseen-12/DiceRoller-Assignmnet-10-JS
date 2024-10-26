function diceRoller() {
    var diceResult = document.getElementById("diceResult");
    var diceImages = document.getElementById("diceImages");
    var value = Math.round(Math.random() * 5) + 1;
    diceResult.innerHTML = "Dice Result:" + value;
    diceImages.innerHTML = '<img src="./dice_images/' + value + '.png" ' + value + '" class="dice-image">';
}
