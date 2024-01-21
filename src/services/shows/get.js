const Shows = require("../../models/shows");
const Movies = require("../../models/movies");
const Theaters = require("../../models/theaters");

exports.showsGetService = async (params, query) => {
    console.log("showsGetService", params, query)
    try {
        const response = {
            status: false,
            data: []
        }
          
        const { theater_id } = params;
        const { dateAndTime } = query;
        let show = [];

        if(theater_id != null && dateAndTime != undefined){
            show = await Shows.findAll({
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
        }else if(theater_id != null){
            show = await Shows.findAll({
                where: {
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
        }

        if(show){
          response.status = true;
          response.data = show
        }else{
          response.message = "Show Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from showsGetService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}