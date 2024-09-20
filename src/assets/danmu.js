const customDanmus = [
  {
    avatar:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIADIAMgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAFBAYBAgMAB//aAAgBAQAAAAD7HU4ObhMC3AnlYvY8ISwA+6WDOd4/RA96FVeF66BOVWB3TsAOgZC27wv/xAAYAQEBAQEBAAAAAAAAAAAAAAACAwQAAf/aAAgBAhAAAAC3sw8uyRDQPV//xAAYAQADAQEAAAAAAAAAAAAAAAAAAgMBBP/aAAgBAxAAAACQ7LfmoUTNvFf/xAA0EAACAQMBBAcHAwUAAAAAAAABAgMABBESBRMxQRAhIjJRYbEUIzRCUnOBM3KSU2KRoeH/2gAIAQEAAT8AmmSCJpHOAoq6vZp8lmITkgonSQCMZxikkdGDxsVbxFbK2l7TGUkwHQfy6Ln4if7jetbcdglvH9TFv40hD71CGzlQpAyACRkt4VcxojxOdIj06GzwA5VKkilGUdjUcNxD9XlwI5g1Bfm0u4nC5UHDeYNWu0LS4B3D6mHHIwaufiJ/uN61tm6Et6GPCIbv8mtqi4gtrFkzjeuxIGRq+TP4orI1jpK+8MHAfVprYcM8kVysmoIGiwG8UfVgVcwh1ecDGiYcvlNWk7W9zDKucqwyPEVOczzfvb1q/wBkXWqR4Sja8nDHGCajAEagHIAx/jourmK0haaV9KrWyrFZLRZJ07MqNhc8Q3M/irfZFlaOGQF2HzOc1cACeYD+o3r0XptYEJKAyMx06TgsxOaupr+MhkIQk6TlfPlkVNCIxBc3A9onLjRG/WtWV1BPFlRp09TpzBHLoufiJ/uN69G05JLxt8C2ksQpTiAMHIq0mQz6HnMnZwurBwBRhKTLLK5Y6Oz/AGf9qwla3u4TykBRh/sdFx8RN9xvWpri43Unv5O6fmNSSSCHGtsb0DGfKrFm3zdZ7o9RUskhMnbbu+NLJJrh7bfqJz869onxjfSY/callk3knvG7x51//8QAIxEAAgEEAQMFAAAAAAAAAAAAAQIRAAMSMRAEIXETMjNBUf/aAAgBAgEBPwBMUTNv3tSdQrgZDYpwMmx0N8PdFv0iBMAyKS4QroF99JcxDhhMntwxgUCoJIER90jZCeG2PBpvjNWtHzx//8QAIBEAAgICAgIDAAAAAAAAAAAAAQIAERASAyEyM0GBkf/aAAgBAwEBPwBtmbURuErdRb1W/nCIW3vqMgJVr8YyWVIyvYG/5CKwJze36jY//9k=',
    name: '美绪',
    text: '马什么梅？',
  },
  {
    avatar:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIADIAMgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQIDBAEGB//aAAgBAQAAAAD65hzG3WLcATfCbHYQ9IY0uiEfRkU1IOr+RoUG1ornWj7Y6//EABgBAQADAQAAAAAAAAAAAAAAAAQAAgUD/9oACAECEAAAACEf3IJba51tGDNq/wD/xAAYAQEAAwEAAAAAAAAAAAAAAAAEAQMFAv/aAAgBAxAAAABSg0MWQdj+c6VozP/EAC0QAAIBAwMBBgUFAAAAAAAAAAECEQADBBASMUEiUVJhcZEFExQhgSAyQoKx/9oACAEBAAE/AKu5oEi2A3meKOXf8cfgV9Xe2kEgyOeCKsZSXAqs0XP91z7+wC3MSCzeg/RbuG06uO8T6a5kNkOOu0CpUXWQMdo4kQRPQihPd9tH+4jXIw0yDukq0RNHFu2/iOVku0pfx7foHt91MttbMyN7njqQDo3BPkdWEqRJEjkV8QOV2LVq2xBBlkoq+y181CrgHn1nXHffZQ+UH8aEwCaEoJP9qzbe+ySOUO7XCuxca2f5CR6jS477H7bftPWt7+NvekdzbWXYyo60rvtXtHgda3v4j71Yd/qLPaPJ6+Vb38be9f/EACYRAAECBAQHAQAAAAAAAAAAAAECAwAEEBIREzFSITNBQlFhgXL/2gAIAQIBAT8AffKDYjXqYznd5hhwuI46ijjOOaSfaYUm232Ik9F/KKQFRMN2LHgiJVdrmG6s32fYa5iP0Kf/xAAmEQABAgQFBAMAAAAAAAAAAAABAgMAEBESBBNCUoEhMTNhUXFy/9oACAEDAQE/AGGAoXK4EZLWwQ+2G19Oxk28RlhI9GEqur9xi9HMm3C2qtAfRhhy9J+axiUXIrtnhdfEOeNf5Mv/2Q==',
    name: '博士',
    text: '马东什么？',
  },
  {
    avatar:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIADIAMgMBIgACEQEDEQH/xAAxAAACAgMBAAAAAAAAAAAAAAAABgQFAQIHAwEBAAMBAAAAAAAAAAAAAAAAAwABAgT/2gAMAwEAAhADEAAAAI7CsPnN1VeZ0okpTbSWASKzwmMPRy3PuuWhpv4KvQ7pcJYTUb+hdLQYWJoaVU+RU3jcXiaoegAhWOAPeeaBd1wGtf/EAC4QAAIBAwIEBAUFAQAAAAAAAAECAwAEEQUhBhASMRMiQWEUI3KBoSAzQlFSkv/aAAgBAQABPwDTxidHHbdTyZGjdkcYYelBGKM4HlUgH7/osXInRfQsK0q18abxGHkj/JrV0KXrEfzUGtLiE0F1G48r4GfcVJDJFI0TbMp52W91D9VXt42mWQCu0QUqHZQC7SyDIRA22QO5NXkFyLeFpnWRggYsMZw/+ioAPsRVlOtrpsshx+6d2OFGw3J/oVK897YR6nbfORCTkp0OVQ7lRk5Aq5gMZSVR8qVepfbPpy0jDSRyEZxIg/6JrjKJytlEEJ63uJD7ttXB6Tn41bhW8Mwxxjqzt3OBWrx+Bw9fQsRvIgBzjYutcP3F8upWVmZZltvjFPQW22BqeAJpHh+kWyeyhsL+KXS9RcB1WLpYZGSc4NcKwxTrcRy+qrj2IJIqe3S5AEsSOAcgMobB+9Lb9KhVAAHYCntRIjI6hkYYZWGQRUGm2ltMssVsiSKCAVGMZqWFZ4fDY4XYn7ULaEgF182N/Me9cIuI3kY9gFodLAEHINFgKDKdqwK1LVotOMSsnWz5JAPYUeJZyTiKMVwv2n+la08npcZOBjke3LVWZtRuizE4kI5f/8QAIBEBAAIBAgcAAAAAAAAAAAAAAQARAwIQEiAhMTJBcf/aAAgBAgEBPwDL5HzkadfX0RDjmTSUJtks1MqWpVypk7uxt//EACARAQABAwMFAAAAAAAAAAAAAAEAAhEhAxATEiIxYXH/2gAIAQMBAT8A0m1L9l+2++Sg9sF45p1N7M6iUJYwM5GYW4ZmZT4Njb//2Q==',
    name: '柚子',
    text: '什么冬梅？',
  },
];

