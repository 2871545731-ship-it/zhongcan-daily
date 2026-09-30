const imageAssets = {
  braisedPork: "https://howtocook.aiursoft.com/download/recipe-images/60e5dd35a11f4888929653094b5af220.jpg?w=800",
  mapoTofu: "https://howtocook.aiursoft.com/download/recipe-images/d44f6acc58984e89ba9f4b5a9c2f0edc.jpeg?w=800",
  steamedEgg: "https://howtocook.aiursoft.com/download/recipe-images/a8479b198b2a40d98ea22284e8333d8e.jpg?w=800",
  qianlongCabbage: "https://howtocook.aiursoft.com/download/recipe-images/388d5d04509040cd98bc2c46449f12b6.jpg?w=800",
  scrambledEgg: "https://howtocook.aiursoft.com/download/recipe-images/3a3f372b7f1047938932193c42f18788.jpg?w=800",
  friedNoodles: "https://howtocook.aiursoft.com/download/recipe-images/6c15fa41e6474116b1e955f61a1a79b9.png?w=800",
  guobaorou: "https://howtocook.aiursoft.com/download/recipe-images/275abbd980c34469b158f52d5dad51ed.jpg?w=800",
  screamingFrog: "https://howtocook.aiursoft.com/download/recipe-images/8375fc75104b42ecafbdd99f0bc4cb81.jpg?w=800",
  eggTart: "https://howtocook.aiursoft.com/download/recipe-images/24f0f22609e3431fafc47b1b8b1afbfc.png?w=800"
};

const recipes = {
  braisedPork: {
    name: "红烧肉",
    image: imageAssets.braisedPork,
    category: "今晚主菜",
    description: "色泽红亮、软糯不柴，是家常餐桌上的压轴菜。提前炖上，再去准备另外两道菜即可。",
    time: "90 分钟",
    calories: "约 1,100 kcal",
    difficulty: "中等",
    tags: ["下饭", "宴客"],
    pantry: ["五花肉", "生姜", "小葱"],
    ingredients: ["五花肉 800g", "冰糖 15g", "生抽 10ml", "老抽 15ml", "姜片、香叶、八角"],
    steps: ["五花肉切块后冷水下锅，焯水去腥。", "小火煸出油脂，加冰糖炒出糖色。", "加入酱油与热水，小火炖 40 分钟。", "开盖大火收汁，加盐调味。"]
  },
  qianlongCabbage: {
    name: "乾隆白菜",
    image: imageAssets.qianlongCabbage,
    category: "爽口素菜",
    description: "不炒不煮的北京风味凉菜，芝麻酱香气浓郁，酸甜脆爽，刚好平衡红烧肉的油脂。",
    time: "10 分钟",
    calories: "约 150 kcal",
    difficulty: "简单",
    tags: ["快手", "清淡"],
    pantry: ["大白菜", "芝麻酱"],
    ingredients: ["白菜心 1 颗", "芝麻酱 2 勺", "香醋 1 勺", "蜂蜜 半勺", "盐 少许"],
    steps: ["白菜心洗净后手撕成小片。", "芝麻酱用温水慢慢澥开。", "加入香醋、蜂蜜和盐调匀。", "拌入白菜，冷藏 5 分钟后食用。"]
  },
  steamedEgg: {
    name: "鸡蛋羹",
    image: imageAssets.steamedEgg,
    category: "温和配菜",
    description: "口感细腻像布丁，适合老人和孩子。和红烧肉一起准备，不用额外占用灶台。",
    time: "15 分钟",
    calories: "约 168 kcal",
    difficulty: "简单",
    tags: ["快手", "清淡"],
    pantry: ["鸡蛋", "小葱"],
    ingredients: ["鸡蛋 2 枚", "温水 180ml", "盐 1g", "生抽 少许", "香油 几滴"],
    steps: ["鸡蛋打散，加入温水和盐搅匀。", "过筛去除浮沫，倒入浅碗。", "盖盘后中火蒸 8 分钟。", "淋少量生抽和香油。"]
  },
  mapoTofu: {
    name: "麻婆豆腐",
    image: imageAssets.mapoTofu,
    category: "今晚主菜",
    description: "麻辣鲜香又下饭，豆腐滑嫩，适合配一碗热米饭。使用现成调味料时，新手也能快速完成。",
    time: "35 分钟",
    calories: "约 476 kcal",
    difficulty: "中等",
    tags: ["下饭", "微辣"],
    pantry: ["嫩豆腐", "猪肉末", "小葱", "生姜"],
    ingredients: ["嫩豆腐 400g", "肉末 100g", "豆瓣酱 1 勺", "花椒粉 少许", "葱蒜适量"],
    steps: ["豆腐切块，用淡盐水浸泡。", "炒香肉末、葱蒜和豆瓣酱。", "加少量水，放入豆腐轻推炖煮。", "勾薄芡，出锅前撒花椒粉。"]
  },
  scrambledEgg: {
    name: "炒滑蛋",
    image: imageAssets.scrambledEgg,
    category: "快手配菜",
    description: "五分钟就能出锅，蛋香浓郁、口感嫩滑。忙碌工作日用它补一道蛋白质最省事。",
    time: "5 分钟",
    calories: "约 391 kcal",
    difficulty: "简单",
    tags: ["快手", "高蛋白"],
    pantry: ["鸡蛋", "牛奶", "小葱"],
    ingredients: ["鸡蛋 3 枚", "牛奶 20ml", "盐 1g", "食用油 1 勺", "香葱 少许"],
    steps: ["鸡蛋、牛奶和盐充分搅匀。", "锅烧热后倒油，转中小火。", "倒入蛋液，用铲子从外向内推。", "蛋液刚凝固时立即离火装盘。"]
  },
  guobaorou: {
    name: "老式锅包肉",
    image: imageAssets.guobaorou,
    category: "东北名菜",
    description: "外壳酥脆、肉片滑嫩，酸甜口很讨喜。周末时间充足时做一盘，家里人会很快吃完。",
    time: "90 分钟",
    calories: "约 882 kcal",
    difficulty: "较难",
    tags: ["下饭", "宴客"],
    pantry: ["猪里脊", "鸡蛋", "生姜", "小葱"],
    ingredients: ["猪里脊 400g", "土豆淀粉 120g", "白醋 50ml", "白糖 40g", "葱姜适量"],
    steps: ["里脊切片，加盐和料酒腌制。", "淀粉加水调糊，静置后裹匀肉片。", "两次复炸至外壳酥脆。", "倒入糖醋汁快速翻匀出锅。"]
  },
  screamingFrog: {
    name: "尖叫牛蛙",
    image: imageAssets.screamingFrog,
    category: "川味家常",
    description: "鲜辣开胃，蛙肉滑嫩弹牙。适合喜欢重口味、愿意多花一点时间处理食材的人。",
    time: "70 分钟",
    calories: "约 1,643 kcal",
    difficulty: "较难",
    tags: ["下饭", "重口味"],
    pantry: ["牛蛙", "泡椒", "生姜", "大蒜"],
    ingredients: ["牛蛙 3 只", "泡椒 100g", "泡姜 30g", "大蒜 8 瓣", "青花椒 少许"],
    steps: ["牛蛙处理干净后切块腌制。", "炒香泡椒、泡姜、蒜和花椒。", "加入牛蛙快速翻炒并焖煮。", "收汁后撒葱段装盘。"]
  },
  eggTart: {
    name: "烤蛋挞",
    image: imageAssets.eggTart,
    category: "家庭甜点",
    description: "外皮酥脆、蛋奶馅嫩滑，适合作为周末下午茶，也可以提前做好冷冻保存。",
    time: "60 分钟",
    calories: "约 169 kcal / 个",
    difficulty: "简单",
    tags: ["清淡", "甜点"],
    pantry: ["鸡蛋", "牛奶", "蛋挞皮"],
    ingredients: ["蛋挞皮 12 个", "鸡蛋 2 枚", "牛奶 180ml", "淡奶油 120ml", "白糖 35g"],
    steps: ["鸡蛋、牛奶、淡奶油和糖搅匀。", "蛋挞液过筛，倒入挞皮中。", "烤箱预热后烤至表面焦斑。", "稍微放凉后食用。"]
  },
  friedNoodles: {
    name: "炒方便面",
    image: imageAssets.friedNoodles,
    category: "快手主食",
    description: "十五分钟搞定的家常主食，鸡蛋、火腿肠和青菜都能随手加入，适合忙碌的晚上。",
    time: "15 分钟",
    calories: "约 789 kcal",
    difficulty: "简单",
    tags: ["快手", "主食"],
    pantry: ["方便面", "鸡蛋", "火腿肠", "青菜"],
    ingredients: ["方便面 2 包", "鸡蛋 2 枚", "火腿肠 2 根", "青菜 200g", "生抽 1 勺"],
    steps: ["方便面煮散后过冷水沥干。", "鸡蛋炒熟，加入火腿肠和青菜。", "放入面条和少量调料翻炒。", "大火收干水分后出锅。"]
  }
};

