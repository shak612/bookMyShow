const Movie = require("../../models/movies");

exports.moviesPostService = async (data) => {
    console.log("movies_data-------------", data)
    const response = {
        status: false,
        message: "Movie Not Created!!"
    }
    try {
        const { movie_name, genre } = data;
        // await Movie.sync();
        const newMovie = await Movie.create({
            movie_name,
            genre
        })

        if(newMovie){
          response.status = true;
          response.message = "Movie successfully created!"
        }
        return response;
    } catch (error) {
        console.log("error from moviesPostService()", error)
        response.status = false;
        response.message = error;       
        return response        
    }
}