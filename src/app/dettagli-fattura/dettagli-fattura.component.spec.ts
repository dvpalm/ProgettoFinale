import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliFatturaComponent } from './dettagli-fattura.component';

describe('DettagliFatturaComponent', () => {
  let component: DettagliFatturaComponent;
  let fixture: ComponentFixture<DettagliFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
