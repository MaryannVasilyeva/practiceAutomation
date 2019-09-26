module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com')
    },
    after: browser => {
        browser.end()
    },
    // 'Testing if browser loads properly - QAE-52': browser =>{
    //     browser
    //     .useXpath()
    //         .waitForElementVisible('(//a//img)[1]')
    //         .waitForElementVisible('//div[@id="svg-overlay"]')
    //         .verify.elementPresent('//div[@is="svg-overlay"]')
    //         .waitForElementVisible('(//div[contains(text(), "See all")])[1]')
    //         .verify.elementPresent('(//div[contains(text(), "See all")])[1]')
    //     .useCss()
    //         .waitForElementVisible('#app')
        
    // },
    'Testing if See All links work - QAE-52': browser =>{
        browser
            .useXpath()
            //RECREATIONAL VEHICLES
                .click('(//div[contains(text(), "See all")])[1]')
                .waitForElementPresent('//div[@class="_33ivj"]')
                .verify.elementPresent('//div[@class="_33ivj"]')
                .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Recreational Vehicles')
                .click('(//a//img)[1]')
                .waitForElementPresent('//div[@is="svg-overlay"]')
            //OUTDOOR GEAR
                .click('(//div[contains(text(), "See all")])[2]')
                .waitForElementPresent('//div[@class="_33ivj"]')
                .verify.elementPresent('//div[@class="_33ivj"]')
                .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Outdoor Gear')
                .click('(//a//img)[1]')
                // .waitForElementPresent('//div[@id="svg-overlay"]')
                .expect.element('//div[@id="svg-overlay"]').to.be.visible.before(30000)

            //ELECTRONICS
                .click('(//div[contains(text(), "See all")])[3]')
                .waitForElementPresent('//div[@class="_33ivj"]')
                .verify.elementPresent('//div[@class="_33ivj"]')
                .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Electronics')
                .click('(//a//img)[1]')
                .expect.element('//div[@id="svg-overlay"]').to.be.visible.before(30000)

                //SKELETON FOR ALL OTHER BROWSING LINKS
                // .click('(//div[contains(text(), "See all")])[4]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Party & Wedding Equipment')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[5]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Tools')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[6]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Clothing')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[7]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Home and Kitchen')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[8]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Toys and Games')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[9]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Lawn and Garden')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[10]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Sporting Goods')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[11]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: DVDs')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[12]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Venues')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[13]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Music')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[14]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Business Equipment')
                // .click('(//a//img)[1]')
                // .click('(//div[contains(text(), "See all")])[15]')
                // .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Misc')
    }
}