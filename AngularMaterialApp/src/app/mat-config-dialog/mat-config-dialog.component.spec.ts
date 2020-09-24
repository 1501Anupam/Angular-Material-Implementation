import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfigDialogComponent } from './mat-config-dialog.component';

describe('MatConfigDialogComponent', () => {
  let component: MatConfigDialogComponent;
  let fixture: ComponentFixture<MatConfigDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatConfigDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
