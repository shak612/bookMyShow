const User = require("../../models/users");

exports.usersGetSingleService = async (query) => {
    try {
        const response = {
            status: false,
            data: []
        }
        const { user_id } = query;
        const user = await User.findByPk(user_id);
         
        if(user){
          response.status = true;
          response.data = user
        }else{
          response.message = "User Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from usersGetSingleService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}