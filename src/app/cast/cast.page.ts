import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.page.html',
  styleUrls: ['./cast.page.scss'],
})
export class CastPage implements OnInit {
  data!: any;
  apiData!: any;
  movieData!: any;

  constructor(
    private location: Location,
    private getService: GetService,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    let loading = await this.loadingController.create({
      message: "loafing...",
      spinner: 'crescent',
      duration: 300
    });
    await loading.present();
    if (!history.state.data) {
      this.location.back()
      return
    }
    this.data = history.state.data
    this.getCastDetail()
    this.getCastMovie()
  }
  getCastDetail() {
    this.getService.getCastDetail(this.data.id).subscribe(res => {
      this.apiData = res.body
    })
  }
  getCastMovie() {
    this.getService.getCastMovie(this.data.id).subscribe(res => {
      this.movieData = res.body.cast.filter(e => e.backdrop_path)
    })
  }

}
