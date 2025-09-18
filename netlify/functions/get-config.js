// This is a secure Netlify function.
// Its only job is to fetch your secret API key from the Netlify environment
// and send it to your website's front-end code safely.

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "astro-jumpers-leaderboard.firebaseapp.com",
      projectId: "astro-jumpers-leaderboard",
      storageBucket: "astro-jumpers-leaderboard.appspot.com",
      messagingSenderId: "942651270371",
      appId: "1:942651270371:web:22079e5986822ddd2b91d6"
    })
  };
};
