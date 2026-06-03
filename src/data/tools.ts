export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: string;
}

export const tools: Tool[] = [
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    description: "Format, validate & beautify JSON instantly.",
    category: "Data",
  },
  {
    name: "JWT Decoder",
    slug: "jwt-decoder",
    description: "Decode and inspect JSON Web Tokens.",
    category: "Security",
  },
  {
    name: "Base64 Encoder",
    slug: "base64",
    description: "Encode and decode Base64 strings.",
    category: "Encoding",
  },
  {
    name: "UUID Generator",
    slug: "uuid-generator",
    description: "Generate random UUIDs in bulk.",
    category: "Generators",
  },
  {
    name: "Cron Builder",
    slug: "cron-builder",
    description: "Build and understand cron expressions.",
    category: "DevOps",
  },
];
