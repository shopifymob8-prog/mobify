// ================================================================
// كود Google Apps Script — يُنسخ في Script Editor
// Extensions > Apps Script > احذف كل شيء > الصق هذا > Save > Deploy
// ================================================================

function doGet(e) {
  try {
    var sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getActiveSheet();

    // استخراج البيانات من URL parameters
    var name    = e.parameter.name    || '';
    var phone   = e.parameter.phone   || '';
    var city    = e.parameter.city    || '';
    var address = e.parameter.address || '';
    var product = e.parameter.product || '';

    // إضافة صف جديد — الترتيب: التاريخ، الاسم، الهاتف، المدينة، العنوان، المنتج
    sheet.appendRow([
      new Date(),   // تاريخ الطلب تلقائي
      name,
      phone,
      city,
      address,
      product
    ]);

    // رد بالنجاح (لا يظهر للمستخدم بسبب no-cors لكن مفيد للاختبار)
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'OK', message: 'Order saved' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ERROR', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ================================================================
// خطوات النشر (Deploy) — مهمة جداً:
// 1. Extensions > Apps Script
// 2. احذف كل شيء والصق الكود أعلاه
// 3. اضغط Save (💾)
// 4. اضغط Deploy > New Deployment
// 5. اختر Type: Web App
// 6. Execute as: Me
// 7. Who has access: Anyone  ← مهم جداً
// 8. اضغط Deploy
// 9. انسخ الـ URL الجديد وضعه في SHEET_URL بـ index.html
// ================================================================

// ================================================================
// اسماء الأعمدة في Google Sheet:
// A: Date | B: name | C: phone | D: city | E: address | F: product
// ================================================================
