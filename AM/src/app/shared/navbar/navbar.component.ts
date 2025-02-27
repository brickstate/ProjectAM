import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('menu') mainNav!: ElementRef;
  @ViewChild('toggle') navBarToggle!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.navBarToggle && this.mainNav) {
      this.renderer.listen(this.navBarToggle.nativeElement, 'click', () => {
        this.mainNav.nativeElement.classList.toggle('active');
      });
    }
  }
}