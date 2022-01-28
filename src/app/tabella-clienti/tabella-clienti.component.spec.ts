import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaClientiComponent } from './tabella-clienti.component';

describe('TabellaClientiComponent', () => {
  let component: TabellaClientiComponent;
  let fixture: ComponentFixture<TabellaClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
