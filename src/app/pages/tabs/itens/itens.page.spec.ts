import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItensPage } from './itens.page';

describe('ItensPage', () => {
  let component: ItensPage;
  let fixture: ComponentFixture<ItensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
