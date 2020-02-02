package StepDefination;
//hello
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Basic {

	@Given("^I visit the application as a guest user$")
	public void i_visit_the_application_as_a_guest_user() {
		System.out.println("I visit the application as guest user");
	   
	}

	@When("^I enter product into the search field$")
	public void i_enter_product_into_the_search_field() {
		System.out.println("I enter product Into Search Field");
	    
	}

	@And("^I click the Enter$")
	public void i_click_the_Enter() {
	   System.out.println("I click the Enter ");
	}

	@Then("^i should see the search product$")
	public void i_should_see_the_search_product()  {
	    System.out.println("I should See the Search Product");
	}

	@And("^validate the search product display$")
	public void validate_the_search_product_display()  {
	    System.out.println("Validate the Search Product Display");
	}


}
