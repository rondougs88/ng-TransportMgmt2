export class AvailTrips {

    bus_id: string;
    destination: string;
    from_time: string;
    price: number;
    source: string;
    to_time: string;

    constructor(
        bus_id: string,
        destination: string,
        from_time: string,
        price: number,
        source: string,
        to_time: string) {

        this.bus_id = bus_id;
        this.destination = destination;
        this.from_time = from_time;
        this.price = price;
        this.source = source;
        this.to_time = to_time;

    }
}
