module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fc80731a90799b37c3da1db7af80169'),
  },
});
