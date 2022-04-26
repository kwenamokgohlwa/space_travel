describe("Vehicle", function() {
    const Vehicle = require("./vehicle").Vehicle;
    const Orbit = require("./orbit").Orbit;

    beforeEach(function(){
        let trip1 = new Vehicle(new Orbit({ orbit1: 12, orbit2: 10 }, [""]));
        let trip2 = new Vehicle(new Orbit({ orbitLimit1: 14, orbitLimit2: 20 }, [""]));
    });
})