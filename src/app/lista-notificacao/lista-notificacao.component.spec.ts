import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNotificacaoComponent } from './lista-notificacao.component';

describe('ListaNotificacaoComponent', () => {
  let component: ListaNotificacaoComponent;
  let fixture: ComponentFixture<ListaNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaNotificacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
