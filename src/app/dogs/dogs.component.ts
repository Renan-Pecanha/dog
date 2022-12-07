import { Component, OnInit } from '@angular/core';
import { Dog } from '../dogs/dogs';
import { DogService } from '../dogs/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogComponent implements OnInit
{

  dog?: Dog;

  constructor(private DogService: DogService)
  {

  }
  ngOnInit(): void
  {
   this.getDog();
  }

  getDog(): void
  {
  this.DogService.getDog()
  .subscribe((dogs: any) => this.dog = dogs)
  }

}
