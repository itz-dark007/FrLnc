import { defineConfig } from 'astro/config';

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'FrLnc';

export default defineConfig({
  site: 'https://itz-dark007.github.io',
  base: isGitHubPagesBuild ? `/${repositoryName}` : '/',
});
