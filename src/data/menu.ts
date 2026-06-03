export interface MenuItem {
  id: string;
  name: string;
  nameAr?: string;
  price: number | { [size: string]: number };
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
}

export const categories: MenuCategory[] = [
  { id: 'tea-coffee', name: 'Tea & Coffee', emoji: '☕' },
  { id: 'soft-drinks', name: 'Soft Drinks', emoji: '🥤' },
  { id: 'hot-chocolate', name: 'Hot Chocolate', emoji: '🍫' },
  { id: 'caffeine-free-frappe', name: 'Caffeine Free Frappe', emoji: '🧋' },
  { id: 'soda-mix', name: 'Soda Mix', emoji: '🫧' },
  { id: 'seasonal-juice', name: 'Seasonal Juice', emoji: '🍊' },
  { id: 'fresh-juice', name: 'Fresh Juice', emoji: '🍋' },
  { id: 'milk-shake', name: 'Milk Shake', emoji: '🥛' },
  { id: 'mocktails', name: 'Mocktails', emoji: '🍹' },
  { id: 'smoothies', name: 'Smoothies', emoji: '🫐' },
  { id: 'hot-coffee', name: 'Hot Coffee', emoji: '☕' },
  { id: 'iced-coffee', name: 'Iced Coffee', emoji: '🧊' },
  { id: 'pancake', name: 'Pancake', emoji: '🥞' },
  { id: 'waffles', name: 'Waffles', emoji: '🧇' },
  { id: 'shisha', name: 'Shisha', emoji: '💨' },
  { id: 'fresh-desserts', name: 'Fresh Desserts', emoji: '🍓' },
];

