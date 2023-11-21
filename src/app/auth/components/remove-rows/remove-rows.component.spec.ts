import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRowsComponent } from './remove-rows.component';

describe('RemoveRowsComponent', () => {
  let component: RemoveRowsComponent;
  let fixture: ComponentFixture<RemoveRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
