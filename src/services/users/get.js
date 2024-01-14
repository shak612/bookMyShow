const User = require("../../models/users");

exports.usersGetService = async () => {
    try {
        const response = {
            status: false,
            data: []
        }
        const user = await User.findAll();

        if(user){
          response.status = true;
          response.data = user
        }else{
          response.message = "User Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from usersPostService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}