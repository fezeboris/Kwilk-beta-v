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
  <section>
    <div class="container-lg">
      <div class="container">
        <div class="d-flex mt-5 heading">
          <img
            src="../../../../assets/images/logo-circle.png"
            class="me-2"
            alt=""
          />
          <div class="">
            <small class="lh-1">EndSGBV</small>
            <div class="">
              <small class="lh-1 date">Feb4 6 min read</small>
            </div>
          </div>
        </div>

        <p class="fs-3 mt-3 fw-bold">GBV MEETs its Match</p>
      </div>
      <div class="container">
        <div class="body-img">
          <img src="../../../../assets/images/story1.png" alt="" />
        </div>
        <div class="mt-5">
          <p class="fs-5 fw-bold">What is Gender Based Violence (GBV)?</p>
          <p>
            Gender Based Violence is any act of violence committed against a
            person due to the person’s gender and results in physical,
            psychological, sexual or economic harm. Victims of Gender Based
            Violence suffer health consequences like forced and unwanted
            pregnancies, STDs, trauma and stigmatization.
          </p>
          <p>
            In different regions in Cameroon, there are several conflicts. In
            the Northern regions Boko Haram constantly attacks civilians and
            children and kids are generally the target. Some girls are being
            kidnapped and forced into marriage by these terrorists and these
            kinds of acts are catalyzed by the fact that the girl child is
            considered to be less of a human as compared to the boy child. Apart
            from these Boko Haram attacks; certain cultural and religious
            beliefs have permitted gender-based violence for a long time.
          </p>
          <p>
            In the North West and South West regions of Cameroon, there is a war
            between separatist fighters and the Cameroon army; which lives again
            women and children very vulnerable as they are usually the targets.
            Young girls are targeted by some irresponsible armed forces and
            forced to have sex. They are many times forced into relationships
            and in general are at high risk to falling in the hands of sex
            predators.
          </p>
          <p>
            In the Eastern region, many young girls have been obliged to get
            into the sex trade in order to make a living, hence leaving them
            very exposed to gender based violence, in addition to refugees from
            the Central African Republic, have contributed in making this region
            very unsafe to live in; especially as the refugee camps are poorly
            funded. This leads to girls been targets of sexual gender-based
            violence by locals and even the male refugees.
          </p>
          <p>
            Although we have cited some regions, in the other regions, we still
            witness gender-based violence; especially in the form of intimate
            partner violence, rape, sexually transmitted marks issued to female
            students, just to name a few.
          </p>
          <p>
            Those whose rights are violated are also faced with weak health
            systems (mental, clinical, psycho social) are weak in capacity and
            resources, coupled with weak legal systems; materialized as
            unenforced laws and ignorance.
          </p>
          <p class="fs-5 fw-bold">
            Using Technology to help reduce Gender Based Violence.
          </p>
          <p>
            In the context of general insecurity (In the North West and South
            West Regions, East Region, North Region), misinformation,
            stigmatization and weak legal systems, it becomes very common to get
            cases of young girls and women who have been abused and left
            helpless without any proper care. Nonetheless, with the increasingly
            high adoption of mobile phones especially with GPS capability and
            increasing internet access, these young girls now have an
            opportunity to be heard by people who truly care about them and who
            can help them at least receive the care they need. Availability of
            ‘Okadas’ i.e., bike riders make it easy for anyone to get first aid
            care even in the most interior zones. National policies providing
            social care and social system structures have been developed over
            the years hence making it easier for Gender Based Violence victims
            to receive care.
          </p>
          <p>
            Thanks to advancements in technology, and availability of local app
            development firms and institutes like eBASE (Effective Basic
            Services) Africa in collaboration with Vinsight technologies,
            Geovation Collaborations, and Silicon Mountain and with funding from
            the French embassy Cameroon under the PISCCA program, we have the
            capacity of building technological solutions which can provide a way
            for Victims to report anonymously, get help and get free educational
            content. Stakeholders too can now in real time gain access to real
            time information on Gender Based Violence cases and based on this
            information take necessary measures to solve this wicked problem.
          </p>
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
a:hover {
  color: #0472448f;
}
.heading img {
  width: 50px;
  height: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
}
.date {
  color: #c5c1c1;
  font-size: 0.8rem;
}
.body-img img {
  margin: 0 auto;
}
</style>