import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  menuOpcion: String = '';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  onOpcion(menuOpcion: string) {
    this.menuOpcion = menuOpcion;
  }

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
