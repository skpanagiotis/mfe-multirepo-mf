import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild('form', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  title = 'shell';

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: 'FormComponent',
    });

    const ref = this.viewContainer.createComponent(m.FormComponent);
    // const compInstance = ref.instance;
  }
}
