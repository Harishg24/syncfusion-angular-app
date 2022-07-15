import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule,ToolbarService,LinkService,ImageService,HtmlEditorService,TableService,QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorModule
  ],
  providers: [ToolbarService,ImageService,HtmlEditorService,LinkService,TableService,QuickToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
