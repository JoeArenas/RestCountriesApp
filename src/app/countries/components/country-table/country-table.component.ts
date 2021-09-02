import { Component, Input } from '@angular/core';
import { SearchCountriesResponse } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {

  @Input() countries: SearchCountriesResponse[] = [];

  constructor() { }

}
