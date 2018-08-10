const doAPITest = {
  'ApplicationFramework': {
    'getVersion': window.applicationFramework.getVersion(),
    'getResourceVersion': window.applicationFramework.getResourceVersion(),
    'getWebLauncherVersion': window.applicationFramework.getWebLauncherVersion(),
    'getConnectivityActivationStatus': window.applicationFramework.getConnectivityActivationStatus()
  },
  'Util': {
    'getOSVersion': window.applicationFramework.util.getOSVersion(),
    'getDeviceModel': window.applicationFramework.util.getDeviceModel(),
    'getAmbientColor': window.applicationFramework.util.getAmbientColor(),
    'getLanguage': window.applicationFramework.util.getLanguage(),
    'getLoggingLevel': window.applicationFramework.util.getLoggingLevel(),
    'getBaseUrl': window.applicationFramework.util.getBaseUrl()
  },
  'Application': {
    'visible': window.applicationFramework.applicationManager.getOwnerApplication(window.document).visible,
    'type': window.applicationFramework.applicationManager.getOwnerApplication(window.document).type,
    'isPopupActive': window.applicationFramework.applicationManager.getOwnerApplication(window.document).isPopupActive(),
    'getStatusBarTitle': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getStatusBarTitle(),
    'getCommonLibraryPath': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getCommonLibraryPath()
  },
  'WidgetDescriptor': {
    'id': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().id,
    'version': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().version,
    'nameList': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().nameList,
    'shortNameList': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().shortNameList,
    'authorName': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().authorName,
    'authorEmail': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().authorEmail,
    'authorHref': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().authorHref,
    'license': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().license,
    'licenseHref': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().licenseHref,
    'iconSrcPath': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().iconSrcPath,
    'description': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().description,
    'localURI': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().localURI,
    'group': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().group,
    'featureList': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().featureList,
    'drivingRestriction': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().drivingRestriction,
    'killable': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().killable,
    'autostart': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().autostart,
    'running': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().running,
    'reserved': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().reserved,
    'service': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().service,
    'activationStatus': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().activationStatus,
    'iconWidth': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().iconWidth,
    'iconHeight': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().iconHeight,
    'widgetWidth': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().widgetWidth,
    'widgetHeight': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().widgetHeight,
    'activationDate': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().activationDate,
    'expirationDate': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().expirationDate,
    'subscriptionStatus': window.applicationFramework.applicationManager.getOwnerApplication(window.document).getDescriptor().subscriptionStatus
  }
}
export default doAPITest
