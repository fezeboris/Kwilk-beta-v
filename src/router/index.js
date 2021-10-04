import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Profile from '../views/profile/Profile.vue'
import Help from '../views/help/Help.vue'
import Clinical from '../views/help/experts/Clinical.vue'
import Psychological from '../views/help/experts/Psychological.vue'
import Consultant from '../views/help/experts/Consultant.vue'
import Bike from '../views/help/experts/Bike.vue'
import Education from '../views/education/Education.vue'
import Request from '../views/requests/Request.vue'
import JobRequest from '../views/requests/JobRequest.vue'
import PatientRequest from '../views/requests/PatientRequest.vue'
import HomePage from '../components/home/HomePage.vue'
import ReportSheet from '../views/reports/ReportSheet.vue'
import ReportFile from '../views/reports/ReportFile.vue'
import Updates from '../views/education/Updates.vue'
import Notications from '../views/notifications/Notications.vue'
import Toolpit from '../components/toolpit/Toolpit.vue'
import HomeSlider from '../components/home/HomeSlider.vue'
import RequestTwo from '../views/requests/RequestTwo.vue'
import RequestThree from '../views/requests/RequestThree.vue'
import Sidebar from '../components/sidebar/Sidebar.vue'
import Image from '../components/Image.vue'
import Image2 from '../components/toolpit/Image.vue'
import Audio2 from '../components/toolpit/Audio2.vue'
import Side from '../components/toolpit/Side.vue'
import Navbar from '../components/Navbar.vue'
import HomeSlideDetails from '../components/home/HomeSlideDetails.vue'
import AppRating from '../components/toolpit/AppRating.vue'
import JobSeekers from '../components/toolpit/JobSeekers.vue'
import Professionals from '../views/professionals/Profesionals.vue'
import HomeSliderComments from '../components/home/HomeSliderComments.vue'
import MyRequest from '../views/help/MyRequest.vue'
import MyRequestUpdate from '../views/help/experts/helpDemande/MyRequestUpdate.vue'
import PatientRequestUpdate from '../views/requests/PatientRequestUpdate.vue'
import CreateResearch from '../views/research/CreateResearch.vue'
import VueResearch from '../views/research/VueResearch.vue'
import Mapss from '../components/toolpit/Mapss.vue'
import UpdateProfile from '../views/profile/UpdateProfile.vue'
import Terms from '../components/toolpit/Terms.vue'
import ClinicalDemande from '../views/help/experts/helpDemande/ClinicalDemande.vue'
import DemandeBike from '../views/help/experts/helpDemande/DemandeBike.vue'
import DemandeConsultant from '../views/help/experts/helpDemande/DemandConsultant.vue'
import PsychoDemande from '../views/help/experts/helpDemande/PsychoDemande.vue'
// import i18n from '../i18n'
// import { h  } from 'Vue';
// import MapaPage from '../components/home/MapaPage.vue'
// import {RouterView} from "vue-router";



const routes = [
  // {
  //   path: '/',
  //   redirect: `/${i18n.locale}`
  // },
 

  // {
  //   path: '/:lang',
  //   component:RouterView,
  //   children:[
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/map',
    name: 'Mapss',
    component: Mapss
  },
  {
    path: '/home-page',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/home-slider',
    name: 'HomeSlider',
    component: HomeSlider
  },
  {
    path: '/home-slider-comments/:id',
    name: 'HomeSliderComments',
    component: HomeSliderComments
  },
  {
    path: '/home-slider/detail/:id', //:id
    name: 'HomeSlideDetails',
    component: HomeSlideDetails,
    props: true
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile-update',
    name: 'UpdateProfile',
    component: UpdateProfile
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/clinical-demand',
    name: 'ClinicalDemande',
    component: ClinicalDemande
  },
  {
    path: '/demande-bike',
    name: 'DemandeBike',
    component: DemandeBike
  },
  {
    path: '/demand-consultant',
    name: 'DemandeConsultant',
    component: DemandeConsultant
  },
  {
    path: '/psycho-demand',
    name: 'PsychoDemande',
    component: PsychoDemande
  },
  {
    path: '/help/clinical_help',
    name: 'Clinical',
    component: Clinical
  },
  {
    path: '/help/psychological_help',
    name: 'Psychological',
    component: Psychological
  },
  {
    path: '/help/consultant_help',
    name: 'Consultant',
    component: Consultant
  },
  {
    path: '/help/bike_help',
    name: 'Bike',
    component: Bike
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/requests/request',
    name: 'Request',
    component: Request
  },
  {
    path: '/job-request',
    name: 'JobRequest',
    component: JobRequest
  },

  {
    path: '/report-sheet',
    name: 'ReportSheet',
    component: ReportSheet,
    meta: {
      KeepAlive: true // Need to be cached
    }
  },
  {
    path: '/report-file',
    name: 'ReportFile',
    component: ReportFile
  },
  {
    path: '/patient-request',
    name: 'PatientRequest',
    component: PatientRequest
  },
  {
    path: '/patient-request-update/:id',
    name: 'PatientRequestUpdate',
    component: PatientRequestUpdate
  },
  {
    path: '/updates',
    name: 'Updates',
    component: Updates
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notications
  },
  {
    path: '/toolpit',
    name: 'Toolpit',
    component: Toolpit
  },

  {
    path: '/requests/request-two',
    name: 'RequestTwo',
    component: RequestTwo
  },
  {
    path: '/requests/request-three',
    name: 'RequestThree',
    component: RequestThree
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: Sidebar
  },
  {
    path: '/image',
    name: 'Image',
    component: Image
  },
  {
    path: '/image2',
    name: 'Image2',
    component: Image2
  },

  {
    path: '/audio2',
    name: 'Audio2',
    component: Audio2
  },
  {
    path: '/side',
    name: 'Side',
    component: Side
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/profile/app_rating',
    name: 'AppRating',
    component: AppRating
  },
  {
    path: '/profile/job_seekers',
    name: 'JobSeekers',
    component: JobSeekers
  },
  {
    path: '/professionals',
    name: 'Professionals',
    component: Professionals
  },
  {
    path: '/my-request',
    name: 'MyRequest',
    component: MyRequest
  },
  {
    path: '/my-request-update/:id',
    name: 'MyRequestUpdate',
    component: MyRequestUpdate
  },
  {
    path: '/create-research',
    name: 'CreateResearch',
    component: CreateResearch
  },
  {
    path: '/vue-research',
    name: 'VueResearch',
    component: VueResearch
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },


  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  }
//  ]
// }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
