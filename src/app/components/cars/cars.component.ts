import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegEx} from '../../constants'
import {Router} from "@angular/router";
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
cars:ICar[];
form:FormGroup;
updatedCar:ICar|null;

  constructor(private carService:CarService) {
    this.createForm()
  }

  createForm():void{
    this.form= new  FormGroup({
       model: new FormControl(null,[Validators.pattern(RegEx.model)]),
      year: new FormControl(null,[Validators.min(1990),Validators.max(new Date().getFullYear())]),
      price: new FormControl(null,[Validators.min(0), Validators.max(1000000)])
    })
  }
  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars=value)
  }

  save() {
      if (!this.updatedCar){
          const car:ICar = this.form.getRawValue()
          this.carService.createCar(car).subscribe(value =>this.cars.push(car))
      }else {
          this.carService.update(this.updatedCar.id, this.form.getRawValue()) .subscribe(value =>{
              const updateCar = this.cars.find(f => f.id === this.updatedCar?.id);
              Object.assign(updateCar, value)
              this.updatedCar = null

          } )
      }

      this.form.reset()
  }

    delate(id:number):void {
        this.carService.delateCar(id).subscribe(() =>
        { const index =   this.cars.findIndex(value => {value.id === id});
            this.cars.splice(index, 1)
        }
        )
    }

    update(car: ICar) {
      this.updatedCar=car
    this.form.setValue({model:car.model,year:car.year,price:car.price})
    }

}
