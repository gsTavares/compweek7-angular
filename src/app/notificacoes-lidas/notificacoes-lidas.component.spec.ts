import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacoesLidasComponent } from './notificacoes-lidas.component';

describe('NotificacoesLidasComponent', () => {
  let component: NotificacoesLidasComponent;
  let fixture: ComponentFixture<NotificacoesLidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificacoesLidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacoesLidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
