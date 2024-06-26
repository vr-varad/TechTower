import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';

import { HasFormatter } from './interfaces/hasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);



form.addEventListener('submit',(e: Event) => {
    e.preventDefault();

    let values: [string,string,number] = [tofrom.value,details.value,amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
        console.log(doc);
    }else{
        doc = new Payment(...values);
        console.log(doc);
    }

    list.render(doc,type.value, 'end');

    tofrom.value = '';
    details.value = '';
    amount.value = '';
    
})