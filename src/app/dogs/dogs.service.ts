import { Injectable } from '@angular/core';
import { Dog } from './dogs'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService
{

  private dogUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http:HttpClient)
   {

   }

  getDog(): Observable<Dog>
  {
    return this.http.get<Dog>(this.dogUrl);
  }
}
