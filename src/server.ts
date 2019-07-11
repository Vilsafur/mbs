import { Application } from 'express';
import express from "express";
import Router from './router';

/**
 * Allows to start an Express server
 */
export default class Server {
    // private variable named "port" and its type must be number
    private port: number; 

    /** 
     * Server's constructor. 
     * It takes a number as parameter.
     * It cannot take any other type else the project won't compile
     */
    constructor(port:number){
        this.port = port;
    }

    /**
     * Starts the server and does not return anything
     */
    public start(): void {
        const app: Application = express();

        new Router(app);

        // Server is listening to port defined when Server was initiated
        app.listen(this.port, () => {
            console.log("Server is running on port " + this.port);
        });
    }
}