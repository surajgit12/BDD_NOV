Feature: Free CRM Create Contacts 


# with example keywords

Scenario Outline: Free CRM Create a new contact scenario

Given user is already on login page
When title of login page is Free Crm
Then user enter the "<username>" and "<password>"
Then user clicks on login button
#Then user is on home page
Then user is moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"

#Then Close the browser

Examples:
 
 |username | password |firstname| lastname| position|
 |surajtest| karn@123 | xyz     |bbb      | HR      |
# |surajtest| karn@123 | testdj  |KKKss    | devLEAD | 
  

 