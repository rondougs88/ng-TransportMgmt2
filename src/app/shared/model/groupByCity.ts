import { Stop } from './stop';

export class GroupByCity {


    city: string;
    stops: Stop[];


    constructor(city: string, stops: Stop[]) {
        this.city = city;
        this.stops = stops;
    }
}
