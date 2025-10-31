# 🚀 Al-Noor Marketing - Portfolio Website

موقع شخصي احترافي لعرض خدمات التسويق الرقمي والتصميم - مصمم خصيصاً لـ **Diaaeddin** ومستضاف مجاناً على Firebase Hosting.

## ✨ المميزات

- 🎨 **تصميم حديث واحترافي** - ألوان عصرية وتدرجات جذابة
- 📱 **متجاوب بالكامل** - يعمل على جميع الأجهزة (موبايل، تابلت، ديسكتوب)
- ⚡ **أداء سريع** - محسّن للسرعة والأداء
- 🎭 **رسوم متحركة سلسة** - تجربة مستخدم ممتازة
- 📧 **نموذج اتصال فعّال** - مع تكامل EmailJS
- 🎯 **SEO Friendly** - محسّن لمحركات البحث
- 🔒 **آمن ومستقر** - استضافة مجانية على Firebase

## 📁 هيكل المشروع

```
موقعي الشخصي - فاير بيس/
├── public/
│   ├── index.html          # الصفحة الرئيسية
│   ├── css/
│   │   └── style.css       # ملف التصميم الشامل
│   ├── js/
│   │   └── main.js         # الأكواد التفاعلية
│   └── images/             # الصور (ضع صورك هنا)
│       ├── diaaeddin.jpg   # صورتك الشخصية
│       ├── project-1.jpg   # صور المشاريع
│       ├── project-2.jpg
│       ├── project-3.jpg
│       ├── project-4.jpg
│       ├── client-1.jpg    # صور العملاء
│       ├── client-2.jpg
│       ├── client-3.jpg
│       └── favicon.png     # أيقونة الموقع
├── firebase.json           # إعدادات Firebase
├── .firebaserc            # معلومات المشروع
├── .gitignore             # ملفات لتجاهلها في Git
└── README.md              # هذا الملف
```

## 🖼️ الصور المطلوبة

ضع الصور التالية في مجلد `public/images/`:

### صورة شخصية:
- `diaaeddin.jpg` - صورتك الشخصية (يفضل 800x800 بكسل)

### صور المشاريع:
- `project-1.jpg` - Tech Startup Brand Launch (1200x750 بكسل)
- `project-2.jpg` - E-commerce Growth Campaign (1200x750 بكسل)
- `project-3.jpg` - Local Business Transformation (1200x750 بكسل)
- `project-4.jpg` - Social Media Excellence (1200x750 بكسل)

### صور العملاء:
- `client-1.jpg` - Sarah Johnson (300x300 بكسل، دائرية)
- `client-2.jpg` - Michael Chen (300x300 بكسل، دائرية)
- `client-3.jpg` - Emily Rodriguez (300x300 بكسل، دائرية)

### أيقونة الموقع:
- `favicon.png` - أيقونة الموقع (512x512 بكسل)

