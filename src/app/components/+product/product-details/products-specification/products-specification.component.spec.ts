import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSpecificationComponent } from './products-specification.component';

describe('ProductsSpecificationComponent', () => {
  let component: ProductsSpecificationComponent;
  let fixture: ComponentFixture<ProductsSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
