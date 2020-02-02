Feature: Validate The Login Test  with valid Credential and invalid credential

@All @Base
Scenario Outline: user shound  login with valide credential 

	Given I navigate to the Guru Banking Website
	Then I Enter username as "<USERNAME>" and password as "<PASSWORD>" to respective field
	And I click login button
	Then User should Login base expected "<STATUS>" status
	
	Examples:
	|USERNAME|PASSWORD|STATUS|
	|abcd    |abfgg   |Failed|
	|ldsjnsdl|jlndlsne|failed|
	|wewefwwe|ewfewfee|failed| 

