Feature: Product Search From Flipkart Website
@All @Realme
Scenario: Search a Realme Device
 Given I visited Filpkart website 
 When I select the search field Enter the keyword RealmeNote5
 And serachresult realmenote5 come
 Then Select the Phone
 And add To cart The phone
 And Make payment
 Then realmenote5 Purchase Sucssfully 
 @All @mi
Scenario: Search a Mi Device
 Given I visited Filpkart website 
 When I select the search field Enter the keyword MiNote5
 And serachresult Minote5 come
 Then Select the Phone
 And add To cart The phone
 And Make payment
 Then MiNote5 Purchase Sucssfully 
 @All @oopo
Scenario: Search a Oopo Device
 Given I visited Filpkart website 
 When I select the search field Enter the keyword OopoNote5
 And serachresult OopoNote5 come
 Then Select the Phone
 And add To cart The phone
 And Make payment
 Then OopoNote5 Purchase Sucssfully 
 
 
 
