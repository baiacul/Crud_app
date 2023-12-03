import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesComponentComponent } from './informacoes-component.component';

describe('InformacoesComponentComponent', () => {
  let component: InformacoesComponentComponent;
  let fixture: ComponentFixture<InformacoesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacoesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacoesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
