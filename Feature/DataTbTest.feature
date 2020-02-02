Feature: addition of a search functionality to amazon.com

 @DaTable
 Scenario: visit the guru bank	
	Given I visit the guru bank website
	When I enter the userid and details 
	 |fname|Pradeep|
	 |lname|behera |
	 |age  |twer   |
	 |fab  |Code   |
	And I submit
	