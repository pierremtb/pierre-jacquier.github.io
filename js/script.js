var Q = document.querySelector.bind(document);
var Qq = document.querySelectorAll.bind(document);
HTMLElement.prototype.Q = HTMLElement.prototype.querySelector;
HTMLElement.prototype.Qq = HTMLElement.prototype.querySelectorAll;


function posTop() {
    return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;
}

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
    // IE 12 => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}



window.onscroll = makePresentationAwesome;
getViewport();
toogleSubMenu("projects");


function getViewport() {

if (typeof window.innerWidth != 'undefined') {
   b_wth = window.innerWidth,
   b_hgt = window.innerHeight
 }

 else if (typeof document.documentElement != 'undefined'
 && typeof document.documentElement.clientWidth !=
 'undefined' && document.documentElement.clientWidth != 0) {
    b_wth = document.documentElement.clientWidth,
    b_hgt = document.documentElement.clientHeight
 }
}
function openLanguagesDropdown()
{
    Q("#dropdown_languages").style.transition = "max-height 5s, max-width 5s, opacity 0.3s"
    Q("#drop_languages_item_1").style.transition = "font-size 0.3s";
    Q("#drop_languages_item_2").style.transition = "font-size 0.3s";
    Q("#dropdown_languages").style.opacity = 1;
    Q("#drop_languages_item_1").style.fontSize = "15px";
    Q("#drop_languages_item_2").style.fontSize = "15px";
    Q("#dropdown_languages").style.maxWidth = "9999px";
    Q("#dropdown_languages").style.maxHeight = "9999px";
}

function closeLanguagesDropdown()
{
    Q("#dropdown_languages").style.transition = "max-height 0.3s, max-width 0.3s, opacity 0.3s"
    Q("#drop_languages_item_1").style.transition = "font-size 0.3s";
    Q("#drop_languages_item_2").style.transition = "font-size 0.3s";
    Q("#dropdown_languages").style.opacity = 0;
    Q("#drop_languages_item_1").style.fontSize = "0em";
    Q("#drop_languages_item_2").style.fontSize = "0em";
    Q("#dropdown_languages").style.maxWidth = "0px";
    Q("#dropdown_languages").style.maxHeight = "0px";
}

function openMenu()
{
    Q('#menu').style.transition = "height 0.6s, width 0.3s";
    Q('#menu').style.width = 300;
    Q('#menu').style.height = 199;
    Q('#s_1').style.background= "rgb(90,90,90)";
    Q('#s_2').style.background= "rgb(90,90,90)";
    Q('#s_3').style.background= "rgb(90,90,90)";
    Q('#arrow').className = "material-icon hamburger arrow";
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
    Q('#menu').style.width = 0;
    Q('#menu').style.height = 0;   
    Q('#menu').style.transition = "height 0.3s 0.2s, width 0.7s 0.2s";
    Q('#s_1').style.background= "#fff";
    Q('#s_2').style.background= "#fff";
    Q('#s_3').style.background= "#fff";
    Q('#arrow').className = "material-icon hamburger";
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
    if(document.body.scrollTop >= Q('#content').offsetTop)
    {
        Q('#arrow').style.left = 12;
        Q('#arrow').style.top = 20;
        Q('#avatar_mini').style.top = 10;
        Q('#menu_header').style.marginTop = 13;
        Q('#arrow_up').style.top = 12;
        
    }
    else
    {
        Q('#arrow').style.left = 12;
        Q('#arrow').style.top = 12;
        Q('#avatar_mini').style.top = -55;
        Q('#menu_header').style.marginTop = 5;
        Q('#arrow_up').style.top = -50;
    }
    if(b_wth<800 && document.body.scrollTop >= Q('#content').offsetTop)
    {
        Q('#s_1').style.background= "rgb(90,90,90)";
        Q('#s_2').style.background= "rgb(90,90,90)";
        Q('#s_3').style.background= "rgb(90,90,90)";
    }
    else
    {
        Q('#s_1').style.background= "#fff";
        Q('#s_2').style.background= "#fff";
        Q('#s_3').style.background= "#fff";
    }   
    
}

function openDrawer() {
    Q('#side_menu').style.transform = 'translateX(260px)';
    Q('#shadow_drawer').style.opacity = 1;
    Q('#shadow_drawer').style.zIndex = 9;
}

function closeDrawer() {
    Q('#side_menu').style.transform = 'translateX(0)';
    Q('#shadow_drawer').style.zIndex = -10;
}

function openSubMenu(e) {
    e.style.display = 'block';   
}

function closeSubMenu(e) {
    e.style.display = 'none';   
}

var sub_projects = true;

function toogleSubMenu(str)
{
    if(str == "projects")
    {
        if(sub_projects)
            openSubMenu(Q('#sub_projects'));
        else 
            closeSubMenu(Q('#sub_projects'));
        sub_projects = !sub_projects;
    }
}

function makePresentationAwesome(){
    console.log("tratnure");
    var progress = posTop()/b_hgt;
    if((!detectIE() || detectIE() == 12) && b_wth > 800) {
        if(progress < 1) {
            Q('#sub_icon_pres').style.WebkitTransform = "rotateX(" + progress*180 + "deg)";
            Q('#sub_icon_pres').style.transform = "rotateX(" + progress*180 + "deg)";
            Q('#hamburger').style.opacity = 1 - progress*1.5;
            Q('#more_languages').style.opacity = 1 - progress*1.5;
            if(progress < 0.5)
                Q('#page_shadow_1').style.opacity = progress;
            else {
                Q('#page_shadow_2').style.opacity = 1 - progress;
            }
            Q('#pres_content').style.position = "fixed";
            Q('#pres_content').style.top = "0";
            Q('#next_navbar2').style.display = "none";
        }
        else {
            Q('#sub_icon_pres').style.WebkitTransform = "rotateX(180deg)";
            Q('#sub_icon_pres').style.transform = "rotateX(180deg)";
            Q('#page_shadow_2').style.opacity = 0;
            Q('#pres_content').style.position = "absolute";
            Q('#pres_content').style.top = "100vh";
            Q('#next_navbar2').style.display = "block";
        } 
    }
    else {
        if(posTop()>b_hgt)
            Q('#next_navbar2').style.display = "block";
        else
            Q('#next_navbar2').style.display = "none";
            
    }   
    
}