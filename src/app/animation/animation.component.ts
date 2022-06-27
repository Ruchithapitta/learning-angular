import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('enlarge', [
      state('start', style({
        height: '150px'
      })),
      state('end', style({
        height: '250px'
      })),
      transition('start => end', [
        animate('1s 2s')
      ]),
      transition('end => start', [
        animate('1s 2s')
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  title = 'Animation Application';
  isEnlarge: boolean = false;
  buttonText: string = "Enlarge";

  triggerAnimation() {
    this.isEnlarge = !this.isEnlarge;
    if (this.isEnlarge)
      this.buttonText = "Shrink";
    else
      this.buttonText = "Enlarge";
  }

  requiredForm!: FormGroup;

  userName1: any;
  formdata: any;
  errors: any;
  nameField: any;
  lastNameField: any;

  constructor(private fb: FormBuilder) {
    this.myForm();
  }

  myForm(): void {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.nameField = this.requiredForm.controls['name'];
    this.lastNameField = this.requiredForm.controls['lastName'];
    this.errors = this.requiredForm.controls['name'].errors;
    console.log(this.requiredForm);
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({ userName1: new FormControl("Tutorialspoint") });
  }

  onClickSubmit(result: { userName: string; }): void {
    console.log("you jhave entered:" + result.userName)
  }

  onClick(data: { userName1: any; }): void {
    this.userName1 = data.userName1;
    alert("iam clicked")
  }

}