> **ملاحظة:** يمكنك استخدام صور مؤقتة من [Unsplash](https://unsplash.com/) أو [Pexels](https://pexels.com/) حتى تحصل على صورك الخاصة.

## 📧 إعداد نموذج الاتصال (EmailJS)

لتفعيل نموذج الاتصال الحقيقي:

### 1. إنشاء حساب EmailJS:
1. اذهب إلى [EmailJS.com](https://www.emailjs.com/)
2. أنشئ حساباً مجانياً (مجاني حتى 200 رسالة/شهر)
3. قم بتأكيد بريدك الإلكتروني

### 2. إعداد الخدمة (Service):
1. اذهب إلى **Email Services**
2. اضغط **Add New Service**
3. اختر Gmail (أو أي مزود آخر)
4. سجّل الدخول بحسابك
5. احفظ **Service ID**

### 3. إنشاء قالب البريد (Template):
1. اذهب إلى **Email Templates**
2. اضغط **Create New Template**
3. استخدم هذا القالب:

```
الموضوع: رسالة جديدة من {{from_name}} عبر Al-Noor Marketing

المحتوى:
من: {{from_name}}
البريد الإلكتروني: {{from_email}}
الهاتف: {{phone}}

الرسالة:
{{message}}
```

4. احفظ **Template ID**

### 4. الحصول على Public Key:
1. اذهب إلى **Account** → **General**
2. انسخ **Public Key**

### 5. تحديث الكود:
افتح ملف `public/js/main.js` وحدّث السطور التالية:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';  // ضع Public Key هنا
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';          // ضع Service ID هنا
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';        // ضع Template ID هنا
```

## 🔥 نشر الموقع على Firebase Hosting

### الخطوة 1: تثبيت Node.js و Firebase CLI

1. **تثبيت Node.js:**
   - حمّل Node.js من [nodejs.org](https://nodejs.org/)
   - ثبّت النسخة LTS (الموصى بها)

2. **تثبيت Firebase CLI:**
   افتح PowerShell أو Command Prompt واكتب:
   ```bash
   npm install -g firebase-tools
   ```

### الخطوة 2: تسجيل الدخول إلى Firebase

```bash
firebase login
```
سيفتح متصفح الويب - سجّل الدخول بحساب Google الخاص بك.

### الخطوة 3: إنشاء مشروع Firebase

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. اضغط **Add Project** (إضافة مشروع)
3. أدخل اسم المشروع مثل: `alnoor-marketing`
4. اتبع الخطوات حتى يتم إنشاء المشروع

### الخطوة 4: ربط المشروع المحلي مع Firebase

في مجلد المشروع، افتح PowerShell واكتب:

```bash
firebase init hosting
```

اختر:
- ✔ **Use an existing project** ثم اختر المشروع الذي أنشأته
- ✔ **What do you want to use as your public directory?** → اكتب: `public`
- ✔ **Configure as a single-page app?** → `Yes`
- ✔ **Set up automatic builds?** → `No`
- ✔ **File public/index.html already exists. Overwrite?** → `No`

### الخطوة 5: نشر الموقع

```bash
firebase deploy
```

بعد الانتهاء، سيعطيك رابط الموقع مثل:
```
✔ Deploy complete!

Hosting URL: https://alnoor-marketing.web.app
```

## 🎨 تخصيص الموقع

### تغيير الألوان:
افتح `public/css/style.css` وعدّل المتغيرات في البداية:

```css
:root {
    --primary-color: #6366f1;      /* اللون الأساسي */
    --secondary-color: #8b5cf6;    /* اللون الثانوي */
    --accent-color: #ec4899;       /* لون التمييز */
}
```

### تحديث المحتوى:
- افتح `public/index.html`
- ابحث عن النصوص وقم بتعديلها حسب احتياجك

### إضافة روابط وسائل التواصل الاجتماعي:
ابحث عن `social-links` في `index.html` وحدّث الروابط:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/YOUR_PROFILE" class="social-link">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <!-- ... -->
</div>
```

## 🔧 تحديث الموقع بعد النشر

بعد أي تعديلات على الموقع:

```bash
firebase deploy
```

سيتم تحديث الموقع المباشر تلقائياً!

## 📱 اختبار الموقع محلياً

قبل النشر، يمكنك اختبار الموقع على جهازك:

```bash
firebase serve
```

ثم افتح المتصفح على: `http://localhost:5000`

## 🌐 دومين مخصص (اختياري)

لربط دومينك الخاص:

1. اذهب إلى Firebase Console → Hosting
2. اضغط **Add Custom Domain**
3. اتبع التعليمات لإضافة سجلات DNS

## 📊 Analytics (اختياري)

لإضافة Google Analytics:

1. في Firebase Console → Analytics
2. فعّل Analytics
3. انسخ كود التتبع
4. أضفه في `<head>` في `index.html`

## 🆘 المساعدة والدعم

### مشاكل شائعة:

**المشكلة:** `firebase: command not found`
- **الحل:** تأكد من تثبيت Firebase CLI بشكل صحيح: `npm install -g firebase-tools`

**المشكلة:** الصور لا تظهر
- **الحل:** تأكد من وضع الصور في `public/images/` وأن أسماء الملفات صحيحة

**المشكلة:** نموذج الاتصال لا يعمل
- **الحل:** تأكد من إعداد EmailJS بشكل صحيح وتحديث المفاتيح في `main.js`

## 📞 معلومات الاتصال

- **البريد الإلكتروني:** diaaeddin.me@gmail.com
- **الهاتف:** +31 84 072 7095
- **الموقع:** [سيكون هنا رابط Firebase الخاص بك]

## 📝 الترخيص

© 2025 Al-Noor Marketing by Diaaeddin. All rights reserved.

---

## ✅ قائمة المراجعة قبل النشر

- [ ] إضافة جميع الصور في مجلد `images/`
- [ ] تحديث معلومات EmailJS في `main.js`
- [ ] تحديث روابط وسائل التواصل الاجتماعي
- [ ] اختبار الموقع محلياً بـ `firebase serve`
- [ ] مراجعة جميع النصوص والمحتوى
- [ ] تحسين الصور (ضغطها لتقليل الحجم)
- [ ] نشر الموقع بـ `firebase deploy`
- [ ] اختبار الموقع المباشر على أجهزة مختلفة

---

**🎉 مبروك! موقعك جاهز للنشر!**

إذا كنت بحاجة لأي مساعدة، لا تتردد في التواصل معي.

**Built with ❤️ by Diaaeddin**
