import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LoaigiayService } from '../../services/loaigiay.service';
import { HomeLoaiGiay } from '../../entity/home-loaigiay';
import { HomeProduct } from '../../entity/home-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [DataService, LoaigiayService]
})
export class ProductsComponent implements OnInit {
  _loaiGiayArray: HomeLoaiGiay[];
  _tenGiay: string[] = [];
  _productArray: HomeProduct[] = [];

  constructor(private loaigiayService: LoaigiayService, private dataService: DataService) { }

  ngOnInit() {
    this.getLoaiGiay();
    this.getProduct();
  }

  //GET loai giay
  getLoaiGiay(): void {
    this.loaigiayService.getLoaiGiay()
      .subscribe(
        resultArray => {
          this._loaiGiayArray = resultArray;
          for (var i = 0; i < this._loaiGiayArray.length; i++) {
            this._tenGiay[i] = this._loaiGiayArray[i].tenLoai;
          }
        },
        error => console.log("Error: " + error)
      )
  }

  //GET product
  getProduct(): void {
    this.dataService.getAllProduct()
      .subscribe(
        resultArray => {
        this._productArray = resultArray;
          console.log(this._productArray);
        }
        , error => console.log("Error: " + error)
      )
  }

}
