package StepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ValidLoginTest {
	@Before
	public void beforAnn() {
		System.out.println("Before Hook");
	}
	@Given("^I navigate to the Guru Banking Website$")
	public void i_navigate_to_the_Guru_Banking_Website() {
		System.out.println("Enter the Given Statement");
	}

	
	@And("^I click login button$")
	public void i_click_login_button()  {
	    System.out.println("I click the Login Button");
	}
	
	@Then("^I Enter username as \"([^\"]*)\" and password as \"([^\"]*)\" to respective field$")
	public void i_Enter_username_as_and_password_as_to_respective_field(String arg1, String arg2)  {
	    System.out.println("valu Of USerid & password is::"+arg1+"  "+arg2);
	}

	@Then("^User should Login base expected \"([^\"]*)\" status$")
	public void user_should_Login_base_expected_status(String arg1)  {
	    
	    System.out.println("Value of result:"+arg1);
	}
	@After
	public void afteranno() {
		System.out.println("Hello this is after hook");
	}



}
