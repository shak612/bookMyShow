const Movie = require("../../models/movies");

exports.moviesGetService = async () => {
    try {
        const response = {
            status: false,
            data: []
        }
        const movie = await Movie.findAll();

        if(movie){
          response.status = true;
          response.data = movie
        }else{
          response.message = "Movie Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from moviesGetService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}