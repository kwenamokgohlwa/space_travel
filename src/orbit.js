class Orbit {

 constructor(extender = { orbitLimit1: 12, orbitLimit2: 10 }, reducer = -10) {
  this.orbit = ((extender, reducer) => {
   let orbits = {
    orbit1: {
     name: "Orbit1",
     limit: extender.orbitLimit1, mm: 18, craters: ((amount) => {
      return amount + (amount / 100) * reducer;
     })(20)
    },
    orbit2: {
     name: "Orbit2",
     limit: extender.orbitLimit2, mm: 20, craters: ((amount) => {
      return amount + (amount / 100) * reducer;
     })(10)
    }
   }

   return orbits;
  })(extender, reducer);
 }

 getOrbit() {
  return this.orbit;
 }

 toString() {
  return JSON.stringify(this.orbit);
 }
}

module.exports.Orbit = Orbit;
