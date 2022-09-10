import {describe, expect, test} from '@jest/globals';
import {AreaRepositoryInMemory} from "../src/EventT/repository/AreaRepositoryInMemore"
import { EventRepositoryInMemory } from '../src/EventT/repository/EventRepositoryInMemore';
import { CreateArea } from '../src/EventT/application/CreateArea';
import { CreateEvent } from '../src/EventT/application/CreateEvent';
import { GetEvent } from '../src/EventT/application/GetEvent';
import {AddAreaEvent} from "../src/EventT/application/AddAreaEvent"


const areaRepository=new AreaRepositoryInMemory()
const eventRepository=new EventRepositoryInMemory()
describe('Event switch test', () => {
  const eventInput={event_date:"2022-09-18",number_of_areas:1,owner_id:"sipitale-22176",title:"Siga la luna"}
  const oneAreaRequest=[{category:"Normal", number_of_peaple:1, price:3500}]
  const arrayFlayers=["file:///home/shinobi/Transfer%C3%AAncias/Screenshot%202022-07-15%20at%2015-26-59%20Junte-se%20%C3%A0%20yourShadow%20Ignite%20Lab.png"]
  let idEvent=""
  let listAreas:any=[]
  
  test('save event', async () => {
    const event= await new CreateEvent({eventRepository}).execute(eventInput)
    idEvent=event
    expect(event).resolves;
   
  });
  test('get event', async () => {
    const event= await new GetEvent(eventRepository).execute(idEvent)
    const output= ["id","owner_id","number_of_areas","title","event_date","created_at","flyers","flyer","areas"]
    expect(Object.getOwnPropertyNames(event)).toEqual( output);
   
  });
  test('Create Area for event', async () => {
    const areas =await new CreateArea(areaRepository).execute({areas:oneAreaRequest,event_id:idEvent})
    listAreas=areas
    expect(areas.length).toBe(oneAreaRequest.length);
   
  });

  test('add Area in Event', async () => {
    const event= await new CreateEvent({eventRepository}).execute(eventInput)
    const areas = listAreas as string[]
    const success= new AddAreaEvent({areaRepository,eventRepository}).execute({event_id:event,areas})
    expect(await success).resolves;
   
  });
});