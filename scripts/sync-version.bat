@echo off
REM Version sync script for Windows - Ensures client and server versions match

for /f "tokens=2 delims=:," %%a in ('findstr /r "version" package.json ^| findstr /v private') do (
    set VERSION=%%a
    goto :found
)

:found
set VERSION=%VERSION:~2,-1%

echo Syncing version: %VERSION%

REM Create temporary files for replacements
setlocal enabledelayedexpansion

REM Read vercel.json
for /f "delims=" %%i in (vercel.json) do (
    set "line=%%i"
    echo !line! | findstr /r "NEXT_PUBLIC_VERSION" > nul
    if !errorlevel! equ 0 (
        echo   "NEXT_PUBLIC_VERSION": "@venus_project/%VERSION%"
    ) else (
        echo !line!
    )
) > vercel.json.tmp
move /y vercel.json.tmp vercel.json

echo.
echo ✅ Version sync complete: %VERSION%
echo Updated files:
echo   - vercel.json
echo   - package.json
