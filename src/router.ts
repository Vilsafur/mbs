/// <reference types="./types/Request" />
import { Application, Request, Response } from "express";
import messagesController from "./controllers/MessagesController";
import serviceController from "./controllers/ServiceController";
import { Controllernterface } from "./types/Controllers";

/**
 * Define all routes for this application
 */
export default class Router {
  /**
   * Instance of server's application
   * @var {Application} app
   */
  private app: Application;

  private controllers: Controllernterface = {
    messagesController: new messagesController(this.app),
    serviceController: new serviceController(this.app),
  };

  /**
   * Router's constructor.
   */
  constructor(app: Application) {
    this.app = app;
    this.getRoutes();
  }

  private getRoutes(): void {
    // route for POST /services
    // Register service to the Microservice Bus
    this.app.post("/services", (request: Request, response: Response) => {
      const controller = this.controllers.serviceController;
      controller.register(request, response);
    });

    // route for DELETE /services
    // Unregister service from the Microservice Bus
    this.app.delete("/services/:uuid", (request: Request, response: Response) => {
      const controller = this.controllers.serviceController;
      controller.delete(request, response);
    });

    // route for POST /messages/:messageType
    // Send a message to the Bus
    this.app.post("/messages/:messageType", (request: Request, response: Response) => {
      const controller = this.controllers.messagesController;
      controller.getMessage(request, response);
    });
  }
}
