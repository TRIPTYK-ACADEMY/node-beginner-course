const KeywordsExtractor = require('keyword-extractor');
try {
  const text = 'This is an string wich contains some words. Each word build the string, and the string is nothing without words.';
  const extract = KeywordsExtractor.extract(text, {
    language: 'english',
    remove_duplicates: false
  });
  console.log(extract);
}
catch(e) { e.message; };