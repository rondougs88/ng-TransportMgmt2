import { Stop } from './stop';

export class GroupByCity {


    name: string;
    stops: Stop[];


    constructor(name: string, stops: Stop[]) {
        this.name = name;
        this.stops = stops;
    }
}
