import HttpServer from "./HttpServer";
import express from "express";

export default class ExpressAdapter implements HttpServer {
	app: any;

	constructor () {
		this.app = express();
		this.app.use(express.json());
	}

	on(method: string, url: string, callback: Function): void {
      
            this.app[method](url, async function (req: any, res: any) {
                try {
                const output = await callback(req.params, req.body);
                res.json(output);
                } catch (error:any) {
                    if(error.message==="Ticket not found"){
                        return res.status(404).json({message:error.message})
                    }
                    return res.status(500).json({error:error.message})
                }
            });	
	}

	listen(port: number): void {
		this.app.listen(port);
	}

}