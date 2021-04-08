import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActionBarComponent } from './quick-action-bar.component';

describe('QuickActionBarComponent', () => {
  let component: QuickActionBarComponent;
  let fixture: ComponentFixture<QuickActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
