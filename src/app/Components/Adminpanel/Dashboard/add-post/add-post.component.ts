import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';
// import jsonDoc from '../../../../doc';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
//const quill = new Quill('#editor');

export class AddPostComponent implements OnInit, OnDestroy{

  constructor() {
  }

  editordoc :String ='';

  editor: Editor = new Editor({
    content: '',
    history: true,
    keyboardShortcuts: true,
    inputRules: true,
    plugins: [], //https://prosemirror.net/docs/guide/#state
    nodeViews: {}, //https://prosemirror.net/docs/guide/#state,
    attributes: {}, // https://prosemirror.net/docs/ref/#view.EditorProps.attributes
    linkValidationPattern: '',
    parseOptions: {}, // https://prosemirror.net/docs/ref/#model.ParseOptions
  });
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    // or, set options for link:
    //[{ link: { showOpenInNewTab: false } }, 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear', 'indent', 'outdent'],
    ['superscript', 'subscript'],
    ['undo', 'redo'],
  ];



  form = new FormGroup({
    editorContent: new FormControl(
      { value: this.editordoc , disabled: false },
      Validators.required()
    ),
  });

  get doc() {
    return this.form.get('editorContent');
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
