import {  Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',                                 
})
export class FormComponent {
  condition: boolean=true;
  names: string[] = [];
  currentValue: string = "";
  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();
  
  onNameChange(newName: string){
      this.userName = newName;
      this.userNameChange.emit(newName);
  }

  resetName() {
    this.userName = "";
    this.userNameChange.emit("");
  }
  
  addName(name: string) {
    if (name) {
      this.names.push(name);
    }
  }

  updateItem() {
    this.condition = true;
  }

  editItem() {
    this.condition = false;
  }
}
