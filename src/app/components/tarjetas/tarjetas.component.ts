import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent{

  
  @Input() items:any[] = [];
  constructor( private _router:Router) { }

  seeArtist( item :any ){

    console.log(item);


    let artistsID;

    if (item.type == "artist") {

      artistsID = item.id;
      
    }else{

      artistsID = item.artists[0].id;

    }

    this._router.navigate(['/artist',artistsID]);
   }

}
