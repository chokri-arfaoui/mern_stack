var superHeros = ["Superman", "SpiderMan", "Batman", "WonderWoman"]
// superHeros is a global variable : can be seen by every function and loop


function printRandomRange(list) {
    // Heros is block variable : can be seen only inside this function block (printRandomRange)
    function generateRandomRange() {
        var index = Math.floor(Math.random() * list.length)
        for (var i = 0; i <= index; i++) {
            var item = list[i]
            console.log(item);
        }
    }
    generateRandomRange()
}
printRandomRange(superHeros, "**")