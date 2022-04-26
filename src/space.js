const Orbit = require("./orbit").Orbit;
const Vehicle = require("./vehicle").Vehicle;
const Weather = require("./weather").Weather;

class Space {

    constructor(weather = "sunny", speedReducer = {orbitLimit1: 12, orbitLimit2: 10}) {
        this.space = (() => {
            let orbit = new Orbit(speedReducer, this._weatherReducer(weather).orbit).getOrbit();
            let vehicle = new Vehicle(speedReducer, this._weatherReducer(weather).vehicle).getVehicle();

            let trips = [];
            let reducedTrips = [];

            for(const optionVehicle in vehicle)  {
                for(const optionOrbit in vehicle[optionVehicle]) {
                    trips.push({orbit: orbit[optionOrbit], vehicle: vehicle[optionVehicle][optionOrbit]});
                }
            }

            trips.forEach((trip) => {
                reducedTrips.push(this._trip(trip.orbit, trip.vehicle));
            })

            return this._reduceTrips(reducedTrips);
        })();
    }

    _weatherReducer(condition = "sunny") {
        let weather = new Weather(condition);
        return { orbit: weather.getOrbit(), vehicle: weather.getVehicle() };
    };

    _trip(orbit, vehicle) {
       return {orbit, vehicle, time: ((orbit.mm)/(vehicle.vehicleSpeed) + (vehicle.craterSpeed * orbit.craters)/(60))};
    }

    _reduceTrips(travel = []) {
        let optimalRoute = travel.reduce((minimum, next) => {
            return Math.min(minimum.time, next.time) >= minimum.time ? minimum : next;
        }, Number.MAX_SAFE_INTEGER);

        return optimalRoute;
    }

    toString() {
        return "Vehicle " + this.space.vehicle.name + " on " + this.space.orbit.name;
    }
}

module.exports.Space = Space;