export default {
  hello: '(ko)안녕하세요(ko)',
  greeting: '다음 모듈로 구성된 프로젝트를 성공적으로 만들었습니다.',
  intro: {
    documentation: {
      head: '문서',
      link1: '공식문서',
      link: `<a href="https://vuejs.org/" target="_blank" rel="noopener">$t(intro.documentation.link1)</a>`,
      content: `뷰의 $t(intro.documentation.link)는 모든 정보와 시작 옵션을 제공합니다`,
    },
    tooling: {
      head: '도구',
      link: `<a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">{{item}}</a>`,
      content: `이 프로젝트는 $t(intro.tooling.link, { 'item': 'Vite' }) 로 번들링되고 served됩니다. 
          추천하는 IDE 셋업은 $t(intro.tooling.link, { 'item': 'VSCode' }) + $t(intro.tooling.link, { 'item': 'Volar' })입니다.<br />
          만약, 웹에서 테스트하고싶으면 $t(intro.tooling.link, { 'item': 'Cypress' }) and
          $t(intro.tooling.link, { 'item': 'Cypress Component Testing' })을 이용하세요.
          
          <br />

          더 많은 정보는 <code>README.md</code>를 보세요.
      `,
    },
    echosystem: {
      head: '에코시스템',
      content:
        '공식 도구와 라이브러리입니다: Pinia, Vue Router, Vue Test Utils, Vue Dev Tools. 더 많은 리소스를 원한다면, Awesome Vue를 방문해보세요.',
    },
  },
};

const json = {
  hello: '(ko)안녕하세요(ko)',
  greeting: '다음 모듈로 구성된 프로젝트를 성공적으로 만들었습니다.',
  intro: {
    documentation: {
      head: '문서',
      link1: '공식문서',
      link: "<a href='https://vuejs.org/' target='_blank' rel='noopener'>$t(intro.documentation.link1)</a>",
      content:
        '뷰의 $t(intro.documentation.link)는 모든 정보와 시작 옵션을 제공합니다',
    },
    tooling: {
      head: '도구',
      link: '<a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">{{item}}</a>',
      content:
        "이 프로젝트는 $t(intro.tooling.link, { 'item': 'Vite' }) 로 번들링되고 served됩니다." +
        "추천하는 IDE 셋업은 $t(intro.tooling.link, { 'item': 'VSCode' }) + $t(intro.tooling.link, { 'item': 'Volar' })입니다.<br />" +
        "만약, 웹에서 테스트하고싶으면 $t(intro.tooling.link, { 'item': 'Cypress' }) and" +
        "$t(intro.tooling.link, { 'item': 'Cypress Component Testing' })을 이용하세요." +
        '<br />' +
        '더 많은 정보는 <code>README.md</code>를 보세요.',
    },
    echosystem: {
      head: '에코시스템',
      content:
        '공식 도구와 라이브러리입니다: Pinia, Vue Router, Vue Test Utils, Vue Dev Tools. 더 많은 리소스를 원한다면, Awesome Vue를 방문해보세요.',
    },
  },
};
