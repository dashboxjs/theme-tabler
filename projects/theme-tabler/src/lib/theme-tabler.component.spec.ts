import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTablerComponent } from './theme-tabler.component';

describe('ThemeTablerComponent', () => {
  let component: ThemeTablerComponent;
  let fixture: ComponentFixture<ThemeTablerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeTablerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeTablerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
