import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  id!: string
  albums?: any

  constructor(
    private route: ActivatedRoute, private ss: SpotifyService, private location: Location
  ) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.ss.getAlbums(this.id).subscribe(
      (resp: any) => {
        console.log(resp)
        this.albums = resp.albums
      }
    )
  }

  back(): void {
    this.location.back();
  }
}
