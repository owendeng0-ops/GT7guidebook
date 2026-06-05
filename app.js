const tracks = [
  {
    name: "Alsace",
    region: "Europe",
    country: "法国",
    layouts: 2,
    type: "原创公路",
    length: "5.42 km",
    baseLap: 132,
    profile: "起伏大、盲弯多，中速连续弯很考验刹车释放和油门耐心。",
    focus: ["先把出弯方向摆正再全油", "利用坡顶前的刹车标记", "避免在长弯中途二次大修正"],
    cars: ["Porsche 911 GT3 RS", "Alpine A110", "BMW M3 Sport Evolution"],
    tune: "轻量化和中性悬挂优先，差速器初始扭矩不要太高。",
  },
  {
    name: "Autodromo Nazionale Monza",
    region: "Europe",
    country: "意大利",
    layouts: 1,
    type: "真实赛道",
    length: "5.79 km",
    baseLap: 108,
    profile: "高速直道接重刹车组合，圈速主要来自刹车稳定性和低速牵引。",
    focus: ["练好 150/100 米牌刹车点", "路肩只吃第一层", "出弯早开油比晚刹更重要"],
    cars: ["Ferrari 296 GT3", "Audi R8 LMS Evo", "Toyota GR Supra Racing Concept"],
    tune: "低下压力、长齿比、强刹车稳定性；高马力车收益明显。",
  },
  {
    name: "Brands Hatch",
    region: "Europe",
    country: "英国",
    layouts: 2,
    type: "真实赛道",
    length: "3.92 km",
    baseLap: 86,
    profile: "窄、起伏多、弯心不可见，失误惩罚高。",
    focus: ["Paddock Hill Bend 少打方向", "后半段用半油维持车身", "不要压草地外侧"],
    cars: ["Mazda Roadster Touring Car", "Porsche Cayman GT4 Clubsport", "Aston Martin Vantage Gr.4"],
    tune: "偏软悬挂和稳定后轴，适合中等动力、高可控性的车。",
  },
  {
    name: "Circuit de Barcelona-Catalunya",
    region: "Europe",
    country: "西班牙",
    layouts: 3,
    type: "真实赛道",
    length: "4.66 km",
    baseLap: 100,
    profile: "综合型赛道，前段高速、后段低速，轮胎管理很关键。",
    focus: ["T3 保持最小转向角", "中段避免过早入弯", "最后一弯决定大直道速度"],
    cars: ["McLaren 650S Gr.3", "Porsche 911 RSR", "Renault Megane Trophy"],
    tune: "中高下压力，前胎温度压力大时降低入弯攻击性。",
  },
  {
    name: "Circuit de Sainte-Croix",
    region: "Europe",
    country: "法国",
    layouts: 6,
    type: "原创公路",
    length: "9.48 km",
    baseLap: 198,
    profile: "超长公路赛道，直道、桥面和大半径弯组合很多。",
    focus: ["优先记住长直道前一弯", "保持高档位扭矩", "别在高速弯强行补方向"],
    cars: ["Bugatti Veyron Gr.4", "Jaguar F-Type Gr.3", "Lexus LC500"],
    tune: "高速稳定和齿比优先，车重不是最大问题，拖曳和马力更重要。",
  },
  {
    name: "Circuit de Spa-Francorchamps",
    region: "Europe",
    country: "比利时",
    layouts: 1,
    type: "真实赛道",
    length: "7.00 km",
    baseLap: 141,
    profile: "高速经典赛道，天气变化和长弯负荷会放大车辆平衡差异。",
    focus: ["Eau Rouge/Raidillon 只做小修正", "Pouhon 入弯别贪", "Bus Stop 先稳再攻"],
    cars: ["Porsche 911 RSR", "Ferrari 458 Italia Gr.3", "Mercedes-AMG GT3"],
    tune: "中等下压力，雨战准备中性刹车和牵引控制 1-2。",
  },
  {
    name: "Dragon Trail",
    region: "Europe",
    country: "克罗地亚",
    layouts: 4,
    type: "原创街道",
    length: "5.21 km",
    baseLap: 98,
    profile: "高速海岸线与死亡弯墙面组合，精度要求很高。",
    focus: ["Chicane of Death 直线化", "海边长弯少用路肩", "最后一弯保出弯"],
    cars: ["Nissan GT-R NISMO GT3", "Lamborghini Huracan Gr.3", "Toyota 86 Gr.4"],
    tune: "刹车稳定和转向响应并重，过度灵敏的车很容易擦墙。",
  },
  {
    name: "Deep Forest Raceway",
    region: "Europe",
    country: "瑞士",
    layouts: 2,
    type: "原创森林赛道",
    length: "4.25 km",
    baseLap: 96,
    profile: "经典森林赛道，隧道、高速起伏和最后发夹弯让节奏变化很明显。",
    focus: ["隧道前后保持车身直", "高速下坡别急着补方向", "最后发夹弯晚 apex 早出弯"],
    cars: ["Toyota GR Supra RZ", "Porsche 911 GT3", "Subaru BRZ GT300"],
    tune: "中等下压力和稳定刹车，动力车要控制最后发夹弯出弯空转。",
  },
  {
    name: "Eiger Nordwand",
    region: "Europe",
    country: "瑞士",
    layouts: 2,
    type: "原创山路",
    length: "2.43 km",
    baseLap: 77,
    profile: "短小、高低差明显，低速发夹弯多。",
    focus: ["晚 apex 发夹弯", "上坡段保牵引", "下坡刹车提前半拍"],
    cars: ["Toyota GR Yaris", "Mitsubishi Lancer Evolution Final", "Renault Clio R.S."],
    tune: "四驱和短齿比很友好，刹车平衡可略向前。",
  },
  {
    name: "Goodwood Motor Circuit",
    region: "Europe",
    country: "英国",
    layouts: 1,
    type: "真实赛道",
    length: "3.81 km",
    baseLap: 86,
    profile: "老派高速机场赛道，宽但缺少现代缓冲，节奏流畅。",
    focus: ["高速弯保持油门连贯", "别用太多路肩", "刹车点用建筑和树线辅助"],
    cars: ["Jaguar E-Type", "Shelby Cobra", "Alfa Romeo Giulia GTAm"],
    tune: "经典车建议先补刹车和轮胎，再追求动力。",
  },
  {
    name: "24 Heures du Mans Racing Circuit",
    region: "Europe",
    country: "法国",
    layouts: 2,
    type: "真实赛道",
    length: "13.63 km",
    baseLap: 206,
    profile: "超长直道和 Porsche Curves 组合，极速与高速稳定缺一不可。",
    focus: ["Mulsanne 刹车点固定", "Porsche Curves 不要过度转向", "夜战提前看路牌"],
    cars: ["Toyota GR010 HYBRID", "Porsche 919 Hybrid", "Mazda 787B"],
    tune: "低阻力设定、长齿比、油耗策略优先；耐力赛要留湿胎方案。",
  },
  {
    name: "Autodrome Lago Maggiore",
    region: "Europe",
    country: "意大利",
    layouts: 8,
    type: "原创赛道",
    length: "5.81 km",
    baseLap: 116,
    profile: "多布局综合场，长弯和急刹区都有，适合建立基本功。",
    focus: ["中高速 S 弯少刹多滑行", "上坡出弯避免空转", "用全赛道宽度"],
    cars: ["Subaru BRZ GT300", "Lexus RC F GT3", "Mazda RX-Vision GT3"],
    tune: "平衡型车最吃香，别把前轴调得过尖。",
  },
  {
    name: "Nurburgring",
    region: "Europe",
    country: "德国",
    layouts: 7,
    type: "真实赛道",
    length: "20.83 km",
    baseLap: 398,
    profile: "北环是 GT7 最长技术课，记忆量、车身姿态和耐心都被放大。",
    focus: ["分段练习，不要一口气硬跑", "盲弯前保守 5%", "起伏处减少刹车转向重叠"],
    cars: ["Porsche 911 GT3 RS", "BMW M6 GT3", "Mercedes-AMG GT Black Series"],
    tune: "高速稳定、避震行程和刹车耐热优先，极限圈速前先做无事故圈。",
  },
  {
    name: "Red Bull Ring",
    region: "Europe",
    country: "奥地利",
    layouts: 2,
    type: "真实赛道",
    length: "4.32 km",
    baseLap: 88,
    profile: "短直道、重刹车和长上坡，超车点清晰。",
    focus: ["T1 出弯别越线", "上坡重刹保持直线", "最后两弯滚动速度决定圈速"],
    cars: ["Honda NSX Gr.3", "Audi R8 LMS Evo", "Ferrari 296 GT3"],
    tune: "牵引和刹车稳定比极限转向更重要，雨天提高下压力。",
  },
  {
    name: "Sardegna - Road Track",
    region: "Europe",
    country: "意大利",
    layouts: 3,
    type: "原创赛道",
    length: "5.11 km",
    baseLap: 101,
    profile: "高速弯、急停和连续变向密集，是刷钱和耐力常客。",
    focus: ["长下坡刹车分两段", "发夹弯别抢内线过早", "最后高速段保持车身轻"],
    cars: ["Nissan GT-R NISMO GT3", "Mazda 787B", "Toyota GR Supra Racing Concept"],
    tune: "耐力刷圈重视油耗、直线速度和稳定后轴。",
  },
  {
    name: "Sardegna - Windmills",
    region: "Europe",
    country: "意大利",
    layouts: 1,
    type: "原创泥地",
    length: "3.31 km",
    baseLap: 93,
    profile: "泥地赛道，弯前摆车和油门控制比抓地赛道更重要。",
    focus: ["提前让车尾入弯", "少做急方向", "跳跃落地时保持车身直"],
    cars: ["Toyota Celica GT-Four Rally Car", "Ford Focus Gr.B", "Audi Sport quattro S1"],
    tune: "拉力胎、软悬挂和短齿比，差速器偏向稳定牵引。",
  },
  {
    name: "Autopolis",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 2,
    type: "真实赛道",
    length: "4.67 km",
    baseLap: 105,
    profile: "技术型赛道，中低速弯密集，轮胎前轴消耗明显。",
    focus: ["长右弯不早给满油", "连续弯提前牺牲入口", "低速弯保持最短滑行"],
    cars: ["Subaru BRZ GT300", "Honda NSX Gr.4", "Mazda Roadster Touring Car"],
    tune: "需要灵活前轴，但过度转向会让后半圈很难稳定。",
  },
  {
    name: "BB Raceway",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 2,
    type: "原创椭圆",
    length: "1.66 km",
    baseLap: 38,
    profile: "短椭圆赛道，交通处理和稳定贴线很重要。",
    focus: ["用微小方向保持内线", "别在弯中猛收油", "多人赛注意出弯并线"],
    cars: ["Mazda Roadster", "Toyota GR86", "Honda Civic Type R"],
    tune: "短齿比、低拖曳，入门车也能练节奏。",
  },
  {
    name: "Fuji International Speedway",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 2,
    type: "真实赛道",
    length: "4.56 km",
    baseLap: 96,
    profile: "超长主直道接复杂低速第三扇区，调校取舍明显。",
    focus: ["T1 刹车不要锁死", "第三扇区用晚 apex", "最后一弯决定主直道"],
    cars: ["Toyota GR Supra Racing Concept", "Nissan GT-R GT500", "Honda NSX CONCEPT-GT"],
    tune: "直线速度与机械抓地平衡，尾速差距很容易被放大。",
  },
  {
    name: "High Speed Ring",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 2,
    type: "原创高速",
    length: "4.35 km",
    baseLap: 72,
    profile: "经典高速环形赛道，入门友好但极限很细。",
    focus: ["高速弯保持最小方向", "隧道后刹车点固定", "利用尾流但保留内线"],
    cars: ["Nissan Z Performance", "Toyota GR Supra RZ", "Porsche Cayman GT4"],
    tune: "低阻力和稳定后轴，动力车收益高。",
  },
  {
    name: "Kyoto Driving Park",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 5,
    type: "原创赛道",
    length: "6.37 km",
    baseLap: 128,
    profile: "现代高速技术场，长弯、连续 S 和短布局都很多。",
    focus: ["Yamagiwa 高速段不贪路肩", "Miyabi 练短弯节奏", "组合布局要记清分岔"],
    cars: ["Subaru WRX Gr.4", "Porsche 911 RSR", "Mazda RX-Vision GT3"],
    tune: "中高下压力，前后平衡要随布局调整。",
  },
  {
    name: "Mount Panorama",
    region: "Asia-Oceania",
    country: "澳大利亚",
    layouts: 1,
    type: "真实赛道",
    length: "6.21 km",
    baseLap: 127,
    profile: "山顶极窄、下山高速，墙面压迫感强。",
    focus: ["上山段宁可慢进快出", "下山 Skyline 前提前收车", "Conrod 直道前一弯不能失速"],
    cars: ["Ford Mustang Gr.3", "Mercedes-AMG GT3", "Holden-inspired Chevrolet Camaro ZL1"],
    tune: "后轴稳定和刹车耐心优先，强动力车需要更保守油门。",
  },
  {
    name: "Suzuka Circuit",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 2,
    type: "真实赛道",
    length: "5.81 km",
    baseLap: 122,
    profile: "世界级技术考试，S 弯、Degner、130R 都要求连续节奏。",
    focus: ["S 弯一错全错，慢进建立节奏", "Spoon 第一 apex 不要太早", "130R 方向越少越快"],
    cars: ["Honda NSX Gr.3", "Nissan GT-R GT500", "Toyota GR Supra Racing Concept"],
    tune: "中高下压力和稳定前轴，轮胎保护很影响后半圈。",
  },
  {
    name: "Tokyo Expressway",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 6,
    type: "原创城市高速",
    length: "7.30 km",
    baseLap: 116,
    profile: "城市高速墙面赛道，极速和车宽感决定容错。",
    focus: ["先做无擦墙圈", "高速变线提前半车身", "雨天别压白线和接缝"],
    cars: ["Nissan GT-R NISMO", "Mitsubishi GTO Twin Turbo", "Porsche 911 Turbo"],
    tune: "低阻力、强制动和温和差速器，雨战建议四驱。",
  },
  {
    name: "Tsukuba Circuit",
    region: "Asia-Oceania",
    country: "日本",
    layouts: 1,
    type: "真实赛道",
    length: "2.05 km",
    baseLap: 61,
    profile: "短小技术赛道，低速弯、轻量车和轮胎温度很关键。",
    focus: ["一号弯保持外内外", "发夹弯晚开油", "最后弯不要把前胎推爆"],
    cars: ["Mazda Roadster", "Honda Civic Type R", "Toyota GR86"],
    tune: "轻量化、短齿比和机械抓地，过大马力反而难开。",
  },
  {
    name: "Yas Marina Circuit",
    region: "Asia-Oceania",
    country: "阿联酋",
    layouts: 1,
    type: "真实赛道",
    length: "5.28 km",
    baseLap: 101,
    profile: "Spec III 新增现代 F1 场地，长直道和低速技术区衔接明显。",
    focus: ["长直道前的出弯牵引", "低速区保持车头指向", "夜间制动用固定路标"],
    cars: ["Ferrari 296 GT3", "McLaren 650S Gr.3", "Mercedes-AMG GT3"],
    tune: "中低下压力、强牵引和直线效率，适合 GT3 与高性能公路车。",
  },
  {
    name: "Blue Moon Bay Speedway",
    region: "Americas",
    country: "美国",
    layouts: 6,
    type: "原创椭圆",
    length: "3.20 km",
    baseLap: 49,
    profile: "高速椭圆和内场布局并存，尾流和轮胎保护很重要。",
    focus: ["弯中保持恒定半径", "别在尾流中急转", "内场布局重视出弯"],
    cars: ["Chevrolet Camaro ZL1", "Ford GT", "Dodge Viper GTS"],
    tune: "低阻力和长齿比，椭圆赛要控制前胎温度。",
  },
  {
    name: "Colorado Springs",
    region: "Americas",
    country: "美国",
    layouts: 2,
    type: "原创泥地",
    length: "3.14 km",
    baseLap: 88,
    profile: "泥地短赛道，跳跃和连续滑移多。",
    focus: ["弯前先摆车", "跳跃落地别补方向", "油门用节奏控制角度"],
    cars: ["Ford Focus Gr.B", "Subaru WRX Gr.B", "Toyota 86 Gr.B"],
    tune: "拉力胎、软悬挂、短齿比，优先稳定四驱。",
  },
  {
    name: "Daytona International Speedway",
    region: "Americas",
    country: "美国",
    layouts: 2,
    type: "真实赛道",
    length: "5.73 km",
    baseLap: 98,
    profile: "椭圆和公路赛结合，刹车入内场与高速尾流都要会。",
    focus: ["Bus Stop 路肩只吃可控部分", "椭圆段保持低角度", "内场出弯别过早全油"],
    cars: ["Chevrolet Corvette C8", "Ford GT Race Car", "Porsche 911 RSR"],
    tune: "直线速度优先，公路布局保留足够刹车稳定。",
  },
  {
    name: "Fishermans Ranch",
    region: "Americas",
    country: "美国",
    layouts: 2,
    type: "原创泥地",
    length: "6.89 km",
    baseLap: 196,
    profile: "长距离泥地，跳跃多、节奏变化大，容错比短泥地更重要。",
    focus: ["坡顶前让车身摆正", "长滑弯别急着反打", "优先完成干净圈"],
    cars: ["Audi Sport quattro S1", "Peugeot 205 Turbo 16", "Mitsubishi Lancer Gr.B"],
    tune: "软悬挂和稳定四驱，动力过剩会让长弯更慢。",
  },
  {
    name: "Grand Valley Highway 1",
    region: "Americas",
    country: "美国",
    layouts: 2,
    type: "原创公路",
    length: "5.10 km",
    baseLap: 119,
    profile: "重制经典公路赛道，高速海岸线和隧道刹车结合。",
    focus: ["隧道出口先稳车", "桥面高速段减少方向量", "最后技术区别抢油"],
    cars: ["Porsche 911 GT3", "Chevrolet Corvette ZR1", "Mazda RX-Vision GT3"],
    tune: "高速稳定和刹车信心并重，适合平衡型跑车。",
  },
  {
    name: "Autodromo Jose Carlos Pace",
    region: "Americas",
    country: "巴西",
    layouts: 1,
    type: "真实赛道",
    length: "4.31 km",
    baseLap: 91,
    profile: "Interlagos 起伏和反向弯多，低速牵引决定超车机会。",
    focus: ["Senna S 别切太狠", "中段双右弯保前胎", "最后上坡全油越早越好"],
    cars: ["Ayrton Senna F1 tribute builds", "Porsche 911 RSR", "Lexus RC F GT3"],
    tune: "中等下压力，刹车和出弯牵引是核心。",
  },
  {
    name: "Lake Louise",
    region: "Americas",
    country: "加拿大",
    layouts: 3,
    type: "原创雪地",
    length: "3.69 km",
    baseLap: 112,
    profile: "Spec II 后的雪地场地，低抓地和视线变化明显。",
    focus: ["用方向提前量控制滑移", "避免急刹急油", "上坡段保持惯性"],
    cars: ["Toyota GR Yaris", "Subaru WRX Gr.B", "Mitsubishi Lancer Evolution"],
    tune: "雪胎必备，四驱、短齿比和温和油门最稳。",
  },
  {
    name: "Michelin Raceway Road Atlanta",
    region: "Americas",
    country: "美国",
    layouts: 1,
    type: "真实赛道",
    length: "4.09 km",
    baseLap: 82,
    profile: "高速短赛道，Esses 与下坡刹车是核心。",
    focus: ["Esses 别过度切路肩", "下坡重刹保持直线", "最后一弯保出口速度"],
    cars: ["Chevrolet Corvette C8.R style Gr.3", "BMW M6 GT3", "Ford GT Race Car"],
    tune: "中低下压力，车身反应要快但不能神经质。",
  },
  {
    name: "Northern Isle Speedway",
    region: "Americas",
    country: "美国",
    layouts: 1,
    type: "原创短椭圆",
    length: "0.90 km",
    baseLap: 17,
    profile: "极短椭圆，交通、碰撞规避和轮胎热衰退很明显。",
    focus: ["保持内线半径", "别突然松油", "多人赛给侧向空间"],
    cars: ["Toyota S-FR Racing Concept", "Honda Beat", "Mazda Roadster"],
    tune: "低速牵引和稳定转向，短齿比收益明显。",
  },
  {
    name: "Special Stage Route X",
    region: "Americas",
    country: "美国",
    layouts: 1,
    type: "原创极速",
    length: "30.28 km",
    baseLap: 260,
    profile: "极速测试场，核心是尾速、齿比和尾流。",
    focus: ["利用尾流但避免蛇形", "齿比跑到极速平台", "转向输入尽量小"],
    cars: ["Bugatti Chiron", "Dodge SRT Tomahawk", "Chevrolet Corvette ZR1"],
    tune: "极低阻力、长齿比、高马力；弯道抓地几乎不是主导。",
  },
  {
    name: "Trial Mountain Circuit",
    region: "Americas",
    country: "美国",
    layouts: 2,
    type: "原创山地",
    length: "5.43 km",
    baseLap: 112,
    profile: "经典山地赛道，隧道、高速弯和最后减速弯很有节奏。",
    focus: ["隧道口预判光线变化", "高速弯不要追求满路肩", "最后 chicane 稳住出弯"],
    cars: ["Nissan Skyline GT-R R34", "Toyota Supra RZ", "Porsche 911 GT3"],
    tune: "平衡型公路车非常适合，悬挂别过硬。",
  },
  {
    name: "Watkins Glen International",
    region: "Americas",
    country: "美国",
    layouts: 2,
    type: "真实赛道",
    length: "5.43 km",
    baseLap: 106,
    profile: "高速流畅、路肩可用但有风险，节奏很爽快。",
    focus: ["Esses 保持最小转向", "Bus Stop 入弯别贪", "长右弯照顾前胎"],
    cars: ["Chevrolet Corvette C7 Gr.3", "Porsche 911 RSR", "BMW M6 GT3"],
    tune: "中低下压力和稳定高速响应，路肩吸收能力很重要。",
  },
  {
    name: "WeatherTech Raceway Laguna Seca",
    region: "Americas",
    country: "美国",
    layouts: 1,
    type: "真实赛道",
    length: "3.60 km",
    baseLap: 89,
    profile: "标志性 Corkscrew 和低抓地路面，刹车释放非常关键。",
    focus: ["Corkscrew 看左侧标记入弯", "最后一弯晚开油", "路面起伏处减少刹车转向叠加"],
    cars: ["Mazda RX-7", "Ford Mustang Boss 429", "Porsche Cayman GT4"],
    tune: "机械抓地优先，刹车平衡可略向后帮助旋转。",
  },
  {
    name: "Willow Springs International Raceway",
    region: "Americas",
    country: "美国",
    layouts: 3,
    type: "真实赛道",
    length: "3.95 km",
    baseLap: 82,
    profile: "沙漠高速弯赛道，出界惩罚高，节奏比视觉更快。",
    focus: ["T8/T9 少方向、少修正", "沙地边缘留半车宽余量", "小布局练重心转移"],
    cars: ["Chevrolet Camaro ZL1", "Dodge Viper", "Shelby GT350R"],
    tune: "高速稳定压倒一切，太活泼的尾部会很累。",
  },
  {
    name: "Circuit Gilles-Villeneuve",
    region: "Americas",
    country: "加拿大",
    layouts: 1,
    type: "真实赛道",
    length: "4.36 km",
    baseLap: 81,
    profile: "Spec III 新增加拿大街区式赛道，重刹车、出弯和墙面容错是主题。",
    focus: ["每个 chicane 只吃可控路肩", "发夹弯宁可晚 apex", "冠军墙前不要抢油"],
    cars: ["Ferrari 296 GT3", "Mercedes-AMG GT3", "Nissan GT-R NISMO GT3"],
    tune: "低阻力与制动稳定，强牵引的 GT3 更容易做连续稳定圈。",
  },
];

const difficultyMultipliers = {
  "新手": 1.13,
  "进阶": 1.06,
  "高手": 1.0,
};

const difficultyClasses = {
  "新手": "beginner",
  "进阶": "intermediate",
  "高手": "expert",
};

const officialNameAliases = {
  "Autodromo Jose Carlos Pace": "Autódromo de Interlagos",
  "BB Raceway": "Broad Bean Raceway",
  "Goodwood Motor Circuit": "Goodwood",
  "Grand Valley Highway 1": "Grand Valley - Highway 1",
  "Michelin Raceway Road Atlanta": "Michelin Raceway Road Atlanta",
  "Mount Panorama": "Mount Panorama Circuit",
  Nurburgring: "Nürburgring",
};

const trackChineseNames = {
  Alsace: "阿尔萨斯",
  "Autodromo Nazionale Monza": "蒙扎国家赛车场",
  "Brands Hatch": "布兰兹哈奇",
  "Circuit de Barcelona-Catalunya": "巴塞罗那-加泰罗尼亚赛道",
  "Circuit de Sainte-Croix": "圣十字赛道",
  "Circuit de Spa-Francorchamps": "斯帕-弗朗科尔尚赛道",
  "Dragon Trail": "龙之径",
  "Deep Forest Raceway": "深林赛道",
  "Eiger Nordwand": "艾格北壁",
  "Goodwood Motor Circuit": "古德伍德赛车场",
  "24 Heures du Mans Racing Circuit": "勒芒 24 小时赛道",
  "Autodrome Lago Maggiore": "马焦雷湖赛车场",
  Nurburgring: "纽伯格林",
  "Red Bull Ring": "红牛环",
  "Sardegna - Road Track": "撒丁岛公路赛道",
  "Sardegna - Windmills": "撒丁岛风车泥地",
  Autopolis: "奥托波利斯",
  "BB Raceway": "BB 赛车场",
  "Fuji International Speedway": "富士国际赛车场",
  "High Speed Ring": "高速环",
  "Kyoto Driving Park": "京都驾驶公园",
  "Mount Panorama": "全景山赛道",
  "Suzuka Circuit": "铃鹿赛道",
  "Tokyo Expressway": "东京高速公路",
  "Tsukuba Circuit": "筑波赛道",
  "Yas Marina Circuit": "亚斯码头赛道",
  "Blue Moon Bay Speedway": "蓝月湾赛道",
  "Colorado Springs": "科罗拉多泉",
  "Daytona International Speedway": "代托纳国际赛车场",
  "Fishermans Ranch": "渔夫牧场",
  "Grand Valley Highway 1": "大峡谷 1 号公路",
  "Autodromo Jose Carlos Pace": "何塞·卡洛斯·帕塞赛车场",
  "Lake Louise": "路易斯湖",
  "Michelin Raceway Road Atlanta": "米其林亚特兰大公路赛道",
  "Northern Isle Speedway": "北岛赛道",
  "Special Stage Route X": "特别赛段 X",
  "Trial Mountain Circuit": "试炼山赛道",
  "Watkins Glen International": "沃特金斯格伦国际赛道",
  "WeatherTech Raceway Laguna Seca": "拉古纳塞卡赛道",
  "Willow Springs International Raceway": "柳泉国际赛车场",
  "Circuit Gilles-Villeneuve": "吉尔·维伦纽夫赛道",
};

const cornerNameSets = {
  "Autodromo Nazionale Monza": ["第一减速弯", "大弯", "第二减速弯", "莱斯莫 1", "莱斯莫 2", "阿斯卡里", "帕拉波利卡"],
  "Brands Hatch": ["Paddock Hill Bend", "Druids", "Graham Hill Bend", "Surtees", "Hawthorn Bend", "Westfield", "Sheene Curve", "Stirlings", "Clearways", "Clark Curve"],
  "Circuit de Barcelona-Catalunya": ["Elf", "Renault", "Repsol", "Seat", "Würth", "Campsa", "La Caixa", "Banc Sabadell", "Europcar", "New Holland"],
  "Circuit de Spa-Francorchamps": ["La Source", "Eau Rouge", "Raidillon", "Les Combes", "Malmedy", "Bruxelles", "No Name", "Pouhon", "Fagnes", "Campus", "Stavelot", "Blanchimont", "Bus Stop"],
  "Goodwood Motor Circuit": ["Madgwick", "Fordwater", "St. Mary's", "Lavant", "Woodcote", "Chicane"],
  "24 Heures du Mans Racing Circuit": ["Dunlop", "Tertre Rouge", "Mulsanne", "Indianapolis", "Arnage", "Porsche Curves", "Ford Chicane"],
  Nurburgring: ["Hatzenbach", "Hocheichen", "Quiddelbacher Hohe", "Flugplatz", "Schwedenkreuz", "Aremberg", "Fuchsröhre", "Adenauer Forst", "Metzgesfeld", "Kallenhard", "Wehrseifen", "Ex-Mühle", "Bergwerk", "Kesselchen", "Karussell", "Hohe Acht", "Brünnchen", "Pflanzgarten", "Schwalbenschwanz", "Galgenkopf", "Döttinger Höhe"],
  "Red Bull Ring": ["Niki Lauda Kurve", "Remus", "Schlossgold", "Rauch", "Würth", "Rindt", "Red Bull Mobile"],
  "Fuji International Speedway": ["T1", "Coca-Cola", "100R", "Hairpin", "300R", "Dunlop", "GR Supra", "Panasonic"],
  "Mount Panorama": ["Hell Corner", "Griffins Bend", "The Cutting", "Reid Park", "Sulman Park", "McPhillamy Park", "Skyline", "The Esses", "Forrest's Elbow", "The Chase", "Murray's Corner"],
  "Suzuka Circuit": ["First Curve", "S Curves", "Dunlop", "Degner 1", "Degner 2", "Hairpin", "Spoon", "130R", "Casio Triangle"],
  "Tsukuba Circuit": ["First Corner", "Dunlop", "80R", "Hairpin", "Back Straight", "Final Corner"],
  "Yas Marina Circuit": ["North Hairpin", "Mars Drive", "Hotel", "Marina", "South Hairpin"],
  "Daytona International Speedway": ["International Horseshoe", "West Horseshoe", "Kink", "Bus Stop", "NASCAR 3", "NASCAR 4"],
  "Autodromo Jose Carlos Pace": ["Senna S", "Curva do Sol", "Descida do Lago", "Ferradura", "Laranjinha", "Pinheirinho", "Bico de Pato", "Mergulho", "Junção"],
  "Michelin Raceway Road Atlanta": ["Turn 1", "The Esses", "Turn 5", "Turn 6", "Turn 7", "Back Straight", "Turn 10A", "Turn 10B", "Turn 12"],
  "Watkins Glen International": ["The Ninety", "The Esses", "Bus Stop", "Carousel", "Laces", "Toe", "Heel"],
  "WeatherTech Raceway Laguna Seca": ["Andretti Hairpin", "Turn 3", "Turn 4", "Turn 5", "Corkscrew", "Rainey Curve", "Turn 10", "Turn 11"],
  "Willow Springs International Raceway": ["Castrol", "Rabbits Ear", "Omega", "The Balcony", "Monroe Ridge", "The Sweeper"],
  "Circuit Gilles-Villeneuve": ["Senna S", "Virage 3", "Pont de la Concorde", "Hairpin", "Wall of Champions"],
};

