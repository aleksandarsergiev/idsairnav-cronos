import { fplOfficePayload } from './fplOffice';

export function userPayload(orgId: number) {
  return {
    "userType": "AdminRegistered",
    "login": "ApiAutomationUser",
    "name": "ApiAutomationUser",
    "email": "ApiAutomationUser@ApiAutomationUser.ApiAutomationUser",
    "password": "aftn",
    "password2": "aftn",
    "primaryOrg": {
      "id": orgId,
      "name": fplOfficePayload.name,
      "fplof_id": fplOfficePayload.id,
      "fplOfficeType": fplOfficePayload.type,
      "fplProposalConfig": {
        "id": "test:1",
        "name": "TEST",
        "initialState": "DRAFT",
        "scope": "USER",
        "active": true,
        "proposalPrefix": "TEST"
      },
      "filterAtnSection": false,
      "useFplOfficeAtnAddresses": false,
      "useNotamOfficeAtnAddresses": false,
      "emailNotificationRule": "DISABLED",
      "protected": false
    }
  };
}

export const userWithMissingChildFplOfficePayload = {
    "userType": "AdminRegistered",
    "login": "ApiAutomationUser",
    "name": "ApiAutomationUser",
    "email": "ApiAutomationUser@ApiAutomationUser.ApiAutomationUser",
    "password": "aftn",
    "password2": "aftn",
    "primaryOrg": {
        "id": 11,
        "name": "Non Existing Child FPL Office",
        "fplof_id": "Non Existing Child FPL Office",
        "fplOfficeType": "ATSU",
        "fplProposalConfig": {
            "id": "test:1",
            "name": "TEST",
            "initialState": "DRAFT",
            "scope": "USER",
            "active": true,
            "proposalPrefix": "TEST"
        },
        "filterAtnSection": false,
        "useFplOfficeAtnAddresses": false,
        "useNotamOfficeAtnAddresses": false,
        "emailNotificationRule": "DISABLED",
        "protected": false
    }
};
