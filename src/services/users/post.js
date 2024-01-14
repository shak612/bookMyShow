const User = require("../../models/users")

exports.usersPostService = async (data) => {
    console.log("data-------------", data)
    const response = {
        status: false,
        message: "User Not Created!!"
    }
    try {
        const { username, phone, email } = data;
        // await User.sync();
        const newUser = await User.create({
            username,
            phone,
            email
        })

        if(newUser){
          response.status = true;
          response.message = "User successfully created!"
        }
        return response;
    } catch (error) {
        console.log("error from usersPostService()", error)
        response.status = false;
        response.message = error;       
        return response        
    }
}