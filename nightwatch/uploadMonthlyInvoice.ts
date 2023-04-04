import { NightwatchTests } from "nightwatch"

export default {
    "Login": () => {
        return browser
            .url('https://www.acesso.gov.pt/v2/loginForm?partID=PFAP&path=/geral/dashboard')
            .waitForElementVisible('body')
            .click('#content-area > div > div > label:nth-child(4) > span')
            .setValue('#username', [process.env.PORTAL_USERNAME])
            .click('#password-nif')
            .setValue('#password-nif', [process.env.PORTAL_PASSWORD])
            .click('#sbmtLogin')
            .end();
    }
}