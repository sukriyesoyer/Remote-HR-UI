import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnathorizedComponent } from './page-unathorized.component';

describe('PageUnathorizedComponent', () => {
  let component: PageUnathorizedComponent;
  let fixture: ComponentFixture<PageUnathorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUnathorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnathorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
