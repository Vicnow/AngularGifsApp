import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {
  
  get resultados(){
    return this.gifService.resultado;
  }

  constructor(private gifService: GifsService) { }

}
