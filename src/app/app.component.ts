import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syncfusion-angular-app';
  public tools: object = {
    items: ['Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'SubScript', 'SuperScript', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
    };
}
