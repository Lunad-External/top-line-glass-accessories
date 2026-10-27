(function () {
  if (window.SahroI18n) return;
  const KEY = "sahro_lang";
  let lang = "ar";
  try { lang = localStorage.getItem(KEY) || "ar"; } catch (e) {}
  if (!["en", "ar", "bn"].includes(lang)) lang = "ar";
  const I = { ar: 0, bn: 1 };

  // English → [Arabic, Bangla]
  const D = {
    "Top Line Glass Products Accessories": ["توب لاين لمنتجات وإكسسوارات الزجاج", "টপ লাইন গ্লাস প্রোডাক্টস অ্যাক্সেসরিজ"],
    "Manufacturer · Riyadh": ["مُصنِّع · الرياض", "প্রস্তুতকারক · রিয়াদ"],
    "Home": ["الرئيسية", "হোম"],
    "About Us": ["من نحن", "আমাদের সম্পর্কে"],
    "Products": ["المنتجات", "পণ্যসমূহ"],
    "Catalogues": ["الكتالوجات", "ক্যাটালগ"],
    "Projects": ["المشاريع", "প্রকল্পসমূহ"],
    "Contact Us": ["اتصل بنا", "যোগাযোগ করুন"],
    "Send Enquiry": ["أرسل استفسارك", "জিজ্ঞাসা পাঠান"],
    "Change language": ["تغيير اللغة", "ভাষা পরিবর্তন"],
    "Toggle menu": ["القائمة", "মেনু"],
    "Glass Door Accessories": ["إكسسوارات الأبواب الزجاجية", "কাচের দরজার আনুষাঙ্গিক"],
    "Shower Enclosure Accessories": ["إكسسوارات كبائن الاستحمام", "শাওয়ার এনক্লোজার আনুষাঙ্গিক"],
    "Handrail Accessories": ["إكسسوارات الدرابزين", "হ্যান্ডরেইল আনুষাঙ্গিক"],
    "Automatic Door Accessories": ["إكسسوارات الأبواب الأوتوماتيكية", "স্বয়ংক্রিয় দরজার আনুষাঙ্গিক"],
    "Curtain Accessories": ["إكسسوارات الستائر", "পর্দার আনুষাঙ্গিক"],
    "Metal Channels": ["القنوات المعدنية", "মেটাল চ্যানেল"],

    "Premium glass door control systems, bathroom accessories, and door & window hardware for the Middle East.": ["أنظمة تحكم فاخرة للأبواب الزجاجية وإكسسوارات الحمامات ومستلزمات الأبواب والنوافذ للشرق الأوسط.", "মধ্যপ্রাচ্যের জন্য প্রিমিয়াম কাচের দরজা নিয়ন্ত্রণ ব্যবস্থা, বাথরুম আনুষাঙ্গিক এবং দরজা ও জানালার হার্ডওয়্যার।"],
    "Explore": ["استكشف", "ঘুরে দেখুন"],
    "Categories": ["الفئات", "বিভাগসমূহ"],
    "Get in touch": ["تواصل معنا", "যোগাযোগ করুন"],
    "Top Line Glass Products Accessories. All rights reserved.": ["توب لاين لمنتجات وإكسسوارات الزجاج. جميع الحقوق محفوظة.", "টপ লাইন গ্লাস প্রোডাক্টস অ্যাক্সেসরিজ। সর্বস্বত্ব সংরক্ষিত।"],
    "Admin Panel": ["لوحة الإدارة", "অ্যাডমিন প্যানেল"],
    "Manufacturer · Exporter · KSA": ["مُصنِّع · مُصدِّر · المملكة العربية السعودية", "প্রস্তুতকারক · রপ্তানিকারক · সৌদি আরব"],
    "Chat on WhatsApp": ["تحدث معنا عبر واتساب", "হোয়াটসঅ্যাপে চ্যাট করুন"],
    "· Riyadh, KSA": ["· الرياض، المملكة العربية السعودية", "· রিয়াদ, সৌদি আরব"],

    "Explore Products": ["تصفح المنتجات", "পণ্য দেখুন"],
    "Send Enquiry on WhatsApp": ["أرسل استفسارك عبر واتساب", "হোয়াটসঅ্যাপে জিজ্ঞাসা পাঠান"],
    "Previous slide": ["الشريحة السابقة", "আগের স্লাইড"],
    "Next slide": ["الشريحة التالية", "পরের স্লাইড"],
    "Bathroom Accessories": ["إكسسوارات الحمامات", "বাথরুম আনুষাঙ্গিক"],
    "Premium bathroom hardware, crafted for modern living.": ["مستلزمات حمامات فاخرة، مصممة للحياة العصرية.", "আধুনিক জীবনের জন্য তৈরি প্রিমিয়াম বাথরুম হার্ডওয়্যার।"],
    "Chrome-finished towel rails, glass shelves, holders and connectors engineered to last.": ["حوامل مناشف بلمسة كروم ورفوف زجاجية وحوامل ووصلات مصممة لتدوم طويلاً.", "দীর্ঘস্থায়ী করে তৈরি ক্রোম-ফিনিশ তোয়ালে রেল, কাচের তাক, হোল্ডার ও সংযোগকারী।"],
    "Glass door hardware, engineered in-house.": ["مستلزمات الأبواب الزجاجية، مصممة ومصنعة لدينا.", "নিজস্ব কারখানায় তৈরি কাচের দরজার হার্ডওয়্যার।"],
    "Hinges, patch fittings, clamps and locks for frameless glass door systems.": ["مفصلات وتجهيزات تثبيت ومشابك وأقفال لأنظمة الأبواب الزجاجية بدون إطار.", "ফ্রেমবিহীন কাচের দরজার জন্য কবজা, প্যাচ ফিটিং, ক্ল্যাম্প ও তালা।"],
    "Automatic Sliding Doors": ["الأبواب المنزلقة الأوتوماتيكية", "স্বয়ংক্রিয় স্লাইডিং দরজা"],
    "Automatic sliding door systems for commercial entrances.": ["أنظمة أبواب منزلقة أوتوماتيكية للمداخل التجارية.", "বাণিজ্যিক প্রবেশপথের জন্য স্বয়ংক্রিয় স্লাইডিং দরজা ব্যবস্থা।"],
    "Smooth, reliable operation with sensors, tracks and premium mechanisms.": ["تشغيل سلس وموثوق مع حساسات ومسارات وآليات عالية الجودة.", "সেন্সর, ট্র্যাক ও প্রিমিয়াম মেকানিজমসহ মসৃণ ও নির্ভরযোগ্য পরিচালনা।"],
    "Window Accessories": ["إكسسوارات النوافذ", "জানালার আনুষাঙ্গিক"],
    "Window hardware built for the Gulf climate.": ["مستلزمات نوافذ مصممة لمناخ الخليج.", "উপসাগরীয় জলবায়ুর জন্য তৈরি জানালার হার্ডওয়্যার।"],
    "Durable handles, rollers, hinges, locks and multi-point systems for aluminium and uPVC windows.": ["مقابض وبكرات ومفصلات وأقفال وأنظمة قفل متعددة النقاط متينة لنوافذ الألمنيوم وuPVC.", "অ্যালুমিনিয়াম ও uPVC জানালার জন্য টেকসই হাতল, রোলার, কবজা, তালা ও মাল্টি-পয়েন্ট সিস্টেম।"],
    "Hardware Accessories": ["إكسسوارات المعدات", "হার্ডওয়্যার আনুষাঙ্গিক"],
    "The complete range of architectural hardware.": ["المجموعة الكاملة من المستلزمات المعمارية.", "স্থাপত্য হার্ডওয়্যারের সম্পূর্ণ পরিসর।"],
    "Brackets, clamps, screws, bolts, closers and specialist fittings for every installation.": ["حوامل ومشابك ومسامير وبراغي ومغلقات أبواب وتجهيزات متخصصة لكل تركيب.", "প্রতিটি স্থাপনার জন্য ব্র্যাকেট, ক্ল্যাম্প, স্ক্রু, বোল্ট, ক্লোজার ও বিশেষ ফিটিং।"],

    "of factories & showrooms": ["من المصانع وصالات العرض", "কারখানা ও শোরুম"],
    "factories, 2 showrooms": ["مصنعان، وصالتا عرض", "টি কারখানা, ২টি শোরুম"],
    "exported to GCC markets": ["تُصدَّر إلى أسواق الخليج", "উপসাগরীয় বাজারে রপ্তানি"],
    "products in our catalogue": ["منتج في كتالوجنا", "পণ্য আমাদের ক্যাটালগে"],
    "+ sqm": ["+ م²", "+ বর্গমিটার"],

    "Why Choose Us": ["لماذا تختارنا", "কেন আমাদের বেছে নেবেন"],
    "Source factory. Strict quality. One-stop solution.": ["مصنع مباشر. جودة صارمة. حلول متكاملة.", "সরাসরি কারখানা। কঠোর মান। এক জায়গায় সমাধান।"],
    "Source factory": ["مصنع مباشر", "সরাসরি কারখানা"],
    "70% manufactured in-house; 30% sourced from trusted German and Italian partners.": ["70% تُصنَّع في مصانعنا، و30% من شركاء موثوقين في ألمانيا وإيطاليا.", "৭০% নিজস্ব কারখানায় তৈরি; ৩০% বিশ্বস্ত জার্মান ও ইতালীয় অংশীদারদের কাছ থেকে সংগৃহীত।"],
    "Quality control": ["مراقبة الجودة", "মান নিয়ন্ত্রণ"],
    "Automated production lines and rigorous QC for precision, durability and performance.": ["خطوط إنتاج آلية ومراقبة جودة صارمة لضمان الدقة والمتانة والأداء.", "নির্ভুলতা, স্থায়িত্ব ও কার্যক্ষমতার জন্য স্বয়ংক্রিয় উৎপাদন লাইন ও কঠোর মান নিয়ন্ত্রণ।"],
    "Export-ready": ["جاهزون للتصدير", "রপ্তানির জন্য প্রস্তুত"],
    "Servicing Saudi Arabia, UAE, Bahrain, Kuwait and the wider GCC region.": ["نخدم المملكة العربية السعودية والإمارات والبحرين والكويت ودول الخليج كافة.", "সৌদি আরব, সংযুক্ত আরব আমিরাত, বাহরাইন, কুয়েত ও বৃহত্তর উপসাগরীয় অঞ্চলে সেবা প্রদান।"],
    "Learn more about us →": ["اعرف المزيد عنا ←", "আমাদের সম্পর্কে আরও জানুন →"],
    "View details →": ["عرض التفاصيل ←", "বিস্তারিত দেখুন →"],
    "View all": ["عرض الكل", "সব দেখুন"],
    "FAQ": ["الأسئلة الشائعة", "প্রশ্নোত্তর"],
    "Frequently asked questions": ["الأسئلة الشائعة", "সাধারণ জিজ্ঞাসা"],
    "Answers about our glass hardware, materials, finishes and ordering in Saudi Arabia.": ["إجابات حول مستلزمات الزجاج والمواد والتشطيبات وطرق الطلب في المملكة العربية السعودية.", "সৌদি আরবে আমাদের কাচের হার্ডওয়্যার, উপকরণ, ফিনিশ ও অর্ডার সম্পর্কে উত্তর।"],
    "Reviews": ["التقييمات", "রিভিউ"],
    "Read what our customers have to say": ["اقرأ ما يقوله عملاؤنا", "আমাদের গ্রাহকরা কী বলছেন পড়ুন"],
    "Ready to specify the right hardware?": ["هل أنت مستعد لاختيار المستلزمات المناسبة؟", "সঠিক হার্ডওয়্যার বেছে নিতে প্রস্তুত?"],
    "Talk to our team for catalogues, quantity pricing and project consultation.": ["تحدث مع فريقنا للحصول على الكتالوجات وأسعار الكميات واستشارات المشاريع.", "ক্যাটালগ, পরিমাণভিত্তিক মূল্য ও প্রকল্প পরামর্শের জন্য আমাদের দলের সাথে কথা বলুন।"],
    "WhatsApp Enquiry": ["استفسار عبر واتساب", "হোয়াটসঅ্যাপে জিজ্ঞাসা"],

    "Premium glass door accessories for frameless entrances, offices and retail fronts in Saudi Arabia. Explore stainless steel patch fittings, floor springs, pull handles, glass door locks and hinges engineered for tempered glass, smooth daily operation and a clean architectural finish in every project.": ["إكسسوارات فاخرة للأبواب الزجاجية للمداخل بدون إطار والمكاتب وواجهات المحلات في المملكة العربية السعودية. اكتشف تجهيزات التثبيت من الستانلس ستيل والمفصلات الأرضية ومقابض السحب وأقفال الأبواب الزجاجية والمفصلات المصممة للزجاج المقسّى، لتشغيل يومي سلس ولمسة معمارية أنيقة في كل مشروع.", "সৌদি আরবে ফ্রেমবিহীন প্রবেশপথ, অফিস ও দোকানের সামনের জন্য প্রিমিয়াম কাচের দরজার আনুষাঙ্গিক। টেম্পারড কাচের জন্য তৈরি স্টেইনলেস স্টিলের প্যাচ ফিটিং, ফ্লোর স্প্রিং, পুল হ্যান্ডেল, কাচের দরজার তালা ও কবজা দেখুন, যা প্রতিদিন মসৃণ ব্যবহার ও প্রতিটি প্রকল্পে পরিচ্ছন্ন স্থাপত্য ফিনিশ দেয়।"],
    "Shower enclosure accessories for frameless and semi-frameless bathrooms. Choose glass-to-wall hinges, glass clamps, support bars, sliding rollers, knobs and seals made from corrosion-resistant stainless steel and brass, built to stay secure, smooth and polished in humid bathroom conditions.": ["إكسسوارات كبائن الاستحمام للحمامات بدون إطار وشبه المؤطرة. اختر مفصلات الزجاج إلى الجدار ومشابك الزجاج وقضبان الدعم والبكرات المنزلقة والمقابض والعوازل المصنوعة من الستانلس ستيل والنحاس المقاومين للتآكل، لتبقى ثابتة وسلسة ولامعة في أجواء الحمام الرطبة.", "ফ্রেমবিহীন ও আধা-ফ্রেমযুক্ত বাথরুমের জন্য শাওয়ার এনক্লোজার আনুষাঙ্গিক। ক্ষয়রোধী স্টেইনলেস স্টিল ও পিতলের তৈরি কাচ-থেকে-দেয়াল কবজা, কাচের ক্ল্যাম্প, সাপোর্ট বার, স্লাইডিং রোলার, নব ও সিল বেছে নিন, যা আর্দ্র বাথরুমেও মজবুত, মসৃণ ও চকচকে থাকে।"],
    "Handrail accessories for glass balustrades, staircases and balconies. Our range covers stainless steel brackets, end caps, elbows, connectors, standoffs and base fittings that deliver secure, durable railings with a refined finish for residential, hospitality and commercial projects across KSA.": ["إكسسوارات الدرابزين للحواجز الزجاجية والسلالم والشرفات. تشمل مجموعتنا حوامل ونهايات وأكواع ووصلات ومباعدات وقواعد من الستانلس ستيل توفر درابزينات آمنة ومتينة بلمسة راقية للمشاريع السكنية والفندقية والتجارية في جميع أنحاء المملكة.", "কাচের বালুস্ট্রেড, সিঁড়ি ও বারান্দার জন্য হ্যান্ডরেইল আনুষাঙ্গিক। আমাদের পরিসরে রয়েছে স্টেইনলেস স্টিলের ব্র্যাকেট, এন্ড ক্যাপ, এলবো, সংযোগকারী, স্ট্যান্ডঅফ ও বেস ফিটিং, যা সৌদি আরব জুড়ে আবাসিক, আতিথেয়তা ও বাণিজ্যিক প্রকল্পে নিরাপদ, টেকসই ও পরিশীলিত রেলিং দেয়।"],
    "Automatic door accessories for commercial entrances, malls, hospitals and hotels. Discover SAHRO sliding door operators, motor units, controllers, belts, pulleys and hanging wheels built for quiet, reliable and efficient performance under heavy daily traffic in the demanding Gulf climate.": ["إكسسوارات الأبواب الأوتوماتيكية للمداخل التجارية والمراكز التجارية والمستشفيات والفنادق. اكتشف مشغلات الأبواب المنزلقة SAHRO ووحدات المحركات وأجهزة التحكم والسيور والبكرات وعجلات التعليق المصممة لأداء هادئ وموثوق وفعّال مع الحركة اليومية الكثيفة في مناخ الخليج.", "বাণিজ্যিক প্রবেশপথ, শপিং মল, হাসপাতাল ও হোটেলের জন্য স্বয়ংক্রিয় দরজার আনুষাঙ্গিক। কঠিন উপসাগরীয় জলবায়ুতে প্রতিদিনের ভারী চলাচলে নিঃশব্দ, নির্ভরযোগ্য ও দক্ষ কার্যক্ষমতার জন্য তৈরি SAHRO স্লাইডিং দরজা অপারেটর, মোটর ইউনিট, কন্ট্রোলার, বেল্ট, পুলি ও হ্যাঙ্গিং হুইল দেখুন।"],
    "Curtain accessories that combine smooth operation with a premium look. Browse curtain tracks, brackets, gliders, end stops and fittings in durable materials, suited to villas, hotels and offices that need quiet, dependable curtain systems with a clean, refined finish in every room and space.": ["إكسسوارات ستائر تجمع بين التشغيل السلس والمظهر الفاخر. تصفح مسارات الستائر والحوامل والمنزلقات والمصدات والتجهيزات المصنوعة من مواد متينة، المناسبة للفلل والفنادق والمكاتب التي تحتاج إلى أنظمة ستائر هادئة وموثوقة بلمسة أنيقة في كل غرفة ومساحة.", "মসৃণ পরিচালনা ও প্রিমিয়াম চেহারার সমন্বয়ে পর্দার আনুষাঙ্গিক। টেকসই উপকরণে তৈরি পর্দার ট্র্যাক, ব্র্যাকেট, গ্লাইডার, এন্ড স্টপ ও ফিটিং দেখুন, যা প্রতিটি ঘর ও স্থানে নিঃশব্দ, নির্ভরযোগ্য ও পরিচ্ছন্ন পর্দা ব্যবস্থা চাওয়া ভিলা, হোটেল ও অফিসের জন্য উপযুক্ত।"],
    "Metal channels for secure and elegant glass installation. Our stainless steel U-channel profiles and L-corner trims hold glass panels firmly, protect exposed edges and give partitions, shower screens and balustrades a precise, clean finish, available in several sizes for different glass thicknesses.": ["قنوات معدنية لتركيب زجاج آمن وأنيق. تثبت قطاعات القناة U وزوايا L من الستانلس ستيل ألواح الزجاج بإحكام، وتحمي الحواف المكشوفة، وتمنح القواطع وحواجز الاستحمام والدرابزينات تشطيباً دقيقاً ونظيفاً، وتتوفر بعدة مقاسات لسماكات الزجاج المختلفة.", "নিরাপদ ও মার্জিত কাচ স্থাপনের জন্য মেটাল চ্যানেল। আমাদের স্টেইনলেস স্টিলের U-চ্যানেল প্রোফাইল ও L-কর্নার ট্রিম কাচের প্যানেল শক্তভাবে ধরে রাখে, খোলা প্রান্ত রক্ষা করে এবং পার্টিশন, শাওয়ার স্ক্রিন ও বালুস্ট্রেডকে নিখুঁত, পরিচ্ছন্ন ফিনিশ দেয়; বিভিন্ন পুরুত্বের কাচের জন্য একাধিক মাপে পাওয়া যায়।"],

    "What products does Top Line Glass Products Accessories supply?": ["ما المنتجات التي توفرها توب لاين لمنتجات وإكسسوارات الزجاج؟", "টপ লাইন গ্লাস প্রোডাক্টস অ্যাক্সেসরিজ কোন কোন পণ্য সরবরাহ করে?"],
    "We manufacture and supply glass door accessories, shower enclosure accessories, handrail accessories, automatic door accessories, curtain accessories and metal channels. The range covers patch fittings, hinges, glass clamps, handrail brackets, sliding door operators, curtain fittings and stainless steel U-channels and L-corners for residential and commercial projects in Saudi Arabia.": ["نصنّع ونورّد إكسسوارات الأبواب الزجاجية وإكسسوارات كبائن الاستحمام وإكسسوارات الدرابزين وإكسسوارات الأبواب الأوتوماتيكية وإكسسوارات الستائر والقنوات المعدنية. وتشمل المجموعة تجهيزات التثبيت والمفصلات ومشابك الزجاج وحوامل الدرابزين ومشغلات الأبواب المنزلقة وتجهيزات الستائر وقنوات U وزوايا L من الستانلس ستيل للمشاريع السكنية والتجارية في المملكة العربية السعودية.", "আমরা কাচের দরজার আনুষাঙ্গিক, শাওয়ার এনক্লোজার আনুষাঙ্গিক, হ্যান্ডরেইল আনুষাঙ্গিক, স্বয়ংক্রিয় দরজার আনুষাঙ্গিক, পর্দার আনুষাঙ্গিক ও মেটাল চ্যানেল তৈরি ও সরবরাহ করি। এর মধ্যে রয়েছে সৌদি আরবের আবাসিক ও বাণিজ্যিক প্রকল্পের জন্য প্যাচ ফিটিং, কবজা, কাচের ক্ল্যাম্প, হ্যান্ডরেইল ব্র্যাকেট, স্লাইডিং দরজা অপারেটর, পর্দার ফিটিং এবং স্টেইনলেস স্টিলের U-চ্যানেল ও L-কর্নার।"],
    "Which materials and finishes are available for your glass hardware?": ["ما المواد والتشطيبات المتوفرة لمستلزمات الزجاج لديكم؟", "আপনাদের কাচের হার্ডওয়্যারে কোন উপকরণ ও ফিনিশ পাওয়া যায়?"],
    "Most of our glass hardware is made from stainless steel, brass, zinc alloy or aluminium. Available finishes include polished chrome, satin (brushed) stainless steel, matt black and gold, depending on the product. Each product page lists its exact main material and available finishes.": ["تُصنع معظم مستلزمات الزجاج لدينا من الستانلس ستيل أو النحاس أو سبائك الزنك أو الألمنيوم. وتشمل التشطيبات المتوفرة الكروم اللامع والستانلس ستيل الساتان (المصقول) والأسود المطفأ والذهبي حسب المنتج. وتوضح صفحة كل منتج المادة الرئيسية والتشطيبات المتوفرة بدقة.", "আমাদের বেশিরভাগ কাচের হার্ডওয়্যার স্টেইনলেস স্টিল, পিতল, জিঙ্ক অ্যালয় বা অ্যালুমিনিয়াম দিয়ে তৈরি। পণ্যভেদে পালিশ করা ক্রোম, সাটিন (ব্রাশড) স্টেইনলেস স্টিল, ম্যাট কালো ও সোনালি ফিনিশ পাওয়া যায়। প্রতিটি পণ্যের পাতায় এর মূল উপকরণ ও উপলব্ধ ফিনিশ উল্লেখ আছে।"],
    "Are your shower enclosure accessories suitable for humid bathrooms?": ["هل إكسسوارات كبائن الاستحمام لديكم مناسبة للحمامات الرطبة؟", "আপনাদের শাওয়ার এনক্লোজার আনুষাঙ্গিক কি আর্দ্র বাথরুমের জন্য উপযুক্ত?"],
    "Yes. Our shower hinges, glass clamps, support bars and sliding rollers are made from corrosion-resistant stainless steel and brass with protective finishes, so they stay secure and keep their appearance in humid bathroom conditions with regular cleaning.": ["نعم. تُصنع مفصلات الاستحمام ومشابك الزجاج وقضبان الدعم والبكرات المنزلقة لدينا من الستانلس ستيل والنحاس المقاومين للتآكل مع تشطيبات واقية، فتبقى ثابتة وتحافظ على مظهرها في أجواء الحمام الرطبة مع التنظيف المنتظم.", "হ্যাঁ। আমাদের শাওয়ার কবজা, কাচের ক্ল্যাম্প, সাপোর্ট বার ও স্লাইডিং রোলার সুরক্ষামূলক ফিনিশসহ ক্ষয়রোধী স্টেইনলেস স্টিল ও পিতল দিয়ে তৈরি, তাই নিয়মিত পরিষ্কার করলে আর্দ্র বাথরুমেও এগুলো মজবুত থাকে ও চেহারা অটুট রাখে।"],
    "Do you supply automatic sliding door operators and spare parts?": ["هل توفرون مشغلات الأبواب المنزلقة الأوتوماتيكية وقطع الغيار؟", "আপনারা কি স্বয়ংক্রিয় স্লাইডিং দরজার অপারেটর ও খুচরা যন্ত্রাংশ সরবরাহ করেন?"],
    "Yes. We supply complete SAHRO automatic sliding door operators for single and double doors, together with components such as motor units, controllers, belts, pulleys, hanging wheels and terminal blocks for installation, repair and maintenance of commercial entrances.": ["نعم. نورّد مشغلات SAHRO الكاملة للأبواب المنزلقة الأوتوماتيكية المفردة والمزدوجة، إلى جانب مكونات مثل وحدات المحركات وأجهزة التحكم والسيور والبكرات وعجلات التعليق وأطراف التوصيل لتركيب المداخل التجارية وإصلاحها وصيانتها.", "হ্যাঁ। আমরা একক ও দ্বৈত দরজার জন্য সম্পূর্ণ SAHRO স্বয়ংক্রিয় স্লাইডিং দরজা অপারেটর সরবরাহ করি, সাথে বাণিজ্যিক প্রবেশপথ স্থাপন, মেরামত ও রক্ষণাবেক্ষণের জন্য মোটর ইউনিট, কন্ট্রোলার, বেল্ট, পুলি, হ্যাঙ্গিং হুইল ও টার্মিনাল ব্লকের মতো যন্ত্রাংশও দিই।"],
    "Can I order handrail and balustrade fittings for a full project?": ["هل يمكنني طلب تجهيزات الدرابزين والحواجز لمشروع كامل؟", "আমি কি পুরো প্রকল্পের জন্য হ্যান্ডরেইল ও বালুস্ট্রেড ফিটিং অর্ডার করতে পারি?"],
    "Yes. We supply handrail brackets, connectors, end caps, elbows, standoffs and glass balustrade fittings in project quantities for villas, towers, hotels, malls and offices. Contact our team with your drawings or bill of quantities for pricing and availability.": ["نعم. نورّد حوامل الدرابزين والوصلات والنهايات والأكواع والمباعدات وتجهيزات الحواجز الزجاجية بكميات المشاريع للفلل والأبراج والفنادق والمراكز التجارية والمكاتب. تواصل مع فريقنا وأرسل المخططات أو جدول الكميات لمعرفة الأسعار والتوفر.", "হ্যাঁ। আমরা ভিলা, টাওয়ার, হোটেল, শপিং মল ও অফিসের জন্য প্রকল্পের পরিমাণে হ্যান্ডরেইল ব্র্যাকেট, সংযোগকারী, এন্ড ক্যাপ, এলবো, স্ট্যান্ডঅফ ও কাচের বালুস্ট্রেড ফিটিং সরবরাহ করি। মূল্য ও প্রাপ্যতার জন্য আপনার নকশা বা পরিমাণের তালিকা নিয়ে আমাদের দলের সাথে যোগাযোগ করুন।"],
    "What glass thickness do your metal channels and glass clamps support?": ["ما سماكة الزجاج التي تدعمها القنوات المعدنية ومشابك الزجاج لديكم؟", "আপনাদের মেটাল চ্যানেল ও কাচের ক্ল্যাম্প কত পুরু কাচ সমর্থন করে?"],
    "Our stainless steel U-channels and L-corner profiles come in several sizes for different glass thicknesses. Glass clamps, hinges and patch fittings are designed for tempered glass, and the supported thickness for each item is shown in its specification drawing on the product page.": ["تتوفر قنوات U وقطاعات زوايا L من الستانلس ستيل لدينا بعدة مقاسات لسماكات الزجاج المختلفة. أما مشابك الزجاج والمفصلات وتجهيزات التثبيت فمصممة للزجاج المقسّى، وتظهر السماكة المدعومة لكل منتج في رسم المواصفات على صفحة المنتج.", "আমাদের স্টেইনলেস স্টিলের U-চ্যানেল ও L-কর্নার প্রোফাইল বিভিন্ন পুরুত্বের কাচের জন্য একাধিক মাপে পাওয়া যায়। কাচের ক্ল্যাম্প, কবজা ও প্যাচ ফিটিং টেম্পারড কাচের জন্য তৈরি, এবং প্রতিটি পণ্যের সমর্থিত পুরুত্ব পণ্যের পাতায় স্পেসিফিকেশন নকশায় দেখানো আছে।"],
    "Where is your showroom and do you deliver across Saudi Arabia?": ["أين تقع صالة العرض لديكم وهل توصّلون إلى جميع أنحاء المملكة؟", "আপনাদের শোরুম কোথায় এবং আপনারা কি সৌদি আরব জুড়ে ডেলিভারি দেন?"],
    "Our showroom is on Al Madina Al Munawwarah Road in Al Sina'iyah, Riyadh. We supply contractors, glass installers and distributors in Riyadh and across the Kingdom of Saudi Arabia. Call, email or message us on WhatsApp to arrange delivery for your order.": ["تقع صالة العرض لدينا على طريق المدينة المنورة في حي الصناعية بالرياض. نورّد للمقاولين ومركّبي الزجاج والموزعين في الرياض وفي جميع أنحاء المملكة العربية السعودية. اتصل بنا أو راسلنا عبر البريد الإلكتروني أو واتساب لترتيب توصيل طلبك.", "আমাদের শোরুম রিয়াদের আল সিনাইয়্যাহ এলাকায় আল মদিনা আল মুনাওয়ারাহ রোডে। আমরা রিয়াদ ও সমগ্র সৌদি আরবে ঠিকাদার, কাচ স্থাপনকারী ও পরিবেশকদের সরবরাহ করি। আপনার অর্ডারের ডেলিভারির জন্য ফোন, ইমেইল বা হোয়াটসঅ্যাপে যোগাযোগ করুন।"],
    "How can I get a catalogue or a quotation?": ["كيف يمكنني الحصول على كتالوج أو عرض سعر؟", "আমি কীভাবে ক্যাটালগ বা মূল্য উদ্ধৃতি পেতে পারি?"],
    "You can download our product catalogues as PDF files from the Catalogues page, or contact us through the Contact Us page, by phone or on WhatsApp. Share the model numbers and quantities you need and our team will send you a quotation.": ["يمكنك تنزيل كتالوجات منتجاتنا بصيغة PDF من صفحة الكتالوجات، أو التواصل معنا عبر صفحة اتصل بنا أو بالهاتف أو واتساب. أرسل أرقام الموديلات والكميات التي تحتاجها وسيرسل لك فريقنا عرض سعر.", "আপনি ক্যাটালগ পাতা থেকে আমাদের পণ্যের ক্যাটালগ PDF হিসেবে ডাউনলোড করতে পারেন, অথবা যোগাযোগ পাতা, ফোন বা হোয়াটসঅ্যাপে আমাদের সাথে যোগাযোগ করতে পারেন। প্রয়োজনীয় মডেল নম্বর ও পরিমাণ জানালে আমাদের দল আপনাকে মূল্য উদ্ধৃতি পাঠাবে।"],

    "Excellent merchandise, good prices, and top-notch service. We thank the management and the entire staff, especially Abu Ahmed. All our appreciation and respect to him.": ["بضاعة ممتازة وأسعار جيدة وخدمة راقية. نشكر الإدارة وجميع الموظفين، وخاصة أبو أحمد. كل التقدير والاحترام له.", "চমৎকার পণ্য, ভালো দাম এবং সেরা মানের সেবা। আমরা ব্যবস্থাপনা ও সকল কর্মীকে ধন্যবাদ জানাই, বিশেষ করে আবু আহমেদকে। তাঁর প্রতি আমাদের সমস্ত কৃতজ্ঞতা ও সম্মান।"],
    "Excellent quality goods, superb service from our Yemeni sales team, and reasonable prices. Our regards to them; we highly recommend dealing with them.": ["بضاعة بجودة ممتازة وخدمة رائعة من فريق المبيعات اليمني وأسعار معقولة. تحياتنا لهم، ونوصي بشدة بالتعامل معهم.", "চমৎকার মানের পণ্য, আমাদের ইয়েমেনি বিক্রয় দলের অসাধারণ সেবা এবং যুক্তিসঙ্গত দাম। তাদের প্রতি আমাদের শুভেচ্ছা; তাদের সাথে লেনদেনের জোর সুপারিশ করছি।"],
    "Excellent company and great prices": ["شركة ممتازة وأسعار رائعة", "চমৎকার প্রতিষ্ঠান ও দারুণ দাম"],

    "About Top Line Glass Products Accessories": ["عن توب لاين لمنتجات وإكسسوارات الزجاج", "টপ লাইন গ্লাস প্রোডাক্টস অ্যাক্সেসরিজ সম্পর্কে"],
    "A leading Middle East manufacturer of premium glass hardware & bathroom accessories.": ["مُصنِّع رائد في الشرق الأوسط لمستلزمات الزجاج الفاخرة وإكسسوارات الحمامات.", "প্রিমিয়াম কাচের হার্ডওয়্যার ও বাথরুম আনুষাঙ্গিকের মধ্যপ্রাচ্যের একটি শীর্ষস্থানীয় প্রস্তুতকারক।"],
    "TOP Line (Sahro)": ["توب لاين (سهرو)", "টপ লাইন (সাহরো)"],
    "is a leading manufacturer serving the Middle East market, specializing in premium": ["هي شركة تصنيع رائدة تخدم سوق الشرق الأوسط، متخصصة في", "মধ্যপ্রাচ্যের বাজারে সেবাদানকারী একটি শীর্ষস্থানীয় প্রস্তুতকারক, যারা প্রিমিয়াম"],
    "glass door accessories": ["إكسسوارات الأبواب الزجاجية الفاخرة", "কাচের দরজার আনুষাঙ্গিক"],
    "shower enclosure accessories": ["إكسسوارات كبائن الاستحمام", "শাওয়ার এনক্লোজার আনুষাঙ্গিক"],
    "handrail accessories": ["إكسسوارات الدرابزين", "হ্যান্ডরেইল আনুষাঙ্গিক"],
    "automatic door accessories": ["إكسسوارات الأبواب الأوتوماتيكية", "স্বয়ংক্রিয় দরজার আনুষাঙ্গিক"],
    "curtain accessories": ["إكسسوارات الستائر", "পর্দার আনুষাঙ্গিক"],
    "and": ["و", "এবং"],
    "metal channels": ["القنوات المعدنية", "মেটাল চ্যানেলে বিশেষজ্ঞ"],
    ". With strong in-house research, development, and manufacturing capabilities, we provide complete hardware solutions by integrating design, production, and sales under one roof.": [". وبفضل قدراتنا الذاتية القوية في البحث والتطوير والتصنيع، نقدم حلولاً متكاملة من خلال الجمع بين التصميم والإنتاج والمبيعات تحت سقف واحد.", "। শক্তিশালী নিজস্ব গবেষণা, উন্নয়ন ও উৎপাদন সক্ষমতার মাধ্যমে আমরা নকশা, উৎপাদন ও বিক্রয় এক ছাদের নিচে এনে সম্পূর্ণ হার্ডওয়্যার সমাধান দিই।"],
    "Our product portfolio includes": ["تشمل مجموعة منتجاتنا", "আমাদের পণ্যের পরিসরে রয়েছে"],
    "glass hardware fittings": ["تجهيزات الزجاج", "কাচের হার্ডওয়্যার ফিটিং"],
    "door control hardware": ["مستلزمات التحكم في الأبواب", "দরজা নিয়ন্ত্রণ হার্ডওয়্যার"],
    "bathroom hardware": ["مستلزمات الحمامات", "বাথরুম হার্ডওয়্যার"],
    ", and": ["، و", ", এবং"],
    "door & window accessories": ["إكسسوارات الأبواب والنوافذ", "দরজা ও জানালার আনুষাঙ্গিক"],
    ". Operating two factories and two showrooms with a combined area of nearly": [". ونشغّل مصنعين وصالتي عرض بمساحة إجمالية تقارب", "। প্রায়"],
    "20,000 square meters": ["20,000 متر مربع", "২০,০০০ বর্গমিটার"],
    ", we export over": ["، ونصدّر أكثر من", " আয়তনের দুটি কারখানা ও দুটি শোরুম পরিচালনা করে আমরা"],
    "90% of our products": ["90% من منتجاتنا", "আমাদের ৯০%-এর বেশি পণ্য"],
    "to Saudi Arabia, the UAE, Bahrain, Kuwait, and other regional markets.": ["إلى المملكة العربية السعودية والإمارات والبحرين والكويت وأسواق إقليمية أخرى.", "সৌদি আরব, সংযুক্ত আরব আমিরাত, বাহরাইন, কুয়েত ও অন্যান্য আঞ্চলিক বাজারে রপ্তানি করি।"],
    "From frameless shower enclosures and bathroom mirrors to floor springs, glass clamps, glass connectors and architectural door hardware — every product we ship is engineered for the climate, water quality and architectural style of the Gulf region.": ["من كبائن الاستحمام بدون إطار ومرايا الحمامات إلى المفصلات الأرضية ومشابك الزجاج ووصلات الزجاج ومستلزمات الأبواب المعمارية، كل منتج نشحنه مصمم لمناخ منطقة الخليج وجودة مياهها وطرازها المعماري.", "ফ্রেমবিহীন শাওয়ার এনক্লোজার ও বাথরুমের আয়না থেকে ফ্লোর স্প্রিং, কাচের ক্ল্যাম্প, কাচের সংযোগকারী ও স্থাপত্য দরজার হার্ডওয়্যার পর্যন্ত — আমাদের প্রতিটি পণ্য উপসাগরীয় অঞ্চলের জলবায়ু, পানির মান ও স্থাপত্যশৈলীর জন্য তৈরি।"],
    "Source factory advantages, strict quality control.": ["مزايا المصنع المباشر، ومراقبة جودة صارمة.", "সরাসরি কারখানার সুবিধা, কঠোর মান নিয়ন্ত্রণ।"],
    "1. Source Factory": ["1. المصنع المباشر", "১. সরাসরি কারখানা"],
    "As a direct manufacturer, we provide complete one-stop solutions. Around": ["بصفتنا مصنّعاً مباشراً، نقدم حلولاً متكاملة في مكان واحد. حوالي", "সরাসরি প্রস্তুতকারক হিসেবে আমরা এক জায়গায় সম্পূর্ণ সমাধান দিই। প্রায়"],
    "70% of our products": ["70% من منتجاتنا", "আমাদের ৭০% পণ্য"],
    "are manufactured in our own factories, while the remaining": ["تُصنَّع في مصانعنا الخاصة، بينما", "আমাদের নিজস্ব কারখানায় তৈরি হয়, আর বাকি"],
    "30% are sourced from trusted partners in Germany and Italy": ["يتم توريد الـ30% المتبقية من شركاء موثوقين في ألمانيا وإيطاليا", "৩০% জার্মানি ও ইতালির বিশ্বস্ত অংশীদারদের কাছ থেকে সংগ্রহ করা হয়"],
    ". Our strict quality standards ensure reliable products, competitive pricing, and a seamless procurement experience.": [". وتضمن معايير الجودة الصارمة لدينا منتجات موثوقة وأسعاراً تنافسية وتجربة شراء سلسة.", "। আমাদের কঠোর মানদণ্ড নির্ভরযোগ্য পণ্য, প্রতিযোগিতামূলক মূল্য ও ঝামেলামুক্ত ক্রয় অভিজ্ঞতা নিশ্চিত করে।"],
    "2. Quality Control": ["2. مراقبة الجودة", "২. মান নিয়ন্ত্রণ"],
    "Our production is backed by": ["يدعم إنتاجنا", "আমাদের উৎপাদনের পেছনে রয়েছে"],
    "advanced manufacturing technology": ["تقنيات تصنيع متقدمة", "উন্নত উৎপাদন প্রযুক্তি"],
    ", experienced technical teams, and modern management practices.": ["، وفرق فنية ذات خبرة، وأساليب إدارة حديثة.", ", অভিজ্ঞ কারিগরি দল এবং আধুনিক ব্যবস্থাপনা পদ্ধতি।"],
    "Multiple automated production lines": ["خطوط إنتاج آلية متعددة", "একাধিক স্বয়ংক্রিয় উৎপাদন লাইন"],
    "and rigorous quality control processes ensure every product meets high standards of precision, durability, and performance.": ["وعمليات مراقبة جودة صارمة تضمن أن يلبي كل منتج أعلى معايير الدقة والمتانة والأداء.", "এবং কঠোর মান নিয়ন্ত্রণ প্রক্রিয়া নিশ্চিত করে যে প্রতিটি পণ্য নির্ভুলতা, স্থায়িত্ব ও কার্যক্ষমতার উচ্চ মান পূরণ করে।"],
    "20,000+ sqm": ["+20,000 م²", "২০,০০০+ বর্গমিটার"],
    "Manufacturing & showroom area": ["مساحة التصنيع وصالات العرض", "উৎপাদন ও শোরুমের আয়তন"],
    "Factories & showrooms": ["المصانع وصالات العرض", "কারখানা ও শোরুম"],
    "Exports to GCC": ["صادرات إلى دول الخليج", "উপসাগরীয় দেশে রপ্তানি"],
    "5 Markets": ["5 أسواق", "৫টি বাজার"],
    "KSA · UAE · Bahrain · Kuwait · more": ["السعودية · الإمارات · البحرين · الكويت · والمزيد", "সৌদি আরব · আমিরাত · বাহরাইন · কুয়েত · আরও"],

    "All Products": ["جميع المنتجات", "সকল পণ্য"],
    "Premium glass hardware, bathroom accessories and door & window fittings — engineered for the Gulf market.": ["مستلزمات زجاج فاخرة وإكسسوارات حمامات وتجهيزات أبواب ونوافذ، مصممة لسوق الخليج.", "প্রিমিয়াম কাচের হার্ডওয়্যার, বাথরুম আনুষাঙ্গিক এবং দরজা ও জানালার ফিটিং — উপসাগরীয় বাজারের জন্য তৈরি।"],
    "Search products by name, model or specification…": ["ابحث عن المنتجات بالاسم أو الموديل أو المواصفات…", "নাম, মডেল বা স্পেসিফিকেশন দিয়ে পণ্য খুঁজুন…"],
    "Search products": ["ابحث عن المنتجات", "পণ্য খুঁজুন"],
    "Category not found": ["الفئة غير موجودة", "বিভাগ পাওয়া যায়নি"],
    "Back to products": ["العودة إلى المنتجات", "পণ্যে ফিরে যান"],
    "Showing": ["عرض", "দেখানো হচ্ছে"],
    "of": ["من", "এর মধ্যে"],
    "← Previous": ["→ السابق", "← আগের"],
    "Page": ["صفحة", "পৃষ্ঠা"],
    "Next →": ["التالي ←", "পরের →"],
    "Breadcrumb": ["مسار التنقل", "ব্রেডক্রাম্ব"],
    "No products found.": ["لم يتم العثور على منتجات.", "কোনো পণ্য পাওয়া যায়নি।"],

    "Product not found": ["المنتج غير موجود", "পণ্য পাওয়া যায়নি"],
    "Browse all products": ["تصفح جميع المنتجات", "সকল পণ্য দেখুন"],
    "Model No.": ["رقم الموديل", "মডেল নং"],
    "Series": ["السلسلة", "সিরিজ"],
    "Available Finish": ["التشطيبات المتوفرة", "উপলব্ধ ফিনিশ"],
    "Main Material": ["المادة الرئيسية", "মূল উপকরণ"],
    "Size": ["المقاس", "মাপ"],
    "Weight": ["الوزن", "ওজন"],
    "Order Now on WhatsApp": ["اطلب الآن عبر واتساب", "এখনই হোয়াটসঅ্যাপে অর্ডার করুন"],
    "Specifications": ["المواصفات", "স্পেসিফিকেশন"],
    "Click the drawing to enlarge.": ["انقر على الرسم لتكبيره.", "বড় করে দেখতে নকশায় ক্লিক করুন।"],
    "More from": ["المزيد من", "আরও দেখুন:"],
    "Enlarge specification drawing": ["تكبير رسم المواصفات", "স্পেসিফিকেশন নকশা বড় করুন"],
    "Specification drawing": ["رسم المواصفات", "স্পেসিফিকেশন নকশা"],
    "Close": ["إغلاق", "বন্ধ করুন"],
    "Polished": ["لامع", "পালিশ করা"],
    "Black": ["أسود", "কালো"],
    "Satin": ["ساتان", "সাটিন"],
    "Gold": ["ذهبي", "সোনালি"],
    "Zinc": ["زنك", "জিঙ্ক"],
    "Zinc Alloy": ["سبيكة زنك", "জিঙ্ক অ্যালয়"],
    "Aluminium": ["ألمنيوم", "অ্যালুমিনিয়াম"],
    "Brass": ["نحاس", "পিতল"],
    "Aluminium-Clad Stainless Steel": ["ستانلس ستيل مكسو بالألمنيوم", "অ্যালুমিনিয়াম-আবৃত স্টেইনলেস স্টিল"],
    "Zinc (3.0mm)": ["زنك (3.0 مم)", "জিঙ্ক (৩.০ মিমি)"],

    "Download our latest product catalogues covering glass hardware, bathroom accessories, and door control systems.": ["حمّل أحدث كتالوجات منتجاتنا التي تشمل مستلزمات الزجاج وإكسسوارات الحمامات وأنظمة التحكم في الأبواب.", "কাচের হার্ডওয়্যার, বাথরুম আনুষাঙ্গিক ও দরজা নিয়ন্ত্রণ ব্যবস্থা নিয়ে আমাদের সর্বশেষ পণ্য ক্যাটালগ ডাউনলোড করুন।"],
    "PDF": ["PDF", "PDF"],
    "Download": ["تنزيل", "ডাউনলোড"],
    "Need something specific?": ["تحتاج شيئاً محدداً؟", "নির্দিষ্ট কিছু প্রয়োজন?"],
    "Request a custom catalogue on WhatsApp.": ["اطلب كتالوجاً مخصصاً عبر واتساب.", "হোয়াটসঅ্যাপে কাস্টম ক্যাটালগের অনুরোধ করুন।"],
    "Request on WhatsApp": ["اطلب عبر واتساب", "হোয়াটসঅ্যাপে অনুরোধ করুন"],

    "Our Projects": ["مشاريعنا", "আমাদের প্রকল্পসমূহ"],
    "A snapshot of recent installations where Top Line Glass Products Accessories supplied the complete hardware package — from concept to delivery.": ["لمحة عن أحدث المشاريع التي ورّدت لها توب لاين لمنتجات وإكسسوارات الزجاج حزمة المستلزمات الكاملة، من الفكرة حتى التسليم.", "সাম্প্রতিক কিছু স্থাপনার ঝলক, যেখানে টপ লাইন গ্লাস প্রোডাক্টস অ্যাক্সেসরিজ ধারণা থেকে ডেলিভারি পর্যন্ত সম্পূর্ণ হার্ডওয়্যার প্যাকেজ সরবরাহ করেছে।"],
    "Case Study": ["دراسة حالة", "কেস স্টাডি"],
    "Discuss a Similar Project": ["ناقش مشروعاً مشابهاً", "একই ধরনের প্রকল্প নিয়ে আলোচনা করুন"],
    "Al Nakheel Residential Tower — Riyadh": ["برج النخيل السكني — الرياض", "আল নাখিল আবাসিক টাওয়ার — রিয়াদ"],
    "Riyadh, Saudi Arabia": ["الرياض، المملكة العربية السعودية", "রিয়াদ, সৌদি আরব"],
    "Complete supply of frameless shower enclosures, bathroom accessories and glass hardware across 180 luxury apartments.": ["توريد كامل لكبائن الاستحمام بدون إطار وإكسسوارات الحمامات ومستلزمات الزجاج في 180 شقة فاخرة.", "১৮০টি বিলাসবহুল অ্যাপার্টমেন্টে ফ্রেমবিহীন শাওয়ার এনক্লোজার, বাথরুম আনুষাঙ্গিক ও কাচের হার্ডওয়্যারের সম্পূর্ণ সরবরাহ।"],
    "Shower hinges, glass clamps and support rods": ["مفصلات الاستحمام ومشابك الزجاج وقضبان الدعم", "শাওয়ার কবজা, কাচের ক্ল্যাম্প ও সাপোর্ট রড"],
    "Chrome-finished bathroom accessory sets": ["أطقم إكسسوارات حمامات بلمسة كروم", "ক্রোম-ফিনিশ বাথরুম আনুষাঙ্গিক সেট"],
    "Frameless glass door patch fittings": ["تجهيزات تثبيت الأبواب الزجاجية بدون إطار", "ফ্রেমবিহীন কাচের দরজার প্যাচ ফিটিং"],
    "Grand Plaza Business Hotel — Riyadh": ["فندق جراند بلازا للأعمال — الرياض", "গ্র্যান্ড প্লাজা বিজনেস হোটেল — রিয়াদ"],
    "Al Sina'iyah, Riyadh, KSA": ["الصناعية، الرياض، المملكة العربية السعودية", "আল সিনাইয়্যাহ, রিয়াদ, সৌদি আরব"],
    "End-to-end glass door hardware for the lobby, meeting rooms and 240 guest bathrooms — including automatic sliding entrances.": ["مستلزمات أبواب زجاجية متكاملة للردهة وقاعات الاجتماعات و240 حمّاماً للضيوف، بما في ذلك المداخل المنزلقة الأوتوماتيكية.", "লবি, সভাকক্ষ ও অতিথিদের ২৪০টি বাথরুমের জন্য শুরু থেকে শেষ পর্যন্ত কাচের দরজার হার্ডওয়্যার — স্বয়ংক্রিয় স্লাইডিং প্রবেশপথসহ।"],
    "Automatic sliding door systems at main entrances": ["أنظمة أبواب منزلقة أوتوماتيكية في المداخل الرئيسية", "প্রধান প্রবেশপথে স্বয়ংক্রিয় স্লাইডিং দরজা ব্যবস্থা"],
    "Floor springs and glass door locks for meeting rooms": ["مفصلات أرضية وأقفال أبواب زجاجية لقاعات الاجتماعات", "সভাকক্ষের জন্য ফ্লোর স্প্রিং ও কাচের দরজার তালা"],
    "Full bathroom hardware package across all guest floors": ["حزمة مستلزمات حمامات كاملة في جميع طوابق الضيوف", "সকল অতিথি তলায় সম্পূর্ণ বাথরুম হার্ডওয়্যার প্যাকেজ"],

    "Send us your enquiry and our team will respond promptly. For instant replies, message us on WhatsApp.": ["أرسل لنا استفسارك وسيرد فريقنا في أسرع وقت. وللرد الفوري، راسلنا عبر واتساب.", "আপনার জিজ্ঞাসা পাঠান, আমাদের দল দ্রুত উত্তর দেবে। তাৎক্ষণিক উত্তরের জন্য হোয়াটসঅ্যাপে বার্তা পাঠান।"],
    "Name": ["الاسم", "নাম"],
    "Email": ["البريد الإلكتروني", "ইমেইল"],
    "Phone (optional)": ["الهاتف (اختياري)", "ফোন (ঐচ্ছিক)"],
    "Phone": ["الهاتف", "ফোন"],
    "Message": ["الرسالة", "বার্তা"],
    "Send Message": ["إرسال الرسالة", "বার্তা পাঠান"],
    "Opening WhatsApp with your message…": ["جارٍ فتح واتساب مع رسالتك…", "আপনার বার্তাসহ হোয়াটসঅ্যাপ খোলা হচ্ছে…"],
    "Mobile": ["الجوال", "মোবাইল"],
    "Showroom": ["صالة العرض", "শোরুম"],
    "WhatsApp Us": ["راسلنا عبر واتساب", "হোয়াটসঅ্যাপ করুন"],
    "JQR4+798, Al Madina Al Munawwarah Rd,": ["JQR4+798، طريق المدينة المنورة،", "JQR4+798, আল মদিনা আল মুনাওয়ারাহ রোড,"],
    "Al Sina'iyah, Riyadh, 12845, KSA": ["الصناعية، الرياض 12845، المملكة العربية السعودية", "আল সিনাইয়্যাহ, রিয়াদ, ১২৮৪৫, সৌদি আরব"],
    "JQR4+798, Al Madina Al Munawwarah Rd, Al Sina'iyah, Riyadh 12845, KSA": ["JQR4+798، طريق المدينة المنورة، الصناعية، الرياض 12845، المملكة العربية السعودية", "JQR4+798, আল মদিনা আল মুনাওয়ারাহ রোড, আল সিনাইয়্যাহ, রিয়াদ ১২৮৪৫, সৌদি আরব"],
    "Top Line Glass Products Accessories location on Google Maps": ["موقع توب لاين لمنتجات وإكسسوارات الزجاج على خرائط Google", "গুগল ম্যাপে টপ লাইন গ্লাস প্রোডাক্টস অ্যাক্সেসরিজের অবস্থান"],
    "Open our location in Google Maps": ["افتح موقعنا في خرائط Google", "গুগল ম্যাপে আমাদের অবস্থান খুলুন"],
  };

  const RULES = [
    [/^Category (\d+)$/, ["الفئة $1", "বিভাগ $1"]],
    [/^Model No\. (.+)$/, ["رقم الموديل $1", "মডেল নং $1"]],
    [/^Premium (.+) by Top Line Glass Products Accessories — engineered in-house for shower enclosures, glass doors and bathroom installations across the Middle East\.$/i,
      ["$1 فاخرة من توب لاين لمنتجات وإكسسوارات الزجاج، مصممة ومصنعة لدينا لكبائن الاستحمام والأبواب الزجاجية وتجهيزات الحمامات في جميع أنحاء الشرق الأوسط.", "টপ লাইন গ্লাস প্রোডাক্টস অ্যাক্সেসরিজের প্রিমিয়াম $1 — মধ্যপ্রাচ্য জুড়ে শাওয়ার এনক্লোজার, কাচের দরজা ও বাথরুম স্থাপনার জন্য নিজস্ব কারখানায় তৈরি।"], true],
    [/^Search (.+)…$/, ["ابحث في $1…", "$1 খুঁজুন…"], true],
    [/^(\d+) products?$/, ["$1 منتج", "$1টি পণ্য"]],
  ];
  const lc = {};
  const indexD = () => { Object.keys(D).forEach((k) => { lc[k.toLowerCase()] = D[k]; }); };
  indexD();
  // Product strings from products.json. Translations are taken, in order, from:
  //  1. fields on the product itself: item_description_ar / _bn, english_name_ar / _bn
  //  2. src/i18n-products.js
  //  3. automatic translation (cached in this browser), for products added later without translations
  const CACHE_KEY = "sahro_i18n_auto_" + lang;
  let auto = {};
  try { auto = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch (e) {}
  const productStrings = new Set();
  let pending = new Set(), pendTimer = 0, inflight = new Set();
  const saveAuto = () => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(auto)); } catch (e) {} };
  async function autoTranslate(list) {
    const out = {};
    for (let i = 0; i < list.length; i += 25) {
      const chunk = list.slice(i, i + 25);
      const q = chunk.join("\n");
      try {
        const r = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + lang + "&dt=t&q=" + encodeURIComponent(q));
        const j = await r.json();
        const lines = j[0].map((x) => x[0]).join("").split("\n");
        if (lines.length === chunk.length) chunk.forEach((s, k) => { out[s] = lines[k].trim(); });
        else for (const s of chunk) {
          const r2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + lang + "&dt=t&q=" + encodeURIComponent(s));
          const j2 = await r2.json(); out[s] = j2[0].map((x) => x[0]).join("").trim();
        }
      } catch (e) {}
    }
    return out;
  }
  function queueAuto(s) {
    if (auto[s] || inflight.has(s)) return;
    pending.add(s);
    if (!pendTimer) pendTimer = setTimeout(async () => {
      pendTimer = 0;
      const list = [...pending]; pending = new Set(); list.forEach((x) => inflight.add(x));
      const res = await autoTranslate(list);
      list.forEach((x) => inflight.delete(x));
      if (Object.keys(res).length) { Object.assign(auto, res); saveAuto(); retranslate(); }
    }, 150);
  }
  const SUF = lang === "ar" ? "_ar" : "_bn";
  function loadProductData() {
    return fetch("src/data/products.json").then((r) => r.json()).then((data) => {
      const P = window.SahroI18nProducts || {};
      const missing = [];
      const add = (en, own) => {
        if (!en) return;
        const k = norm(en);
        productStrings.add(k);
        if (own) { D[k] = D[k] ? D[k].slice() : ["", ""]; D[k][I[lang]] = own; return; }
        if (D[k] || P[k]) return;
        const ms = k.match(/^(.+?)\s+([A-Z0-9][A-Za-z0-9\-\/.]*)$/);
        if (ms && (D[ms[1]] || P[ms[1]]) && /\d/.test(ms[2])) return;
        if (!auto[k]) missing.push(k);
      };
      for (const c of data.categories) {
        add(c.name, c["name" + SUF]);
        for (const p of c.products) {
          if (p.ref) continue;
          add(p.item_description, p["item_description" + SUF]);
          add(p.english_name, p["english_name" + SUF]);
          (p.available_finish || []).forEach((x) => add(x));
          (p.main_material || []).forEach((x) => add(x));
        }
      }
      indexD();
      missing.forEach(queueAuto);
      retranslate();
    }).catch(() => {});
  }
  const mergeProducts = () => { const P = window.SahroI18nProducts; if (P) { for (const k in P) if (!D[k]) D[k] = P[k]; indexD(); } };
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const tr = (s) => {
    const k = norm(s);
    if (!k) return null;
    const hit = D[k];
    if (hit) return hit[I[lang]];
    const ms = k.match(/^(.+?)\s+([A-Z0-9][A-Za-z0-9\-\/.]*)$/);
    if (ms && D[ms[1]] && /\d/.test(ms[2])) return D[ms[1]][I[lang]] + " " + ms[2];
    if (auto[k]) return auto[k];
    if (ms && auto[ms[1]] && /\d/.test(ms[2])) return auto[ms[1]] + " " + ms[2];
    for (const [re, out, sub] of RULES) {
      const m = k.match(re);
      if (m) return out[I[lang]].replace("$1", sub ? (lc[m[1].toLowerCase()] || [m[1], m[1]])[I[lang]] : m[1]);
    }
    return null;
  };

  const ATTRS = ["placeholder", "aria-label", "title", "alt"];
  const done = new WeakMap(), orig = new WeakMap(), seen = new Set();
  function doText(n) {
    const v = n.nodeValue;
    if (done.get(n) === v) return;
    orig.set(n, v); seen.add(n);
    const t = tr(v);
    if (t != null) {
      const lead = v.match(/^\s*/)[0], trail = v.match(/\s*$/)[0];
      const nv = lead + t + trail;
      done.set(n, nv);
      if (nv !== v) n.nodeValue = nv;
    } else done.set(n, v);
  }
  function doEl(el) {
    for (const a of ATTRS) {
      const v = el.getAttribute(a);
      if (!v) continue;
      const t = tr(v);
      if (t != null && t !== v) el.setAttribute(a, t);
    }
  }
  const skip = (el) => el && el.closest && el.closest('[translate="no"],script,style,textarea,noscript');
  function walk(root) {
    if (root.nodeType === 3) { if (!skip(root.parentElement)) doText(root); return; }
    if (root.nodeType !== 1 || skip(root)) return;
    doEl(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 1) { if (skip(n)) continue; doEl(n); }
      else if (!skip(n.parentElement)) doText(n);
    }
  }

  function retranslate() {
    for (const n of seen) {
      if (!n.isConnected) { seen.delete(n); continue; }
      if (done.get(n) !== n.nodeValue) continue;
      const o = orig.get(n);
      if (o == null || o !== n.nodeValue) continue;
      const t = tr(o);
      if (t != null) { const nv = o.match(/^\s*/)[0] + t + o.match(/\s*$/)[0]; done.set(n, nv); n.nodeValue = nv; }
    }
    if (document.body) walk(document.body);
  }
  function start() {
    const html = document.documentElement;
    html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
    if (lang === "en") return;
    const fam = lang === "ar" ? "Noto+Sans+Arabic" : "Noto+Sans+Bengali";
    const l = document.createElement("link"); l.rel = "stylesheet";
    l.href = lang === "ar" ? "public/fonts/noto-sans-arabic.css" : "public/fonts/noto-sans-bengali.css";
    document.head.appendChild(l);
    const st = document.createElement("style");
    const name = lang === "ar" ? "Noto Sans Arabic" : "Noto Sans Bengali";
    st.textContent = `html,body,h1,h2,h3,h4,button,input,textarea{font-family:"Inter","${name}",system-ui,sans-serif!important}` +
      (lang === "ar" ? `body *{letter-spacing:0!important}` : "");
    document.head.appendChild(st);
    const pass = () => {
      mergeProducts();
      if (document.title) { const t = tr(document.title); if (t) document.title = t; }
      walk(document.body);
    };
    pass();
    observe();
    loadProductData();
    if (!window.SahroI18nProducts) {
      const ps = document.createElement("script"); ps.src = "src/i18n-products.js";
      ps.onload = () => { pass(); setTimeout(pass, 300); setTimeout(pass, 1500); };
      document.head.appendChild(ps);
    }
    window.addEventListener("load", pass);
    setTimeout(pass, 2500);
  }
  function observe() {
    let queued = new Set(), raf = 0;
    const flush = () => { raf = 0; const q = queued; queued = new Set(); q.forEach((n) => n.isConnected && walk(n)); };
    new MutationObserver((ms) => {
      for (const m of ms) {
        if (m.type === "characterData") queued.add(m.target);
        else if (m.type === "attributes") queued.add(m.target);
        else m.addedNodes.forEach((n) => queued.add(n));
      }
      if (!raf) raf = requestAnimationFrame(flush);
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  window.SahroI18n = {
    lang,
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} location.reload(); },
  };
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
