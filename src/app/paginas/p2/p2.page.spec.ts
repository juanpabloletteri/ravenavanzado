import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P2Page } from './p2.page';

describe('P2Page', () => {
  let component: P2Page;
  let fixture: ComponentFixture<P2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(P2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
