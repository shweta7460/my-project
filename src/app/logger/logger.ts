import { Component, Input,OnChanges,OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logger',
  imports: [],
  templateUrl: './logger.html',
  styleUrl: './logger.css',
})
export class Logger {
@Input() message:string='';
logs:string[]=[];
constructor(){
  this.logs.push('constructor called');
  console.log('logger construtor called')
}
ngOnInit():void{
  this.logs.push('ngoninit called');
  console.log('ngoninit logs are called')
}
ngOnDestroy():void{
  this.logs.push('ngondestroy called');
  console.log('ngondestroy logs are called')
  
}
ngOnChanges(changes: SimpleChanges): void {

    const changesString = JSON.stringify(changes, null, 2);

    this.logs.push(`ngOnChanges called. Changes: ${changesString}`);

    console.log(`Logger: ngOnChanges called. Changes:`, changes);

  }






}
