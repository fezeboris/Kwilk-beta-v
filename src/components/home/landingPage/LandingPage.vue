<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-#A999050F">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><div class="endsgbv">
            <p style="fontweight: bold">endsgbv</p>
            <!-- <div class="vl"></div> -->
            <img src="../../../assets/images/lg.png" alt="" /></div
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
              <a target="_blank" href="https://www.ebaseafrica.org/team"
                >Team</a
              >
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
  </header>
  <section>
    <div class="container-fluid main-home">
      <div class="container-lg">
        <div class="row justify-content-center pt-12">
          <div class="col-md-5 text-center text-md-start">
            <div class="container content-1">
              <small
                >eBASE Africa with Funding from the French Embassy in
                Cameroon</small
              >
              <h1 class="fs-1 fw-bold">Fighting the Wicked Problem of SGBV</h1>
              <router-link to="/login"
                ><button class="btn btn-lg get-started my-3">
                  Get Started
                </button></router-link
              >
            </div>
          </div>
          <div
            class="
              col-md-4
              text-center text-md-start
              d-none d-lg-block d-sm-block d-sm-none d-md-block
              p-5
            "
          >
            <div class="container">
              <div class="left">
                <img src="../../../assets/images/1.png" alt="" />
              </div>
              <div class="right"></div>
            </div>
          </div>
          <div class="col-md-5 text-center d-md-none d-lg-none text-md-start">
            <div class="container mt-2">
              <div>
                <img
                  class="rounded"
                  src="../../../assets/images/1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-lg d-none d-lg-block d-sm-block d-sm-none d-md-block"
      >
        <div class="container">
          <div class="container enterprises mt-5">
            <img src="../../../assets/images/mlogo.png" alt="" />
          </div>
        </div>
      </div>
      <div class="row align-content-center mt-3 d-block d-sm-none">
        <div class="col-12">
          <img src="../../../assets/images/mlogo.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="section my-4">
    <div class="container text-center">
      <p class="h5 text-success" id="features">Features</p>
      <h1 class="h1 mb-5">
        Main Components of <br />
        the Kwikklik App
      </h1>
    </div>
    <div class="container-lg">
      <div class="row justify-content-center ms-auto">
        <div class="col-11 col-lg-5 text-center">
          <div class="feature1">
            <div class="headers">
              <div class="square">
                <img src="../../../assets/images/report.png" alt="" />
              </div>
              <p>Reporting</p>
            </div>
            <div class="hr"></div>
            <p class="pt-4 pb-16">
              Easily report cases of SGBV (in different file formats like text,
              image, voice), get your story shared anonymously and immediately
              sent to our specialists for heatlh and legal care.
            </p>
          </div>
        </div>
        <div class="col-11 col-lg-5 text-center">
          <div class="feature3">
            <div class="headers">
              <div class="square">
                <img src="../../../assets/images/helping.png" alt="" />
              </div>
              <p>Seek Help</p>
            </div>
            <div class="hr"></div>
            <p class="pt-4 pb-16">
              Get in contact with health personnel, psychologists, and legal
              specialists once a victim of SGBV. All these anonymously, so you
              don’t need to worry about being judged.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-2 ms-auto">
        <div class="col-11 col-lg-5 text-center">
          <div class="feature2">
            <div class="headers">
              <div class="square">
                <img src="../../../assets/images/social-media.png" alt="" />
              </div>
              <p>Social Media</p>
            </div>
            <div class="hr"></div>
            <p class="pt-4 pb-16">
              Share your stories anonymously and get feedback from the
              community. As part of the community, you can help other victims of
              SGBV by supporting them.
            </p>
          </div>
        </div>
        <div class="col-11 col-lg-5 text-center">
          <div class="feature4">
            <div class="headers">
              <div class="square">
                <img src="../../../assets/images/education.png" alt="" />
              </div>
              <p>Education</p>
            </div>
            <div class="hr"></div>
            <p class="pt-4 pb-16">
              Learn about SGBV; learn how to prevent SGBV and what to do once an
              SGBV victim. This educational content is presented in different
              formats (articles and videos).
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container text-center">
      <p class="h5 text-success">Recent Causes</p>
      <h1 class="h1 mb-5">
        How eBASE Africa is fighting <br />
        this problem on ground
      </h1>
    </div>
    <div class="container-lg">
      <div class="row justify-content-center">
        <div class="col-9 col-lg-3 text-center">
          <div class="ebase1 my-3">
            <div class="img">
              <img src="../../../assets/images/e1.png" alt="" />
            </div>
            <div class="ebase-content">
              <p>
                eBASE team providing training to health workers and community
                health agents on how to better take care of SGBV victims.
              </p>
            </div>
          </div>
        </div>
        <div class="col-9 col-lg-3 text-center">
          <div class="ebase1 my-3">
            <div class="img">
              <img src="../../../assets/images/e2.png" alt="" />
            </div>
            <div class="ebase-content">
              <p>
                At Abakwa FM Radio to sensitize the population about the wicked
                problem of SGBV.
              </p>
            </div>
          </div>
        </div>
        <div class="col-9 col-lg-3 text-center">
          <div class="ebase1 my-3">
            <div class="img">
              <img src="../../../assets/images/e3.png" alt="" />
            </div>
            <div class="ebase-content">
              <p>
                eBASE Africa in Maroua, telling SGBV & Empowerment stories by
                fireside.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section1 mt-5">
    <div class="container-lg our-aim">
      <div class="container-lg">
        <div class="row justify-content-center">
          <div class="col-10 col-lg-5 text-center">
            <div class="container aim-text me-5">
              <h1 class="h1 text-center display-1 d-none d-lg-block d-sm-block">
                90%
              </h1>
              <h1 class="h2 text-center display-1 d-block d-sm-none percent">
                90%
              </h1>
              <p>
                Our aim is to reduce the number of SGBV cases and deaths due to
                SGBV complications by 90% in the year 2023.
              </p>
            </div>
          </div>
          <div class="col-8 col-lg-5 text-center mt-4">
            <div class="aim-img d-none d-sm-none d-lg-block">
              <div class="container content-2">
                <div class="left">
                  <img src="../../../assets/images/e4.png" alt="" />
                </div>
                <div class="right right2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section2 mt-0 pt-5">
    <div class="container text-center">
      <p class="h5 text-success">Experts</p>
      <h1 class="h1 mb-5">
        A Team of Professionals ready <br />
        to Help
      </h1>
    </div>
    <div class="container-lg">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-4 text-center">
          <div class="expert1">
            <h1>Health Personnels</h1>
            <div class="hr2"></div>
          </div>
          <div class="expert1">
            <h1>Psychologists</h1>
            <div class="hr2"></div>
          </div>
          <div class="expert1">
            <h1>Legal Consultants</h1>
            <div class="hr2"></div>
          </div>
        </div>
        <div class="col-10 col-lg-4 mt-0 text-center">
          <div class="expert1">
            <h1>Community Health Workers</h1>
            <div class="hr2"></div>
          </div>
          <div class="expert1">
            <h1>Bike Riders (First Aid)</h1>
            <div class="hr2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container text-center">
      <h1 class="h2 pt-2 mb-5">Our Partners</h1>
    </div>
    <div class="container-lg">
      <div class="container">
        <img
          class="img-fluid our-partner"
          src="../../../assets/images/partners.jpeg"
          alt=""
        />
      </div>
    </div>
  </section>
  <section>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6 mt-0 text-center adress1">
          <div class="contact-contain">
            <div class="contact-logo">
              <img src="../../../assets/images/call.png" alt="" />
            </div>
            <p>+237 693 184 050/ +237 679 499 759</p>
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-0 text-center adress2">
          <div class="contact-contain">
            <div class="contact-logo">
              <img src="../../../assets/images/address.png" alt="" />
            </div>
            <p>
              Yaounde - Center Region of Cameroon <br />
              Bamenda - North West Region of Cameroon
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="footer">
    <div class="container-lg">
      <div class="row justify-content-center py-5 align-items-center">
        <div class="col-8 col-lg-6 text-center">
          <div class="row justify-content-center">
            <div class="col-6">
              <div class="footer-logo d-none d-lg-block d-sm-block">
                <img src="../../../assets/images/flg.png" alt="" />
              </div>
            </div>

            <div class="col-10 col-lg-6 text-left">
              <div class="row justify-content-center">
                <div class="col-6 text-left">
                  <div class="features1">
                    <p><a href="#features">FEATURES</a></p>
                    <p>
                      <a target="_" href="https://endsgbv.medium.com/"
                        >STORIES</a
                      >
                    </p>
                    <p>
                      <a target="_blank" href="https://endsgbv.medium.com/"
                        >EDUCATION</a
                      >
                    </p>
                    <p>
                      <a
                        target="_blank"
                        href="https://www.ebaseafrica.org/team"
                      >
                        TEAM</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <div class="features1">
                    <p><router-link to="/login">SIGN IN</router-link></p>
                    <p><router-link to="/signin">SIGN UP</router-link></p>
                    <p>
                      <a
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.vinsight.kwikklik"
                        >GET APP</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hr3"></div>
    <div class="container-lg pb-3">
      <div class="row justify-content-center text-center">
        <div class="col-10 col-lg-5">
          <div class="container">
            <small>Copyright@2022 Kwikklik. All Rights Reserved</small>
          </div>
        </div>
        <div class="col-8 col-lg-5">
          <div class="container">
            <small
              ><router-link to="/terms">Terms of services</router-link></small
            >
          </div>
        </div>
      </div>
      <div class="container mt-3 text-center">
        <p class="builtby">built by Vinsight technologies</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
