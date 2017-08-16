import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({

    templateUrl: `./reactiveForm-component.html`,
    styleUrls: ["./reactiveForm.css"]

})

export class ReactiveFormComponent implements OnInit{

    form: FormGroup;

    constructor(private fb: FormBuilder){}

    ngOnInit(){
        // this.form = new FormGroup({
        //     name: new FormControl(''),
        //     position: new FormControl('')
        // });
        this.form = this.fb.group({
            name: [''],
            position: ['']
        });
        console.log(this.form);
    }
    onSubmit(){
        console.log("form submitted", this.form.value);
    }
}