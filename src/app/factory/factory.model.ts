import { Coordinate } from './coordiante.model';

export class Factory {
    _id:number;
    address : string;
    gps=new Coordinate();
    id_producer:number;
}