import {Component} from '@angular/core';

@Component({
    selector: '<template-form>',
    templateUrl: `./templatedrivenform.html`,
    styles: [`input.ng-invalid{border-left: 15px solid red;}
            input.ng-valid{border-left: 15px solid green;}`]
})

export class TemplateDrivenFormComponent{

    userName: string;

    onSubmit(value: any){
            console.log(value);
    }

}