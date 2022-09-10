
import {expect, test} from '@jest/globals';
import { randomUUID } from 'crypto';
import { Flyer } from './Flyer';
test("sho be to create on flyer",()=>{
        const url="file:///home/shinobi/Transfer%C3%AAncias/Screenshot%202022-07-15%20at%2015-26-59%20Junte-se%20%C3%A0%20yourShadow%20Ignite%20Lab.png"
        const input={
            event_id:randomUUID(),
            url_flyer:url

        }
        const flyer =new Flyer(input)
        expect(flyer).toBeInstanceOf(Flyer)
})