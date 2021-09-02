import { Component } from '@angular/core';
import { SearchCountriesResponse } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }

    `
  ]
})
export class ByRegionComponent {

  regions : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  isError: boolean = false;
  countries: SearchCountriesResponse[] = [];

  constructor( private cs: CountryService ) { }

  activateRegion( region: string ) {

    if( this.activeRegion !== region ){
      
      this.countries = [];
      this.activeRegion=region;
      this.isError = false;
      this.cs.searchByRegion( this.activeRegion ).subscribe( countries => {
        console.log( countries );
        this.countries = countries;
      }, (error) => {
        this.isError = true;
        this.countries = [];
        console.log( error );
      } )

    }
  }

  getCSSClass( region: string ): string {
    
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary';

  }

}
