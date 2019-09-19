import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appLoginButton]'
})
export class LoginButtonDirective implements OnInit {
  private loggedInSubscription : Subscription;

  constructor(private ElRef: ElementRef, private renderer: Renderer2,
    private authService : AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (authenticated : boolean) => {
        if (authenticated) this.isLoggedIn();
        else this.isLoggedOut();
      }
    )

    this.loggedInSubscription = this.authService.authenticationUpdated.subscribe(
      (authenticated : boolean) => {
        if (authenticated) this.isLoggedIn();
        else this.isLoggedOut();
      }
    );
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }

  isLoggedIn() {
    this.ElRef.nativeElement.innerHTML = 'Sair';
    this.renderer.addClass(this.ElRef.nativeElement, 'btn-danger');
    this.renderer.removeClass(this.ElRef.nativeElement, 'btn-success');
  }

  isLoggedOut() {
    this.ElRef.nativeElement.innerHTML = 'Entrar';
    this.renderer.addClass(this.ElRef.nativeElement, 'btn-success');
    this.renderer.removeClass(this.ElRef.nativeElement, 'btn-danger');
  }

  @HostListener('click', ['$event']) 
  onClick(e) {
    this.authService.isAuthenticated().then(
      (authenticated : boolean) => {
        if (authenticated) this.authService.logout();
        else this.authService.login();
      }
    )
  }

}
