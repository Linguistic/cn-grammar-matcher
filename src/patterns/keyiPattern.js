/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG6SPYK',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'keyi',
  name: 'Subj. + 可以 + Verb + Obj.',
  description:
    '可以 (kěyǐ) is an auxiliary verb primarily used for expressing permission. It\'s often translated as "can," but in order to not get it confused with other words, it\'s best to think of it as "may" to emphasize the permission aspect.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(可以)/)]);
  },
  examples: [
    {
      zh: '我可以进来吗？',
      en: 'May I come in?',
      src: allSetSrc,
    },
    {
      zh: '二十一岁以后可以喝酒。',
      en: 'After you are 21 years old, you may drink alcohol.',
      src: allSetSrc,
    },
    {
      zh: '妈妈，我可以出去玩吗？',
      en: 'Mom, may I go out and play?',
      src: allSetSrc,
    },
    {
      zh: '我们可以在办公室吃饭吗？',
      en: 'Can we eat in the office?',
      src: allSetSrc,
    },
    {
      zh: '我可以在这里停车吗？',
      en: 'Can I park here?',
      src: allSetSrc,
    },
    {
      zh: '孩子不可以看这个。',
      en: "Children can't watch this.",
      src: allSetSrc,
    },
    {
      zh: '你现在不可以进去。',
      en: "You can't go in right now.",
      src: allSetSrc,
    },
    {
      zh: '这里不可以抽烟。',
      en: "You can't smoke here.",
      src: allSetSrc,
    },
    {
      zh: '我们都不可以去。',
      en: 'None of us may go.',
      src: allSetSrc,
    },
    {
      zh: '你不可以说脏话。',
      en: "You can't say swear words.",
      src: allSetSrc,
    },
  ],
};
