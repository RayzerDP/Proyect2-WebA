import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPComponent } from './menu-p.component';

describe('MenuPComponent', () => {
  let component: MenuPComponent;
  let fixture: ComponentFixture<MenuPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPComponent]
    });
    fixture = TestBed.createComponent(MenuPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
