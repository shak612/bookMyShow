const Ticket = require("../../models/tickets");

exports.ticketsPostService = async (data) => {
    console.log("tickets_data-------------", data)
    const response = {
        status: false,
        message: "Ticket Not Created!!"
    }
    try {
        const { price, user_id, show_id} = data;
        await Ticket.sync();
        const newTicket = await Ticket.create({
            price,
            user_id,
            show_id
        })

        if(newTicket){
          response.status = true;
          response.message = "Ticket successfully created!"
        }
        return response;
    } catch (error) {
        console.log("error from ticketsPostService()", error)
        response.status = false;
        response.message = error;       
        return response        
    }
}