import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAbogadoComponent } from './registrar-abogado.component';

describe('RegistrarAbogadoComponent', () => {
  let component: RegistrarAbogadoComponent;
  let fixture: ComponentFixture<RegistrarAbogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAbogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
