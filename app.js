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

const state = {
  region: "all",
  difficulty: "all",
  query: "",
  selected: tracks[0].name,
  selectedLayout: "",
};

const layoutAccentColors = ["#ef4652", "#42a5ff", "#20d7a3", "#f7c948", "#b56bff", "#ff8b3d"];
const vehicleAssets = window.VehicleAssets ?? {};
const layoutAssets = window.LayoutAssets ?? {};
const layoutVerification = window.LayoutVerification ?? {};

const listEl = document.querySelector("#trackList");
const detailEl = document.querySelector("#trackDetail");
const resultCountEl = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const trackCountEl = document.querySelector("#trackCount");
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
    renderDetailOnly();
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
  const button = event.target.closest(".layout-pill");
  if (!button || !detailEl.contains(button)) return;
  if (state.selectedLayout === button.dataset.layoutId) return;
  state.selectedLayout = button.dataset.layoutId;
  renderDetailOnly();
});

function setActive(selector, activeButton) {
  document.querySelectorAll(selector).forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}

function getFilteredTracks() {
  return tracks.filter((track) => {
    const regionMatch = state.region === "all" || track.region === state.region;
    const queryHaystack = [
      track.name,
      track.region,
      track.country,
      track.type,
      track.profile,
      track.tune,
      ...track.focus,
      ...track.cars,
    ]
      .join(" ")
      .toLowerCase();
    const queryMatch = !state.query || queryHaystack.includes(state.query);
    return regionMatch && queryMatch;
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
  }

  resultCountEl.textContent = `${filteredTracks.length} 条结果`;

  const visibleNames = new Set(filteredTracks.map((track) => track.name));
  trackButtons.forEach((button, name) => {
    button.hidden = !visibleNames.has(name);
  });

  listEl.classList.toggle("is-empty", filteredTracks.length === 0);
  updateActiveTrackButton();
  renderDetailOnly();
}

function selectTrack(name) {
  if (!trackByName.has(name)) return;
  if (state.selected === name) return;
  state.selected = name;
  state.selectedLayout = "";
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
  return `
    <button class="track-button${active}" data-track="${track.name}">
      <span>
        <strong>${track.name}</strong>
        <small>${regionName(track.region)} · ${track.country} · ${track.type}</small>
      </span>
      <span class="tag">${official?.layouts ?? track.layouts} 布局</span>
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
      ${official ? renderOfficialStats(official, activeLayout) : ""}

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
          <tbody>${renderPaceRows(track)}</tbody>
        </table>
      </section>
    </article>
  `;
}

function renderPaceRows(track) {
  const difficulties = state.difficulty === "all" ? Object.keys(difficultyMultipliers) : [state.difficulty];
  return difficulties
    .map((difficulty) => {
      const target = Math.round(track.baseLap * difficultyMultipliers[difficulty]);
      const lower = target - (difficulty === "高手" ? 2 : 4);
      const upper = target + (difficulty === "高手" ? 2 : 5);
      const cars = getCarsForDifficulty(track, difficulty);
      const standard = getStandard(difficulty);
      return `
        <tr>
          <td class="difficulty ${difficultyClasses[difficulty]}">${difficulty}</td>
          <td>${formatTime(lower)} - ${formatTime(upper)}</td>
          <td>${renderVehicleChoices(cars)}</td>
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

function renderVehicleChoices(cars) {
  if (!cars.length) {
    return `<span class="vehicle-card is-text-only"><span class="vehicle-no-image">GT7</span><span>稳定四驱或低马力车</span></span>`;
  }

  return `<div class="vehicle-stack">${cars.map(renderVehicleChoice).join("")}</div>`;
}

function renderVehicleChoice(label) {
  const asset = vehicleAssets[label];
  const title = escapeHtml(asset?.officialName ?? label);
  return `
    <span class="vehicle-card${asset ? "" : " is-text-only"}" title="${title}">
      ${
        asset
          ? `<img src="${asset.src}" alt="${title}" loading="lazy" decoding="async" />`
          : `<span class="vehicle-no-image">GT7</span>`
      }
      <span>${escapeHtml(label)}</span>
    </span>
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
  if (!mapSrc) {
    return `
      <div class="track-map-frame is-missing">
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
    <div class="track-map-frame is-highlighted${patternClass}${layoutAsset ? " is-layout-map" : " is-fallback-map"}">
      <img class="layout-map-image" src="${mapSrc}" alt="${title} ${layoutName} 布局图" loading="eager" decoding="async" />
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

initializeList();
applyFilters();
