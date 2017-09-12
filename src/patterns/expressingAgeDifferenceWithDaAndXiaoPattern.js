/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGE8810',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'expressingAgeDifferenceWithDaAndXiao',
  name: 'A + 比 + B + 大 / 小 + number + 岁',
  description: '如果你有兄弟姐妹，中国人常常会问你"他（她）比你小几岁" or "他（她）比你大几岁 "。注意，这里一定不能不用"年轻"或者"老"。',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(比)[^大小]+((?:大|小))[^岁]+(岁)/),
      regexMatchLocs(text, /(跟)[^一样大]+(一样大)/),
    ]);
  },
  examples: [
    {
      zh: '我姐姐比我大两岁。',
      en: 'My sister is two years older than me.',
      src: allSetSrc,
    },
    {
      zh: '你爸爸比妈妈小几岁？',
      en: 'How many years younger than your mom is your dad?',
      src: allSetSrc,
    },
    {
      zh: '他女朋友比他大十岁。',
      en: 'His girlfriend is 10 years older than him.',
      src: allSetSrc,
    },
    {
      zh: '我跟我的中文老师一样大。',
      en: 'My Chinese teacher and I are the same age.',
      src: allSetSrc,
    },
    {
      zh: '我老板很年轻，只比我大三四岁。',
      en: 'My boss is very young. He is only three or four years older than me.',
      src: allSetSrc,
    },
  ],
};