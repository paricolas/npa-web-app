
cd c:/perso/github/npa-web-app
git status
git add * 
set /p newComment=""
IF "%newComment%" =="" (git commit -m "%DATE:~6,4%%DATE:~3,2%%DATE:~0,2%%time%")
ELSE (git commit -m "%DATE:~6,4%%DATE:~3,2%%DATE:~0,2%%time%-%newComment%")
git push