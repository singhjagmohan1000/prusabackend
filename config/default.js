const CONFIG = {
    APP: {
        PORT: 5000
    },
    FIREBASE: {
        DATABASE_URL: process.env.DATABASE_URL,
        COLLECTION: {
            TEAM:'prusa_team',
            MONDAY:'schedule_monday',
            TUESDAY:'schedule_tuesday',
            WEDNESDAY:'schedule_wednesday',
            THURSDAY:'schedule_thursday',
            FRIDAY:'schedule_friday',
            SATURDAY:'schedule_saturday',
            SUNDAY:'schedule_sunday',
            POLL:'prusa_poll',
            IMAGES:'images'

        }
    },
    CONTACT: {
        SMPTP: {
            HOST: process.env.SMTP_HOST,
            PORT: process.env.SMTP_PORT,
            SECURE: false,
            CLIENT: {
                SECRET:process.env.CLIENT_SECRET,
                ID:process.env.CLIENT_ID,
                REDIRECT_URL:process.env.REDIRECT_URL,
                REFRESH_TOKEN: process.env.REFRESH_TOKEN
            },
            AUTH: {
                USER: process.env.EMAIL_USER
            }
        },
        MAIL: {
            APP_NAME: "Punjabi Radio USA",
            APP_EMAIL: "info@punjabiradiousa.com",
            APP_REPLY:
                " Thanks for contacting us. We will reach out to you soon. Stay in touch. You may also Call us on 1(408)2725200"
        },
        VALIDATION: {
            NAME_REQUIRED: "Tell us Your Name, Please!",
            INVALID_NAME: "Please Tell Us Your Real Name",
            EMAIL_REQUIRED: "Oh! Email is Required",
            INVALID_EMAIL: "Invalid!!! Email Address",
            SUBJECT_REQUIRED: "Regarding What???",
            INVALID_SUBJECT: "Something Is Wrong In Your Subject",
            MESSAGE_REQUIRED: "You Wanna Say something!!! Right",
            INVALID_MESSAGE: "Something Is Wrong In Your Message"
        }
    }
};

module.exports = CONFIG;
