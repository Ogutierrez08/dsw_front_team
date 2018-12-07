import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizaEnviadasComponent } from './cotiza-enviadas.component';

describe('CotizaEnviadasComponent', () => {
  let component: CotizaEnviadasComponent;
  let fixture: ComponentFixture<CotizaEnviadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizaEnviadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizaEnviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
