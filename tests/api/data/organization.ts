import { fplOfficePayload } from './fplOffice';

export const organizationPayload = {
    "name": fplOfficePayload.id,
    "fplof_id": fplOfficePayload.id,
    "emailNotificationRule": "DISABLED",
    "fplProposalConfig": {
        "id": "test:1",
        "name": "TEST",
        "initialState": "DRAFT",
        "scope": "USER",
        "active": true,
        "proposalPrefix": "TEST"
    }
};

export const organizationWithMissingEmailRulePayload = {
    "name": fplOfficePayload.id,
    "fplof_id": fplOfficePayload.id,
    "fplProposalConfig": {
        "id": "test:1",
        "name": "TEST",
        "initialState": "DRAFT",
        "scope": "USER",
        "active": true,
        "proposalPrefix": "TEST"
    }
};

export const organizationWithMissingFplOfficePayload = {
    "name": "Not Existing FPL Office",
    "fplof_id": "Not Existing FPL Office",
    "emailNotificationRule": "DISABLED",
    "fplProposalConfig": {
        "id": "test:1",
        "name": "TEST",
        "initialState": "DRAFT",
        "scope": "USER",
        "active": true,
        "proposalPrefix": "TEST"
    }
};
