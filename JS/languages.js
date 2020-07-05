// jshint esversion:6

const languages = {
  ar: {
    language: "ar",
    flagURL: "images/flags/Egyptian.png",
    title: "الدولية للمحاماة",
    logo: "الدولية",
    home: "الرئيسية",
    aboutUs: "من نحن",
    ourService: "خدماتنا",
    contactUs: "تواصل معنا",
    headingTitle: "الدولية للمحاماة والإستشارات القانونية",
    personalBio: "السيرة الذاتية:",
    personalBioText: "المحاميان بالإستئناف الأعلى ومجلس الدولة.",
    profBio: "السيرة المهنية:",
    profBioText: "عضو إتحاد المحاميين العرب لدى المحاكم الجنائية والمدنية والعسكرية ومحاكم الأسرة.",
    hossamName: "حسام فؤاد أحمد عبد الوهاب",
    aliName: "على إبراهيم الجندي",
    services: [{
        service: "إنهاء إجراءات تسجيل عقود البيع الإبتدائية بالشهر العقاري وإستخراج العقد النهائي",
        icon: "images\\icons\\rental-house-contract icon.png",
        details: ["ملكية العقارات والأراضى للأجانب فى مصر.",
          "الملكية فقط لعقارين كحد اقصى فى مصر لأستخدمها كسكن خاص له ولأسرته دون تصرف فى الحق فى امتلاك عقر لممارسة نشاط خاص مرخص من قبيل السلطات المصرية المختصة.",
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
        service: "صياغة جميع العقود بأنواعها",
        icon: "images\\icons\\agreement icon.png",
        details: ["العقد المبرم بناء على نصيحة محام محترف هو ضمان سلامتك للمستقبل حيث سيتحقق المحامى من جميع المستندات ويعطيك كل المعلومات التى تحتاجها والتى ستكون تجت مسئوليته بالتوقيع والختم من مكتبه.",
          "(بيع – شراء – عقود عقارات وسيارات وتجارية)"
        ]
      },
      {
        service: "إستخراج جميع أنواع التأشيرات لللأجانب",
        icon: "images\\icons\\travel-visa icon.png",
        details: ["يجوز منح الأجانب إقامة مؤقتة لغير السياحة لمدة خمس سنوات قابلة للتجديد للأولئيك الذين يمتلكون عقارآ واحدآ أو أكثر بحد أدنى 400 الأف دولار ويمكن منح الأجانب إقامة مؤقتة لغير السياحة مدة ثلاث سنوات قابلة للتجديد لمن يملك عقارآ أو أكثر على الأقل 200 ألف دولار."]
      },
      {
        service: "إنهاء إجراءات زواج الأجانب فى مصر وصياغة العقود الزوجية العرفية وجعلها فى السند القانونى والنفاذ",
        icon: "images\\icons\\wedding icon.png",
        details: ["المستندات المطلوبة لأتمام عقد الزواج :",
          "- بالنسبة للزوجة : جواز سفر سارى لمدة لا تقل عن ستة أشهر وإقامة سارية مع شهادة صحية من أى مستشفى حكومى مع 8 صور شخصية و شهادة عدم ممانعة من سفارة البلد التابع لها الزوجة ببيان الحالة الأجتماعية والديانة.",
          "- بالنسبة للزوج: أصل البطاقة الشخصية وصورة ضوئية منها مع شهادة صحية من أى مستشفى حكومى مع قيد فردى ببيان الحالة الأجتماعية.",
          "شروط حصول الأجنبية المتزوجة مصرى على الجنسية المصرية :",
          "- تكتسب الزوجة الأجنبية الجنسية المصرية بعد مضى سنتين من العلاقة الزوجية بشرط عدم انتهاء العلاقة الزوجية عند تقديم طلب الحصول على الجنسية.",
          "المستندات المطلوبة هى:",
          "- عقد الزواج وشهادة ميلاد الزوج وشهادة ميلاد والده وعدد 4 صور حديثة للزوج والزوجة وصورة من جواز سفر الزوجة وقيد عائلى للزوج.",
        ]
      },
      {
        service: "تأسيس شركات بجميع أنواعها تضامن وتوصية مساهة",
        icon: "images\\icons\\new-company icon.png",
        details: ["من أهم الخدمات التى نقوم بها هى خدمة تأسيس الشركات الجديدةوالقيام بالخدمات القانونية لتلك الشركات من إجراءات تأسيس وكل ما يتعلق بالمسائل القانونية المتعلقة بهذه الشركة من خلال الوكالة القانونية لها حيث نقوم بالمساعدة القانونية للمصريين والأجانب والكيانات التجارية للقيام بتأسيس قيام نشطاطهم قانونآ ومساعداتهم فى أختيار الشكل القانونى لشركاتهم المناسب لنشاطهم طبقآ للقانون المصرى حيث أنه لدينا خبرة كبيرة فى تأسيس الشركات فى أسرع وقت وبأعلى دقة وكفاءة بالأضافة لذلك نقوم بتقديم خدمة فتح فروع للشركات الأجنبية فى مصر وهى خدمة شديدة الصلة بتأسيس الشركات."]
      },
      {
        service: "إيجاد جميع أنواع الحلول لأنهاء زواج الأجانب فى مصر وإستخراج قسيمة الطلاق",
        icon: "images\\icons\\divorce-rings icon.png",
        details: [""]
      }
    ],
    phoneOne: "٠١٠٠٤٣٥١٧٥٧",
    phoneTwo: "٠١٠٠٣٩٢١٠٢٠",
    address: "شارع الشيراتون, الغردقة البحر الأحمر, مصر"
  },
  en: {
    language: "en",
    flagURL: "images/flags/British.png",
    title: "Hurghada Lawyers",
    logo: "Al-Dawleya",
    home: "Home",
    aboutUs: "About us",
    ourService: "Our Services",
    contactUs: "Contact Us",
    headingTitle: "Al-Dawleya for Law and Legal Consultations",
    personalBio: "Persona Bio:",
    personalBioText: "Two attorneys at the supreme appellate and the state council.",
    profBio: "Professional Bio:",
    profBioText: "Member of the Union of Arab Lawyers at the criminal, civil, military, and family courts.",
    hossamName: "Hossam Fouad Ahmed Abdel-Wahab",
    aliName: "Ali Ibrahim Al-Gindi",
    services: [{
        service: "Register sales contracts and finalize all legal & official procedures.",
        icon: "images\\icons\\rental-house-contract icon.png",
        details: ["Ownership of real estate and land by foreigners in Egypt:",
          "Foreigners are allowed to own a maximum of two properties in Egypt, strictly to be only used as a private residence for themselves and their family. Otherwise, it is not allowed to utilize owned properties towards any private activity licensed by the competent Egyptian authorities.",
          "The Egyptian law no. 320 of the year 1996 regulates the ownership of lands and real estate by foreigners for ordinary and legal people and Article no. 2 of Law no. 320 of the year 1996 clarifies all the terms of ownership as follows:",
          "1- Ownership of only a maximum of two properties in Egypt to be used as a private residence for him and his family without disposing the right to own a property to carry out any private activity licensed by the competent Egyptian authorities.",
          "2- The area of each property can not exceed four thousand meters.",
          "3- The property may not be considered an antique by the Antiquities Protection Law.",
          "Article no. 3: of diplomatic and consular headquarters in Egypt.",
          "Article no. 4: Foreigners who own land under this law must start construction within a period that does not exceed the five years since the contract was registered. If this period passed without starting construction work, then the duration of the prohibition increases equally to the period of construction delay, as shown in the following article.",
          "Article no. 5: A foreigner who owns real estate in accordance with this law is not permitted to sell or take any legal action with it before the lapse of five years from the date of acquisition of the property.",
          "The Head of Council of Ministers may, in the cases he leads, grant permission to sell the property before this period has elapsed."
        ]
      },
      {
        service: "Drafting all kinds of contracts.",
        icon: "images\\icons\\agreement icon.png",
        details: ["The contract concluded on the advice of a professional lawyer ensures your safety in the future, as the lawyer will give you all the information you need and verify all documents, which will be signed and sealed by his office.",
          "(Sale - purchase - real estate, car and commercial contracts)"
        ]
      },
      {
        service: "Obtaining all types of visas for foreigners.",
        icon: "images\\icons\\travel-visa icon.png",
        details: ["Foreigners may be granted temporary residence other than tourism for a period of five years, renewable for those who own one or more properties with a minimum of 400,000 dollars. Foreigners may be granted temporary residence other than tourism for a period of three years renewable for those who own real estate or more at least 200,000 dollars."]
      },
      {
        service: "Finalize procedures for marrying foreigners in Egypt, drafting customary marital contracts, legalizing and enforcing them.",
        icon: "images\\icons\\wedding icon.png",
        details: ["Documents required to complete the marriage contract:",
          "For the wife: a passport valid for a period no less than six months and a valid residence with a health certificate from any government hospital with 8 personal photos and a no-objection certificate from the embassy of the country to which the wife is affiliated with a statement of marital status and religion.",
          "For the husband: original ID and a photocopy thereof, along with a health certificate from any government hospital, with a registration statement of marital status.",
          "Conditions for a foreigner, who’s married to an Egyptian, to obtain Egyptian citizenship:",
          "The foreign wife acquires the Egyptian nationality after two years from the marital relationship, provided that the marital relationship does not end when applying for citizenship.",
          "Required documents: marriage contract, husband’s birth certificate, his father’s birth certificate, 4 recent photographs of the husband and wife, and a copy of the wife’s passport and a family registration of the husband."
        ]
      },
      {
        service: "Establishment of all kind of companies, solidarity and joint stock recommendation.",
        icon: "images\\icons\\new-company icon.png",
        details: ["One of the most important services that we do is the service of establishing new companies and doing legal services for these companies ranging from the establishment procedures and all legal related issues of the company, to its legal agency. For that we offer legal assistance for Egyptians and foreigners and commercial entities to establish their activity legally and help them choose the legal form for their companies that correspond to their activities in accordance with the Egyptian law.",
          "We have great experience in establishing companies in the fastest time and with the highest accuracy and efficiency.",
          "In addition to that we also provide services to open branches of foreign companies in Egypt, a service closely related to the establishment of companies."
        ]
      },
      {
        service: "Find all kinds of solutions to end the marriage to foreigners in Egypt and obtain final legal divorce papers.",
        icon: "images\\icons\\divorce-rings icon.png",
        details: [""]
      }
    ],
    phoneOne: "+2 010 0435 1757",
    phoneTwo: "+2 010 0392 1020",
    address: "Sheraton Street, Hurghada Red Sea, Egypt."
  },
  de: {
    language: "de",
    flagURL: "images/flags/German.png",
    title: "",
    logo: "",
    home: "",
    aboutUs: "",
    ourService: "",
    contactUs: "",
    headingTitle: "",
    personalBio: "",
    personalBioText: "",
    profBio: "",
    profBioText: "",
    hossamName: "Hossam Fouad Ahmed Abdel-Wahab",
    aliName: "Ali Ibrahim Al-Gindi",
    services: [{
        service: "",
        icon: "images\\icons\\rental-house-contract icon.png",
        details: [""]
      },
      {
        service: "",
        icon: "images\\icons\\agreement icon.png",
        details: [""]
      },
      {
        service: "",
        icon: "images\\icons\\travel-visa icon.png",
        details: [""]
      },
      {
        service: "",
        icon: "images\\icons\\wedding icon.png",
        details: [""]
      },
      {
        service: "",
        icon: "images\\icons\\new-company icon.png",
        details: [""]
      },
      {
        service: "",
        icon: "images\\icons\\divorce-rings icon.png",
        details: [""]
      }
    ],
    phoneOne: "+2 010 0435 1757",
    phoneTwo: "+2 010 0392 1020",
    address: "Sheraton Street, Hurghada Red Sea, Egypt."
  }
};
