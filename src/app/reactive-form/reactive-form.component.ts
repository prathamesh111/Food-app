import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  genders =['male', 'female'];
  profileForm: FormGroup;

  ngOnInit(): void {

    this.profileForm= new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('', Validators.required),
        locations: new FormArray([]),
      }),
      
    });
    
  }

  onSubmit(){
    console.log(this.profileForm);
  }

  
  get locations() :FormArray {
    return (this.profileForm.get('address.locations') as FormArray);
  }

  onAddLocation() {
    const control = new FormControl(null);
    this.locations.push(control);
    console.log(this.locations);
  }  
  
}