const fallbackRecipeLibrary = [
  recipes.braisedPork,
  recipes.mapoTofu,
  recipes.scrambledEgg,
  recipes.qianlongCabbage,
  recipes.steamedEgg,
  recipes.guobaorou,
  recipes.screamingFrog,
  recipes.eggTart,
  recipes.friedNoodles
];

const importedRecipeLibrary = Array.isArray(window.HOWTOCOOK_RECIPES) ? window.HOWTOCOOK_RECIPES : [];
const recipeLibrary = importedRecipeLibrary.length ? importedRecipeLibrary : fallbackRecipeLibrary;
const recipeMetadata = window.HOWTOCOOK_META || null;

const pantryOptions = [
  "五花肉",
  "猪里脊",
  "猪肉末",
  "牛蛙",
  "鸡蛋",
  "嫩豆腐",
  "大白菜",
  "青菜",
  "方便面",
  "火腿肠",
  "牛奶",
  "芝麻酱",
  "生姜",
  "小葱",
  "泡椒",
  "大蒜",
  "蛋挞皮"
];

const recipeShopping = {
  "红烧肉": [["五花肉", "800g"], ["生姜", "1 块"], ["小葱", "1 把"], ["冰糖", "15g"]],
  "乾隆白菜": [["大白菜", "1 颗"], ["芝麻酱", "2 勺"], ["香醋", "1 瓶"]],
  "鸡蛋羹": [["鸡蛋", "2 枚"], ["小葱", "1 根"], ["香油", "1 瓶"]],
  "麻婆豆腐": [["嫩豆腐", "400g"], ["猪肉末", "100g"], ["小葱", "1 根"], ["豆瓣酱", "1 瓶"]],
  "炒滑蛋": [["鸡蛋", "3 枚"], ["牛奶", "20ml"], ["小葱", "1 根"]],
  "老式锅包肉": [["猪里脊", "400g"], ["鸡蛋", "1 枚"], ["生姜", "1 块"], ["白醋", "1 瓶"]],
  "尖叫牛蛙": [["牛蛙", "3 只"], ["泡椒", "100g"], ["生姜", "1 块"], ["大蒜", "1 头"]],
  "烤蛋挞": [["蛋挞皮", "12 个"], ["鸡蛋", "2 枚"], ["牛奶", "180ml"]],
  "炒方便面": [["方便面", "2 包"], ["鸡蛋", "2 枚"], ["火腿肠", "2 根"], ["青菜", "200g"]]
};

const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getWeekDates() {
  const today = new Date();
  const monday = new Date(today);
  const weekdayIndex = (today.getDay() + 6) % 7;
  monday.setDate(today.getDate() - weekdayIndex);
  return weekdays.map((_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return date;
  });
}

function createInitialWeek() {
  const dinnerPlans = [
    "红烧肉 · 乾隆白菜 · 鸡蛋羹",
    "麻婆豆腐 · 炒滑蛋 · 乾隆白菜",
    "老式锅包肉 · 鸡蛋羹 · 乾隆白菜",
    "红烧肉 · 炒滑蛋 · 鸡蛋羹",
    "尖叫牛蛙 · 乾隆白菜 · 鸡蛋羹",
    "麻婆豆腐 · 炒滑蛋 · 乾隆白菜",
    "老式锅包肉 · 红烧肉 · 鸡蛋羹"
  ];

  return getWeekDates().map((date, index) => ({
    date: dateKey(date),
    breakfast: index % 2 === 0 ? "鸡蛋羹" : "烤蛋挞",
    lunch: index % 3 === 0 ? "炒方便面" : index % 3 === 1 ? "麻婆豆腐" : "炒滑蛋",
    dinner: dinnerPlans[index]
  }));
}

const plans = [
  {
    mood: "清爽下饭",
    time: "45 分钟",
    title: "两荤一素，家常但不将就",
    description: "红烧肉配乾隆白菜和鸡蛋羹，口味有浓有淡，做饭时间可以并行安排。",
    tags: ["一荤一素", "适合 2-3 人", "不辣"],
    calories: "860 kcal",
    duration: "45 分钟",
    menu: [recipes.braisedPork, recipes.qianlongCabbage, recipes.steamedEgg],
    shopping: [["五花肉", "800g"], ["大白菜", "1 颗"], ["鸡蛋", "8 枚"], ["小葱", "1 把"], ["生姜", "1 块"], ["芝麻酱", "1 瓶"]]
  },
  {
    mood: "川味下饭",
    time: "38 分钟",
    title: "一热一凉一蒸，轻松解决晚餐",
    description: "麻婆豆腐做主角，搭配滑蛋和乾隆白菜，有辣也有清爽，适合爱吃米饭的家庭。",
    tags: ["下饭", "微辣", "快手"],
    calories: "780 kcal",
    duration: "38 分钟",
    menu: [recipes.mapoTofu, recipes.scrambledEgg, recipes.qianlongCabbage],
    shopping: [["嫩豆腐", "400g"], ["猪肉末", "100g"], ["鸡蛋", "8 枚"], ["大白菜", "1 颗"], ["豆瓣酱", "1 瓶"], ["香葱", "1 把"]]
  },
  {
    mood: "轻负担",
    time: "26 分钟",
    title: "少油快手，但依然有滋有味",
    description: "滑蛋、鸡蛋羹和麻婆豆腐都以家常基础食材为主，准备简单，适合不想久站灶台的时候。",
    tags: ["少油", "高蛋白", "30 分钟内"],
    calories: "720 kcal",
    duration: "26 分钟",
    menu: [recipes.scrambledEgg, recipes.steamedEgg, recipes.mapoTofu],
    shopping: [["鸡蛋", "10 枚"], ["嫩豆腐", "400g"], ["猪肉末", "100g"], ["豆瓣酱", "1 瓶"], ["牛奶", "1 盒"], ["香葱", "1 把"]]
  }
];

