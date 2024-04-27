import { Injectable } from '@angular/core';
import { Food } from '../shared/model/food';
import { sample_foods } from 'src/data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
}
