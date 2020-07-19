Feature('parserFunctionality');

Scenario('test parsing functionality', (I) => {
    I.amOnPage('/');
    I.see('CSV Invoice Parser');
    I.attachFile('#statement-file', 'data/sample2.csv');
    I.click('button.btn.btn-primary');
    
    I.see('CSV File has been parsed successfully, see summary below');
    
    I.click('Bundle');

    I.see('Company: Bundle');
    I.see('Number of Hours');
    I.see('Unit Price');
    I.see('Cost');
    I.see('Total')
    I.saveScreenshot('output/parsedInvoice.png', true)

    //pause();

});
