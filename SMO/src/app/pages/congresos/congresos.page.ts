import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../../image-viewer/image-viewer.component';


@Component({
  selector: 'app-congresos',
  templateUrl: './congresos.page.html',
  styleUrls: ['./congresos.page.scss'],
})
export class CongresosPage implements OnInit {

  // imagen a mostrar
  imgSource = '../../assets/expo-oftalmo-1.png';

   slideOpts = {
     centeredSlides: 'true'
   };


   constructor(public modalController: ModalController) {}

    // funcion paraa la imagen en el modal//
    async viewImage(src: string) {
      const modal = await this.modalController.create({
        component: ImageViewerComponent,
        componentProps: {
          imgSource: src,
          imgSource1:false
        },
     cssClass: 'modal-fullscreen',
     keyboardClose: true,
     showBackdrop: true
   });

      return await modal.present();
 }



  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
