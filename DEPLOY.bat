@echo off
chcp 65001 >nul
echo.
echo ═══════════════════════════════════════════════════════
echo    🚀 Al-Noor Marketing - Firebase Deploy Script
echo ═══════════════════════════════════════════════════════
echo.
echo تأكد من تثبيت Node.js و Firebase CLI أولاً!
echo.
echo الخطوة 1: تثبيت Firebase CLI (إذا لم يكن مثبتاً)
echo ────────────────────────────────────────────────────────
echo npm install -g firebase-tools
echo.
echo الخطوة 2: تسجيل الدخول
echo ────────────────────────────────────────────────────────
echo firebase login
echo.
echo الخطوة 3: إعداد المشروع (مرة واحدة فقط)
echo ────────────────────────────────────────────────────────
echo firebase init hosting
echo   - Use an existing project
echo   - Public directory: public
echo   - Single-page app: Yes
echo   - Overwrite index.html: No
echo.
echo الخطوة 4: النشر
echo ────────────────────────────────────────────────────────
echo firebase deploy
echo.
echo الخطوة 5: اختبار محلي (اختياري)
echo ────────────────────────────────────────────────────────
echo firebase serve
echo.
echo ═══════════════════════════════════════════════════════
echo.
echo 📚 للمزيد من المعلومات، راجع:
echo    - README.md
echo    - QUICKSTART.md
echo    - PROJECT_SUMMARY.md
echo.
echo 📧 للدعم: diaaeddin.me@gmail.com
echo.
pause
