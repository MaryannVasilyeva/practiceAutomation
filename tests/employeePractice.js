module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Information saves without clicking save - NO LONGER': browser => {
        browser
            .verify.containsText('.titleText', 'Employee Manager')
            .verify.containsText('#noEmployee', 'No Employee Selected')
        
    },
    'Check if information saves without clicking SAVE': browser => {
        browser
        //testing if the information saves without clicking "save"
            .click('[name="employee1"]')
            .assert.attributeEquals('.confirmationButton', 'disabled', 'true')
            .assert.attributeEquals('.neutralButton', 'disabled', 'true')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', ['Mary'])
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', ['0000000000'])
            .clearValue('[name="titleEntry"]')
            .setValue('[name="titleEntry"]', ['QA Automation Engineer'])
            .click('[name="employee2"]')
            .click('[name="employee1"]')
            .click('.confirmationButton')
        //testing if the information is the same when you refresh the page
            .refresh()
            .click('[name="employee1"]')
    },
    'Check if information saves with clicking SAVE': browser => {
        browser
        //Checking if the input fields save with clicking "save"
        .click('[name="employee1"]')
        .assert.attributeEquals('.confirmationButton', 'disabled', 'true')
        .assert.attributeEquals('.neutralButton', 'disabled', 'true')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', ['Mary'])
        .clearValue('[name="phoneEntry"]')
        .setValue('[name="phoneEntry"]', ['0000000000'])
        .clearValue('[name="titleEntry"]')
        .setValue('[name="titleEntry"]', ['QA Automation Engineer'])
        .click('.confirmationButton')
        browser.assert.value('[name="nameEntry"]', 'Mary')
        browser.assert.value('[name="phoneEntry"]', '0000000000')
        browser.assert.value('[name="titleEntry"]', 'QA Automation Engineer')

    },
    'Checking if the name phone number, title could save anything into the input fields': browser => {
        browser
            .click('[name="employee2"]')
            .assert.attributeEquals('.confirmationButton', 'disabled', 'true')
            .assert.attributeEquals('.neutralButton', 'disabled', 'true')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', ['123456789101112'])
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', ['123456789101112'])
            .clearValue('[name="titleEntry"]')
            .setValue('[name="titleEntry"]', ['123456789101112'])
            .click('.confirmationButton')
            browser.assert.value('[name="nameEntry"]', '123456789101112')
            browser.assert.value('[name="phoneEntry"]', '123456789101112')
            browser.assert.value('[name="titleEntry"]', '123456789101112')
    },
    'Checking if you could error message displays and has correct spelling for invalid phone number': browser => {
        browser
            .click('[name="employee3"]')
            .waitForElementVisible('.infoCard')
            .verify.elementPresent('.infoCard')
            .verify.elementPresent('[name="employeeName"]')
            .assert.attributeEquals('.confirmationButton', 'disabled', 'true')
            .assert.attributeEquals('.neutralButton', 'disabled', 'true')
            .assert.valueContains('[name="phoneEntry"]', '7459831843')
            .setValue('[name="phoneEntry"]', '123123123')
            .assert.valueContains('[name="phoneEntry"]', '7459831843123123123')
            .click('#saveBtn')
            .verify.elementPresent('.invalidInfo')
            .verify.elementPresent('.errorCard')
            .assert.containsText('.errorMessage', 'The phone number must be 10 digits long.')
    },
    'Checking if the Name input field will also bring up the error for Title field': browser => {
        browser
            .click('[name="employee4"]')
            .waitForElementVisible('.infoCard')
            .verify.elementPresent('.infoCard')
            .verify.elementPresent('[name="employeeName"]')
            .assert.attributeEquals('.confirmationButton', 'disabled', 'true')
            .assert.attributeEquals('.neutralButton', 'disabled', 'true')
            .assert.valueContains('[name="nameEntry"]', 'Teresa Osborne')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', ['This name is way to looooooooooooooooooooooooooooong'])
            .assert.valueContains('[name="nameEntry"]', 'This name is way to looooooooooooooooooooooooooooong')
            .click('#saveBtn')
            .verify.elementPresent('.invalidInfo')
            .verify.elementPresent('.errorCard')
            .verify.elementPresent('[name="nameEntry"].invalidInfo')
            .verify.attributeContains('[name="nameEntry"]', 'class', 'invalidInfo')
            .verify.elementPresent('[name="titleEntry"].invalidInfo')
            .verify.attributeContains('[name="titleEntry"]', 'class', 'invalidInfo')
            .getText('.errorMessage', result => {
                browser.verify.ok( JSON.stringify(result.value), 'The name field must be between 1 and 30 characters long.\nThe title field must be between 1 and 30 characters long.')
            })
    },
    'Checking if error message still display when switching to other employee forms': browser =>{
        browser
            .click('[name="employee5"]')
            .waitForElementVisible('.infoCard')
            .verify.elementPresent('.infoCard')
            .verify.elementPresent('[name="employeeName"]')
            .assert.attributeContains('.confirmationButton', 'disabled', 'true')
            .assert.attributeContains('.neutralButton', 'disabled', 'true')
            .assert.valueContains('[name="nameEntry"]', 'Dollie Berry')
            .assert.valueContains('[name="phoneEntry"]', '4873459812')
            .assert.valueContains('[name="titleEntry"]', 'Front-End Developer')
            .clearValue('[name="nameEntry"]')
            .clearValue('[name="phoneEntry"]')
            .clearValue('[name="titleEntry"]')
            .assert.valueContains('[name="nameEntry"]', '')
            .assert.valueContains('[name="phoneEntry"]', '')
            .assert.valueContains('[name="titleEntry"]', '')
            .click('#saveBtn')
            .click('[name="employee6"]')
            .click('[name="employee7"]')
    },
    'Adding a New Employee': browser => {
        browser
            .click('[name="addEmployee"]')
            .waitForElementPresent('[name="employee11"]')
            .verify.elementPresent('[name="employee11"]')
            .click('[name="employee11"]')
            .assert.attributeEquals('.confirmationButton', 'disabled', 'true')
            .assert.attributeEquals('.neutralButton', 'disabled', 'true')
            .assert.valueContains('[name="nameEntry"]', 'New Employee')
            .assert.valueContains('[name="phoneEntry"]', '1234567890')
            .assert.valueContains('[name="titleEntry"]', 'New Employee')
            .clearValue('[name="nameEntry"]')
            .clearValue('[name="phoneEntry"]')
            .clearValue('[name="titleEntry"]')
            .setValue('[name="nameEntry"]', 'Testing')
            .setValue('[name="phoneEntry"]', '0987654321')
            .setValue('[name="titleEntry"]', 'Tester')
            .assert.valueContains('[name="nameEntry"]', 'Testing')
            .assert.valueContains('[name="phoneEntry"]', '0987654321')
            .assert.valueContains('[name="titleEntry"]', 'Tester')
            .click('#saveBtn')
    },
    'Assertion testing': browser => {
        browser
            // .verify.attributeContains('input[name="nameEntry"]')
            .click('[name="employee7"]')
            browser.getAttribute('input[name="nameEntry"]', 'class', result=>{
                browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
            })
            browser.getAttribute('input[name="phoneEntry"]', 'class', result=>{
                browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
            })
            browser.getAttribute('input[name="titleEntry"]', 'class', result=>{
                browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
            })
    }
}