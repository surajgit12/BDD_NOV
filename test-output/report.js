$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:Features/deals.feature");
formatter.feature({
  "name": "Deal Data creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_already_loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.title_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the username and password",
  "rows": [
    {
      "cells": [
        "surajtest",
        "karn@123"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_click_loginbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is moves to new deals page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});