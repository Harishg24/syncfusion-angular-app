import { Component, ViewChild } from '@angular/core';
import { RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { LocalStorageService } from './local-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syncfusion-angular-app';
  constructor( private localStorageService: LocalStorageService) {}
  @ViewChild('exampleRTE')
  public componentObject! : RichTextEditorComponent;

  public buttonElement! : HTMLElement | null; 
  public htmlContent! : string;

  getFormattedContent(){
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
    console.log(this.htmlContent)
  }
  get user(): any {
    return localStorage.getItem('Data');
}
  storeData(){
    this.localStorageService.setItem("Data",this.componentObject.getHtml())
  }

  public customToolbar: Object ={
    items: ['Bold','Italic','Undo','Redo','CreateTable','Image','CreateLink']
  }
}