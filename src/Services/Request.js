export default class Request {
    constructor(req) {
        this.req = req;
    }
    async getResource() {
        const res = await fetch(this.req);
        const body = await res.json();
        return body;
    }

    getAllTrades() {
        return this.getResource();
    }
}