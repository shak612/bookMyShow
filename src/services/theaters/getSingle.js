const Theater = require("../../models/theaters");

exports.theatersGetSingleService = async (query) => {
    try {
        const response = {
            status: false,
            data: []
        }
        const { theater_id } = query;
        const theater = await Theater.findByPk(theater_id);
        
        if(theater){
          response.status = true;
          response.data = theater
        }else{
          response.message = "Theater Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from theatersGetSingleService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}