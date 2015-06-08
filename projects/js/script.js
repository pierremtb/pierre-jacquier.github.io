
var title_offset = document.getElementById('article_header_title').offsetTop;
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

 // older versions of IE
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
       document.getElementById('article_header_title').style.position = 'fixed';
         document.getElementById('article_header').style.background = 'transparent';
        document.getElementById('article_header_title').style.top = '0';
        document.getElementById('article_header_title').style.bottom = 'auto';
        if(b_wth >= 900)
            document.getElementById('article_header_title').style.left = '250';
        document.getElementById('article_header_title').style.fontSize = '30';
document.getElementById('article_header_title').style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    }
    else
    {
       document.getElementById('article_header_title').style.position = 'absolute';
        document.getElementById('article_header_title').style.top = 'auto';
        document.getElementById('article_header_title').style.bottom = '0';
        document.getElementById('article_header_title').style.left = '0';
         document.getElementById('article_header').style.background = '#e91e63';
        document.getElementById('article_header_title').style.boxShadow = "none";
        document.getElementById('article_header_title').style.fontSize = '45';
    }
}

function openDrawer()
{
    document.getElementById('side_menu').style.transform = 'translateX(260px)';   
}
