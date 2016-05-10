start C:\Users\Alexander\Documents\SteamAchievementManager63_hotfix\SAM.Picker.exe
start C:\Users\Alexander\Documents\SteamAchievementManager63_hotfix\SAM.Game.exe 382240
ping -n 29800 127.0.0.1 > nul
taskkill /f /im SAM.Game.exe
taskkill /f /im SAM.Picker.exe