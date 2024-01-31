// Parse the contents to extract keywords and descriptions
const lines = fileContents.split('\n');
const keywordMap = new Map<string, string>();

lines.forEach(line => {
    const [keyword, description] = line.split(':');
    keywordMap.set(keyword.trim(), description.trim());
});
