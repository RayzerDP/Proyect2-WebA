import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPComponent } from './buscar-p.component';

describe('BuscarPComponent', () => {
  let component: BuscarPComponent;
  let fixture: ComponentFixture<BuscarPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarPComponent]
    });
    fixture = TestBed.createComponent(BuscarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
