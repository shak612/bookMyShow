const Movies = require("../../models/movies");

exports.moviesGetSingleService = async (query) => {
    try {
        const response = {
            status: false,
            data: []
        }
        const { movie_id } = query;
        const movie = await Movies.findByPk(movie_id);
        
        if(movie){
          response.status = true;
          response.data = movie
        }else{
          response.message = "Movies Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from moviesGetSingleService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}