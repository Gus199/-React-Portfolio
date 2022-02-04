

import React from "react";

export default function Navbar() {
  return (
    <nav>
     

  <div class="container navigation pt-3">
  <div class="row">
    <div class="col-6 d-flex justify-content-start align-items-center">
       
      <i class="fas fa-code fa-2x text-warning pb-3"></i>
     
     
      <h5 class="d-inline pl-2 text-white">Portfolio</h5>
    </div>
    <div class="col-6 pt-2">
      <div
        class="row text-center p-0 d-flex justify-content-end align-items-center">
      
        <div class="col-3 ">
          <a href="./assets/Resume.html" class="text-white navigation-link">About</a>
        </div>

        <div class="col-3">
          <a href="https://steffb23.github.io/Group-Project-1/" class="text-white navigation-link">Projects</a>
        </div>

        <div class="col-3">
          <a href="https://github.com/Gus199" class="text-white navigation-link">Github</a>
          </div>

        <div class="col-3">
          <a href=" https://1drv.ms/w/s!AtPmyALeivjJgQtwGR77nlAIHBei?e=FZZC26" target="_blank" class="text-white navigation-link">Resume</a>
          </div>
      </div>
    </div>
  </div>
</div>
    </nav>
  );
}
