package StepDefination;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTbTest {
	@Given("^I visit the guru bank website$")
	public void i_visit_the_guru_bank_website() throws Throwable {
	    System.out.println("when enter the guru 99 web");

	}

	@When("^I enter the userid and details$")
	public void i_enter_the_userid_and_details(DataTable arg1)  {
     Map map=arg1.asMap(String.class,String.class);
     System.out.println(map.get("fname"));
     System.out.println(map.get("lname"));
     System.out.println(map.get("age"));
     System.out.println(map.get("fab"));
	   
	}

	@Then("^I submit$")
	public void i_submit() throws Throwable {
	   
	}
}
