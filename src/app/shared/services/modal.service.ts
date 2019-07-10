import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, Type, EmbeddedViewRef, } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalInjector } from '../classes/modal-injector';
import { ModalRef } from '../classes/modal-ref';
import { ModalConfig } from '../classes/modal-config';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalComponentRef: ComponentRef<ModalComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
    ) {}

  public open(componentType: Type<any>, config?: ModalConfig) {
    const modalRef = this.appendModalComponentToBody(config);
    this.modalComponentRef.instance.childComponentType = componentType;
    return modalRef;
  }

  private appendModalComponentToBody(config: ModalConfig) {
    const map = new WeakMap();
    const modalRef = new ModalRef();
    map.set(ModalConfig, config);
    map.set(ModalRef, modalRef);

    const factory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = factory.create(new ModalInjector(this.injector, map));

    this.applicationRef.attachView(componentRef.hostView);
    const afterClosedSub = modalRef.afterClosed.subscribe(() => {
      this.removeModalComponentFromBody(componentRef);
      afterClosedSub.unsubscribe();
    });
    this.modalComponentRef = componentRef;
    const element = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(element);
    this.modalComponentRef.instance.onClose.subscribe(() => {
      this.removeModalComponentFromBody(componentRef);
    });

    return modalRef;
  }

  private removeModalComponentFromBody(dialogComponentRef: ComponentRef<ModalComponent>) {
    this.applicationRef.detachView(dialogComponentRef.hostView);
    this.modalComponentRef.destroy();
  }

}
