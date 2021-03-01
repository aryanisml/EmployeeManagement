import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCellRendererComponent } from './action-cell-renderer.component';

describe('ActionCellRenderer', () => {
  let component: ActionCellRendererComponent;
  let fixture: ComponentFixture<ActionCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
