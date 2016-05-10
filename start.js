var i, sublist, str;
var count = 17; //Количество символов в вашей персональной ссылке http://steamcommunity.com/id/***/ - количество звездочек
var mainlist1 = document.getElementsByClassName('badge_row is_link'); //Список игр, в которых есть карточки
var mainlist2 = document.getElementsByClassName('progress_info_bold'); //Список игр, в которых должны выпасть карточки
var time = 7200; //Время игры, после которого выпадают карточки (7200 = 2 часа)
var fl = true; //true - если две и более игры имеются, в которых нет еще 2 часов время игры; false - в противном случаи

if (fl) {
	console.log("start C:\\Users\\Alexander\\Documents\\SteamAchievementManager63_hotfix\\SAM.Picker.exe");
	for (i = 0; i < mainlist1.length; i++) {
		try {
			if (mainlist2[i].innerHTML.length > 19) {
				sublist = mainlist1[i].getElementsByClassName('badge_row_overlay');
				str = "start C:\\Users\\Alexander\\Documents\\SteamAchievementManager63_hotfix\\SAM.Game.exe " + sublist[0].href.substring(46+count)
				console.log(str.substring(0,str.length-1));
			}
		} catch(e) {}
	}
	console.log("ping -n " + 7200 + " 127.0.0.1 > nul");
	for (i = 0; i < mainlist1.length/2; i++) {
		try {
			if (mainlist2[i].innerHTML.length > 19) {
				console.log("taskkill /f /im SAM.Game.exe");
				console.log("taskkill /f /im SAM.Game.exe");
			}
		} catch(e) {}
	}
	if (mainlist1.length%2 == 1)
		console.log("taskkill /f /im SAM.Game.exe");
}

for (i = 0; i < mainlist1.length; i++) {
	try {
		if (mainlist2[i].innerHTML.length > 19) {
			sublist = mainlist1[i].getElementsByClassName('badge_row_overlay');
			str = "start C:\\Users\\Alexander\\Documents\\SteamAchievementManager63_hotfix\\SAM.Game.exe " + sublist[0].href.substring(46+count)
			console.log(str.substring(0,str.length-1));
			console.log("ping -n " + mainlist2[i].innerHTML.substring(22)*1800 + " 127.0.0.1 > nul");
			console.log("taskkill /f /im SAM.Game.exe");
		}
	} catch(e) {}
}
console.log("taskkill /f /im SAM.Picker.exe");
