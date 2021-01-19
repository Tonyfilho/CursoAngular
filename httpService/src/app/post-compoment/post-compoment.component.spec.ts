import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompomentComponent } from './post-compoment.component';

describe('PostCompomentComponent', () => {
  let component: PostCompomentComponent;
  let fixture: ComponentFixture<PostCompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCompomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
