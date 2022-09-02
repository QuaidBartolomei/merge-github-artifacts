const { mergeHTMLReports } = require('playwright-merge-html-reports');
const fs = require('fs');
const path = require('path');

async function main() {
  const reportDirName = '/playwright-report';
  const outputDirName = 'merged-playwright-report';

  console.log('Merging reports...');
  await mergeHTMLReports(
    [
      path.join(process.cwd(), reportDirName + '-1/'),
      path.join(process.cwd(), reportDirName + '-2/'),
      // process.cwd() + `${reportDirName}-3/`,
    ],
    {
      outputFolderName: outputDirName,
    }
  );
  console.log('Reports merged!');
}

main();
