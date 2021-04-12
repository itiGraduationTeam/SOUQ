import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/Shared/Interfaces/IProduct';
import { ProductService } from 'src/Shared/Services/product.service';
declare var $: any;

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  constructor(private productServ: ProductService) {}

  fashionProductList: IProduct[] = [
    {
      name: '',
      image: [],
      brand: '',
      description: '',
      countInStock: 0,
      price: 0,
      category: '',
      subcategory: '',
      overview: '',
      rating: 0, //default = 0
      numReviews: 0, //default = 0
      discount: 0,
    },
  ];
  errorMessage: string = '';
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.productServ.getFashionProduct().subscribe(
      (data) => {
        console.log('data>>>>>>>>>>>>>>>', data);
        this.fashionProductList = data;
        console.log('popular', this.fashionProductList);
        $(document).ready(function () {
          return $('.fashion-slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                },
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                },
              },
              {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
        });
        this.loading = false;
      },
      (err) => (this.errorMessage = err)
    );
  }
}
