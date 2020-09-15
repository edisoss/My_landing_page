<template>
   <div class="container-fluid m-0 p-0">

     <div id="home-page" class="full-height p-4">
        <div class="container pt-3">

          <div class="row pb-5">
            <div class="col-lg-6 pt-4 my-auto">
              <div class="text-center mb-3 d-block d-lg-none">
                <h1 class="display-3">{{ title }}</h1>
                <h3>Drīz lapa tiks palaista</h3>
              </div>
              <img id="iphone-img" src="../assets/travelTreasuryiPhone.png" class="img-fluid">
            </div>

            <div class="col-lg-6 my-auto pt-4">
              <div class="text-center mb-3 d-none d-lg-block">
                <h1 class="display-3">{{ title }}</h1>
                <h3>Drīz lapa tiks palaista</h3>
              </div>

              <div class="border p-3 p-md-5 bg-white rounded shadow">
                <h2>Cooming Soon</h2>
                <form @submit.prevent="addEmail(email)">
                  <div class="form-group">
                    <label for="emailSignup">Piesakies vestulei lai sanemtu pazinojumu par to kad lapa bus pieejama</label>
                    <input  v-model="email"
                            type="email"
                            id="emailSignup"
                           placeholder="Enter Email"
                            class="form-control"
                    >
                    <small id="emailSignup" class="form-text text-muted">Mes neizpaudisim Jus informaciju</small>
                    <button type="submit" class="btn btn-success mt-3">Join waiting list</button>
                    <div class="mt-4">
                      <p class="m-0">{{ message }}</p>
                    </div>
                  </div>
                </form>
              </div>
                <div id="available" class="p-2">
                  <h4 class="text-centermb-2 mt-3 text-light">Available On</h4>
                  <div class="row">

                    <div class="col my-auto">
                      <img src="../assets/download_google.png" class="float-right img-fluid app_store-img">
                    </div>
                    <div class="col my-auto">
                      <img src="../assets/download_apple.png" class="float-left img-fluid app_store-img">
                    </div>

                  </div>
                </div>
            </div>
          </div>

        </div>
     </div>

     <div id="about" class="bg-light p-3 p-md-5">

       <div class="row">
         <div class="col-lg">
           <img src="../assets/icons/app.svg" height="120" class="m-4">
           <h5 class="ml-md-4 mr-md-4">
             Plan your next adventure by setting a daily budget.We make ir easy to brake your expensses down by category, giving you more time to plan the important things!
           </h5>
         </div>
         <div class="col-lg">
           <img src="../assets/icons/piggy-bank.svg" height="120" class="m-4">
           <h5 class="ml-md-4 mr-md-4">
             Plan your next adventure by setting a daily budget.We make ir easy to brake your expensses down by category, giving you more time to plan the important things!
           </h5>
         </div>
         <div class="col-lg">
           <img src="../assets/icons/passport.svg" height="120" class="m-4">
           <h5 class="ml-md-4 mr-md-4">
             Plan your next adventure by setting a daily budget.We make ir easy to brake your expensses down by category, giving you more time to plan the important things!
           </h5>
         </div>
       </div>

     </div>

     <div id="contact" class="p-4">
        <div class="row justify-content-center mt-3 mb-3">
          <div class="col-lg-4">
            <h2>Have Any Question</h2>
            <p>Contact us by filling out hte information below</p>

            <form>
              <div class="form-group text-left">
                <input type="email"
                        class="form-control"
                        placeholder="Enter Your Email"
                >
                <textarea class="form-control mt-3"
                          placeholder="Enter Your Message"
                          rows="5">
                </textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
     </div>

     <div id="footer" class="p-4">
        <footer class="text-light p-4">
          <a href="..." target="_blank" class="text-warning">Build This App</a> |
          <a href="#" class="text-warning">Privacy Policy</a>
          <br>
          <small>&copy; 2020</small>
        </footer>
     </div>

   </div>
</template>

<script>
  import { Auth } from '../firebase/auth.js'

  export default {
    data () {
      return {
        title: 'OssIT',
        email: '',
        message: '',
      }
    },
    methods () {
      async addEmail(email)
      var noticeMessage = "🎉 Your account has been reserved 🎉"
      await Auth.createUserWithEmailAndPassword(email, 'password').catch(function(error) {
      noticeMessage = error.message;
      })
    }
  }
</script>

<style scoped>
  #home-page{
    background-color: #92D2F2;
    background: url('../assets/bg_mt.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  #about{
    min-height: 40vh;
  }

  #iphone-img{
    max-height: 80vh;
  }

  #contact{
    background-color: #57AEAF;
  }

  #footer{
    background-color: #252223;
  }

  .app_store-img{
    max-height: 80px;
  }
</style>
