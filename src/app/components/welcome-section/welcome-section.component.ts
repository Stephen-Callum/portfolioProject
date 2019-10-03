import { Component, OnInit } from '@angular/core';
// import { default as ParticlesConfig } from 'src/assets/particle-js/config/titleConfig/particlesjs-config.json';

// ParticlesJS declaration
declare var particlesJS: any;

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // particlesJS('particles-js', ParticlesConfig, function() {
    //   console.log('particles.js config loaded...');
    // });
  }
}
