<template>

<!-- LOADER TEMPLATE -->
<!-- <div id="page-loader">
    <div class="loader-icon fa fa-spin colored-border"></div>
</div> -->
<div id="app"></div>
<!-- /LOADER TEMPLATE -->

<div class="logo-bar d-none d-md-block d-lg-block bg-light" style="background:#0071bc !important;">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="logo d-none d-lg-block">
                    <!-- Brand -->
                    <a class="navbar-brand js-scroll-trigger" href="#">
                        <img src="@/assets/logo-kemdikbud.png" width="70" height="70" alt="">
                        <img src="@/assets/logo-portaldata2.png" width="70%" alt="">
                    </a>
                </div>
            </div>

            <div class="col-lg-6 justify-content-end ml-lg-auto d-flex col-12 col-md-12">
                <div class="d-inline-flex">
                    <!-- <img src="images/merdeka-belajar.png" width="100%" height="70" alt=""> -->
                </div>
            </div>
        </div>
    </div>
</div>

<!-- NAVBAR
================================================= -->
<div class="main-navigation" id="mainmenu-area" >
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light main-nav navbar-togglable">
            <!-- <nav class="navbar navbar-expand-lg  navbar-light nav-collapse main-nav"> -->
            <router-link to="/" class="navbar-brand d-lg-none d-block" >PortaL Data</router-link>
            <!-- Toggler -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars"></span>
            </button>

            <!-- Collapse -->
            <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                <!-- Links -->
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link js-scroll-trigger">
                            Beranda
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/dataset" class="nav-link js-scroll-trigger">
                            Dataset
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/publikasi" class="nav-link js-scroll-trigger">
                            Publikasi
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/datainduk" class="nav-link js-scroll-trigger">
                            Data Induk
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="https://referensi.data.kemdikbud.go.id/" class="nav-link js-scroll-trigger">
                            Referensi Operasional
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle  js-scroll-trigger" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Pendataan
                     </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><a class="dropdown-item" href="https://dapo.kemdikbud.go.id" target="_blank">Dapodik</a></li>
                          <li><hr class="dropdown-divider"></li>
                          
                          <li><a class="dropdown-item" href="https://app.vokasi.kemdikbud.go.id/dapodik" target="_blank">Dapodik LKP</a></li>
                          <li><a class="dropdown-item" href="https://manajemen.vokasi.kemdikbud.go.id" target="_blank">Manajemen Dapodik LKP</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="https://pddikti.kemdikbud.go.id" target="_blank">PDDikti</a></li>
                      </ul>
                  </li>

                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link js-scroll-trigger" >
                            e-Verval
                        </a>
                        <ul class="dropdown-menu" >
                        <li><a class="dropdown-item" href="https://vervalyayasan.data.kemdikbud.go.id" target="_blank">Verval Yayasan</a></li>
                            <li><a class="dropdown-item" href="https://vervalsp.data.kemdikbud.go.id" target="_blank">Verval Satuan Pendidikan</a></li>
                            <li><a class="dropdown-item" href="https://vervalptk.data.kemdikbud.go.id" target="_blank">Verval Pendidika & Tenaga Kependidikan</a></li>
                            <li><a class="dropdown-item" href="https://vervalpd.data.kemdikbud.go.id" target="_blank">Verval Peserta Didik</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Verval Kebudayaan</a></li>
                            <li><a class="dropdown-item" href="#">Verval Bahasa dan Sastra</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/metadata" class="nav-link js-scroll-trigger">
                            Metadata
                        </router-link>
                    </li>
                </ul>
            </div> <!-- / .navbar-collapse -->
        </nav>
    </div> <!-- / .container -->
</div> 
      
   
  </template>
  
  <script>
  export default {
    name: 'HeaderWeb'
    
    }
  
  </script>
  <style>
  .navbar.top-nav-collapse {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #f1f9fc;
    display: flex;
}

.fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    
}
.main-navigation {
     overflow: visible;

}
 .logo-bar .d-none .d-md-block .d-lg-block .bg-light{
    position: fixed;
 }

 #mainmenu-area {
    position: relative;
    top: 0px;
    right: 0;
    left: 0;
    background-color:#fff ;
    z-index: 1030;
    
        
}
  </style>