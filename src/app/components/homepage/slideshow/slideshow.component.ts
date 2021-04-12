import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  Images = [
    {
      src:
        'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/L_1617530327_GW-MB-Yamish-en.jpg',
      alt: 'Image 1',
    },
    {
      src:
        'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/L_1617903224_GW-MB-Kitchen-en.jpg',
      alt: 'Image 2',
    },
    {
      src:
        'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/L_1617530610_GW-MB-Apparel-en.jpg',
      alt: 'Image 3',
    },
    {
      src:
        'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/L_1617530477_GW-MB-Home_care-en.jpg',
      alt: 'Image 4',
    },
  ];

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  constructor() {}

  ngOnInit(): void {}
}
