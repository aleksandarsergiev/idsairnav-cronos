export const fplOfficePayload = {
    "originatorAddress": {
        "networkAddressType": "FreeNetworkAddress",
        "aftnAddress": "SSSSSSSS"
    },
    "originatorQueryAddress": {
        "networkAddressType": "FreeNetworkAddress",
        "aftnAddress": "SSSSSSSS"
    },
    "flightRules": "A",
    "flightTypes": [
        "S",
        "N",
        "G",
        "M",
        "X",
        "O"
    ],
    "defaultAdmpView": "AWOS",
    "id": "API AUTOMATION",
    "name": "API AUTOMATION",
    "type": "ACC",
    "triggerEmailOnReception": false,
    "isForAdmp": false,
    "fplConfig": {
        "id": "permissive",
        "name": "Permissive",
        "jsonConfig": {
            "validateTypeDesignatorInDatabase": false,
            "validateWakeTurbulenceAgainstTypeDesignator": false,
            "wakeTurbulenceAgainstTypeDesignatorRule": "WARNING",
            "validateRegistrationNumberInDatabase": false,
            "validateIcaoTypeDesignatorAgainstRegKey": false,
            "icaoTypeDesignatorAgainstRegKeyRule": "WARNING",
            "validateWakeTurbulenceAgainstRegKey": false,
            "wakeTurbulenceAgainstRegKeyRule": "WARNING",
            "validateItem10EquipmentAgainstRegKey": false,
            "item10EquipmentAgainstRegKeyRule": "WARNING",
            "validateItem18AgainstRegKey": false,
            "item18AgainstRegKeyeRule": "WARNING",
            "validateRVSMAgainstCruisingAltitude": false,
            "rvsmAgainstCruisingAltitudeRule": "WARNING",
            "validateTransitionAltitudeAndLevel": false,
            "transitionAltitudeAndLevelRule": "WARNING",
            "validateItem18OPR": false,
            "item18OPRRule": "WARNING",
            "fpl2012Config": {
                "validateDayOfFlight": false,
                "dayOfFlightRule": "WARNING",
                "validateItem18AndItem10": false
            },
            "fplItem15ConfigForIFR": {
                "validateItem15Route": false,
                "validateItem15RouteAgainstSDOData": false,
                "item15RouteAgainstSDODataRule": "WARNING",
                "validateRouteLevelVersusPublishedSegmentlimits": false,
                "routeLevelVersusPublishedSegmentlimitsRule": "WARNING",
                "validateRouteDirectionVersusPublishedSegmentDirection": false,
                "validateRouteLevelVersusPublishedSegmentLevelRules": false,
                "routeLevelVersusPublishedSegmentLevelRule": "WARNING",
                "cityNameTreatment": "DONT_CARE",
                "validateTrafficFlowRestrictions": false,
                "trafficFlowRestrictionsRule": "WARNING",
                "validateNatHlaRestrictions": {
                    "validateMnpsApproval": "ERROR",
                    "validateSrneOnlyAircraft": "ERROR",
                    "validateRandomRouteSegments": "ERROR"
                },
                "validateNatDlmRestrictions": "ERROR",
                "validateDirectSegmentRestrictions": "ERROR",
                "validateCrossBoundaryRestrictions": "ERROR",
                "validateAdsbMandatoryAreas": false,
                "adsbMandatoryAreasRule": "WARNING"
            },
            "fplItem15ConfigForVFR": {
                "validateItem15Route": false,
                "validateItem15RouteAgainstSDOData": false,
                "item15RouteAgainstSDODataRule": "WARNING",
                "validateRouteLevelVersusPublishedSegmentlimits": false,
                "routeLevelVersusPublishedSegmentlimitsRule": "WARNING",
                "validateRouteDirectionVersusPublishedSegmentDirection": false,
                "validateRouteLevelVersusPublishedSegmentLevelRules": false,
                "routeLevelVersusPublishedSegmentLevelRule": "WARNING",
                "cityNameTreatment": "DONT_CARE",
                "validateTrafficFlowRestrictions": false,
                "trafficFlowRestrictionsRule": "WARNING",
                "validateNatHlaRestrictions": {
                    "validateMnpsApproval": "ERROR",
                    "validateSrneOnlyAircraft": "ERROR",
                    "validateRandomRouteSegments": "ERROR"
                },
                "validateNatDlmRestrictions": "ERROR",
                "validateDirectSegmentRestrictions": "ERROR",
                "validateCrossBoundaryRestrictions": "ERROR",
                "validateAdsbMandatoryAreas": false,
                "adsbMandatoryAreasRule": "WARNING"
            },
            "fplFlightRuleConfigForIFR": {
                "validateRegRequired": false,
                "regRequiredRule": "WARNING",
                "validateRvsmVersusItem18Reg": false,
                "rvsmVersusItem18RegRule": "WARNING",
                "validateRegSuspension": false,
                "regSuspensionRule": "WARNING"
            },
            "fplFlightRuleConfigForVFR": {
                "validateRegRequired": false,
                "regRequiredRule": "WARNING",
                "validateRvsmVersusItem18Reg": false,
                "rvsmVersusItem18RegRule": "WARNING",
                "validateRegSuspension": false,
                "regSuspensionRule": "WARNING"
            },
            "requiredSearchRescue": false,
            "requiredSearchRescueRule": "WARNING",
            "validateAerodromeWorkingHours": false,
            "validateAgainstNotams": false,
            "validateFirConsistency": false,
            "firConsistencyRule": "WARNING",
            "ssrModeAndCodeAllowed": false,
            "ssrModeAndCodeAllowedRule": "WARNING",
            "mandatoryCoordinatesOrBearingOnZZZZLocationItem18": false
        },
        "protected": false
    },
    "trafficListBufferBeforeInHours": 1,
    "trafficListBufferAfterInHours": 1
};

