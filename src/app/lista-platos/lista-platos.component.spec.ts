import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlatosComponent } from './lista-platos.component';

describe('ListaPlatosComponent', () => {
  let component: ListaPlatosComponent;
  let fixture: ComponentFixture<ListaPlatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPlatosComponent]
    });
    fixture = TestBed.createComponent(ListaPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