.applink {
  color: #0472448f;
}
button {
  outline: none;
  cursor: pointer;
}
.endsgbv {
  background: #a39835a3;
  padding: 10px;
  border-radius: 0px 30px 30px 30px;
  display: flex;
  align-items: center;
}
.endsgbv {
  border-left: 1px solid beige;
}
.endsgbv p {
  margin: 0px 5px;
}
.endsgbv img {
  height: 40px;
}
.app-btn {
  border: 1px solid grey;

  outline: none;
  color: #0472448f;

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
  color: #a39835a3;
  font-weight: 500;
}
a:hover {
  color: #0472448f;
}
.navbar {
  background: #a999050f;
}
.main-home {
  background: #a999050f;
}
.content-1 small {
  font-size: 12px;
  padding-top: 50px;
}
.left,
.right {
  position: absolute;
  background-color: white;
  /* border: 1px solid black; */
  /* padding: 1em 3em; */
}
.left {
  /* padding: 0.5em 3em; */
  top: 1em;
  left: 2em;
  z-index: 1;
  height: 230px;
  width: 270px;
}
.right {
  top: 0;
  left: 3em;
  height: 220px;
  width: 270px;
  background: #5e5611e3;
}
.left img {
  height: 100%;
  width: 100%;
}
.left img:hover {
  transition: 0.3s;
  transform: translate(0, -10px);
}
.get-started {
  border-radius: 20px;
  background: #11a35db5;
  color: white;
}

