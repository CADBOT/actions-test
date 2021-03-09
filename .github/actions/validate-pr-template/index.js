"use strict";

/*
const parsePullRequestId = githubRef => {
  const result = /refs\/pull\/(\d+)\/merge/g.exec(githubRef);
  if (!result) throw new Error("Reference not found.");
  const [, pullRequestId] = result;
  return pullRequestId;
};
*/
/*
const fs = require('fs')
const ev = JSON.parse(
  fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')
)
console.log('ev', ev);
const prNum = ev.pull_request.number
console.log('PRNum', prNum);
*/

function parsePullRequestId(githubRef) {
  console.log(githubRef);
  const result = /refs\/pull\/(\d+)\/merge/g.exec(githubRef);
  console.log('result: ', result);
  if (!result) throw new Error("Reference not found.");
  const [, pullRequestId] = result;
  return pullRequestId;
}

const main = () => {
  console.log('github ref: ', process.env.GITHUB_REF);
  console.log('-----');
  const pullRequestId = parsePullRequestId(process.env.GITHUB_REF);
  console.log('prid: ', pullRequestId);
};

main();
