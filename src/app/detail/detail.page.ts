import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data!: any;
  cast!: any;
  review!: any;
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
    this.data = history.state.data.item
    if (history.state.data.type === 'movie') {
      this.getCast()
      this.getReview()
    } else {
      this.getCastTv()
      this.getReviewTv()
    }
  }

  getCast() {
    this.getService.getCast(this.data.id).subscribe(res => {
      this.cast = res.body.cast.filter(e => e.profile_path).slice(0, 5)
    })
  }
  getReview() {
    this.getService.getReview(this.data.id).subscribe(res => {
      this.review = res.body.results.slice(0, 5)
    })
  }

  getCastTv() {
    this.getService.getCastTv(this.data.id).subscribe(res => {
      this.cast = res.body.cast.filter(e => e.profile_path).slice(0, 5)
    })
  }
  getReviewTv() {
    this.getService.getReviewTv(this.data.id).subscribe(res => {
      this.review = res.body.results.slice(0, 5)
    })
  }
  
}
