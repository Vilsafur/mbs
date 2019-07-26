/// <reference types="./types/Request" />
import { Request, Response, Application } from 'express';
import serviceController from './controllers/serviceController';
import messagesController from './controllers/messagesController';

/**
 * Define all routes for this application
 */
export default class Router {
  /**
   * Instance of server's application
   * @var {Application} app
   */
  private app: Application; 

  private controllers: {[name: string]: object} = {}

  /** 
   * Router's constructor. 
   */
  constructor(app:Application){
    this.app = app;
    this.instanciateControllers();
    this.getRoutes();
  }

  private instanciateControllers() {
    this.controllers['serviceController'] = new serviceController(this.app);
    this.controllers['messagesController'] = new messagesController(this.app);
  }

  private getRoutes(): void {
    // route for POST /services
    // Register service to the Microservice Bus
    this.app.post('/services', (request: Request, response: Response) => {
      const controller = this.controllers['serviceController'] as serviceController;
      controller.register(request, response);
    })

    // route for DELETE /services
    // Unregister service from the Microservice Bus
    this.app.delete('/services/:uuid', (request: Request, response: Response) => {
      const controller = this.controllers['serviceController'] as serviceController;
      controller.delete(request, response);
    })

    // route for POST /messages/:messageType
    // Send a message to the Bus
    this.app.post('/messages/:messageType', (request: Request, response: Response) => {
      const controller = this.controllers['messagesController'] as messagesController;
      controller.getMessage(request, response);
    })
  }
}
