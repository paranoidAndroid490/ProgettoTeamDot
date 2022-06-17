import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaYachtComponent } from './modifica-yacht.component';

describe('ModificaYachtComponent', () => {
  let component: ModificaYachtComponent;
  let fixture: ComponentFixture<ModificaYachtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaYachtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaYachtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
