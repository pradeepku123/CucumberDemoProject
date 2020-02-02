Feature: addition of a search functionality to amazon.com

	@All
 Scenario: Search the Product Using Product Name
	Given I visit the application as a guest user
	When I enter product into the search field 
	And I click the Enter 
	Then i should see the search product
	And validate the search product display