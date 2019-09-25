module.exports = {
    //TEST WHETHER OR NOT I COULD USE THE "before"
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google Search': browser => {
        browser
            .waitForElementVisible('#searchform')
            .verify.elementPresent('[name="q"]')
            .verify.elementPresent('img[alt="Google"]', 'Google')
            .setValue('[name="q"]', ['Crocodiles', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.valueContains('[title="Search"]', 'Crocodiles')
            .assert.valueContains('[title="Search"]', 'Crocodiles')
            .click('a[title="Go to Google Home"]')
            .waitForElementVisible('#searchform')
            .setValue('[name="q"]', ['Crocodiles'])


            //ERROR FROM HERE (figure our how to grab the child input)

            // .click('[value="Google Search"]')
            // .verify.elementPresent('img[alt="Google"]', 'Google')
            // .verify.valueContains('[title="Search"]', 'Crocodiles')
            // .assert.valueContains('[title="Search"]', 'Crocodiles')
            // .click('a[title="Go to Google Home"]')
            // .waitForElementVisible('#searchform')

            


            //WAS TRYING TO GET THE "I'M FEELING LUCKY BUTTON TO BE CLICKED"
            // .click('[id="gbqfbb"]')
            // .click('[value="I\'m Feeling Lucky"]')
            console.log('the entire test passed')
    }
}

    //EXAMPLES
            // .browser.expect.element()
            // .browser.assert.containsText('both')
            // .browser.verify.containsText('both')
            // .browser.verify.ok('so long the first thing you pass is TRUE' 2===2, 'Two is indeed equal to two')