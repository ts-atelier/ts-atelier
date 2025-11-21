export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    /**
     * This defines the commit types allowed on this repository.
     *
     * feat: Use this for commit that are new feature implementation
     * chore: For house-keeping commits
     * fix: Use this for bug fix
     * infra: Use this for commit that update infrastructure code
     * docs: Use this for commit that only add documentation
     * refactor: Use this for refactoring commits
     * test: Use this when only adding tests
     * revert: Use this when reverting a commit (Remember to include the reverted commit hash. Git does it for you via git revert)
     * ci: Use this when updating Continuous Integration code
     * config: Use this when updating the overall repository configurations
     *
     */
    'type-enum': [
      2,
      'always',
      ['feat', 'chore', 'fix', 'docs', 'style', 'infra', 'refactor', 'test', 'revert', 'ci', 'config']
    ],
    'subject-case': [1, 'always', ['sentence-case']],
    'body-max-line-length': [2, 'always', 200]
  },
  ignores: [commit => commit === '']
};
