import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { SearchCountriesResponse } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  termino: string = '';
  isError: boolean = false;
  countries: SearchCountriesResponse[] = [];

  constructor( private cs: CountryService ) { }

  buscar( termino: string) {
    this.isError = false;
    this.termino = termino;
    this.cs.searchByCapital( this.termino ).subscribe( countries => {
      console.log( countries );
      this.countries = countries;
    }, (error) => {
      this.isError = true;
      this.countries = [];
      console.log( error );
    } )
  }

}
