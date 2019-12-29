<template>
  <div class="login-modal" v-if="show">
    <div class="login-modal-content">
      <h1>Log in</h1>
      <div class="providers">
        <div class="providers-google" @click="doLogin('google')">
          <span>With</span>
          <i class="fab fa-google login-icon" />
          <span>Google</span>
        </div>
        <div class="providers-facebook" @click="doLogin('facebook')">
          <span>With</span>
          <i class="fab fa-facebook login-icon" />
          <span>Facebook</span>
        </div>
      </div>
      <div class="or">&mdash; or &mdash;</div>
      <div class="email">
        <input
          type="email"
          class="login-input"
          placeholder="E-mail"
          v-model="email"
        />
        <input
          type="password"
          class="login-input"
          placeholder="Password"
          v-model="password"
        />
        <a href="#" class="submitBtn" @click="doPasswordLogin">Log in</a>
      </div>
      <i class="fas fa-times closeBtn" @click="closeModal"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LoginModal',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapState({
      show: state => state.loginModal.show
    })
  },
  methods: {
    ...mapActions(['toggleModal', 'login']),
    closeModal() {
      this.toggleModal(false);
    },

    doLogin(provider) {
      const data = {
        provider
      };
      this.login(data);
      this.toggleModal(false);
    },

    clearLoginForm() {
      (this.email = ''), (this.password = '');
    },

    doPasswordLogin() {
      const data = {
        provider: 'password',
        email: this.email,
        password: this.password
      };
      this.login(data);
      this.clearLoginForm();
      this.toggleModal(false);
    }
  }
};
</script>

<style>
.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-modal-content {
  height: 100%;
  width: 100%;
  position: relative;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
}

.login-modal-content h1 {
  margin-bottom: 2rem;
}

.providers {
  display: flex;
  justify-content: center;
}

.providers-google {
  margin-right: 1rem;
}

.providers-google,
.providers-facebook {
  background: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  color: #666;
  transition: background 400ms ease-in-out;
}

.providers-google:hover {
  cursor: pointer;
  background: #ea4335;
  color: #fff;
}

.providers-facebook:hover {
  cursor: pointer;
  background: #3b5998;
  color: #fff;
}

.providers-google:hover i,
.providers-facebook:hover i {
  color: #fff;
}

.login-icon {
  font-size: 3rem;
  margin: 0.5rem 0;
}

.fa-google {
  color: #ea4335;
}

.fa-facebook {
  color: #3b5998;
}

.closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 2rem;
  margin: 1rem;
  color: #333;
}

.or {
  margin: 2rem 0;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.email {
  display: flex;
  flex-direction: column;
}

.login-input,
.submitBtn {
  border: 1px solid #ddd;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  font-size: inherit;
  font-family: inherit;
}

.login-input {
  margin-bottom: 1rem;
}

.submitBtn {
  background: #f1f1f1;
  border: 1px solid #ddd;
  color: #333;
  text-decoration: none;
}

.submitBtn:hover {
  background: #f8f8f8;
}

@media screen and (min-width: 500px) {
  .login-modal-content {
    height: auto;
    width: auto;
    padding: 4rem;
  }
}
</style>
