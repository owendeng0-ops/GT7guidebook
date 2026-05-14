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
const CORNER_CALIBRATION_STORAGE_KEY = "gt7-track-atlas-corner-calibration-v1";
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
};

const layoutAccentColors = ["#ef4652", "#42a5ff", "#20d7a3", "#f7c948", "#b56bff", "#ff8b3d"];
const vehicleAssets = window.VehicleAssets ?? {};
const layoutAssets = window.LayoutAssets ?? {};
const layoutVerification = window.LayoutVerification ?? {};
const trainingData = loadTrainingData();
const cornerCalibrationData = loadCornerCalibrationData();
const allLayoutEntries = buildAllLayoutEntries();

const listEl = document.querySelector("#trackList");
const detailEl = document.querySelector("#trackDetail");
const resultCountEl = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const trackCountEl = document.querySelector("#trackCount");
const trainingSummaryEl = document.querySelector("#trainingSummary");
const trainingUpdatedEl = document.querySelector("#trainingUpdated");
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

trainingSummaryEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-dashboard-track]");
  if (!button) return;
  selectTrack(button.dataset.dashboardTrack, button.dataset.dashboardLayout);
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
  const zhName = getTrackZhName(track.name);
  return `
    <button class="track-button${active}" data-track="${track.name}">
      <span>
        <strong>${track.name}</strong>
        <em>${zhName}</em>
        <small>${regionName(track.region)} · ${track.country} · ${track.type}</small>
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
      ${official && activeLayout ? renderTrainingCard(track, official, activeLayout) : ""}
      ${official ? renderOfficialStats(official, activeLayout) : ""}
      ${official ? renderLayoutComparison(track, official, activeLayout) : ""}

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

      <section class="info-block" style="margin-top: 14px;">
        <h3>难度圈速指南</h3>
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
    </article>
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
  if (!cars.length) {
    return `<span class="vehicle-card is-text-only"><span class="vehicle-no-image">GT7</span><span><strong>稳定四驱或低马力车</strong><small class="vehicle-reason">优先稳定与容错，先把练习节奏固定。</small></span></span>`;
  }

  return `<div class="vehicle-stack">${cars.map((label) => renderVehicleChoice(label, track, difficulty)).join("")}</div>`;
}

function renderVehicleChoice(label, track, difficulty) {
  const asset = vehicleAssets[label];
  const title = escapeHtml(asset?.officialName ?? label);
  const reason = getVehicleReason(label, track, difficulty);
  return `
    <span class="vehicle-card${asset ? "" : " is-text-only"}" title="${title}">
      ${
        asset
          ? `<img src="${asset.src}" alt="${title}" loading="lazy" decoding="async" />`
          : `<span class="vehicle-no-image">GT7</span>`
      }
      <span>
        <strong>${escapeHtml(label)}</strong>
        <small class="vehicle-reason">${escapeHtml(reason)}</small>
      </span>
    </span>
  `;
}

function renderTrainingCard(track, official, activeLayout) {
  const record = getTrainingRecord(activeLayout.id);
  const targetDifficulty = getTargetDifficulty(record);
  const range = getTargetRange(track, official, activeLayout, targetDifficulty);
  const best = typeof record.bestLapSeconds === "number" ? record.bestLapSeconds : null;
  const gap = best ? best - range.target : null;
  const status = getTrainingStatusMeta(record);
  const favoriteLabel = record.favorite ? "取消收藏" : "收藏布局";
  const lapParts = splitLapTime(best);
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
        <div><small>本地状态</small><strong>${status.label}</strong></div>
      </div>
      <div class="training-form">
        <label>
          <span>目标难度</span>
          <select id="targetDifficultySelect">
            ${Object.keys(difficultyMultipliers)
              .map((difficulty) => `<option value="${difficulty}"${difficulty === targetDifficulty ? " selected" : ""}>${difficulty}</option>`)
              .join("")}
          </select>
        </label>
        <label class="lap-time-field">
          <span>最佳圈速</span>
          <div class="lap-time-input" aria-label="最佳圈速，按分钟、秒、毫秒输入">
            <input id="bestLapMinutes" data-lap-part="minutes" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" value="${lapParts.minutes}" placeholder="00" aria-label="分钟" />
            <b>:</b>
            <input id="bestLapSeconds" data-lap-part="seconds" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" value="${lapParts.seconds}" placeholder="00" aria-label="秒" />
            <b>:</b>
            <input id="bestLapMillis" data-lap-part="millis" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="3" value="${lapParts.millis}" placeholder="000" aria-label="毫秒" />
          </div>
          <small class="lap-time-hint">只填数字，自动组成 分:秒:毫秒</small>
        </label>
        <label class="training-notes-field">
          <span>练习笔记</span>
          <textarea id="trainingNotes" rows="2" placeholder="记录刹车点、失误弯角或车辆设置">${escapeHtml(record.notes ?? "")}</textarea>
        </label>
      </div>
      <div class="training-actions">
        <button type="button" data-training-action="save-training">保存记录</button>
        <button type="button" data-training-action="set-current">设为当前训练</button>
        <button type="button" data-training-action="complete">标记已达标</button>
        <button type="button" data-training-action="toggle-favorite">${favoriteLabel}</button>
        <button type="button" data-training-action="reset">重置记录</button>
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
          <td>${typeof record.bestLapSeconds === "number" ? formatLapTime(record.bestLapSeconds) : "未记录"}</td>
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
  return {
    bestLapSeconds: Number.isFinite(bestLapSeconds) && bestLapSeconds > 0 ? bestLapSeconds : null,
    targetDifficulty,
    status,
    favorite: Boolean(record.favorite),
    notes: typeof record.notes === "string" ? record.notes.slice(0, 500) : "",
    updatedAt: typeof record.updatedAt === "string" ? record.updatedAt : "",
  };
}

function persistTrainingData() {
  localStorage.setItem(TRAINING_STORAGE_KEY, JSON.stringify(trainingData));
}

function getTrainingRecord(layoutId) {
  return {
    bestLapSeconds: null,
    targetDifficulty: defaultTargetDifficulty,
    status: "not-started",
    favorite: false,
    notes: "",
    updatedAt: "",
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
    const nextStatus = record.status === "not-started" && (lapInput.seconds || getTrainingNotes()) ? "active" : record.status;
    saveTrainingRecord(activeLayout.id, {
      bestLapSeconds: lapInput.seconds,
      targetDifficulty: getFormTargetDifficulty(),
      notes: getTrainingNotes(),
      status: nextStatus,
    });
  }
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

function getTrainingStatusMeta(record) {
  const status = Object.hasOwn(trainingStatuses, record.status) ? record.status : "not-started";
  return {
    label: trainingStatuses[status],
    className: `status-${status}${record.favorite ? " is-favorite" : ""}`,
  };
}

function getTrackTrainingSummary(track) {
  const official = getOfficialTrack(track);
  const records = official?.layoutDetails.map((layout) => getTrainingRecord(layout.id)) ?? [];
  if (records.some((record) => record.favorite)) return { label: "收藏", className: "status-favorite" };
  if (records.some((record) => record.status === "active")) return { label: "练习中", className: "status-active" };
  if (records.length && records.every((record) => record.status === "complete")) return { label: "已达标", className: "status-complete" };
  return { label: "未开始", className: "status-not-started" };
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
  const recent = entries
    .filter((entry) => entry.record.updatedAt)
    .sort((a, b) => Date.parse(b.record.updatedAt) - Date.parse(a.record.updatedAt))[0];
  const recommendation = getRecommendedLayout(entries);
  const recentTrackName = recent ? getTrackZhName(recent.track.name) : "";
  const recommendedTrackName = getTrackZhName(recommendation.track.name);
  trainingUpdatedEl.textContent = recent ? `最近更新 ${formatRelativeDate(recent.record.updatedAt)}` : "本地记录";
  trainingSummaryEl.innerHTML = `
    <div class="training-summary-card">
      <small>进行中布局</small>
      <strong>${activeCount}</strong>
      <span>继续收敛刹车点和出弯节奏</span>
    </div>
    <div class="training-summary-card">
      <small>已达标布局</small>
      <strong>${completeCount}</strong>
      <span>${allLayoutEntries.length} 个官方布局中的完成数</span>
    </div>
    <div class="training-summary-card">
      <small>最近练习</small>
      <strong>${recent ? escapeHtml(recent.layout.name) : "暂无记录"}</strong>
      <span>${recent ? escapeHtml(recentTrackName) : "保存一次圈速后这里会接上"}</span>
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
      if (entry.record.status === "active") score += 24;
      if (entry.record.favorite) score += 16;
      if (verification?.status === "verified" || verification?.status === "variant") score += 14;
      if (entry.official.layouts >= 4) score += 10;
      if (entry.layout.lengthValue > 4) score += 8;
      if (entry.record.targetDifficulty === difficultyBonus) score += 6;
      return { ...entry, score };
    })
    .sort((a, b) => b.score - a.score || b.layout.lengthValue - a.layout.lengthValue)[0];
}

function buildAllLayoutEntries() {
  return tracks.flatMap((track) => {
    const official = getOfficialTrack(track);
    return (official?.layoutDetails ?? []).map((layout) => ({ track, official, layout }));
  });
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
  if (!trackName || !trackByName.has(trackName)) return;
  state.selected = trackName;
  const official = getOfficialTrack(trackByName.get(trackName));
  state.selectedLayout = official?.layoutDetails.some((layout) => layout.id === layoutId) ? layoutId : "";
}

function updateUrlHash() {
  if (!state.selected) return;
  const track = trackByName.get(state.selected);
  const official = track ? getOfficialTrack(track) : null;
  const layoutId = getActiveLayout(official)?.id ?? "";
  const params = new URLSearchParams();
  params.set("track", state.selected);
  if (layoutId) params.set("layout", layoutId);
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

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

applyHashRoute();
initializeList();
applyFilters();
