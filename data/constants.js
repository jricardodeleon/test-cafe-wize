import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_LOGIN :{
        USERNAME : process.env.USERNAME,
        PASSWORD : process.env.PASSWORD
    },

    INVALID_LOGIN : {
        USERNAME : process.env.INV_USERNAME,
        PASSWORD : process.env.INV_PASSWORD
    },

    VALID_CHECKOUT : {
        USERNAME : process.env.VALID_USERNAME,
        LASTNAME : process.env.VALID_LASTNAME,
        ZIPCODE : process.env.VALID_ZIPCODE
    },

    INVALID_CHECKOUT : {
        ZIPCODE : process.env.INVALID_ZIPCODE
    }
}