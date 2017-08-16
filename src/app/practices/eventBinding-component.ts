import {Component} from '@angular/core'

@Component({

    selector:'<app-tags>',
    template:`
        <div class="container">
            <button type="button" class="btn btn-info" (click)='clickMe()'>Click Me</button>
        </div>
    `

})
export class EventBindingComponent{

clickMe(){
    console.log("Button clicked !!");
}

}