let currentPlanIndex = 0;
let toastTimer;
let servingCount = 1;
let activeRecipeFilter = "全部";
let selectedPantry = new Set();
let favoriteRecipes = new Set();
let weekPlan = [];
let plannerTarget = null;
let activeRecipe = null;
let cookingStepIndex = 0;
let completedCookingSteps = new Set();
let timerSeconds = 300;
let timerInterval = null;
let timerRunning = false;
let recipeSearchQuery = "";
let visibleRecipeCount = 24;
let plannerSearchQuery = "";

const defaultNutritionProfile = {
  age: 32,
  height: 172,
  weight: 68,
  gender: "male",
  activity: 1.55,
  goal: "maintain",
  noSpicy: false,
  highProtein: true
};

let nutritionProfile = defaultNutritionProfile;
let dailyNutritionTargets = null;

function readStoredValue(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function storeValue(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The prototype still works when local storage is disabled.
  }
}

servingCount = readStoredValue("meal-serving-count-v2", 1);
selectedPantry = new Set(readStoredValue("meal-pantry-items", []));
favoriteRecipes = new Set(readStoredValue("meal-favorite-recipes", []));
weekPlan = readStoredValue("meal-week-plan", []);
if (!Array.isArray(weekPlan) || weekPlan.length !== 7) weekPlan = createInitialWeek();
nutritionProfile = { ...defaultNutritionProfile, ...readStoredValue("meal-nutrition-profile", {}) };
dailyNutritionTargets = calculateNutritionTargets(nutritionProfile);

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function updateTodayLabel() {
  const now = new Date();
  const weekdayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.querySelector("#todayLabel").textContent =
    `${now.getMonth() + 1} 月 ${now.getDate()} 日 · ${weekdayNames[now.getDay()]} · ${hours}:${minutes}`;
}

function calculateNutritionTargets(profile) {
  const age = Number(profile.age) || defaultNutritionProfile.age;
  const height = Number(profile.height) || defaultNutritionProfile.height;
  const weight = Number(profile.weight) || defaultNutritionProfile.weight;
  const genderOffset = profile.gender === "female" ? -161 : 5;
  const baseMetabolicRate = 10 * weight + 6.25 * height - 5 * age + genderOffset;
  const maintenanceCalories = baseMetabolicRate * (Number(profile.activity) || defaultNutritionProfile.activity);
  const goalAdjustment = profile.goal === "lose" ? -400 : profile.goal === "gain" ? 300 : 0;
  const calories = Math.max(1200, Math.round((maintenanceCalories + goalAdjustment) / 10) * 10);
  const proteinFactor = profile.goal === "lose" ? 1.6 : profile.goal === "gain" ? 1.8 : 1.25;
  const protein = Math.round(weight * (proteinFactor + (profile.highProtein ? 0.2 : 0)));
  const fat = Math.round((calories * 0.27) / 9);
  const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);
  const vegetables = profile.goal === "lose" ? 550 : 500;

  return {
    calories,
    maintenanceCalories: Math.round(maintenanceCalories),
    protein,
    carbs: Math.max(80, carbs),
    fat,
    vegetables
  };
}

function estimateTodayNutrition() {
  const today = dateKey(new Date());
  const todayPlan = weekPlan.find((day) => day.date === today) || weekPlan[0];
  if (!todayPlan) {
    return { calories: 1890, protein: 94, carbs: 218, fat: 58, vegetables: 420 };
  }

  const names = ["breakfast", "lunch", "dinner"]
    .flatMap((slot) => String(todayPlan[slot] || "").split(" · "))
    .filter(Boolean);
  const matchedRecipes = names.map((name) => findRecipeByName(name)).filter(Boolean);
  const fallbackCalories = { breakfast: 420, lunch: 610, dinner: 860 };
  const calories = matchedRecipes.reduce(
    (total, recipe) => total + (recipe.caloriesValue || 0),
    0
  ) || Object.values(fallbackCalories).reduce((total, value) => total + value, 0);
  const vegetableDishes = matchedRecipes.filter((recipe) =>
    ["蔬菜", "素菜", "汤羹"].includes(recipe.category) ||
    recipe.tags?.includes("清淡")
  ).length;

  return {
    calories,
    protein: Math.round((calories * 0.2) / 4),
    carbs: Math.round((calories * 0.45) / 4),
    fat: Math.round((calories * 0.35) / 9),
    vegetables: Math.max(250, vegetableDishes * 160)
  };
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-CN").format(Math.round(value));
}

function updateNutritionDashboard() {
  if (!dailyNutritionTargets) return;

  const actual = estimateTodayNutrition();
  const calorieRatio = actual.calories / dailyNutritionTargets.calories;
  const displayPercent = Math.round(calorieRatio * 100);
  const ringOffset = 314 * (1 - Math.min(calorieRatio, 1));
  document.querySelector(".ring-value").style.strokeDashoffset = ringOffset;
  caloriePercent.textContent = `${displayPercent}%`;
  calorieProgress.textContent = `${formatNumber(actual.calories)} / ${formatNumber(dailyNutritionTargets.calories)}`;

  const nutrientRows = [
    [actual.protein, dailyNutritionTargets.protein, proteinValue, proteinProgress, "g"],
    [actual.carbs, dailyNutritionTargets.carbs, carbValue, carbProgress, "g"],
    [actual.fat, dailyNutritionTargets.fat, fatValue, fatProgress, "g"],
    [actual.vegetables, dailyNutritionTargets.vegetables, vegetableValue, vegetableProgress, "g"]
  ];
  nutrientRows.forEach(([value, target, valueElement, progressElement, unit]) => {
    valueElement.textContent = `${Math.round(value)} / ${Math.round(target)}${unit}`;
    progressElement.style.width = `${Math.min(100, Math.round((value / target) * 100))}%`;
  });

  const status = document.querySelector(".status-pill");
  if (displayPercent < 85) {
    status.textContent = "偏少";
    status.style.color = "#9a6726";
    status.style.background = "#f8eed9";
  } else if (displayPercent > 112) {
    status.textContent = "偏高";
    status.style.color = "#9d3f32";
    status.style.background = "#f8e3df";
  } else {
    status.textContent = "合适";
    status.style.color = "var(--green)";
    status.style.background = "var(--green-soft)";
  }
}

