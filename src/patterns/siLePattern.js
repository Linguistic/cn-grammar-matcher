/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGLEVUV',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'siLe',
  name: '(Subj. +) Negative Adj. + 死了',
  description:
    'In English, you might use the expression "you scared me to death!" In Chinese,  死了 (sǐ le) is used similarly to intensify an adjective with an unpleasant connotation.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(死了)/)]);
  },
  examples: [
    {
      zh: '我饿死了。',
      en: "I'm starving!",
      src: allSetSrc,
    },
    {
      zh: '今天累死了。',
      en: 'Today was so exhausting!',
      src: allSetSrc,
    },
    {
      zh: '热死了！',
      en: "It's ridiculously hot!",
      src: allSetSrc,
    },
    {
      zh: '这几天忙死了。',
      en: "It's been so terribly busy these days!",
      src: allSetSrc,
    },
    {
      zh: '这件衣服丑死了。',
      en: 'This clothing is totally hideous!',
      src: allSetSrc,
    },
    {
      zh: '你的房间脏死了。',
      en: 'Your room is absolutely filthy!',
      src: allSetSrc,
    },
    {
      zh: '吵死了！',
      en: "It's so terribly noisy!",
      src: allSetSrc,
    },
    {
      zh: '这里的东西贵死了。',
      en: 'The things here are criminally expensive!',
      src: allSetSrc,
    },
    {
      zh: '我们都急死了。',
      en: 'We are all so terribly anxious!',
      src: allSetSrc,
    },
    {
      zh: '这个孩子烦死了。',
      en: 'This kid is so freaking annoying!',
      src: allSetSrc,
    },
    {
      zh: '哇，可爱死了！',
      en: 'OMG, adorbs!',
      src: allSetSrc,
    },
    {
      zh: '漂亮死了！',
      en: 'Drop-dead gorgeous!',
      src: allSetSrc,
    },
    {
      zh: '这个蛋糕好吃死了。',
      en: 'This cake is to die for!',
      src: allSetSrc,
    },
  ],
};
