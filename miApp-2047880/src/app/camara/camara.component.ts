import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../foto.model';
@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit  {

  constructor(private fotoSvc : FotoServiceService) { }

  ngOnInit() {}

  public fotos: Foto[] = this.fotoSvc.fotos;

  async tomarFoto(){
    await this.fotoSvc.addNewToGallery();
  }

}