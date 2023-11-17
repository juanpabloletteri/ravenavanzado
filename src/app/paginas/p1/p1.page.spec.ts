import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P1Page } from './p1.page';

describe('P1Page', () => {
  let component: P1Page;
  let fixture: ComponentFixture<P1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(P1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
