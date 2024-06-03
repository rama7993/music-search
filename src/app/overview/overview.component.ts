import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id!:string
  albums!:any
  constructor(private http:HttpClient,private route:ActivatedRoute,private ss:SpotifyService,private location:Location) {
    this.route.params.subscribe(
      (params)=>{
        this.id=params['id']
      }
    )
   }

  ngOnInit(): void {
    this.ss.getOverview(this.id).subscribe(
      (resp:any)=>{
        console.log(resp)
        this.albums=resp
      }
    )
  }
  

  back(): void {
    this.location.back();
  }
}
