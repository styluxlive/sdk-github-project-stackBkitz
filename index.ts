import sdk from '@stackblitz/sdk';

import './styles.css';

type Repo = { github: string; openFile: string };

const REPOS: Record<string, Repo> = {
  angular: {
    github: 'gothinkster/angular-realworld-example-app',
    openFile: 'README.md',
  },
  vite: {
    github: 'vitejs/vite/tree/main/packages/create-vite/template-vanilla',
    openFile: 'index.html',
  },
};

let selectedRepo: Repo = REPOS.angular;

/**
 * Embed the project
 */
async function embedProject() {
  sdk.embedGithubProject('embed', selectedRepo.github, {
    height: 400,
    openFile: selectedRepo.openFile,
  });
}

/**
 * Open the project in a new window on StackBlitz
 */
function openProject() {
  sdk.openGithubProject(selectedRepo.github, {
    openFile: selectedRepo.openFile,
  });
}

function setRepo(element: HTMLSelectElement) {
  selectedRepo = REPOS[element.value];
  // if already embedded, update the embed
  if (document.getElementById('embed')?.nodeName === 'IFRAME') {
    embedProject();
  }
}

(window as any).demo = {
  embedProject,
  openProject,
  setRepo,
};
