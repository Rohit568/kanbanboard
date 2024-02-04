import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawercontentComponent } from './drawercontent.component';

describe('DrawercontentComponent', () => {
  let component: DrawercontentComponent;
  let fixture: ComponentFixture<DrawercontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawercontentComponent]
    });
    fixture = TestBed.createComponent(DrawercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