const nurburgringGpCornerNames = [
  "Yokohama-S",
  "Mercedes-Arena",
  "Valvoline-Kurve",
  "Ford-Kurve",
  "Dunlop-Kehre",
  "Michael-Schumacher-S",
  "Bit-Kurve",
  "RTL-Kurve",
  "Warsteiner-Kurve",
  "NGK-Schikane",
  "Coca-Cola-Kurve",
];

const nordschleifeCornerNames = [
  "Antoniusbuche",
  "Tiergarten",
  "Hohenrain",
  "T13",
  "Hatzenbach",
  "Hocheichen",
  "Quiddelbacher-Höhe",
  "Flugplatz",
  "Schwedenkreuz",
  "Aremberg",
  "Fuchsröhre",
  "Adenauer Forst",
  "Metzgesfeld",
  "Kallenhard",
  "Wehrseifen",
  "Ex-Mühle",
  "Lauda Links",
  "Bergwerk",
  "Kesselchen",
  "Klostertal",
  "Steilstrecke",
  "Karussell",
  "Hohe Acht",
  "Hedwigshöhe",
  "Wippermann",
  "Eschbach",
  "Brünnchen",
  "Eiskurve",
  "Pflanzgarten I",
  "Pflanzgarten II",
  "Stefan-Bellof-S",
  "Schwalbenschwanz",
  "Kleines Karussell",
  "Galgenkopf",
  "Döttinger Höhe",
  "Antoniusbuche Return",
  "Tiergarten Return",
  "Hohenrain-Schikane",
];

const layoutCornerNameSets = {
  "12ceac": nordschleifeCornerNames,
  "8dd16b": nordschleifeCornerNames,
  "2066d9": nurburgringGpCornerNames,
  "9ec2c6": nurburgringGpCornerNames,
  "31acde": [...nurburgringGpCornerNames, ...nordschleifeCornerNames],
  "592211": [...nurburgringGpCornerNames, ...nordschleifeCornerNames],
  fd4818: [...nurburgringGpCornerNames, ...nordschleifeCornerNames],
};

const nurburgringGpCornerPositions = [
  { x: 73.9, y: 19, name: "Yokohama-S" },
  { x: 66, y: 12, name: "Mercedes-Arena" },
  { x: 40, y: 20.5, name: "Valvoline-Kurve" },
  { x: 28.5, y: 39.4, name: "Ford-Kurve" },
  { x: 42.8, y: 40, name: "Dunlop-Kehre" },
  { x: 40.1, y: 54.2, name: "Michael-Schumacher-S" },
  { x: 40.9, y: 68.1, name: "Bit-Kurve" },
  { x: 24.2, y: 88.6, name: "RTL-Kurve" },
  { x: 21, y: 91.8, name: "Warsteiner-Kurve" },
  { x: 34.7, y: 77.2, name: "NGK-Schikane" },
  { x: 47.3, y: 38.1, name: "Coca-Cola-Kurve" },
];

const nurburgringEnduranceGpCornerPositions = [
  { x: 36, y: 80, name: "Yokohama-S" },
  { x: 31.3, y: 84.3, name: "Mercedes-Arena" },
  { x: 26, y: 85.9, name: "Valvoline-Kurve" },
  { x: 25, y: 90, name: "Ford-Kurve" },
  { x: 27.3, y: 83.7, name: "Dunlop-Kehre" },
  { x: 30.2, y: 77.7, name: "Michael-Schumacher-S" },
  { x: 34.8, y: 76.8, name: "Bit-Kurve" },
  { x: 39.4, y: 76.5, name: "RTL-Kurve" },
  { x: 37.8, y: 78.7, name: "Warsteiner-Kurve" },
  { x: 34, y: 82, name: "NGK-Schikane" },
  { x: 35.3, y: 81.3, name: "Coca-Cola-Kurve" },
];

const nordschleifeCornerPositions = [
  { x: 36, y: 82, name: "Antoniusbuche" },
  { x: 35.2, y: 81.2, name: "Tiergarten" },
  { x: 35.6, y: 81, name: "Hohenrain" },
  { x: 35.8, y: 81, name: "T13" },
  { x: 34.9, y: 81.5, name: "Hatzenbach" },
  { x: 20.6, y: 78, name: "Hocheichen" },
  { x: 17.1, y: 75.4, name: "Quiddelbacher-Höhe" },
  { x: 14, y: 64, name: "Flugplatz" },
  { x: 11.5, y: 55.3, name: "Schwedenkreuz" },
  { x: 9.4, y: 48.9, name: "Aremberg" },
  { x: 18.1, y: 36.9, name: "Fuchsröhre" },
  { x: 21.8, y: 32.8, name: "Adenauer Forst" },
  { x: 22, y: 24, name: "Metzgesfeld" },
  { x: 25.6, y: 19.1, name: "Kallenhard" },
  { x: 28.6, y: 19.5, name: "Wehrseifen" },
  { x: 38.3, y: 18.3, name: "Ex-Mühle" },
  { x: 41, y: 17.1, name: "Lauda Links" },
  { x: 47.8, y: 14.3, name: "Bergwerk" },
  { x: 49.8, y: 15.2, name: "Kesselchen" },
  { x: 50.5, y: 21.6, name: "Klostertal" },
  { x: 58, y: 24.2, name: "Steilstrecke" },
  { x: 72.5, y: 25.1, name: "Karussell" },
  { x: 75.5, y: 23.9, name: "Hohe Acht" },
  { x: 84.2, y: 19.8, name: "Hedwigshöhe" },
  { x: 83.6, y: 20.6, name: "Wippermann" },
  { x: 86, y: 19.8, name: "Eschbach" },
  { x: 92, y: 22.8, name: "Brünnchen" },
  { x: 92.4, y: 27.4, name: "Eiskurve" },
  { x: 90.6, y: 33.5, name: "Pflanzgarten I" },
  { x: 88.6, y: 37.4, name: "Pflanzgarten II" },
  { x: 85.5, y: 43.4, name: "Stefan-Bellof-S" },
  { x: 81.6, y: 48, name: "Schwalbenschwanz" },
  { x: 72.7, y: 48.9, name: "Kleines Karussell" },
  { x: 75, y: 51, name: "Galgenkopf" },
  { x: 63.6, y: 64.1, name: "Döttinger Höhe" },
  { x: 51.4, y: 71.8, name: "Antoniusbuche Return" },
  { x: 44.8, y: 77.3, name: "Tiergarten Return" },
  { x: 36.5, y: 81.5, name: "Hohenrain-Schikane" },
];

const nordschleifeEnduranceCornerPositions = [
  { x: 35.3, y: 81.3, name: "Antoniusbuche" },
  { x: 35.2, y: 81.2, name: "Tiergarten" },
  { x: 35.6, y: 80.9, name: "Hohenrain" },
  { x: 35.7, y: 80.9, name: "T13" },
  { x: 34.9, y: 81.5, name: "Hatzenbach" },
  { x: 23.6, y: 75, name: "Hocheichen" },
  { x: 20.2, y: 73.1, name: "Quiddelbacher-Höhe" },
  { x: 13.2, y: 64.7, name: "Flugplatz" },
  { x: 13, y: 55.1, name: "Schwedenkreuz" },
  { x: 10.5, y: 48.4, name: "Aremberg" },
  { x: 17.3, y: 36.7, name: "Fuchsröhre" },
  { x: 19.2, y: 31.5, name: "Adenauer Forst" },
  { x: 22.8, y: 25.3, name: "Metzgesfeld" },
  { x: 24.9, y: 19.8, name: "Kallenhard" },
  { x: 25.2, y: 20.4, name: "Wehrseifen" },
  { x: 37.4, y: 15.5, name: "Ex-Mühle" },
  { x: 38.2, y: 15, name: "Lauda Links" },
  { x: 49.2, y: 14.1, name: "Bergwerk" },
  { x: 49.8, y: 15.2, name: "Kesselchen" },
  { x: 52.2, y: 17.5, name: "Klostertal" },
  { x: 58.9, y: 18.6, name: "Steilstrecke" },
  { x: 74.3, y: 22.2, name: "Karussell" },
  { x: 75.3, y: 22.5, name: "Hohe Acht" },
  { x: 82.7, y: 18.3, name: "Hedwigshöhe" },
  { x: 82.2, y: 18.8, name: "Wippermann" },
  { x: 83.3, y: 17.6, name: "Eschbach" },
  { x: 92.3, y: 22.5, name: "Brünnchen" },
  { x: 92.4, y: 27.2, name: "Eiskurve" },
  { x: 89.4, y: 33.5, name: "Pflanzgarten I" },
  { x: 88.2, y: 36.4, name: "Pflanzgarten II" },
  { x: 83.4, y: 41.2, name: "Stefan-Bellof-S" },
  { x: 80.3, y: 43.2, name: "Schwalbenschwanz" },
  { x: 73.1, y: 47.3, name: "Kleines Karussell" },
  { x: 75, y: 51, name: "Galgenkopf" },
  { x: 61.3, y: 59.9, name: "Döttinger Höhe" },
  { x: 49, y: 67.7, name: "Antoniusbuche Return" },
  { x: 42.6, y: 75.1, name: "Tiergarten Return" },
  { x: 35.8, y: 80.8, name: "Hohenrain-Schikane" },
];

const layoutCornerPositions = {
  "12ceac": nordschleifeCornerPositions,
  "8dd16b": nordschleifeCornerPositions,
  "2066d9": nurburgringGpCornerPositions,
  "31acde": [...nurburgringEnduranceGpCornerPositions, ...nordschleifeEnduranceCornerPositions],
  "592211": [...nurburgringEnduranceGpCornerPositions, ...nordschleifeEnduranceCornerPositions],
};

const officialTrackMeta = buildOfficialTrackMeta();
const officialMapIds = new Set([
  "000971",
  "083de2",
  "08df62",
  "16ccbf",
  "184eaa",
  "1d5980",
  "246f6d",
  "28b64f",
  "39f155",
  "512b99",
  "664e17",
  "71bfba",
  "748156",
  "8d9953",
  "971481",
  "9a42fb",
  "a768c9",
  "bbe708",
  "c5de8a",
  "c75e61",
  "cea600",
  "de15df",
  "e9dd33",
  "ee72eb",
  "f2875b",
  "f3d2aa",
  "f8bd64",
  "f99788",
  "fb6d1f",
  "fd167d",
  "fe330b",
]);

