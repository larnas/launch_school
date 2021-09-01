// Similar to the previous exercise, now write a function that extracts the region code from a locale.

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}