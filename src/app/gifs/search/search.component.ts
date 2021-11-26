import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  constructor() { }

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  search(){
    const valor = this.txtSearch.nativeElement.value;
    this.txtSearch.nativeElement.value = '';
  }
}
