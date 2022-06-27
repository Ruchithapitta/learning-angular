import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugserviceService {
  info(message : String) : void { 
    console.log(message); 
    
 }

  constructor() { }
}
