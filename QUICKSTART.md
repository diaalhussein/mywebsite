# 🚀 دليل البدء السريع

## خطوات النشر على Firebase (مختصرة)

### 1️⃣ التحضير
```powershell
# تثبيت Firebase CLI (مرة واحدة فقط)
npm install -g firebase-tools

# تسجيل الدخول
firebase login
```

### 2️⃣ إعداد المشروع
1. اذهب إلى: https://console.firebase.google.com/
2. اضغط "Add Project" وأنشئ مشروعاً جديداً
3. في مجلد المشروع، اكتب:

```powershell
firebase init hosting
```

اختر:
- Use an existing project → اختر مشروعك
- Public directory → `public`
- Single-page app → `Yes`
- Overwrite index.html → `No`

### 3️⃣ النشر
```powershell
firebase deploy
```

✅ تم! موقعك أصبح مباشراً على:
`https://your-project-id.web.app`

---

## 📧 إعداد نموذج الاتصال

### 1. إنشاء حساب EmailJS
- اذهب إلى: https://www.emailjs.com/
- أنشئ حساباً مجانياً

### 2. إعداد الخدمة
- Email Services → Add New Service
- اختر Gmail → سجل الدخول
- احفظ Service ID

### 3. إنشاء قالب
- Email Templates → Create New Template
- احفظ Template ID

### 4. تحديث الكود
في `public/js/main.js`:
```javascript
const EMAILJS_PUBLIC_KEY = 'ضع_مفتاحك_هنا';
const EMAILJS_SERVICE_ID = 'ضع_service_id_هنا';
const EMAILJS_TEMPLATE_ID = 'ضع_template_id_هنا';
```

---

## 🖼️ إضافة الصور

ضع صورك في `public/images/` بالأسماء التالية:

**مطلوب:**
- `diaaeddin.jpg` - صورتك الشخصية
- `project-1.jpg` إلى `project-4.jpg` - صور المشاريع
- `client-1.jpg` إلى `client-3.jpg` - صور العملاء
- `favicon.png` - أيقونة الموقع

**مصادر للصور المؤقتة:**
- https://unsplash.com/
- https://pexels.com/

---

## 🔄 تحديث الموقع

بعد أي تعديل:
```powershell
firebase deploy
```

---

## 🧪 اختبار محلي

```powershell
firebase serve
```
ثم افتح: http://localhost:5000

---

## 🎨 التخصيص السريع

### تغيير الألوان
في `public/css/style.css` السطور 1-10

### تغيير المحتوى
في `public/index.html` - ابحث وعدّل النصوص

### إضافة روابط السوشيال ميديا
في `public/index.html` - ابحث عن `social-links`

---

## ❓ مشاكل شائعة

**المشكلة:** `firebase: command not found`
**الحل:** أعد تثبيت: `npm install -g firebase-tools`

**المشكلة:** الصور لا تظهر
**الحل:** تأكد من الأسماء الصحيحة في مجلد `images/`

**المشكلة:** نموذج الاتصال لا يعمل
**الحل:** تأكد من إعداد EmailJS وتحديث المفاتيح

---

## 📞 للمساعدة
📧 diaaeddin.me@gmail.com
📱 +31 84 072 7095

---

✅ **قائمة المراجعة:**
- [ ] إضافة الصور
- [ ] إعداد EmailJS
- [ ] تحديث روابط السوشيال ميديا
- [ ] اختبار محلي
- [ ] نشر على Firebase

**مبروك! 🎉 موقعك جاهز!**
