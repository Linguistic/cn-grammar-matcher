/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGC3SCN',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'yihou',
  structures: [
    'Subj. + Special Time + 以后／之后 + Action',
    '以后，Comment',
    'Subj. + Event， 之后 + Action',
  ],
  description:
    'If you are trying to explain what you did after a certain event, you might want to use "以后" (yǐhòu) or "之后" (zhīhòu). After all, they do both mean "after," right? Well, it turns out that there are a few rules that you need to be aware of before you use them.',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([
      regexMatchLocs(sentence.text, /((?:以后|之后))/),
      regexMatchLocs(sentence.text, /(以后，)/),
      regexMatchLocs(sentence.text, /(，之后)/),
    ]),
  examples: [
    {
      zh: '下过雨以后/之后空气会好很多。',
      en: 'After it rains, the air will be a lot better.',
      src: allSetSrc,
    },
    {
      zh: '结婚以后/之后他们有了两个宝宝。',
      en: 'After getting married, they had two babies.',
      src: allSetSrc,
    },
    {
      zh: '等我涨工资以后/之后请你吃饭。',
      en: 'After I get a raise, I will treat you to a meal.',
      src: allSetSrc,
    },
    {
      zh: '听到这个消息以后/之后，我高兴得一晚上没睡。',
      en: "After I heard this news, I was so happy I couldn't sleep the whole night.",
      src: allSetSrc,
    },
    {
      zh: '以后再也不来这里吃饭了，又贵又难吃。',
      en:
        "In the future I will never come to this place to eat again. It's expensive and the food is not good.",
      src: allSetSrc,
    },
    {
      zh: '以后我可能会去国外上大学。',
      en: 'In the future I might go to college abroad.',
      src: allSetSrc,
    },
    {
      zh: '以后的事情以后再说吧。',
      en: "We'll talk about future things some time later.",
      src: allSetSrc,
    },
    {
      zh: '我要先回家把东西放下，之后去咖啡店找你。',
      en:
        "I'm going to go home and drop my stuff off first, then go to the cafe to look for you.",
      src: allSetSrc,
    },
    {
      zh: '去年夏天他来过我家，之后再也没见到他。',
      en: "Last summer, he came to my house. After that, I haven't seen him.",
      src: allSetSrc,
    },
    {
      zh: '房子涨价之后，越来越多的人开始买房。',
      en: 'After prices went up, more and more people started buying houses.',
      src: allSetSrc,
    },
    {
      zh: '我六点下班，之后，我去跟朋友吃饭。',
      en:
        "I will get off work at six o'clock, and after that I will meet with a friend to eat dinner.",
      src: allSetSrc,
    },
    {
      zh: '昨天我跟朋友吃完饭以后去了酒吧。',
      en: 'Yesterday, when my friends and I were done eating, we went to the bar.',
      src: allSetSrc,
    },
    {
      zh: '昨天我跟朋友去吃饭了，之后，我们去了酒吧。',
      en: 'Yesterday I ate dinner with a friend, and afterward we went to a bar.',
      src: allSetSrc,
    },
  ],
};
