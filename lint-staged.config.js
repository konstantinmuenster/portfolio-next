module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run check-types',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `npm run lint --fix ${filenames.join(' ')}`,
    `npm run format --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|mdx|json)': filenames =>
    `npm run format --write ${filenames.join(' ')}`,
};
