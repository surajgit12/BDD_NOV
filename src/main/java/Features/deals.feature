Feature: Deal Data creation

Scenario: Free CRM Create a new deal scenario

Given user is already on login page
When title of login page is Free Crm
Then user enter the username and password
|surajtest|karn@123|

Then user clicks on login button
#Then user is on home page
Then user is moves to new deals page
Then user enters deal details
| test deal | 1000 | 50 | 10 |

#Then Close the browser