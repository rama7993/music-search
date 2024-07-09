import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {
  id!: string;
  tracks!: any;
  loading: boolean = true;

  constructor(
    private spotifyService: SpotifyService,
    route: ActivatedRoute,
    private location: Location
  ) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.spotifyService.getTracks(this.id).subscribe((resp: any) => {
      console.log(resp);
      this.tracks = resp?.tracks;
      this.loading = false;
    });
  }

  back(): void {
    this.location.back();
  }
}
