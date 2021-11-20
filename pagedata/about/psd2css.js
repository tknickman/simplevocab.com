//
// psd2css.js
//
//   This is where all the javascript required by your design is written.
//
//   Originally generated at http://psd2cssonline.com 
//   April 27, 2011, 2:15 am with psd2css Online version 1.95

var timerId;
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

  // This is code to handle all of the _linkover events.  It works by
  // creating a special Wrap class, adding it to the link and linkover
  // divs of each link and linkover pair, and assigning a hover event to
  // that.
  $("#Layer-14").addClass("Wrap-7-14").hide();
  $("#Layer-7").addClass("Wrap-7-14");
  $(".Wrap-7-14").hover(
    function(){ $("#Layer-14").show(); $("#Layer-7").hide(); },
    function(){ $("#Layer-7").show(); $("#Layer-14").hide(); });
  $("#Layer-15").addClass("Wrap-8-15").hide();
  $("#Layer-8").addClass("Wrap-8-15");
  $(".Wrap-8-15").hover(
    function(){ $("#Layer-15").show(); $("#Layer-8").hide(); },
    function(){ $("#Layer-8").show(); $("#Layer-15").hide(); });
  $("#Layer-16").addClass("Wrap-9-16").hide();
  $("#Layer-9").addClass("Wrap-9-16");
  $(".Wrap-9-16").hover(
    function(){ $("#Layer-16").show(); $("#Layer-9").hide(); },
    function(){ $("#Layer-9").show(); $("#Layer-16").hide(); });
  $("#Layer-17").addClass("Wrap-10-17").hide();
  $("#Layer-10").addClass("Wrap-10-17");
  $(".Wrap-10-17").hover(
    function(){ $("#Layer-17").show(); $("#Layer-10").hide(); },
    function(){ $("#Layer-10").show(); $("#Layer-17").hide(); });
  $("#Layer-18").addClass("Wrap-11-18").hide();
  $("#Layer-11").addClass("Wrap-11-18");
  $(".Wrap-11-18").hover(
    function(){ $("#Layer-18").show(); $("#Layer-11").hide(); },
    function(){ $("#Layer-11").show(); $("#Layer-18").hide(); });
  $("#Layer-19").addClass("Wrap-12-19").hide();
  $("#Layer-12").addClass("Wrap-12-19");
  $(".Wrap-12-19").hover(
    function(){ $("#Layer-19").show(); $("#Layer-12").hide(); },
    function(){ $("#Layer-12").show(); $("#Layer-19").hide(); });
  $("#Layer-20").addClass("Wrap-13-20").hide();
  $("#Layer-13").addClass("Wrap-13-20");
  $(".Wrap-13-20").hover(
    function(){ $("#Layer-20").show(); $("#Layer-13").hide(); },
    function(){ $("#Layer-13").show(); $("#Layer-20").hide(); });
  $("#Layer-26").addClass("Wrap-21-26").hide();
  $("#Layer-21").addClass("Wrap-21-26");
  $(".Wrap-21-26").hover(
    function(){ $("#Layer-26").show(); $("#Layer-21").hide(); },
    function(){ $("#Layer-21").show(); $("#Layer-26").hide(); });
  $("#Layer-27").addClass("Wrap-22-27").hide();
  $("#Layer-22").addClass("Wrap-22-27");
  $(".Wrap-22-27").hover(
    function(){ $("#Layer-27").show(); $("#Layer-22").hide(); },
    function(){ $("#Layer-22").show(); $("#Layer-27").hide(); });
  $("#Layer-28").addClass("Wrap-23-28").hide();
  $("#Layer-23").addClass("Wrap-23-28");
  $(".Wrap-23-28").hover(
    function(){ $("#Layer-28").show(); $("#Layer-23").hide(); },
    function(){ $("#Layer-23").show(); $("#Layer-28").hide(); });
  $("#Layer-29").addClass("Wrap-24-29").hide();
  $("#Layer-24").addClass("Wrap-24-29");
  $(".Wrap-24-29").hover(
    function(){ $("#Layer-29").show(); $("#Layer-24").hide(); },
    function(){ $("#Layer-24").show(); $("#Layer-29").hide(); });
  $("#Layer-30").addClass("Wrap-25-30").hide();
  $("#Layer-25").addClass("Wrap-25-30");
  $(".Wrap-25-30").hover(
    function(){ $("#Layer-30").show(); $("#Layer-25").hide(); },
    function(){ $("#Layer-25").show(); $("#Layer-30").hide(); });
  $("#Layer-36").addClass("Wrap-35-36").hide();
  $("#Layer-35").addClass("Wrap-35-36");
  $(".Wrap-35-36").hover(
    function(){ $("#Layer-36").show(); $("#Layer-35").hide(); },
    function(){ $("#Layer-35").show(); $("#Layer-36").hide(); });
  $("#Layer-38").addClass("Wrap-37-38").hide();
  $("#Layer-37").addClass("Wrap-37-38");
  $(".Wrap-37-38").hover(
    function(){ $("#Layer-38").show(); $("#Layer-37").hide(); },
    function(){ $("#Layer-37").show(); $("#Layer-38").hide(); });
  $("#Layer-42").addClass("Wrap-41-42").hide();
  $("#Layer-41").addClass("Wrap-41-42");
  $(".Wrap-41-42").hover(
    function(){ $("#Layer-42").show(); $("#Layer-41").hide(); },
    function(){ $("#Layer-41").show(); $("#Layer-42").hide(); });
  $("#Layer-44").addClass("Wrap-43-44").hide();
  $("#Layer-43").addClass("Wrap-43-44");
  $(".Wrap-43-44").hover(
    function(){ $("#Layer-44").show(); $("#Layer-43").hide(); },
    function(){ $("#Layer-43").show(); $("#Layer-44").hide(); });
  $("#Layer-46").addClass("Wrap-45-46").hide();
  $("#Layer-45").addClass("Wrap-45-46");
  $(".Wrap-45-46").hover(
    function(){ $("#Layer-46").show(); $("#Layer-45").hide(); },
    function(){ $("#Layer-45").show(); $("#Layer-46").hide(); });
  $("#Layer-55").addClass("Wrap-50-55").hide();
  $("#Layer-50").addClass("Wrap-50-55");
  $(".Wrap-50-55").hover(
    function(){ $("#Layer-55").show(); $("#Layer-50").hide(); },
    function(){ $("#Layer-50").show(); $("#Layer-55").hide(); });
  $("#Layer-56").addClass("Wrap-52-56").hide();
  $("#Layer-52").addClass("Wrap-52-56");
  $(".Wrap-52-56").hover(
    function(){ $("#Layer-56").show(); $("#Layer-52").hide(); },
    function(){ $("#Layer-52").show(); $("#Layer-56").hide(); });
  $("#Layer-57").addClass("Wrap-53-57").hide();
  $("#Layer-53").addClass("Wrap-53-57");
  $(".Wrap-53-57").hover(
    function(){ $("#Layer-57").show(); $("#Layer-53").hide(); },
    function(){ $("#Layer-53").show(); $("#Layer-57").hide(); });
  $("#Layer-58").addClass("Wrap-54-58").hide();
  $("#Layer-54").addClass("Wrap-54-58");
  $(".Wrap-54-58").hover(
    function(){ $("#Layer-58").show(); $("#Layer-54").hide(); },
    function(){ $("#Layer-54").show(); $("#Layer-58").hide(); });
  
  // This is code to handle the switch_menu menu
  $("#Layer-39").hide().addClass("allMenus");
  $("#Layer-38").click(function(e){
    e.preventDefault();
    $(".allMenus").hide("slow");
    $("#Layer-39").show("slow");
    // Remove the following 2 lines if you don't want this menu to dissappear
    // automatically.  Change how long the menu stays visible by changing
    // the 4000 to another number of milliseconds
    //clearTimeout( timerId );
    //timerId = setTimeout( '$("#Layer-39").hide("slow")', 4000 );
  });


  /* Here we take care of any _close layers you have made */
  $("#Layer-40").click(function(){ $("#Layer-40").parent().hide("slow"); });































































});
