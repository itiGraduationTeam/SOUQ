import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-user-properties',
  templateUrl: './user-properties.component.html',
  styleUrls: ['./user-properties.component.scss']
})
export class UserPropertiesComponent implements OnInit {
list=[
  {
    id:1,
    icon:"fas fa-shopping-bag",
    label:"My Orders",
    router:"orders",
    isSelect:false
  },
  {
    icon:"fas fa-map-marker-alt",
    label:"Shipping Address",
    router:"shipping-address",
    id:2,
    isSelect:false
  },
  {
    icon:"fas fa-heart",
    label:"Wish Lists",
    router:"wish-lists",
    id:3,
    isSelect:false
  },
  {
    icon:"fas fa-bookmark",
    label:"Recommended",
    router:"recommended",
    id:4,
    isSelect:false
  }
]

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  navigate(itemRouter:any){
    this.router.navigate([itemRouter.router,itemRouter.id],{relativeTo:this.activatedRoute})
  }
}
