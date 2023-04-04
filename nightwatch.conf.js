// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["test", "nightwatch"],

    // See https://nightwatchjs.org/guide/concepts/page-object-model.html
    page_objects_path: [],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
    custom_commands_path: [],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
    custom_assertions_path: [],

    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
    plugins: [],

    // See https://nightwatchjs.org/guide/concepts/test-globals.html
    globals_path: "",

    webdriver: {},

    test_workers: {
        enabled: true
    },

    test_settings: {
        default: {
            disable_error_log: false,
            launch_url: "http://localhost",

            screenshots: {
                enabled: false,
                path: "screens",
                on_failure: true
            },

            desiredCapabilities: {
                browserName: "chrome"
            }
        },

        //////////////////////////////////////////////////////////////////////////////////
        // Configuration for using the Sauce Labs cloud service                          |
        //                                                                               |
        // Please set the username and access key by setting the environment variables:  |
        // - SAUCE_USERNAME                                                              |
        // - SAUCE_ACCESS_KEY                                                            |
        //////////////////////////////////////////////////////////////////////////////////

        sauceLabs: {
            username: "${SAUCE_USERNAME}",
            access_key: "${SAUCE_ACCESS_KEY}",
            selenium_host: "ondemand.eu-central-1.saucelabs.com",
            selenium_port: 443,
            baseUrl: "wd/hub",
            desiredCapabilities: {
                build: "selenium-build-FW4ME",
                name: "taxReport"
            }
        },
        sauceChrome: {
            extends: "sauceLabs",
            desiredCapabilities: {
                browserName: "chrome",
                version: "latest",
                platform: "Windows 11"
            }
        }
    }
}
