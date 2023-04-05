# leetcode-js
Collection of leetcode, codewars, etc done in Javascript. See other leetcode-* repos for answers in other languages.

## Testing
There are currently 4 test scripts to choose from:

1. `test` - accepts a target directory to look for `*.test.js` files.
2. `test:watch` - same as `test:target` but runs with `--watch` flag.
3. `test:codewars` - runs all tests in the codewars folder.
4. `test:leetcode` - runs all tests in the leetcode folder.

### Examples

**Run tests for sum-arrays**
```bash
pnpm run test codewars/8kyu/sum-arrays
```
**Watch tests for sum-arrays**
```bash
pnpm run test:watch codewars/8kyu/sum-arrays
```
**Run all tests in leetcode folder**
```bash
pnpm run test:leetcode
```
**Run all tests in 8kyu folder**
```bash
pnpm run test codewars/8kyu
```
