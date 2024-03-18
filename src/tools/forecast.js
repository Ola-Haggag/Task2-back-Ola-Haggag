const request = require("request")
const forecast = (latitude , longtitude , callback) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=9b78f25dcc6f4514b36225559240303&q=" + latitude + "," + longtitude
    
    request ({url , json : true} , (error , response) => {       
    
      if (error) {
           callback ("unable to connect weather api service " , undefined)
      } else if (response.body.error) {    
        callback (response.body.error.message  , undefined)
      }else {
    
        callback (undefined , response.body.location.name + " it is " + response.body.current.condition.text
       + "and temp is  " + response.body.current.temp_c + "\n \n Capital: it's capital is " + response.body.location.tz_id)
      }
    })
    }

    module.exports = forecast