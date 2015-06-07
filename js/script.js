var b_hgt, b_wth;
getViewport();

function getViewport() {


 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 if (typeof window.innerWidth != 'undefined') {
   b_wth = window.innerWidth,
   b_hgt = window.innerHeight
 }

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 else if (typeof document.documentElement != 'undefined'
 && typeof document.documentElement.clientWidth !=
 'undefined' && document.documentElement.clientWidth != 0) {
    b_wth = document.documentElement.clientWidth,
    b_hgt = document.documentElement.clientHeight
 }
}
function openLanguagesDropdown()
{
    document.getElementById("dropdown_languages").style.transition = "max-height 5s, max-width 5s, opacity 0.3s"
    document.getElementById("drop_languages_item_1").style.transition = "font-size 0.3s";
    document.getElementById("drop_languages_item_2").style.transition = "font-size 0.3s";
    document.getElementById("dropdown_languages").style.opacity = 1;
    document.getElementById("drop_languages_item_1").style.fontSize = "15px";
    document.getElementById("drop_languages_item_2").style.fontSize = "15px";
    document.getElementById("dropdown_languages").style.maxWidth = "9999px";
    document.getElementById("dropdown_languages").style.maxHeight = "9999px";
}

function closeLanguagesDropdown()
{
    document.getElementById("dropdown_languages").style.transition = "max-height 0.3s, max-width 0.3s, opacity 0.3s"
    document.getElementById("drop_languages_item_1").style.transition = "font-size 0.3s";
    document.getElementById("drop_languages_item_2").style.transition = "font-size 0.3s";
    document.getElementById("dropdown_languages").style.opacity = 0;
    document.getElementById("drop_languages_item_1").style.fontSize = "0em";
    document.getElementById("drop_languages_item_2").style.fontSize = "0em";
    document.getElementById("dropdown_languages").style.maxWidth = "0px";
    document.getElementById("dropdown_languages").style.maxHeight = "0px";
}

function openMenu()
{
    document.getElementById('menu').style.transition = "height 0.6s, width 0.3s";
    document.getElementById('menu').style.width = 300;
    document.getElementById('menu').style.height = 199;
    document.getElementById('s_1').style.background= "rgb(90,90,90)";
    document.getElementById('s_2').style.background= "rgb(90,90,90)";
    document.getElementById('s_3').style.background= "rgb(90,90,90)";
    document.getElementById('arrow').className = "material-icon hamburger arrow";
    var sub_menu = document.getElementsByClassName('sub_menu');
    var sub_menu_l=sub_menu.length;
    for(var i=0;i<sub_menu_l;i++)
    {
        sub_menu[i].style.zIndex = 15;
        sub_menu[i].style.transition = "opacity 0.5s 0." + (2*i) + "s, background 0.3s";
        sub_menu[i].style.opacity = 1;
    }
    menuopened = true;
}

function closeMenu()
{
    document.getElementById('menu').style.width = 0;
    document.getElementById('menu').style.height = 0;   
    document.getElementById('menu').style.transition = "height 0.3s 0.2s, width 0.7s 0.2s";
    document.getElementById('s_1').style.background= "#fff";
    document.getElementById('s_2').style.background= "#fff";
    document.getElementById('s_3').style.background= "#fff";
    document.getElementById('arrow').className = "material-icon hamburger";
    var sub_menu = document.getElementsByClassName('sub_menu');
    var sub_menu_l=sub_menu.length;
    var j=sub_menu_l;
    for(var i=0;i<sub_menu_l;i++)
    {
        sub_menu[i].style.zIndex = -10;
        sub_menu[i].style.transition = "opacity 0.3s 0." + j + "s, background 0.3s";
        sub_menu[i].style.opacity = 0;
        j--;
    }
    menuopened = false;
}

var menuopened = false;

function toogleMenu()
{
    if(menuopened)
        closeMenu()
    else
        openMenu()
}

function manageAvatar()
{
    if(document.body.scrollTop >= document.getElementById('content').offsetTop)
    {
        document.getElementById('arrow').style.left = 12;
        document.getElementById('arrow').style.top = 20;
        document.getElementById('avatar_mini').style.top = 10;
        document.getElementById('menu_header').style.marginTop = 13;
        document.getElementById('arrow_up').style.top = 12;
        
    }
    else
    {
        document.getElementById('arrow').style.left = 12;
        document.getElementById('arrow').style.top = 12;
        document.getElementById('avatar_mini').style.top = -55;
        document.getElementById('menu_header').style.marginTop = 5;
        document.getElementById('arrow_up').style.top = -50;
    }
    if(b_wth<800 && document.body.scrollTop >= document.getElementById('content').offsetTop)
    {
        document.getElementById('s_1').style.background= "rgb(90,90,90)";
        document.getElementById('s_2').style.background= "rgb(90,90,90)";
        document.getElementById('s_3').style.background= "rgb(90,90,90)";
    }
    else
    {
        document.getElementById('s_1').style.background= "#fff";
        document.getElementById('s_2').style.background= "#fff";
        document.getElementById('s_3').style.background= "#fff";
    }   
    
}