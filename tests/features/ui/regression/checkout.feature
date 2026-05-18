@regression
Feature: Checkout Form Validation

  Scenario: Submitting the Checkout form with all fields empty shows validation errors on all required fields
    Given I navigate to the Checkout Page
    When I click the Pay button
    Then I should see the following field errors:
      | Cardholder name is required.                       |
      | Enter a valid card number (13–19 digits).          |
      | Enter a valid, non-expired expiry (MM/YY).         |
      | Enter a valid CVV (3–4 digits).                    |
      | Street address is required.                        |
      | City is required.                                  |
      | ZIP / postal code is required.                     |
      | Country is required.                               |
