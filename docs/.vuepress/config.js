module.exports = {
  title: "Random.icu Docs",
  description: "Documentation for Random.icu API",
  evergreen: true,

  markdown: {
    lineNumbers: false
  },

  themeConfig: {
    navbar: true,
    nav: [
      { text: 'Home', link: 'https://random.icu' },
      { text: 'Github', link: 'https://github.com/randomicu' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/external/', 'External'],
      ['/sentence/', 'Sentence'],
      ['/contribute', 'Contribute']
    ],
    lastUpdated: 'Last updated',
    searchPlaceholder: 'Search...',
    
    docsRepo: 'pythoninja/randomicu-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit on Github'
  }
}
