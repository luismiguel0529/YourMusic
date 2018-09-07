import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { YourmusicService } from '../../services/yourmusic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newsong:any[]=[];
  loading:boolean;
  error:boolean;
  errormensaje:any;
  constructor( private _yourMusicService:YourmusicService) {

    this.loading=true;
    this.error=false;


    console.log("Servicio listo para usar");
    this._yourMusicService.getNewReleases().subscribe(data =>{
      console.log(data);
      this.newsong = data;
      this.loading=false;
    } ,(errorServicio)=>{ 
        this.error = true;
        console.log(errorServicio);
        this.loading=false;
        this.errormensaje=errorServicio.error.error.message;
        
    });
   }




  ngOnInit() {
  }

}
