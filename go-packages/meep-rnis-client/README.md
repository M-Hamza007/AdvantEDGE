# Go API client for client

Radio Network Information Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC012 RNI API](https://www.etsi.org/deliver/etsi_gs/MEC/001_099/012/02.02.01_60/gs_MEC012v020201p.pdf) <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-rnis](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-rnis) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about radio conditions in the network <p>**Note**<br>AdvantEDGE supports a selected subset of RNI API endpoints (see below) and a subset of subscription types. <p>Supported subscriptions: <p> - CellChangeSubscription <p> - RabEstSubscription <p> - RabRelSubscription <p> - MeasRepUeSubscription <p> - NrMeasRepUeSubscription

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: 2.2.1
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.go.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```golang
import "./client"
```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/sandboxname/rni/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RniApi* | [**Layer2MeasInfoGET**](docs/RniApi.md#layer2measinfoget) | **Get** /queries/layer2_meas | Retrieve information on layer 2 measurements
*RniApi* | [**Mec011AppTerminationPOST**](docs/RniApi.md#mec011appterminationpost) | **Post** /notifications/mec011/appTermination | MEC011 Application Termination notification for self termination
*RniApi* | [**PlmnInfoGET**](docs/RniApi.md#plmninfoget) | **Get** /queries/plmn_info | Retrieve information on the underlying Mobile Network that the MEC application is associated to
*RniApi* | [**RabInfoGET**](docs/RniApi.md#rabinfoget) | **Get** /queries/rab_info | Retrieve information on Radio Access Bearers
*RniApi* | [**SubscriptionLinkListSubscriptionsGET**](docs/RniApi.md#subscriptionlinklistsubscriptionsget) | **Get** /subscriptions | Retrieve information on subscriptions for notifications
*RniApi* | [**SubscriptionsDELETE**](docs/RniApi.md#subscriptionsdelete) | **Delete** /subscriptions/{subscriptionId} | Cancel an existing subscription
*RniApi* | [**SubscriptionsGET**](docs/RniApi.md#subscriptionsget) | **Get** /subscriptions/{subscriptionId} | Retrieve information on current specific subscription
*RniApi* | [**SubscriptionsPOST**](docs/RniApi.md#subscriptionspost) | **Post** /subscriptions | Create a new subscription
*RniApi* | [**SubscriptionsPUT**](docs/RniApi.md#subscriptionsput) | **Put** /subscriptions/{subscriptionId} | Modify an existing subscription
*UnsupportedApi* | [**S1BearerInfoGET**](docs/UnsupportedApi.md#s1bearerinfoget) | **Get** /queries/s1_bearer_info | Retrieve S1-U bearer information related to specific UE(s)


## Documentation For Models

 - [AppTerminationNotification](docs/AppTerminationNotification.md)
 - [AppTerminationNotificationLinks](docs/AppTerminationNotificationLinks.md)
 - [AssociateId](docs/AssociateId.md)
 - [CaReconfNotification](docs/CaReconfNotification.md)
 - [CaReconfNotificationCarrierAggregationMeasInfo](docs/CaReconfNotificationCarrierAggregationMeasInfo.md)
 - [CaReconfNotificationLinks](docs/CaReconfNotificationLinks.md)
 - [CaReconfNotificationSecondaryCellAdd](docs/CaReconfNotificationSecondaryCellAdd.md)
 - [CaReconfSubscription](docs/CaReconfSubscription.md)
 - [CaReconfSubscriptionFilterCriteriaAssoc](docs/CaReconfSubscriptionFilterCriteriaAssoc.md)
 - [CaReconfSubscriptionLinks](docs/CaReconfSubscriptionLinks.md)
 - [CellChangeNotification](docs/CellChangeNotification.md)
 - [CellChangeNotificationTempUeId](docs/CellChangeNotificationTempUeId.md)
 - [CellChangeSubscription](docs/CellChangeSubscription.md)
 - [CellChangeSubscriptionFilterCriteriaAssocHo](docs/CellChangeSubscriptionFilterCriteriaAssocHo.md)
 - [Ecgi](docs/Ecgi.md)
 - [ExpiryNotification](docs/ExpiryNotification.md)
 - [ExpiryNotificationLinks](docs/ExpiryNotificationLinks.md)
 - [InlineNotification](docs/InlineNotification.md)
 - [InlineSubscription](docs/InlineSubscription.md)
 - [L2Meas](docs/L2Meas.md)
 - [L2MeasCellInfo](docs/L2MeasCellInfo.md)
 - [L2MeasCellUeInfo](docs/L2MeasCellUeInfo.md)
 - [LinkType](docs/LinkType.md)
 - [MeasQuantityResultsNr](docs/MeasQuantityResultsNr.md)
 - [MeasRepUeNotification](docs/MeasRepUeNotification.md)
 - [MeasRepUeNotificationCarrierAggregationMeasInfo](docs/MeasRepUeNotificationCarrierAggregationMeasInfo.md)
 - [MeasRepUeNotificationEutranNeighbourCellMeasInfo](docs/MeasRepUeNotificationEutranNeighbourCellMeasInfo.md)
 - [MeasRepUeNotificationNewRadioMeasInfo](docs/MeasRepUeNotificationNewRadioMeasInfo.md)
 - [MeasRepUeNotificationNewRadioMeasNeiInfo](docs/MeasRepUeNotificationNewRadioMeasNeiInfo.md)
 - [MeasRepUeNotificationNrBnCs](docs/MeasRepUeNotificationNrBnCs.md)
 - [MeasRepUeNotificationNrBnCsNrBnCellInfo](docs/MeasRepUeNotificationNrBnCsNrBnCellInfo.md)
 - [MeasRepUeNotificationNrNCellInfo](docs/MeasRepUeNotificationNrNCellInfo.md)
 - [MeasRepUeNotificationNrSCs](docs/MeasRepUeNotificationNrSCs.md)
 - [MeasRepUeNotificationNrSCsNrSCellInfo](docs/MeasRepUeNotificationNrSCsNrSCellInfo.md)
 - [MeasRepUeSubscription](docs/MeasRepUeSubscription.md)
 - [MeasRepUeSubscriptionFilterCriteriaAssocTri](docs/MeasRepUeSubscriptionFilterCriteriaAssocTri.md)
 - [MeasTaNotification](docs/MeasTaNotification.md)
 - [MeasTaSubscription](docs/MeasTaSubscription.md)
 - [NrMeasRepUeNotification](docs/NrMeasRepUeNotification.md)
 - [NrMeasRepUeNotificationEutraNeighCellMeasInfo](docs/NrMeasRepUeNotificationEutraNeighCellMeasInfo.md)
 - [NrMeasRepUeNotificationNCell](docs/NrMeasRepUeNotificationNCell.md)
 - [NrMeasRepUeNotificationNrNeighCellMeasInfo](docs/NrMeasRepUeNotificationNrNeighCellMeasInfo.md)
 - [NrMeasRepUeNotificationSCell](docs/NrMeasRepUeNotificationSCell.md)
 - [NrMeasRepUeNotificationServCellMeasInfo](docs/NrMeasRepUeNotificationServCellMeasInfo.md)
 - [NrMeasRepUeSubscription](docs/NrMeasRepUeSubscription.md)
 - [NrMeasRepUeSubscriptionFilterCriteriaNrMrs](docs/NrMeasRepUeSubscriptionFilterCriteriaNrMrs.md)
 - [Nrcgi](docs/Nrcgi.md)
 - [OneOfInlineNotification](docs/OneOfInlineNotification.md)
 - [OneOfInlineSubscription](docs/OneOfInlineSubscription.md)
 - [OperationActionType](docs/OperationActionType.md)
 - [Plmn](docs/Plmn.md)
 - [PlmnInfo](docs/PlmnInfo.md)
 - [ProblemDetails](docs/ProblemDetails.md)
 - [RabEstNotification](docs/RabEstNotification.md)
 - [RabEstNotificationErabQosParameters](docs/RabEstNotificationErabQosParameters.md)
 - [RabEstNotificationErabQosParametersQosInformation](docs/RabEstNotificationErabQosParametersQosInformation.md)
 - [RabEstNotificationTempUeId](docs/RabEstNotificationTempUeId.md)
 - [RabEstSubscription](docs/RabEstSubscription.md)
 - [RabEstSubscriptionFilterCriteriaQci](docs/RabEstSubscriptionFilterCriteriaQci.md)
 - [RabInfo](docs/RabInfo.md)
 - [RabInfoCellUserInfo](docs/RabInfoCellUserInfo.md)
 - [RabInfoErabInfo](docs/RabInfoErabInfo.md)
 - [RabInfoUeInfo](docs/RabInfoUeInfo.md)
 - [RabModNotification](docs/RabModNotification.md)
 - [RabModNotificationErabQosParameters](docs/RabModNotificationErabQosParameters.md)
 - [RabModNotificationErabQosParametersQosInformation](docs/RabModNotificationErabQosParametersQosInformation.md)
 - [RabModSubscription](docs/RabModSubscription.md)
 - [RabModSubscriptionFilterCriteriaQci](docs/RabModSubscriptionFilterCriteriaQci.md)
 - [RabRelNotification](docs/RabRelNotification.md)
 - [RabRelNotificationErabReleaseInfo](docs/RabRelNotificationErabReleaseInfo.md)
 - [RabRelSubscription](docs/RabRelSubscription.md)
 - [ResultsPerCsiRsIndex](docs/ResultsPerCsiRsIndex.md)
 - [ResultsPerCsiRsIndexList](docs/ResultsPerCsiRsIndexList.md)
 - [ResultsPerCsiRsIndexListResultsPerCsiRsIndex](docs/ResultsPerCsiRsIndexListResultsPerCsiRsIndex.md)
 - [ResultsPerSsbIndex](docs/ResultsPerSsbIndex.md)
 - [ResultsPerSsbIndexList](docs/ResultsPerSsbIndexList.md)
 - [ResultsPerSsbIndexListResultsPerSsbIndex](docs/ResultsPerSsbIndexListResultsPerSsbIndex.md)
 - [RsIndexResults](docs/RsIndexResults.md)
 - [S1BearerInfo](docs/S1BearerInfo.md)
 - [S1BearerInfoEnbInfo](docs/S1BearerInfoEnbInfo.md)
 - [S1BearerInfoS1BearerInfoDetailed](docs/S1BearerInfoS1BearerInfoDetailed.md)
 - [S1BearerInfoS1UeInfo](docs/S1BearerInfoS1UeInfo.md)
 - [S1BearerInfoSGwInfo](docs/S1BearerInfoSGwInfo.md)
 - [S1BearerNotification](docs/S1BearerNotification.md)
 - [S1BearerNotificationS1UeInfo](docs/S1BearerNotificationS1UeInfo.md)
 - [S1BearerSubscription](docs/S1BearerSubscription.md)
 - [S1BearerSubscriptionS1BearerSubscriptionCriteria](docs/S1BearerSubscriptionS1BearerSubscriptionCriteria.md)
 - [SubscriptionLinkList](docs/SubscriptionLinkList.md)
 - [SubscriptionLinkListLinks](docs/SubscriptionLinkListLinks.md)
 - [SubscriptionLinkListLinksSubscription](docs/SubscriptionLinkListLinksSubscription.md)
 - [TimeStamp](docs/TimeStamp.md)
 - [Trigger](docs/Trigger.md)
 - [TriggerNr](docs/TriggerNr.md)
 - [WebsockNotifConfig](docs/WebsockNotifConfig.md)


## Documentation For Authorization
 Endpoints do not require authorization.


## Author

AdvantEDGE@InterDigital.com

