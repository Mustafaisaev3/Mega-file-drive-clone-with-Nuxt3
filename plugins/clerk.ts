// import { clerkPlugin } from 'vue-clerk/plugin';

// export default defineNuxtPlugin(async (nuxtApp) => {
//   const publishableKey = 'pk_test_dHJ1c3RpbmctbGFicmFkb3ItODUuY2xlcmsuYWNjb3VudHMuZGV2JA';

//   nuxtApp.vueApp.use(clerkPlugin, {
//     publishableKey,
//     options: {
//       appearance: {
//         variables: { colorPrimary: '#F0373B' },
//       },
//     },
//   });
// });

import { clerkPlugin } from 'vue-clerk/plugin';

export default defineNuxtPlugin(async (nuxtApp) => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string;

  nuxtApp.vueApp.use(clerkPlugin, {
    publishableKey,
    options: {
      appearance: {
        variables: { colorPrimary: '#570DF8' },
      },
    },
  });
});