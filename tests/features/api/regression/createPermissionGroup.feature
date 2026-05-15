@api
Feature: Permission Group API

  @createsPermissionGroup
  Scenario: Create permission group successfully
    When I create a permission group
    Then the permission group should be created successfully
    And the permission group response should contain:
      | field                      | value                            |
      | localizedStatusDescription | Operation completed successfully |
