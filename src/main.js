const {Space} = require("./space");

let space1 = new Space("sunny", {orbitLimit1: 12, orbitLimit2: 10});

console.log(space1.toString());

let space2 = new Space("windy", {orbitLimit1: 14, orbitLimit2: 20});

console.log(space2.toString());
