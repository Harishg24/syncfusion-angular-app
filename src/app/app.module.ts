import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule,RichTextEditorAllModule,ToolbarService,LinkService,ImageService,HtmlEditorService,TableService,QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RichTextEditorModule
  ],
  providers: [ToolbarService,ImageService,HtmlEditorService,LinkService,TableService,QuickToolbarService,RichTextEditorAllModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
