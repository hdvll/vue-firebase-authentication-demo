<template>
  <header>
    <div class="logo">Vue & Firebase Test</div>
    <nav>
      <div v-if="!isLoading">
        <div class="loggedout-links" v-if="!isLoggedIn">
          <div class="loginBtn" @click="openModal">Login</div>
        </div>
        <div class="loggedin-links" v-else>
          <span @click="doLogout" class="logoutBtn">Logout</span>
          <img class="user-img" :src="user.photoURL" v-if="user.photoURL" />
          <i class="fas fa-user-circle user-img-placeholder" v-else></i>
        </div>
      </div>
      <div v-else>Loading...</div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isLoggedIn', 'isLoading']),
    ...mapState({
      user: state => state.auth.user,
      loginModal: state => state.loginModal.show
    })
  },
  mounted() {
    this.checkUser();
  },
  methods: {
    ...mapActions(['getLoggedInUser', 'logout', 'toggleModal']),

    openModal() {
      this.toggleModal(true);
    },

    checkUser() {
      this.getLoggedInUser();
    },

    doLogout() {
      this.logout();
    }
  }
};
</script>

<style scoped>
header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.3rem;
  font-weight: 900;
  text-transform: uppercase;
}

.loggedin-links,
.loggedout-links {
  display: flex;
  align-items: center;
}

.user-img {
  border: 1px solid salmon;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.user-img-placeholder {
  font-size: 2.8rem;
  color: #888;
}

.logoutBtn {
  background: #eee;
  color: #333;
  border: 1px solid #ddd;
}

.logoutBtn:hover {
  background: #e4e4e4;
}

.loginBtn,
.logoutBtn {
  background: #f1f1f1;
  border: 1px solid #ddd;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.loginBtn span {
  margin-right: 0.5rem;
}

.loginBtn:last-of-type {
  margin-right: 0;
}

.loginBtnFacebook {
  background: #3b5998;
  color: #fff;
}

.loginBtnFacebook:hover {
  background: #324f8b;
}

.loginBtnGoogle {
  background: #ea4335;
  color: #fff;
}

.loginBtnGoogle:hover {
  background: #d83c2d;
}

.fa-facebook,
.fa-google {
  font-size: 1.5rem;
}
</style>
