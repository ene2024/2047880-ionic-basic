import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { ProductoDetalleComponent } from './producto-detalle.component';
import { RouterModule } from '@angular/router';
describe('ProductoDetalleComponent', () => {
  let component: ProductoDetalleComponent;
  let fixture: ComponentFixture<ProductoDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoDetalleComponent ],
      imports: [IonicModule.forRoot(),IonicModule,RouterModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
