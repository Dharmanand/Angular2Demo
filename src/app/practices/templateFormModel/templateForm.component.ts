import { Component, OnInit} from '@angular/core';

export class USER {
    uname:string;
    uposition:string;
}

@Component({

    templateUrl: `./templateForm-component.html`,
    styleUrls: ["./templateForm.css"]

})

export class TemplateFormComponent implements OnInit{
     
    user: USER;
    submitted = false;
    ngOnInit(){
        this.user = {
            uname:'',
            uposition:''
        }
    }

     onSubmit(){
         console.log(this.user);
         this.submitted=true;
     }

     get diagnostic(){
        return JSON.stringify(this.user);
     }
}