export const menuItems: MenuItem[] = [
  // Tea & Coffee
  { id: 'tc1', name: 'شاي', price: 10, category: 'tea-coffee' },
  { id: 'tc2', name: 'شاي نكهات', price: 15, category: 'tea-coffee' },
  { id: 'tc3', name: 'شاي كرك', price: 25, category: 'tea-coffee' },
  { id: 'tc4', name: 'قهوة', price: 20, category: 'tea-coffee' },
  { id: 'tc5', name: 'قهوة فرنساوي', price: 40, category: 'tea-coffee' },
  { id: 'tc6', name: 'قهوة بندق', price: 45, category: 'tea-coffee' },
  // Soft Drinks
  { id: 'sd1', name: 'مياه معدنية', price: 10, category: 'soft-drinks' },
  { id: 'sd2', name: 'بيبسي', price: 25, category: 'soft-drinks' },
  { id: 'sd3',name: 'سفن أب', price: 25, category: 'soft-drinks' },
  { id: 'sd4', name: 'ميراندا', price: 25, category: 'soft-drinks' },
  { id: 'sd5', name: 'شويبس', price: 25, category: 'soft-drinks' },
  { id: 'sd6', name: 'فيروز', price: 25, category: 'soft-drinks' },
  { id: 'sd7',  name: 'ريد بول', price: 65, category: 'soft-drinks' },
  // Hot Chocolate
  { id: 'hc1', name: 'هوت شوكليت كلاسيك', price: 60, category: 'hot-chocolate' },
  { id: 'hc2', name: 'هوت شوكليت نوتيلا', price: 65, category: 'hot-chocolate' },
  { id: 'hc3', name: 'وايت شوكليت', price: 65, category: 'hot-chocolate' },
  { id: 'hc4', name: 'هوت شوكليت مارشميلو', price: 70, category: 'hot-chocolate' },
  { id: 'hc5', name: 'هوت لوتس', price: 80, category: 'hot-chocolate' },
  { id: 'hc6', name: 'هوت فسدق', price: 90, category: 'hot-chocolate' },
  // Caffeine Free Frappe
  { id: 'cf1', name: 'فانيليا', price: 60, category: 'caffeine-free-frappe' },
  { id: 'cf2', name: 'شوكولاتة', price: 60, category: 'caffeine-free-frappe' },
  { id: 'cf3', name: 'كراميل', price: 65, category: 'caffeine-free-frappe' },
  { id: 'cf4', name: 'فراولة', price: 65, category: 'caffeine-free-frappe' },
  // Soda Mix
  { id: 'sm1', name: 'موهيتو كلاسيك' , price: 45, category: 'soda-mix' },
  { id: 'sm2', name: 'موهيتو نكهات' , price: 55, category: 'soda-mix' },
  { id: 'sm3', name: 'صن شاين', price: 55, category: 'soda-mix' },
  { id: 'sm4', name: 'ريد كلاود', price: 60, category: 'soda-mix' },
  { id: 'sm5', name: 'بلو فاير', price: 60, category: 'soda-mix' },
  { id: 'sm6', name: 'ميكس بيري', price: 60, category: 'soda-mix' },
  { id: 'sm7', name: 'ميكس ريد بول ', price: 85, category: 'soda-mix' },
  // Seasonal Juice
  { id: 'sj1', name: 'برتقال', price: 40, category: 'seasonal-juice' },
  { id: 'sj2', name: 'رمان', price: 45, category: 'seasonal-juice' },
  { id: 'sj3', name: 'جوافة', price: 40, category: 'seasonal-juice' },
  { id: 'sj4', name: 'بلح حليب', price: 40, category: 'seasonal-juice' },
  // Fresh Juice
  { id: 'fj1', name: 'ليمون', price: 35, category: 'fresh-juice' },
  { id: 'fj2', name: 'ليمون نعناع', price: 40, category: 'fresh-juice' },
  { id: 'fj3', name: 'موز بالحليب', price: 40, category: 'fresh-juice' },
  { id: 'fj4', name: 'فراولة', price: 35, category: 'fresh-juice' },
  { id: 'fj5', name: 'أناناس', price: 35, category: 'fresh-juice' },
  { id: 'fj6', name: 'مانجو', price: 40, category: 'fresh-juice' },
  // Milk Shake
 { id: 'ms1', name: 'ميلك شيك ليمون', price: 45, category: 'milk-shake' },
  { id: 'ms2', name: 'ميلك شيك فانيليا', price: 50, category: 'milk-shake' },
  { id: 'ms3', name: 'ميلك شيك فراولة', price: 55, category: 'milk-shake' },
  { id: 'ms4', name: 'ميلك شيك مانجو', price: 55, category: 'milk-shake' },
  { id: 'ms5', name: 'ميلك شيك كراميل', price: 55, category: 'milk-shake' },
  { id: 'ms6', name: 'ميلك شيك أوريو', price: 60, category: 'milk-shake' },
  { id: 'ms7', name: 'ميلك شيك لوتس', price: 65, category: 'milk-shake' },
  { id: 'ms8', name: 'ميلك شيك كيندر', price: 70, category: 'milk-shake' },
  { id: 'ms9', name: 'ميلك شيك تونز', price: 70, category: 'milk-shake' },
  { id: 'ms10', name: 'ميلك شيك فستق', price: 75, category: 'milk-shake' },
  // موكتيل
  { id: 'mo1', name: 'مارتينيانو', price: 60, category: 'mocktails' },
  { id: 'mo2', name: 'موهيتو', price: 65, category: 'mocktails' },
  { id: 'mo3', name: 'ملك الفواكه', price: 75, category: 'mocktails' },
  { id: 'mo4', name: 'بلو أب', price: 80, category: 'mocktails' },
  { id: 'mo5', name: 'موكتيل MK', price: 100, category: 'mocktails' },
  // سموذي
  { id: 'sm_1', name: 'سموزي فراولة', price: 45, category: 'smoothies' },
  { id: 'sm_2', name: 'سموزي مانجو', price: 45, category: 'smoothies' },
  { id: 'sm_3', name: 'سموزي سبانخ فيتامين', price: 40, category: 'smoothies' },
  { id: 'sm_4', name: 'سموزي كولا', price: 40, category: 'smoothies' },
  { id: 'sm_5', name: 'سموزي بلوبيري', price: 45, category: 'smoothies' },
  { id: 'sm_6', name: 'سموزي خوخ', price: 45, category: 'smoothies' },
  // قهوة ساخنة
  { id: 'hco1', name: 'إسبريسو سنجل', price: 40, category: 'hot-coffee' },
  { id: 'hco2', name: 'إسبريسو دبل', price: 50, category: 'hot-coffee' },
  { id: 'hco3', name: 'لاتيه', price: 60, category: 'hot-coffee' },
  { id: 'hco4', name: 'كابتشينو', price: 70, category: 'hot-coffee' },
  { id: 'hco5', name: 'سبانش لاتيه', price: 75, category: 'hot-coffee' },
  // قهوة مثلجة
  { id: 'ic1', name: 'آيس لاتيه', price: 70, category: 'iced-coffee' },
  { id: 'ic2', name: 'آيس سبانش لاتيه', price: 80, category: 'iced-coffee' },
  { id: 'ic3', name: 'آيس موكا (دارك / وايت)', price: 80, category: 'iced-coffee' },
  { id: 'ic4', name: 'آيس لوتس', price: 80, category: 'iced-coffee' },
  { id: 'ic5', name: 'آيس كيندر', price: 80, category: 'iced-coffee' },
  { id: 'ic6', name: 'آيس فندق', price: 90, category: 'iced-coffee' },
  // بان كيك 12 قطعة
  { id: 'pk1', name: 'بان كيك فانيليا — 12 قطعة', price: 50, category: 'pancake' },
  { id: 'pk2', name: 'بان كيك لوتس — 12 قطعة', price: 55, category: 'pancake' },
  { id: 'pk3', name: 'بان كيك كيندر — 12 قطعة', price: 55, category: 'pancake' },
  { id: 'pk4', name: 'بان كيك وايت شوكليت — 12 قطعة', price: 55, category: 'pancake' },
  { id: 'pk5', name: 'بان كيك دارك شوكليت — 12 قطعة', price: 55, category: 'pancake' },
  { id: 'pk6', name: 'بان كيك فستق — 12 قطعة', price: 60, category: 'pancake' },
  { id: 'pk7', name: 'بان كيك كراميل — 12 قطعة', price: 60, category: 'pancake' },
  // بان كيك 24 قطعة
  { id: 'pk8', name: 'بان كيك فانيليا — 24 قطعة', price: 75, category: 'pancake' },
  { id: 'pk9', name: 'بان كيك لوتس — 24 قطعة', price: 70, category: 'pancake' },
  { id: 'pk10', name: 'بان كيك كيندر — 24 قطعة', price: 85, category: 'pancake' },
  { id: 'pk11', name: 'بان كيك وايت شوكليت — 24 قطعة', price: 85, category: 'pancake' },
  { id: 'pk12', name: 'بان كيك دارك شوكليت — 24 قطعة', price: 85, category: 'pancake' },
  { id: 'pk13', name: 'بان كيك فستق — 24 قطعة', price: 95, category: 'pancake' },
  { id: 'pk14', name: 'بان كيك كراميل — 24 قطعة', price: 70, category: 'pancake' },
  // وافل
  { id: 'wf1', name: 'وافل فانيليا', price: 60, category: 'waffles' },
  { id: 'wf2', name: 'وافل وايت شوكليت', price: 60, category: 'waffles' },
  { id: 'wf3', name: 'وافل كيندر', price: 70, category: 'waffles' },
  { id: 'wf4', name: 'وافل لوتس', price: 70, category: 'waffles' },
  { id: 'wf5', name: 'وافل فستق', price: 80, category: 'waffles' },
  // شيشة
  { id: 'sh1', name: 'شيشة فواكه', price: 80, category: 'shisha' },
  { id: 'sh2', name: 'شيشة MK', price: 100, category: 'shisha' },
  // حلويات طازجة
  { id: 'fd1', name: 'سلطة فواكه — وسط', price: 75, category: 'fresh-desserts' },
  { id: 'fd2', name: 'سلطة فواكه — كبير', price: 100, category: 'fresh-desserts' },
  { id: 'fd3', name: 'سلطة فواكه — XL', price: 120, category: 'fresh-desserts' },
];
