import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaFattureComponent } from './tabella-fatture.component';

describe('TabellaFattureComponent', () => {
  let component: TabellaFattureComponent;
  let fixture: ComponentFixture<TabellaFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
