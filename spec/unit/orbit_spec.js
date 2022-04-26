describe("Orbit", function() {
    const Orbit = require("./orbit").Orbit;

    beforeEach(function(){
        let trip1 = new Orbit({ orbitLimit1: 12, orbitLimit2: 10 }, -10);
        let trip2 = new Orbit({ orbitLimit1: 14, orbitLimit2: 20 }, 20);
    });
})