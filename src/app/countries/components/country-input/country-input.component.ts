import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

 @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
 @Output() onDebounce: EventEmitter<string> = new EventEmitter();
 @Input() placeHolder: String = "";

 debouncer: Subject<string> = new Subject();

 termino: string = '';

 buscar() {
   this.onEnter.emit(this.termino);
 }
 
 keyPress() {
  this.debouncer.next( this.termino );
 }

 ngOnInit() {
   this.debouncer
   .pipe(debounceTime(300))
   .subscribe( valor => {
     this.onDebounce.emit( valor )
   })
  }

}