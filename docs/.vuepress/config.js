module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            {
              text: 'Languages',
              items: [
                { text: 'Chinese', link: '/language/chinese' },
                { text: 'Japanese', link: '/language/japanese' }
              ]
            }
          ],
          sidebar: [
            '/',
            ['/app','App']
          ]
      }
  }