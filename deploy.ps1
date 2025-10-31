# ═══════════════════════════════════════════════════════
# 🚀 Al-Noor Marketing - Firebase Deploy Helper
# ═══════════════════════════════════════════════════════

Write-Host "`n" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "   🚀 Al-Noor Marketing - Firebase Deploy Helper" -ForegroundColor White
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "`n"

function Show-Menu {
    Write-Host "اختر العملية:" -ForegroundColor Yellow
    Write-Host "1. تثبيت Firebase CLI" -ForegroundColor Green
    Write-Host "2. تسجيل الدخول إلى Firebase" -ForegroundColor Green
    Write-Host "3. إعداد المشروع (init)" -ForegroundColor Green
    Write-Host "4. اختبار محلي (serve)" -ForegroundColor Green
    Write-Host "5. نشر الموقع (deploy)" -ForegroundColor Green
    Write-Host "6. عرض معلومات المشروع" -ForegroundColor Green
    Write-Host "7. فتح الموقع المحلي" -ForegroundColor Green
    Write-Host "8. خروج" -ForegroundColor Red
    Write-Host "`n"
}

function Install-FirebaseCLI {
    Write-Host "`n📦 تثبيت Firebase CLI..." -ForegroundColor Yellow
    npm install -g firebase-tools
    Write-Host "✅ تم التثبيت بنجاح!" -ForegroundColor Green
    pause
}

function Login-Firebase {
    Write-Host "`n🔐 تسجيل الدخول إلى Firebase..." -ForegroundColor Yellow
    firebase login
    Write-Host "✅ تم تسجيل الدخول بنجاح!" -ForegroundColor Green
    pause
}

function Init-FirebaseProject {
    Write-Host "`n⚙️ إعداد المشروع..." -ForegroundColor Yellow
    Write-Host "`nملاحظة: اختر الإعدادات التالية:" -ForegroundColor Cyan
    Write-Host "  - Use an existing project" -ForegroundColor White
    Write-Host "  - Public directory: public" -ForegroundColor White
    Write-Host "  - Single-page app: Yes" -ForegroundColor White
    Write-Host "  - Overwrite index.html: No`n" -ForegroundColor White
    firebase init hosting
    Write-Host "✅ تم الإعداد بنجاح!" -ForegroundColor Green
    pause
}

function Serve-Local {
    Write-Host "`n🧪 تشغيل الخادم المحلي..." -ForegroundColor Yellow
    Write-Host "سيتم فتح الموقع على: http://localhost:5000" -ForegroundColor Cyan
    Write-Host "اضغط Ctrl+C لإيقاف الخادم`n" -ForegroundColor Yellow
    firebase serve
}

function Deploy-Site {
    Write-Host "`n🚀 نشر الموقع..." -ForegroundColor Yellow
    firebase deploy
    Write-Host "`n✅ تم النشر بنجاح!" -ForegroundColor Green
    Write-Host "يمكنك الآن زيارة موقعك على الرابط الذي ظهر أعلاه" -ForegroundColor Cyan
    pause
}

function Show-ProjectInfo {
    Write-Host "`n📊 معلومات المشروع:" -ForegroundColor Yellow
    Write-Host "─────────────────────────────────────────" -ForegroundColor Cyan
    Write-Host "📁 المجلد: $(Get-Location)" -ForegroundColor White
    Write-Host "`n📄 الملفات الموجودة:" -ForegroundColor White
    Get-ChildItem | Select-Object Name, Length, LastWriteTime | Format-Table
    
    if (Test-Path "firebase.json") {
        Write-Host "✅ firebase.json موجود" -ForegroundColor Green
    } else {
        Write-Host "❌ firebase.json غير موجود - قم بتشغيل 'إعداد المشروع' أولاً" -ForegroundColor Red
    }
    
    if (Test-Path "public/index.html") {
        Write-Host "✅ index.html موجود" -ForegroundColor Green
    } else {
        Write-Host "❌ index.html غير موجود" -ForegroundColor Red
    }
    
    Write-Host "`n📧 للدعم: diaaeddin.me@gmail.com" -ForegroundColor Cyan
    pause
}

function Open-LocalSite {
    Write-Host "`n🌐 فتح الموقع المحلي..." -ForegroundColor Yellow
    Start-Process "http://localhost:5000"
    Write-Host "✅ تم فتح المتصفح!" -ForegroundColor Green
    Write-Host "تأكد من تشغيل الخادم أولاً (الخيار 4)" -ForegroundColor Yellow
    pause
}

# Main Loop
do {
    Clear-Host
    Write-Host "`n" -ForegroundColor Cyan
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "   🚀 Al-Noor Marketing - Firebase Deploy Helper" -ForegroundColor White
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "`n"
    
    Show-Menu
    $choice = Read-Host "اختر رقماً (1-8)"
    
    switch ($choice) {
        '1' { Install-FirebaseCLI }
        '2' { Login-Firebase }
        '3' { Init-FirebaseProject }
        '4' { Serve-Local }
        '5' { Deploy-Site }
        '6' { Show-ProjectInfo }
        '7' { Open-LocalSite }
        '8' { 
            Write-Host "`n👋 شكراً لاستخدام الأداة!" -ForegroundColor Green
            Write-Host "بالتوفيق مع موقعك! 🎉`n" -ForegroundColor Cyan
            break
        }
        default { 
            Write-Host "`n❌ خيار غير صحيح! حاول مرة أخرى." -ForegroundColor Red
            pause
        }
    }
} while ($choice -ne '8')
