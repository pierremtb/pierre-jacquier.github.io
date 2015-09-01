var Q = document.querySelector.bind(document);
var Qq = document.querySelectorAll.bind(document);
HTMLElement.prototype.$ = HTMLElement.prototype.querySelector;
HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll;
var isIE = /*@cc_on!@*/0;

var title_offset = Q('#article_header_title').offsetTop;
var b_hgt, b_wth;
getViewport();

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

 else {
   b_wth = document.getElementsByTagName('body')[0].clientWidth,
   b_hgt = document.getElementsByTagName('body')[0].clientHeight
 }
 return [b_wth, b_hgt];
}

function update()
{
    if(document.body.scrollTop >= title_offset)
    {
       Q('#article_header_title').style.position = 'fixed';
         Q('#article_header').style.background = 'transparent';
        Q('#article_header_title').style.top = '0';
        Q('#article_header_title').style.bottom = 'auto';
        if(b_wth >= 900)
            Q('#article_header_title').style.left = '250';
        if(b_wth > 900)
            Q('#article_header_title').style.fontSize = '32';
        else
            Q('#article_header_title').style.fontSize = '25';
Q('#article_header_title').style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    }
    else
    {
       Q('#article_header_title').style.position = 'absolute';
        Q('#article_header_title').style.top = 'auto';
        Q('#article_header_title').style.bottom = '0';
        Q('#article_header_title').style.left = '0';
        if(Q('#article_header_title').innerHTML == "Liri Browser")
            Q('#article_header').style.background = '#03A9F4';
        else
            Q('#article_header').style.background = '#e91e63';
        Q('#article_header_title').style.boxShadow = "none";
        if(b_wth > 900)
            Q('#article_header_title').style.fontSize = '45';
        else
            Q('#article_header_title').style.fontSize = '32';
    }
}

function openDrawer()
{
    Q('#side_menu').style.transform = 'translateX(260px)';   
}

function closeDrawer()
{
    Q('#side_menu').style.transform = 'translateX(-260px)';   
}

function openSubMenu(e)
{
    e.style.display = 'block';   
}

function closeSubMenu(e)
{
    e.style.display = 'none';   
}

var sub_projects = false;

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
