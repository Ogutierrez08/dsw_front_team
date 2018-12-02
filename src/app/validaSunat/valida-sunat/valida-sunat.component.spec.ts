import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaSunatComponent } from './valida-sunat.component';

describe('ValidaSunatComponent', () => {
  let component: ValidaSunatComponent;
  let fixture: ComponentFixture<ValidaSunatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaSunatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaSunatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
