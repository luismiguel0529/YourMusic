import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YourmusicService } from '../../services/yourmusic.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
 artist:any = {};
 loading:boolean;
tracks:any[]=[];
  constructor( private _activateRouter:ActivatedRoute,private _yourMusicService:YourmusicService) {
    this.loading=true;
    this._activateRouter.params.subscribe(param =>{

      console.log(param['id'])
      this.getArtist( param['id']);
      this.getListsongs(param['id']);
     
    });
   }

  ngOnInit() {
  }


  getArtist(id:string){
    this.loading=true;
    this._yourMusicService.getArtist(id).subscribe( artist =>{

      console.log(artist);

      this.artist = artist;
      this.loading=false;
    });
  }


  getListsongs(id:string){
    this.loading=true;
    this._yourMusicService.getListsong(id).subscribe( songs => {
        console.log(songs);
        this.tracks = songs;
       
        this.loading=false;
    });

  }
}
