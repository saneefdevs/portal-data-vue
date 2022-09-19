<template>

<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="it">

  <title>PORTAL DATA</title>

</head>

<body id="top-header">

    <!-- LOADER TEMPLATE -->
    <!-- <div id="page-loader">
        <div class="loader-icon fa fa-spin colored-border"></div>
    </div> -->
    <!-- /LOADER TEMPLATE -->

    <div class="logo-bar d-none d-md-block d-lg-block bg-light" style="background:#0071bc !important;">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="logo d-none d-lg-block">
                        <!-- Brand -->
                        <a class="navbar-brand js-scroll-trigger" href="#">
                        <img :src="logo" width="70" height="70" alt="">
                            <img :src="logo2" width="70%" alt="">
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 justify-content-end ml-lg-auto d-flex col-12 col-md-12">
                    <div class="d-inline-flex">
                        <img src="images/merdeka-belajar.png" width="100%" height="70" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- NAVBAR
    ================================================= -->
    <div class="main-navigation" id="mainmenu-area">
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light main-nav navbar-togglable">
                <a class="navbar-brand d-lg-none d-block" href="">PortaL Data</a>
                <!-- Toggler -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span>
                </button>

                <!-- Collapse -->
                <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <!-- Links -->
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item ">
                            <a href="#" class="nav-link js-scroll-trigger">
                                Beranda
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link js-scroll-trigger">
                                Dataset
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link js-scroll-trigger">
                                Publikasi
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link js-scroll-trigger">
                                Data Induk
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link js-scroll-trigger">
                                Referensi Operasional
                            </a>
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
                            <a href="#" class="nav-link js-scroll-trigger">
                                Metadata
                            </a>
                        </li>
                    </ul>
                </div> <!-- / .navbar-collapse -->
            </nav>
        </div> <!-- / .container -->
    </div>

    <!-- HERO
    ================================================== -->
    <section class="banner-area py-7">
        <!-- Content -->
        <div class="container">
            <div class="row align-items-center">
                
                <div class="col-md-12 col-lg-12">
                    <div class="jumbotron rounded-radius text-white" style="background:#0071bc !important;">
                        <h1 class="display-4 text-white">Penelusuran Data</h1>
                        <p class="lead">Satu Data Pendidikan dan Kebudayaan adalah kebijakan tata kelola data untuk menghasilkan informasi
                            yang akurat, mutakhir, terpadu, dapat dipertanggungjawabkan, diakses, dan
                            dibagipakaikan.</p>

                        <div class="input-group"> 
                            <input type="text" class="form-control input-text rounded-radius" placeholder="Masukan kata kunci" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append"> 
                                <button class="btn btn-warning rounded-radius" type="button"><i class="fa fa-search text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12 col-lg-12">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card card-stat p-3 mb-2">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="icon mr-2"> <i class="fa fa-school"></i> </div>
                                        <div class="ms-2 c-details">
                                            <h6 class="mb-0">Sekolah</h6> <h3>274.687</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card card-stat p-3 mb-2">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="icon mr-2"> <i class="fa fa-university"></i> </div>
                                        <div class="ms-2 c-details">
                                            <h6 class="mb-0">Perguruan Tinggi</h6> <h3>4.517</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card card-stat p-3 mb-2">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="icon mr-2"> <i class="fa fa-monument"></i> </div>
                                        <div class="ms-2 c-details">
                                            <h6 class="mb-0">Cagar Budaya</h6> <h3>3.326</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card card-stat p-3 mb-2">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="icon mr-2"> <i class="fa fa-building"></i> </div>
                                        <div class="ms-2 c-details">
                                            <h6 class="mb-0">Museum</h6> <h3>442</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- data tematik -->
                <div class="col-md-12 col-lg-12 pt-5 text-center">
                    <h1 class="display-5 mt-3 mb-5">Data Tematik</h1>

                    <div class="row">
                        <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
                            <div class="web-service-block2">
                                <i class="fa fa-solid fa-graduation-cap"></i>
                                <h3>Pendidikan</h3>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
                            <div class="web-service-block2">
                                <i class="fa fa-solid fa-archway"></i>
                                <h3>Kebudayaan</h3>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
                            <div class="web-service-block2">
                                <i class="fa fa-solid fa-language"></i>
                                <h3>Kebahasaan</h3>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div class="col-md-12 col-lg-12 pt-2">
                    <h1 class="display-5 mt-5 mb-5 text-center">Publikasi Terkini</h1>
                    <div class="row justify-content-center mt-5 mb-5">
                        <div class="col-lg-3 col-md-6">
                            <div class="blog-box">
                                <div class="blog-img-box">
                                    <img src="http://publikasi.data.kemdikbud.go.id/uploadDirSampul/sampul_CC4179A6-B4FF-4E0C-809B-5CADD9132AB5_.jpg" alt="" class="img-fluid blog-img">
                                </div>
                                <div class="single-blog">
                                    <div class="blog-content">
                                        <h6> 2021</h6>
                                        <a href="http://publikasi.data.kemdikbud.go.id/uploadDir/isi_CC4179A6-B4FF-4E0C-809B-5CADD9132AB5_.pdf">
                                            <h3 class="card-title">Statistik Kebudayaan 2021</h3>
                                        </a>
                                        <p>Data yang disajikan dalam statistik ini meliputi pokok pikiran kebudayaan daerah, warisan budaya benda dan warisan budaya takbenda. Warisan budaya benda meliputi museum dan cagar budaya sedangkan warisan budaya takbenda meliputi maestro, kesenian, dan film.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="blog-box">
                                <div class="blog-img-box">
                                    <img src="http://publikasi.data.kemdikbud.go.id/uploadDirSampul/sampul_960FD0A1-D22F-4CE3-8615-06FF85AAD4AE_.jpg" alt="" class="img-fluid blog-img">
                                </div>
                                <div class="single-blog">
                                    <div class="blog-content">
                                        <h6> 2021</h6>
                                        <a href="http://publikasi.data.kemdikbud.go.id/uploadDir/isi_960FD0A1-D22F-4CE3-8615-06FF85AAD4AE_.pdf">
                                            <h3 class="card-title">Statistik Kebahasaan dan Kesastraan 2021</h3>
                                        </a>

                                        <p>Data yang disajikan dalam statistik ini meliputi objek, lembaga, SDM, dan Substansi Kebahasaan dan Kesastraan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-8">
                            <div class="blog-box">
                                <div class="blog-img-box">
                                    <img src="http://publikasi.data.kemdikbud.go.id/uploadDirSampul/sampul_9F32914A-F381-4D50-9157-A8E6E5304247_.jpg" alt="" class="img-fluid blog-img">
                                </div>
                                <div class="single-blog">
                                    <div class="blog-content">
                                        <h6> 2021</h6>
                                        <a href="http://publikasi.data.kemdikbud.go.id/uploadDir/isi_9F32914A-F381-4D50-9157-A8E6E5304247_.pdf">
                                            <h3 class="card-title">Statistik Sekolah Dasar (SD) 2020/2021</h3>
                                        </a>
                                        <p>Data yang disajikan meliputi sekolah, siswa, kepala sekolah, guru, tenaga kependidikan, rombongan belajar, ruang kelas, fasilitas, dan sanitasi sekolah serta yang tidak melaporkan dilakukan interpolasi data tingkat satuan pendidikan. Pengolahan berdasarkan data tanggal 30 November 2020.</p>
    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-8">
                            <div class="blog-box">
                                <div class="blog-img-box">
                                    <img src="http://publikasi.data.kemdikbud.go.id/uploadDirSampul/sampul_C1B94B1A-1230-429F-80A5-92D56EE17E59_.jpg" alt="" class="img-fluid blog-img">
                                </div>
                                <div class="single-blog">
                                    <div class="blog-content">
                                        <h6> 2021</h6>
                                        <a href="http://publikasi.data.kemdikbud.go.id/uploadDir/isi_C1B94B1A-1230-429F-80A5-92D56EE17E59_.pdf">
                                            <h3 class="card-title">Statistik Sekolah Menengah Kejuruan (SMK) 2020/2021</h3>
                                        </a>
                                        <p>Data yang disajikan meliputi sekolah, siswa, guru, tenaga kependidikan, rombongan belajar, ruang kelas, fasilitas, dan sanitasi sekolah serta yang tidak melaporkan dilakukan interpolasi data di tingkat satuan pendidikan. Pengolahan berdasarkan data dengan kondisi tanggal 30 Nopember 2020.</p>
                                         <!--<a href="#" class="read-more">Read More</a>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- / .row -->
        </div> <!-- / .container -->
    </section>

    <!-- FOOTER
    ================================================== -->

    <footer class="section " id="footer">
        <div class="overlay footer-overlay"></div>
        <!--Content -->
        <div class="container">
            <div class="row justify-content-start">
                <div class="col-lg-4 col-sm-12">
                    <div class="footer-widget">
                        <!-- Brand -->
                        <h3>HUBUNGI KAMI</h3>
                        
                        <ul class="footer-links ">
                            <li>
                                <a href="http://ult.kemdikbud.go.id" target="_blank">Unit Layanan Terpadu (ULT)</a>
                                <div class="text-white">Gedung C Lantai 1 Kompleks Kemdikbud Senayan Jakarta, 10270</div>
                                <div class="text-white">Email : pengaduan@kemdikbud.go.id</div>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-12">
                    <div class="footer-widget"></div>
                </div>

                <div class="col-lg-4 col-sm-12">
                    <div class="footer-widget">
                        <h3>TAUTAN</h3>
                        <ul class="footer-links ">
                            <li><a href="https://kemdikbud.go.id" target="_blank">Kemdikbudristek</a></li>
                            <li><a href="https://pusdatin.kemdikbud.go.id" target="_blank">Pusdatin</a></li>
                        </ul>
                    </div>
                </div>

            </div> <!-- / .row -->


            <div class="row pt-5">
                <div class="col-lg-12">
                    <!-- Copyright -->
                    <p class="footer-copy">
                        &copy; <span class="current-year">Kemdikbudristek 2022</span>.
                    </p>
                </div>
            </div> <!-- / .row -->
        </div> <!-- / .container -->
    </footer>


    <!--  Page Scroll to Top  -->

    <a class="scroll-to-top js-scroll-trigger" href="#top-header">
        <i class="fa fa-angle-up"></i>
    </a>


   


    <!-- 
    Essential Scripts
    =====================================-->

    
    <!-- Main jQuery -->
    <!-- <script src="plugins/jquery/jquery.min.js"></script>
     Bootstrap 3.1 -->
    <!-- <script src="plugins/bootstrap/js/popper.min.js"></script>
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script> -->
    <!-- Slick Slider -->
    <!-- <script src="plugins/slick-carousel/slick/slick.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script> -->
    <!-- Map Js -->
    <!-- <script src="plugins/google-map/gmap3.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwIQh7LGryQdDDi-A603lR8NqiF3R_ycA"></script> -->

    <!-- <script src="js/form/contact.js"></script>
    <script src="js/theme.js"></script> -->

  </body>
  </html>
   
</template>

<script>
    export default {
    name: 'All',
    data(){
             return {
            logo: [
           'assets/logo-kemdikbud.png'
                  ],
                  logo2:['assets/logo-kemdikbud2.png']
            }    
  },
 
}

</script>

<style scoped>
.c-details span {
    font-weight: 300;
    font-size: 13px
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}
.card-stat {
    border-top: 4px solid #ffc107;
}
</style> 