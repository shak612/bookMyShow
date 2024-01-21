const Shows = require("../../models/shows");
const Movies = require("../../models/movies")
const Theaters = require("../../models/theaters")

exports.showsGetSingleService = async (params, query) => {
    try {
        const response = {
            status: false,
            data: []
        }
        const { dateAndTime, theater_id} = params;

        const show = await Shows.findAll({
            where: {
              dateAndTime: dateAndTime,
              theater_id: theater_id
            },
            include: [
              {
                model: Movies,
                attributes: ['movie_name', 'genre'], // Include only specific attributes from Movie model
              },
              {
                model: Theaters,
                attributes: ['theater_name', 'location'], // Include only specific attributes from Theater model
              },
            ],
        })
        
        if(show){
          response.status = true;
          response.data = show
        }else{
          response.message = "Shows Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from showsGetSingleService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}