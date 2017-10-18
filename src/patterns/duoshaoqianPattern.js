/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGL6JOE',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'duoshaoqian',
  name: 'Subj. + 多少钱 ?',
  description:
    'Cash is king, even though China is now crazy for mobile payments. Either way, though, mastering how to say quantities of money is vital!',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([
      regexMatchLocs(sentence.text, /(多少钱)/),
      regexMatchLocs(
        sentence.text,
        /[零一二三四五六七八九十百千万亿两0-9]+(块)[零一二三四五六七八九十百千万亿两0-9]*(毛)?/
      ),
    ]),
  examples: [
    {
      zh: '多少钱？',
      en: 'How much?',
      src: allSetSrc,
    },
    {
      zh: '你的手机多少钱？',
      en: 'How much was your cell phone?',
      src: allSetSrc,
    },
    {
      zh: '我们的午饭多少钱？',
      en: 'How much is our lunch?',
      src: allSetSrc,
    },
    {
      zh: '这杯咖啡多少钱？',
      en: 'How much for this cup of coffee?',
      src: allSetSrc,
    },
    {
      zh: '这件衣服多少钱？',
      en: 'How much is this clothing?',
      src: allSetSrc,
    },
    {
      zh: '两块五毛',
      en: 'two kuai five mao (2.5)',
      src: allSetSrc,
    },
    {
      zh: '三块八毛',
      en: 'three kuai eight mao (3.8)',
      src: allSetSrc,
    },
    {
      zh: '十块两毛',
      en: 'ten kuai two mao (10.2)',
      src: allSetSrc,
    },
    {
      zh: '二十三块八毛',
      en: 'Twenty-three kuai eight mao (23.8)',
      src: allSetSrc,
    },
    {
      zh: '五十块五毛',
      en: 'fifty kuai five mao (50.5)',
      src: allSetSrc,
    },
    {
      zh: '两块五',
      en: 'two kuai five mao (2.5)',
      src: allSetSrc,
    },
    {
      zh: '两块二',
      en: 'two kuai two mao (2.2)',
      src: allSetSrc,
    },
    {
      zh: '五块二',
      en: 'five kuai two mao (5.2)',
      src: allSetSrc,
    },
    {
      zh: '三块八毛六',
      en: 'three kuai eight mao six fen (3.86)',
      src: allSetSrc,
    },
    {
      zh: '三块',
      en: 'Three kuai',
      src: allSetSrc,
    },
  ],
};