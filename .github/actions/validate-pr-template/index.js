"use strict";

const parsePullRequestId = githubRef => {
  const result = /refs\/pull\/(\d+)\/merge/g.exec(githubRef);
  if (!result) throw new Error("Reference not found.");
  const [, pullRequestId] = result;
  return pullRequestId;
};

const main = async () => {
  const pullRequestId = parsePullRequestId(process.env.GITHUB_REF);
  console.log(pullRequestId);
};

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
