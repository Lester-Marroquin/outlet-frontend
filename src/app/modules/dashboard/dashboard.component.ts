import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ){ }

    toggleMenu() {
    const navbarToggler =
      this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const isCollapsed = navbarToggler.getAttribute('aria-expanded') === 'false';

    if (isCollapsed) {
      this.renderer.addClass(
        this.elementRef.nativeElement.querySelector('.navbar-collapse'),
        'show'
      );
      this.renderer.setAttribute(navbarToggler, 'aria-expanded', 'true');
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement.querySelector('.navbar-collapse'),
        'show'
      );
      this.renderer.setAttribute(navbarToggler, 'aria-expanded', 'false');
    }
  }



}


