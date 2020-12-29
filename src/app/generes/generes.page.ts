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
    if (history.state.data.type === 'movie') {
      this.getByGeneres()
    } else {
      this.getByGeneresTv()
    }
  }
  getByGeneres(event?: any) {
    const id = history.state.data.id
    this.getService.getByGeneres(id, this.page).subscribe(res => {
      this.total_pages = res.body.total_pages
      this.apiData = this.apiData.concat(res.body.results)
      if (event) {
        event.target.complete();
      }
    })
  }

  getByGeneresTv(event?: any) {
    const id = history.state.data.id
    this.getService.getByGeneresTv(id, this.page).subscribe(res => {
      this.total_pages = res.body.total_pages
      this.apiData = this.apiData.concat(res.body.results)
      if (event) {
        event.target.complete();
      }
    })
  }
  loadMore(event: any) {
    this.page++;
    if (history.state.data.type === 'movie') {
      this.getByGeneres(event)
    } else {
      this.getByGeneresTv(event)
    }
    if (this.page === this.total_pages) {
      event.target.disabled = false;
    }
  }

}
