import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaComuniComponent } from './tabella-comuni.component';

describe('TabellaComuniComponent', () => {
  let component: TabellaComuniComponent;
  let fixture: ComponentFixture<TabellaComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
