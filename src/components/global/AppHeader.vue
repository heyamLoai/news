<template>
  <header>
    <!-- Header desktop -->
    <div class="container-menu-desktop">
      <div class="topbar">
        <div class="content-topbar container h-100">
          <div class="right-topbar">
            <a href="#">
              <span class="fab fa-facebook-f"></span>
            </a>

            <a href="#">
              <span class="fab fa-twitter"></span>
            </a>

            <a href="#">
              <span class="fab fa-pinterest-p"></span>
            </a>

            <a href="#">
              <span class="fab fa-vimeo-v"></span>
            </a>

            <a href="#">
              <span class="fab fa-youtube"></span>
            </a>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="wrap-logo container">
        <!-- Logo desktop -->
        <div class="logo">
          <router-link to="/"
            ><img
              src="../../../public/frontend/images/icons/logo-01.png"
              alt="LOGO"
          /></router-link>
        </div>

        <!-- Banner -->
        <div class="banner-header">
          <img src="../../../public/frontend/images/banner-01.jpg" alt="IMG" />
        </div>
      </div>

      <!--  -->
      <div class="wrap-main-nav">
        <div class="main-nav">
          <!-- Menu desktop -->
          <nav class="menu-desktop">
            <router-link class="logo-stick" to="/">
              <img
                src="../../../public/frontend/images/icons/logo-01.png"
                alt="LOGO"
              />
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="wrap-main-nav">
    <div class="main-nav show-main-nav">
      <!-- Menu desktop -->
      <nav class="menu-desktop">
        <router-link class="logo-stick" to="/">
          <img src="../../../public/frontend/images/icons/logo-01.png" alt="LOGO" />
        </router-link>

        <ul class="main-menu">
          <li class="main-menu-active">
            <router-link to="/">Home</router-link>
            <ul class="sub-menu">
              <li><router-link to="/">Homepage v1</router-link></li>
              <li><router-link to="/">Homepage v2</router-link></li>
              <li><router-link to="/">Homepage v3</router-link></li>
            </ul>
          </li>

          <li class="mega-menu-item">
            <router-link to="/category1">News</router-link>

            <div class="sub-mega-menu">
              <div class="nav flex-column nav-pills" role="tablist">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#news-0"
                  role="tab"
                  >All</a
                >
                <a class="nav-link" data-toggle="pill" href="#news-1" role="tab"
                  >Entertaiment</a
                >
                <a class="nav-link" data-toggle="pill" href="#news-2" role="tab"
                  >Fashion</a
                >
                <a class="nav-link" data-toggle="pill" href="#news-3" role="tab"
                  >Life Style</a
                >
                <a class="nav-link" data-toggle="pill" href="#news-4" role="tab"
                  >Technology</a
                >
                <a class="nav-link" data-toggle="pill" href="#news-5" role="tab"
                  >Travel</a
                >
              </div>

              <div class="tab-content">
                <div class="tab-pane show active" id="news-0" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-05.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-10.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Finance
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-14.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Beach
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-36.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Technology
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="news-1" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-50.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-08.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-07.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-06.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="news-2" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-21.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-24.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-22.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-23.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="news-3" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-25.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-27.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-26.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-34.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="news-4" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-35.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-36.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-37.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-38.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="news-5" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-39.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-41.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-42.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-40.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="mega-menu-item">
            <router-link to="/category2">Entertainment </router-link>

            <div class="sub-mega-menu">
              <div class="nav flex-column nav-pills" role="tablist">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#enter-1"
                  role="tab"
                  >All</a
                >
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#enter-2"
                  role="tab"
                  >Game</a
                >
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#enter-3"
                  role="tab"
                  >Celebrity</a
                >
              </div>

              <div class="tab-content">
                <div class="tab-pane show active" id="enter-1" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-25.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-27.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-26.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-34.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="enter-2" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-35.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-36.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-37.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-38.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="enter-3" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-39.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-41.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-42.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-40.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="mega-menu-item">
            <router-link to="/category1">Business</router-link>

            <div class="sub-mega-menu">
              <div class="nav flex-column nav-pills" role="tablist">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#business-1"
                  role="tab"
                  >All</a
                >
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#business-2"
                  role="tab"
                  >Economy</a
                >
              </div>

              <div class="tab-content">
                <div
                  class="tab-pane show active"
                  id="business-1"
                  role="tabpanel"
                >
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-10.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-11.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-26.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-34.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="business-2" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-35.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-36.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-37.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-38.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="mega-menu-item">
            <router-link to="/category2">Travel</router-link>

            <div class="sub-mega-menu">
              <div class="nav flex-column nav-pills" role="tablist">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#travel-1"
                  role="tab"
                  >All</a
                >
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#travel-2"
                  role="tab"
                  >Hotels</a
                >
              </div>

              <div class="tab-content">
                <div class="tab-pane show active" id="travel-1" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-39.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-41.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-42.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-40.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="travel-2" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-35.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-36.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-37.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-38.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="mega-menu-item">
            <router-link to="/category1" >Life Style</router-link>

            <div class="sub-mega-menu">
              <div class="nav flex-column nav-pills" role="tablist">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#life-1"
                  role="tab"
                  >All</a
                >
              </div>

              <div class="tab-content">
                <div class="tab-pane show active" id="life-1" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-25.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-27.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-26.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-34.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="mega-menu-item">
            <router-link to="/category2">Video</router-link>

            <div class="sub-mega-menu">
              <div class="nav flex-column nav-pills" role="tablist">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#video-1"
                  role="tab"
                  >All</a
                >
              </div>

              <div class="tab-content">
                <div class="tab-pane show active" id="video-1" role="tabpanel">
                  <div class="row">
                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-50.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 18 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-08.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Feb 12 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-07.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 20 </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <!-- Item post -->
                      <div>
                        <a
                          href="blog-detail-01.html"
                          class="wrap-pic-w hov1 trans-03"
                        >
                          <img src="../../../public/frontend/images/post-06.jpg" alt="IMG" />
                        </a>

                        <div class="p-t-10">
                          <h5 class="p-b-5">
                            <a
                              href="blog-detail-01.html"
                              class="f1-s-5 cl3 hov-cl10 trans-03"
                            >
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h5>

                          <span class="cl8">
                            <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>

                            <span class="f1-s-3 m-rl-3"> - </span>

                            <span class="f1-s-3"> Jan 15 </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Features</a>
            <ul class="sub-menu">
              <li><router-link to="/category1">Category Page 1</router-link ></li>
              <li><router-link  to="/category2">Category Page 2</router-link ></li>
              <li><router-link  to="/logIn">Sign In</router-link ></li>
              <li><router-link  to="/register">Sign Up</router-link ></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>