import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  id!: string;
  artists!: any;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService,
    private location: Location
  ) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
    //this.id=this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.spotify.getArtists(this.id).subscribe((resp: any) => {
      console.log(resp);
      this.artists = resp.artists;
    });
  }

  back(): void {
    this.location.back();
  }
}
