const Orbit = require("./orbit").Orbit;
const Vehicle = require("./vehicle").Vehicle;
const Weather = require("./weather").Weather;

class Space {

    constructor(weather = "sunny", speedReducer = {orbitLimit1: 12, orbitLimit2: 10}) {
        this.space = (() => {
            let orbit = new Orbit(speedReducer, this._weatherReducer(weather).orbit).getOrbit();
            let vehicle = new Vehicle(speedReducer, this._weatherReducer(weather).vehicle).getVehicle();

            let travelOptions = [];
            let reducedTravelOptions = [];

            for(const optionVehicle in vehicle)  {
                for(const optionOrbit in vehicle[optionVehicle]) {
                    travelOptions.push({orbit: orbit[optionOrbit], vehicle: vehicle[optionVehicle][optionOrbit]});
                }
            }

            travelOptions.forEach((trip) => {
                reducedTravelOptions.push(this._travel(trip.orbit, trip.vehicle));
            })

            return this._reduceTravel(reducedTravelOptions);
        })();
    }

    _weatherReducer(condition = "sunny") {
        let weather = new Weather(condition);
        return { orbit: weather.getCrater(), vehicle: weather.getVehicle() };
    };

    _travel(orbit, vehicle) {
       return {orbit, vehicle, time: ((orbit.mm)/(vehicle.vehicleSpeed) + (vehicle.craterSpeed * orbit.craters)/(60))};
    }

    _reduceTravel(travel = []) {
        let optimalRoute = travel.reduce((minimum, next) => {
            return Math.min(minimum.time, next.time) >= minimum.time ? minimum : next;
        }, Number.MAX_SAFE_INTEGER);

        return optimalRoute;
    }

    toString() {
        return JSON.stringify(this.space);
    }
}

module.exports.Space = Space;