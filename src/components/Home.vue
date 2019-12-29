<template>
  <div class="home">
    <div v-if="!isLoggedIn">You need to be logged in to view this page...</div>
    <div v-else>
      <h1>{{ user.displayName }}</h1>
      <p>E-mail: {{ user.email }}</p>
      <p>E-mail verified: {{ verifiedEmail }}</p>
      <p>User id: {{ user.uid }}</p>
      <p>Logged in with: {{ user.providerData[0].providerId }}</p>
    </div>
    <LoginModal />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import LoginModal from './LoginModal';

export default {
  name: 'Home',
  components: {
    LoginModal
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
    ...mapState({
      user: state => state.auth.user
    }),
    verifiedEmail() {
      return this.user.emailVerified ? 'Yes' : 'No';
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
  background: #f1f1f1;
}
</style>
