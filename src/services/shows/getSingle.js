const Shows = require("../../models/shows");

exports.showsGetSingleService = async (query) => {
    try {
        const response = {
            status: false,
            data: []
        }
        const { show_id } = query;
        const show = await Shows.findByPk(show_id);
        
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