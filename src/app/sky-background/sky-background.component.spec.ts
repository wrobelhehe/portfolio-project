import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyBackgroundComponent } from './sky-background.component';

describe('SkyBackgroundComponent', () => {
  let component: SkyBackgroundComponent;
  let fixture: ComponentFixture<SkyBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkyBackgroundComponent]
    });
    fixture = TestBed.createComponent(SkyBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
