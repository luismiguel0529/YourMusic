import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YourmusicService {

  constructor( private _http:HttpClient ) { 
    
   }

  getQuery( query:string ){

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBHUS5DPn_NiiRzmHtKZVWwKCHkbbGocFpv_ihJk-XaT1WI_reyYL9h1OkGWFRO9ErNyxL6E2jz0WElHQU'
    });  
    return this._http.get(url,{ headers });


  }
  getNewReleases(){
    
     /* const headers = new HttpHeaders({
        'Authorization':'Bearer BQCcMuM-K-tu0k0_uAjJsjYWWt1daWmptj6-pUV1GrdI44sdg5FQ9Yqgs5gxNa4GojifTUPmKx6pdljcI28'
      });  
    */

    return this.getQuery('browse/new-releases').pipe(map(data =>
       data['albums'].items
    ));


    /*
      return this._http.get("https://api.spotify.com/v1/browse/new-releases",{ headers })
      .pipe(map(data =>{ 
        return data['albums'].items;
      }));
      */

  }


  getArtists(termino:string){

    /*
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCcMuM-K-tu0k0_uAjJsjYWWt1daWmptj6-pUV1GrdI44sdg5FQ9Yqgs5gxNa4GojifTUPmKx6pdljcI28'
    });  
  */

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map( data => data['artists'].items ));
/*
    return this._http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers })
    .pipe(map( data =>{

      return data['artists'].items
    } ));
*/
  }



  getArtist( id:string){

 
    return this.getQuery(`artists/${ id }`);

   


  }

  getListsong( id:string){

 

    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(map(data=> data['tracks']))
    //return this.getQuery(`artists/${id}/albums`).pipe(map(data=> data['items']))

   
   
 
  }

 
}
