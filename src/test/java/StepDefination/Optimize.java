package StepDefination;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Optimize {
	@Given("^I visited Filpkart website$")
	public void i_visited_Filpkart_website()  {
	    
	    System.out.println("I visited Flipkart Website");
	}
	@When("^I select the search field Enter the keyword ([^\'].*)$")
	public void i_select_the_search_field_Enter_the_keyword_RealmeNote(String args)  {
	    System.out.println("I Selected The product "+args);
	}
	@And("^serachresult ([^\\'].*) come$")
	public void serachresult_realmenote_come(String args)  {
	    System.out.println("serch result "+args);
	}
	@Then("^Select the Phone$")
	public void select_the_Phone()  {
	    System.out.println("select Phones");
	}
	@And("^add To cart The phone$")
	public void add_To_cart_The_phone() {
	  System.out.println("add to cart the Phone");  
	}
	@Then("^Make payment$")
	public void make_payment()  {
		System.out.println("And Make Payment");
	    
	}
	@Then("^([^\\'].*) Purchase Sucssfully$")
	public void realmenote_Purchase_Sucssfully(String args)  {
	    System.out.println(args+"Purchase sucessfullyargs");
	}
	
}

