class Vehicle {

 constructor(extender = {orbit1: 12, orbit2: 10}, reducer = [""]) {
  this.vehicle = ((extender, reducer) => {
   let vehicles = {
    bike: this._buildVehicle("bike", extender, 10, 2),
    tuktuk: this._buildVehicle("tuktuk", extender, 12, 1),
    car: this._buildVehicle("car", extender, 20, 3)
   }

   reducer.forEach((vehicle) =>  {
    delete vehicles[vehicle];
   })

   return vehicles;
  })(extender, reducer);
 }

 _buildVehicle(name = "bike", extender = {orbitLimit1: 12, orbitLimit2: 10}, maxSpeed, craterSpeed) {
  let result = {
   orbit1: {name, vehicleSpeed: Math.min(maxSpeed, extender.orbitLimit1), craterSpeed: craterSpeed},
   orbit2: {name, vehicleSpeed: Math.min(maxSpeed, extender.orbitLimit2), craterSpeed: craterSpeed}
  };

  return result;
 }

 getVehicle() {
  return this.vehicle;
 }

 toString() {
  return JSON.stringify(this.vehicle);
 }
}

module.exports.Vehicle = Vehicle;