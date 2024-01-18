const Show = require("../../models/shows");

exports.showsGetService = async () => {
    try {
        const response = {
            status: false,
            data: []
        }
        const show = await Show.findAll();
        
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