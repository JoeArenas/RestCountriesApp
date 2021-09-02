import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { SearchCountriesResponse } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: SearchCountriesResponse;

  constructor( private ar: ActivatedRoute, private cs: CountryService ) { }

  ngOnInit(): void {

    this.ar.params.pipe( switchMap( 
        ({ id }) => this.cs.searchCountryByCode( id )),
        tap(console.log)
      )
      .subscribe(  country => {
        this.country = country;
      })
    // this.ar.params
    // .subscribe( ({ id }) => {
    //   console.log( id );
    //   this.cs.searchCountryByCode( id )
    //   .subscribe( country => {
    //     console.log(country);
    //   })
    // })

  }

}
