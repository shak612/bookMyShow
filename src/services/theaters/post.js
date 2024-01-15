const Theater = require("../../models/theaters");

exports.theatersPostService = async (data) => {
    console.log("theaters_data-------------", data)
    const response = {
        status: false,
        message: "Theater Not Created!!"
    }
    try {
        const { theater_name, location } = data;
        // await Theater.sync();
        const newTheater = await Theater.create({
            theater_name,
            location
        })

        if(newTheater){
          response.status = true;
          response.message = "Theater successfully created!"
        }
        return response;
    } catch (error) {
        console.log("error from theatersPostService()", error)
        response.status = false;
        response.message = error;       
        return response        
    }
}