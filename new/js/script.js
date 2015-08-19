var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
HTMLElement.prototype.$ = HTMLElement.prototype.querySelector;
HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll;


getViewport();
closeDrawer();
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
    $('#menu').style.transition = "height 0.6s, width 0.3s";
    $('#menu').style.width = 300;
    $('#menu').style.height = 199;
    $('#s_1').style.background= "rgb(90,90,90)";
    $('#s_2').style.background= "rgb(90,90,90)";
    $('#s_3').style.background= "rgb(90,90,90)";
    $('#arrow').className = "material-icon hamburger arrow";
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
    $('#menu').style.width = 0;
    $('#menu').style.height = 0;   
    $('#menu').style.transition = "height 0.3s 0.2s, width 0.7s 0.2s";
    $('#s_1').style.background= "#fff";
    $('#s_2').style.background= "#fff";
    $('#s_3').style.background= "#fff";
    $('#arrow').className = "material-icon hamburger";
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
    if(document.body.scrollTop >= $('#content').offsetTop)
    {
        $('#arrow').style.left = 12;
        $('#arrow').style.top = 20;
        $('#avatar_mini').style.top = 10;
        $('#menu_header').style.marginTop = 13;
        $('#arrow_up').style.top = 12;
        
    }
    else
    {
        $('#arrow').style.left = 12;
        $('#arrow').style.top = 12;
        $('#avatar_mini').style.top = -55;
        $('#menu_header').style.marginTop = 5;
        $('#arrow_up').style.top = -50;
    }
    if(b_wth<800 && document.body.scrollTop >= $('#content').offsetTop)
    {
        $('#s_1').style.background= "rgb(90,90,90)";
        $('#s_2').style.background= "rgb(90,90,90)";
        $('#s_3').style.background= "rgb(90,90,90)";
    }
    else
    {
        $('#s_1').style.background= "#fff";
        $('#s_2').style.background= "#fff";
        $('#s_3').style.background= "#fff";
    }   
    
}

function openDrawer() {
    $('#side_menu').style.transform = 'translateX(0)';
    $('#shadow_drawer').style.opacity = 1;
    $('#shadow_drawer').style.zIndex = 9;
}

function closeDrawer() {
    $('#side_menu').style.transform = 'translateX(-260px)';
    $('#shadow_drawer').style.zIndex = -10;
}

function openSubMenu(e) {
    e.style.display = 'block';   
}

function closeSubMenu(e) {
    e.style.display = 'none';   
}

var sub_projects = false;

function toogleSubMenu(str)
{
    if(str == "projects")
    {
        if(sub_projects)
            openSubMenu($('#sub_projects'));
        else 
            closeSubMenu($('#sub_projects'));
        sub_projects = !sub_projects;
    }
}

function makePresentationAwesome(){
    //$('#pres_content').style.opacity = 1 - (document.body.scrollTop/b_hgt);
    var progress = document.body.scrollTop/b_hgt;
    if(progress < 1) {
        $('#sub_icon_pres').style.transform = "rotateX(" + progress*180 + "deg)";
        if(progress < 0.5)
            $('#page_shadow_1').style.opacity = progress;
        else
            $('#page_shadow_2').style.opacity = 1 - progress;
    }
    else {
        $('#sub_icon_pres').style.transform = "rotateX(180deg)";
        $('#page_shadow_2').style.opacity = 0;
    }
}