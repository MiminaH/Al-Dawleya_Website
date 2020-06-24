// jshint esversion:6

/* Get from Hossam:
  - website domain.
  - map location.
  - their pictures / link to facebook page.
  - content in different the required languages.

  To-Do:
  - multiple languages (change in logo too).
*/

// NAVBAR -------------------------------------
/* Toggle between showing/hiding the navigation menu when hamburger menu is clicked */
function menuClick() {
  const x = $('.navlinks_subcontainer');

// checking z-index to apply below for mobile screens only.
  if (x.css('z-index') == '1'){
    if (x.css('display') == 'flex') {
      x.css('display', 'none');
    } else {
      x.css('display', 'flex');
    }
  }
}

// Language Menu Toggle
function langMenuToggle() {
  const menu = $('.language_menu');

  if (menu.css('display') == 'none') {
    menu.css('display', 'block');
  } else {
    menu.css('display', 'none');
  }
}


// OUR SERVICES SECTION -------------------------------------
const services = [{
    "service": "إنهاء إجراءات تسجيل عقود البيع الإبتدائية بالشهر العقاري وإستخراج العقد النهائي",
    "icon": "images\\icons\\rental-house-contract icon.png",
    "details": ["ملكية العقارات والأراضى للأجانب فى مصر.",
      "الملكية فقط لعقارين كحد اقصى فى مصر لأستخدمها كسكن خاص له ولأسرته دون تصرف فى الحق فى امتلاك عقر لممارسة نشاط خاص مرخص من قبيل السلطات المصرية المختصة",
      "نظم القانون المصرى رقم 320 لسنة 1996 ملكية الأجانب للأراضى والعقارات للأشخاص الطبيعيين والأشخاص الأعتباريين المادة رقم 2 من القانون رقم 320 لسنة 1996 توضح جميع شروط التملك كما يلى :",
      "١- الملكية فقط لعقارين كحد اقصى فى مصر لأستخدمها كسكن خاص له ولأسرته دون تصرف فى الحق فى امتلاك عقر لممارسة نشاط خاص مرخص من قبيل السلطات المصرية المختصة.",
      "٢- أن لا تزيد مساحة كل عقار عن أربعة ألاف متر.",
      "٣- لا يجوز اعتبار العقار من العقارات الأثرية فى قانون جماية الأثار.",
      "المادة رقم 3 للمقرات الدبلوماسية والقنصلية فى مصر.",
      "المادة رقم 4 على الأجانب الذين يملكون اراضى بموجب هذا القانون البدء فى البناء فى مدة لا تتجاوز الخمس سنوات التالية من تسجيل العقد اذا كانت هذه الفترة دون البدء فى اعمال البناء فتزداد مدة الحظر بالتساوى الى فترة التأخير فى البناء كما هو موضح فى القالة التالية.",
      "المادة رقم 5 لا يجوز للأجنبى الذى يمتلك عقارات بموجب هذا القانون التصرف فيها بأى تصرف قانونى قبل أنقضاء خمس سنوات من تاريخ أكتساب الملكية.",
      "يجوز لرئيس مجلس الوزراء فى الأحوال التى يقودها منح الأذن بالتصرف فى الممتلكات قبل أنقضاء هذه المدة.",
    ]
  },
  {
    "service": "صياغة جميع العقود بأنواعها",
    "icon": "images\\icons\\agreement icon.png",
    "details": ["العقد المبرم بناء على نصيحة محام محترف هو ضمان سلامتك للمستقبل حيث سيتحقق المحامى من جميع المستندات ويعطيك كل المعلومات التى تحتاجها والتى ستكون تجت مسئوليته بالتوقيع والختم من مكتبه.",
      "(بيع – شراء – عقود عقارات وسيارات وتجارية)"
    ]
  },
  {
    "service": "إستخراج جميع أنواع التأشيرات لللأجانب",
    "icon": "images\\icons\\travel-visa icon.png",
    "details": ["يجوز منح الأجانب إقامة مؤقتة لغير السياحة لمدة خمس سنوات قابلة للتجديد للأولئيك الذين يمتلكون عقارآ واحدآ أو أكثر بحد أدنى 400 الأف دولار ويمكن منح الأجانب إقامة مؤقتة لغير السياحة مدة ثلاث سنوات قابلة للتجديد لمن يملك عقارآ أو أكثر على الأقل 200 ألف دولار.ة"]
  },
  {
    "service": "إنهاء إجراءات زواج الأجانب فى مصر وصياغة العقود الزوجية العرفية وجعلها فى السند القانونى والنفاذ",
    "icon": "images\\icons\\wedding icon.png",
    "details": ["المستندات المطلوبة لأتمام عقد الزواج :",
      "بالنسبة للزوجة :جواز سفر سارى لمدة لا تقل عن ستة أشهر وأقامة سارية مع شهادة صحية من أى مستشفى حكومى مع8 صور شخصية و شهادة عدم ممانعة من سفارة البلد التابع لها الزوجة ببيان الحالة الأجتماعية والديانة.", "بالنسبة للزوج: أصل البطاقة الشخصية وصورة ضوئية منها مع شهادة صحية من أى مستشفى حكومى مع قيد فردى ببيان الحالة الأجتماعية", "شروط حصول الأجنبية المتزوجة مصرى على الجنسية المصرية :", "تكتسب الزوجة الأجنبية الجنسية المصرية بعد مضى سنتين من العلاقة الزوجية بشرط عدم أنتهاء العلاقة الزوجية عند تقديم طلب الحصول على الجنسية.", "المستندات المطلوبة هى :عقد الزواج وشهادة ميلاد الزوج وشهادة ميلاد والده وعدد 4 صور حديثة للزوج وللزوجة وصورة من جواز سفر الزوجة وقيد عائلى للزوج."
    ]
  },
  {
    "service": "تأسيس شركات بجميع أنواعها تضامن وتوصية مساهة",
    "icon": "images\\icons\\new-company icon.png",
    "details": ["من أهم الخدمات التى نقوم بها هى خدمة تأسيس الشركات الجديدةوالقيام بالخدمات القانونية لتلك الشركات من إجراءات تأسيس وكل ما يتعلق بالمسائل القانونية المتعلقة بهذه الشركة من خلال الوكالة القانونية لها حيث نقوم بالمساعدة القانونية للمصريين والأجانب والكيانات التجارية للقيام بتأسيس قيام نشطاطهم قانونآ ومساعداتهم فى أختيار الشكل القانونى لشركاتهم المناسب لنشاطهم طبقآ للقانون المصرى حيث أنه لدينا خبرة كبيرة فى تأسيس الشركات فى أسرع وقت وبأعلى دقة وكفاءة بالأضافة لذلك نقوم بتقديم خدمة فتح فروع للشركات الأجنبية فى مصر وهى خدمة شديدة الصلة بتأسيس الشركات."]
  },
  {
    "service": "إيجاد جميع أنواع الحلول لأنهاء زواج الأجانب فى مصر وإستخراج قسيمة الطلاق",
    "icon": "images\\icons\\divorce-rings icon.png",
    "details": [""]
  }
];


function serviceTemplate(service) {
  let p = "";

  service.details.forEach((detail) => {
    p += `<p>${detail}</p>`;
  });

  return `<div class="service_card collapsible">
    <div class="service_name_icon_row">
    <img class="service_icon" src="${service.icon}" alt="">
    <h3>${service.service}</h3>
    </div>
    <div class="service_details">
      ${p}
      </div>
    </div>`;
}


$(".services_cards").html(`${services.map(serviceTemplate).join("")}`);


// making Service Cards collapsible
let coll = document.getElementsByClassName("collapsible");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active_card");
    let content = this.querySelector('.service_details');
    // collapsing card
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
