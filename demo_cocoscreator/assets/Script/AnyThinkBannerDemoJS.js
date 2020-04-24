require("./AnyThinkAds/ATBannerJSSDK")

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    placementID: function() {
        if (cc.sys.os === cc.sys.OS_IOS) {           
            return "b5bacaccb61c29";
        } else if (cc.sys.os === cc.sys.OS_ANDROID) {
            return "b5baca4f74c3d8";
        }
    },

    // use this for initialization
    onLoad: function () {
       ATBannerJSSDK.setAdListener(this);
    },

    // called every frame
    update: function (dt) {

    },

    back: function () {
        cc.director.loadScene("AnyThinkDemoScene");
       
    },

    loadAd : function () {
        ATJSSDK.printLog("AnyThinkBannerDemo::loadAd(" + this.placementID() + ")");
        ATBannerJSSDK.loadBanner(this.placementID(), ATBannerJSSDK.createLoadAdSize(cc.view.getFrameSize().width, 150));
    },

    showAd : function () {
        // ATBannerJSSDK.showAdInRectangle(this.placementID(), ATBannerJSSDK.createShowAdRect(0, 150, cc.view.getFrameSize().width, 150));
         ATBannerJSSDK.showAdInPosistion(this.placementID(), ATBannerJSSDK.kATBannerAdShowingPisitionBottom);
    },

    removeAd : function () {
        ATBannerJSSDK.rewoveAd(this.placementID());
    },

    reShowAd : function () {
        ATBannerJSSDK.reShowAd(this.placementID());
    },

    hideAd : function() {
        ATBannerJSSDK.hideAd(this.placementID());
    },

    checkReady : function () {
        var hasReady = ATBannerJSSDK.hasAdReady(this.placementID());
        ATJSSDK.printLog("AnyThinkBannerDemo::checkReady() " + (hasReady ? "Ready" : "NO"));
    },

    onBannerAdLoaded : function (placementId) {
         ATJSSDK.printLog("AnyThinkBannerDemo::onBannerAdLoaded(" + placementId + ")");
    },

    onBannerAdLoadFail : function(placementId, errorInfo) {
        ATJSSDK.printLog("AnyThinkBannerDemo::onBannerAdLoadFail(" + placementId + ", " + errorInfo + ")");   
    },

    onBannerAdShow : function(placementId, callbackInfo) {
        ATJSSDK.printLog("AnyThinkBannerDemo::onBannerAdShow(" + placementId  + ", " + callbackInfo + ")");
    },

    onBannerAdClick : function(placementId, callbackInfo) {
        ATJSSDK.printLog("AnyThinkBannerDemo::onBannerAdClick(" + placementId  + ", " + callbackInfo + ")");
    },

    onBannerAdAutoRefresh : function(placementId, callbackInfo) {
       ATJSSDK.printLog("AnyThinkBannerDemo::onBannerAdAutoRefresh(" + placementId  + ", " + callbackInfo + ")");
    },

    onBannerAdAutoRefreshFail : function(placementId, errorInfo) {
        ATJSSDK.printLog("AnyThinkBannerDemo::onBannerAdAutoRefreshFail(" + placementId + ", " + errorInfo + ")");   
    },

    onBannerAdCloseButtonTapped : function(placementId, callbackInfo) {
        ATJSSDK.printLog("AnyThinkBannerDemo::onBannerAdCloseButtonTapped(" + placementId  + ", " + callbackInfo + ")");
    }    

   
});
