import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliClienteComponent } from './dettagli-cliente.component';

describe('DettagliClienteComponent', () => {
  let component: DettagliClienteComponent;
  let fixture: ComponentFixture<DettagliClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
