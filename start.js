var i, sublist, mainlist, a,str,b;
var count = 17; //Количество символов в вашей персональной ссылке http://steamcommunity.com/id/***/ - количество звездочек
mainlist = document.getElementsByClassName('badge_row is_link');
a = document.getElementsByClassName('progress_info_bold');

//### Это часть нужна, если есть две и более игры, ни разу неоткрывшиеся ###
console.log("start C:\\Users\\Alexander\\Documents\\SteamAchievementManager63_hotfix\\SAM.Picker.exe");
for (i = 0; i < mainlist.length; i++) {
	try {
		if (a[i].innerHTML.length > 19) {
			sublist = mainlist[i].getElementsByClassName('badge_row_overlay');
			str = "start C:\\Users\\Alexander\\Documents\\SteamAchievementManager63_hotfix\\SAM.Game.exe " + sublist[0].href.substring(46+count)
			console.log(str.substring(0,str.length-1));
		}
	} catch(e) {}
}
console.log("ping -n " + 7200 + " 127.0.0.1 > nul");
for (i = 0; i < mainlist.length/2; i++) {
	try {
		if (a[i].innerHTML.length > 19) {
			console.log("taskkill /f /im SAM.Game.exe");
			console.log("taskkill /f /im SAM.Game.exe");
		}
	} catch(e) {}
}
if (mainlist.length%2 == 1)
	console.log("taskkill /f /im SAM.Game.exe");
//############################################################################

for (i = 0; i < mainlist.length; i++) {
	try {
		if (a[i].innerHTML.length > 19) {
			sublist = mainlist[i].getElementsByClassName('badge_row_overlay');
			str = "start C:\\Users\\Alexander\\Documents\\SteamAchievementManager63_hotfix\\SAM.Game.exe " + sublist[0].href.substring(46+count)
			console.log(str.substring(0,str.length-1));
			console.log("ping -n " + a[i].innerHTML.substring(22)*1800 + " 127.0.0.1 > nul");
			console.log("taskkill /f /im SAM.Game.exe");
		}
	} catch(e) {}
}
console.log("taskkill /f /im SAM.Picker.exe");