export const fplOfficeMissingEmailPayload = {
    "originatorAddress": {
        "networkAddressType": "FreeNetworkAddress",
        "atnAccount": null,
        "aftnAddress": "SSSSSSSS"
    },
    "originatorQueryAddress": {
        "networkAddressType": "FreeNetworkAddress",
        "atnAccount": null,
        "aftnAddress": "SSSSSSSS"
    },
    "flightRules": "A",
    "flightTypes": [
        "S",
        "N",
        "G",
        "M",
        "X",
        "O"
    ],
    "defaultAdmpView": "AWOS",
    "triggerEmailOnReception": true,
    "local": false,
    "id": "KURECBACE",
    "name": "DVAKURA",
    "type": "ACC",
    "isForAdmp": false,
    "fplConfig": {
        "id": "permissive",
        "name": "Permissive",
        "jsonConfig": {
            "validateTypeDesignatorInDatabase": false,
            "validateWakeTurbulenceAgainstTypeDesignator": false,
            "wakeTurbulenceAgainstTypeDesignatorRule": "WARNING",
            "validateRegistrationNumberInDatabase": false,
            "validateIcaoTypeDesignatorAgainstRegKey": false,
            "icaoTypeDesignatorAgainstRegKeyRule": "WARNING",
            "validateWakeTurbulenceAgainstRegKey": false,
            "wakeTurbulenceAgainstRegKeyRule": "WARNING",
            "validateItem10EquipmentAgainstRegKey": false,
            "item10EquipmentAgainstRegKeyRule": "WARNING",
            "validateItem18AgainstRegKey": false,
            "item18AgainstRegKeyeRule": "WARNING",
            "validateRVSMAgainstCruisingAltitude": false,
            "rvsmAgainstCruisingAltitudeRule": "WARNING",
            "validateTransitionAltitudeAndLevel": false,
            "transitionAltitudeAndLevelRule": "WARNING",
            "validateItem18OPR": false,
            "item18OPRRule": "WARNING",
            "fpl2012Config": {
                "validateDayOfFlight": false,
                "dayOfFlightRule": "WARNING",
                "validateItem18AndItem10": false
            },
            "fplItem15ConfigForIFR": {
                "validateItem15Route": false,
                "validateItem15RouteAgainstSDOData": false,
                "item15RouteAgainstSDODataRule": "WARNING",
                "validateRouteLevelVersusPublishedSegmentlimits": false,
                "routeLevelVersusPublishedSegmentlimitsRule": "WARNING",
                "validateRouteDirectionVersusPublishedSegmentDirection": false,
                "validateRouteLevelVersusPublishedSegmentLevelRules": false,
                "routeLevelVersusPublishedSegmentLevelRule": "WARNING",
                "cityNameTreatment": "DONT_CARE",
                "validateTrafficFlowRestrictions": false,
                "trafficFlowRestrictionsRule": "WARNING",
                "validateNatHlaRestrictions": {
                    "validateMnpsApproval": "ERROR",
                    "validateSrneOnlyAircraft": "ERROR",
                    "validateRandomRouteSegments": "ERROR"
                },
                "validateNatDlmRestrictions": "ERROR",
                "validateDirectSegmentRestrictions": "ERROR",
                "validateCrossBoundaryRestrictions": "ERROR",
                "validateAdsbMandatoryAreas": false,
                "adsbMandatoryAreasRule": "WARNING"
            },
            "fplItem15ConfigForVFR": {
                "validateItem15Route": false,
                "validateItem15RouteAgainstSDOData": false,
                "item15RouteAgainstSDODataRule": "WARNING",
                "validateRouteLevelVersusPublishedSegmentlimits": false,
                "routeLevelVersusPublishedSegmentlimitsRule": "WARNING",
                "validateRouteDirectionVersusPublishedSegmentDirection": false,
                "validateRouteLevelVersusPublishedSegmentLevelRules": false,
                "routeLevelVersusPublishedSegmentLevelRule": "WARNING",
                "cityNameTreatment": "DONT_CARE",
                "validateTrafficFlowRestrictions": false,
                "trafficFlowRestrictionsRule": "WARNING",
                "validateNatHlaRestrictions": {
                    "validateMnpsApproval": "ERROR",
                    "validateSrneOnlyAircraft": "ERROR",
                    "validateRandomRouteSegments": "ERROR"
                },
                "validateNatDlmRestrictions": "ERROR",
                "validateDirectSegmentRestrictions": "ERROR",
                "validateCrossBoundaryRestrictions": "ERROR",
                "validateAdsbMandatoryAreas": false,
                "adsbMandatoryAreasRule": "WARNING"
            },
            "fplFlightRuleConfigForIFR": {
                "validateRegRequired": false,
                "regRequiredRule": "WARNING",
                "validateRvsmVersusItem18Reg": false,
                "rvsmVersusItem18RegRule": "WARNING",
                "validateRegSuspension": false,
                "regSuspensionRule": "WARNING"
            },
            "fplFlightRuleConfigForVFR": {
                "validateRegRequired": false,
                "regRequiredRule": "WARNING",
                "validateRvsmVersusItem18Reg": false,
                "rvsmVersusItem18RegRule": "WARNING",
                "validateRegSuspension": false,
                "regSuspensionRule": "WARNING"
            },
            "requiredSearchRescue": false,
            "requiredSearchRescueRule": "WARNING",
            "validateAerodromeWorkingHours": false,
            "validateAgainstNotams": false,
            "validateFirConsistency": false,
            "firConsistencyRule": "WARNING",
            "ssrModeAndCodeAllowed": false,
            "ssrModeAndCodeAllowedRule": "WARNING",
            "mandatoryCoordinatesOrBearingOnZZZZLocationItem18": false
        },
        "protected": false
    },
    "trafficListBufferBeforeInHours": 1,
    "trafficListBufferAfterInHours": 1
};