function loadProfileForm(profile = nutritionProfile) {
  document.querySelector("#profileAge").value = profile.age;
  document.querySelector("#profileHeight").value = profile.height;
  document.querySelector("#profileWeight").value = profile.weight;
  document.querySelector("#profileGender").value = profile.gender;
  document.querySelector("#profileActivity").value = String(profile.activity);
  document.querySelector("#profileGoal").value = profile.goal;
  document.querySelector("#profileNoSpicy").checked = profile.noSpicy;
  document.querySelector("#profileHighProtein").checked = profile.highProtein;
  updateProfilePreview();
}

function readProfileForm() {
  return {
    age: Number(document.querySelector("#profileAge").value),
    height: Number(document.querySelector("#profileHeight").value),
    weight: Number(document.querySelector("#profileWeight").value),
    gender: document.querySelector("#profileGender").value,
    activity: Number(document.querySelector("#profileActivity").value),
    goal: document.querySelector("#profileGoal").value,
    noSpicy: document.querySelector("#profileNoSpicy").checked,
    highProtein: document.querySelector("#profileHighProtein").checked
  };
}

function updateProfilePreview() {
  const previewProfile = readProfileForm();
  const targets = calculateNutritionTargets(previewProfile);
  profileCaloriePreview.textContent = `${formatNumber(targets.calories)} kcal`;
  const goalLabels = { maintain: "维持体重", lose: "稳步减脂", gain: "增肌增重" };
  profileTargetExplanation.textContent =
    `按${goalLabels[previewProfile.goal]}估算，维持热量约 ${formatNumber(targets.maintenanceCalories)} kcal，` +
    `蛋白质 ${targets.protein}g。`;
}

