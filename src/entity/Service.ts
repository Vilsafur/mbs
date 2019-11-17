import { ServiceInterface } from "../types/Service";

export default class Service {
    /** @var {string} name The name; */
    private name: string;
    /** @var {string} version The version */
    private version: string;
    /** @var {string} ip The ip */
    private ip: string;
    /** @var {number} port The port */
    private port: number;
    /** @var {string[]} messageAccepted The list of messages types accepted */
    private messageAccepted: string[];
    /** @var {string} url The url */
    private url: string;
    /** @var uuid {string} The uuid */
    private uuid?: string;

    /**
     * The constructor
     * @param data The data of this service
     */
    constructor(data: ServiceInterface) {
        this.name = data.name;
        this.version = data.version;
        this.ip = data.ip;
        this.port = data.port;
        this.messageAccepted = data.messageAccepted;
        this.url = data.url;
        this.uuid = data.uuid;
    }

    /**
     * Get the name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set the name
     * @param name The name
     */
    public setName(name: string): void {
        this.name = name;
    }

    /**
     * Get the version
     */
    public getVersion(): string {
        return this.version;
    }

    /**
     * Set the version
     * @param version The version
     */
    public setVersion(version: string): void {
        this.version = version;
    }

    /**
     * Get the ip
     */
    public getIp(): string {
        return this.ip;
    }

    /**
     * Set the ip
     * @param ip The ip
     */
    public setIp(ip: string): void {
        this.ip = ip;
    }

    /**
     * Get the port
     */
    public getPort(): number {
        return this.port;
    }

    /**
     * Set the port
     * @param port The port
     */
    public setPort(port: number): void {
        this.port = port;
    }

    /**
     * Get the list of messages types
     */
    public getMessageAccepted(): string[] {
        return this.messageAccepted;
    }

    /**
     * Set the list of messages type
     * @param messageAccepted The list of messages types
     */
    public setMessageAccepted(messageAccepted: string[]): void {
        this.messageAccepted = messageAccepted;
    }

    /**
     * Get the url
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * Set the url
     * @param url The url
     */
    public setUrl(url: string): void {
        this.url = url;
    }

    /**
     * Get the uuid
     */
    public getUuid?(): string|undefined {
        return this.uuid;
    }

    /**
     * Set the uuid
     * @param uuid The uuid
     */
    public setUuid?(uuid: string): void {
        this.uuid = uuid;
    }

    /**
     * Send a message to this service
     * @param message The message to send
     */
    public sendMessage(message: string|object) {
        const url = "http://" + this.ip + ":" + this.port + "/" + this.url;
        return fetch(url, {
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then((response) => response.json());
    }
}
