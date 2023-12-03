import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisaComponentComponent } from './barra-pesquisa-component.component';

describe('BarraPesquisaComponentComponent', () => {
  let component: BarraPesquisaComponentComponent;
  let fixture: ComponentFixture<BarraPesquisaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraPesquisaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraPesquisaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
