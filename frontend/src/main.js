import { createApp } from 'vue'
import App from './App.vue'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css' 
import store from './store';
import { Buffer } from 'buffer';

// Make Buffer available globally
window.Buffer = Buffer;

const app = createApp(App);  // Pass App here

// Tooltip library configuration
app.use(VueTippy, {
  directive: 'tippy', 
  component: 'tippy', 
  componentSingleton: 'tippy-singleton',
  defaultProps: {
    placement: 'auto-end',
    allowHTML: true,
  }, 
});

app.use(store);  // Use the store
app.mount('#app');  // Mount the app
