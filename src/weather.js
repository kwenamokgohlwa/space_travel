class Weather {

 constructor(weather = "sunny") {
  this.weather = ((weather) => {
    let conditions = {
     sunny: { craterReducer: -10, vehicleReducer: [] },
     rainy: { craterReducer: +20, vehicleReducer: ["bike"] },
     windy: { craterReducer: 0, vehicleReducer: [] }
    }

    return conditions[weather];
   })(weather);
  }

  getCrater() {
   return this.weather.craterReducer;
  }

  getVehicle() {
   return this.weather.vehicleReducer;
  }

  toString() {
   return JSON.stringify(this.weather);
  }
}

module.exports.Weather = Weather;