// 弹幕来自b站首页
const danmus = [
  '草',
  '高技术力',
  '汤姆逊波纹疾走…啊哒哒哒哒哒哒……',
  '此曲一出，非死即伤',
  '这播放量不应该啊',
  '牛皮！',
  '全  文  背  诵',
  'ohhhhhhh',
  'NICE',
  '草这死亡姿势',
  '日常迫害团长',
  '溜了溜了',
  '火钳刘明',
  '真实',
  '汤姆逊波纹疾走',
  '不  要  停  下  来  啊',
  '泥 给 路 打 油',
  '停下来了',
  '草',
  '完全一致',
  '你怎么还没有被禁赛',
  '6P41波纹疾走!!!',
  '牛逼',
  '草',
  '草',
  'cccccccc',
  '人才不火系列',
  '双厨狂喜',
  '双厨曝炸',
  '火钳留名',
  '火钳留名',
  '牛逼啊',
  '草',
  '草',
  '要素过多',
  '火钳刘明',
  '高技术力suki',
  'bo良ki影觉得很赞',
  '你们的下一句话是名场面',
  'Niiice',
  '太草了',
  '哈哈哈哈',
  '火钳刘明',
  '6p41疾走',
  '袭击妈妈',
  '占戈哥欠走己',
  '又看jojo又玩r6的人恐怕太少了吧',
  '好活当赏',
  '要素过多',
  '动作也太流畅了吧',
  '世界名画',
  '好活，当赏',
  '全程高能',
  '新人都是怪物.jpg',
  '我的人质啊',
  '袭击妈妈锁孔看她',
  '完全不会画画（大嘘）',
  '好活',
  '爆头 2333333',
  '把队友杀了的屑',
  '动作指导:奥尔加',
  '草',
  '要素过多',
  '噗',
  '让你玩手机',
  '6啊',
  '我负责救人质',
  '三厨狂喜',
  '三厨狂喜',
  '万能日语',
  '耶———————格——————————',
  '6P41波纹疾走',
  '“哦”踩点还行',
  '火钳刘明。',
  '哎地唉洗',
  '这枪不是m249啊，等等叫什么来的',
  '火钳刘明',
  '光棍节， 。去过',
  '炸死队友哈哈哈',
  '火钳刘明',
  '火钳刘明',
  'cao',
  '火钳刘明',
  '提前Niiiiiiiice！',
  '火钳刘明',
  '神仙UP',
  '又被爆头了',
  '6p41疾走',
  '好活',
  '人质好好笑啊',
  '不要停下来啊',
  '好活啊！！',
  '6P41波纹疾走 （换成AK是不是更爽）',
  '恭喜你发现宝藏',
  '恭喜你发现宝藏',
  '恭喜你发现宝藏',
  '前方高能',
  '封禁30分钟',
  '火钳刘明',
  '该赏',
  '我靠，就冲着高帧数，投币了',
  '不 要 停 下 来 啊（指你给路）',
  '卧槽 无情',
  '草',
  'ADS草',
  '世界线收束',
  '火钳刘明',
  '人质：给我把抢我跟他拼了',
  '小车灵魂',
  '卧槽这帧数',
  'jojoの奇妙转场',
  'niiiiiiice',
  '好活',
  '要素过多',
  '6p41',
  'TK*3移除对战',
  '这场景布置有弹丸那味儿了',
  '草',
  '草',
  '不要让战斗停下来',
  '火钳留名',
  '炸死俩盾哈哈',
  '太草了，',
  '万能日语',
  '伪渲染(确信)',
  '要素过多',
  '火钳刘明',
  '卧槽',
  '炸死队友',
  '危',
  '这才是真正的高技术力',
  '高技术力suki',
  '火钳刘明',
  '欺负我不懂日语系列',
  '我打我自己',
  '帧数爆炸',
  '危',
  '危',
  '要素过多',
  '巨真实这小车',
  '牛逼',
  '帧数高的吓人',
  '5v5→3v3',
  '我都是俄式救援',
  'niiiiiiiiiiiice',
  '别啊！',
  '尼给路嗒呦',
  '目测会火',
  '双厨狂喜',
  '人质已解救（脱）',
  '哈哈哈哈哈',
  '要素过多',
  'nb',
  '杀了两个队友不就被踢出去了吗',
  '这是新人？',
  '没毛病',
  '一甲fuze',
  '要素过多',
  '大————头————',
  '人————质————',
  '这是组长吗？',
  '不是M249，是PKP',
  '卡其脱离太',
  '等等JOJO是你？',
  '我就是又看JOJO又玩r6',
  '二乔？？？？？？',
  '这也太流畅了吧',
  '这tm能出番了这帧数和技术',
  'kpm波纹疾走',
  '大制作',
  '太草了',
  '耶——格——',
  '高技术力',
  '精神小车',
  '左轮庸医',
  '袭击人质，锁孔看他',
  '奈~~斯 屑队友被杀✓',
  '惨  盾兵  惨',
  '打敌人误伤不算',
  '不要停下来啊! (指解救人质)',
  '嘴巴被贴胶还能说话的人质是鉴',
  '哈哈哈哈哈哈哈哈哈',
  '一局11杀',
  '二乔同款姿势 哈哈',
  '耶格！',
  '看',
  '鉴作无误',
  '双出狂喜',
  '为什么不是中文',
  '经典咚咚咚………三声雷，带你飞',
  '要素过多',
  'jojo',
  '三厨狂喜',
  '我也是又看又玩',
  '我都听到lisalisa了doge',
  '你给路打油',
  '确实质量很高啊',
  'NICE',
  '银魂？',
  '火钳刘明',
  '我就是又看jojo又玩R6（1631小时）的，你有什么事吗？',
  '哟西哟西',
  '要素过多',
  '我也是看JOJO，玩r6',
  'nokk',
  '800小时r6加二刷jojo在此',
  '好活',
  'jojo',
  'fuze the hostage',
  '不要停下来！！！！！',
  'pkppkp波纹疾走',
  '新人都是怪物吗？',
  '23333333',
  '我先来，首页通知书',
  '咚咚咚放这里。。。',
  '火钳刘明',
  '火钳刘明',
  '火钳刘明',
  '队友都炸',
  'nice',
  '哈哈哈哈',
  '人质:危！',
  '危',
  '火钳刘明',
  '人质  卒',
  '你币有了',
  '打投组',
  '恭喜首頁通知書！',
  '要素溢出',
  'HOSTAGE KIA',
  '233',
  '是无托版的PKP',
  '666',
  'hostage KIA',
  'tk哈哈哈',
  '要素过多',
  '这个肌肉我可以惹',
  '6的飞起',
  'jo风',
  '混入了奇怪的东西',
  '草',
  '袭击妈妈，锁孔看她',
  '哈哈哈哈哈哈',
  '，',
  '草',
  '牛逼',
  '高技术力啊',
  'opp',
  'X',
  '组长！',
  '草（中日双语）',
  '哈哈哈哈哈哈',
  '-500',
  '.',
  '看封面识内容系列',
  '草',
  '首页通知书',
  '要素过多',
  '但是不会画画',
  '草',
  '不要停下来啊！',
  '梅开三度',
  '四回啊四回',
  '高帧好评',
  '人质已解脱',
  '草',
  '强',
  '好活！',
  '好流畅',
  '草',
  '666',
  '好活儿当赏',
  '新人都是怪物系列',
  '高技术力',
  'niiiiiiiiiiiiiiice',
  '人质危',
  '哈哈哈哈',
  '带制作，三连了',
  '鉴作',
  '咚咚咚',
  '咚咚咚咚棒棒棒棒',
  '要素过多',
  '不应该是打中耳机吗',
  '高技术力',
  '完了',
  '彩虹六号牛批',
  '口罩都有荒木线，佛了',
  '哈哈哈',
  '要素爆炸',
  '高技术力',
  'cao caocaocaocao',
  '哈哈哈哈哈哈哈',
  '等等，2乔这里说的是30分钟',
  '首页通知书',
  '海     岸     线',
  'pkp波纹疾走',
  '耶————————格————————',
  '人 质 凶 手 -500',
  '队友：WDNMD',
  'jojo？？？',
  '点进来之前我以为是fuze饮料。。',
  '要素过多',
  '绝了',
  '要素过多',
  '灭 霸',
  '新人都是魔鬼',
  '帧数爆炸',
  'Cluster Charge activated！',
  '要素过多',
  'Hostage KIA，Mission failed',
  '人质已解脱。。。',
  '开 幕 雷 击',
  '哈哈哈哈',
  'ADS草死了',
  '+0',
  '牛批牛批',
  '拜见大神',
  '阿虚',
  '这帧数，感觉在看动漫',
  '卡其脱离太',
  '双厨狂喜',
  '问问',
  '不要停下来啊！！！！！',
  'h',
  '不要停下来啊',
  '要真30分钟都不用结束回合了，都开始第二局游戏了',
  '这也太强了',
  '。。。。。。。。。。。。',
  'hoho',
  '要素过多',
  '哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈哈',
  '.00',
  '哈哈',
  '万能的日语',
  '首页通知书',
  '我卡了？',
  'hhhhh',
  '大盾闪盾好惨',
  '哈哈哈哈哈哈哈哈哈',
  '草',
  '要素太多受不了哈哈哈哈哈哈哈',
  '火钳刘明',
  '首页通知书',
  'lisalisa',
  '这是什么蛇皮操作，看不懂',
  '敌 我 不 分',
  '草',
  '666',
  '哈哈哈哈啊哈哈哈',
  '完全一致',
  '要素过多',
  '你又双叒叕发现了新的宝藏',
  '火钳刘明',
  '2333',
  '高  技  术  力',
  '三梗合一',
  '四梗合一',
  '火钳刘明',
  '杀2个队友不是直接飞了吗',
  '首页通知书',
  '海岸线',
  '是延迟',
  '好活当赏',
  '这个我遇到过，fuze就是我，人质敌人队友都被我杀掉了，被老外骂并被踢了',
  '草素过多',
  '人质——  再不能起',
  '必须三联',
  '开始吟唱',
  '不要停下来啊',
  '草',
  '？？？？？？？？？？？？？？？？？',
  'tab+shift',
  '帧数高的和动画一样',
  'wwwwwwwwwwww',
  '好强',
  '23333333',
  '好活当赏',
  '此曲一出',
  '要素过载',
  '火钳刘明',
  '要素过载',
  '好活！！！！',
  '开始吟唱',
  '我听得懂咋办，在线等，很急',
  '哇哇哇好高清',
  '.',
  '医 学 奇 迹',
  'jo里jo气的',
  'jojo画风',
  '哈哈哈哈哈哈',
  '俄式反恐',
  '别拦我，老子把3个ADS都丢他脸上',
  '-500',
  '万 能 日 语',
  '666',
  '人质杀手',
  '做的真的棒。',
  '我NM笑疯',
  '双厨狂喜',
  '玛撒卡！这是袭击妈妈配音？',
  'nice',
  'jojo!',
  'JO小鬼来力',
  '真实',
  '我又玩R6又看JOJO',
  '完  全  不  会  画  画',
  '秀儿',
  '是系统自动踢人的，老外来不及踢你',
  '6p41波纹疾走',
  '火钳刘明',
  'lisalisa？？？？？',
  '盾——兵——（悲）',
  '就是没有汤姆逊，汤姆逊波纹疾走！！',
  '要素过多',
  '。。。。？？',
  '组长你怎么了组长',
  'UP:我 完 全 不 会 画 画',
  '再来亿遍',
  '泥给路带呦～',
  '哈哈哈哈哈哈哈哈哈',
  '哈哈哈哈哈哈哈哈哈',
  '火钳刘明',
];

const getDanmuData = () => {
  return danmus.map((text, index) => {
    const _index = index % 3;
    return {
      avatar: customDanmus[_index].avatar,
      // decorIcon: 'https://assets.voya.world/admin/20240319/65f9374f8139b165f9374f813a0.png?resize=p_4,w_200,h_200',
      // managerIcon: customDanmus[_index].avatar,
      name: customDanmus[_index].name,
      text,
    };
  });
};

export { customDanmus, danmus, getDanmuData };
