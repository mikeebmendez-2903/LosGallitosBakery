@echo off
cd /d "%~dp0"
start "" powershell -NoExit -Command "$env:PORT='3010'; Set-Location '%~dp0'; node server.js"
ping 127.0.0.1 -n 3 >nul
start "" http://localhost:3010/admin-login.html
