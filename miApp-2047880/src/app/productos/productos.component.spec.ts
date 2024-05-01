import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NgModule, } from '@angular/core';

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [IonicModule.forRoot(),IonicModule,RouterModule,NgModule]
    }).compileComponents();


    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
