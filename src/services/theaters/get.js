const Theater = require("../../models/theaters");

exports.theatersGetService = async () => {
    try {
        const response = {
            status: false,
            data: []
        }
        const theater = await Theater.findAll();

        if(theater){
          response.status = true;
          response.data = theater
        }else{
          response.message = "Theater Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from theatersGetService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}