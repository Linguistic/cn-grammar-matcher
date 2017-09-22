/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGF00B7',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'huxiang',
  name: '互相 + Verb',
  description:
    'When some action is mutual, you can use the word 互相 (hùxiāng). The word "mutual" feels formal in English, but in Chinese even everyday phrases such as "learn from each other" use the word 互相, which expresses this "each other" aspect.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(互相)/)]);
  },
  examples: [
    {
      zh: '互相帮助',
      en: 'Help each other',
      src: allSetSrc,
    },
    {
      zh: '互相了解',
      en: 'Know each other',
      src: allSetSrc,
    },
    {
      zh: '互相伤害',
      en: 'Hurt each other',
      src: allSetSrc,
    },
    {
      zh: '互相尊重',
      en: 'Respect each other',
      src: allSetSrc,
    },
    {
      zh: '互相支持',
      en: 'Support each other',
      src: allSetSrc,
    },
    {
      zh: '互相鼓励',
      en: 'Encourage each other',
      src: allSetSrc,
    },
    {
      zh: '互相影响',
      en: 'Influence each other',
      src: allSetSrc,
    },
    {
      zh: '互相利用',
      en: 'Take advantage of each other',
      src: allSetSrc,
    },
    {
      zh: '互相看了一眼',
      en: 'glanced at each other',
      src: allSetSrc,
    },
  ],
};
