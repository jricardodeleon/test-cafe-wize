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
    }
}