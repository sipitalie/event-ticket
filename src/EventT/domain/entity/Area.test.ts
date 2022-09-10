import {expect,describe, test} from '@jest/globals';
import { randomUUID } from 'crypto';
import { Area } from './Area';


describe("Area Entity  create",()=>{
    test("must create two areas for an event",()=>{
    const event_id=randomUUID()
    const area =new Area({category:"Normal", number_of_peaple:1, price:3500, event_id})
    expect(area).toBeInstanceOf(Area)           
    })
    
    test("connot to crate an new area with pass invalid props",()=>{
        const event_id=randomUUID()
        expect(()=>{
            return new Area({category:"Normal", number_of_peaple:0, price:3500, event_id})}).toThrowError(Error)
    })
})
