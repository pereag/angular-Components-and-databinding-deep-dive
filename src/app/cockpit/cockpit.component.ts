import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output('serverCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  
  onAddServer(name: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(name: HTMLInputElement) {

    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
