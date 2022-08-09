console.log("Hi");

window.fbAsyncInit = function() {
  FB.init({
    appId            : '587043892827878',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v14.0'
  });
};



FB.getLoginStatus(function(response) {
    console.log(response.strigify);
    statusChangeCallback(response);
});