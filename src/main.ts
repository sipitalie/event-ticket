
import ExpressAdapter from "./PurchaseTicket/infra/http/ExpressAdapter";
import {GetTicket} from "./PurchaseTicket/application/GetTicket";
import {PurchaseTicket} from "./PurchaseTicket/application/PurchaseTicket";
import MainController from "./PurchaseTicket/infra/controller/MainController";
import {AreaRepositoryInMemory} from "./EventT/repository/AreaRepositoryInMemore"
import {EventRepositoryInMemory} from "./EventT/repository/EventRepositoryInMemore"

import { TicketRepositoryInMemory } from "./PurchaseTicket/infra/repository/PurchaseTicketRepositoryInMemore";

async function init () {
	const httpServer = new ExpressAdapter();
    const areaRepository=new AreaRepositoryInMemory()
    const eventRepository=new EventRepositoryInMemory()
    const ticketRepository=new TicketRepositoryInMemory()
    const  getTicket=new GetTicket(ticketRepository)
    const purchaseTicket= new PurchaseTicket({areaRepository,eventRepository,ticketRepository})
	new MainController(httpServer, purchaseTicket, getTicket);

	httpServer.listen(3000);
}

init();