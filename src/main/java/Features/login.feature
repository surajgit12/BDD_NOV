Feature: Free CRM login feature


# without example keywords

#Scenario: Free CRM Login Test Scenario

#Given user is already on login page
#When title of login page is Free Crm
#Then user enter the "surajtest" and "karn@123"
#Then user clicks on login button



# with example keywords

Scenario Outline: Free CRM Login Test Scenario

Given user is already on login page
When title of login page is Free Crm
Then user enter the "<username>" and "<password>"
Then user clicks on login button
#Then Close the browser
Examples:
 
 |username | password |
 |surajtest| karn@123 |

 

