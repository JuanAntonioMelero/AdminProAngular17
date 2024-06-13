import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearCategoriasProductosComponent } from './modal-crear-categorias-productos.component';

describe('ModalCrearCategoriasProductosComponent', () => {
  let component: ModalCrearCategoriasProductosComponent;
  let fixture: ComponentFixture<ModalCrearCategoriasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCrearCategoriasProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCrearCategoriasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
