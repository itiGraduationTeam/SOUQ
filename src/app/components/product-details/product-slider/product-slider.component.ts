import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/Shared/Interfaces/IProduct';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  @Input() currentProduct:any;
  images:string[]=[];
  currentImg:any;
  restImages:string []=[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentProduct']) {
      this.images=this.currentProduct.image
      this.currentImg=this.currentProduct.image[0]
      this.restImages =this.images.slice(1)
    }
}
  selectImg(img:any){
    this.currentImg= img
  }

}
