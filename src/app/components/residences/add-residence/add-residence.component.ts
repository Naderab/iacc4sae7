import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {

  //<form></form>
  residence!: FormGroup;

  ngOnInit(): void {
    this.residence =
      new FormGroup({
      //<input>
      name: new FormControl("",[Validators.required,Validators.minLength(3)]),
        address: new FormGroup({
          street: new FormControl(),
          city:new FormControl()
      }),
      image: new FormControl(),
      status:new FormControl()
      })
  }

  add() {
    console.log(this.residence.get('name')!.value)
    console.log(this.residence.value)
  }

}
