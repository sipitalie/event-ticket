import {expect,describe, test} from '@jest/globals';
import { Event } from './Event';


describe("Event Entity  create",()=>{
    test("must create an event",()=>{
    const eventInput={event_date:"2022-09-18",number_of_areas:1,owner_id:"sipitale-22176",title:"Siga la luna"}
    const event =new Event(eventInput)
    expect(event).toBeInstanceOf(Event)           
    })

    test("connot to crate an Event with date is before three days from today's date",()=>{
        const eventInput={event_date:"2022-09-12",number_of_areas:1,owner_id:"sipitale-22176",title:"Siga la luna"}
        expect(()=>{
            return new Event(eventInput)}).toThrowError(Error)
    })
})
