import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimsComponent } from './clims.component';

describe('ClimsComponent', () => {
  let component: ClimsComponent;
  let fixture: ComponentFixture<ClimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
