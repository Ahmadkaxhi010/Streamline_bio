const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        
        smtp_host: "mail.smtp2go.com",
        smtp_user: "students.uettaxila.edu.pk",
        smtp_pass: "xCEEWP6kNjOzYDp7",
        
        password_changehost: "live.smtp.mailtrap.io",

        password_changeusername: "6bb4922c65d9b2",
        password_changepass: "1e9e125d684fac",
        Email_bulkmailtrap: "sandbox.smtp.mailtrap.io",
        
      },
    };
  }

  return {
    env: {
        smtp_host: "mail.smtp2go.com",
        smtp_user: "students.uettaxila.edu.pk",
        smtp_pass: "xCEEWP6kNjOzYDp7",
        
        password_changehost: "live.smtp.mailtrap.io",
        
        password_changeusername: "6bb4922c65d9b2",
        password_changepass: "1e9e125d684fac",
        Email_bulkmailtrap: "sandbox.smtp.mailtrap.io",
    },
  };
};