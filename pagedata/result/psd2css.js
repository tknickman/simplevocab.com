//
// psd2css.js
//
//   This is where all the javascript required by your design is written.
//
//   Originally generated at http://psd2cssonline.com 
//   April 28, 2011, 1:20 am with psd2css Online version 1.95

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
  $("#Layer-21").addClass("Wrap-14-21").hide();
  $("#Layer-14").addClass("Wrap-14-21");
  $(".Wrap-14-21").hover(
    function(){ $("#Layer-21").show(); $("#Layer-14").hide(); },
    function(){ $("#Layer-14").show(); $("#Layer-21").hide(); });
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
  $("#Layer-31").addClass("Wrap-26-31").hide();
  $("#Layer-26").addClass("Wrap-26-31");
  $(".Wrap-26-31").hover(
    function(){ $("#Layer-31").show(); $("#Layer-26").hide(); },
    function(){ $("#Layer-26").show(); $("#Layer-31").hide(); });
  $("#Layer-34").addClass("Wrap-33-34").hide();
  $("#Layer-33").addClass("Wrap-33-34");
  $(".Wrap-33-34").hover(
    function(){ $("#Layer-34").show(); $("#Layer-33").hide(); },
    function(){ $("#Layer-33").show(); $("#Layer-34").hide(); });
  $("#Layer-40").addClass("Wrap-39-40").hide();
  $("#Layer-39").addClass("Wrap-39-40");
  $(".Wrap-39-40").hover(
    function(){ $("#Layer-40").show(); $("#Layer-39").hide(); },
    function(){ $("#Layer-39").show(); $("#Layer-40").hide(); });
  $("#Layer-42").addClass("Wrap-41-42").hide();
  $("#Layer-41").addClass("Wrap-41-42");
  $(".Wrap-41-42").hover(
    function(){ $("#Layer-42").show(); $("#Layer-41").hide(); },
    function(){ $("#Layer-41").show(); $("#Layer-42").hide(); });
  $("#Layer-46").addClass("Wrap-45-46").hide();
  $("#Layer-45").addClass("Wrap-45-46");
  $(".Wrap-45-46").hover(
    function(){ $("#Layer-46").show(); $("#Layer-45").hide(); },
    function(){ $("#Layer-45").show(); $("#Layer-46").hide(); });
  $("#Layer-48").addClass("Wrap-47-48").hide();
  $("#Layer-47").addClass("Wrap-47-48");
  $(".Wrap-47-48").hover(
    function(){ $("#Layer-48").show(); $("#Layer-47").hide(); },
    function(){ $("#Layer-47").show(); $("#Layer-48").hide(); });
  $("#Layer-50").addClass("Wrap-49-50").hide();
  $("#Layer-49").addClass("Wrap-49-50");
  $(".Wrap-49-50").hover(
    function(){ $("#Layer-50").show(); $("#Layer-49").hide(); },
    function(){ $("#Layer-49").show(); $("#Layer-50").hide(); });
  $("#Layer-59").addClass("Wrap-54-59").hide();
  $("#Layer-54").addClass("Wrap-54-59");
  $(".Wrap-54-59").hover(
    function(){ $("#Layer-59").show(); $("#Layer-54").hide(); },
    function(){ $("#Layer-54").show(); $("#Layer-59").hide(); });
  $("#Layer-60").addClass("Wrap-55-60").hide();
  $("#Layer-55").addClass("Wrap-55-60");
  $(".Wrap-55-60").hover(
    function(){ $("#Layer-60").show(); $("#Layer-55").hide(); },
    function(){ $("#Layer-55").show(); $("#Layer-60").hide(); });
  $("#Layer-61").addClass("Wrap-56-61").hide();
  $("#Layer-56").addClass("Wrap-56-61");
  $(".Wrap-56-61").hover(
    function(){ $("#Layer-61").show(); $("#Layer-56").hide(); },
    function(){ $("#Layer-56").show(); $("#Layer-61").hide(); });
  $("#Layer-62").addClass("Wrap-57-62").hide();
  $("#Layer-57").addClass("Wrap-57-62");
  $(".Wrap-57-62").hover(
    function(){ $("#Layer-62").show(); $("#Layer-57").hide(); },
    function(){ $("#Layer-57").show(); $("#Layer-62").hide(); });
  $("#Layer-63").addClass("Wrap-58-63").hide();
  $("#Layer-58").addClass("Wrap-58-63");
  $(".Wrap-58-63").hover(
    function(){ $("#Layer-63").show(); $("#Layer-58").hide(); },
    function(){ $("#Layer-58").show(); $("#Layer-63").hide(); });
  
  // This is code to handle the switch_menu menu
  $("#Layer-43").hide().addClass("allMenus");
  $("#Layer-42").click(function(e){
    e.preventDefault();
    $(".allMenus").hide("slow");
    $("#Layer-43").show("slow");
    // Remove the following 2 lines if you don't want this menu to dissappear
    // automatically.  Change how long the menu stays visible by changing
    // the 4000 to another number of milliseconds
    clearTimeout( timerId );
    timerId = setTimeout( '$("#Layer-43").hide("slow")', 4000 );
  });


  /* Here we take care of any _close layers you have made */
  $("#Layer-44").click(function(){ $("#Layer-44").parent().hide("slow"); });




































































});
