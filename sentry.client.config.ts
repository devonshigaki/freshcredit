// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7325c61206e7f3984c9e3216675dbc4b@o4508082273452032.ingest.us.sentry.io/4508082277580800",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

// // This file configures the initialization of Sentry on the client.
// // The config you add here will be used whenever a users loads a page in their browser.
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/

// import * as Sentry from "@sentry/nextjs";

// Sentry.init({
//   dsn: "https://e300b41df2ffb6d4592972400a25c0d3@o4506876178464768.ingest.us.sentry.io/4507159179034624",

//   // Adjust this value in production, or use tracesSampler for greater control
//   tracesSampleRate: 1,

//   // Setting this option to true will print useful information to the console while you're setting up Sentry.
//   debug: false,

//   replaysOnErrorSampleRate: 1.0,

//   // This sets the sample rate to be 10%. You may want this to be 100% while
//   // in development and sample at a lower rate in production
//   replaysSessionSampleRate: 0.1,

//   // You can remove this option if you're not planning to use the Sentry Session Replay feature:
//   integrations: [
//     Sentry.replayIntegration({
//       // Additional Replay configuration goes in here, for example:
//       maskAllText: true,
//       blockAllMedia: true,
//     }),
//   ],
// });
