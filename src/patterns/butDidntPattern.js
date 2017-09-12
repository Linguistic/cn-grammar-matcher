/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG6ESWW',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'butDidnt',
  name: 'Subj. + 差点(儿) + [Verb Phrase] + 了',
  description:
    "To say that something bad almost happened (but didn't), you can add the word 差点 (chàdiǎn) before the verb.  You will also hear 差点儿 (chàdiǎnr) in northern China.  There is no difference in meaning between 差点 and 差点儿.",
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(差点儿?)[^了]+(了)?/)]);
  },
  examples: [
    {
      zh: '我差点忘了。',
      en: 'I almost forgot.',
      src: allSetSrc,
    },
    {
      zh: '他们差点就分手了。',
      en: 'They almost break up.',
      src: allSetSrc,
    },
    {
      zh: '我们队差点儿就输了。',
      en: 'Our team almost lost.',
      src: allSetSrc,
    },
    {
      zh: '他们差点打起来。',
      en: 'They almost started a fight.',
      src: allSetSrc,
    },
    {
      zh: '这个东西差点就丢了。',
      en: 'I almost lost the thing.',
      src: allSetSrc,
    },
    {
      zh: '路上堵车，我差点儿就迟到了。',
      en: 'The traffic is bad; I was almost late.',
      src: allSetSrc,
    },
    {
      zh: '我差点犯了一个大错。',
      en: 'I nearly made a big mistake.',
      src: allSetSrc,
    },
    {
      zh: '车差点撞到我。',
      en: 'The car almost hit me.',
      src: allSetSrc,
    },
    {
      zh: '我差点笑出来。',
      en: 'I almost laughed.',
      src: allSetSrc,
    },
    {
      zh: '我们差点儿错过最后一班地铁。',
      en: 'We almost missed the last metro.',
      src: allSetSrc,
    },
  ],
};