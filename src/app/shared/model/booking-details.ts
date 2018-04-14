

export class BookingDetails {

    bookingId: string;
    bookingDate: string;
    name: string;
    email: string;
    mobileNumber: number;
    bus_id: string;
    destination: string;
    from_time: string;
    price: number;
    source: string;
    to_time: string;
    _id?: string;

    constructor(
        bookingId: string,
        bookingDate: string,
        name: string,
        email: string,
        mobileNumber: number,
        bus_id: string,
        destination: string,
        from_time: string,
        price: number,
        source: string,
        to_time: string,
        _id?: string
    ) {
        this.bookingId = bookingId;
        this.bookingDate = bookingDate;
        this.name = name;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.bus_id = bus_id;
        this.destination = destination;
        this.from_time = from_time;
        this.price = price;
        this.source = source;
        this.to_time = to_time;
        this._id = _id;
    }
}