export const childFplOfficeWithMissingParentFplOfficePayload = {
    "originatorAddress": {
        "networkAddressType": "FreeNetworkAddress",
        "aftnAddress": "SSSSSSSS"
    },
    "originatorQueryAddress": {
        "networkAddressType": "FreeNetworkAddress",
        "aftnAddress": "SSSSSSSS"
    },
    "flightRules": "A",
    "flightTypes": [
        "S",
        "N",
        "G",
        "M",
        "X",
        "O"
    ],
    "defaultAdmpView": "LOCAL_REPORT",
    "id": "AUTOMATION ISLAND A",
    "name": "AUTOMATION ISLAND A",
    "isForAdmp": true,
    "owned_by": "Not Existing FPL Office",
    "type": "ATSU",
    "triggerEmailOnReception": false,
    "fplConfig": {
        "id": "permissive",
        "name": "Permissive",
        "jsonConfig": {
            "validateTypeDesignatorInDatabase": false,
            "validateWakeTurbulenceAgainstTypeDesignator": false,
            "wakeTurbulenceAgainstTypeDesignatorRule": "WARNING",
            "validateRegistrationNumberInDatabase": false,
            "validateIcaoTypeDesignatorAgainstRegKey": false,
            "icaoTypeDesignatorAgainstRegKeyRule": "WARNING",
            "validateWakeTurbulenceAgainstRegKey": false,
            "wakeTurbulenceAgainstRegKeyRule": "WARNING",
            "validateItem10EquipmentAgainstRegKey": false,
            "item10EquipmentAgainstRegKeyRule": "WARNING",
            "validateItem18AgainstRegKey": false,
            "item18AgainstRegKeyeRule": "WARNING",
            "validateRVSMAgainstCruisingAltitude": false,
            "rvsmAgainstCruisingAltitudeRule": "WARNING",
            "validateTransitionAltitudeAndLevel": false,
            "transitionAltitudeAndLevelRule": "WARNING",
            "validateItem18OPR": false,
            "item18OPRRule": "WARNING",
            "fpl2012Config": {
                "validateDayOfFlight": false,
                "dayOfFlightRule": "WARNING",
                "validateItem18AndItem10": false
            },
            "fplItem15ConfigForIFR": {
                "validateItem15Route": false,
                "validateItem15RouteAgainstSDOData": false,
                "item15RouteAgainstSDODataRule": "WARNING",
                "validateRouteLevelVersusPublishedSegmentlimits": false,
                "routeLevelVersusPublishedSegmentlimitsRule": "WARNING",
                "validateRouteDirectionVersusPublishedSegmentDirection": false,
                "validateRouteLevelVersusPublishedSegmentLevelRules": false,
                "routeLevelVersusPublishedSegmentLevelRule": "WARNING",
                "cityNameTreatment": "DONT_CARE",
                "validateTrafficFlowRestrictions": false,
                "trafficFlowRestrictionsRule": "WARNING",
                "validateNatHlaRestrictions": {
                    "validateMnpsApproval": "ERROR",
                    "validateSrneOnlyAircraft": "ERROR",
                    "validateRandomRouteSegments": "ERROR"
                },
                "validateNatDlmRestrictions": "ERROR",
                "validateDirectSegmentRestrictions": "ERROR",
                "validateCrossBoundaryRestrictions": "ERROR",
                "validateAdsbMandatoryAreas": false,
                "adsbMandatoryAreasRule": "WARNING"
            },
            "fplItem15ConfigForVFR": {
                "validateItem15Route": false,
                "validateItem15RouteAgainstSDOData": false,
                "item15RouteAgainstSDODataRule": "WARNING",
                "validateRouteLevelVersusPublishedSegmentlimits": false,
                "routeLevelVersusPublishedSegmentlimitsRule": "WARNING",
                "validateRouteDirectionVersusPublishedSegmentDirection": false,
                "validateRouteLevelVersusPublishedSegmentLevelRules": false,
                "routeLevelVersusPublishedSegmentLevelRule": "WARNING",
                "cityNameTreatment": "DONT_CARE",
                "validateTrafficFlowRestrictions": false,
                "trafficFlowRestrictionsRule": "WARNING",
                "validateNatHlaRestrictions": {
                    "validateMnpsApproval": "ERROR",
                    "validateSrneOnlyAircraft": "ERROR",
                    "validateRandomRouteSegments": "ERROR"
                },
                "validateNatDlmRestrictions": "ERROR",
                "validateDirectSegmentRestrictions": "ERROR",
                "validateCrossBoundaryRestrictions": "ERROR",
                "validateAdsbMandatoryAreas": false,
                "adsbMandatoryAreasRule": "WARNING"
            },
            "fplFlightRuleConfigForIFR": {
                "validateRegRequired": false,
                "regRequiredRule": "WARNING",
                "validateRvsmVersusItem18Reg": false,
                "rvsmVersusItem18RegRule": "WARNING",
                "validateRegSuspension": false,
                "regSuspensionRule": "WARNING"
            },
            "fplFlightRuleConfigForVFR": {
                "validateRegRequired": false,
                "regRequiredRule": "WARNING",
                "validateRvsmVersusItem18Reg": false,
                "rvsmVersusItem18RegRule": "WARNING",
                "validateRegSuspension": false,
                "regSuspensionRule": "WARNING"
            },
            "requiredSearchRescue": false,
            "requiredSearchRescueRule": "WARNING",
            "validateAerodromeWorkingHours": false,
            "validateAgainstNotams": false,
            "validateFirConsistency": false,
            "firConsistencyRule": "WARNING",
            "ssrModeAndCodeAllowed": false,
            "ssrModeAndCodeAllowedRule": "WARNING",
            "mandatoryCoordinatesOrBearingOnZZZZLocationItem18": false
        },
        "protected": false
    },
    "trafficListBufferBeforeInHours": 1,
    "trafficListBufferAfterInHours": 1
};
