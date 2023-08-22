import { Component, ViewChild, ViewRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-comp',
  templateUrl: './forms-comp.component.html',
  styleUrls: ['./forms-comp.component.scss']
})
export class FormsCompComponent {
  @ViewChild('coderDetails') codDetail: NgForm;

  levels=['basic', 'advanced', 'pro'];
  defaultLevel="basic";

  userData = {
    email: '',
    level:'',
    password: ''
  }

  onSubmit(){
    console.log(this.userData);
    // this.userData.email= this.codDetail.value.emailadd;
    // this.userData.password= this.codDetail.value.password;
    // this.userData.level = this.codDetail.value.level;
    // this.codDetail.reset()
  }

}
