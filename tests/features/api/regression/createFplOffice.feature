@api
Feature: FPL Office API

  @createsFplOffice
  Scenario: Create FPL office successfully
    When I create an FPL office
    Then the FPL office should be created successfully

  @createsFplOffice
  Scenario: Cannot create FPL office with duplicate id
    Given an FPL office exists
    When I create the same FPL office
    Then the FPL office creation should fail because the id already exists
    And the FPL office response should contain:
      | field                      | value                                               |
      | localizedStatusDescription | Flight Plan Office Id API AUTOMATION already exists |

  Scenario: Cannot create FPL office without email when email distribution is enabled
    When I create an FPL office with email distribution but no email
    Then the FPL office creation should fail because email is required
    And the FPL office response should contain:
      | field                      | value                                                                      |
      | localizedStatusDescription | If distribution via email is active then an email address must be provided |
