import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboRepresentantesComponent } from './combo-representantes.component';

describe('ComboRepresentantesComponent', () => {
  let component: ComboRepresentantesComponent;
  let fixture: ComponentFixture<ComboRepresentantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboRepresentantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboRepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
