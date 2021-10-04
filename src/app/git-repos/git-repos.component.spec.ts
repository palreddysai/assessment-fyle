import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { GitReposComponent } from './git-repos.component';
import { FormsModule } from '@angular/forms';

describe('GitReposComponent', () => {
  let component: GitReposComponent;
  let fixture: ComponentFixture<GitReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ GitReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform display binding in HTML template', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#searchId');
    const displayName: HTMLInputElement = hostElement.querySelector('#disName');
    const displayBio: HTMLInputElement = hostElement.querySelector('#disBio');
    const displayLocation: HTMLInputElement = hostElement.querySelector('#disLocation');
    const displayTwitter: HTMLInputElement = hostElement.querySelector('#disTwitter');

    fixture.detectChanges();
    fixture.whenStable().then(val => {
      nameInput.value = 'johnpapa';

      nameInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(displayName.textContent).toBe('john papa');
      expect(displayBio.textContent).toBe('my bio expected');
      expect(displayLocation.textContent).toBe('Ontario');
      expect(displayTwitter.textContent).toBe('JohnPapa');

    });
  });
});
