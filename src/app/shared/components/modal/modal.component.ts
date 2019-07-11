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
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ])
  ],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;
  @ViewChild('container', { read: ViewContainerRef, static: false }) container: ViewContainerRef;
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

  private loadChildComponent(componentType: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.container.clear();

    this.componentRef = this.container.createComponent(componentFactory);
  }

}

