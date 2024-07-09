import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string = 'devara';
  type: string = 'tracks';
  tracks?: any;
  loading: boolean = true;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.searchTracks(this.query);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  searchTracks(query: string) {
    this.spotifyService.search(this.query, this.type).subscribe((resp: any) => {
      console.log(resp);
      this.tracks = resp.tracks;
      this.loading = false;
    });
  }
}
