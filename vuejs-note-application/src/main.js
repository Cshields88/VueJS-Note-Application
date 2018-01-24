// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //import the app.vue component
import Firebase from 'firebase'

Vue.config.productionTip = false

// let firebase = new Firebase('https://note-application-b064a.firebaseio.com');



/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App }
})
