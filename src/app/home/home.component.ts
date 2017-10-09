import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../model/product';
import { HomeService } from '../service/home.service';
import { NgFor } from '@angular/common';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})

export class HomeComponent implements OnInit {
  public products: Array<Product> = new Array<Product>();
  private homeService : HomeService;

  constructor(@Inject (HomeService) private homeServive) {
    this.homeService = homeServive;
   }

  ngOnInit() {
    this.homeService.getAllProducts().then(products => {
      products.forEach(item => {

        var prod = new Product();
        prod.name = item.name;
        prod.type = item.type;
        this.products.push(prod);
      })
    });
  }

}
