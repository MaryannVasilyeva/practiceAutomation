module.exports = {
    //ERROR IN CODE - does not have a {} for the beforeEach and after
    // beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    // after: browser => browser.end(),

    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')

    },
    after: browser => {
        browser.end()
    },
    'Problem 1': browser => {
        browser
            .click('[name="employee7"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'Billy Bob')
            .click('[name="employee9"]')
            .verify.value('[name="nameEntry"]', 'Eve Sparks')
            .click('[name="employee7"]')
            //BUG IN CODE - though would display 'Ruby Estrada' but displayed 'Billy Bob'
            // .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    },
    'Problem 2': browser => {
        browser
        //ERROR IN CODE - should be ('[name="employee5"]') but displayed ('name="employee5"')
            // .click('name="employee5"')
            .click('[name="employee5"]')
            .clearValue('[name="titleEntry"]')
            .setValue('[name="titleEntry"]', 'Best Manager Ever')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '1234567890')
            .click('#saveBtn')
            .click('[name="employee8"]')
            // .expect.element('[name="titleEntry"]').value.not.to.equal('Best Manager Ever')
            .click('[name="employee5"]')
            //ERROR IN CODE - needs browser after the .expect and missing []
            // .expect.element('name="phoneEntry"').text.to.equal('1234567890')
            // .expect.element('[name="titleEntry"]').text.to.equal('Best Manager Ever')
    },
    'Problem 3': browser => {
        browser
            .click('[name="employee1"]')
            .waitForElementPresent('[name="nameEntry"]')
            //ERROR IN CODE - needed a .clearValue
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'New Person')
            .click('#saveBtn')
            .click('[name="employee2"]')
            .expect.element('[name="nameEntry"]').value.not.to.equal('New Person').before(2000)
        browser
            .click('[name="employee1"]')
            .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
    },
    'Problem 4': browser => {
        browser
            .click('[name="employee5"]')
            .clearValue('[name="nameEntry"]')
            .click('#saveBtn')
            //BUG IN CODE - doesn't display the error message
            // .assert.containsText('.errorCard', 'The name field must be between 1 and 30 characters long.')
            // .assert.value('[name="nameEntry"]', 'Dollie Berry')
    },
    'Problem 5': browser => {
        browser
        //ERROR IN TEST - missing a ] in .click('[name="employee4"')
        //also, BUG IN CODE - the ID in the name have a -
            // .click('[name="employee4"')
            .click('[name="employee-4"]')
            .clearValue('[name="phoneEntry"]')

            //ERROR IN TEST, it read .setValue('8015551234') should read .setValue('[name="phoneEntry"]', '8015551234')
            // .setValue('8015551234')

            .setValue('[name="phoneEntry"]','8015551234')
            .click('#cancelBtn')
            .click('[name="employee5"]')
            .click('[name="employee-4"]')

            //ERROR IN TEST 
            // .expect.element('name="phoneEntry"]').value.not.to.equal('8015551234')
            .expect.element('[name="phoneEntry"]').value.not.to.equal('8015551234')
    }
}