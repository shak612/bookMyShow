const Show = require("../../models/shows");

exports.showsPostService = async (data) => {
    console.log("shows_data-------------", data)
    const response = {
        status: false,
        message: "Show Not Created!!"
    }
    try {
        const { dateAndTime, movie_id, theater_id} = data;
        // await Show.sync();
        const newShow = await Show.create({
            dateAndTime,
            movie_id,
            theater_id
        })

        if(newShow){
          response.status = true;
          response.message = "Show successfully created!"
        }
        return response;
    } catch (error) {
        console.log("error from showsPostService()", error)
        response.status = false;
        response.message = error;       
        return response        
    }
}