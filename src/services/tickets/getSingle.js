const Tickets = require("../../models/tickets");

exports.ticketsGetSingleService = async (query) => {
    try {
        const response = {
            status: false,
            data: []
        }
        const { ticket_id } = query;
        const ticket = await Tickets.findByPk(ticket_id);
        
        if(ticket){
          response.status = true;
          response.data = ticket
        }else{
          response.message = "Tickets Not Found!!"
        }
        return response;
    } catch (error) {
        console.log("error from ticketsGetSingleService()", error)
        const response = {
            status: false,
            message: error
        }
        return response        
    }
}