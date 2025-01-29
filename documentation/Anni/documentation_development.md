JSDoc installed

JSDoc comment Type hints:
{Promise<void>} = async method with no return value

{import('...')} = imported type definition (helps IDEs understand Playwright types)


in json, under "scripts" added:
     "generate-docs": "jsdoc -c jsdoc.json -r tests/pageObjects/ -R README.md"