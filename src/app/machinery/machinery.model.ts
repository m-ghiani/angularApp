import { Coordinate } from './coordinate.model';

export class Machinery {
    _id:number;
    gps=new Coordinate();
    state:string;
    id_prod:Array<number>;
    type:Array<string>;
}