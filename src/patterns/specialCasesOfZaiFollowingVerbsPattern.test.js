/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const specialCasesOfZaiFollowingVerbsPattern = require('./specialCasesOfZaiFollowingVerbsPattern');
const { assertAllExamplesMatch, assertNoneMatch } = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(specialCasesOfZaiFollowingVerbsPattern);
});

// TODO: Add more tests

test("doesn't match negative examples", async () => {
  await assertNoneMatch(
    specialCasesOfZaiFollowingVerbsPattern,
    [
      // TODO: add negative examples here
    ]
  );
});