function openProfileModal() {
  loadProfileForm();
  profileModal.classList.add("is-open");
  profileModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProfileModal() {
  profileModal.classList.remove("is-open");
  profileModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

const heroImage = document.querySelector("#heroImage");
const planMood = document.querySelector("#planMood");
const planTime = document.querySelector("#planTime");
const dinnerTitle = document.querySelector("#dinnerTitle");
const planDescription = document.querySelector("#planDescription");
const planTags = document.querySelector("#planTags");
const dinnerMenuTitle = document.querySelector("#dinnerMenuTitle");
const dinnerMenuDescription = document.querySelector("#dinnerMenuDescription");
const dinnerCalories = document.querySelector("#dinnerCalories");
const dinnerDuration = document.querySelector("#dinnerDuration");
const shoppingList = document.querySelector(".shopping-list");
const toast = document.querySelector("#toast");
const modal = document.querySelector("#recipeModal");
const servingCountElement = document.querySelector("#servingCount");
const pantryChips = document.querySelector("#pantryChips");
const matchPercent = document.querySelector("#matchPercent");
const matchTitle = document.querySelector("#matchTitle");
const matchDescription = document.querySelector("#matchDescription");
const matchList = document.querySelector("#matchList");
const recipeGrid = document.querySelector("#recipeGrid");
const libraryCount = document.querySelector("#libraryCount");
const recipeSearchInput = document.querySelector("#recipeSearchInput");
const loadMoreRecipesButton = document.querySelector("#loadMoreRecipesButton");
const plannerSearchInput = document.querySelector("#plannerSearchInput");
const weekBoard = document.querySelector("#weekBoard");
const weekSummaryTitle = document.querySelector("#weekSummaryTitle");
const weekSummaryCopy = document.querySelector("#weekSummaryCopy");
const weekShoppingPreview = document.querySelector("#weekShoppingPreview");
const plannerModal = document.querySelector("#plannerModal");
const plannerRecipeList = document.querySelector("#plannerRecipeList");
const plannerSlotLabel = document.querySelector("#plannerSlotLabel");
const cookingMode = document.querySelector("#cookingMode");
const cookingRecipeTitle = document.querySelector("#cookingRecipeTitle");
const cookingRecipeImage = document.querySelector("#cookingRecipeImage");
const cookingStepText = document.querySelector("#cookingStepText");
const cookingStepIndexElement = document.querySelector("#cookingStepIndex");
const cookingStepHint = document.querySelector("#cookingStepHint");
const cookingProgressText = document.querySelector("#cookingProgressText");
const cookingProgressBar = document.querySelector("#cookingProgressBar");
const cookingIngredientList = document.querySelector("#cookingIngredientList");
const previousStepButton = document.querySelector("#previousStepButton");
const nextStepButton = document.querySelector("#nextStepButton");
const completeStepButton = document.querySelector("#completeStepButton");
const timerDisplay = document.querySelector("#timerDisplay");
const toggleTimerButton = document.querySelector("#toggleTimerButton");
const profileModal = document.querySelector("#profileModal");
const profileForm = document.querySelector("#profileForm");
const caloriePercent = document.querySelector("#caloriePercent");
const calorieProgress = document.querySelector("#calorieProgress");
const proteinValue = document.querySelector("#proteinValue");
const proteinProgress = document.querySelector("#proteinProgress");
const carbValue = document.querySelector("#carbValue");
const carbProgress = document.querySelector("#carbProgress");
const fatValue = document.querySelector("#fatValue");
const fatProgress = document.querySelector("#fatProgress");
const vegetableValue = document.querySelector("#vegetableValue");
const vegetableProgress = document.querySelector("#vegetableProgress");
const profileCaloriePreview = document.querySelector("#profileCaloriePreview");
const profileTargetExplanation = document.querySelector("#profileTargetExplanation");

function scaleAmount(amount, servings) {
  const match = amount.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return amount;

  const scaled = Number(match[1]) * (servings / 2);
  const value = Number.isInteger(scaled) ? String(scaled) : scaled.toFixed(1).replace(/\.0$/, "");
  return `${value}${match[2]}`;
}

function renderPlan() {
  const plan = plans[currentPlanIndex];
  servingCountElement.textContent = servingCount;
  heroImage.style.opacity = "0";
  window.setTimeout(() => {
    heroImage.src = plan.menu[0].image;
    heroImage.alt = plan.menu[0].name;
    heroImage.style.opacity = "1";
  }, 100);

  planMood.textContent = plan.mood;
  planTime.textContent = plan.time;
  dinnerTitle.textContent = plan.title;
  planDescription.textContent = plan.description;
  planTags.innerHTML = plan.tags.map((tag) => `<span>${tag}</span>`).join("");
  dinnerMenuTitle.textContent = plan.menu.map((recipe) => recipe.name).join(" · ");
  dinnerMenuDescription.textContent = `${plan.mood}，三菜搭配，适合日常晚餐。`;
  dinnerCalories.textContent = plan.calories;
  dinnerDuration.textContent = plan.duration;

  shoppingList.innerHTML = plan.shopping.map(([name, amount]) => `
    <label class="shopping-item">
      <input type="checkbox" />
      <span class="checkmark"><i data-lucide="check"></i></span>
      <span class="item-name">${name}</span>
      <span class="item-amount">${scaleAmount(amount, servingCount)}</span>
    </label>
  `).join("");

  refreshIcons();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function openRecipe(recipe) {
  activeRecipe = recipe;
  document.querySelector("#modalImage").src = recipe.image;
  document.querySelector("#modalImage").alt = recipe.name;
  document.querySelector("#modalCategory").textContent = recipe.category;
  document.querySelector("#modalTitle").textContent = recipe.name;
  document.querySelector("#modalDescription").textContent = recipe.description;
  document.querySelector("#modalTime").textContent = recipe.time;
  document.querySelector("#modalCalories").textContent = recipe.calories;
  document.querySelector("#modalDifficulty").textContent = recipe.difficulty;
  document.querySelector("#modalIngredients").innerHTML = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#modalSteps").innerHTML = recipe.steps.map((item) => `<li>${item}</li>`).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  refreshIcons();
}

function closeRecipe() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function getCookingProgressMap() {
  return readStoredValue("meal-cooking-progress", {});
}

function saveCookingProgress() {
  if (!activeRecipe) return;
  const progress = getCookingProgressMap();
  progress[activeRecipe.name] = [...completedCookingSteps];
  storeValue("meal-cooking-progress", progress);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function stopTimer() {
  if (timerInterval) window.clearInterval(timerInterval);
  timerInterval = null;
  timerRunning = false;
  toggleTimerButton.innerHTML = '<i data-lucide="play"></i>开始计时';
  refreshIcons();
}

function setTimerMinutes(minutes) {
  stopTimer();
  timerSeconds = minutes * 60;
  updateTimerDisplay();
  document.querySelectorAll("[data-timer-minutes]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.timerMinutes) === minutes);
  });
}

function toggleTimer() {
  if (timerRunning) {
    stopTimer();
    return;
  }

  if (timerSeconds <= 0) timerSeconds = 300;
  timerRunning = true;
  toggleTimerButton.innerHTML = '<i data-lucide="pause"></i>暂停计时';
  refreshIcons();
  timerInterval = window.setInterval(() => {
    timerSeconds = Math.max(0, timerSeconds - 1);
    updateTimerDisplay();
    if (timerSeconds === 0) {
      stopTimer();
      showToast("计时结束，可以继续下一步了");
    }
  }, 1000);
}

function renderCookingMode() {
  if (!activeRecipe) return;

  const steps = activeRecipe.steps;
  const step = steps[cookingStepIndex];
  const hints = ["准备阶段", "烹饪阶段", "调味阶段", "收尾阶段"];
  const progress = Math.round((completedCookingSteps.size / steps.length) * 100);

  cookingRecipeTitle.textContent = activeRecipe.name;
  cookingRecipeImage.src = activeRecipe.image;
  cookingRecipeImage.alt = activeRecipe.name;
  cookingStepText.textContent = step;
  cookingStepIndexElement.textContent = `步骤 ${cookingStepIndex + 1}`;
  cookingStepHint.textContent = hints[Math.min(cookingStepIndex, hints.length - 1)];
  cookingProgressText.textContent = `${completedCookingSteps.size} / ${steps.length}`;
  cookingProgressBar.style.width = `${progress}%`;

  cookingIngredientList.innerHTML = activeRecipe.ingredients.map((ingredient) => `
    <label class="cooking-ingredient">
      <input type="checkbox" />
      <span class="cooking-check"><i data-lucide="check"></i></span>
      <span>${ingredient}</span>
    </label>
  `).join("");

  const isComplete = completedCookingSteps.has(cookingStepIndex);
  completeStepButton.innerHTML = isComplete
    ? '<span>已完成</span><i data-lucide="check-check"></i>'
    : '<span>完成这一步</span><i data-lucide="check"></i>';
  previousStepButton.disabled = cookingStepIndex === 0;
  nextStepButton.disabled = cookingStepIndex === steps.length - 1;
  refreshIcons();
}

function openCookingMode() {
  if (!activeRecipe) return;
  const progress = getCookingProgressMap();
  completedCookingSteps = new Set(progress[activeRecipe.name] || []);
  cookingStepIndex = Math.min(completedCookingSteps.size, activeRecipe.steps.length - 1);
  closeRecipe();
  cookingMode.classList.add("is-open");
  cookingMode.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimerMinutes(5);
  renderCookingMode();
}

function closeCookingMode() {
  stopTimer();
  cookingMode.classList.remove("is-open");
  cookingMode.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function completeCurrentCookingStep() {
  if (!activeRecipe) return;
  completedCookingSteps.add(cookingStepIndex);
  saveCookingProgress();

  if (completedCookingSteps.size === activeRecipe.steps.length) {
    showToast(`${activeRecipe.name} 已全部完成，可以出锅了`);
  } else if (cookingStepIndex < activeRecipe.steps.length - 1) {
    cookingStepIndex += 1;
  }
  renderCookingMode();
}

function renderPantry() {
  pantryChips.innerHTML = pantryOptions.map((item) => `
    <button class="pantry-chip ${selectedPantry.has(item) ? "is-active" : ""}" type="button" data-pantry="${item}" aria-pressed="${selectedPantry.has(item)}">
      <i data-lucide="${selectedPantry.has(item) ? "check" : "plus"}"></i>
      ${item}
    </button>
  `).join("");
  refreshIcons();
  updateMatches();
}

function personalizedRecipeScore(recipe) {
  const activePreferences = new Set(
    [...document.querySelectorAll(".preference-chip.is-active")].map((button) => button.textContent.trim())
  );
  const tags = recipe.tags || [];
  let score = 0;

  if (nutritionProfile.noSpicy && (tags.includes("微辣") || tags.includes("重口味") || recipe.name.includes("辣"))) {
    score -= 35;
  }
  if (nutritionProfile.highProtein && tags.includes("高蛋白")) score += 8;
  if (activePreferences.has("45 分钟内") && recipe.timeMinutes <= 45) score += 5;
  if (activePreferences.has("有荤有素") && ["荤菜", "素菜", "水产"].includes(recipe.category)) score += 3;
  if (activePreferences.has("少辣") && !tags.includes("微辣") && !tags.includes("重口味")) score += 4;
  if (activePreferences.has("高蛋白") && tags.includes("高蛋白")) score += 6;
  if (activePreferences.has("控制预算") && recipe.difficultyValue <= 3) score += 2;
  if (activePreferences.has("冰箱优先") && selectedPantry.size) {
    score += recipe.pantry.filter((item) => selectedPantry.has(item)).length * 2;
  }

  const dinnerBudget = dailyNutritionTargets.calories * 0.34;
  if (nutritionProfile.goal === "lose") {
    score += recipe.caloriesValue && recipe.caloriesValue <= dinnerBudget ? 6 : -4;
  } else if (nutritionProfile.goal === "gain") {
    score += recipe.caloriesValue && recipe.caloriesValue >= dinnerBudget * 0.75 ? 4 : 0;
  }
  return score;
}

function updateMatches() {
  if (!selectedPantry.size) {
    matchPercent.textContent = "0%";
    matchTitle.textContent = "先选择冰箱里的食材";
    matchDescription.textContent = "选中后，这里会按缺少食材数量和烹饪时间排序。";
    matchList.innerHTML = [...recipeLibrary]
      .sort((a, b) => personalizedRecipeScore(b) - personalizedRecipeScore(a))
      .slice(0, 3)
      .map((recipe) => `
      <button class="match-item" type="button" data-recipe="${recipe.name}">
        <img src="${recipe.image}" alt="" />
        <span><strong>${recipe.name}</strong><small>${recipe.time} · ${recipe.difficulty}</small></span>
        <i data-lucide="chevron-right"></i>
      </button>
    `).join("");
    refreshIcons();
    return;
  }

  const ranked = recipeLibrary
    .map((recipe) => {
      const matched = recipe.pantry.filter((item) => selectedPantry.has(item));
      const missing = recipe.pantry.filter((item) => !selectedPantry.has(item));
      return {
        recipe,
        matched,
        missing,
        ratio: recipe.pantry.length ? matched.length / recipe.pantry.length : 0,
        score: (recipe.pantry.length ? matched.length / recipe.pantry.length : 0) * 100 +
          personalizedRecipeScore(recipe) -
          missing.length * 2
      };
    })
    .sort((a, b) => b.score - a.score || a.missing.length - b.missing.length);

  const best = ranked[0];
  const percent = Math.round(best.ratio * 100);
  matchPercent.textContent = `${percent}%`;
  matchTitle.textContent = best.recipe.name;
  matchDescription.textContent = best.missing.length
    ? `已经具备 ${best.matched.join("、")}，还差 ${best.missing.join("、")}。`
    : "当前食材已经足够，可以直接开始做。";

  matchList.innerHTML = ranked.slice(0, 3).map(({ recipe, matched, missing }) => `
    <button class="match-item" type="button" data-recipe="${recipe.name}">
      <img src="${recipe.image}" alt="" />
      <span>
        <strong>${recipe.name}</strong>
        <small>已有 ${matched.length} 样 · ${missing.length ? `还差 ${missing.join("、")}` : "现在就能做"}</small>
      </span>
      <i data-lucide="chevron-right"></i>
    </button>
  `).join("");
  refreshIcons();
}

function renderRecipeGrid() {
  const filterMatchedRecipes = activeRecipeFilter === "全部"
    ? recipeLibrary
    : recipeLibrary.filter((recipe) =>
      recipe.category === activeRecipeFilter || recipe.tags.includes(activeRecipeFilter)
    );
  const normalizedQuery = recipeSearchQuery.trim().toLowerCase();
  const matchingRecipes = normalizedQuery
    ? filterMatchedRecipes.filter((recipe) => {
      const searchableText = [
        recipe.name,
        recipe.category,
        recipe.description,
        ...(recipe.tags || []),
        ...(recipe.ingredients || []),
        ...(recipe.steps || [])
      ].join(" ").toLowerCase();
      return searchableText.includes(normalizedQuery);
    })
    : filterMatchedRecipes;
  const visibleRecipes = matchingRecipes.slice(0, visibleRecipeCount);

  libraryCount.textContent = normalizedQuery || activeRecipeFilter !== "全部"
    ? `找到 ${matchingRecipes.length} 道菜，当前显示 ${visibleRecipes.length} 道`
    : `已收录 ${matchingRecipes.length} 道菜，当前显示 ${visibleRecipes.length} 道`;

  if (!visibleRecipes.length) {
    recipeGrid.innerHTML = '<div class="empty-library">没有找到符合条件的菜谱，换个关键词试试。</div>';
    loadMoreRecipesButton.hidden = true;
    return;
  }

  recipeGrid.innerHTML = visibleRecipes.map((recipe) => `
    <article class="recipe-card" data-card-name="${recipe.name}">
      <div class="recipe-card-media">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
        <button class="favorite-button ${favoriteRecipes.has(recipe.name) ? "is-active" : ""}" type="button" data-favorite="${recipe.name}" aria-label="${favoriteRecipes.has(recipe.name) ? "取消收藏" : "收藏"}${recipe.name}" title="收藏">
          <i data-lucide="heart"></i>
        </button>
      </div>
      <div class="recipe-card-content">
        <div class="recipe-card-topline">
          <h3>${recipe.name}</h3>
          <span class="recipe-card-badge">${recipe.tags[0]}</span>
        </div>
        <p>${recipe.description}</p>
        <div class="recipe-card-footer">
          <div class="recipe-card-meta">
            <span><i data-lucide="clock-3"></i>${recipe.time}</span>
            <span><i data-lucide="flame"></i>${recipe.calories.replace("约 ", "")}</span>
          </div>
          <button class="recipe-open-button" type="button" data-open-recipe="${recipe.name}">
            查看做法
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  loadMoreRecipesButton.hidden = visibleRecipes.length >= matchingRecipes.length;
  refreshIcons();
}

function parseQuantity(amount) {
  const match = amount.match(/^(\d+(?:\.\d+)?)(.*)$/);
  return match ? { value: Number(match[1]), unit: match[2] } : { value: 1, unit: amount };
}

function formatQuantity(value, unit) {
  if (unit === "g" && value >= 1000) return `${(value / 1000).toFixed(value % 1000 ? 1 : 0)}kg`;
  if (unit === "ml" && value >= 1000) return `${(value / 1000).toFixed(value % 1000 ? 1 : 0)}L`;
  const display = Number.isInteger(value) ? value : value.toFixed(1);
  return `${display}${unit}`;
}

function aggregateWeekShopping() {
  const totals = new Map();

  weekPlan.forEach((day) => {
    ["breakfast", "lunch", "dinner"].forEach((slot) => {
      String(day[slot] || "")
        .split(" · ")
        .filter(Boolean)
        .forEach((name) => {
          const shoppingItems = recipeShopping[name] || findRecipeByName(name)?.shoppingItems || [];
          shoppingItems.forEach(([ingredient, amount]) => {
            const parsed = parseQuantity(amount);
            const current = totals.get(ingredient) || { ingredient, units: new Map() };
            current.units.set(parsed.unit, (current.units.get(parsed.unit) || 0) + parsed.value);
            totals.set(ingredient, current);
          });
        });
    });
  });

  return [...totals.values()]
    .map((item) => ({
      ingredient: item.ingredient,
      amount: [...item.units.entries()].map(([unit, value]) => formatQuantity(value, unit)).join(" + ")
    }))
    .sort((a, b) => a.ingredient.localeCompare(b.ingredient, "zh-CN"));
}

function saveWeekPlan() {
  storeValue("meal-week-plan", weekPlan);
}

function updateWeekSummary() {
  const items = aggregateWeekShopping();
  weekSummaryTitle.textContent = `本周需要 ${items.length} 样`;
  weekSummaryCopy.textContent = `已从 7 天菜单中合并同类食材，共 ${items.length} 项采购。`;
  weekShoppingPreview.innerHTML = items.map((item) => `
    <div class="week-shopping-row">
      <span>${item.ingredient}</span>
      <span>${item.amount}</span>
    </div>
  `).join("");
}

function renderWeekPlan() {
  const dates = getWeekDates();
  weekPlan = weekPlan.map((day, index) => ({ ...day, date: dateKey(dates[index]) }));
  saveWeekPlan();
  const todayKey = dateKey(new Date());
  const slotLabels = { breakfast: "早餐", lunch: "午餐", dinner: "晚餐" };

  weekBoard.innerHTML = weekPlan.map((day, dayIndex) => {
    const date = new Date(`${day.date}T12:00:00`);
    const isToday = day.date === todayKey;
    return `
      <article class="day-card ${isToday ? "is-today" : ""}">
        <div class="day-header">
          <div>
            <strong>${weekdays[dayIndex]}</strong>
            <small>${date.getMonth() + 1} 月 ${date.getDate()} 日</small>
          </div>
          ${isToday ? '<span class="today-mark">今天</span>' : ""}
        </div>
        <div class="day-slots">
          ${["breakfast", "lunch", "dinner"].map((slot) => {
            const mealName = day[slot];
            return `
              <button class="slot-button ${mealName ? "has-recipe" : "is-empty"}" type="button" data-day-index="${dayIndex}" data-slot="${slot}">
                <span>${slotLabels[slot]}</span>
                <strong>${mealName || "点击添加"}</strong>
              </button>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");

  updateWeekSummary();
  updateNutritionDashboard();
  refreshIcons();
}

function closePlannerPicker() {
  plannerModal.classList.remove("is-open");
  plannerModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  plannerTarget = null;
}

function renderPlannerOptions() {
  if (!plannerTarget) return;
  const normalizedQuery = plannerSearchQuery.trim().toLowerCase();
  const matchingRecipes = normalizedQuery
    ? recipeLibrary.filter((recipe) =>
      `${recipe.name} ${recipe.category} ${recipe.tags.join(" ")} ${recipe.ingredients.join(" ")}`
        .toLowerCase()
        .includes(normalizedQuery)
    )
    : recipeLibrary;
  const visibleRecipes = matchingRecipes.slice(0, 80);

  plannerRecipeList.innerHTML = visibleRecipes.map((recipe) => {
    const isCurrent = String(
      weekPlan[plannerTarget.dayIndex][plannerTarget.slot] || ""
    ).includes(recipe.name);
    return `
      <button class="planner-recipe-option" type="button" data-planner-recipe="${recipe.name}">
        <img src="${recipe.image}" alt="" loading="lazy" />
        <span>
          <strong>${recipe.name}</strong>
          <small>${recipe.time} · ${recipe.difficulty} · ${recipe.tags.join(" / ")}</small>
        </span>
        <i data-lucide="${isCurrent ? "check-circle-2" : "plus-circle"}"></i>
      </button>
    `;
  }).join("") + (
    matchingRecipes.length > visibleRecipes.length
      ? `<p class="planner-limit">还有 ${matchingRecipes.length - visibleRecipes.length} 道菜，请用搜索继续查找。</p>`
      : ""
  );

  refreshIcons();
}

function openPlannerPicker(dayIndex, slot) {
  plannerTarget = { dayIndex, slot };
  plannerSearchQuery = "";
  plannerSearchInput.value = "";
  const slotLabels = { breakfast: "早餐", lunch: "午餐", dinner: "晚餐" };
  plannerSlotLabel.textContent = `${weekdays[dayIndex]} · ${slotLabels[slot]}`;
  renderPlannerOptions();

  plannerModal.classList.add("is-open");
  plannerModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  refreshIcons();
}

function findRecipeByName(name) {
  return recipeLibrary.find((recipe) => recipe.name === name);
}

function toggleFavorite(name) {
  if (favoriteRecipes.has(name)) favoriteRecipes.delete(name);
  else favoriteRecipes.add(name);
  storeValue("meal-favorite-recipes", [...favoriteRecipes]);
  renderRecipeGrid();
}

function autoPlanWeek() {
  const isSpicy = (recipe) =>
    recipe.tags?.includes("微辣") || recipe.tags?.includes("重口味") || recipe.name.includes("辣");
  const rank = (recipes) => recipes
    .filter((recipe) => !nutritionProfile.noSpicy || !isSpicy(recipe))
    .sort((a, b) => personalizedRecipeScore(b) - personalizedRecipeScore(a));
  const breakfastPool = rank(recipeLibrary.filter((recipe) =>
    recipe.category === "早餐" || (recipe.timeMinutes <= 20 && /蛋|粥|面|饼|包/.test(recipe.name))
  ));
  const lunchPool = rank(recipeLibrary.filter((recipe) =>
    ["主食", "素菜", "荤菜", "水产"].includes(recipe.category) && recipe.timeMinutes <= 60
  ));
  const mainPool = rank(recipeLibrary.filter((recipe) => ["荤菜", "水产"].includes(recipe.category)));
  const sidePool = rank(recipeLibrary.filter((recipe) => ["素菜", "汤羹"].includes(recipe.category)));
  const usedNames = new Set();

  const pick = (pool, startIndex = 0) => {
    for (let offset = 0; offset < pool.length; offset += 1) {
      const recipe = pool[(startIndex + offset) % pool.length];
      if (recipe && !usedNames.has(recipe.name)) {
        usedNames.add(recipe.name);
        return recipe;
      }
    }
    return pool[startIndex % pool.length];
  };

  weekPlan = getWeekDates().map((date, index) => {
    const breakfast = pick(breakfastPool, index * 3);
    const lunch = pick(lunchPool, index * 5);
    const main = pick(mainPool, index * 7);
    const sideOne = pick(sidePool, index * 4);
    const sideTwo = pick(sidePool, index * 9 + 1);
    return {
      date: dateKey(date),
      breakfast: breakfast?.name || "鸡蛋羹",
      lunch: lunch?.name || "麻婆豆腐",
      dinner: [main, sideOne, sideTwo].filter(Boolean).map((recipe) => recipe.name).join(" · ")
    };
  });
  saveWeekPlan();
  renderWeekPlan();
  updateNutritionDashboard();
  showToast("已按营养目标、口味偏好和一桌荤素搭配排好一周");
}

function updateTodayShoppingFromWeek() {
  const items = aggregateWeekShopping();
  document.querySelector("#shoppingTitle").textContent = `本周需要 ${items.length} 样`;
  shoppingList.innerHTML = items.map((item) => `
    <label class="shopping-item">
      <input type="checkbox" />
      <span class="checkmark"><i data-lucide="check"></i></span>
      <span class="item-name">${item.ingredient}</span>
      <span class="item-amount">${item.amount}</span>
    </label>
  `).join("");
  refreshIcons();
  document.querySelector("#shopping").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("已把整周食材合并到采购清单");
}

document.querySelector("#swapPlanButton").addEventListener("click", () => {
  currentPlanIndex = (currentPlanIndex + 1) % plans.length;
  renderPlan();
  showToast("已换一桌，今晚试试这个搭配");
});

document.querySelector("#cookPlanButton").addEventListener("click", () => {
  const plan = plans[currentPlanIndex];
  showToast(`今晚菜单已确定：${plan.menu.map((recipe) => recipe.name).join("、")}`);
  document.querySelector("#week").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#openDinnerButton").addEventListener("click", () => {
  openRecipe(plans[currentPlanIndex].menu[0]);
});

document.querySelector("#closeModalButton").addEventListener("click", closeRecipe);
document.querySelector("#startCookingButton").addEventListener("click", openCookingMode);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeRecipe();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (cookingMode.classList.contains("is-open")) {
    closeCookingMode();
    return;
  }
  if (profileModal.classList.contains("is-open")) {
    closeProfileModal();
    return;
  }
  if (modal.classList.contains("is-open")) closeRecipe();
  if (plannerModal.classList.contains("is-open")) closePlannerPicker();
});

document.querySelector("#closeCookingButton").addEventListener("click", closeCookingMode);
previousStepButton.addEventListener("click", () => {
  cookingStepIndex = Math.max(0, cookingStepIndex - 1);
  renderCookingMode();
});
nextStepButton.addEventListener("click", () => {
  if (!activeRecipe) return;
  cookingStepIndex = Math.min(activeRecipe.steps.length - 1, cookingStepIndex + 1);
  renderCookingMode();
});
completeStepButton.addEventListener("click", completeCurrentCookingStep);
toggleTimerButton.addEventListener("click", toggleTimer);
document.querySelector("#resetTimerButton").addEventListener("click", () => {
  const activePreset = document.querySelector("[data-timer-minutes].is-active");
  setTimerMinutes(Number(activePreset?.dataset.timerMinutes || 5));
});
document.querySelectorAll("[data-timer-minutes]").forEach((button) => {
  button.addEventListener("click", () => setTimerMinutes(Number(button.dataset.timerMinutes)));
});

document.querySelector("#openProfileButton").addEventListener("click", openProfileModal);
document.querySelector("#closeProfileModalButton").addEventListener("click", closeProfileModal);
profileForm.addEventListener("input", updateProfilePreview);
profileForm.addEventListener("change", updateProfilePreview);
profileModal.addEventListener("click", (event) => {
  if (event.target === profileModal) closeProfileModal();
});
document.querySelector("#saveProfileButton").addEventListener("click", () => {
  if (!profileForm.reportValidity()) return;
  nutritionProfile = readProfileForm();
  dailyNutritionTargets = calculateNutritionTargets(nutritionProfile);
  storeValue("meal-nutrition-profile", nutritionProfile);
  closeProfileModal();
  updateNutritionDashboard();
  updateMatches();
  showToast("营养目标已更新，推荐排序已经同步调整");
});
document.querySelector("#resetProfileButton").addEventListener("click", () => {
  nutritionProfile = { ...defaultNutritionProfile };
  dailyNutritionTargets = calculateNutritionTargets(nutritionProfile);
  storeValue("meal-nutrition-profile", nutritionProfile);
  loadProfileForm();
  updateNutritionDashboard();
  updateMatches();
  showToast("已恢复默认营养档案");
});

document.querySelector("#generateListButton").addEventListener("click", () => {
  shoppingList.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
    window.setTimeout(() => {
      checkbox.checked = true;
    }, index * 70);
  });
  showToast("采购清单已按当前菜单更新");
});

document.querySelector("#increaseServingButton").addEventListener("click", () => {
  servingCount = Math.min(6, servingCount + 1);
  storeValue("meal-serving-count-v2", servingCount);
  renderPlan();
  showToast(`已调整为 ${servingCount} 人份`);
});

document.querySelector("#decreaseServingButton").addEventListener("click", () => {
  servingCount = Math.max(1, servingCount - 1);
  storeValue("meal-serving-count-v2", servingCount);
  renderPlan();
  showToast(`已调整为 ${servingCount} 人份`);
});

pantryChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pantry]");
  if (!button) return;

  const item = button.dataset.pantry;
  if (selectedPantry.has(item)) selectedPantry.delete(item);
  else selectedPantry.add(item);

  storeValue("meal-pantry-items", [...selectedPantry]);
  renderPantry();
});

document.querySelector("#clearPantryButton").addEventListener("click", () => {
  selectedPantry.clear();
  storeValue("meal-pantry-items", []);
  renderPantry();
  showToast("已清空冰箱食材");
});

matchList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-recipe]");
  if (!button) return;
  const recipe = findRecipeByName(button.dataset.recipe);
  if (recipe) openRecipe(recipe);
});

document.querySelector("#libraryFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeRecipeFilter = button.dataset.filter;
  visibleRecipeCount = 24;
  document.querySelectorAll("#libraryFilters .filter-button").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  renderRecipeGrid();
});

recipeSearchInput.addEventListener("input", () => {
  recipeSearchQuery = recipeSearchInput.value;
  visibleRecipeCount = 24;
  renderRecipeGrid();
});

loadMoreRecipesButton.addEventListener("click", () => {
  visibleRecipeCount += 24;
  renderRecipeGrid();
});

recipeGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }

  const openButton = event.target.closest("[data-open-recipe]");
  if (openButton) {
    const recipe = findRecipeByName(openButton.dataset.openRecipe);
    if (recipe) openRecipe(recipe);
  }
});

weekBoard.addEventListener("click", (event) => {
  const slotButton = event.target.closest("[data-day-index][data-slot]");
  if (!slotButton) return;
  openPlannerPicker(Number(slotButton.dataset.dayIndex), slotButton.dataset.slot);
});

plannerRecipeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-planner-recipe]");
  if (!button || !plannerTarget) return;

  weekPlan[plannerTarget.dayIndex][plannerTarget.slot] = button.dataset.plannerRecipe;
  saveWeekPlan();
  renderWeekPlan();
  closePlannerPicker();
  showToast(`已安排 ${button.dataset.plannerRecipe}`);
});

document.querySelector("#autoPlanButton").addEventListener("click", autoPlanWeek);
document.querySelector("#useWeekShoppingButton").addEventListener("click", updateTodayShoppingFromWeek);
document.querySelector("#closePlannerModalButton").addEventListener("click", closePlannerPicker);
plannerSearchInput.addEventListener("input", () => {
  plannerSearchQuery = plannerSearchInput.value;
  renderPlannerOptions();
});

plannerModal.addEventListener("click", (event) => {
  if (event.target === plannerModal) closePlannerPicker();
});

const savedPreferenceTags = new Set(readStoredValue("meal-recommendation-preferences", ["45 分钟内", "有荤有素"]));
document.querySelectorAll(".preference-chip").forEach((button) => {
  button.classList.toggle("is-active", savedPreferenceTags.has(button.textContent.trim()));
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
    const activePreferences = [...document.querySelectorAll(".preference-chip.is-active")]
      .map((item) => item.textContent.trim());
    storeValue("meal-recommendation-preferences", activePreferences);
    updateMatches();
  });
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => showToast(button.dataset.toast));
});

document.querySelectorAll(".nav-item, .mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-item, .mobile-nav a").forEach((item) => item.classList.remove("is-active"));
    const selector = link.classList.contains("nav-item") ? ".nav-item" : ".mobile-nav a";
    const sameGroup = [...document.querySelectorAll(selector)];
    sameGroup.forEach((item) => {
      if (item.getAttribute("href") === link.getAttribute("href")) item.classList.add("is-active");
    });
  });
});

renderPlan();
renderPantry();
renderRecipeGrid();
renderWeekPlan();
updateTodayLabel();
window.setInterval(updateTodayLabel, 60_000);
refreshIcons();

let deferredInstallPrompt = null;
const installAppButton = document.querySelector("#installAppButton");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installAppButton.hidden = false;
});

installAppButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installAppButton.hidden = true;
});

window.addEventListener("appinstalled", () => {
  installAppButton.hidden = true;
  showToast("已安装到桌面");
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Online use still works when service workers are unavailable.
    });
  });
}
