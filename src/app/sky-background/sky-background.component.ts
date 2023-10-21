import { Component, ElementRef, NgZone } from '@angular/core';
import { Subject, fromEvent, distinctUntilChanged, takeUntil } from 'rxjs';
import * as THREE from 'three';

@Component({
  selector: 'app-sky-background',
  templateUrl: './sky-background.component.html',
  styleUrls: ['./sky-background.component.scss']
})
export class SkyBackgroundComponent {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private stars!: THREE.Points;

  private destroy$ = new Subject<void>();

  constructor(private ngZone: NgZone, private el: ElementRef) { }

  ngOnInit() {
    this.initTHREE();
    this.addStars();
    this.animate();
    fromEvent(window, 'resize')
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.onWindowResize());
  }

  private initTHREE() {
    const width = this.el.nativeElement.clientWidth;
    const height = this.el.nativeElement.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.el.nativeElement.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
  }

  private addStars() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 1, sizeAttenuation: false });

    const vertices = [];
    for (let i = 0; i < 20000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    this.stars = new THREE.Points(starsGeometry, starsMaterial);
    this.scene.add(this.stars);
  }

  private onWindowResize() {
    const width = this.el.nativeElement.clientWidth;
    const height = this.el.nativeElement.clientHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      this.stars.position.z += 0.05;

      const vertices = (this.stars.geometry as THREE.BufferGeometry).attributes['position'].array as Float32Array;
      for (let i = 2; i < vertices.length; i += 3) {
        if (vertices[i] > this.camera.position.z) {
          vertices[i] -= 2000;
        }
      }

      requestAnimationFrame(() => this.animate());
      this.renderer.render(this.scene, this.camera);
    });
  }



  ngOnDestroy() {
    this.renderer.dispose();

  }
}
