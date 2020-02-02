$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Basic.feature");
formatter.feature({
  "line": 1,
  "name": "addition of a search functionality to amazon.com",
  "description": "",
  "id": "addition-of-a-search-functionality-to-amazon.com",
  "keyword": "Feature"
});
formatter.before({
  "duration": 361300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search the Product Using Product Name",
  "description": "",
  "id": "addition-of-a-search-functionality-to-amazon.com;search-the-product-using-product-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the application as a guest user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter product into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the Enter",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i should see the search product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate the search product display",
  "keyword": "And "
});
formatter.match({
  "location": "Basic.i_visit_the_application_as_a_guest_user()"
});
formatter.result({
  "duration": 650064900,
  "status": "passed"
});
formatter.match({
  "location": "Basic.i_enter_product_into_the_search_field()"
});
formatter.result({
  "duration": 181900,
  "status": "passed"
});
formatter.match({
  "location": "Basic.i_click_the_Enter()"
});
formatter.result({
  "duration": 464800,
  "status": "passed"
});
formatter.match({
  "location": "Basic.i_should_see_the_search_product()"
});
formatter.result({
  "duration": 582300,
  "status": "passed"
});
formatter.match({
  "location": "Basic.validate_the_search_product_display()"
});
formatter.result({
  "duration": 610400,
  "status": "passed"
});
formatter.after({
  "duration": 907300,
  "status": "passed"
});
formatter.uri("DataTbTest.feature");
formatter.feature({
  "line": 1,
  "name": "addition of a search functionality to amazon.com",
  "description": "",
  "id": "addition-of-a-search-functionality-to-amazon.com",
  "keyword": "Feature"
});
formatter.before({
  "duration": 207800,
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
  "duration": 960500,
  "status": "passed"
});
formatter.match({
  "location": "DataTbTest.i_enter_the_userid_and_details(DataTable)"
});
formatter.result({
  "duration": 12050500,
  "status": "passed"
});
formatter.match({
  "location": "DataTbTest.i_submit()"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.after({
  "duration": 397900,
  "status": "passed"
});
formatter.uri("Optimize.feature");
formatter.feature({
  "line": 1,
  "name": "Product Search From Flipkart Website",
  "description": "",
  "id": "product-search-from-flipkart-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1279400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Search a Realme Device",
  "description": "",
  "id": "product-search-from-flipkart-website;search-a-realme-device",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@All"
    },
    {
      "line": 2,
      "name": "@Realme"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I visited Filpkart website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I select the search field Enter the keyword RealmeNote5",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "serachresult realmenote5 come",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select the Phone",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "add To cart The phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Make payment",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "realmenote5 Purchase Sucssfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Optimize.i_visited_Filpkart_website()"
});
formatter.result({
  "duration": 190400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RealmeNote5",
      "offset": 44
    }
  ],
  "location": "Optimize.i_select_the_search_field_Enter_the_keyword_RealmeNote(String)"
});
formatter.result({
  "duration": 1663700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "realmenote5",
      "offset": 13
    }
  ],
  "location": "Optimize.serachresult_realmenote_come(String)"
});
formatter.result({
  "duration": 171300,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.select_the_Phone()"
});
formatter.result({
  "duration": 356700,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.add_To_cart_The_phone()"
});
formatter.result({
  "duration": 92100,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.make_payment()"
});
formatter.result({
  "duration": 302800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "realmenote5",
      "offset": 0
    }
  ],
  "location": "Optimize.realmenote_Purchase_Sucssfully(String)"
});
formatter.result({
  "duration": 465900,
  "status": "passed"
});
formatter.after({
  "duration": 472200,
  "status": "passed"
});
formatter.before({
  "duration": 1981500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search a Mi Device",
  "description": "",
  "id": "product-search-from-flipkart-website;search-a-mi-device",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@All"
    },
    {
      "line": 11,
      "name": "@mi"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I visited Filpkart website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select the search field Enter the keyword MiNote5",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "serachresult Minote5 come",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select the Phone",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "add To cart The phone",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Make payment",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "MiNote5 Purchase Sucssfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Optimize.i_visited_Filpkart_website()"
});
formatter.result({
  "duration": 902400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MiNote5",
      "offset": 44
    }
  ],
  "location": "Optimize.i_select_the_search_field_Enter_the_keyword_RealmeNote(String)"
});
formatter.result({
  "duration": 350100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Minote5",
      "offset": 13
    }
  ],
  "location": "Optimize.serachresult_realmenote_come(String)"
});
formatter.result({
  "duration": 581900,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.select_the_Phone()"
});
formatter.result({
  "duration": 92600,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.add_To_cart_The_phone()"
});
formatter.result({
  "duration": 380000,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.make_payment()"
});
formatter.result({
  "duration": 72100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MiNote5",
      "offset": 0
    }
  ],
  "location": "Optimize.realmenote_Purchase_Sucssfully(String)"
});
formatter.result({
  "duration": 436900,
  "status": "passed"
});
formatter.after({
  "duration": 250000,
  "status": "passed"
});
formatter.before({
  "duration": 300900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search a Oopo Device",
  "description": "",
  "id": "product-search-from-flipkart-website;search-a-oopo-device",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@All"
    },
    {
      "line": 20,
      "name": "@oopo"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I visited Filpkart website",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I select the search field Enter the keyword OopoNote5",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "serachresult OopoNote5 come",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select the Phone",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "add To cart The phone",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Make payment",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "OopoNote5 Purchase Sucssfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Optimize.i_visited_Filpkart_website()"
});
formatter.result({
  "duration": 395600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OopoNote5",
      "offset": 44
    }
  ],
  "location": "Optimize.i_select_the_search_field_Enter_the_keyword_RealmeNote(String)"
});
formatter.result({
  "duration": 436100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OopoNote5",
      "offset": 13
    }
  ],
  "location": "Optimize.serachresult_realmenote_come(String)"
});
formatter.result({
  "duration": 197200,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.select_the_Phone()"
});
formatter.result({
  "duration": 1425400,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.add_To_cart_The_phone()"
});
formatter.result({
  "duration": 374800,
  "status": "passed"
});
formatter.match({
  "location": "Optimize.make_payment()"
});
formatter.result({
  "duration": 149900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OopoNote5",
      "offset": 0
    }
  ],
  "location": "Optimize.realmenote_Purchase_Sucssfully(String)"
});
formatter.result({
  "duration": 511200,
  "status": "passed"
});
formatter.after({
  "duration": 72200,
  "status": "passed"
});
formatter.uri("ValidLoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Validate The Login Test  with valid Credential and invalid credential",
  "description": "",
  "id": "validate-the-login-test--with-valid-credential-and-invalid-credential",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "user shound  login with valide credential",
  "description": "",
  "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    },
    {
      "line": 3,
      "name": "@Base"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Guru Banking Website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter username as \"\u003cUSERNAME\u003e\" and password as \"\u003cPASSWORD\u003e\" to respective field",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should Login base expected \"\u003cSTATUS\u003e\" status",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;",
  "rows": [
    {
      "cells": [
        "USERNAME",
        "PASSWORD",
        "STATUS"
      ],
      "line": 12,
      "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;;1"
    },
    {
      "cells": [
        "abcd",
        "abfgg",
        "Failed"
      ],
      "line": 13,
      "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;;2"
    },
    {
      "cells": [
        "ldsjnsdl",
        "jlndlsne",
        "failed"
      ],
      "line": 14,
      "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;;3"
    },
    {
      "cells": [
        "wewefwwe",
        "ewfewfee",
        "failed"
      ],
      "line": 15,
      "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 354800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user shound  login with valide credential",
  "description": "",
  "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Base"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Guru Banking Website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter username as \"abcd\" and password as \"abfgg\" to respective field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should Login base expected \"Failed\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidLoginTest.i_navigate_to_the_Guru_Banking_Website()"
});
formatter.result({
  "duration": 380000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 21
    },
    {
      "val": "abfgg",
      "offset": 44
    }
  ],
  "location": "ValidLoginTest.i_Enter_username_as_and_password_as_to_respective_field(String,String)"
});
formatter.result({
  "duration": 907000,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginTest.i_click_login_button()"
});
formatter.result({
  "duration": 197900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failed",
      "offset": 33
    }
  ],
  "location": "ValidLoginTest.user_should_Login_base_expected_status(String)"
});
formatter.result({
  "duration": 444200,
  "status": "passed"
});
formatter.after({
  "duration": 130900,
  "status": "passed"
});
formatter.before({
  "duration": 1311500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user shound  login with valide credential",
  "description": "",
  "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Base"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Guru Banking Website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter username as \"ldsjnsdl\" and password as \"jlndlsne\" to respective field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should Login base expected \"failed\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidLoginTest.i_navigate_to_the_Guru_Banking_Website()"
});
formatter.result({
  "duration": 1459500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ldsjnsdl",
      "offset": 21
    },
    {
      "val": "jlndlsne",
      "offset": 48
    }
  ],
  "location": "ValidLoginTest.i_Enter_username_as_and_password_as_to_respective_field(String,String)"
});
formatter.result({
  "duration": 531200,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginTest.i_click_login_button()"
});
formatter.result({
  "duration": 347700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failed",
      "offset": 33
    }
  ],
  "location": "ValidLoginTest.user_should_Login_base_expected_status(String)"
});
formatter.result({
  "duration": 210300,
  "status": "passed"
});
formatter.after({
  "duration": 64000,
  "status": "passed"
});
formatter.before({
  "duration": 354100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "user shound  login with valide credential",
  "description": "",
  "id": "validate-the-login-test--with-valid-credential-and-invalid-credential;user-shound--login-with-valide-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Base"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Guru Banking Website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter username as \"wewefwwe\" and password as \"ewfewfee\" to respective field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should Login base expected \"failed\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidLoginTest.i_navigate_to_the_Guru_Banking_Website()"
});
formatter.result({
  "duration": 89900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wewefwwe",
      "offset": 21
    },
    {
      "val": "ewfewfee",
      "offset": 48
    }
  ],
  "location": "ValidLoginTest.i_Enter_username_as_and_password_as_to_respective_field(String,String)"
});
formatter.result({
  "duration": 214100,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginTest.i_click_login_button()"
});
formatter.result({
  "duration": 132500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failed",
      "offset": 33
    }
  ],
  "location": "ValidLoginTest.user_should_Login_base_expected_status(String)"
});
formatter.result({
  "duration": 1029500,
  "status": "passed"
});
formatter.after({
  "duration": 347400,
  "status": "passed"
});
});