export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: string;
}

export const tools: Tool[] = [
  {
    name: 'JSON Formatter',
    slug: 'json-formatter',
    description: 'Format, validate & beautify JSON instantly.',
    category: 'Data',
  },
  {
    name: 'JWT Decoder',
    slug: 'jwt-decoder',
    description: 'Decode and inspect JSON Web Tokens.',
    category: 'Security',
  },
  {
    name: 'Base64 Encoder',
    slug: 'base64',
    description: 'Encode and decode Base64 strings.',
    category: 'Encoding',
  },
  {
    name: 'UUID Generator',
    slug: 'uuid-generator',
    description: 'Generate random UUIDs in bulk.',
    category: 'Generators',
  },
  {
    name: 'Cron Builder',
    slug: 'cron-builder',
    description: 'Build and understand cron expressions.',
    category: 'DevOps',
  },
  {
    name: 'HTML Minifier',
    slug: 'html-minifier',
    description: 'Minify and compress HTML code instantly.',
    category: 'Code',
  },
  {
    name: 'CSS Minifier',
    slug: 'css-minifier',
    description: 'Minify and compress CSS stylesheets.',
    category: 'Code',
  },
  {
    name: 'JavaScript Minifier',
    slug: 'js-minifier',
    description: 'Minify and compress JavaScript code.',
    category: 'Code',
  },
  {
    name: 'Diff Checker',
    slug: 'diff-checker',
    description: 'Compare two texts and highlight differences.',
    category: 'Text',
  },
  {
    name: 'Regex Tester',
    slug: 'regex-tester',
    description: 'Test regular expressions with live matching.',
    category: 'Text',
  },
  {
    name: 'Color Converter',
    slug: 'color-converter',
    description: 'Convert colors between HEX, RGB, HSL and more.',
    category: 'Design',
  },
  {
    name: 'URL Encoder / Decoder',
    slug: 'url-encoder',
    description: 'Encode and decode URL strings instantly.',
    category: 'Encoding',
  },
  {
    name: 'HTML Entity Converter',
    slug: 'html-entity-converter',
    description: 'Encode and decode HTML entities.',
    category: 'Encoding',
  },
  {
    name: 'Case Converter',
    slug: 'case-converter',
    description: 'Convert text between camelCase, snake_case, kebab-case and more.',
    category: 'Text',
  },
  {
    name: 'Hash Generator',
    slug: 'hash-generator',
    description: 'Generate MD5, SHA1, SHA256 and SHA512 hashes.',
    category: 'Security',
  },
  {
    name: 'Timestamp Converter',
    slug: 'timestamp-converter',
    description: 'Convert Unix timestamps to human-readable dates and back.',
    category: 'DevOps',
  },
  {
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum-generator',
    description: 'Generate placeholder text for your designs.',
    category: 'Generators',
  },
  {
    name: 'Number Base Converter',
    slug: 'number-base-converter',
    description: 'Convert numbers between binary, octal, decimal and hex.',
    category: 'Math',
  },
  {
    name: 'Password Generator',
    slug: 'password-generator',
    description: 'Generate strong, secure random passwords.',
    category: 'Security',
  },
  {
    name: 'Word Counter',
    slug: 'word-counter',
    description: 'Count characters, words, sentences and paragraphs.',
    category: 'Text',
  },
  {
    name: 'JSON to CSV Converter',
    slug: 'json-to-csv',
    description: 'Convert JSON data to CSV and CSV back to JSON.',
    category: 'Data',
  },
  {
    name: 'CSS Gradient Generator',
    slug: 'css-gradient-generator',
    description: 'Create beautiful CSS gradients with a visual builder.',
    category: 'Design',
  },
  {
    name: 'Text Replacer',
    slug: 'text-replacer',
    description: 'Find and replace text with optional regex support.',
    category: 'Text',
  },
  {
    name: 'Markdown Preview',
    slug: 'markdown-preview',
    description: 'Write Markdown and see the rendered HTML preview.',
    category: 'Code',
  },
  {
    name: 'SQL Formatter',
    slug: 'sql-formatter',
    description: 'Format and beautify SQL queries instantly.',
    category: 'DevOps',
  },
];
