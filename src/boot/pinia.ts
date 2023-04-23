import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

export default boot(({ app }) => {
  // Create a new pinia instance
  const pinia = createPinia();

  // Install pinia as a plugin on the app instance
  app.use(pinia);
});
