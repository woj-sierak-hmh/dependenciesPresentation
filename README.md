# dependeciesPresentation
Presentation about node dependencies

Number of dependencies (50):
`$ npm ls --parseable | wc`

Number of lines of code in the app and its all dependencies (50779):
`$ find . -name '*.js' | xargs wc -l`

List of licenses in all depencies of the project (6/7):
`$ npx license-checker --summary`