$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DataTbTest.feature");
formatter.feature({
  "line": 1,
  "name": "addition of a search functionality to amazon.com",
  "description": "",
  "id": "addition-of-a-search-functionality-to-amazon.com",
  "keyword": "Feature"
});
formatter.before({
  "duration": 377200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "visit the guru bank",
  "description": "",
  "id": "addition-of-a-search-functionality-to-amazon.com;visit-the-guru-bank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@DaTable"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the guru bank website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the userid and details",
  "rows": [
    {
      "cells": [
        "fname",
        "Pradeep"
      ],
      "line": 7
    },
    {
      "cells": [
        "lname",
        "behera"
      ],
      "line": 8
    },
    {
      "cells": [
        "age",
        "twer"
      ],
      "line": 9
    },
    {
      "cells": [
        "fab",
        "Code"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I submit",
  "keyword": "And "
});
formatter.match({
  "location": "DataTbTest.i_visit_the_guru_bank_website()"
});
formatter.result({
  "duration": 317434500,
  "status": "passed"
});
formatter.match({
  "location": "DataTbTest.i_enter_the_userid_and_details(DataTable)"
});
formatter.result({
  "duration": 5114000,
  "status": "passed"
});
formatter.match({
  "location": "DataTbTest.i_submit()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.after({
  "duration": 123500,
  "status": "passed"
});
});