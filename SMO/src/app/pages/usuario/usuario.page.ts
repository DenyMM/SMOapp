import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  @ViewChild('slider') slider: Slides;
 page = '0';

selectedTab(index) {
    this.slider.slideTo(index);
}

async moveButton() {
    const index = await this.slider.getActiveIndex();
    this.page = index.toString();
} 

  constructor() { }

  ngOnInit() {
  }

}


