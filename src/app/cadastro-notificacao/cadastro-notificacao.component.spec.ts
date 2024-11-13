import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNotificacaoComponent } from './cadastro-notificacao.component';

describe('CadastroNotificacaoComponent', () => {
  let component: CadastroNotificacaoComponent;
  let fixture: ComponentFixture<CadastroNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroNotificacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
