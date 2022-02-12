<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-#A999050F">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><div class="endsgbv">
          <p style="fontweight: bold">endsgbv</p>
          <!-- <div class="vl"></div> -->
          <img src="../../../../assets/images/lg.png" alt="" /></div
      ></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item mr-6">
            <a aria-current="page" href="#features">Features</a>
          </li>
          <li class="nav-item mr-6">
            <a target="_blank" href="https://endsgbv.medium.com">Education</a>
          </li>
          <li class="nav-item mr-6">
            <router-link to="/our-stories">Stories</router-link>
            <!-- <a target="_blank" href="https://endsgbv.medium.com">Stories</a> -->
          </li>
          <li class="nav-item mr-6">
            <a target="_blank" href="https://www.ebaseafrica.org/team">Team</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <button class="btn app-btn">
            <a
              class="applink"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.vinsight.kwikklik"
              >GET APP</a
            >
          </button>
        </ul>
      </div>
    </div>
  </nav>
  <section
    class="header pt-28 pb-2 d-none d-lg-block d-sm-block d-sm-none d-md-block"
  >
    <div class="container">
      <small
        >Stories by eBASE Africa to help preach against Gender Based
        Violence</small
      >
      <p class="display-5 fw-bold">Our Stories</p>
    </div>
  </section>
  <section class="headers pt-12 pb-2 d-block d-sm-none">
    <div class="container text-center">
      <small
        >Stories by eBASE Africa to help preach against Gender Based
        Violence</small
      >
      <p class="display-5 fw-bold">Our Stories</p>
    </div>
  </section>
  <section>
    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-4 mt-3">
          <div class="story1">
            <router-link to="/our-stories/story">
              <div class="img">
                <img src="../../../../assets/images/story1.png" alt="" />
              </div>
              <p class="heading fs-5 lh-1 mt-2 fw-bold">
                Gender Based Violence Meet its match
              </p>
              <div class="body">
                <p class="fs-5 fw-bold">What is Gender Based Violence (GBV)?</p>
                <p>
                  Gender Based Violence is any act of violence committed against
                  a person due to the person’s gender and results in physical,
                  psychological, sexual or economic....
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style  scoped>
.navbar {
  background: #a39835a3;
}
.endsgbv {
  display: flex;
  align-items: center;
}

.endsgbv p {
  margin: 0px 5px;
}
.endsgbv img {
  height: 40px;
}
.applink {
  color: #0472448f;
  text-decoration: none;
}
.app-btn {
  border: 1px solid grey;

  outline: none;
  color: #0472448f;
  font-weight: bold;
  border-radius: 15px;
}
.app-btn:hover {
  border: none;
  background: #a39835a3;
  outline: none;
  color: black;
  border-radius: 15px;
}
.nav-item a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}
.nav-item a:hover {
  color: #0472448f;
}
a {
  text-decoration: none;
}
.header,
.headers {
  background: #a999050f;
}
.header small {
  color: #0472448f;
  font-size: 0.6rem;
}
.headers small {
  color: #0472448f;
  font-size: 0.6rem;
}
.story1 {
  margin: 0px auto;
  border: 1px solid #0472448f;
  padding: 10px;
  border-radius: 5px;
}
.story1 .heading {
  color: #0472448f;
}
.story1 img {
  width: 100%;
  height: 100%;
}
.body p {
  color: black;
}
</style>