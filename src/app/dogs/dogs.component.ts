import { Component, OnInit } from '@angular/core';
import{Dog} from '../dogs/dogs'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dog:Dog={
    id:1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
