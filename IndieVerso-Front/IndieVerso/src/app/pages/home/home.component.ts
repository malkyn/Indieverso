import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backgroundColor: string = 'blue'; // Cor de fundo inicial
  logoSrc: string = '../../../../assets/images/logoindieversovermelho.png'; // Logo inicial
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    debugger
    this.updateLogoBasedOnBackgroundColor();
    const bannerElement = this.el.nativeElement.querySelector('.banner');
    const observer = new MutationObserver(() => {
      this.updateLogoBasedOnBackgroundColor();
    });
    observer.observe(bannerElement, { attributes: true, attributeFilter: ['style'] });
  }


 updateLogoBasedOnBackgroundColor(): void {
    const bannerElement = this.el.nativeElement.querySelector('.banner');
    const backgroundColor = getComputedStyle(bannerElement).backgroundColor;

    const colorLogoMap: { [key: string]: string } = {
      'rgb(255, 0, 0)': '../../../../assets/images/logoindieversoazul.png', // vermelho
      'rgb(0, 0, 255)': '../../../../assets/images/logoindieversovermelho.png', // azul
      // Adicione mais mapeamentos de cores e logos conforme necessário
    };

    if (colorLogoMap[backgroundColor]) {
      this.logoSrc = colorLogoMap[backgroundColor];
    } else {
      this.logoSrc = 'path/to/default/logo.png'; // Logo padrão
    }
}
}
