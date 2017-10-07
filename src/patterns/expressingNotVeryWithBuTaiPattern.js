/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGUNMHU',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'expressingNotVeryWithBuTai',
  name: 'Subj. + 不太 + Adj.',
  description:
    'You may be familiar with using 太 (tài) to express "too," such as when something is "too expensive" or "too hot." 不太 (bù tài) is a similar pattern for the negative, which just means "not very" or "not so" (literally "not too").  Note that this pattern does not normally use 了 (le).',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(不太)/)]);
  },
  examples: [
    {
      zh: '我家不太大。',
      en: 'My house is not too big.',
      src: allSetSrc,
    },
    {
      zh: '那个地方不太远。',
      en: 'That place is not very far away.',
      src: allSetSrc,
    },
    {
      zh: '老板今天不太高兴。',
      en: 'The boss is not very happy today.',
      src: allSetSrc,
    },
    {
      zh: '这个店的衣服不太贵。',
      en: 'The clothes in this shop are not too expensive.',
      src: allSetSrc,
    },
    {
      zh: '我觉得他不太聪明。',
      en: 'I think he is not too smart.',
      src: allSetSrc,
    },
    {
      zh: '我不太懂。',
      en: "I don't really understand.",
      src: allSetSrc,
    },
    {
      zh: '他们不太想去。',
      en: "They don't really want to go.",
      src: allSetSrc,
    },
    {
      zh: '我哥哥不太喜欢他的工作。',
      en: "My older brother doesn't really like his job.",
      src: allSetSrc,
    },
    {
      zh: '他不太明白老板的意思。',
      en: "He didn't really understand what the boss meant.",
      src: allSetSrc,
    },
  ],
};