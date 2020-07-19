The first directory is the web application test and was written in codeceptjs employing 
puppeteer. The `parserFunctionality_test.js` is where the test resides. Simply run by 
`npx codeceptjs run  --steps` from the terminal.

The second directory houses the mobile app test, I did this in Python with the appium client
install this by running `pip install Appium-Python-Client` from the terminal  and `python parserTests.py`
in the root folder


The third directory contains the API test written with POSTMAN the Parse CSV function  
should be run first cause that where i save an environment variable for the invoice ID

I have also included an excel file that has some manual test that i carried  out before 
I started automating.

Some improvements; I noticed from the document shared that the developers should not add a 
file picker for the mobile app, I feel this is not very good in term of user experience
especially in the case of iOS where getting file location might not be so easy to get. I really 
enjoyed doing this test Thank You.
