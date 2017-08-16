import {Component} from '@angular/core';

@Component({

    selector: '<parent-temp>',
    template: `
    <div class="container">
            <h2>Parent component !</h2>
            <label>Enter Parent text</label>
            <input type="text" #parentText (keyup)="0">
            <label>Child text is: </label>{{childData}}----{{childData1}}
            <child-temp (childEvent)="childData=$event" (childEvent1)="childData1=$event" [parentData]="parentText.value"></child-temp>

        </div>
    `
})

export class ParentComponent{
    public childData: string;
    public childData1: string;
}