const TRAINING_STORAGE_KEY = "gt7-track-atlas-training-v1";
const TRAINING_STORAGE_KEY_V12 = "gt7-track-atlas-training-v1.2";
const CORNER_CALIBRATION_STORAGE_KEY = "gt7-track-atlas-corner-calibration-v1";
const TELEMETRY_WS_URL = "ws://127.0.0.1:8787/live";
const TELEMETRY_HEALTH_URL = "http://127.0.0.1:8787/health";
const TELEMETRY_PENDING_STORAGE_KEY = "gt7-track-atlas-telemetry-pending-v1";
const TELEMETRY_DB_NAME = "gt7-track-atlas-telemetry-v1";
const TELEMETRY_DB_VERSION = 1;
const TELEMETRY_TRACE_STORE = "lap-traces";
const TELEMETRY_TEMPLATE_STORE = "layout-templates";
const TELEMETRY_MATCH_THRESHOLDS = {
  suggested: 0.85,
  confirm: 0.65,
};
const LICENSE_TARGET_STORAGE_KEY = "gt7-track-atlas-license-targets-v1";
const LICENSE_SCOPE_STORAGE_KEY = "gt7-track-atlas-license-scopes-v1";
const LICENSE_LEVELS = ["B", "A", "IB", "IA", "S"];
const LICENSE_SERIES = [
  { id: "normal", label: "普通驾照" },
  { id: "master", label: "Master 驾照" },
];
const LICENSE_TESTS = [
  { id: "B-1", level: "B", title: "Starting & Stopping 1", type: "start-stop", car: "Mazda Demio XD Touring '15", track: "High Speed Ring", gold: 20.0, silver: 21.6, bronze: 22.0 },
  { id: "B-2", level: "B", title: "Starting & Stopping 2", type: "start-stop", car: "Mitsubishi GTO Twin Turbo '91", track: "High Speed Ring", gold: 16.5, silver: 16.9, bronze: 18.1 },
  { id: "B-3", level: "B", title: "Cornering Basics 1", type: "corner-basic", car: "Daihatsu Copen Active Top '02", track: "Alsace - Village", gold: 14.6, silver: 15.0, bronze: 16.2 },
  { id: "B-4", level: "B", title: "Cornering Basics 2", type: "corner-basic", car: "Audi TT Coupe 3.2 quattro '03", track: "Alsace - Village", gold: 11.5, silver: 11.9, bronze: 13.0 },
  { id: "B-5", level: "B", title: "Cornering Basics 3", type: "corner-basic", car: "Autobianchi A112 Abarth '85", track: "Tsukuba Circuit", gold: 12.7, silver: 13.0, bronze: 13.9 },
  { id: "B-6", level: "B", title: "Cornering Basics 4", type: "corner-basic", car: "Nissan Fairlady Z (Z34) '08", track: "Tsukuba Circuit", gold: 10.7, silver: 11.0, bronze: 11.7 },
  { id: "B-7", level: "B", title: "Cornering Basics 5", type: "corner-basic", car: "Toyota GR86 RZ '21", track: "Trial Mountain Circuit", gold: 17.3, silver: 17.8, bronze: 19.1 },
  { id: "B-8", level: "B", title: "Cornering Basics 6", type: "corner-basic", car: "Mitsubishi Lancer Evolution IV GSR '96", track: "Mount Panorama", gold: 13.4, silver: 13.8, bronze: 14.8 },
  { id: "B-9", level: "B", title: "Cornering Basics 7", type: "corner-basic", car: "Honda Civic Type R Limited Edition (FK8) '20", track: "Dragon Trail - Seaside", gold: 17.3, silver: 18.8, bronze: 19.0 },
  { id: "B-10", level: "B", title: "Driving Basics", type: "combined", car: "Renault Sport Clio R.S. 220 EDC Trophy '16", track: "Tsukuba Circuit", gold: 24.6, silver: 25.2, bronze: 27.0 },
  { id: "A-1", level: "A", title: "Racing Line: Beginner 1", type: "racing-line", car: "Subaru BRZ STI Sport '18", track: "Tsukuba Circuit", gold: 17.2, silver: 17.6, bronze: 18.6 },
  { id: "A-2", level: "A", title: "Racing Line: Beginner 2", type: "racing-line", car: "Volkswagen Scirocco R '10", track: "Dragon Trail - Gardens", gold: 17.8, silver: 18.4, bronze: 19.6 },
  { id: "A-3", level: "A", title: "Racing Line: Beginner 3", type: "racing-line", car: "Abarth 500 '09", track: "Autodromo Nazionale Monza", gold: 21.5, silver: 22.1, bronze: 23.7 },
  { id: "A-4", level: "A", title: "Urban Tracks 1", type: "urban", car: "Honda CIVIC TYPE R (EK) '98", track: "Tokyo Expressway - Central Clockwise", gold: 29.6, silver: 30.5, bronze: 32.6 },
  { id: "A-5", level: "A", title: "Cornering in the Wet: Beginner", type: "wet", car: "Nissan 180SX Type X '96", track: "Circuit de Spa-Francorchamps", gold: 29.4, silver: 30.2, bronze: 32.5 },
  { id: "A-6", level: "A", title: "Consecutive Corners: Beginner 1", type: "consecutive", car: "Alfa Romeo 4C '14", track: "Autodromo Nazionale Monza", gold: 18.2, silver: 18.8, bronze: 20.2 },
  { id: "A-7", level: "A", title: "Consecutive Corners: Beginner 2", type: "consecutive", car: "BMW M3 '03", track: "Circuit de Barcelona-Catalunya Grand Prix", gold: 25.0, silver: 25.8, bronze: 27.5 },
  { id: "A-8", level: "A", title: "Dirt Driving: Beginner", type: "dirt", car: "Toyota Tundra TRD Pro '19", track: "Colorado Springs - Lake", gold: 20.8, silver: 21.4, bronze: 23.1 },
  { id: "A-9", level: "A", title: "Hairpins", type: "hairpin", car: "Honda NSX Type R '92", track: "Suzuka Circuit", gold: 16.9, silver: 17.4, bronze: 18.5 },
  { id: "A-10", level: "A", title: "Racing Line Basics", type: "racing-line", car: "Toyota SUPRA RZ '97", track: "Autopolis International Racing Course", gold: 28.3, silver: 29.1, bronze: 31.0 },
  { id: "IB-1", level: "IB", title: "Racing Line: Intermediate 1", type: "racing-line", car: "Chevrolet Corvette Stingray (C7) '14", track: "Willow Springs International Raceway: Big Willow", gold: 17.2, silver: 17.7, bronze: 19.0 },
  { id: "IB-2", level: "IB", title: "Racing Line: Intermediate 2", type: "racing-line", car: "Ferrari F430 '06", track: "Daytona Road Course", gold: 14.7, silver: 15.2, bronze: 16.3 },
  { id: "IB-3", level: "IB", title: "High Speed Corners", type: "high-speed", car: "Lexus RC F '14", track: "Fuji International Speedway", gold: 36.0, silver: 37.7, bronze: 40.4 },
  { id: "IB-4", level: "IB", title: "Urban Tracks 2", type: "urban", car: "Nissan SKYLINE GT-R V spec II Nur (R34) '02", track: "Tokyo Expressway - East Clockwise", gold: 30.8, silver: 31.7, bronze: 33.8 },
  { id: "IB-5", level: "IB", title: "Dirt Driving: Intermediate", type: "dirt", car: "Mitsubishi Lancer Evolution V GSR '98", track: "Sardegna - Windmills", gold: 35.4, silver: 36.4, bronze: 39.3 },
  { id: "IB-6", level: "IB", title: "Cornering in the Wet: Intermediate", type: "wet", car: "BMW M3 Sport Evolution '89", track: "Red Bull Ring", gold: 36.4, silver: 37.5, bronze: 40.3 },
  { id: "IB-7", level: "IB", title: "Racing Line: Intermediate 3", type: "racing-line", car: "Porsche Taycan Turbo S '19", track: "Nurburgring Nordschleife", gold: 27.5, silver: 28.3, bronze: 30.2 },
  { id: "IB-8", level: "IB", title: "Consecutive Corners: Intermediate", type: "consecutive", car: "Mercedes-AMG C 63 S '15", track: "Dragon Trail - Gardens", gold: 19.3, silver: 20.0, bronze: 21.3 },
  { id: "IB-9", level: "IB", title: "Corners with Elevation Changes 1", type: "elevation", car: "BMW 3.0 CSL '73", track: "Alsace - Test Course", gold: 18.4, silver: 19.0, bronze: 20.3 },
  { id: "IB-10", level: "IB", title: "Applying the Racing Line", type: "combined", car: "Nissan SKYLINE GT-R V spec II (R32) '94", track: "Trial Mountain Circuit", gold: 41.2, silver: 42.4, bronze: 45.2 },
  { id: "IA-1", level: "IA", title: "Racing Line: Expert", type: "racing-line", car: "Aston Martin DB11 '16", track: "Suzuka Circuit", gold: 17.3, silver: 17.8, bronze: 19.1 },
  { id: "IA-2", level: "IA", title: "Consecutive Corners: Expert 1", type: "consecutive", car: "Lamborghini Diablo GT '00", track: "Tokyo Expressway - South Counterclockwise", gold: 25.1, silver: 25.9, bronze: 27.7 },
  { id: "IA-3", level: "IA", title: "Dirt Driving: Expert", type: "dirt", car: "Ford Focus Gr.B Rally Car", track: "Fisherman's Ranch", gold: 34.0, silver: 35.0, bronze: 37.8 },
  { id: "IA-4", level: "IA", title: "Consecutive Corners: Expert 2", type: "consecutive", car: "Ferrari Testarossa '91", track: "Autodrome Lago Maggiore - GP", gold: 33.6, silver: 34.6, bronze: 36.9 },
  { id: "IA-5", level: "IA", title: "Consecutive Corners: Expert 3", type: "consecutive", car: "Nissan R92CP '92", track: "24 Heures du Mans race track", gold: 28.4, silver: 29.2, bronze: 31.3 },
  { id: "IA-6", level: "IA", title: "Corners with Elevation Changes 1", type: "elevation", car: "Dodge Viper GTS '02", track: "WeatherTech Raceway Laguna Seca", gold: 20.0, silver: 20.6, bronze: 22.0 },
  { id: "IA-7", level: "IA", title: "Cornering in the Wet: Expert", type: "wet", car: "Alpine A110 '17", track: "Tsukuba Circuit", gold: 26.9, silver: 27.7, bronze: 29.7 },
  { id: "IA-8", level: "IA", title: "Tricky Consecutive Corners 1", type: "consecutive", car: "Toyota GR Supra RZ '20", track: "Autodrome Lago Maggiore - East End Reverse", gold: 22.9, silver: 23.6, bronze: 25.4 },
  { id: "IA-9", level: "IA", title: "Tricky Consecutive Corners 2", type: "consecutive", car: "Renault Sport Megane Trophy '11", track: "Deep Forest Raceway", gold: 38.8, silver: 40.0, bronze: 42.8 },
  { id: "IA-10", level: "IA", title: "Tricky Consecutive Corners 3", type: "consecutive", car: "Mercedes-AMG GT R '17", track: "Nurburgring Nordschleife", gold: 55.7, silver: 57.5, bronze: 61.6 },
  { id: "S-1", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Lamborghini Aventador LP 750-4 Superveloce '15", track: "High Speed Ring", gold: 71.5, silver: 73.6, bronze: 79.0 },
  { id: "S-2", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Ferrari F50 '95", track: "Autodromo Nazionale Monza", gold: 119.0, silver: 122.8, bronze: 131.0 },
  { id: "S-3", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Nissan SILVIA spec-R AERO (S15) Touring Car", track: "Tsukuba Circuit", gold: 58.6, silver: 60.4, bronze: 64.7 },
  { id: "S-4", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Toyota Supra GT500 '97", track: "Tokyo Expressway - South Counterclockwise", gold: 120.0, silver: 123.5, bronze: 132.2 },
  { id: "S-5", level: "S", title: "One Lap Time Attack", type: "full-lap dirt", car: "Toyota GR Yaris 1st Edition RZ High Performance '20", track: "Sardegna - Windmills", gold: 86.7, silver: 88.9, bronze: 94.8 },
  { id: "S-6", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Ford Shelby GT350R '16", track: "Trial Mountain Circuit", gold: 129.5, silver: 133.3, bronze: 142.2 },
  { id: "S-7", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Dallara SF19 Super Formula / Honda '19", track: "WeatherTech Raceway Laguna Seca", gold: 67.9, silver: 70.0, bronze: 74.7 },
  { id: "S-8", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Pagani Zonda R '09", track: "Autodromo de Interlagos", gold: 91.4, silver: 94.1, bronze: 100.8 },
  { id: "S-9", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Nissan GT-R GT500 '08", track: "Deep Forest Raceway", gold: 81.8, silver: 85.5, bronze: 91.6 },
  { id: "S-10", level: "S", title: "One Lap Time Attack", type: "full-lap wet", car: "Porsche 917K '70", track: "Circuit de Spa-Francorchamps (wet)", gold: 144.0, silver: 150.5, bronze: 161.5 },
  { id: "MB-1", displayId: "Master B-1", series: "master", level: "B", title: "Starting & Stopping 1 (Wet Tracks)", type: "start-stop wet", car: "Mazda3 X Burgundy Selection '19", track: "High Speed Ring (wet)", gold: 19.3, silver: 19.9, bronze: 21.4 },
  { id: "MB-2", displayId: "Master B-2", series: "master", level: "B", title: "Starting & Stopping 2 (Wet Tracks)", type: "start-stop wet", car: "Dodge Viper GTS '13", track: "High Speed Ring (wet)", gold: 16.25, silver: 16.8, bronze: 18.0 },
  { id: "MB-3", displayId: "Master B-3", series: "master", level: "B", title: "Cornering Basics 1", type: "corner-basic", car: "Honda S660 '15", track: "Circuit de Sainte-Croix - B", gold: 17.24, silver: 17.7, bronze: 18.9 },
  { id: "MB-4", displayId: "Master B-4", series: "master", level: "B", title: "Cornering Basics 2", type: "corner-basic", car: "Honda S2000 '99", track: "Circuit de Sainte-Croix - B", gold: 16.39, silver: 16.9, bronze: 18.0 },
  { id: "MB-5", displayId: "Master B-5", series: "master", level: "B", title: "Cornering: Intermediate 1", type: "corner-basic", car: "Nissan SILVIA spec-R AERO (S15) '02", track: "Red Bull Ring", gold: 16.47, silver: 16.9, bronze: 18.0 },
  { id: "MB-6", displayId: "Master B-6", series: "master", level: "B", title: "Cornering: Intermediate 2", type: "corner-basic", car: "Porsche 911 Carrera RS (964) '92", track: "Circuit de Spa-Francorchamps", gold: 16.86, silver: 17.4, bronze: 18.4 },
  { id: "MB-7", displayId: "Master B-7", series: "master", level: "B", title: "Cornering: Intermediate 3", type: "corner-basic", car: "Mercedes-Benz 190 E 2.5 - 16 Evolution II '91", track: "Deep Forest Raceway", gold: 17.75, silver: 18.4, bronze: 19.6 },
  { id: "MB-8", displayId: "Master B-8", series: "master", level: "B", title: "Consecutive Corners: Intermediate 1", type: "consecutive", car: "Mazda RX-8 Spirit R '12", track: "Suzuka Circuit", gold: 17.92, silver: 18.5, bronze: 19.7 },
  { id: "MB-9", displayId: "Master B-9", series: "master", level: "B", title: "Consecutive Corners: Intermediate 2", type: "consecutive", car: "Ford Sierra RS 500 Cosworth '87", track: "Michelin Raceway Road Atlanta", gold: 20.63, silver: 21.4, bronze: 22.8 },
  { id: "MB-10", displayId: "Master B-10", series: "master", level: "B", title: "Final Exam", type: "combined", car: "1932 Ford Roadster '63", track: "WeatherTech Raceway Laguna Seca", gold: 30.55, silver: 31.4, bronze: 33.5 },
  { id: "MA-1", displayId: "Master A-1", series: "master", level: "A", title: "Racing Line Basics 1", type: "racing-line", car: "Peugeot 208 GTi by Peugeot Sport '14", track: "Dragon Trail - Seaside", gold: 26.32, silver: 27.1, bronze: 28.9 },
  { id: "MA-2", displayId: "Master A-2", series: "master", level: "A", title: "Racing Line Basics 2", type: "racing-line", car: "Mazda RX-7 Spirit R Type A (FD) '02", track: "Dragon Trail - Seaside", gold: 25.46, silver: 28.3, bronze: 30.2 },
  { id: "MA-3", displayId: "Master A-3", series: "master", level: "A", title: "Hairpins", type: "hairpin", car: "Alfa Romeo Giulia GTAm '20", track: "Autopolis International Racing Course", gold: 19.0, silver: 19.5, bronze: 20.9 },
  { id: "MA-4", displayId: "Master A-4", series: "master", level: "A", title: "Urban Tracks 1", type: "urban", car: "Ferrari F12berlinetta '12", track: "Tokyo Expressway - Central Clockwise", gold: 27.38, silver: 28.1, bronze: 30.0 },
  { id: "MA-5", displayId: "Master A-5", series: "master", level: "A", title: "Snow Driving: Beginner", type: "snow", car: "Ford Focus RS '18", track: "Lake Louise Tri-Oval", gold: 17.8, silver: 18.4, bronze: 20.0 },
  { id: "MA-6", displayId: "Master A-6", series: "master", level: "A", title: "Racing Line: Intermediate 1", type: "racing-line", car: "Genesis G70 3.3T AWD Prestige Package '22", track: "Grand Valley Highway 1", gold: 27.58, silver: 28.4, bronze: 30.6 },
  { id: "MA-7", displayId: "Master A-7", series: "master", level: "A", title: "Racing Line: Intermediate 2", type: "racing-line", car: "BMW M3 Coupe '07", track: "Dragon Trail - Gardens", gold: 18.12, silver: 18.7, bronze: 19.9 },
  { id: "MA-8", displayId: "Master A-8", series: "master", level: "A", title: "Racing Line: Intermediate 3", type: "racing-line", car: "Nissan SKYLINE GT-R V spec (R33) '97", track: "Autodrome Lago Maggiore - Full Course", gold: 25.2, silver: 25.9, bronze: 27.8 },
  { id: "MA-9", displayId: "Master A-9", series: "master", level: "A", title: "Cornering: Intermediate 1 (Wet Tracks)", type: "wet", car: "Porsche 911 Carrera RS (993) '95", track: "Tokyo Expressway - East Clockwise", gold: 32.0, silver: 33.0, bronze: 35.2 },
  { id: "MA-10", displayId: "Master A-10", series: "master", level: "A", title: "Final Exam", type: "combined", car: "Mercedes-AMG GT Black Series '20", track: "Autopolis International Racing Course", gold: 47.15, silver: 48.6, bronze: 51.9 },
  { id: "MIB-1", displayId: "Master IB-1", series: "master", level: "IB", title: "High Speed Corners 1", type: "high-speed", car: "Ferrari GTO '84", track: "Autodromo Nazionale Monza", gold: 22.02, silver: 22.7, bronze: 24.2 },
  { id: "MIB-2", displayId: "Master IB-2", series: "master", level: "IB", title: "High Speed Corners 2", type: "high-speed", car: "Chevrolet Corvette ZR-1 (C4) '89", track: "Willow Springs International Raceway: Big Willow", gold: 28.75, silver: 29.6, bronze: 31.8 },
  { id: "MIB-3", displayId: "Master IB-3", series: "master", level: "IB", title: "Snow Driving: Intermediate 1", type: "snow", car: "Subaru IMPREZA Premium Sport Coupe 22B-STi Version '98", track: "Lake Louise Long Track", gold: 36.62, silver: 37.8, bronze: 40.4 },
  { id: "MIB-4", displayId: "Master IB-4", series: "master", level: "IB", title: "Racing Line: Expert 1", type: "racing-line", car: "Honda NSX Type R '02", track: "Suzuka Circuit", gold: 29.29, silver: 30.2, bronze: 32.2 },
  { id: "MIB-5", displayId: "Master IB-5", series: "master", level: "IB", title: "Racing Line: Expert 2", type: "racing-line", car: "Lexus LC500 '17", track: "Watkins Glen Long Course", gold: 49.09, silver: 50.6, bronze: 54.0 },
  { id: "MIB-6", displayId: "Master IB-6", series: "master", level: "IB", title: "Racing Line: Expert 3", type: "racing-line", car: "Porsche Cayman GT4 '16", track: "Autodrome Lago Maggiore - Full Course", gold: 44.34, silver: 45.7, bronze: 48.8 },
  { id: "MIB-7", displayId: "Master IB-7", series: "master", level: "IB", title: "Racing Line: Expert 4", type: "racing-line", car: "Maserati MC20 '20", track: "Circuit de Spa-Francorchamps", gold: 39.28, silver: 40.4, bronze: 43.7 },
  { id: "MIB-8", displayId: "Master IB-8", series: "master", level: "IB", title: "Cornering: Intermediate 2 (Wet Tracks)", type: "wet", car: "BMW M2 Competition '18", track: "Suzuka Circuit", gold: 27.92, silver: 28.8, bronze: 31.0 },
  { id: "MIB-9", displayId: "Master IB-9", series: "master", level: "IB", title: "Snow Driving: Intermediate 2", type: "snow", car: "Porsche 959 '87", track: "Lake Louise Long Track Reverse", gold: 25.99, silver: 27.0, bronze: 29.0 },
  { id: "MIB-10", displayId: "Master IB-10", series: "master", level: "IB", title: "Final Exam", type: "combined", car: "Lexus LFA '10", track: "Fuji International Speedway", gold: 53.25, silver: 54.8, bronze: 59.0 },
  { id: "MIA-1", displayId: "Master IA-1", series: "master", level: "IA", title: "Tricky Consecutive Corners 1", type: "consecutive", car: "Chevrolet Corvette C7 ZR1 '19", track: "Michelin Raceway Road Atlanta", gold: 32.83, silver: 33.7, bronze: 36.1 },
  { id: "MIA-2", displayId: "Master IA-2", series: "master", level: "IA", title: "Tricky Consecutive Corners 2", type: "consecutive", car: "Chevrolet Corvette (C1) '58", track: "Grand Valley Highway 1", gold: 26.1, silver: 26.9, bronze: 28.8 },
  { id: "MIA-3", displayId: "Master IA-3", series: "master", level: "IA", title: "Urban Tracks 2", type: "urban", car: "Subaru Impreza Sedan WRX STi '04", track: "Tokyo Expressway - South Clockwise", gold: 27.68, silver: 28.5, bronze: 30.3 },
  { id: "MIA-4", displayId: "Master IA-4", series: "master", level: "IA", title: "Corners with Elevation Changes 1", type: "elevation", car: "Mercedes-Benz SLR McLaren '09", track: "Nurburgring Nordschleife", gold: 50.4, silver: 51.6, bronze: 55.3 },
  { id: "MIA-5", displayId: "Master IA-5", series: "master", level: "IA", title: "Corners with Elevation Changes 2", type: "elevation", car: "Nissan SKYLINE 2000GT-R (KPGC110) '73", track: "Mount Panorama Motor Racing Circuit", gold: 37.27, silver: 38.2, bronze: 40.8 },
  { id: "MIA-6", displayId: "Master IA-6", series: "master", level: "IA", title: "Cornering: Expert (Wet Tracks)", type: "wet", car: "Ferrari 512 BB '76", track: "24 Heures du Mans race track", gold: 37.36, silver: 38.3, bronze: 40.9 },
  { id: "MIA-7", displayId: "Master IA-7", series: "master", level: "IA", title: "Tricky Consecutive Corners 3", type: "consecutive", car: "Dallara SF23 Super Formula / Honda '23", track: "Circuit de Barcelona-Catalunya Grand Prix No Chicane", gold: 27.27, silver: 28.0, bronze: 29.9 },
  { id: "MIA-8", displayId: "Master IA-8", series: "master", level: "IA", title: "Tricky Consecutive Corners 4", type: "consecutive", car: "Lamborghini Countach LP400 '74", track: "Grand Valley Highway 1", gold: 38.08, silver: 39.1, bronze: 41.9 },
  { id: "MIA-9", displayId: "Master IA-9", series: "master", level: "IA", title: "Snow Driving: Expert", type: "snow", car: "Toyota CELICA GT-FOUR Rally Car (ST205) '95", track: "Lake Louise Long Track", gold: 48.55, silver: 49.9, bronze: 53.6 },
  { id: "MIA-10", displayId: "Master IA-10", series: "master", level: "IA", title: "Final Exam", type: "combined", car: "Porsche 962 C '88", track: "Nurburgring Nordschleife", gold: 56.65, silver: 58.3, bronze: 62.2 },
  { id: "MS-1", displayId: "Master S-1", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Honda Civic Type R (FL5) '22", track: "Mount Panorama Motor Racing Circuit", gold: 147.1, silver: 151.1, bronze: 162.4 },
  { id: "MS-2", displayId: "Master S-2", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap rallycross", car: "Porsche 911 Turbo (930) '81", track: "Circuit de Barcelona-Catalunya Rallycross Layout", gold: 46.4, silver: 47.8, bronze: 51.0 },
  { id: "MS-3", displayId: "Master S-3", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Honda RA272 '65", track: "Circuit de Barcelona-Catalunya Grand Prix No Chicane", gold: 110.6, silver: 113.6, bronze: 122.1 },
  { id: "MS-4", displayId: "Master S-4", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Jaguar XJ220 '92", track: "Grand Valley Highway 1", gold: 121.5, silver: 124.8, bronze: 133.8 },
  { id: "MS-5", displayId: "Master S-5", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap snow", car: "Peugeot 205 Turbo 16 Evolution 2 '86", track: "Lake Louise Long Track", gold: 101.5, silver: 104.5, bronze: 111.5 },
  { id: "MS-6", displayId: "Master S-6", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Porsche 911 GT1 Strassenversion '97", track: "Michelin Raceway Road Atlanta", gold: 86.6, silver: 89.0, bronze: 95.0 },
  { id: "MS-7", displayId: "Master S-7", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Shelby Cobra Daytona Coupe '64", track: "Watkins Glen Long Course", gold: 126.0, silver: 129.4, bronze: 138.8 },
  { id: "MS-8", displayId: "Master S-8", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Mercedes-Benz CLK-LM '98", track: "Circuit de Spa-Francorchamps", gold: 129.0, silver: 133.6, bronze: 143.2 },
  { id: "MS-9", displayId: "Master S-9", series: "master", level: "S", title: "One Lap Time Attack", type: "full-lap", car: "Aston Martin Valkyrie '21", track: "Red Bull Ring", gold: 79.55, silver: 82.0, bronze: 87.5 },
  { id: "MS-10", displayId: "Master S-10", series: "master", level: "S", title: "Final Exam", type: "full-lap", car: "McLaren MP4/4 '88", track: "Suzuka Circuit", gold: 104.0, silver: 108.2, bronze: 116.5 },
];
const LICENSE_TEST_BY_ID = new Map(LICENSE_TESTS.map((test) => [test.id, test]));
const LICENSE_TRACK_TO_ATLAS_TRACK = {
  "24 heures du mans race track": "24 Heures du Mans Racing Circuit",
  "alsace test course": "Alsace",
  "alsace village": "Alsace",
  "autodrome lago maggiore east end": "Autodrome Lago Maggiore",
  "autodrome lago maggiore full course": "Autodrome Lago Maggiore",
  "autodrome lago maggiore gp": "Autodrome Lago Maggiore",
  "autodromo nazionale monza": "Autodromo Nazionale Monza",
  "autodromo de interlagos": "Autódromo de Interlagos",
  "circuit de barcelona catalunya grand prix": "Circuit de Barcelona-Catalunya",
  "circuit de barcelona catalunya grand prix no chicane": "Circuit de Barcelona-Catalunya",
  "circuit de barcelona catalunya rallycross layout": "Circuit de Barcelona-Catalunya",
  "circuit de spa francorchamps": "Circuit de Spa-Francorchamps",
  "circuit de sainte croix b": "Circuit de Sainte-Croix",
  "colorado springs lake": "Colorado Springs",
  "daytona road course": "Daytona International Speedway",
  "deep forest raceway": "Deep Forest Raceway",
  "dragon trail gardens": "Dragon Trail",
  "dragon trail seaside": "Dragon Trail",
  "fishermans ranch": "Fishermans Ranch",
  "fuji international speedway": "Fuji International Speedway",
  "grand valley highway 1": "Grand Valley Highway 1",
  "high speed ring": "High Speed Ring",
  "lake louise long track": "Lake Louise",
  "lake louise tri oval": "Lake Louise",
  "michelin raceway road atlanta": "Michelin Raceway Road Atlanta",
  "mount panorama": "Mount Panorama",
  "mount panorama motor racing circuit": "Mount Panorama",
  "nurburgring nordschleife": "Nurburgring",
  "red bull ring": "Red Bull Ring",
  "sardegna windmills": "Sardegna - Windmills",
  "suzuka circuit": "Suzuka Circuit",
  "tokyo expressway central clockwise": "Tokyo Expressway",
  "tokyo expressway east clockwise": "Tokyo Expressway",
  "tokyo expressway south counterclockwise": "Tokyo Expressway",
  "trial mountain circuit": "Trial Mountain Circuit",
  "tsukuba circuit": "Tsukuba Circuit",
  "weathertech raceway laguna seca": "WeatherTech Raceway Laguna Seca",
  "watkins glen long course": "Watkins Glen International",
  "willow springs international raceway big willow": "Willow Springs International Raceway",
};
const licenseTargetOverrides = loadLicenseTargetOverrides();
const licenseScopeOverrides = loadLicenseScopeOverrides();
const trainingStatuses = {
  "not-started": "未开始",
  active: "练习中",
  complete: "已达标",
};
const defaultTargetDifficulty = "进阶";

const state = {
  region: "all",
  difficulty: "all",
  trainingFilter: "all",
  query: "",
  selected: tracks[0].name,
  selectedLayout: "",
  calibratingLayout: "",
  selectedLicenseLevel: "S",
  selectedLicenseSeries: "normal",
  selectedLicenseTestId: "S-10",
  coachMode: false,
};

const layoutAccentColors = ["#ef4652", "#42a5ff", "#20d7a3", "#f7c948", "#b56bff", "#ff8b3d"];
const vehicleAssets = window.VehicleAssets ?? {};
const layoutAssets = window.LayoutAssets ?? {};
const layoutVerification = window.LayoutVerification ?? {};
const trainingData = loadTrainingData();
const cornerCalibrationData = loadCornerCalibrationData();
const allLayoutEntries = buildAllLayoutEntries();
const telemetryState = {
  socket: null,
  status: "disconnected",
  connection: "manual_mode",
  lastTick: null,
  lastStatus: null,
  pendingLaps: loadPendingTelemetryLaps(),
  liveTrace: [],
  manualAttempt: null,
  templates: [],
  dbAvailable: false,
  dbError: "",
  lastMessageAt: "",
  lastLiveRenderAt: 0,
  reconnectTimer: 0,
};

const listEl = document.querySelector("#trackList");
const detailEl = document.querySelector("#trackDetail");
const resultCountEl = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const trackCountEl = document.querySelector("#trackCount");
const trainingSummaryEl = document.querySelector("#trainingSummary");
const trainingUpdatedEl = document.querySelector("#trainingUpdated");
const telemetryPanelEl = document.querySelector("#telemetryPanel");
const licenseCoachPanelEl = document.querySelector("#licenseCoachPanel");
const coachPageEl = document.querySelector("#coachPage");
const trackByName = new Map(tracks.map((track) => [track.name, track]));
const trackButtons = new Map();
let pendingFilterFrame = 0;

trackCountEl.textContent = tracks.length;

document.querySelectorAll("[data-region]").forEach((button) => {
  button.addEventListener("click", () => {
    state.region = button.dataset.region;
    setActive("[data-region]", button);
    applyFilters();
  });
});

document.querySelectorAll("[data-difficulty]").forEach((button) => {
  button.addEventListener("click", () => {
    state.difficulty = button.dataset.difficulty;
    setActive("[data-difficulty]", button);
    renderTrainingDashboard();
    renderDetailOnly();
  });
});

document.querySelectorAll("[data-training-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.trainingFilter = button.dataset.trainingFilter;
    setActive("[data-training-filter]", button);
    applyFilters();
  });
});

function handleTelemetryActionButton(button) {
  if (!button) return;
  if (button.dataset.telemetryAction === "connect") connectTelemetryAgent(true);
  if (button.dataset.telemetryAction === "archive-lap") archiveTelemetryLap(button.dataset.telemetryLapId);
  if (button.dataset.telemetryAction === "dismiss-lap") dismissTelemetryLap(button.dataset.telemetryLapId);
  if (button.dataset.telemetryAction === "bind-template") bindTelemetryTemplate(button.dataset.telemetryLapId);
  if (button.dataset.telemetryAction === "delete-template") deleteTelemetryTemplate(button.dataset.telemetryTemplateId);
  if (button.dataset.telemetryAction === "start-license-attempt") startManualLicenseAttempt();
  if (button.dataset.telemetryAction === "finish-license-attempt") finishManualLicenseAttempt();
  if (button.dataset.telemetryAction === "discard-license-attempt") discardManualLicenseAttempt();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  scheduleFilterRender();
});

listEl.addEventListener("click", (event) => {
  const button = event.target.closest(".track-button");
  if (!button || button.hidden) return;
  selectTrack(button.dataset.track);
});

detailEl.addEventListener("click", (event) => {
  const layoutButton = event.target.closest("[data-layout-id]");
  if (layoutButton && detailEl.contains(layoutButton)) {
    if (state.selectedLayout === layoutButton.dataset.layoutId) return;
    state.selectedLayout = layoutButton.dataset.layoutId;
    state.calibratingLayout = "";
    updateUrlHash();
    renderDetailOnly();
    return;
  }

  const cornerActionButton = event.target.closest("[data-corner-action]");
  if (cornerActionButton && detailEl.contains(cornerActionButton)) {
    handleCornerCalibrationAction(cornerActionButton.dataset.cornerAction);
    return;
  }

  const guideVehicleButton = event.target.closest("[data-guide-vehicle]");
  if (guideVehicleButton && detailEl.contains(guideVehicleButton)) {
    handleGuideVehicleSelect(guideVehicleButton.dataset.guideVehicle);
    return;
  }

  const calibrationFrame = event.target.closest(".track-map-frame.is-calibrating");
  if (
    calibrationFrame &&
    detailEl.contains(calibrationFrame) &&
    !event.target.closest("button, input, textarea, .layout-accent-card, .map-source-card, .map-logo-badge")
  ) {
    addCornerCalibrationPoint(event, calibrationFrame);
    return;
  }

  const actionButton = event.target.closest("[data-training-action]");
  if (!actionButton || !detailEl.contains(actionButton)) return;
  handleTrainingAction(actionButton.dataset.trainingAction);
});

detailEl.addEventListener("input", (event) => {
  const cornerNameInput = event.target.closest("[data-corner-name-index]");
  if (cornerNameInput && detailEl.contains(cornerNameInput)) {
    handleCornerNameInput(cornerNameInput);
    return;
  }

  const input = event.target.closest("[data-lap-part]");
  if (!input || !detailEl.contains(input)) return;
  const maxLength = Number(input.getAttribute("maxlength") ?? 2);
  input.value = input.value.replace(/\D/g, "").slice(0, maxLength);
  if (input.value.length >= maxLength) {
    const parts = [...detailEl.querySelectorAll("[data-lap-part]")];
    const index = parts.indexOf(input);
    parts[index + 1]?.focus();
  }
});

detailEl.addEventListener("change", (event) => {
  const difficultySelect = event.target.closest("#targetDifficultySelect");
  if (!difficultySelect || !detailEl.contains(difficultySelect)) return;
  const activeLayout = getCurrentActiveLayout();
  if (!activeLayout) return;
  saveTrainingRecord(activeLayout.id, { targetDifficulty: getFormTargetDifficulty() });
});

trainingSummaryEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-dashboard-track]");
  if (!button) return;
  selectTrack(button.dataset.dashboardTrack, button.dataset.dashboardLayout);
});

telemetryPanelEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-telemetry-action]");
  if (!button) return;
  handleTelemetryActionButton(button);
});

licenseCoachPanelEl?.addEventListener("click", (event) => {
  const seriesButton = event.target.closest("[data-license-series]");
  if (seriesButton && licenseCoachPanelEl.contains(seriesButton)) {
    state.selectedLicenseSeries = seriesButton.dataset.licenseSeries;
    const nextTest = getLicenseTestsFor(state.selectedLicenseSeries, state.selectedLicenseLevel)[0]
      ?? LICENSE_TESTS.find((test) => getLicenseSeries(test) === state.selectedLicenseSeries);
    if (nextTest) {
      state.selectedLicenseLevel = nextTest.level;
      state.selectedLicenseTestId = nextTest.id;
    }
    renderLicenseCoachPanel();
    selectTrackForLicenseTest(getActiveLicenseTest(), false);
    return;
  }
  const levelButton = event.target.closest("[data-license-level]");
  if (levelButton && licenseCoachPanelEl.contains(levelButton)) {
    state.selectedLicenseLevel = levelButton.dataset.licenseLevel;
    state.selectedLicenseTestId = getLicenseTestsFor(state.selectedLicenseSeries, state.selectedLicenseLevel)[0]?.id ?? state.selectedLicenseTestId;
    renderLicenseCoachPanel();
    return;
  }
  const testButton = event.target.closest("[data-license-test]");
  if (testButton && licenseCoachPanelEl.contains(testButton)) {
    state.selectedLicenseTestId = testButton.dataset.licenseTest;
    const selectedTest = LICENSE_TEST_BY_ID.get(state.selectedLicenseTestId);
    state.selectedLicenseLevel = selectedTest?.level ?? state.selectedLicenseLevel;
    state.selectedLicenseSeries = getLicenseSeries(selectedTest);
    renderLicenseCoachPanel();
    selectTrackForLicenseTest(getActiveLicenseTest(), false);
    return;
  }
  const enterButton = event.target.closest("[data-license-action='enter-coach']");
  if (enterButton && licenseCoachPanelEl.contains(enterButton)) {
    enterCoachMode();
  }
});

licenseCoachPanelEl?.addEventListener("change", (event) => {
  const input = event.target.closest("[data-license-target-input]");
  if (input && licenseCoachPanelEl.contains(input)) {
    handleLicenseTargetInput(input);
  }
});

coachPageEl?.addEventListener("click", (event) => {
  const telemetryButton = event.target.closest("[data-telemetry-action]");
  if (telemetryButton && coachPageEl.contains(telemetryButton)) {
    handleTelemetryActionButton(telemetryButton);
    return;
  }
  const exitButton = event.target.closest("[data-coach-action='exit']");
  if (exitButton && coachPageEl.contains(exitButton)) {
    exitCoachMode();
    return;
  }
  const testButton = event.target.closest("[data-coach-license-test]");
  if (testButton && coachPageEl.contains(testButton)) {
    state.selectedLicenseTestId = testButton.dataset.coachLicenseTest;
    const selectedTest = LICENSE_TEST_BY_ID.get(state.selectedLicenseTestId);
    state.selectedLicenseLevel = selectedTest?.level ?? state.selectedLicenseLevel;
    state.selectedLicenseSeries = getLicenseSeries(selectedTest);
    selectTrackForLicenseTest(getActiveLicenseTest(), false);
    renderCoachMode();
    return;
  }
  const scopeButton = event.target.closest("[data-license-scope]");
  if (scopeButton && coachPageEl.contains(scopeButton)) {
    setLicenseScopeOverride(scopeButton.dataset.licenseScopeTest, scopeButton.dataset.licenseScope);
    renderCoachMode();
    return;
  }
  const resetButton = event.target.closest("[data-license-target-reset]");
  if (resetButton && coachPageEl.contains(resetButton)) {
    resetLicenseTargetOverride(resetButton.dataset.licenseTargetReset);
    renderCoachMode();
  }
});

coachPageEl?.addEventListener("input", (event) => {
  const attemptInput = event.target.closest("[data-license-attempt-time]");
  if (attemptInput && coachPageEl.contains(attemptInput)) {
    handleManualAttemptTimeInput(attemptInput);
  }
});

coachPageEl?.addEventListener("change", (event) => {
  const attemptInput = event.target.closest("[data-license-attempt-time]");
  if (attemptInput && coachPageEl.contains(attemptInput)) {
    handleManualAttemptTimeInput(attemptInput);
    return;
  }
  const input = event.target.closest("[data-license-target-input]");
  if (input && coachPageEl.contains(input)) {
    handleLicenseTargetInput(input);
  }
});

window.addEventListener("hashchange", () => {
  applyHashRoute();
  state.calibratingLayout = "";
  updateActiveTrackButton();
  applyFilters();
  renderDetailOnly();
});

function setActive(selector, activeButton) {
  document.querySelectorAll(selector).forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}

function getFilteredTracks() {
  return tracks.filter((track) => {
    const regionMatch = state.region === "all" || track.region === state.region;
    const official = getOfficialTrack(track);
    const queryHaystack = [
      track.name,
      track.region,
      track.country,
      track.type,
      track.profile,
      track.tune,
      getTrackZhName(track.name),
      ...track.focus,
      ...track.cars,
      ...(official?.layoutNames ?? []),
    ]
      .join(" ")
      .toLowerCase();
    const queryMatch = !state.query || queryHaystack.includes(state.query);
    const trainingMatch = state.trainingFilter === "all" || trackMatchesTrainingFilter(track, state.trainingFilter);
    return regionMatch && queryMatch && trainingMatch;
  });
}

function initializeList() {
  listEl.innerHTML = tracks.map(renderTrackButton).join("");
  listEl.querySelectorAll(".track-button").forEach((button) => {
    trackButtons.set(button.dataset.track, button);
  });
}

function scheduleFilterRender() {
  if (pendingFilterFrame) cancelAnimationFrame(pendingFilterFrame);
  pendingFilterFrame = requestAnimationFrame(() => {
    pendingFilterFrame = 0;
    applyFilters();
  });
}

function applyFilters() {
  const filteredTracks = getFilteredTracks();
  if (!filteredTracks.some((track) => track.name === state.selected)) {
    state.selected = filteredTracks[0]?.name ?? "";
    state.selectedLayout = "";
    updateUrlHash();
  }

  resultCountEl.textContent = `${filteredTracks.length} 条结果`;

  const visibleNames = new Set(filteredTracks.map((track) => track.name));
  trackButtons.forEach((button, name) => {
    button.hidden = !visibleNames.has(name);
  });

  listEl.classList.toggle("is-empty", filteredTracks.length === 0);
  updateTrackTrainingBadges();
  updateActiveTrackButton();
  renderTrainingDashboard();
  renderDetailOnly();
}

function selectTrack(name, layoutId = "") {
  if (!trackByName.has(name)) return;
  if (state.selected === name && (!layoutId || state.selectedLayout === layoutId)) return;
  state.selected = name;
  const official = getOfficialTrack(trackByName.get(name));
  state.selectedLayout = official?.layoutDetails.some((layout) => layout.id === layoutId) ? layoutId : "";
  state.calibratingLayout = "";
  updateUrlHash();
  updateActiveTrackButton();
  renderDetailOnly();
}

function updateActiveTrackButton() {
  trackButtons.forEach((button, name) => {
    button.classList.toggle("active", name === state.selected);
  });
}

function renderDetailOnly() {
  const selectedTrack = trackByName.get(state.selected);
  detailEl.innerHTML = selectedTrack ? renderDetail(selectedTrack) : `<div class="empty-state">请选择一条赛道。</div>`;
  attachMapHeroInteraction();
}

function renderTrackButton(track) {
  const active = track.name === state.selected ? " active" : "";
  const official = getOfficialTrack(track);
  const summary = getTrackTrainingSummary(track);
  const recommendation = getRecommendedLayoutForTrack(track);
  const zhName = getTrackZhName(track.name);
  return `
    <button class="track-button${active}" data-track="${track.name}">
      <span>
        <strong>${track.name}</strong>
        <em>${zhName}</em>
        <small>${regionName(track.region)} · ${track.country} · ${track.type}</small>
        ${recommendation ? `<small class="track-recommend-layout">推荐：${escapeHtml(recommendation.layout.name)}</small>` : ""}
      </span>
      <span class="track-button-meta">
        <span class="tag">${official?.layouts ?? track.layouts} 布局</span>
        <span class="training-status-badge ${summary.className}" data-track-training="${track.name}">${summary.label}</span>
      </span>
    </button>
  `;
}

function renderDetail(track) {
  const official = getOfficialTrack(track);
  const title = official?.officialName ?? track.name;
  const layouts = official?.layouts ?? track.layouts;
  const activeLayout = getActiveLayout(official);
  const layoutAccent = activeLayout ? ` style="--layout-accent: ${activeLayout.color};"` : "";
  const mapPanel = `
    <figure class="track-visual official-visual">
      <div class="map-hero"${layoutAccent}>
        ${renderTrackMap(official, title, activeLayout)}
        <div class="map-logo-badge">
          <img src="${officialLogoSrc(official)}" alt="${title} 官方赛道标识" loading="eager" decoding="async" />
        </div>
      </div>
      <figcaption>
        <strong>${title}</strong>
        <span>${activeLayout ? `当前强调：${activeLayout.name}` : "赛道布局图为主图，官方标识融入辅助信息"}</span>
      </figcaption>
    </figure>
    ${official ? renderLayoutVerification(activeLayout) : ""}
  `;
  const dataPanel = `
    ${official ? renderOfficialStats(official, activeLayout) : ""}
    ${official ? renderLayoutComparison(track, official, activeLayout) : ""}
    ${renderTrackKnowledge(track)}
    <section class="info-block compact-reference">
      <h3>标准圈速参考</h3>
      <table class="pace-table">
        <thead>
          <tr>
            <th>阶段</th>
            <th>目标圈速</th>
            <th>车辆选择</th>
            <th>通过标准</th>
          </tr>
        </thead>
        <tbody>${renderPaceRows(track, official, activeLayout)}</tbody>
      </table>
    </section>
  `;
  return `
    <article>
      <header class="detail-head">
        <div>
          <h2>${title}</h2>
          <p class="meta">
            <span class="tag">${regionName(track.region)}</span>
            <span class="tag">${track.country}</span>
            <span class="tag">${track.type}</span>
            <span class="tag">${official?.length ?? track.length}</span>
            <span class="tag">官网校准</span>
          </p>
        </div>
        <div class="layout-count">
          <strong>${layouts}</strong>
          <span class="hint">布局</span>
        </div>
      </header>

      ${official && activeLayout ? renderPracticeGuide(track, official, activeLayout) : ""}
      <div class="standby-stack" aria-label="后台资料">
        ${renderProgressiveSection("Standby · 赛道布局图", "需要看弯道和路线时展开", mapPanel, false)}
        ${official && activeLayout ? renderProgressiveSection("Standby · 记录与复盘", "最近练习、遥测摘要和历史表现", renderTrainingStandby(track, official, activeLayout), false) : ""}
        ${renderProgressiveSection("Standby · 数据库", "官方数据、布局对比、赛道知识和标准圈速", dataPanel, false)}
      </div>
    </article>
  `;
}

function renderPracticeGuide(track, official, activeLayout) {
  const record = getTrainingRecord(activeLayout.id);
  const difficulty = getTargetDifficulty(record);
  const range = getTargetRange(track, official, activeLayout, difficulty);
  const cars = getCarsForDifficulty(track, difficulty);
  const selectedVehicle = record.currentVehicle || cars[0] || "";
  const best = getBestLapSeconds(record);
  const gap = best ? best - range.target : null;
  const diagnosis = buildGuidedDiagnosis(gap, record);
  const progress = best ? (gap <= 0 ? 100 : Math.max(12, Math.min(92, 100 - (gap / Math.max(6, range.target * 0.08)) * 100))) : 18;
  const stage = getPracticeStage(record, best);
  const lapParts = splitLapTime(null);
  return `
    <section class="practice-focus" aria-label="当前训练步骤">
      <div class="focus-kicker">
        <span>Guided Practice</span>
        <b>${escapeHtml(activeLayout.name)}</b>
      </div>
      <div class="focus-hero">
        <div>
          <small>${escapeHtml(stage.eyebrow)}</small>
          <h3>${escapeHtml(stage.title)}</h3>
          <p>${escapeHtml(stage.copy)}</p>
        </div>
        <div class="practice-progress minimal" style="--practice-progress: ${progress.toFixed(0)}%;">
          <span></span>
          <strong>${best ? formatGap(gap) : "待记录"}</strong>
          <small>${best ? "相对目标中位" : "先完成第一圈"}</small>
        </div>
      </div>
      <div class="focus-stage-bar" aria-label="训练步骤">
        ${renderFocusStage("layout", "赛道", stage.key)}
        ${renderFocusStage("vehicle", "车辆", stage.key)}
        ${renderFocusStage("lap", "圈速", stage.key)}
        ${renderFocusStage("review", "复盘", stage.key)}
      </div>
      ${renderFocusAction({
        stage,
        track,
        activeLayout,
        difficulty,
        range,
        cars,
        selectedVehicle,
        best,
        gap,
        diagnosis,
        lapParts,
      })}
    </section>
  `;
}

function getPracticeStage(record, best) {
  if (!record.currentVehicle) {
    return {
      key: "vehicle",
      eyebrow: "Step 1",
      title: "先选一台今天要练的车。",
      copy: "不要同时比较太多变量。先固定车辆，再开始记录圈速。",
    };
  }
  if (!best) {
    return {
      key: "lap",
      eyebrow: "Step 2",
      title: "跑一圈，把第一个基准圈留下。",
      copy: "不用追极限。第一圈只负责建立基准，之后才谈差距和改进。",
    };
  }
  return {
    key: "review",
    eyebrow: "Step 3",
    title: "看差距，只改一个问题。",
    copy: "把注意力放在最影响圈速的一件事上，下一圈只验证这一处。",
  };
}

function renderFocusStage(key, label, activeKey) {
  const order = ["layout", "vehicle", "lap", "review"];
  const activeIndex = order.indexOf(activeKey);
  const index = order.indexOf(key);
  const className = index < activeIndex ? " is-done" : key === activeKey ? " is-current" : "";
  return `<span class="focus-stage${className}">${escapeHtml(label)}</span>`;
}

function renderFocusAction(context) {
  if (context.stage.key === "vehicle") return renderVehicleFocusAction(context);
  if (context.stage.key === "lap") return renderLapFocusAction(context);
  return renderReviewFocusAction(context);
}

function renderVehicleFocusAction({ cars, selectedVehicle, difficulty, range }) {
  return `
    <div class="focus-action focus-vehicle">
      <div class="focus-action-copy">
        <small>目标区间</small>
        <strong>${formatTime(range.lower)} - ${formatTime(range.upper)}</strong>
        <span>当前难度：${escapeHtml(difficulty)}。先从推荐车开始，避免一上来陷入调校和车辆差异。</span>
      </div>
      ${renderVehiclePicker(cars, selectedVehicle, difficulty)}
    </div>
  `;
}

function renderVehiclePicker(cars, selectedVehicle, difficulty, compact = false) {
  const currentTrack = trackByName.get(state.selected);
  const className = compact ? "focus-choice-grid is-compact" : "focus-choice-grid";
  return `
    <div class="${className}">
      ${cars
        .slice(0, 3)
        .map((car) => {
          const active = normalizeVehicleName(selectedVehicle) === normalizeVehicleName(car) ? " is-selected" : "";
          const reason = getVehicleReason(car, currentTrack, difficulty);
          return `
            <button type="button" class="focus-choice${active}" data-guide-vehicle="${escapeHtml(car)}">
              <strong>${escapeHtml(car)}</strong>
              <span>${escapeHtml(reason)}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderLapFocusAction({ cars, selectedVehicle, difficulty, range, lapParts }) {
  return `
    <div class="focus-action focus-lap">
      <div class="focus-action-copy">
        <small>当前任务</small>
        <strong>跑进 ${formatTime(range.lower)} - ${formatTime(range.upper)}</strong>
        <span>${escapeHtml(selectedVehicle || "已选车辆")} · ${escapeHtml(difficulty)}。手动输入圈速，或等遥测圈进入待归档。</span>
      </div>
      <div class="focus-vehicle-switcher">
        <div>
          <small>当前车辆</small>
          <strong>${escapeHtml(selectedVehicle || "未选择")}</strong>
          <span>需要换车时直接点下面的推荐项，不用重置训练流程。</span>
        </div>
        ${renderVehiclePicker(cars, selectedVehicle, difficulty, true)}
      </div>
      <div class="focus-lap-form">
        <label>
          <span>目标难度</span>
          <select id="targetDifficultySelect">
            ${Object.keys(difficultyMultipliers)
              .map((item) => `<option value="${item}"${item === difficulty ? " selected" : ""}>${item}</option>`)
              .join("")}
          </select>
        </label>
        <label class="lap-time-field">
          <span>本次圈速</span>
          <div class="lap-time-input">
            <input id="bestLapMinutes" data-lap-part="minutes" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" value="${lapParts.minutes}" placeholder="00" aria-label="分钟" />
            <b>:</b>
            <input id="bestLapSeconds" data-lap-part="seconds" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" value="${lapParts.seconds}" placeholder="00" aria-label="秒" />
            <b>:</b>
            <input id="bestLapMillis" data-lap-part="millis" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="3" value="${lapParts.millis}" placeholder="000" aria-label="毫秒" />
          </div>
        </label>
        <label>
          <span>车辆</span>
          <input id="sessionVehicle" type="text" value="${escapeHtml(selectedVehicle)}" placeholder="例如 Porsche 911 GT3 RS" />
        </label>
        <label>
          <span>设置</span>
          <input id="sessionSetup" type="text" placeholder="RH / TC 1 / ABS Default" />
        </label>
        <label class="focus-wide">
          <span>失误点</span>
          <input id="sessionMistakes" type="text" placeholder="只写最明显的一处，例如 T1 刹晚或出弯推头" />
        </label>
        <label class="focus-wide">
          <span>练习感受</span>
          <textarea id="sessionFeeling" rows="2" placeholder="下一圈只验证一个改进点"></textarea>
        </label>
        <textarea id="trainingNotes" class="visually-hidden" aria-hidden="true"></textarea>
        <div class="focus-actions">
          <button type="button" data-training-action="save-training">保存本圈</button>
          <button type="button" data-training-action="set-current">设为当前训练</button>
        </div>
      </div>
    </div>
  `;
}

function renderReviewFocusAction({ cars, best, gap, diagnosis, difficulty, range, selectedVehicle }) {
  return `
    <div class="focus-action focus-review">
      <div class="focus-result">
        <small>个人最佳</small>
        <strong>${best ? formatLapTime(best) : "未记录"}</strong>
        <span>目标中位：${formatTime(range.target)} · ${escapeHtml(selectedVehicle || "未记录车辆")}</span>
      </div>
      <div class="focus-result ${gap <= 0 ? "is-good" : "is-warning"}">
        <small>目标差距</small>
        <strong>${formatGap(gap)}</strong>
        <span>${escapeHtml(diagnosis.copy)}</span>
      </div>
      <div class="focus-actions">
        <button type="button" data-training-action="complete">标记已达标</button>
        <button type="button" data-training-action="set-current">继续练这一条</button>
      </div>
      <div class="focus-vehicle-switcher is-review">
        <div>
          <small>换车再试</small>
          <strong>${escapeHtml(selectedVehicle || "未选择")}</strong>
          <span>复盘后如果要换稳定车或冲刺车，可以直接切换并继续记录下一圈。</span>
        </div>
        ${renderVehiclePicker(cars, selectedVehicle, difficulty, true)}
      </div>
    </div>
  `;
}

function buildGuidedDiagnosis(gap, record) {
  if (!getBestLapSeconds(record)) {
    return {
      className: "",
      title: "还没有基准圈",
      copy: "先用推荐车辆跑一圈，把圈速保存下来，页面会自动给出目标差距。",
    };
  }
  if (gap <= 0) {
    return {
      className: "is-ready",
      title: "已达到当前目标",
      copy: "可以切到更高难度，或换一台上限更高的车继续压分段。",
    };
  }
  if (gap > 8) {
    return {
      className: "is-warning",
      title: `落后 ${gap.toFixed(1)} 秒`,
      copy: "先别追极限，优先固定刹车点和出弯油门，目标是连续 3 圈无大失误。",
    };
  }
  if (gap > 2) {
    return {
      className: "is-warning",
      title: `落后 ${gap.toFixed(1)} 秒`,
      copy: "重点检查慢弯出弯和高速弯入弯速度，单圈误差先压进 2 秒内。",
    };
  }
  return {
    className: "is-ready",
    title: `只差 ${gap.toFixed(1)} 秒`,
    copy: "已经进入细节区间，复盘刹车释放点、路肩使用和最后一段出弯速度。",
  };
}

function renderTrackKnowledge(track) {
  return `
    <div class="detail-grid">
      <section class="info-block">
        <h3>赛道性格</h3>
        <p>${track.profile}</p>
      </section>
      <section class="info-block">
        <h3>练习重点</h3>
        <ul>${track.focus.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="info-block">
        <h3>车辆与调校方向</h3>
        <p>${track.tune}</p>
      </section>
    </div>
  `;
}

function renderProgressiveSection(title, subtitle, content, open = false) {
  return `
    <details class="progressive-section"${open ? " open" : ""}>
      <summary>
        <span>
          <strong>${escapeHtml(title)}</strong>
          <small>${escapeHtml(subtitle)}</small>
        </span>
      </summary>
      <div class="progressive-section-body">${content}</div>
    </details>
  `;
}

function renderPaceRows(track, official, activeLayout) {
  const difficulties = state.difficulty === "all" ? Object.keys(difficultyMultipliers) : [state.difficulty];
  return difficulties
    .map((difficulty) => {
      const range = getTargetRange(track, official, activeLayout, difficulty);
      const cars = getCarsForDifficulty(track, difficulty);
      const standard = getStandard(difficulty);
      return `
        <tr>
          <td class="difficulty ${difficultyClasses[difficulty]}">${difficulty}</td>
          <td>${formatTime(range.lower)} - ${formatTime(range.upper)}</td>
          <td>${renderVehicleChoices(cars, track, difficulty)}</td>
          <td>${standard}</td>
        </tr>
      `;
    })
    .join("");
}

function getCarsForDifficulty(track, difficulty) {
  if (difficulty === "新手") return track.cars.slice(0, 1);
  if (difficulty === "进阶") return track.cars.slice(0, 2);
  return track.cars;
}

function renderVehicleChoices(cars, track, difficulty) {
  const activeRecord = getCurrentActiveLayout() ? getTrainingRecord(getCurrentActiveLayout().id) : null;
  if (!cars.length) {
    return `<span class="vehicle-card is-text-only"><span class="vehicle-no-image">GT7</span><span><strong>稳定四驱或低马力车</strong><small class="vehicle-reason">优先稳定与容错，先把练习节奏固定。</small></span></span>`;
  }

  return `<div class="vehicle-stack">${cars.map((label) => renderVehicleChoice(label, track, difficulty, activeRecord)).join("")}</div>`;
}

function renderVehicleChoice(label, track, difficulty, activeRecord = null) {
  const asset = vehicleAssets[label];
  const title = escapeHtml(asset?.officialName ?? label);
  const reason = getVehicleReason(label, track, difficulty);
  const goalTag = getVehicleGoalTag(difficulty);
  const isLastUsed = activeRecord?.currentVehicle && normalizeVehicleName(activeRecord.currentVehicle) === normalizeVehicleName(label);
  return `
    <span class="vehicle-card${asset ? "" : " is-text-only"}${isLastUsed ? " is-last-used" : ""}" title="${title}">
      ${
        asset
          ? `<img src="${asset.src}" alt="${title}" loading="lazy" decoding="async" />`
          : `<span class="vehicle-no-image">GT7</span>`
      }
      <span>
        <strong>${escapeHtml(label)}</strong>
        <mark>${isLastUsed ? "上次使用" : goalTag}</mark>
        <small class="vehicle-reason">${escapeHtml(reason)}</small>
      </span>
    </span>
  `;
}

function getVehicleGoalTag(difficulty) {
  if (difficulty === "新手") return "稳定完赛";
  if (difficulty === "高手") return "极限攻弯";
  return "误差控制";
}

function getTrainingTaskSubtitle(difficulty) {
  if (difficulty === "新手") return "先稳定，再谈速度";
  if (difficulty === "高手") return "压缩分段极限";
  return "把单圈误差压到 1 秒内";
}

function renderTrainingTasks(activeDifficulty) {
  const tasks = [
    {
      difficulty: "新手",
      title: "稳定完赛",
      copy: "连续 3 圈无重大失误，刹车点固定，先建立可靠节奏。",
    },
    {
      difficulty: "进阶",
      title: "误差控制",
      copy: "单圈误差控制在 1 秒左右，开始调整线路和出弯节奏。",
    },
    {
      difficulty: "高手",
      title: "极限攻弯",
      copy: "追求分段极限，重点管理出弯速度、轮胎负载和车辆姿态。",
    },
  ];
  return tasks
    .map(
      (task) => `
        <article class="training-task${task.difficulty === activeDifficulty ? " is-active" : ""}">
          <small>${task.difficulty}</small>
          <strong>${task.title}</strong>
          <span>${task.copy}</span>
        </article>
      `,
    )
    .join("");
}

function renderSessionRows(sessions, range) {
  if (!sessions.length) {
    return `
      <div class="session-empty">
        <strong>还没有本地练习记录</strong>
        <span>录入一次本次圈速后，这里会显示最近 5 次复盘。</span>
      </div>
    `;
  }

  let runningBest = Infinity;
  const chronological = [...sessions].reverse();
  const bestById = new Map();
  chronological.forEach((session) => {
    const isBest = session.lapSeconds < runningBest;
    runningBest = Math.min(runningBest, session.lapSeconds);
    bestById.set(session.id, isBest);
  });

  return `
    <div class="session-list">
      ${sessions
        .map((session) => {
          const gap = session.lapSeconds - range.target;
          const bestClass = bestById.get(session.id) ? " is-best" : "";
          const telemetrySummary = renderTelemetrySessionSummary(session);
          return `
            <article class="session-row${bestClass}">
              <div>
                <small>${formatRelativeDate(session.createdAt)}</small>
                <strong>${formatLapTime(session.lapSeconds)}</strong>
              </div>
              <div>
                <small>目标差距</small>
                <span class="${gap <= 0 ? "is-ahead" : ""}">${formatGap(gap)}</span>
              </div>
              <div>
                <small>车辆 / 设置</small>
                <span>${session.traceId ? `<b class="telemetry-badge">Telemetry Auto</b>` : ""}${escapeHtml([session.vehicle, session.setup].filter(Boolean).join(" · ") || "未填写")}</span>
              </div>
              <div>
                <small>复盘</small>
                <span>${escapeHtml([session.mistakes, session.feeling].filter(Boolean).join("；") || "暂无备注")}</span>
              </div>
              ${telemetrySummary}
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderTelemetrySessionSummary(session) {
  if (!session.traceId && !session.telemetrySummary) return "";
  const summary = session.telemetrySummary ?? {};
  const coach = sanitizeTelemetryCoachAnalysis(session.telemetryCoach);
  const parts = [
    session.traceId ? `trace ${session.traceId}` : "",
    summary.maxSpeedKmh ? `极速 ${summary.maxSpeedKmh} km/h` : "",
    summary.avgSpeedKmh ? `均速 ${summary.avgSpeedKmh} km/h` : "",
    summary.brakeEvents ? `刹车 ${summary.brakeEvents} 次` : "",
    summary.fullThrottlePct ? `全油 ${summary.fullThrottlePct}%` : "",
  ].filter(Boolean);
  return `
    <div class="telemetry-session-summary">
      <small>遥测摘要</small>
      <span>${escapeHtml(parts.join(" · ") || "Telemetry Auto")}</span>
      ${coach ? renderTelemetryCoachAnalysis(coach, "compact") : ""}
    </div>
  `;
}

function renderTrainingCard(track, official, activeLayout) {
  const record = getTrainingRecord(activeLayout.id);
  const targetDifficulty = getTargetDifficulty(record);
  const range = getTargetRange(track, official, activeLayout, targetDifficulty);
  const best = getBestLapSeconds(record);
  const gap = best ? best - range.target : null;
  const status = getTrainingStatusMeta(record);
  const favoriteLabel = record.favorite ? "取消收藏" : "收藏布局";
  const lapParts = splitLapTime(null);
  const recentSessions = getRecentSessions(record, 5);
  const latestSession = getLatestSession(record);
  const sessionRows = renderSessionRows(recentSessions, range);
  const telemetryReview = renderTelemetryRecordSummary(recentSessions);
  const tasks = renderTrainingTasks(targetDifficulty);
  const currentVehicle = record.currentVehicle || latestSession?.vehicle || "";
  const currentSetup = record.currentSetup || latestSession?.setup || "";
  return `
    <section class="training-card" aria-label="布局训练卡片">
      <div class="training-card-head">
        <div>
          <small>当前训练布局</small>
          <h3>${escapeHtml(activeLayout.name)}</h3>
          <p>目标难度：${targetDifficulty} · 目标圈速 ${formatTime(range.lower)} - ${formatTime(range.upper)}</p>
        </div>
        <span class="training-status-badge ${status.className}">${status.label}</span>
      </div>
      <div class="training-metrics">
        <div><small>目标中位</small><strong>${formatTime(range.target)}</strong></div>
        <div><small>个人最佳</small><strong>${best ? formatLapTime(best) : "未记录"}</strong></div>
        <div><small>目标差距</small><strong class="${gap !== null && gap <= 0 ? "is-ahead" : ""}">${formatGap(gap)}</strong></div>
        <div><small>练习次数</small><strong>${record.sessions.length}</strong></div>
      </div>
      <div class="training-workbench">
        <div class="training-task-panel">
          <div class="section-title inline-title">
            <h3>本阶段训练任务</h3>
            <span>${escapeHtml(getTrainingTaskSubtitle(targetDifficulty))}</span>
          </div>
          <div class="training-task-list">${tasks}</div>
        </div>
        <div class="training-session-panel">
          <div class="section-title inline-title">
            <h3>本次练习记录</h3>
            <span>保存后会进入最近 5 次复盘</span>
          </div>
          <div class="training-form session-form">
            <label>
              <span>目标难度</span>
              <select id="targetDifficultySelect">
                ${Object.keys(difficultyMultipliers)
                  .map((difficulty) => `<option value="${difficulty}"${difficulty === targetDifficulty ? " selected" : ""}>${difficulty}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="lap-time-field">
              <span>本次圈速</span>
              <div class="lap-time-input" aria-label="本次圈速，按分钟、秒、毫秒输入">
                <input id="bestLapMinutes" data-lap-part="minutes" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" value="${lapParts.minutes}" placeholder="00" aria-label="分钟" />
                <b>:</b>
                <input id="bestLapSeconds" data-lap-part="seconds" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" value="${lapParts.seconds}" placeholder="00" aria-label="秒" />
                <b>:</b>
                <input id="bestLapMillis" data-lap-part="millis" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="3" value="${lapParts.millis}" placeholder="000" aria-label="毫秒" />
              </div>
              <small class="lap-time-hint">只填数字，自动组成 分:秒:毫秒</small>
            </label>
            <label>
              <span>车辆</span>
              <input id="sessionVehicle" type="text" value="${escapeHtml(currentVehicle)}" placeholder="例如 Porsche 911 GT3 RS" />
            </label>
            <label>
              <span>轮胎 / 辅助设置</span>
              <input id="sessionSetup" type="text" value="${escapeHtml(currentSetup)}" placeholder="RH / TC 1 / ABS Default" />
            </label>
            <label>
              <span>失误点</span>
              <input id="sessionMistakes" type="text" placeholder="例如 T1 刹晚、出弯推头" />
            </label>
            <label class="training-notes-field">
              <span>练习感受</span>
              <textarea id="sessionFeeling" rows="2" placeholder="这一轮最该修正的节奏、弯角或车辆设置"></textarea>
            </label>
            <label class="training-notes-field">
              <span>长期笔记</span>
              <textarea id="trainingNotes" rows="2" placeholder="固定刹车点、车辆设定、路线心得">${escapeHtml(record.notes ?? "")}</textarea>
            </label>
          </div>
        </div>
      </div>
      <div class="training-actions">
        <button type="button" data-training-action="save-training">保存本次练习</button>
        <button type="button" data-training-action="set-current">设为当前训练</button>
        <button type="button" data-training-action="complete">标记已达标</button>
        <button type="button" data-training-action="toggle-favorite">${favoriteLabel}</button>
        <button type="button" data-training-action="reset">重置记录</button>
      </div>
      <div class="session-review">
        <div class="section-title inline-title">
          <h3>最近 5 次复盘</h3>
          <span>${latestSession ? `最近 ${formatRelativeDate(latestSession.createdAt)}` : "还没有练习记录"}</span>
        </div>
        ${telemetryReview}
        ${sessionRows}
      </div>
    </section>
  `;
}

function renderTelemetryRecordSummary(sessions) {
  const telemetrySessions = sessions.filter((session) => session.traceId || session.telemetrySummary);
  if (!telemetrySessions.length) return "";
  return `
    <details class="telemetry-review">
      <summary>查看遥测摘要</summary>
      <div class="telemetry-review-grid">
        ${telemetrySessions
          .map((session) => {
            const summary = session.telemetrySummary ?? {};
            return `
              <article>
                <strong>${formatLapTime(session.lapSeconds)}</strong>
                <span>${escapeHtml(session.traceId || "Telemetry Auto")}</span>
                <small>极速 ${summary.maxSpeedKmh ?? "--"} km/h · 均速 ${summary.avgSpeedKmh ?? "--"} km/h · 刹车 ${summary.brakeEvents ?? 0} 次 · 全油 ${summary.fullThrottlePct ?? "--"}%</small>
              </article>
            `;
          })
          .join("")}
      </div>
    </details>
  `;
}

function renderTrainingStandby(track, official, activeLayout) {
  const record = getTrainingRecord(activeLayout.id);
  const targetDifficulty = getTargetDifficulty(record);
  const range = getTargetRange(track, official, activeLayout, targetDifficulty);
  const best = getBestLapSeconds(record);
  const gap = best ? best - range.target : null;
  const status = getTrainingStatusMeta(record);
  const recentSessions = getRecentSessions(record, 5);
  const latestSession = getLatestSession(record);
  return `
    <section class="training-standby">
      <div class="training-card-head">
        <div>
          <small>当前训练布局</small>
          <h3>${escapeHtml(activeLayout.name)}</h3>
          <p>目标难度：${escapeHtml(targetDifficulty)} · 目标圈速 ${formatTime(range.lower)} - ${formatTime(range.upper)}</p>
        </div>
        <span class="training-status-badge ${status.className}">${status.label}</span>
      </div>
      <div class="training-metrics">
        <div><small>目标中位</small><strong>${formatTime(range.target)}</strong></div>
        <div><small>个人最佳</small><strong>${best ? formatLapTime(best) : "未记录"}</strong></div>
        <div><small>目标差距</small><strong class="${gap !== null && gap <= 0 ? "is-ahead" : ""}">${formatGap(gap)}</strong></div>
        <div><small>练习次数</small><strong>${record.sessions.length}</strong></div>
      </div>
      <div class="session-review standby-review">
        <div class="section-title inline-title">
          <h3>最近 5 次复盘</h3>
          <span>${latestSession ? `最近 ${formatRelativeDate(latestSession.createdAt)}` : "还没有练习记录"}</span>
        </div>
        ${renderTelemetryRecordSummary(recentSessions)}
        ${renderSessionRows(recentSessions, range)}
      </div>
    </section>
  `;
}

function renderLayoutComparison(track, official, activeLayout) {
  if (!official.layoutDetails?.length || official.layoutDetails.length < 2) return "";
  const rows = official.layoutDetails
    .map((layout, index) => {
      const record = getTrainingRecord(layout.id);
      const status = getTrainingStatusMeta(record);
      const active = layout.id === activeLayout?.id ? " active" : "";
      const color = layoutAccentColors[index % layoutAccentColors.length];
      return `
        <tr class="${active ? "is-active" : ""}">
          <td>
            <button class="comparison-layout-button${active}" type="button" data-layout-id="${layout.id}" style="--layout-color: ${color};">
              ${escapeHtml(layout.name)}
            </button>
          </td>
          <td>${layout.length}</td>
          <td>${layout.corners}</td>
          <td>${layout.straight}</td>
          <td>${getBestLapSeconds(record) ? formatLapTime(getBestLapSeconds(record)) : "未记录"}</td>
          <td><span class="training-status-badge ${status.className}">${status.label}</span></td>
        </tr>
      `;
    })
    .join("");
  return `
    <section class="layout-comparison" aria-label="赛道布局对比">
      <div class="section-title inline-title">
        <h3>布局训练对比</h3>
        <span>点击布局切换地图与训练数据</span>
      </div>
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>布局</th>
              <th>长度</th>
              <th>弯角</th>
              <th>最长直道</th>
              <th>个人最佳</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderOfficialStats(official, activeLayout) {
  const activeId = activeLayout?.id ?? "";
  const stat = activeLayout ?? {
    name: official.officialName,
    length: official.length,
    corners: official.corners,
    straight: official.straight,
    elevation: official.elevation,
  };
  const layoutItems = official.layoutDetails
    .map((layout, index) => {
      const color = layoutAccentColors[index % layoutAccentColors.length];
      const active = layout.id === activeId ? " active" : "";
      return `
        <button class="layout-pill${active}" type="button" data-layout-id="${layout.id}" style="--layout-color: ${color};">
          <span>${index + 1}</span>
          <strong>${escapeHtml(layout.name)}</strong>
        </button>
      `;
    })
    .join("");
  return `
    <section class="official-data-strip" aria-label="官网赛道数据">
      <div>
        <small>当前布局</small>
        <strong>${escapeHtml(stat.name)}</strong>
      </div>
      <div>
        <small>布局长度</small>
        <strong>${stat.length}</strong>
      </div>
      <div>
        <small>弯角</small>
        <strong>${stat.corners}</strong>
      </div>
      <div>
        <small>最长直道</small>
        <strong>${stat.straight}</strong>
      </div>
      <div>
        <small>海拔差</small>
        <strong>${stat.elevation}</strong>
      </div>
    </section>
    <section class="layout-pills" aria-label="官网布局清单">
      ${layoutItems}
    </section>
  `;
}

function loadTrainingData() {
  try {
    const rawV12 = localStorage.getItem(TRAINING_STORAGE_KEY_V12);
    if (rawV12) {
      const parsedV12 = JSON.parse(rawV12);
      const layouts = parsedV12?.layouts;
      if (!layouts || typeof layouts !== "object" || Array.isArray(layouts)) return {};
      return Object.entries(layouts).reduce((memo, [layoutId, record]) => {
        if (!layoutId || !record || typeof record !== "object") return memo;
        memo[layoutId] = sanitizeTrainingRecord(record);
        return memo;
      }, {});
    }

    const raw = localStorage.getItem(TRAINING_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return Object.entries(parsed).reduce((memo, [layoutId, record]) => {
      if (!layoutId || !record || typeof record !== "object") return memo;
      memo[layoutId] = sanitizeTrainingRecord(record);
      return memo;
    }, {});
  } catch {
    return {};
  }
}

function loadCornerCalibrationData() {
  try {
    const raw = localStorage.getItem(CORNER_CALIBRATION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return Object.entries(parsed).reduce((memo, [layoutId, entries]) => {
      const sanitized = sanitizeCornerEntries(entries);
      if (layoutId && sanitized.length) memo[layoutId] = sanitized;
      return memo;
    }, {});
  } catch {
    return {};
  }
}

function sanitizeCornerEntries(entries) {
  if (!Array.isArray(entries)) return [];
  return entries.reduce((memo, entry) => {
    const point = Array.isArray(entry)
      ? { x: entry[0], y: entry[1], name: entry[2] }
      : entry;
    if (!point || typeof point !== "object") return memo;
    const x = clampPercent(Number(point.x));
    const y = clampPercent(Number(point.y));
    if (!Number.isFinite(x) || !Number.isFinite(y)) return memo;
    memo.push({
      x,
      y,
      name: typeof point.name === "string" ? point.name.slice(0, 80) : "",
    });
    return memo;
  }, []);
}

function clampPercent(value) {
  if (!Number.isFinite(value)) return NaN;
  return Math.min(100, Math.max(0, Number(value.toFixed(1))));
}

function persistCornerCalibrationData() {
  localStorage.setItem(CORNER_CALIBRATION_STORAGE_KEY, JSON.stringify(cornerCalibrationData));
}

function sanitizeTrainingRecord(record) {
  const status = Object.hasOwn(trainingStatuses, record.status) ? record.status : "not-started";
  const targetDifficulty = Object.hasOwn(difficultyMultipliers, record.targetDifficulty) ? record.targetDifficulty : defaultTargetDifficulty;
  const bestLapSeconds = Number(record.bestLapSeconds);
  const sessions = sanitizeTrainingSessions(record.sessions);
  const updatedAt = typeof record.updatedAt === "string" ? record.updatedAt : sessions[0]?.createdAt ?? "";
  return {
    bestLapSeconds: Number.isFinite(bestLapSeconds) && bestLapSeconds > 0 ? bestLapSeconds : null,
    targetDifficulty,
    status,
    favorite: Boolean(record.favorite),
    notes: typeof record.notes === "string" ? record.notes.slice(0, 500) : "",
    currentVehicle: typeof record.currentVehicle === "string" ? record.currentVehicle.slice(0, 120) : "",
    currentSetup: typeof record.currentSetup === "string" ? record.currentSetup.slice(0, 160) : "",
    updatedAt,
    sessions,
  };
}

function sanitizeTrainingSessions(sessions) {
  if (!Array.isArray(sessions)) return [];
  return sessions
    .reduce((memo, session) => {
      if (!session || typeof session !== "object") return memo;
      const lapSeconds = Number(session.lapSeconds);
      if (!Number.isFinite(lapSeconds) || lapSeconds <= 0) return memo;
      const createdAt = typeof session.createdAt === "string" && Date.parse(session.createdAt) ? session.createdAt : new Date().toISOString();
      memo.push({
        id: typeof session.id === "string" ? session.id : createSessionId(),
        lapSeconds: Number(lapSeconds.toFixed(3)),
        vehicle: typeof session.vehicle === "string" ? session.vehicle.slice(0, 120) : "",
        setup: typeof session.setup === "string" ? session.setup.slice(0, 160) : "",
        mistakes: typeof session.mistakes === "string" ? session.mistakes.slice(0, 220) : "",
        feeling: typeof session.feeling === "string" ? session.feeling.slice(0, 360) : "",
        traceId: typeof session.traceId === "string" ? session.traceId.slice(0, 80) : "",
        telemetrySummary: sanitizeTelemetrySessionSummary(session.telemetrySummary),
        telemetryCoach: sanitizeTelemetryCoachAnalysis(session.telemetryCoach),
        createdAt,
      });
      return memo;
    }, [])
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 30);
}

function sanitizeTelemetrySessionSummary(summary) {
  if (!summary || typeof summary !== "object") return null;
  return {
    samples: toFiniteNumber(summary.samples, 0),
    maxSpeedKmh: toFiniteNumber(summary.maxSpeedKmh, 0),
    avgSpeedKmh: toFiniteNumber(summary.avgSpeedKmh, 0),
    brakeEvents: toFiniteNumber(summary.brakeEvents, 0),
    fullThrottlePct: toFiniteNumber(summary.fullThrottlePct, 0),
  };
}

function sanitizeTelemetryCoachAnalysis(coach) {
  if (!coach || typeof coach !== "object") return null;
  const priorities = Array.isArray(coach.priorities)
    ? coach.priorities
        .map((item) => {
          if (!item || typeof item !== "object") return null;
          return {
            title: typeof item.title === "string" ? item.title.slice(0, 80) : "",
            body: typeof item.body === "string" ? item.body.slice(0, 220) : "",
            metric: typeof item.metric === "string" ? item.metric.slice(0, 80) : "",
            segmentLabel: typeof item.segmentLabel === "string" ? item.segmentLabel.slice(0, 100) : "",
            severity: ["high", "medium", "low"].includes(item.severity) ? item.severity : "medium",
          };
        })
        .filter((item) => item?.title && item.body)
        .slice(0, 4)
    : [];
  if (!priorities.length) return null;
  return {
    score: Math.round(Math.min(100, Math.max(0, toFiniteNumber(coach.score, 60)))),
    summary: typeof coach.summary === "string" ? coach.summary.slice(0, 180) : "",
    segmentCount: toFiniteNumber(coach.segmentCount, 0),
    priorities,
  };
}

function persistTrainingData() {
  localStorage.setItem(TRAINING_STORAGE_KEY_V12, JSON.stringify({ version: "1.4", layouts: trainingData }));
}

function getTrainingRecord(layoutId) {
  return {
    bestLapSeconds: null,
    targetDifficulty: defaultTargetDifficulty,
    status: "not-started",
    favorite: false,
    notes: "",
    currentVehicle: "",
    currentSetup: "",
    updatedAt: "",
    sessions: [],
    ...(trainingData[layoutId] ?? {}),
  };
}

function saveTrainingRecord(layoutId, patch) {
  trainingData[layoutId] = sanitizeTrainingRecord({
    ...getTrainingRecord(layoutId),
    ...patch,
    updatedAt: new Date().toISOString(),
  });
  persistTrainingData();
  updateAfterTrainingChange();
}

function addTrainingSession(layoutId, session, patch = {}) {
  const current = getTrainingRecord(layoutId);
  const nextSession = sanitizeTrainingSessions([{ ...session, id: createSessionId(), createdAt: new Date().toISOString() }])[0];
  const sessions = nextSession ? [nextSession, ...current.sessions] : current.sessions;
  saveTrainingRecord(layoutId, {
    ...patch,
    sessions,
    currentVehicle: patch.currentVehicle ?? nextSession?.vehicle ?? current.currentVehicle,
    currentSetup: patch.currentSetup ?? nextSession?.setup ?? current.currentSetup,
  });
}

function resetTrainingRecord(layoutId) {
  delete trainingData[layoutId];
  persistTrainingData();
  updateAfterTrainingChange();
}

function updateAfterTrainingChange() {
  applyFilters();
}

function handleTrainingAction(action) {
  const track = trackByName.get(state.selected);
  const official = track ? getOfficialTrack(track) : null;
  const activeLayout = getActiveLayout(official);
  if (!activeLayout) return;

  const record = getTrainingRecord(activeLayout.id);
  if (action === "reset") {
    resetTrainingRecord(activeLayout.id);
    return;
  }
  if (action === "set-current") {
    saveTrainingRecord(activeLayout.id, { status: "active", targetDifficulty: getFormTargetDifficulty() });
    return;
  }
  if (action === "complete") {
    saveTrainingRecord(activeLayout.id, { status: "complete", targetDifficulty: getFormTargetDifficulty() });
    return;
  }
  if (action === "toggle-favorite") {
    saveTrainingRecord(activeLayout.id, { favorite: !record.favorite, targetDifficulty: getFormTargetDifficulty() });
    return;
  }
  if (action === "save-training") {
    const lapInput = getSegmentedLapTime();
    if (lapInput.error) {
      window.alert(lapInput.error);
      return;
    }
    const sessionDraft = getSessionDraft();
    const hasSessionDetail = Boolean(lapInput.seconds || sessionDraft.vehicle || sessionDraft.setup || sessionDraft.mistakes || sessionDraft.feeling);
    const nextStatus = record.status === "not-started" && (hasSessionDetail || getTrainingNotes()) ? "active" : record.status;
    const patch = {
      targetDifficulty: getFormTargetDifficulty(),
      notes: getTrainingNotes(),
      status: nextStatus,
      currentVehicle: sessionDraft.vehicle || record.currentVehicle,
      currentSetup: sessionDraft.setup || record.currentSetup,
    };
    if (lapInput.seconds) {
      addTrainingSession(activeLayout.id, { ...sessionDraft, lapSeconds: lapInput.seconds }, patch);
    } else {
      saveTrainingRecord(activeLayout.id, patch);
    }
  }
}

function handleGuideVehicleSelect(vehicle) {
  const activeLayout = getCurrentActiveLayout();
  if (!activeLayout || !vehicle) return;
  const record = getTrainingRecord(activeLayout.id);
  saveTrainingRecord(activeLayout.id, {
    status: record.status === "complete" ? "complete" : "active",
    currentVehicle: vehicle,
  });
  const vehicleInput = detailEl.querySelector("#sessionVehicle");
  if (vehicleInput) vehicleInput.value = vehicle;
}

function handleCornerCalibrationAction(action) {
  const activeLayout = getCurrentActiveLayout();
  if (!activeLayout) return;
  const layoutId = activeLayout.id;

  if (action === "start") {
    state.calibratingLayout = layoutId;
    renderDetailOnly();
    return;
  }
  if (action === "finish") {
    state.calibratingLayout = "";
    renderDetailOnly();
    return;
  }
  if (action === "undo") {
    const entries = [...(cornerCalibrationData[layoutId] ?? [])];
    entries.pop();
    updateCornerCalibrationEntries(layoutId, entries);
    state.calibratingLayout = layoutId;
    renderDetailOnly();
    return;
  }
  if (action === "autoname") {
    autoNameCornerCalibrationEntries(activeLayout);
    state.calibratingLayout = layoutId;
    renderDetailOnly();
    return;
  }
  if (action === "clear") {
    if (!window.confirm("清空当前布局的本地弯角校准点？")) return;
    updateCornerCalibrationEntries(layoutId, []);
    state.calibratingLayout = layoutId;
    renderDetailOnly();
  }
}

function addCornerCalibrationPoint(event, frame) {
  const activeLayout = getCurrentActiveLayout();
  if (!activeLayout || !isCornerCalibrating(activeLayout)) return;
  const layoutId = activeLayout.id;
  const maxCorners = Number(activeLayout.corners) || 0;
  const entries = [...(cornerCalibrationData[layoutId] ?? [])];
  if (maxCorners && entries.length >= maxCorners) {
    window.alert("当前布局的弯角数量已经标完，可以先撤销或清空后重新校准。");
    return;
  }

  const surface = frame.querySelector(".layout-map-surface") ?? frame;
  const rect = surface.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
  const names = getCornerNames(state.selected, activeLayout, maxCorners || entries.length + 1);
  entries.push({
    x: clampPercent(((event.clientX - rect.left) / rect.width) * 100),
    y: clampPercent(((event.clientY - rect.top) / rect.height) * 100),
    name: names[entries.length] ?? `T${entries.length + 1}`,
  });
  updateCornerCalibrationEntries(layoutId, entries);
  renderDetailOnly();
}

function handleCornerNameInput(input) {
  const activeLayout = getCurrentActiveLayout();
  if (!activeLayout) return;
  const index = Number(input.dataset.cornerNameIndex);
  const entries = [...(cornerCalibrationData[activeLayout.id] ?? [])];
  if (!Number.isInteger(index) || !entries[index]) return;
  entries[index] = {
    ...entries[index],
    name: input.value.slice(0, 80),
  };
  updateCornerCalibrationEntries(activeLayout.id, entries);
}

function updateCornerCalibrationEntries(layoutId, entries) {
  const sanitized = sanitizeCornerEntries(entries);
  if (sanitized.length) {
    cornerCalibrationData[layoutId] = sanitized;
  } else {
    delete cornerCalibrationData[layoutId];
  }
  persistCornerCalibrationData();
}

function autoNameCornerCalibrationEntries(activeLayout) {
  const entries = [...(cornerCalibrationData[activeLayout.id] ?? [])];
  if (!entries.length) return;
  const names = getCornerNames(state.selected, activeLayout, entries.length);
  updateCornerCalibrationEntries(
    activeLayout.id,
    entries.map((entry, index) => ({
      ...entry,
      name: names[index] ?? entry.name ?? `T${index + 1}`,
    })),
  );
}

function getCurrentActiveLayout() {
  const track = trackByName.get(state.selected);
  const official = track ? getOfficialTrack(track) : null;
  return getActiveLayout(official);
}

function getFormTargetDifficulty() {
  const value = document.querySelector("#targetDifficultySelect")?.value;
  return Object.hasOwn(difficultyMultipliers, value) ? value : defaultTargetDifficulty;
}

function getTrainingNotes() {
  return (document.querySelector("#trainingNotes")?.value ?? "").trim().slice(0, 500);
}

function getSessionDraft() {
  return {
    vehicle: (document.querySelector("#sessionVehicle")?.value ?? "").trim().slice(0, 120),
    setup: (document.querySelector("#sessionSetup")?.value ?? "").trim().slice(0, 160),
    mistakes: (document.querySelector("#sessionMistakes")?.value ?? "").trim().slice(0, 220),
    feeling: (document.querySelector("#sessionFeeling")?.value ?? "").trim().slice(0, 360),
  };
}

function getSegmentedLapTime() {
  const minutesText = document.querySelector("#bestLapMinutes")?.value.trim() ?? "";
  const secondsText = document.querySelector("#bestLapSeconds")?.value.trim() ?? "";
  const millisText = document.querySelector("#bestLapMillis")?.value.trim() ?? "";
  const hasValue = Boolean(minutesText || secondsText || millisText);
  if (!hasValue) return { seconds: null, error: "" };

  const minutes = Number(minutesText || 0);
  const seconds = Number(secondsText || 0);
  const millis = Number((millisText || "0").padStart(3, "0"));
  if ([minutes, seconds, millis].some((value) => !Number.isFinite(value))) {
    return { seconds: null, error: "圈速只能填写数字。" };
  }
  if (seconds > 59) {
    return { seconds: null, error: "秒数需要在 00 到 59 之间。" };
  }
  if (millis > 999) {
    return { seconds: null, error: "毫秒需要在 000 到 999 之间。" };
  }
  const total = minutes * 60 + seconds + millis / 1000;
  if (total <= 0) return { seconds: null, error: "圈速需要大于 00:00:000。" };
  return { seconds: Number(total.toFixed(3)), error: "" };
}

function getTargetDifficulty(record) {
  if (state.difficulty !== "all") return state.difficulty;
  return record.targetDifficulty || defaultTargetDifficulty;
}

function getTargetRange(track, official, activeLayout, difficulty) {
  const base = estimateLayoutBaseLap(track, official, activeLayout);
  const target = Math.round(base * difficultyMultipliers[difficulty]);
  const padding = difficulty === "高手" ? 2 : 4;
  return {
    target,
    lower: target - padding,
    upper: target + (difficulty === "高手" ? 2 : 5),
  };
}

function estimateLayoutBaseLap(track, official, activeLayout) {
  if (!official?.layoutDetails?.length || !activeLayout?.lengthValue) return track.baseLap;
  const representative = [...official.layoutDetails].sort((a, b) => b.lengthValue - a.lengthValue)[0];
  const ratio = activeLayout.lengthValue / (representative.lengthValue || activeLayout.lengthValue);
  return Math.max(25, Math.round(track.baseLap * ratio));
}

function parseLapTime(value) {
  const clean = String(value).trim().replace(",", ".");
  if (/^\d+(\.\d+)?$/.test(clean)) {
    const seconds = Number(clean);
    return seconds > 0 ? seconds : null;
  }
  const parts = clean.split(":").map(Number);
  if (parts.length < 2 || parts.length > 3 || parts.some((part) => Number.isNaN(part))) return null;
  const seconds = parts.pop();
  const minutes = parts.pop() ?? 0;
  const hours = parts.pop() ?? 0;
  const total = hours * 3600 + minutes * 60 + seconds;
  return total > 0 ? Number(total.toFixed(3)) : null;
}

function splitLapTime(totalSeconds) {
  if (typeof totalSeconds !== "number" || Number.isNaN(totalSeconds)) {
    return { minutes: "", seconds: "", millis: "" };
  }
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds - minutes * 60);
  let millis = Math.round((totalSeconds - minutes * 60 - seconds) * 1000);
  if (millis >= 1000) {
    millis = 0;
    seconds += 1;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }
  return {
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    millis: String(millis).padStart(3, "0"),
  };
}

function formatLapTime(totalSeconds) {
  if (typeof totalSeconds !== "number" || Number.isNaN(totalSeconds)) return "未记录";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;
  return `${minutes}:${seconds.toFixed(3).padStart(6, "0")}`;
}

function formatGap(gap) {
  if (gap === null || Number.isNaN(gap)) return "待记录";
  if (gap <= 0) return `快 ${Math.abs(gap).toFixed(2)}s`;
  return `慢 ${gap.toFixed(2)}s`;
}

function getBestLapSeconds(record) {
  const values = [
    typeof record.bestLapSeconds === "number" ? record.bestLapSeconds : null,
    ...record.sessions.map((session) => session.lapSeconds),
  ].filter((value) => typeof value === "number" && Number.isFinite(value) && value > 0);
  return values.length ? Math.min(...values) : null;
}

function getLatestSession(record) {
  return getRecentSessions(record, 1)[0] ?? null;
}

function getRecentSessions(record, limit = 5) {
  return [...(record.sessions ?? [])]
    .filter((session) => Number.isFinite(session.lapSeconds))
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, limit);
}

function createSessionId() {
  return `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeVehicleName(value) {
  return String(value).trim().toLowerCase();
}

function getTrainingStatusMeta(record) {
  const status = Object.hasOwn(trainingStatuses, record.status) ? record.status : "not-started";
  return {
    label: trainingStatuses[status],
    className: `status-${status}${record.favorite ? " is-favorite" : ""}`,
  };
}

function getTrackTrainingSummary(track) {
  const recommendation = getRecommendedLayoutForTrack(track);
  if (!recommendation) return { label: "未开始", className: "status-not-started" };
  const status = getTrainingStatusMeta(recommendation.record);
  if (recommendation.record.favorite && recommendation.record.status !== "complete") return { label: "收藏待练", className: "status-favorite" };
  return { label: status.label, className: status.className };
}

function trackMatchesTrainingFilter(track, filter) {
  const official = getOfficialTrack(track);
  const records = official?.layoutDetails.map((layout) => getTrainingRecord(layout.id)) ?? [];
  if (!records.length) return filter === "not-started";
  if (filter === "favorite") return records.some((record) => record.favorite);
  if (filter === "complete") return records.some((record) => record.status === "complete");
  if (filter === "active") return records.some((record) => record.status === "active");
  return records.some((record) => record.status === "not-started");
}

function updateTrackTrainingBadges() {
  trackButtons.forEach((button, name) => {
    const track = trackByName.get(name);
    const badge = button.querySelector("[data-track-training]");
    if (!track || !badge) return;
    const summary = getTrackTrainingSummary(track);
    badge.className = `training-status-badge ${summary.className}`;
    badge.textContent = summary.label;
  });
}

function renderTrainingDashboard() {
  if (!trainingSummaryEl) return;
  const entries = allLayoutEntries.map((entry) => ({ ...entry, record: getTrainingRecord(entry.layout.id) }));
  const activeCount = entries.filter((entry) => entry.record.status === "active").length;
  const completeCount = entries.filter((entry) => entry.record.status === "complete").length;
  const weekCount = getWeekSessionCount(entries);
  const mostPracticed = getMostPracticedTrack(entries);
  const biggestGain = getBiggestGain(entries);
  const recent = getRecentPracticeEntry(entries);
  const current = getCurrentTrainingEntry(entries);
  const recommendation = getRecommendedLayout(entries);
  const currentTrackName = current ? getTrackZhName(current.track.name) : "";
  const recentTrackName = recent ? getTrackZhName(recent.track.name) : "";
  const recommendedTrackName = getTrackZhName(recommendation.track.name);
  trainingUpdatedEl.textContent = recent ? `最近练习 ${formatRelativeDate(recent.session.createdAt)}` : "本地记录";
  trainingSummaryEl.innerHTML = `
    <button class="training-summary-card recommendation-button is-primary" type="button" data-dashboard-track="${(current ?? recommendation).track.name}" data-dashboard-layout="${(current ?? recommendation).layout.id}">
      <small>今天练什么</small>
      <strong>${escapeHtml((current ?? recommendation).layout.name)}</strong>
      <span>${current ? `当前训练 · ${escapeHtml(currentTrackName)}` : `推荐 · ${escapeHtml(recommendedTrackName)}`}</span>
    </button>
    <div class="training-summary-card">
      <small>本周练习</small>
      <strong>${weekCount}</strong>
      <span>进行中 ${activeCount} · 已达标 ${completeCount}</span>
    </div>
    <div class="training-summary-card">
      <small>最近一次</small>
      <strong>${recent ? formatLapTime(recent.session.lapSeconds) : "暂无记录"}</strong>
      <span>${recent ? `${escapeHtml(recentTrackName)} · ${escapeHtml(recent.layout.name)}` : "保存一次练习后这里会接上"}</span>
    </div>
    <div class="training-summary-card">
      <small>复盘信号</small>
      <strong>${biggestGain ? `进步 ${biggestGain.delta.toFixed(2)}s` : mostPracticed ? escapeHtml(mostPracticed.name) : "待积累"}</strong>
      <span>${biggestGain ? `${escapeHtml(getTrackZhName(biggestGain.track.name))} · ${escapeHtml(biggestGain.layout.name)}` : mostPracticed ? "本地最常练赛道" : "多练几次后生成反馈"}</span>
    </div>
    <button class="training-summary-card recommendation-button" type="button" data-dashboard-track="${recommendation.track.name}" data-dashboard-layout="${recommendation.layout.id}">
      <small>下一条推荐</small>
      <strong>${escapeHtml(recommendation.layout.name)}</strong>
      <span>${escapeHtml(recommendedTrackName)} · ${regionName(recommendation.track.region)}</span>
    </button>
  `;
}

function getRecommendedLayout(entries = allLayoutEntries.map((entry) => ({ ...entry, record: getTrainingRecord(entry.layout.id) }))) {
  const difficultyBonus = state.difficulty === "all" ? defaultTargetDifficulty : state.difficulty;
  return [...entries]
    .map((entry) => {
      const verification = layoutVerification[entry.layout.id];
      let score = 0;
      if (entry.record.status !== "complete") score += 80;
      if (entry.record.status === "active") score += 44;
      if (entry.record.favorite && entry.record.status !== "complete") score += 30;
      if (verification?.status === "verified" || verification?.status === "variant") score += 14;
      if (entry.official.layouts >= 4) score += 10;
      if (entry.layout.lengthValue > 4) score += 8;
      if (entry.record.targetDifficulty === difficultyBonus) score += 6;
      if (getBestLapSeconds(entry.record)) score += 2;
      return { ...entry, score };
    })
    .sort((a, b) => b.score - a.score || b.layout.lengthValue - a.layout.lengthValue)[0];
}

function getRecommendedLayoutForTrack(track) {
  const official = getOfficialTrack(track);
  const entries = (official?.layoutDetails ?? []).map((layout) => ({ track, official, layout, record: getTrainingRecord(layout.id) }));
  return entries.length ? getRecommendedLayout(entries) : null;
}

function getCurrentTrainingEntry(entries) {
  return entries
    .filter((entry) => entry.record.status === "active")
    .sort((a, b) => Date.parse(b.record.updatedAt || 0) - Date.parse(a.record.updatedAt || 0))[0];
}

function getRecentPracticeEntry(entries) {
  return entries
    .flatMap((entry) => getRecentSessions(entry.record, 1).map((session) => ({ ...entry, session })))
    .sort((a, b) => Date.parse(b.session.createdAt) - Date.parse(a.session.createdAt))[0];
}

function getWeekSessionCount(entries) {
  const since = Date.now() - 7 * 24 * 60 * 60 * 1000;
  return entries.reduce(
    (total, entry) => total + entry.record.sessions.filter((session) => Date.parse(session.createdAt) >= since).length,
    0,
  );
}

function getMostPracticedTrack(entries) {
  const counts = new Map();
  entries.forEach((entry) => {
    if (!entry.record.sessions.length) return;
    const current = counts.get(entry.track.name) ?? { name: getTrackZhName(entry.track.name), count: 0 };
    current.count += entry.record.sessions.length;
    counts.set(entry.track.name, current);
  });
  return [...counts.values()].sort((a, b) => b.count - a.count)[0];
}

function getBiggestGain(entries) {
  return entries
    .map((entry) => {
      const sessions = getRecentSessions(entry.record, 30).slice().reverse();
      if (sessions.length < 2) return null;
      const first = sessions[0].lapSeconds;
      const best = Math.min(...sessions.map((session) => session.lapSeconds));
      const delta = first - best;
      return delta > 0 ? { ...entry, delta } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.delta - a.delta)[0];
}

function buildAllLayoutEntries() {
  return tracks.flatMap((track) => {
    const official = getOfficialTrack(track);
    return (official?.layoutDetails ?? []).map((layout) => ({ track, official, layout }));
  });
}

function getLayoutEntryById(layoutId) {
  return allLayoutEntries.find((entry) => entry.layout.id === layoutId) ?? null;
}

function getLayoutLabelById(layoutId) {
  const entry = getLayoutEntryById(layoutId);
  if (!entry) return layoutId || "未知布局";
  return `${getTrackZhName(entry.track.name)} · ${entry.layout.name}`;
}

function formatRelativeDate(value) {
  const time = Date.parse(value);
  if (!Number.isFinite(time)) return "刚刚";
  const diffMinutes = Math.max(0, Math.round((Date.now() - time) / 60000));
  if (diffMinutes < 1) return "刚刚";
  if (diffMinutes < 60) return `${diffMinutes} 分钟前`;
  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} 小时前`;
  return `${Math.round(diffHours / 24)} 天前`;
}

function getVehicleReason(label, track, difficulty) {
  const text = `${label} ${track.profile} ${track.tune}`;
  if (/GT-R|quattro|GR Yaris|Lancer|Supra|NSX|WRX|BRZ/i.test(text)) return "牵引和稳定性强，适合反复刷圈建立节奏。";
  if (/Mazda Roadster|Clio|Civic|86|A110|Cayman/i.test(text)) return "反馈轻、容错高，适合练刹车点和入弯姿态。";
  if (/Ferrari|McLaren|Lamborghini|Viper|AMG|Aston|Porsche/i.test(text)) return "高速稳定和刷圈效率好，适合进阶后压缩误差。";
  if (difficulty === "新手") return "稳定优先，帮助先跑出连续无失误圈。";
  if (difficulty === "高手") return "上限更高，适合追求分段极限。";
  return "综合性能均衡，适合当前布局的主线训练。";
}

function applyHashRoute() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const trackName = params.get("track");
  const layoutId = params.get("layout");
  const licenseId = params.get("license");
  const seriesId = params.get("series");
  state.coachMode = params.get("mode") === "coach";
  if (LICENSE_SERIES.some((series) => series.id === seriesId)) {
    state.selectedLicenseSeries = seriesId;
  }
  if (licenseId && LICENSE_TEST_BY_ID.has(licenseId)) {
    const licenseTest = LICENSE_TEST_BY_ID.get(licenseId);
    state.selectedLicenseTestId = licenseId;
    state.selectedLicenseLevel = licenseTest.level;
    state.selectedLicenseSeries = getLicenseSeries(licenseTest);
  }
  if (trackName && trackByName.has(trackName)) {
    state.selected = trackName;
    const official = getOfficialTrack(trackByName.get(trackName));
    state.selectedLayout = official?.layoutDetails.some((layout) => layout.id === layoutId) ? layoutId : "";
  }
  document.body.classList.toggle("is-coach-mode", state.coachMode);
}

function updateUrlHash() {
  if (!state.selected) return;
  const track = trackByName.get(state.selected);
  const official = track ? getOfficialTrack(track) : null;
  const layoutId = getActiveLayout(official)?.id ?? "";
  const params = new URLSearchParams();
  params.set("track", state.selected);
  if (layoutId) params.set("layout", layoutId);
  if (state.selectedLicenseSeries) params.set("series", state.selectedLicenseSeries);
  if (state.selectedLicenseTestId) params.set("license", state.selectedLicenseTestId);
  if (state.coachMode) params.set("mode", "coach");
  history.replaceState(null, "", `#${params.toString()}`);
}

function getStandard(difficulty) {
  const standards = {
    "新手": "连续 3 圈无重大失误，刹车点基本固定。",
    "进阶": "能主动调整线路，单圈误差控制在 1 秒左右。",
    "高手": "开始追求分段极限，出弯速度和轮胎管理稳定。",
  };
  return standards[difficulty];
}

function regionName(region) {
  const names = {
    Europe: "欧洲",
    "Asia-Oceania": "亚洲 / 大洋洲",
    Americas: "美洲",
  };
  return names[region] ?? region;
}

function getOfficialTrack(track) {
  return officialTrackMeta[track.name];
}

function getTrackZhName(trackName) {
  return trackChineseNames[trackName] ?? trackName;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function officialLogoSrc(official) {
  return official ? `./assets/track-logos/${official.baseId}.png` : "./assets/racing-hero.png";
}

function trackThumbnailSrc(official) {
  return official ? `./assets/track-thumbnails/${official.baseId}.jpg` : "./assets/racing-hero.png";
}

function renderTrackMap(official, title, activeLayout) {
  const layoutName = activeLayout ? escapeHtml(activeLayout.name) : escapeHtml(title);
  const layoutMeta = activeLayout ? `${activeLayout.length} · ${activeLayout.corners} 弯` : "等待布局数据";
  const layoutAsset = activeLayout ? layoutAssets[activeLayout.id] : null;
  const fallbackSrc = official && officialMapIds.has(official.baseId) ? `./assets/track-maps/${official.baseId}.png` : "";
  const mapSrc = layoutAsset?.mapSrc ?? fallbackSrc;
  const sourceLabel = layoutAsset ? `${layoutAsset.sourceName} · ${layoutAsset.sourceType}` : "地点级备用图";
  const patternClass = activeLayout ? ` layout-pattern-${activeLayout.index % 6}` : "";
  const calibrationClass = isCornerCalibrating(activeLayout) ? " is-calibrating" : "";
  if (!mapSrc) {
    return `
      <div class="track-map-frame is-missing${calibrationClass}">
        <strong>布局图待补</strong>
        <span>此布局暂未匹配到可离线显示的真实布局图</span>
        <div class="layout-accent-card">
          <small>ACTIVE LAYOUT</small>
          <strong>${layoutName}</strong>
          <span>${layoutMeta}</span>
        </div>
      </div>
    `;
  }
  return `
    <div class="track-map-frame is-highlighted${patternClass}${calibrationClass}${layoutAsset ? " is-layout-map" : " is-fallback-map"}">
      <div class="layout-map-surface">
        <img class="layout-map-image" src="${mapSrc}" alt="${title} ${layoutName} 布局图" loading="eager" decoding="async" />
        ${renderCornerHotspots(title, activeLayout)}
      </div>
      <div class="layout-accent-card">
        <small>ACTIVE LAYOUT</small>
        <strong>${layoutName}</strong>
        <span>${layoutMeta}</span>
      </div>
      <div class="map-source-card">
        <small>MAP SOURCE</small>
        <strong>${escapeHtml(sourceLabel)}</strong>
        <span>${layoutAsset ? "按布局 ID 离线缓存" : "未找到 layout 级图片时使用"}</span>
      </div>
    </div>
  `;
}

function renderCoachTrackMap(official, title, activeLayout) {
  const layoutName = activeLayout ? escapeHtml(activeLayout.name) : escapeHtml(title);
  const layoutMeta = activeLayout ? `${activeLayout.length} · ${activeLayout.corners} 弯` : "等待布局数据";
  const layoutAsset = activeLayout ? layoutAssets[activeLayout.id] : null;
  const fallbackSrc = official && officialMapIds.has(official.baseId) ? `./assets/track-maps/${official.baseId}.png` : "";
  const mapSrc = layoutAsset?.mapSrc ?? fallbackSrc;
  const sourceLabel = layoutAsset ? `${layoutAsset.sourceName} · ${layoutAsset.sourceType}` : "地点级备用图";
  if (!mapSrc) {
    return `
      <div class="track-map-frame is-missing is-coach-map-light">
        <strong>布局图待补</strong>
        <span>此布局暂未匹配到可离线显示的真实布局图</span>
      </div>
    `;
  }
  return `
    <div class="track-map-frame is-layout-map is-coach-map-light">
      <div class="layout-map-surface">
        <img class="layout-map-image" src="${mapSrc}" alt="${title} ${layoutName} 布局图" loading="eager" decoding="async" />
      </div>
      <div class="layout-accent-card">
        <small>ACTIVE LAYOUT</small>
        <strong>${layoutName}</strong>
        <span>${layoutMeta}</span>
      </div>
      <div class="map-source-card">
        <small>MAP SOURCE</small>
        <strong>${escapeHtml(sourceLabel)}</strong>
        <span>教练页轻量只读图</span>
      </div>
    </div>
  `;
}

function renderCornerHotspots(trackTitle, activeLayout) {
  if (!activeLayout?.corners) return "";
  const annotations = getCornerAnnotations(trackTitle, activeLayout);
  const controls = renderCornerCalibrationControls(activeLayout, annotations);
  if (!annotations.length) {
    return `
      <div class="corner-calibration-note">
        <small>TURN LABELS</small>
        <strong>${isCornerCalibrating(activeLayout) ? `点击布局图添加第 1 个弯角` : "弯角标注待校准"}</strong>
      </div>
      ${controls}
    `;
  }
  return `
    <div class="corner-hotspots" aria-label="弯角名称热点">
      ${annotations
        .map(
          (corner) => `
            <button class="corner-hotspot" type="button" style="--x: ${corner.x}%; --y: ${corner.y}%;" aria-label="${escapeHtml(corner.name)}">
              <span>${escapeHtml(corner.name)}</span>
            </button>
          `,
        )
        .join("")}
    </div>
    ${controls}
  `;
}

function getCornerAnnotations(trackTitle, activeLayout) {
  const count = Number(activeLayout.corners) || 0;
  if (!count) return [];
  const positions = getCornerCalibrationEntries(activeLayout.id);
  if (!positions.length) return [];
  const names = getCornerNames(trackTitle, activeLayout, count);
  return positions.slice(0, count).map((position, index) => {
    return { name: position.name || names[index] || `T${index + 1}`, x: position.x, y: position.y };
  });
}

function getCornerCalibrationEntries(layoutId) {
  const localEntries = sanitizeCornerEntries(cornerCalibrationData[layoutId]);
  if (localEntries.length) return localEntries;
  return getStaticCornerEntries(layoutId);
}

function getStaticCornerEntries(layoutId) {
  return sanitizeCornerEntries(normalizeCornerEntries(layoutCornerPositions[layoutId]));
}

function normalizeCornerEntries(entries) {
  if (!Array.isArray(entries)) return [];
  return entries.reduce((memo, entry) => {
    if (Array.isArray(entry)) {
      memo.push({ x: entry[0], y: entry[1], name: entry[2] ?? "" });
      return memo;
    }
    memo.push(entry);
    return memo;
  }, []);
}

function isCornerCalibrating(activeLayout) {
  return Boolean(activeLayout?.id && state.calibratingLayout === activeLayout.id);
}

function renderCornerCalibrationControls(activeLayout, annotations) {
  if (!activeLayout?.id) return "";
  const isCalibrating = isCornerCalibrating(activeLayout);
  const editableEntries = cornerCalibrationData[activeLayout.id] ?? [];
  const staticEntries = getStaticCornerEntries(activeLayout.id);
  const total = Number(activeLayout.corners) || annotations.length;
  const exportValue = escapeHtml(JSON.stringify({ [activeLayout.id]: editableEntries }, null, 2));
  const progressText = `${editableEntries.length}/${total || "?"}`;
  const nameLibrary = getCornerNameLibrary(activeLayout);
  const nextCornerName = getCornerNames(state.selected, activeLayout, editableEntries.length + 1)[editableEntries.length] ?? `T${editableEntries.length + 1}`;
  const libraryLine = nameLibrary.length ? `名称库 ${nameLibrary.length} 个 · 下一个：${nextCornerName}` : "暂无专用名称库，将使用 T 编号";

  if (!isCalibrating) {
    return `
      <div class="corner-calibration-panel is-compact">
        <button class="corner-calibration-primary" type="button" data-corner-action="start">${staticEntries.length ? "重新校准弯角" : "开始校准弯角"}</button>
        <span>${editableEntries.length ? "本地校准点已启用" : staticEntries.length ? "官方校准点已启用" : "当前布局还没有可信弯角点位"} · ${escapeHtml(libraryLine)}</span>
      </div>
    `;
  }

  return `
    <div class="corner-calibration-panel">
      <div class="corner-calibration-header">
        <div>
          <small>CORNER CALIBRATION</small>
          <strong>点击布局图记录点位 ${progressText}</strong>
          <span>${escapeHtml(libraryLine)}</span>
        </div>
        <button type="button" data-corner-action="finish">完成</button>
      </div>
      <div class="corner-calibration-actions">
        <button type="button" data-corner-action="autoname" ${editableEntries.length && nameLibrary.length ? "" : "disabled"}>自动补名</button>
        <button type="button" data-corner-action="undo" ${editableEntries.length ? "" : "disabled"}>撤销</button>
        <button type="button" data-corner-action="clear" ${editableEntries.length ? "" : "disabled"}>清空</button>
      </div>
      ${
        nameLibrary.length
          ? `<div class="corner-name-preview" aria-label="弯角名称库预览">
              ${nameLibrary
                .slice(Math.max(0, editableEntries.length - 2), editableEntries.length + 5)
                .map((name, index) => {
                  const absoluteIndex = Math.max(0, editableEntries.length - 2) + index;
                  return `<span class="${absoluteIndex === editableEntries.length ? "is-next" : ""}">${escapeHtml(name)} / T${absoluteIndex + 1}</span>`;
                })
                .join("")}
            </div>`
          : ""
      }
      ${
        editableEntries.length
          ? `<div class="corner-name-list">
              ${editableEntries
                .map(
                  (entry, index) => `
                    <label>
                      <span>T${index + 1}</span>
                      <input type="text" value="${escapeHtml(entry.name || `T${index + 1}`)}" data-corner-name-index="${index}" />
                    </label>
                  `,
                )
                .join("")}
            </div>
            <textarea class="corner-calibration-export" readonly aria-label="弯角校准 JSON">${exportValue}</textarea>`
          : `<p>进入校准后，按实际弯角位置依次点击布局图。点位会只保存在本机浏览器，不会覆盖官方数据。</p>`
      }
    </div>
  `;
}

function getCornerNames(trackTitle, activeLayout, count) {
  const baseNames = getCornerNameLibrary(activeLayout, trackTitle);
  return Array.from({ length: count }, (_, index) => {
    const knownName = baseNames[index];
    if (knownName) return `${knownName} / T${index + 1}`;
    const isGameOnly = layoutVerification[activeLayout.id]?.status === "game-only";
    return isGameOnly ? `训练弯 T${index + 1}` : `T${index + 1}`;
  });
}

function getCornerNameLibrary(activeLayout, trackTitle = state.selected) {
  return layoutCornerNameSets[activeLayout?.id] ?? cornerNameSets[state.selected] ?? cornerNameSets[trackTitle] ?? [];
}

function renderLayoutVerification(activeLayout) {
  if (!activeLayout) return "";
  const verification = layoutVerification[activeLayout.id] ?? {
    status: "missing",
    officialLength: activeLayout.length,
    officialLengthKm: milesTextToKm(activeLayout.length),
    note: "此布局还没有真实赛道校验记录",
  };
  const statusLabels = {
    verified: "已校验",
    variant: "游戏差异",
    "game-only": "GT7 原创",
    missing: "待补",
  };
  const realLine =
    typeof verification.realLengthKm === "number"
      ? `<span>真实参考：${formatKm(verification.realLengthKm)}</span>`
      : `<span>${escapeHtml(verification.note)}</span>`;
  const deltaLine =
    typeof verification.deltaKm === "number"
      ? `<span>差异：${formatSignedKm(verification.deltaKm)}</span>`
      : "";

  return `
    <section class="layout-verification ${verification.status}" aria-label="布局双向校验">
      <div>
        <small>GT7 官方</small>
        <strong>${escapeHtml(verification.officialLength ?? activeLayout.length)} / ${formatKm(verification.officialLengthKm ?? milesTextToKm(activeLayout.length))}</strong>
      </div>
      <div>
        <small>${statusLabels[verification.status] ?? "校验"}</small>
        ${realLine}
        ${deltaLine}
      </div>
    </section>
  `;
}

function milesTextToKm(value) {
  const miles = Number(String(value).match(/[\d.]+/)?.[0] ?? 0);
  return Number((miles * 1.609344).toFixed(3));
}

function formatKm(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "待补";
  return `${value.toFixed(3).replace(/\.?0+$/, "")} km`;
}

function formatSignedKm(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "待补";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(3).replace(/\.?0+$/, "")} km`;
}

function getActiveLayout(official) {
  if (!official?.layoutDetails?.length) return null;
  const requestedIndex = official.layoutDetails.findIndex((layout) => layout.id === state.selectedLayout);
  const index = requestedIndex >= 0 ? requestedIndex : 0;
  const layout = official.layoutDetails[index];
  return {
    ...layout,
    index,
    color: layoutAccentColors[index % layoutAccentColors.length],
  };
}

function attachMapHeroInteraction() {
  const hero = detailEl.querySelector(".map-hero");
  if (!hero) return;
  let pointerFrame = 0;
  let latestPointer = null;

  hero.addEventListener("pointermove", (event) => {
    latestPointer = { x: event.clientX, y: event.clientY };
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      if (!latestPointer) return;
      const rect = hero.getBoundingClientRect();
      const x = ((latestPointer.x - rect.left) / rect.width) * 100;
      const y = ((latestPointer.y - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mx", `${x.toFixed(2)}%`);
      hero.style.setProperty("--my", `${y.toFixed(2)}%`);
      hero.style.setProperty("--tilt-x", `${((y - 50) / -50).toFixed(3)}`);
      hero.style.setProperty("--tilt-y", `${((x - 50) / 50).toFixed(3)}`);
    });
  });

  hero.addEventListener("pointerleave", () => {
    latestPointer = null;
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    hero.style.removeProperty("--mx");
    hero.style.removeProperty("--my");
    hero.style.removeProperty("--tilt-x");
    hero.style.removeProperty("--tilt-y");
  });
}

function buildOfficialTrackMeta() {
  const groups = Object.values(window.OfficialTracks ?? {}).reduce((memo, item) => {
    if (!memo[item.baseId]) {
      memo[item.baseId] = {
        baseId: item.baseId,
        officialName: item.nameBase.trim(),
        country: item.countryName.trim(),
        layouts: [],
      };
    }
    memo[item.baseId].layouts.push(item);
    return memo;
  }, {});

  const byName = Object.values(groups).reduce((memo, group) => {
    memo[normalizeName(group.officialName)] = group;
    return memo;
  }, {});

  return tracks.reduce((memo, track) => {
    const officialName = officialNameAliases[track.name] ?? track.name;
    const group = byName[normalizeName(officialName)];
    if (!group) return memo;
    const representative = [...group.layouts].sort((a, b) => b.length_v - a.length_v)[0];
    memo[track.name] = {
      baseId: group.baseId,
      officialName: group.officialName,
      country: group.country,
      layouts: group.layouts.length,
      layoutNames: group.layouts.map((layout) => layout.nameLong.trim()),
      layoutDetails: group.layouts.map((layout) => ({
        id: layout.id,
        name: layout.nameLong.trim(),
        length: layout.length,
        lengthValue: layout.length_v,
        corners: layout.cornerCount,
        elevation: layout.elevationGap,
        straight: layout.straight,
      })),
      length: representative.length,
      corners: representative.cornerCount,
      elevation: representative.elevationGap,
      straight: representative.straight,
    };
    return memo;
  }, {});
}

function normalizeName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getLicenseSeries(test) {
  return test?.series === "master" ? "master" : "normal";
}

function getLicenseSeriesMeta(seriesId) {
  return LICENSE_SERIES.find((series) => series.id === seriesId) ?? LICENSE_SERIES[0];
}

function getLicenseDisplayId(test) {
  return test?.displayId ?? test?.id ?? "";
}

function getLicenseTestsFor(seriesId = state.selectedLicenseSeries, level = state.selectedLicenseLevel) {
  return LICENSE_TESTS.filter((test) => getLicenseSeries(test) === seriesId && test.level === level);
}

function renderLicenseCoachPanel() {
  if (!licenseCoachPanelEl) return;
  const activeTest = getActiveLicenseTest();
  const currentSeries = getLicenseSeriesMeta(state.selectedLicenseSeries);
  const seriesTests = LICENSE_TESTS.filter((test) => getLicenseSeries(test) === currentSeries.id);
  const levelTests = getLicenseTestsFor(currentSeries.id, state.selectedLicenseLevel);
  const typeBuckets = [...new Set(seriesTests.map((test) => getLicenseTypeMeta(test).label))];
  const seriesButtons = LICENSE_SERIES
    .map((series) => {
      const active = currentSeries.id === series.id ? " active" : "";
      return `<button type="button" class="chip${active}" data-license-series="${series.id}">${escapeHtml(series.label)}</button>`;
    })
    .join("");
  const levelButtons = LICENSE_LEVELS
    .map((level) => {
      const active = state.selectedLicenseLevel === level ? " active" : "";
      return `<button type="button" class="chip${active}" data-license-level="${level}">${level}</button>`;
    })
    .join("");
  const testCards = levelTests
    .map((test) => {
      const active = activeTest?.id === test.id ? " active" : "";
      const type = getLicenseTypeMeta(test);
      const scope = getLicenseScopeMeta(test);
      const targets = getLicenseTargets(test);
      return `
        <button type="button" class="license-test-card${active}" data-license-test="${escapeHtml(test.id)}">
          <span>
            <strong>${escapeHtml(getLicenseDisplayId(test))}</strong>
            <small>${escapeHtml(type.label)} · ${escapeHtml(scope.label)}</small>
          </span>
          <b>${Number.isFinite(targets.gold) ? formatLapTime(targets.gold) : "按游戏填写"}</b>
          <em>${escapeHtml(test.track)}</em>
        </button>
      `;
    })
    .join("");

  licenseCoachPanelEl.innerHTML = `
    <div class="section-title license-title">
      <div>
        <h2>驾照考试 AI 教练</h2>
        <span>${seriesTests.length} 个${escapeHtml(currentSeries.label)}测试 · ${typeBuckets.length} 类训练</span>
      </div>
      <div class="license-toolbar">
        <div class="filter-group license-series" aria-label="驾照考试集">${seriesButtons}</div>
        <div class="filter-group license-levels" aria-label="驾照等级">${levelButtons}</div>
      </div>
    </div>
    <div class="license-coach-grid">
      <div class="license-test-list">${testCards}</div>
      ${renderActiveLicenseTest(activeTest)}
    </div>
  `;
}

function renderActiveLicenseTest(test) {
  if (!test) return `<div class="license-test-detail empty-state">请选择一个驾照测试。</div>`;
  const type = getLicenseTypeMeta(test);
  const scope = getLicenseScopeMeta(test);
  const targets = getLicenseTargets(test);
  return `
    <article class="license-test-detail">
      <div class="license-detail-head">
        <span>${escapeHtml(getLicenseDisplayId(test))} · ${escapeHtml(getLicenseSeriesMeta(getLicenseSeries(test)).label)} · ${escapeHtml(type.label)} · ${escapeHtml(scope.label)}</span>
        <strong>${escapeHtml(test.title)}</strong>
        <small>${escapeHtml(test.car)}</small>
      </div>
      ${renderLicenseTargets(test, targets)}
      <p>${escapeHtml(type.coach)}</p>
      <div class="license-telemetry-bridge">
        <span>${escapeHtml(scope.label)}归因</span>
        <strong>${escapeHtml(scope.mapCopy)}</strong>
        <small>${escapeHtml(scope.copy)}</small>
      </div>
      <button type="button" class="license-enter-coach" data-license-action="enter-coach">进入教练模式</button>
    </article>
  `;
}

function renderLicenseTargets(test, targets, options = {}) {
  const editable = options.editable ?? false;
  const medalLabels = [
    ["gold", "金"],
    ["silver", "银"],
    ["bronze", "铜"],
  ];
  const cells = medalLabels
    .map(([medal, label]) => {
      if (!editable) {
        return `<span><b>${Number.isFinite(targets[medal]) ? formatLapTime(targets[medal]) : "按游戏填写"}</b><small>${label}</small></span>`;
      }
      const value = Number.isFinite(targets[medal]) ? formatLapTime(targets[medal]) : "";
      return `
        <label>
          <small>${label}</small>
          <input
            type="text"
            value="${escapeHtml(value)}"
            placeholder="按游戏填写"
            inputmode="decimal"
            data-license-target-input="${escapeHtml(test.id)}"
            data-license-target-medal="${medal}"
            aria-label="${escapeHtml(`${test.id} ${label}牌目标`)}"
          />
        </label>
      `;
    })
    .join("");
  const resetButton = editable
    ? `<button type="button" class="license-target-reset" data-license-target-reset="${escapeHtml(test.id)}">恢复资料目标</button>`
    : "";
  return `<div class="license-targets${editable ? " is-editable" : ""}">${cells}${resetButton}</div>`;
}

function getActiveLicenseTest() {
  return LICENSE_TEST_BY_ID.get(state.selectedLicenseTestId) ?? LICENSE_TESTS[0] ?? null;
}

function enterCoachMode() {
  state.coachMode = true;
  selectTrackForLicenseTest(getActiveLicenseTest(), false);
  document.body.classList.add("is-coach-mode");
  renderCoachMode();
  updateUrlHash();
  coachPageEl?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function exitCoachMode() {
  state.coachMode = false;
  document.body.classList.remove("is-coach-mode");
  if (coachPageEl) {
    coachPageEl.hidden = true;
    coachPageEl.innerHTML = "";
  }
  updateUrlHash();
}

function renderCoachMode() {
  if (!coachPageEl || !state.coachMode) return;
  const test = getActiveLicenseTest();
  const track = getTrackForLicenseTest(test);
  if (track) {
    state.selected = track.name;
    const official = getOfficialTrack(track);
    const activeLayout = official ? getActiveLayout(official) : null;
    coachPageEl.hidden = false;
    coachPageEl.innerHTML = renderCoachPage(test, track, official, activeLayout);
  } else {
    coachPageEl.hidden = false;
    coachPageEl.innerHTML = renderCoachPage(test, null, null, null);
  }
  renderLicenseCoachPanel();
  updateActiveTrackButton();
  updateUrlHash();
}

function renderCoachPage(test, track, official, activeLayout) {
  const type = getLicenseTypeMeta(test);
  const scope = getLicenseScopeMeta(test);
  const targets = getLicenseTargets(test);
  const series = getLicenseSeriesMeta(getLicenseSeries(test));
  const selectedLap = telemetryState.pendingLaps.find((lap) => lap.licenseTestId === test?.id) ?? null;
  const goldGap = selectedLap && Number.isFinite(targets.gold) ? selectedLap.lapSeconds - targets.gold : null;
  const statusInfo = getTelemetryStatusInfo();
  const sameLevelTests = getLicenseTestsFor(series.id, test.level);
  const levelSwitcher = sameLevelTests
    .map((item) => {
      const active = item.id === test.id ? " active" : "";
      return `<button type="button" class="coach-test-pill${active}" data-coach-license-test="${escapeHtml(item.id)}">${escapeHtml(getLicenseDisplayId(item))}</button>`;
    })
    .join("");
  return `
    <article class="coach-shell">
      <header class="coach-header">
        <button type="button" class="coach-back" data-coach-action="exit">返回总览</button>
        <div>
          <small>${escapeHtml(getLicenseDisplayId(test))} · ${escapeHtml(series.label)} · ${escapeHtml(type.label)} · ${escapeHtml(scope.label)}</small>
          <h2>${escapeHtml(test.title)}</h2>
          <p>${escapeHtml(test.track)} · ${escapeHtml(test.car)}</p>
        </div>
        <div class="coach-medal-target">
          <span>${escapeHtml(scope.medalLabel)}</span>
          <strong>${Number.isFinite(targets.gold) ? formatLapTime(targets.gold) : "按游戏填写"}</strong>
          <small>${selectedLap ? formatGap(goldGap) : "等待本次尝试"}</small>
        </div>
      </header>
      <div class="coach-test-switcher">${levelSwitcher}</div>
      <section class="coach-main-grid">
        <div class="coach-map-card">
          <div class="coach-card-title">
            <span>${escapeHtml(scope.mapLabel)}</span>
            <strong>${escapeHtml(activeLayout?.name ?? track?.name ?? test.track)}</strong>
          </div>
          <div class="license-scope-note">
            <strong>${escapeHtml(scope.mapCopy)}</strong>
            <span>${escapeHtml(scope.copy)}</span>
          </div>
          ${
            official
              ? `<div class="coach-map-frame">${renderCoachTrackMap(official, official.officialName ?? track.name, activeLayout)}</div>`
              : `<div class="coach-map-missing"><strong>${escapeHtml(test.track)}</strong><span>当前赛道库没有完全匹配的布局图，遥测仍可按测试类型分析。</span></div>`
          }
        </div>
        <aside class="coach-target-card">
          ${renderLicenseScopeControls(test)}
          ${renderLicenseTargets(test, targets, { editable: true })}
          <div class="license-target-help">目标时间以你当前游戏画面为准；公开资料或版本更新不一致时，直接在这里改金银铜，复盘会立刻按新目标计算。</div>
          ${renderManualAttemptControls(test)}
          <div class="coach-status ${statusInfo.className}">
            <span>遥测状态</span>
            <strong>${escapeHtml(statusInfo.label)}</strong>
            <small>${escapeHtml(statusInfo.copy)}</small>
          </div>
          <div class="coach-brief">
            <span>本测试策略</span>
            <p>${escapeHtml(type.coach)}</p>
          </div>
        </aside>
      </section>
      <section class="coach-guidance">
        <div class="coach-card-title">
          <span>实时复盘</span>
          <strong>${selectedLap ? `${formatLapTime(selectedLap.lapSeconds)} · ${formatGap(goldGap)}` : "完成一次尝试后生成"}</strong>
        </div>
        ${selectedLap?.telemetryCoach ? renderTelemetryCoachAnalysis(selectedLap.telemetryCoach, "pending") : renderEmptyCoachGuidance(test)}
      </section>
    </article>
  `;
}

function renderEmptyCoachGuidance(test) {
  const type = getLicenseTypeMeta(test);
  const scope = getLicenseScopeMeta(test);
  return `
    <div class="coach-empty-guidance">
      <strong>还没有本次考试的遥测数据</strong>
      <span>在 PS5 进入 ${escapeHtml(getLicenseDisplayId(test))}，跑完一次后保持本页面选中该测试；完成数据会进入这里，教练会按「${escapeHtml(type.label)} / ${escapeHtml(scope.label)}」分析，不再把区段考试硬套成完整赛道。</span>
    </div>
  `;
}

function renderManualAttemptControls(test) {
  const attempt = telemetryState.manualAttempt;
  const isRecording = attempt?.active === true;
  const sampleCount = isRecording ? attempt.samples.length : telemetryState.liveTrace.length;
  const duration = isRecording && attempt.samples.length > 1
    ? (attempt.samples[attempt.samples.length - 1].t - attempt.samples[0].t) / 1000
    : 0;
  const displayLap = Number.isFinite(attempt?.displayLapSeconds) ? formatLapTime(attempt.displayLapSeconds) : "";
  const online = telemetryState.connection === "receiving_decoded" && telemetryState.lastTick;
  if (isRecording) {
    const error = typeof attempt.error === "string" ? attempt.error : "";
    return `
      <div class="license-attempt-recorder is-recording">
        <span>本次尝试录制中</span>
        <strong>${formatLapTime(Math.max(0, duration))}</strong>
        <small>${sampleCount} 个遥测采样 · ${escapeHtml(getLicenseDisplayId(test))}</small>
        <label class="license-attempt-result">
          <span>游戏结算成绩</span>
          <input
            type="text"
            inputmode="decimal"
            placeholder="例如 0:41.000"
            value="${escapeHtml(displayLap)}"
            data-license-attempt-time
            aria-label="本次游戏结算成绩"
          />
        </label>
        ${error ? `<small class="license-attempt-error">${escapeHtml(error)}</small>` : ""}
        <div>
          <button type="button" data-telemetry-action="finish-license-attempt">结束并生成复盘</button>
          <button type="button" data-telemetry-action="discard-license-attempt">放弃</button>
        </div>
      </div>
    `;
  }
  return `
    <div class="license-attempt-recorder">
      <span>驾照考试捕获</span>
      <strong>${online ? "实时数据已就绪" : "等待遥测在线"}</strong>
      <small>区段考试不会总是触发 GT7 圈完成事件；开始前点录制，结束后手动生成复盘。</small>
      <div>
        <button type="button" data-telemetry-action="start-license-attempt" ${online ? "" : "disabled"}>开始本次尝试</button>
      </div>
    </div>
  `;
}

function selectTrackForLicenseTest(test, shouldRender = true) {
  const track = getTrackForLicenseTest(test);
  if (!track) return null;
  state.selected = track.name;
  const official = getOfficialTrack(track);
  state.selectedLayout = official?.layoutDetails?.[0]?.id ?? "";
  state.calibratingLayout = "";
  updateActiveTrackButton();
  if (shouldRender) renderDetailOnly();
  return track;
}

function getTrackForLicenseTest(test) {
  if (!test?.track) return null;
  const target = normalizeLicenseTrackName(test.track);
  const mappedTrack = LICENSE_TRACK_TO_ATLAS_TRACK[target];
  if (mappedTrack && trackByName.has(mappedTrack)) return trackByName.get(mappedTrack);
  return tracks.find((track) => {
    const official = getOfficialTrack(track);
    const candidates = [
      track.name,
      getTrackZhName(track.name),
      official?.officialName,
      ...(official?.layoutNames ?? []),
    ]
      .filter(Boolean)
      .map(normalizeLicenseTrackName);
    return candidates.some((candidate) => candidate === target || candidate.includes(target) || target.includes(candidate));
  }) ?? null;
}

function normalizeLicenseTrackName(value) {
  return normalizeName(String(value ?? ""))
    .replace(/\(wet\)/g, "")
    .replace(/\breverse\b/g, "")
    .replace(/\bnurburgring\b/g, "nurburgring")
    .replace(/\s*-\s*/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadLicenseTargetOverrides() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LICENSE_TARGET_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function loadLicenseScopeOverrides() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LICENSE_SCOPE_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveLicenseTargetOverrides() {
  try {
    localStorage.setItem(LICENSE_TARGET_STORAGE_KEY, JSON.stringify(licenseTargetOverrides));
  } catch {
    // Local target edits are convenience state; failing to persist should not block coaching.
  }
}

function saveLicenseScopeOverrides() {
  try {
    localStorage.setItem(LICENSE_SCOPE_STORAGE_KEY, JSON.stringify(licenseScopeOverrides));
  } catch {
    // Same as target edits: the page can still render and analyze the active session.
  }
}

function getLicenseTargets(test) {
  const override = licenseTargetOverrides[test?.id] ?? {};
  const manualTargets = test?.manualTargets === true;
  const fallbackFor = (medal) => {
    if (manualTargets && override[medal] === undefined) return null;
    return toFiniteNumber(test?.[medal], null);
  };
  return {
    gold: override.gold === undefined ? fallbackFor("gold") : toFiniteNumber(override.gold, fallbackFor("gold")),
    silver: override.silver === undefined ? fallbackFor("silver") : toFiniteNumber(override.silver, fallbackFor("silver")),
    bronze: override.bronze === undefined ? fallbackFor("bronze") : toFiniteNumber(override.bronze, fallbackFor("bronze")),
  };
}

function handleLicenseTargetInput(input) {
  const testId = input.dataset.licenseTargetInput;
  const medal = input.dataset.licenseTargetMedal;
  const test = LICENSE_TEST_BY_ID.get(testId);
  if (!test || !["gold", "silver", "bronze"].includes(medal)) return;
  const seconds = parseLapTime(input.value);
  if (!seconds || seconds <= 0) {
    input.classList.add("is-invalid");
    return;
  }
  input.classList.remove("is-invalid");
  licenseTargetOverrides[test.id] = {
    ...licenseTargetOverrides[test.id],
    [medal]: seconds,
  };
  saveLicenseTargetOverrides();
  renderLicenseCoachPanel();
  if (state.coachMode) renderCoachMode();
}

function resetLicenseTargetOverride(testId) {
  if (!testId || !licenseTargetOverrides[testId]) return;
  delete licenseTargetOverrides[testId];
  saveLicenseTargetOverrides();
}

function setLicenseScopeOverride(testId, scope) {
  if (!testId || !LICENSE_TEST_BY_ID.has(testId)) return;
  if (!["full-lap", "segment"].includes(scope)) return;
  licenseScopeOverrides[testId] = scope;
  saveLicenseScopeOverrides();
}

function getLicenseScope(test) {
  const override = licenseScopeOverrides[test?.id];
  if (override === "full-lap" || override === "segment") return override;
  if (test?.scope === "segment" || test?.scope === "full-lap") return test.scope;
  return String(test?.type ?? "").includes("full-lap") ? "full-lap" : "segment";
}

function getLicenseScopeMeta(test) {
  const scope = getLicenseScope(test);
  if (scope === "segment") {
    return {
      scope,
      label: "区段考试",
      medalLabel: "区段金牌目标",
      mapLabel: "赛道区段",
      mapCopy: `${test?.track ?? "当前赛道"} · 只按考试区段复盘`,
      copy: "这个项目不是按完整一圈训练。地图只做定位参考，遥测差距、刹车点和油门建议会按考试起终点之间的有效区段理解。",
    };
  }
  return {
    scope,
    label: "整圈考试",
    medalLabel: "金牌目标",
    mapLabel: "赛道布局",
    mapCopy: `${test?.track ?? "当前赛道"} · 完整布局`,
    copy: "这个项目按完整一圈处理，遥测会优先寻找全圈主要刹车区、出弯油门延迟和金牌差距。",
  };
}

function renderLicenseScopeControls(test) {
  const scope = getLicenseScope(test);
  return `
    <div class="license-scope-toggle" aria-label="${escapeHtml(`${test.id} 考试范围`)}">
      <button type="button" class="${scope === "segment" ? "active" : ""}" data-license-scope-test="${escapeHtml(test.id)}" data-license-scope="segment">区段考试</button>
      <button type="button" class="${scope === "full-lap" ? "active" : ""}" data-license-scope-test="${escapeHtml(test.id)}" data-license-scope="full-lap">整圈考试</button>
    </div>
  `;
}

function getLicenseTypeMeta(test) {
  const type = String(test?.type ?? "");
  if (getLicenseScope(test) === "segment" && type.includes("full-lap")) {
    return {
      label: "区段计时",
      coach: "这个项目按考试区段处理。先盯起点后的第一个制动区、最慢弯最低速和最后一个出弯油门，不要用整圈配速判断成败。",
    };
  }
  if (type.includes("start-stop")) {
    return {
      label: "起步 / 停车",
      coach: "重点看起步油门是否过早触发打滑、刹车峰值是否到位，以及最后是否提前滑行。建议用固定刹车标记练到每次停车点一致。",
    };
  }
  if (type.includes("wet")) {
    return {
      label: "湿地控车",
      coach: "重点看油门开启是否太突然、刹车释放是否拖到弯心后。湿地测试不要追极限入弯，优先保留干线并提早摆正车身。",
    };
  }
  if (type.includes("dirt")) {
    return {
      label: "泥地 / 拉力",
      coach: "重点看转向前的姿态准备和油门连续性。泥地分段允许轻微滑移，但不能长时间空油滑行。",
    };
  }
  if (type.includes("snow")) {
    return {
      label: "雪地控车",
      coach: "重点看入弯前是否提前把车身摆正，以及油门是否连续。雪地项目不要用铺装赛道的晚刹逻辑，先稳定牵引和方向输入。",
    };
  }
  if (type.includes("consecutive")) {
    return {
      label: "连续弯",
      coach: "重点看第一个弯是否为了单弯速度牺牲第二个弯出弯。建议优先优化最后一个出弯，而不是每个弯都晚刹。",
    };
  }
  if (type.includes("urban")) {
    return {
      label: "街道赛道",
      coach: "重点看贴墙风险和刹车稳定性。街道分段的收益常来自更早给油和减少修正，而不是更激进压线。",
    };
  }
  if (type.includes("high-speed")) {
    return {
      label: "高速弯",
      coach: "重点看入弯前是否多余松油，以及方向输入是否造成速度塌陷。练习目标是更小角度、更长全油。",
    };
  }
  if (type.includes("elevation")) {
    return {
      label: "高低差弯",
      coach: "重点看坡顶/下坡前后的制动稳定性。刹车点要按车身载荷变化提前，不要等车轻了再补救。",
    };
  }
  if (type.includes("full-lap")) {
    return {
      label: "完整赛道计时",
      coach: "完整圈才适合使用赛道级弯道映射。建议把全圈拆成 2-4 个主要失误段，先追金牌差距最大的部分。",
    };
  }
  return {
    label: "基础路线",
    coach: "重点看刹车点、入弯速度和出弯油门。每次只改一个变量，避免不知道是哪一处带来提升。",
  };
}

function initializeTelemetryPanel() {
  if (!telemetryPanelEl) return;
  renderTelemetryPanel();
  initializeTelemetryStorage();
  connectTelemetryAgent();
}

async function initializeTelemetryStorage() {
  const db = await openTelemetryDb();
  telemetryState.dbAvailable = Boolean(db);
  if (db) db.close();
  await refreshTelemetryTemplates();
  await rematchPendingTelemetryLaps();
  renderTelemetryPanel();
}

function openTelemetryDb() {
  return new Promise((resolve) => {
    if (!("indexedDB" in window)) {
      telemetryState.dbAvailable = false;
      telemetryState.dbError = "当前浏览器不支持 IndexedDB，trace 只能临时显示。";
      resolve(null);
      return;
    }

    const request = indexedDB.open(TELEMETRY_DB_NAME, TELEMETRY_DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(TELEMETRY_TRACE_STORE)) {
        const traceStore = db.createObjectStore(TELEMETRY_TRACE_STORE, { keyPath: "traceId" });
        traceStore.createIndex("archivedLayoutId", "archivedLayoutId", { unique: false });
        traceStore.createIndex("createdAt", "createdAt", { unique: false });
      }
      if (!db.objectStoreNames.contains(TELEMETRY_TEMPLATE_STORE)) {
        const templateStore = db.createObjectStore(TELEMETRY_TEMPLATE_STORE, { keyPath: "templateId" });
        templateStore.createIndex("layoutId", "layoutId", { unique: false });
        templateStore.createIndex("createdAt", "createdAt", { unique: false });
      }
    };

    request.onsuccess = () => {
      telemetryState.dbError = "";
      resolve(request.result);
    };

    request.onerror = () => {
      telemetryState.dbAvailable = false;
      telemetryState.dbError = request.error?.message || "IndexedDB 打开失败，trace 保存已关闭。";
      resolve(null);
    };
  });
}

async function putTelemetryStoreRecord(storeName, record) {
  const db = await openTelemetryDb();
  if (!db) return false;
  return new Promise((resolve) => {
    const transaction = db.transaction(storeName, "readwrite");
    const request = transaction.objectStore(storeName).put(record);
    request.onerror = () => resolve(false);
    transaction.oncomplete = () => {
      db.close();
      resolve(true);
    };
    transaction.onerror = () => {
      db.close();
      resolve(false);
    };
  });
}

async function getTelemetryStoreRecord(storeName, key) {
  const db = await openTelemetryDb();
  if (!db) return null;
  return new Promise((resolve) => {
    const transaction = db.transaction(storeName, "readonly");
    const request = transaction.objectStore(storeName).get(key);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => resolve(null);
    transaction.oncomplete = () => db.close();
    transaction.onerror = () => db.close();
  });
}

async function getAllTelemetryStoreRecords(storeName) {
  const db = await openTelemetryDb();
  if (!db) return [];
  return new Promise((resolve) => {
    const transaction = db.transaction(storeName, "readonly");
    const request = transaction.objectStore(storeName).getAll();
    request.onsuccess = () => resolve(Array.isArray(request.result) ? request.result : []);
    request.onerror = () => resolve([]);
    transaction.oncomplete = () => db.close();
    transaction.onerror = () => db.close();
  });
}

async function deleteTelemetryStoreRecord(storeName, key) {
  const db = await openTelemetryDb();
  if (!db) return false;
  return new Promise((resolve) => {
    const transaction = db.transaction(storeName, "readwrite");
    transaction.objectStore(storeName).delete(key);
    transaction.oncomplete = () => {
      db.close();
      resolve(true);
    };
    transaction.onerror = () => {
      db.close();
      resolve(false);
    };
  });
}

async function refreshTelemetryTemplates() {
  const templates = await getAllTelemetryStoreRecords(TELEMETRY_TEMPLATE_STORE);
  telemetryState.templates = templates
    .map(sanitizeTelemetryTemplate)
    .filter(Boolean)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

function sanitizeTelemetryTemplate(template) {
  if (!template || typeof template !== "object") return null;
  if (typeof template.layoutId !== "string" || !template.layoutId) return null;
  if (!Array.isArray(template.fingerprint) || template.fingerprint.length < 8) return null;
  return {
    templateId: typeof template.templateId === "string" ? template.templateId : createSessionId(),
    layoutId: template.layoutId,
    trackName: typeof template.trackName === "string" ? template.trackName : "",
    layoutName: typeof template.layoutName === "string" ? template.layoutName : getLayoutLabelById(template.layoutId),
    sourceTraceId: typeof template.sourceTraceId === "string" ? template.sourceTraceId : "",
    createdAt: typeof template.createdAt === "string" && Date.parse(template.createdAt) ? template.createdAt : new Date().toISOString(),
    fingerprint: template.fingerprint,
  };
}

async function rematchPendingTelemetryLaps() {
  if (!telemetryState.pendingLaps.length || !telemetryState.templates.length) return;
  const next = [];
  for (const lap of telemetryState.pendingLaps) {
    const record = await getTelemetryStoreRecord(TELEMETRY_TRACE_STORE, lap.traceId);
    const match = record?.trace ? matchTelemetryTrace(record.trace) : null;
    next.push(sanitizePendingTelemetryLap({ ...lap, ...buildTelemetryMatchPayload(match) }));
  }
  telemetryState.pendingLaps = next.filter(Boolean).slice(0, 12);
  persistPendingTelemetryLaps();
}

function loadPendingTelemetryLaps() {
  try {
    const raw = localStorage.getItem(TELEMETRY_PENDING_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(sanitizePendingTelemetryLap).filter(Boolean).slice(0, 12);
  } catch {
    return [];
  }
}

function persistPendingTelemetryLaps() {
  localStorage.setItem(TELEMETRY_PENDING_STORAGE_KEY, JSON.stringify(telemetryState.pendingLaps));
}

function sanitizePendingTelemetryLap(lap) {
  if (!lap || typeof lap !== "object") return null;
  const lapSeconds = Number(lap.lapSeconds);
  if (!Number.isFinite(lapSeconds) || lapSeconds <= 0) return null;
  const summary = lap.summary && typeof lap.summary === "object" ? lap.summary : {};
  const confidence = toFiniteNumber(lap.matchConfidence, 0);
  const matchStatus = ["suggested", "confirm", "unknown"].includes(lap.matchStatus) ? lap.matchStatus : "unknown";
  return {
    traceId: typeof lap.traceId === "string" ? lap.traceId : createSessionId(),
    lapSeconds: Number(lapSeconds.toFixed(3)),
    vehicle: typeof lap.vehicle === "string" ? lap.vehicle.slice(0, 120) : "",
    source: typeof lap.source === "string" ? lap.source.slice(0, 80) : "telemetry",
    timestamp: typeof lap.timestamp === "string" && Date.parse(lap.timestamp) ? lap.timestamp : new Date().toISOString(),
    matchedLayoutId: typeof lap.matchedLayoutId === "string" ? lap.matchedLayoutId : "",
    matchLayoutName: typeof lap.matchLayoutName === "string" ? lap.matchLayoutName.slice(0, 120) : "",
    matchConfidence: Math.min(1, Math.max(0, Number(confidence.toFixed(3)))),
    matchStatus,
    matchReason: typeof lap.matchReason === "string" ? lap.matchReason.slice(0, 180) : "",
    licenseTestId: typeof lap.licenseTestId === "string" ? lap.licenseTestId.slice(0, 16) : "",
    telemetryCoach: sanitizeTelemetryCoachAnalysis(lap.telemetryCoach),
    summary: {
      samples: toFiniteNumber(summary.samples, 0),
      durationSeconds: toFiniteNumber(summary.durationSeconds, lapSeconds),
      maxSpeedKmh: toFiniteNumber(summary.maxSpeedKmh, 0),
      avgSpeedKmh: toFiniteNumber(summary.avgSpeedKmh, 0),
      avgThrottle: toFiniteNumber(summary.avgThrottle, 0),
      avgBrake: toFiniteNumber(summary.avgBrake, 0),
      brakeEvents: toFiniteNumber(summary.brakeEvents, 0),
      heavyBrakePct: toFiniteNumber(summary.heavyBrakePct, 0),
      fullThrottlePct: toFiniteNumber(summary.fullThrottlePct, 0),
    },
  };
}

function toFiniteNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

async function archiveTelemetryLap(traceId) {
  const lap = telemetryState.pendingLaps.find((item) => item.traceId === traceId);
  const activeLayout = getCurrentActiveLayout();
  if (!lap || !activeLayout) return;
  const traceRecord = await getTelemetryStoreRecord(TELEMETRY_TRACE_STORE, traceId);
  const telemetryCoach = lap.telemetryCoach ??
    buildTelemetryCoachAnalysis(traceRecord?.trace ?? [], lap, activeLayout, getActiveLicenseTest());

  const record = getTrainingRecord(activeLayout.id);
  const hasConfidentOtherMatch = lap.matchedLayoutId &&
    lap.matchedLayoutId !== activeLayout.id &&
    lap.matchConfidence >= TELEMETRY_MATCH_THRESHOLDS.confirm;

  if (hasConfidentOtherMatch) {
    const currentLabel = getLayoutLabelById(activeLayout.id);
    const matchedLabel = lap.matchLayoutName || getLayoutLabelById(lap.matchedLayoutId);
    const confirmed = window.confirm(
      `这圈遥测更像「${matchedLabel}」，当前页面是「${currentLabel}」。\n\n确认仍然归档到当前布局吗？`
    );
    if (!confirmed) return;
  }

  addTrainingSession(
    activeLayout.id,
    {
      lapSeconds: lap.lapSeconds,
      vehicle: lap.vehicle || record.currentVehicle || "Telemetry Auto",
      setup: "Telemetry Auto",
      mistakes: buildTelemetryMistakes(lap),
      feeling: buildTelemetryFeeling(lap),
      traceId: lap.traceId,
      telemetrySummary: lap.summary,
      telemetryCoach,
    },
    {
      status: record.status === "complete" ? "complete" : "active",
      targetDifficulty: record.targetDifficulty,
      currentVehicle: lap.vehicle || record.currentVehicle,
      currentSetup: "Telemetry Auto",
    }
  );
  await markTelemetryTraceArchived(traceId, activeLayout.id);
  dismissTelemetryLap(traceId, false);
  renderTelemetryPanel();
}

function dismissTelemetryLap(traceId, shouldRender = true) {
  telemetryState.pendingLaps = telemetryState.pendingLaps.filter((item) => item.traceId !== traceId);
  persistPendingTelemetryLaps();
  if (shouldRender) renderTelemetryPanel();
}

function buildTelemetryMistakes(lap) {
  const summary = lap.summary ?? {};
  if ((summary.heavyBrakePct ?? 0) > 12) return "遥测提示：重刹占比较高，复盘刹车释放点。";
  if ((summary.brakeEvents ?? 0) > 16) return "遥测提示：刹车事件较多，检查是否有碎刹或修正过多。";
  return "遥测自动记录：暂无明显失误候选。";
}

function buildTelemetryFeeling(lap) {
  const summary = lap.summary ?? {};
  return [
    `Telemetry Auto · ${formatLapTime(lap.lapSeconds)}`,
    `极速 ${summary.maxSpeedKmh ?? "--"} km/h`,
    `均速 ${summary.avgSpeedKmh ?? "--"} km/h`,
    `刹车事件 ${summary.brakeEvents ?? 0} 次`,
    `全油占比 ${summary.fullThrottlePct ?? "--"}%`,
  ].join("；");
}

async function markTelemetryTraceArchived(traceId, layoutId) {
  const record = await getTelemetryStoreRecord(TELEMETRY_TRACE_STORE, traceId);
  if (!record) return false;
  return putTelemetryStoreRecord(TELEMETRY_TRACE_STORE, {
    ...record,
    archivedLayoutId: layoutId,
    archivedAt: new Date().toISOString(),
  });
}

function connectTelemetryAgent(force = false) {
  if (!telemetryPanelEl || !("WebSocket" in window)) {
    telemetryState.status = "unsupported";
    renderTelemetryPanel();
    return;
  }
  if (!force && telemetryState.socket && [WebSocket.CONNECTING, WebSocket.OPEN].includes(telemetryState.socket.readyState)) {
    return;
  }

  if (telemetryState.socket) {
    telemetryState.socket.onclose = null;
    telemetryState.socket.close();
  }

  clearTimeout(telemetryState.reconnectTimer);
  telemetryState.status = "connecting";
  telemetryState.connection = "connecting";
  renderTelemetryPanel();

  const socket = new WebSocket(TELEMETRY_WS_URL);
  telemetryState.socket = socket;

  socket.addEventListener("open", () => {
    telemetryState.status = "online";
    telemetryState.connection = "connected";
    telemetryState.lastMessageAt = new Date().toISOString();
    renderTelemetryPanel();
  });

  socket.addEventListener("message", (event) => {
    try {
      handleTelemetryMessage(JSON.parse(event.data));
    } catch {
      // Ignore malformed frames from experimental local agents.
    }
  });

  socket.addEventListener("close", () => {
    if (telemetryState.socket !== socket) return;
    telemetryState.status = "offline";
    telemetryState.connection = "manual_mode";
    renderTelemetryPanel();
    telemetryState.reconnectTimer = window.setTimeout(() => connectTelemetryAgent(), 3000);
  });

  socket.addEventListener("error", () => {
    telemetryState.status = "offline";
    telemetryState.connection = "agent_unreachable";
    renderTelemetryPanel();
  });
}

function handleTelemetryMessage(message) {
  telemetryState.lastMessageAt = new Date().toISOString();
  if (message.type === "agent_status") {
    telemetryState.lastStatus = message;
    telemetryState.status = message.connection === "receiving_decoded" ? "online" : "waiting";
    telemetryState.connection = message.connection ?? "connected";
    renderTelemetryPanel();
    if (state.coachMode) renderCoachMode();
    return;
  }
  if (message.type === "lap_completed") {
    handleTelemetryLapCompleted(message);
    return;
  }
  if (message.type === "telemetry_tick") {
    telemetryState.lastTick = message.telemetry;
    rememberLiveTelemetrySample(message.telemetry);
    telemetryState.status = "online";
    telemetryState.connection = "receiving_decoded";
    if (message.samplesPerSecond != null) {
      telemetryState.lastStatus = {
        ...(telemetryState.lastStatus ?? {}),
        samplesPerSecond: message.samplesPerSecond,
        packetCount: message.packetCount,
        decodedCount: message.decodedCount,
      };
    }
    renderLiveTelemetryUi();
  }
}

function renderLiveTelemetryUi(force = false) {
  const now = performance.now();
  if (!force && now - telemetryState.lastLiveRenderAt < 1000) return;
  telemetryState.lastLiveRenderAt = now;
  renderTelemetryPanel();
}

function rememberLiveTelemetrySample(telemetry) {
  const sample = sampleFromLiveTelemetry(telemetry);
  if (!sample) return;
  telemetryState.liveTrace.push(sample);
  const cutoff = sample.t - 180000;
  telemetryState.liveTrace = telemetryState.liveTrace.filter((item) => item.t >= cutoff).slice(-2400);
  if (telemetryState.manualAttempt?.active) {
    telemetryState.manualAttempt.samples.push(sample);
    telemetryState.manualAttempt.samples = telemetryState.manualAttempt.samples.slice(-3600);
  }
}

function sampleFromLiveTelemetry(telemetry) {
  if (!telemetry || typeof telemetry !== "object") return null;
  const now = Date.now();
  const position = telemetry.position ?? {};
  return {
    t: now,
    speedKmh: toFiniteNumber(telemetry.speedKmh, 0),
    throttle: clampTelemetryPercent(telemetry.throttle) ?? 0,
    brake: clampTelemetryPercent(telemetry.brake) ?? 0,
    gear: toFiniteNumber(telemetry.currentGear, 0),
    position: {
      x: toFiniteNumber(position.x, 0),
      y: toFiniteNumber(position.y, 0),
      z: toFiniteNumber(position.z, 0),
    },
  };
}

function startManualLicenseAttempt() {
  const seed = telemetryState.liveTrace.slice(-3);
  telemetryState.manualAttempt = {
    active: true,
    licenseTestId: getActiveLicenseTest()?.id ?? "",
    startedAt: new Date().toISOString(),
    displayLapSeconds: null,
    error: "",
    samples: seed,
  };
  renderTelemetryPanel();
  if (state.coachMode) renderCoachMode();
}

function handleManualAttemptTimeInput(input) {
  if (!telemetryState.manualAttempt?.active) return;
  const value = input.value.trim();
  if (!value) {
    telemetryState.manualAttempt.displayLapSeconds = null;
    telemetryState.manualAttempt.error = "";
    input.classList.remove("is-invalid");
    return;
  }
  const seconds = parseLapTime(value);
  if (!seconds || seconds <= 0) {
    telemetryState.manualAttempt.error = "成绩格式不正确，请输入类似 41.000 或 0:41.000。";
    input.classList.add("is-invalid");
    return;
  }
  input.classList.remove("is-invalid");
  telemetryState.manualAttempt.displayLapSeconds = seconds;
  telemetryState.manualAttempt.error = "";
}

function discardManualLicenseAttempt() {
  telemetryState.manualAttempt = null;
  renderTelemetryPanel();
  if (state.coachMode) renderCoachMode();
}

function finishManualLicenseAttempt() {
  const attempt = telemetryState.manualAttempt;
  if (!attempt?.active) return;
  const trace = sanitizeTelemetryTrace(attempt.samples);
  if (trace.length < 10) {
    telemetryState.manualAttempt.error = "遥测采样还太少，开始尝试后至少跑几秒再生成复盘。";
    if (state.coachMode) renderCoachMode();
    return;
  }
  const recordedSeconds = getTraceDurationSeconds(trace);
  const resultSeconds = getManualAttemptResultSeconds(attempt, recordedSeconds);
  if (!resultSeconds) {
    telemetryState.manualAttempt.error = "请先填写游戏结算画面显示的本次成绩，例如 41.000 或 0:41.000。";
    if (state.coachMode) renderCoachMode();
    return;
  }
  const message = buildManualLicenseAttemptMessage(trace, attempt, resultSeconds);
  telemetryState.manualAttempt = null;
  handleTelemetryLapCompleted(message);
  renderTelemetryPanel();
  if (state.coachMode) renderCoachMode();
}

function getTraceDurationSeconds(trace) {
  const first = trace[0];
  const last = trace[trace.length - 1];
  return Math.max(0.1, (last.t - first.t) / 1000);
}

function getManualAttemptResultSeconds(attempt, fallbackSeconds) {
  if (Number.isFinite(attempt.displayLapSeconds) && attempt.displayLapSeconds > 0) {
    return attempt.displayLapSeconds;
  }
  return null;
}

function buildManualLicenseAttemptMessage(trace, attempt, resultSeconds) {
  const durationSeconds = getTraceDurationSeconds(trace);
  const summary = buildTelemetrySummaryFromTrace(trace, durationSeconds);
  return {
    type: "lap_completed",
    traceId: createSessionId().replace(/^s-/, "trace-"),
    source: "manual_license_capture",
    lapSeconds: Number(resultSeconds.toFixed(3)),
    vehicle: "",
    timestamp: new Date().toISOString(),
    summary,
    trace,
    manualCapture: true,
    licenseTestId: attempt.licenseTestId,
  };
}

function buildTelemetrySummaryFromTrace(trace, durationSeconds) {
  const speedValues = trace.map((sample) => sample.speedKmh);
  const throttleValues = trace.map((sample) => sample.throttle);
  const brakeValues = trace.map((sample) => sample.brake);
  let brakeEvents = 0;
  let braking = false;
  for (const value of brakeValues) {
    if (value > 8 && !braking) {
      brakeEvents += 1;
      braking = true;
    } else if (value <= 4) {
      braking = false;
    }
  }
  const avg = (values) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
  const pct = (values, predicate) => values.length ? (values.filter(predicate).length / values.length) * 100 : 0;
  return {
    samples: trace.length,
    durationSeconds: Number(durationSeconds.toFixed(3)),
    maxSpeedKmh: Number(Math.max(0, ...speedValues).toFixed(1)),
    avgSpeedKmh: Number(avg(speedValues).toFixed(1)),
    avgThrottle: Number(avg(throttleValues).toFixed(1)),
    avgBrake: Number(avg(brakeValues).toFixed(1)),
    brakeEvents,
    heavyBrakePct: Number(pct(brakeValues, (value) => value >= 80).toFixed(1)),
    fullThrottlePct: Number(pct(throttleValues, (value) => value >= 95).toFixed(1)),
  };
}

function handleTelemetryLapCompleted(message) {
  const match = matchTelemetryTrace(message.trace);
  const coachLayout = getTelemetryCoachLayout(match);
  const telemetryCoach = buildTelemetryCoachAnalysis(message.trace, message, coachLayout, getActiveLicenseTest());
  const lap = sanitizePendingTelemetryLap({
    ...message,
    ...buildTelemetryMatchPayload(match),
    licenseTestId: getActiveLicenseTest()?.id ?? "",
    telemetryCoach,
  });
  if (!lap) return;
  storeTelemetryTrace(lap, message.trace, match, telemetryCoach);
  telemetryState.pendingLaps = [lap, ...telemetryState.pendingLaps.filter((item) => item.traceId !== lap.traceId)].slice(0, 12);
  persistPendingTelemetryLaps();
  renderTelemetryPanel();
  if (state.coachMode) renderCoachMode();
}

function getTelemetryCoachLayout(match) {
  if (match?.layoutId) {
    const matchedEntry = getLayoutEntryById(match.layoutId);
    if (matchedEntry?.layout) return matchedEntry.layout;
  }
  return getCurrentActiveLayout();
}

async function storeTelemetryTrace(lap, trace, match, telemetryCoach = null) {
  const sanitizedTrace = sanitizeTelemetryTrace(trace);
  if (!sanitizedTrace.length) return false;
  const stored = await putTelemetryStoreRecord(TELEMETRY_TRACE_STORE, {
    traceId: lap.traceId,
    trace: sanitizedTrace,
    lapSeconds: lap.lapSeconds,
    vehicle: lap.vehicle,
    source: lap.source,
    summary: lap.summary,
    createdAt: lap.timestamp,
    archivedLayoutId: "",
    matchedLayoutId: match?.layoutId ?? "",
    matchConfidence: match?.confidence ?? 0,
    matchReason: match?.reason ?? "",
    licenseTestId: lap.licenseTestId ?? "",
    telemetryCoach: sanitizeTelemetryCoachAnalysis(telemetryCoach),
  });
  telemetryState.dbAvailable = telemetryState.dbAvailable || stored;
  if (!stored) telemetryState.dbError = telemetryState.dbError || "trace 保存失败，IndexedDB 可能不可用。";
  renderTelemetryPanel();
  return stored;
}

function sanitizeTelemetryTrace(trace) {
  if (!Array.isArray(trace)) return [];
  return trace
    .map((sample) => {
      const position = sample?.position ?? {};
      return {
        t: toFiniteNumber(sample?.t, 0),
        speedKmh: toFiniteNumber(sample?.speedKmh, 0),
        throttle: toFiniteNumber(sample?.throttle, 0),
        brake: toFiniteNumber(sample?.brake, 0),
        gear: toFiniteNumber(sample?.gear, 0),
        position: {
          x: toFiniteNumber(position.x, NaN),
          y: toFiniteNumber(position.y, NaN),
          z: toFiniteNumber(position.z, NaN),
        },
      };
    })
    .filter((sample) => Number.isFinite(sample.position.x) && Number.isFinite(sample.position.z))
    .slice(0, 360);
}

function buildTelemetryMatchPayload(match) {
  if (!match) {
    return {
      matchedLayoutId: "",
      matchLayoutName: "",
      matchConfidence: 0,
      matchStatus: "unknown",
      matchReason: "没有可用 trace 或布局模板。",
    };
  }
  const status = match.confidence >= TELEMETRY_MATCH_THRESHOLDS.suggested
    ? "suggested"
    : match.confidence >= TELEMETRY_MATCH_THRESHOLDS.confirm
      ? "confirm"
      : "unknown";
  return {
    matchedLayoutId: match.layoutId ?? "",
    matchLayoutName: match.layoutName ?? "",
    matchConfidence: match.confidence ?? 0,
    matchStatus: status,
    matchReason: match.reason ?? "",
  };
}

function matchTelemetryTrace(trace) {
  const fingerprint = createTraceFingerprint(trace);
  if (!fingerprint.length) {
    return {
      layoutId: "",
      layoutName: "",
      confidence: 0,
      reason: "trace 中没有足够的位置采样。",
    };
  }
  if (!telemetryState.templates.length) {
    return {
      layoutId: "",
      layoutName: "",
      confidence: 0,
      reason: "尚未绑定任何布局模板，需手动确认。",
    };
  }

  const matches = telemetryState.templates
    .map((template) => {
      const comparison = compareTraceFingerprints(fingerprint, template.fingerprint);
      return {
        ...template,
        confidence: comparison.confidence,
        distance: comparison.distance,
        reversed: comparison.reversed,
      };
    })
    .sort((a, b) => b.confidence - a.confidence);

  const best = matches[0];
  if (!best) return null;
  const directionText = best.reversed ? "反向采样匹配" : "同向采样匹配";
  return {
    layoutId: best.layoutId,
    layoutName: best.layoutName || getLayoutLabelById(best.layoutId),
    confidence: Number(best.confidence.toFixed(3)),
    reason: `${directionText} · ${Math.round(best.confidence * 100)}% · 模板 ${formatRelativeDate(best.createdAt)}`,
  };
}

function createTraceFingerprint(trace, points = 72) {
  const samples = sanitizeTelemetryTrace(trace);
  if (samples.length < 12) return [];
  const picked = [];
  const step = (samples.length - 1) / Math.max(1, points - 1);
  for (let index = 0; index < points; index += 1) {
    const sample = samples[Math.round(index * step)];
    picked.push({ x: sample.position.x, y: sample.position.z });
  }

  const xs = picked.map((point) => point.x);
  const ys = picked.map((point) => point.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const scale = Math.max(maxX - minX, maxY - minY, 1);

  return picked.map((point) => ({
    x: Number(((point.x - centerX) / scale).toFixed(5)),
    y: Number(((point.y - centerY) / scale).toFixed(5)),
  }));
}

function compareTraceFingerprints(current, template) {
  const same = averageTraceDistance(current, template);
  const reversed = averageTraceDistance(current, [...template].reverse());
  const distance = Math.min(same, reversed);
  return {
    distance,
    reversed: reversed < same,
    confidence: Math.min(1, Math.max(0, 1 - distance / 0.22)),
  };
}

function averageTraceDistance(a, b) {
  const length = Math.min(a.length, b.length);
  if (!length) return Infinity;
  let total = 0;
  for (let index = 0; index < length; index += 1) {
    const dx = a[index].x - b[index].x;
    const dy = a[index].y - b[index].y;
    total += Math.hypot(dx, dy);
  }
  return total / length;
}

async function bindTelemetryTemplate(traceId) {
  const activeLayout = getCurrentActiveLayout();
  const track = trackByName.get(state.selected);
  if (!activeLayout || !track) return;

  const record = await getTelemetryStoreRecord(TELEMETRY_TRACE_STORE, traceId);
  if (!record?.trace?.length) {
    window.alert("没有找到这圈的 trace。请确认 IndexedDB 可用，或重新完成一圈后再绑定模板。");
    return;
  }

  const fingerprint = createTraceFingerprint(record.trace);
  if (!fingerprint.length) {
    window.alert("这圈位置采样不足，无法作为布局模板。");
    return;
  }

  const template = {
    templateId: `tpl-${activeLayout.id}-${Date.now().toString(36)}`,
    layoutId: activeLayout.id,
    trackName: track.name,
    layoutName: activeLayout.name,
    sourceTraceId: traceId,
    createdAt: new Date().toISOString(),
    fingerprint,
  };

  const stored = await putTelemetryStoreRecord(TELEMETRY_TEMPLATE_STORE, template);
  if (!stored) {
    window.alert("模板保存失败。请检查浏览器是否允许本地 IndexedDB。");
    return;
  }

  await refreshTelemetryTemplates();
  await rematchPendingTelemetryLaps();
  renderTelemetryPanel();
}

async function deleteTelemetryTemplate(templateId) {
  if (!templateId) return;
  const confirmed = window.confirm("删除这个布局遥测模板？删除后不会影响已经归档的训练记录。");
  if (!confirmed) return;
  await deleteTelemetryStoreRecord(TELEMETRY_TEMPLATE_STORE, templateId);
  await refreshTelemetryTemplates();
  await rematchPendingTelemetryLaps();
  renderTelemetryPanel();
}

function renderTelemetryPanel() {
  if (!telemetryPanelEl) return;
  const tick = telemetryState.lastTick;
  const status = telemetryState.lastStatus ?? {};
  const statusInfo = getTelemetryStatusInfo();
  const speed = tick?.speedKmh == null ? "--" : tick.speedKmh.toFixed(1);
  const rpm = tick?.rpm == null ? "--" : Math.round(tick.rpm).toLocaleString("en-US");
  const gear = tick?.currentGear == null ? "--" : formatTelemetryGear(tick.currentGear);
  const throttle = clampTelemetryPercent(tick?.throttle);
  const brake = clampTelemetryPercent(tick?.brake);
  const lap = tick?.currentLap == null ? "--" : tick.currentLap;
  const sampleRate = status.samplesPerSecond == null ? "--" : `${status.samplesPerSecond} Hz`;
  const packetCount = status.decodedCount == null ? "--" : status.decodedCount.toLocaleString("en-US");
  const source = status.ps5Ip ? `PS5 ${status.ps5Ip}` : "等待本地 agent";

  telemetryPanelEl.innerHTML = `
    <div class="section-title telemetry-title">
      <div>
        <h2>遥测连接</h2>
        <p>本地 telemetry-agent 实时读取 GT7 UDP 数据，实验性功能，不上传数据。</p>
      </div>
      <button type="button" class="telemetry-connect" data-telemetry-action="connect">重新连接</button>
    </div>
    ${renderTelemetryStatusAlert(statusInfo)}
    <div class="telemetry-live-grid">
      <article class="telemetry-card telemetry-status-card ${statusInfo.className}">
        <small>连接状态</small>
        <strong>${statusInfo.label}</strong>
        <span>${escapeHtml(source)} · ${escapeHtml(sampleRate)}</span>
      </article>
      <article class="telemetry-card">
        <small>车速</small>
        <strong>${speed}<em> km/h</em></strong>
        <span>采样 ${escapeHtml(packetCount)} 包</span>
      </article>
      <article class="telemetry-card">
        <small>挡位 / 转速</small>
        <strong>${gear}<em> / ${rpm} rpm</em></strong>
        <span>当前圈 ${escapeHtml(String(lap))}</span>
      </article>
      <article class="telemetry-card telemetry-inputs">
        <small>油门 / 刹车</small>
        <div class="telemetry-bars">
          ${renderTelemetryBar("油门", throttle, "throttle")}
          ${renderTelemetryBar("刹车", brake, "brake")}
        </div>
      </article>
    </div>
    ${renderTelemetryStandby()}
  `;
}

function renderTelemetryStandby() {
  const pendingCount = telemetryState.pendingLaps.length;
  const templateCount = telemetryState.templates.length;
  return `
    <details class="telemetry-standby">
      <summary>
        <span>
          <strong>Telemetry Standby</strong>
          <small>${pendingCount} 圈待归档 · ${templateCount} 个布局模板</small>
        </span>
      </summary>
      <div class="telemetry-standby-body">
        ${renderTelemetryTemplatePanel()}
        ${renderPendingTelemetryLaps()}
      </div>
    </details>
  `;
}

function renderTelemetryStatusAlert(statusInfo) {
  const hints = statusInfo.hints
    .slice(0, 6)
    .map((hint) => `<li>${escapeHtml(hint)}</li>`)
    .join("");
  return `
    <div class="telemetry-alert ${statusInfo.className}">
      <div>
        <strong>${escapeHtml(statusInfo.title)}</strong>
        <span>${escapeHtml(statusInfo.copy)}</span>
      </div>
      <a class="telemetry-health-link" href="${TELEMETRY_HEALTH_URL}" target="_blank" rel="noreferrer">查看 /health</a>
      ${hints ? `<ul>${hints}</ul>` : ""}
    </div>
  `;
}

function renderTelemetryTemplatePanel() {
  const activeLayout = getCurrentActiveLayout();
  const activeTemplates = activeLayout
    ? telemetryState.templates.filter((template) => template.layoutId === activeLayout.id)
    : [];
  const dbText = telemetryState.dbAvailable
    ? `IndexedDB 已启用 · ${telemetryState.templates.length} 个布局模板`
    : `Trace 存储未启用 · ${telemetryState.dbError || "等待浏览器授权"}`;
  const templateRows = activeTemplates.length
    ? activeTemplates
        .slice(0, 3)
        .map(
          (template) => `
            <span class="telemetry-template-pill">
              ${escapeHtml(formatRelativeDate(template.createdAt))}
              <button type="button" data-telemetry-action="delete-template" data-telemetry-template-id="${escapeHtml(template.templateId)}" aria-label="删除模板">×</button>
            </span>
          `,
        )
        .join("")
    : `<span class="telemetry-template-empty">当前布局还没有模板，先在待归档圈里绑定一圈。</span>`;

  return `
    <div class="telemetry-template-panel">
      <div>
        <strong>布局识别模板</strong>
        <small>${escapeHtml(dbText)}</small>
      </div>
      <div class="telemetry-template-list">${templateRows}</div>
    </div>
  `;
}

function renderPendingTelemetryLaps() {
  if (!telemetryState.pendingLaps.length) {
    return `
      <div class="telemetry-pending empty is-standby-empty">
        <span>待归档遥测圈</span>
        <strong>暂无</strong>
        <small>完成一圈后会进入这里，确认赛道布局后再写入训练记录。</small>
      </div>
    `;
  }

  const activeLayout = getCurrentActiveLayout();
  const activeTrack = trackByName.get(state.selected);
  const targetLabel = activeLayout && activeTrack
    ? `${getTrackZhName(activeTrack.name)} · ${activeLayout.name}`
    : "当前布局";

  return `
    <div class="telemetry-pending">
      <div class="telemetry-pending-head">
        <span>待归档遥测圈</span>
        <small>目标：${escapeHtml(targetLabel)}</small>
      </div>
      <div class="telemetry-lap-list">
        ${telemetryState.pendingLaps.map(renderPendingTelemetryLap).join("")}
      </div>
    </div>
  `;
}

function renderPendingTelemetryLap(lap) {
  const activeLayout = getCurrentActiveLayout();
  const match = getTelemetryMatchMeta(lap, activeLayout);
  return `
    <article class="telemetry-lap-card">
      <div>
        <strong>${formatLapTime(lap.lapSeconds)}</strong>
        <span>${escapeHtml(formatTelemetrySummary(lap))}</span>
        <small class="telemetry-trace-id">${escapeHtml(lap.traceId)}</small>
        <span class="telemetry-match-badge ${match.className}">${escapeHtml(match.label)}</span>
        <small class="telemetry-match-reason">${escapeHtml(match.reason)}</small>
        ${renderTelemetryCoachAnalysis(lap.telemetryCoach, "pending")}
      </div>
      <div class="telemetry-lap-actions">
        <button type="button" data-telemetry-action="archive-lap" data-telemetry-lap-id="${escapeHtml(lap.traceId)}">归档到当前布局</button>
        <button type="button" data-telemetry-action="bind-template" data-telemetry-lap-id="${escapeHtml(lap.traceId)}">绑定为当前布局模板</button>
        <button type="button" data-telemetry-action="dismiss-lap" data-telemetry-lap-id="${escapeHtml(lap.traceId)}">忽略</button>
      </div>
    </article>
  `;
}

function getTelemetryMatchMeta(lap, activeLayout) {
  const confidence = Math.round((lap.matchConfidence ?? 0) * 100);
  if (!lap.matchedLayoutId || lap.matchStatus === "unknown") {
    return {
      label: "未知布局",
      reason: lap.matchReason || "没有模板时不会自动归档，请手动确认或绑定模板。",
      className: "is-unknown",
    };
  }
  const layoutName = lap.matchLayoutName || getLayoutLabelById(lap.matchedLayoutId);
  const conflicts = activeLayout && lap.matchedLayoutId !== activeLayout.id;
  if (lap.matchStatus === "suggested" && !conflicts) {
    return {
      label: `建议归档 · ${confidence}%`,
      reason: lap.matchReason || `匹配到 ${layoutName}`,
      className: "is-suggested",
    };
  }
  if (conflicts) {
    return {
      label: `布局冲突 · ${confidence}%`,
      reason: `匹配到 ${layoutName}，当前页面是 ${getLayoutLabelById(activeLayout.id)}。归档前会再次确认。`,
      className: "is-conflict",
    };
  }
  return {
    label: `需确认 · ${confidence}%`,
    reason: lap.matchReason || `可能是 ${layoutName}，建议人工确认。`,
    className: "is-confirm",
  };
}

function formatTelemetrySummary(lap) {
  const summary = lap.summary ?? {};
  const parts = [
    `极速 ${summary.maxSpeedKmh ?? "--"} km/h`,
    `均速 ${summary.avgSpeedKmh ?? "--"} km/h`,
    `刹车 ${summary.brakeEvents ?? 0} 次`,
    `全油 ${summary.fullThrottlePct ?? 0}%`,
  ];
  return parts.join(" · ");
}

function renderTelemetryCoachAnalysis(coach, variant = "pending") {
  const sanitized = sanitizeTelemetryCoachAnalysis(coach);
  if (!sanitized) return "";
  const items = sanitized.priorities
    .slice(0, variant === "compact" ? 2 : 4)
    .map(
      (item) => `
        <li class="coach-priority is-${escapeHtml(item.severity)}">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.body)}</span>
          <small>${escapeHtml([item.segmentLabel, item.metric].filter(Boolean).join(" · "))}</small>
        </li>
      `,
    )
    .join("");
  return `
    <div class="telemetry-coach ${variant === "compact" ? "is-compact" : ""}">
      <div class="telemetry-coach-head">
        <span>AI Coach</span>
        <strong>${sanitized.score}</strong>
      </div>
      <p>${escapeHtml(sanitized.summary || "本圈已完成基础分析，优先处理下方最影响圈速的问题。")}</p>
      <ol>${items}</ol>
    </div>
  `;
}

function buildTelemetryCoachAnalysis(trace, lap, activeLayout, licenseTest = null) {
  const samples = buildTelemetryPerformanceSamples(trace);
  if (samples.length < 24) {
    return {
      score: 55,
      summary: "trace 采样不足，先确保 telemetry-agent 在完整一圈内持续在线。",
      segmentCount: 0,
      priorities: [
        {
          title: "先拿到完整一圈数据",
          body: "进入实际驾驶画面后跑完整圈，完成后再归档；完整 trace 才能判断刹车点、入弯速度和出弯油门。",
          metric: `${samples.length} samples`,
          segmentLabel: "数据质量",
          severity: "high",
        },
      ],
    };
  }

  const summary = lap?.summary ?? {};
  const brakeZones = detectTelemetryBrakeZones(samples, activeLayout);
  const coastingPct = percentOfSamples(samples, (sample) => sample.throttle < 18 && sample.brake < 8);
  const fullThrottlePct = toFiniteNumber(summary.fullThrottlePct, percentOfSamples(samples, (sample) => sample.throttle >= 95));
  const licenseTargets = licenseTest ? getLicenseTargets(licenseTest) : null;
  const licenseScope = licenseTest ? getLicenseScopeMeta(licenseTest) : null;
  const licenseGap = licenseTest && Number.isFinite(licenseTargets.gold)
    ? toFiniteNumber(lap?.lapSeconds, 0) - licenseTargets.gold
    : null;
  const heavyBrakeZones = brakeZones.filter((zone) => zone.peakBrake >= 82 && zone.durationSeconds >= 0.9);
  const slowEntryZones = brakeZones
    .filter((zone) => zone.speedDropKmh >= 55 && zone.minSpeedKmh <= 90)
    .sort((a, b) => b.speedDropKmh - a.speedDropKmh);
  const exitDelayZones = brakeZones
    .filter((zone) => zone.exitDelaySeconds >= 0.8 || zone.exitDelayProgress >= 0.035)
    .sort((a, b) => b.exitDelaySeconds - a.exitDelaySeconds);
  const priorities = [];

  if (licenseTest && Number.isFinite(licenseGap)) {
    const licenseLabel = getLicenseDisplayId(licenseTest);
    priorities.push({
      title: licenseGap <= 0 ? "已达金牌节奏" : "先追金牌差距",
      body: licenseGap <= 0
        ? `这次已经快过 ${licenseLabel} 金牌时间，下一步目标是稳定重复，而不是继续冒险。`
        : `${licenseLabel} 距金牌还差 ${licenseGap.toFixed(3)}s。这个测试是「${getLicenseTypeMeta(licenseTest).label} / ${licenseScope.label}」，先按考试目标练，不要套用普通自由练习跑法。`,
      metric: `金牌 ${formatLapTime(licenseTargets.gold)}`,
      segmentLabel: licenseLabel,
      severity: licenseGap > 1 ? "high" : licenseGap > 0 ? "medium" : "low",
    });
  }

  if (licenseTest?.type.includes("start-stop")) {
    const final = samples[samples.length - 1];
    priorities.push({
      title: "停车测试看最后 20 米",
      body: "起步停车类测试不需要弯道映射。重点是满油起步后一次性建立强制动，尾段不要提前滑行；如果冲线前速度还高，刹车点要提前。",
      metric: `终点速度 ${Math.round(final?.speedKmh ?? 0)} km/h`,
      segmentLabel: licenseTest.id,
      severity: (final?.speedKmh ?? 0) > 12 ? "high" : "medium",
    });
  }

  if (licenseTest?.type.includes("wet") || licenseTest?.type.includes("dirt")) {
    priorities.push({
      title: licenseTest.type.includes("wet") ? "低抓地先稳油门" : "泥地先稳姿态",
      body: licenseTest.type.includes("wet")
        ? "湿地测试里，突然全油比晚一点全油更亏。把油门从 40% 到 100% 分两段展开，避免出弯打滑。"
        : "泥地测试里，入弯前先让车身指向出口，再用油门维持滑移角；长时间空油会直接损失速度。",
      metric: `滑行 ${coastingPct.toFixed(1)}%`,
      segmentLabel: licenseTest.id,
      severity: coastingPct > 10 ? "high" : "medium",
    });
  }

  if (exitDelayZones.length) {
    const zone = exitDelayZones[0];
    priorities.push({
      title: "出弯油门偏晚",
      body: "松刹后到大油门之间的空窗偏长。下次把视线提前放到弯心后方，确认车头转向后更早、分段加油。",
      metric: `延迟 ${zone.exitDelaySeconds.toFixed(1)}s`,
      segmentLabel: zone.label,
      severity: zone.exitDelaySeconds > 1.4 ? "high" : "medium",
    });
  }

  if (coastingPct >= 12) {
    priorities.push({
      title: "滑行时间过多",
      body: "油门和刹车都没有输入的比例偏高，通常意味着刹车点或入弯决策不够明确。练习时把每个弯固定成“刹车-释放-转向-给油”的节奏。",
      metric: `滑行 ${coastingPct.toFixed(1)}%`,
      segmentLabel: "全圈节奏",
      severity: coastingPct >= 20 ? "high" : "medium",
    });
  }

  if (slowEntryZones.length) {
    const zone = slowEntryZones[0];
    priorities.push({
      title: "入弯速度损失偏大",
      body: "这一段从入弯到最低速掉速明显。可以先保守推迟一点刹车释放点，而不是继续加大刹车峰值。",
      metric: `掉速 ${Math.round(zone.speedDropKmh)} km/h`,
      segmentLabel: zone.label,
      severity: zone.speedDropKmh > 85 ? "high" : "medium",
    });
  }

  if (heavyBrakeZones.length >= 2) {
    const zone = heavyBrakeZones[0];
    priorities.push({
      title: "重刹保持太久",
      body: "多个刹车区峰值足够高，但重刹持续偏长。目标是保持初段制动力，接近弯心前更平滑地释放，减少前轮负担。",
      metric: `${heavyBrakeZones.length} 个重刹区`,
      segmentLabel: zone.label,
      severity: "medium",
    });
  }

  if (fullThrottlePct < 38) {
    priorities.push({
      title: "全油比例偏低",
      body: "直道和出弯段的满油时间偏少。先找最长直道前一个弯，专门练习更早摆正车身和更早踩满油。",
      metric: `全油 ${fullThrottlePct.toFixed(1)}%`,
      segmentLabel: "直道利用",
      severity: fullThrottlePct < 28 ? "high" : "medium",
    });
  }

  const brakeEvents = toFiniteNumber(summary.brakeEvents, brakeZones.length);
  const expectedCorners = Number(activeLayout?.corners) || 0;
  if (expectedCorners && brakeEvents > expectedCorners + 5) {
    priorities.push({
      title: "刹车修正次数偏多",
      body: "刹车事件明显多于布局弯数，可能存在碎刹或方向修正。先把主要刹车点固定下来，再逐步追极限。",
      metric: `刹车 ${brakeEvents} 次 / ${expectedCorners} 弯`,
      segmentLabel: activeLayout?.name || "当前布局",
      severity: "medium",
    });
  }

  if (!priorities.length) {
    priorities.push({
      title: "本圈节奏比较干净",
      body: "没有发现明显的重刹拖延或长时间滑行。下一步可以用更快一圈作为模板，开始逐段对比刹车点和出弯油门。",
      metric: `刹车区 ${brakeZones.length}`,
      segmentLabel: activeLayout?.name || "全圈",
      severity: "low",
    });
  }

  const penalties = [
    Math.max(0, coastingPct - 8) * 1.2,
    Math.max(0, 45 - fullThrottlePct) * 0.7,
    heavyBrakeZones.length * 4,
    exitDelayZones.length * 5,
  ];
  const score = Math.round(Math.max(30, Math.min(96, 92 - penalties.reduce((sum, value) => sum + value, 0))));
  const topIssue = priorities[0];
  return sanitizeTelemetryCoachAnalysis({
    score,
    segmentCount: brakeZones.length,
    summary: licenseTest
      ? `${licenseTest.id} ${getLicenseTypeMeta(licenseTest).label}：距金牌 ${Number.isFinite(licenseGap) ? formatGap(licenseGap) : "待记录"}；优先处理「${topIssue.title}」。`
      : `识别到 ${brakeZones.length} 个主要刹车区；优先改 ${topIssue.segmentLabel || "全圈"} 的「${topIssue.title}」。`,
    priorities,
  });
}

function buildTelemetryPerformanceSamples(trace) {
  const samples = sanitizeTelemetryTrace(trace)
    .filter((sample) => Number.isFinite(sample.t))
    .sort((a, b) => a.t - b.t);
  let distance = 0;
  const result = [];
  for (let index = 0; index < samples.length; index += 1) {
    const sample = samples[index];
    const previous = samples[index - 1];
    if (previous) {
      const step = Math.hypot(sample.position.x - previous.position.x, sample.position.z - previous.position.z);
      if (Number.isFinite(step) && step < 800) distance += step;
    }
    result.push({ ...sample, distance });
  }
  const totalDistance = distance || 1;
  return result.map((sample, index) => ({
    ...sample,
    index,
    progress: sample.distance / totalDistance,
  }));
}

function detectTelemetryBrakeZones(samples, activeLayout) {
  const zones = [];
  let startIndex = -1;
  for (let index = 0; index < samples.length; index += 1) {
    const braking = samples[index].brake >= 15;
    if (braking && startIndex < 0) startIndex = index;
    if ((!braking || index === samples.length - 1) && startIndex >= 0) {
      const endIndex = braking && index === samples.length - 1 ? index : index - 1;
      if (endIndex - startIndex >= 1) zones.push(buildTelemetryBrakeZone(samples, startIndex, endIndex, zones.length, activeLayout));
      startIndex = -1;
    }
  }
  return zones;
}

function buildTelemetryBrakeZone(samples, startIndex, endIndex, order, activeLayout) {
  const zoneSamples = samples.slice(startIndex, endIndex + 1);
  const start = samples[startIndex];
  const end = samples[endIndex];
  const minSpeed = Math.min(...zoneSamples.map((sample) => sample.speedKmh));
  const peakBrake = Math.max(...zoneSamples.map((sample) => sample.brake));
  const exitSample = findTelemetryExitThrottleSample(samples, endIndex);
  const durationSeconds = Math.max(0, (end.t - start.t) / 1000);
  const exitDelaySeconds = exitSample ? Math.max(0, (exitSample.t - end.t) / 1000) : 0;
  const progress = (start.progress + end.progress) / 2;
  return {
    order: order + 1,
    progress,
    label: getTelemetryBrakeZoneLabel(progress, order, activeLayout),
    durationSeconds,
    exitDelaySeconds,
    exitDelayProgress: exitSample ? Math.max(0, exitSample.progress - end.progress) : 0,
    entrySpeedKmh: start.speedKmh,
    minSpeedKmh: minSpeed,
    speedDropKmh: Math.max(0, start.speedKmh - minSpeed),
    peakBrake,
  };
}

function findTelemetryExitThrottleSample(samples, endIndex) {
  for (let index = endIndex + 1; index < samples.length; index += 1) {
    const sample = samples[index];
    if (sample.throttle >= 80) return sample;
    if (sample.progress - samples[endIndex].progress > 0.12) return null;
  }
  return null;
}

function getTelemetryBrakeZoneLabel(progress, order, activeLayout) {
  if (!activeLayout) return `第 ${order + 1} 个刹车区`;
  const entry = getLayoutEntryById(activeLayout.id);
  const cornerCount = Number(activeLayout.corners) || 0;
  const names = getCornerNames(entry?.track?.name ?? state.selected, activeLayout, cornerCount);
  if (!names.length) return `${activeLayout.name} · 刹车区 ${order + 1}`;
  const index = Math.min(names.length - 1, Math.max(0, Math.floor(progress * names.length)));
  return names[index] || `${activeLayout.name} · 刹车区 ${order + 1}`;
}

function percentOfSamples(samples, predicate) {
  if (!samples.length) return 0;
  return (samples.filter(predicate).length / samples.length) * 100;
}

function getTelemetryStatusInfo() {
  const connection = telemetryState.connection;
  const status = telemetryState.lastStatus ?? {};
  const secondsSinceLastPacket = Number(status.secondsSinceLastPacket);
  const commandHint = "启动：npm run telemetry -- --ps5 192.168.3.78";
  const baseHints = [
    commandHint,
    "确认 PS5 与电脑在同一局域网。",
    "GT7 需要进入实际驾驶画面，停在主菜单通常没有实时包。",
    "Windows 防火墙需允许 Node.js 使用 UDP 33740/33739。",
    "如果端口被占用，请关闭其他 GT7 telemetry 工具后重试。",
  ];

  if (telemetryState.status === "unsupported") {
    return {
      label: "浏览器不支持",
      title: "当前浏览器不能建立 WebSocket",
      copy: "主站会保持手动记录模式，遥测自动记录不可用。",
      className: "is-offline",
      hints: baseHints.slice(0, 1),
    };
  }

  if (telemetryState.status === "connecting") {
    return {
      label: "连接中",
      title: "正在连接本地 telemetry-agent",
      copy: "如果长时间停留在这里，先打开 /health 检查 agent 是否启动。",
      className: "is-waiting",
      hints: baseHints,
    };
  }

  if (["agent_unreachable", "manual_mode"].includes(connection) || telemetryState.status === "offline") {
    return {
      label: "未检测到 agent",
      title: "未检测到本地 telemetry-agent",
      copy: "手动训练记录仍可使用；需要实时遥测时请先启动本地采集器。",
      className: "is-offline",
      hints: baseHints,
    };
  }

  if (connection === "receiving_but_decode_failed") {
    return {
      label: "解密失败",
      title: "收到 UDP 包，但无法解析 GT7 遥测",
      copy: "网络路径已经通了，可能是包格式变化、非 GT7 包或其他工具转发了异常数据。",
      className: "is-error",
      hints: status.hints?.length ? status.hints : baseHints,
    };
  }

  if (connection === "receiving_decoded") {
    if (Number.isFinite(secondsSinceLastPacket) && secondsSinceLastPacket > 5) {
      return {
        label: "遥测中断",
        title: "遥测数据超过 5 秒未更新",
        copy: "可能已退出驾驶、PS5 休眠、网络切换，或防火墙阻断了后续 UDP 包。",
        className: "is-waiting",
        hints: baseHints.slice(1),
      };
    }
    return {
      label: "实时在线",
      title: "PS5 / GT7 遥测实时在线",
      copy: "完成圈会进入待归档列表，确认布局后再写入训练记录。",
      className: "is-online",
      hints: ["数据仅在本机处理，不上传；高置信度匹配也需要用户确认归档。"],
    };
  }

  if (connection === "packet_seen_recently") {
    return {
      label: "等待解密",
      title: "收到过 PS5 包，正在等待稳定遥测",
      copy: "如果一直不进入实时在线，请确认已经进入驾驶并检查 agent 日志。",
      className: "is-waiting",
      hints: status.hints?.length ? status.hints : baseHints,
    };
  }

  return {
    label: "等待 PS5",
    title: "agent 已启动，但还没收到 PS5 遥测",
    copy: "这通常是 PS5 IP、同网段、驾驶状态或 Windows 防火墙的问题。",
    className: "is-waiting",
    hints: status.hints?.length ? [commandHint, ...status.hints] : baseHints,
  };
}

function clampTelemetryPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  return Math.min(100, Math.max(0, number));
}

function renderTelemetryBar(label, value, type) {
  const width = value == null ? 0 : value;
  const text = value == null ? "--" : `${Math.round(value)}%`;
  return `
    <div class="telemetry-bar ${type}">
      <span>${label}</span>
      <div><i style="width: ${width}%"></i></div>
      <b>${text}</b>
    </div>
  `;
}

function formatTelemetryGear(value) {
  if (value === 0) return "N/R";
  if (value > 10) return "--";
  return String(value);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

applyHashRoute();
initializeList();
applyFilters();
renderLicenseCoachPanel();
if (state.coachMode) renderCoachMode();
initializeTelemetryPanel();

window.addEventListener("hashchange", () => {
  applyHashRoute();
  renderLicenseCoachPanel();
  if (state.coachMode) {
    renderCoachMode();
  } else {
    renderDetailOnly();
  }
});
