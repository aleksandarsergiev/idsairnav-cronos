@regression
Feature: Checkout Form Validation

  Scenario: Successful payment shows the Order Confirmed message and receipt details
    Given I navigate to the Checkout Page
    When I fill in the checkout form with the following details:
      | Cardholder name   | Visa Test User          |
      | Card number       | 4111 1111 1111 1111     |
      | Expiry            | 12/28                   |
      | CVV               | 123                     |
      | Street address    | 123 Main St             |
      | City              | Springfield             |
      | ZIP / Postal code | 62701                   |
      | Country           | United States           |
    And I click the Pay button
    Then the payment confirmation should show:
      | success message | Order Confirmed |
      | cardholder name | Visa Test User  |
      | amount          | $42.00          |
      | card ending     | 1111            |

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
