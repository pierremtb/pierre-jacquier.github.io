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