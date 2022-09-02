const { mergeHTMLReports } = require('playwright-merge-html-reports');

console.log('Merging reports...');

const reportDirName = '/playwright-report'
const reportFileName = 'index.html'

mergeHTMLReports(
  [
    process.cwd() + `${reportDirName}-1/${reportFileName}`,
    process.cwd() + `${reportDirName}-2/${reportFileName}`,
    process.cwd() + `${reportDirName}-3/${reportFileName}`,
  ],
  {
    outputFolderName: 'merged-html-report', // default value
    outputBasePath: process.cwd(), // default value
  }
);

console.log('Reports merged!');