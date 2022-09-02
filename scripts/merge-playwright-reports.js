const { mergeHTMLReports } = require('playwright-merge-html-reports');

console.log('Merging reports...');

const reportDirName = '/playwright-report';

mergeHTMLReports([
  process.cwd() + `${reportDirName}-1/`,
  process.cwd() + `${reportDirName}-2/`,
  process.cwd() + `${reportDirName}-3/`,
]).then(console.log('Reports merged!'));
