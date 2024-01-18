const Ticket = require("../../models/tickets");

exports.ticketsGetService = async () => {
    try {
        const response = {
            status: false,
            data: []
        }
        const ticket = await Ticket.findAll();

        if(ticket){
          response.status = true;
          response.data = ticket
        }else{
          response.message = "Ticket Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from ticketsGetService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}