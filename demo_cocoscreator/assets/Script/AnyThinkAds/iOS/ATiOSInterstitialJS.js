var ATiOSJS = require("ATiOSJS");
const OC_WRAPPER_CLASS = "ATInterstitialAdWrapper";
var ATiOSInterstitialJS = ATiOSInterstitialJS || {
    loadInterstitial : function (placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadInterstitialWithPlacementID:extra:", placementId, null);
    },

    setAdListener : function (listener) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
    },

    hasAdReady : function (placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "interstitialReadyForPlacementID:", placementId);
    },

    setUserData : function (placementId, userId, userData) {
         cc.log("Android-setUserData");
    },

    showAd : function(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, null);
        
    },

    showAdInScenario : function(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId  + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, null);
    } 
  
};

module.exports = ATiOSInterstitialJS;