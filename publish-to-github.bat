@echo off
cd /d "%~dp0"

git status --short
echo.
set /p COMMIT_MSG=Escribe el mensaje del commit: 

if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update site content

git add .
git commit -m "%COMMIT_MSG%"
git push

echo.
echo Cambios enviados a GitHub.
pause
