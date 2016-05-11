//////////// Входные данные ///////////////////////////////////////
// count - количество символов в вашей персональной ссылке http://steamcommunity.com/id/***/ - количество звездочек
// fl: true - если две и более игры имеются, в которых нет еще 2 часов время игры; false - в противном случаи
// url - путь к вашим exe'шникам, вместо одного "\" использовать два "\\"
var count = 17;
var fl = true;
var url = "C:\\Users\\Alexander\\Documents\\SteamAchievementManager63_hotfix\\";
////////////////////////////////////////////////////////////////////

var i, sublist, str, temp1, temp2, kol;
var mainlist1 = document.getElementsByClassName('badge_row is_link'); //Список игр, в которых есть карточки
var mainlist2 = document.getElementsByClassName('progress_info_bold'); //Список игр, в которых должны выпасть карточки

console.log("start " + url + "SAM.Picker.exe");
if (fl) {
	for (i = kol = 0; i < mainlist1.length; i++) {
		try {
			if (mainlist2[i].innerHTML.length > 19) {
				temp1 = mainlist1[i].getElementsByClassName('badge_title_stats_playtime');
				temp2 = temp1[0].innerHTML.trim().substring(6).trim().substring(0,1);
				if (temp2 == 0 || temp2 == "") {
					sublist = mainlist1[i].getElementsByClassName('badge_row_overlay');
					str = "start " + url + "SAM.Game.exe " + sublist[0].href.substring(46+count)
					console.log(str.substring(0,str.length-1));
					kol++;
				}
			}
		} catch(e) {}
	}
	if (kol != 0)
		console.log("ping -n " + 7200 + " 127.0.0.1 > nul");
	for (i = 0; i < kol/2; i++) {
		try {
			if (mainlist2[i].innerHTML.length > 19) {
				console.log("taskkill /f /im SAM.Game.exe");
				console.log("taskkill /f /im SAM.Game.exe");
			}
		} catch(e) {}
	}
	if (kol%2 == 1)
		console.log("taskkill /f /im SAM.Game.exe");
	if (kol == 2) {
		console.log("taskkill /f /im SAM.Game.exe");
		console.log("taskkill /f /im SAM.Game.exe");
	}
}
for (i = 0; i < mainlist1.length; i++) {
	try {
		if (mainlist2[i].innerHTML.length > 19) {
			sublist = mainlist1[i].getElementsByClassName('badge_row_overlay');
			str = "start " + url + "SAM.Game.exe " + sublist[0].href.substring(46+count)
			console.log(str.substring(0,str.length-1));
			temp1 = mainlist1[i].getElementsByClassName('badge_title_stats_playtime');
			temp2 = temp1[0].innerHTML.trim().substring(6).trim().substring(0,1);
			switch (temp2) {
				default: {
					console.log("ping -n " + mainlist2[i].innerHTML.substring(22)*1800 + " 127.0.0.1 > nul");
				} break;
				case 1: {
					console.log("ping -n " + (mainlist2[i].innerHTML.substring(22)*1800+1800) + " 127.0.0.1 > nul");
				} break;
			}
			console.log("taskkill /f /im SAM.Game.exe");
		}
	} catch(e) {}
}
console.log("taskkill /f /im SAM.Picker.exe");
