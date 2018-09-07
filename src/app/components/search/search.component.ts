import { Component, OnInit } from '@angular/core';
import { YourmusicService } from '../../services/yourmusic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artists:any[]=[];
  loading:boolean;
  constructor(private _yourMusicService:YourmusicService) {
      
    
   }
  
  ngOnInit() {
  }

  searchArtist(termino:string){
    this.loading=true;
   console.log(termino);
    this._yourMusicService.getArtists( termino ).subscribe( data =>  {
      console.log(data);
      this.artists = data;
      this.loading=false;
    });
  }
}
