var axios = require("axios");

var helpers = {
	postUser: function(firstName, lastName, email, password, role) {
    var newUser = { 
    	firstName: firstName,
    	lastName: lastName,
    	email: email,
    	password: password,
    	role: role
    };
    return axios.post("/api/users", newUser)
      .then(function(response) {
        console.log(response.data._id);
        return response.data._id;
      });
    
  },
  postParent: function(userID, address, phoneNumber, numChildren, emergencyFirstName, emergencyLastName, emergencyPhoneNumber, doctorLastName, doctorPhoneNumber, wifiPassword){
    var newParent = {
      _userID: userID, 
      address: address, 
      phoneNumber: phoneNumber, 
      numChildren: numChildren, 
      emergencyFirstName: emergencyFirstName, 
      emergencyLastName: emergencyLastName, 
      emergencyPhoneNumber: emergencyPhoneNumber, 
      doctorLastName: doctorLastName, 
      doctorPhoneNumber: doctorPhoneNumber, 
      wifiPassword: wifiPassword
    };
    return axios.post("/api/parents", newParent)
      .then(function(response){
        return response.data;
      });
  },
  postSitter: function(userID, birthdayMonth, birthdayDay, birthdayYear, gender, isAvailable, phoneNumber, bio, certifications, ratePerHour, numFavs){
    var newSitter = {
      _userID: userID,
      birthdayMonth: birthdayMonth,
      birthdayDay: birthdayDay,
      birthdayYear: birthdayYear,
      gender: gender,
      isAvailable: isAvailable, 
      phoneNumber: phoneNumber,
      bio: bio,
      certifications: certifications, 
      ratePerHour: ratePerHour,
      numFavs: numFavs
    };
    return axios.post("/api/babysitters", newSitter)
      .then(function(response){
        return response.data;
      });
  },
  getAllBabysitters: function() {
    return axios.get("/api/babysitters")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  getAllAppointments: function() {
    return axios.get("/api/appointments")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  postAppointment: function(apptDateTime, projectedDuration, sitterAccepted, appointmentBooked) {
    var newAppt = { 
      apptDateTime: apptDateTime,
      projectedDuration: projectedDuration,
      sitterAccepted: sitterAccepted,
      appointmentBooked: appointmentBooked
      };
    return axios.post("/api/appointments", newAppt)
      .then(function(response) {
        console.log("axios results", response.data);
        return response.data;
      });
  }

}


module.exports = helpers;