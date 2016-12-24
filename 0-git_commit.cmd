git status
git add * 
set /p newComment=""
if "%newComment%" =="" (git commit -m "%DATE:~6,4%%DATE:~3,2%%DATE:~0,2%%time%")
if not "%newComment%" =="" (git commit -m "%DATE:~6,4%%DATE:~3,2%%DATE:~0,2%%time%-%newComment%")
git push