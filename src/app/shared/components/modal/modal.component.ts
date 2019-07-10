import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
  Type,
  ChangeDetectorRef,
  AfterViewInit,
  Injectable,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';
import { ModalRef } from '../../classes/modal-ref';
import { Subject } from 'rxjs';

import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [
    trigger('panelInOut', [
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  componentRef: ComponentRef<any>
  childComponentType: Type<any>
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  @Injectable() data: any;

  private _onClose = new Subject<any>();
  public get onClose() {
    return this._onClose.asObservable();
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef,
    public viewContainerRef: ViewContainerRef,
    private modalRef: ModalRef
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.changeDetectorRef.detectChanges();
  }

  onOverlayClicked() {
    this.modalRef.close();
  }

  onModalClicked(event) {
    event.stopPropagation();
  }

  private close() {
    this._onClose.next();
  }

  private loadChildComponent(componentType: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.container.clear();

    this.componentRef = this.container.createComponent(componentFactory);
  }

}