.feature1,
.feature2,
.feature3,
.feature4 {
  background: #a999051a;
}
.feature1 {
  border-radius: 0px 0px 30px 0px;
}
.feature3 {
  border-radius: 0px 0px 0px 30px;
}
.feature2 {
  border-radius: 0px 30px 0px 0px;
}
.feature4 {
  border-radius: 30px 0px 0px 0px;
}
.headers {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headers p {
  color: #bfbd93;
}
.square {
  margin: 10px 5px;
  width: 30px;
  height: 30px;
}
.square img {
  height: 100%;
  width: 100%;
}
.hr {
  border: 0;
  height: 3px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(131, 141, 37),
    rgba(0, 0, 0, 0)
  );
}
.feature1 p,
.feature2 p,
.feature3 p,
.feature4 p {
  color: black;
  text-align: center;
  margin: 15px 15px;
}

.ebase1 {
  width: 250px;
  height: 250px;
  margin: 0px auto;
  border-radius: 0px 0px 15px 15px;
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: flex-end; */
}
.ebase-content {
  height: 60px;
  color: black;
  border-radius: 0px 0px 15px 15px;
  background: #6a6214f7;
  bottom: 0;
}
.ebase-content p {
  color: white;
  font-size: 0.6rem;
  text-align: center;
  padding: 10px;
  /* align-items: flex-end; */
}
.ebase1 img {
  width: 100%;
  height: 100%;
}
.section1 {
  background: #a999050f;
}
.aim-text .h1 {
  font-size: 200px;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
}
.aim-text .h2 {
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
}
.aim-text p {
  padding: 10px;
  color: #0472448f;
}
.right2 {
  top: 0;
  left: 0em;
  height: 220px;
  width: 270px;
  background: #11a35d99;
}
.section2 {
  background: #a9990529;
}
.expert1 {
  padding: 30px 10px 0px 10px;
  margin: 30px 10px;
  text-align: left;
  background: #fff;

  border-radius: 0px 20px 0px 0px;
}
.expert1 h1 {
  font-size: 20px;
  font-weight: 100;
}
.hr2 {
  width: 100%;
  height: 3px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #02b96c8f;
  border: 0 none;
}
.adress1 {
  background: #02b96c17;
}
.adress2 {
  background: #02b96c4a;
}
.contact-contain {
  margin: 10px auto;
  display: flex;
  align-items: center;
}
.contact-contain p {
  color: black;
  font-size: 0.7rem;
  text-align: left;
  margin-top: 5px;
}
.contact-logo {
  margin: 0px 20px;

  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.contact-logo img {
  width: 100%;
  height: 100%;
}
.footer {
  background: #b4ac6c;
}
.features1 p a,
.features1 p {
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 5px 0px;
  text-align: left;
  text-decoration: none;
}
.features1 {
  margin: 0px 15px;
}
.features2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo2 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  margin: 0px 20px;
}
.hr3 {
  width: 75%;
  height: 1px;
  margin: 10px auto;
  background-color: #fff;
  border: 0 none;
}
.footer small {
  color: #c7fee4;
  font-size: 0.7rem;
}
.footer small a {
  color: #c7fee4;
  font-size: 0.7rem;
  text-decoration: none;
}
.percent {
  font-size: 80px;
}
.enterprises img {
  margin: 0px auto;
  height: 100%;
  width: 100%;
}
.enterprises {
  margin: 0px auto;
  height: 80px;
  width: 700px;
}
.builtby {
  font-size: 0.9rem;
  color: white;
}
.our-partner {
  margin: 0 auto;
}
</style>