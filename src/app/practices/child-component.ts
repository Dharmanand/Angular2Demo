import {Component, EventEmitter} from '@angular/core';

@Component({

    selector: '<child-temp>',
    template: `
    
            <h2>Child component !</h2>
            <label>Enter child text</label>
            <input type="text" #childtext (keyup)="onChange(childtext.value)">
            <input type="text" #childtext1 (keyup)="onChange1(childtext1.value)">
            <label>Parent text is: </label>{{parentData}}
    
    `,
    inputs: ['parentData'],
    outputs: ['childEvent', 'childEvent1']

})


export class ChildComponent{
    public parentData: string;
    childEvent = new EventEmitter<string>();
    childEvent1 = new EventEmitter<string>();

    onChange(value:string) {
        this.childEvent.emit(value);
    }
    onChange1(value:string) {
        this.childEvent1.emit(value);
    }
}