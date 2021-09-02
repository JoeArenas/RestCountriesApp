import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCountriesResponse } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' )
  }

  constructor( private http: HttpClient ) { }

  searchByCountry( termino: string ): Observable<SearchCountriesResponse[]> {
    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<SearchCountriesResponse[]>( url, { params: this.httpParams } );
  }

  searchByCapital( termino: string ): Observable<SearchCountriesResponse[]> {
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<SearchCountriesResponse[]>( url, { params: this.httpParams } );
  }

  searchCountryByCode( id: string ): Observable<SearchCountriesResponse> {
    const url = `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<SearchCountriesResponse>( url );
  }

  searchByRegion( region: string ): Observable<SearchCountriesResponse[]> {
    const url = `${ this.apiURL }/region/${ region }`;
    return this.http.get<SearchCountriesResponse[]>( url, { params: this.httpParams } );
  }
}
