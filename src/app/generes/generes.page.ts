import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-generes',
  templateUrl: './generes.page.html',
  styleUrls: ['./generes.page.scss'],
})
export class GeneresPage implements OnInit {
  title!: string;
  page = 1;
  total_pages!: number;
  apiData = [];
  constructor(
    public loadingController: LoadingController,
    private getService: GetService,
    private location: Location
  ) { }

  async ngOnInit() {

    let loading = await this.loadingController.create({
      message: "loafing...",
      spinner: 'crescent',
      duration: 300
    });
    await loading.present();
    if (!history.state.data) {
      this.location.back();
      return
    }
    this.title = history.state.data.title;
    await setTimeout(() => {
      this.getByGenres()
    }, 0);
  }
  getByGenres(event?: any) {
    const id = history.state.data.id
    this.getService.getByGeneres(id, this.page).subscribe(res => {
      console.log(res.body);
      this.total_pages = res.body.total_pages
      this.apiData = this.apiData.concat(res.body.results)
      if (event) {
        event.target.complete();
      }
    })
  }

  loadMore(event: any) {
    this.page++;
    this.getByGenres(event);
    if (this.page === this.total_pages) {
      event.target.disabled = false;
    }
  }

}
