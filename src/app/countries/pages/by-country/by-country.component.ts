import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { SearchCountriesResponse } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  term: string = '';
  isError: boolean = false;
  countries: SearchCountriesResponse[] = [];
  sugestedCountries: SearchCountriesResponse[] = [];
  showSugested: boolean = false;

  constructor( private cs: CountryService ) { }

  search( term: string) {
    this.showSugested = false;
    this.isError = false;
    this.term = term;
    this.cs.searchByCountry( this.term ).subscribe( countries => {
      console.log( countries );
      this.countries = countries;
    }, (error) => {
      this.isError = true;
      this.countries = [];
      console.log( error );
    } )
  }

  sugestions( term: string) {
    this.showSugested = true;
    this.isError = false;
    this.term = term;
    this.cs.searchByCountry( term )
    .subscribe( countries => this.sugestedCountries = countries.splice( 0,5 ),
    (err) =>  this.sugestedCountries = []);
  }

  searchSugested( term: string) {
    this.search( term );
  }
}
