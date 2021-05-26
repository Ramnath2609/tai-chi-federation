# TAI CHI FEDERATION OF INDIA

Tai Chi Chuan also called Taijiquan is considered to be the oldest martial art in China. It is in also the effective way to maintain good health. It is an ancient Chinese form of relaxed body movements believed to be created by Royal Physician of the Chinese Emperor more than 1,300 years ago. It legend backed by Chinese folk. There is no authentic historical documentary evidence. But one thing is certain. It was originally conceived as a health system. Taichi was accredited to a Taoist monk named Zhang San Feng as its creator. Taichi was later developed into a martial art by his disciples.

### Setup Development Environment

```sh
# install dependent packages
yarn
# start development server
yarn start
# production build
yarn run build
```
### Branching Guidelines


**master** - is the main branch that contains production ready code. Direct merge to this branch is prohibited

**development** - is the main branch that reflects code for the latest delivered development changes ready for next release

**feature-${FEATURE-NAME}** - is the main branch for any new feature development that would be created from "dev" branch. Once the feature development is complete, the code will be merged back to "dev" branch through only pull request. 

**bug-${FEATURE-NAME}** - is the main branch for any new bug fixing that would be created from any of "master" or "dev" or "release" branches. Once the bux fixing is complete, the code will be merged back to the source branch through only pull request. 

Following naming conventions should be strictly followed for the new branches.

1. All branch names must be lower in case
2. If new feature to be developed, then a new branch must be created from "dev" branch with naming convention "feature-${feature-name}".
3. Bugs should be fixed in a separate branch and naming convention of such branches must be "bugfix-${bug-name}".
4. Pull requests must be raised to move feature or bug fixes to production
