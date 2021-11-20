//
// psd2css.js
//
//   This is where all the javascript required by your design is written.
//
//   Originally generated at http://psd2cssonline.com 
//   April 22, 2011, 3:04 am with psd2css Online version 1.95

$(document).ready(function(){

  // This is required for the PNG fix to work.
  if (window.DD_belatedPNG)
    DD_belatedPNG.fix('.pngimg');

  // This is some javascript to stop IE from displaying the img alt attributes
  // when you mouse over imagess.  If you would like IE to display the alt attributes,
  // just comment out the following 4 lines.  Don't worry, if you leave this in 
  // place, your ALT attributes are still readable by the search engines.
  var tmpalt;
  $("img").hover( 
    function(){ tmpalt = $(this).attr( "alt" ); $(this).attr( "alt", "" ); },
    function(){ $(this).attr( "alt", tmpalt ); });

  // Some iPhone support
  var ua = navigator.userAgent;
  if (ua.indexOf("iPhone") > 0) {
    if ($.iPhone) {
      $.iPhone.hideURLbar(1);
      $.iPhone.orientchange(function(){ $.iPhone.hideURLbar(1); });
    }
    $('head').append( '<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0"/>' );
  }















});
