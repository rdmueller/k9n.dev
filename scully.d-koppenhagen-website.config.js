'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var scully_1 = require('@scullyio/scully');
var scully_plugin_sitemap_1 = require('@gammastream/scully-plugin-sitemap');
var scully_plugin_toc_1 = require('scully-plugin-toc');
var SitemapPlugin = scully_plugin_sitemap_1.getSitemapPlugin();
scully_1.setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://d-koppenhagen.de',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: [
    /*'/404'*/
  ],
  routes: {
    '/': {
      changeFreq: 'weekly',
      priority: '1.0',
      sitemapFilename: 'sitemap.xml',
    },
    '/blog/:slug': {
      changeFreq: 'weekly',
      priority: '0.9',
      sitemapFilename: 'sitemap-blog.xml',
    },
    '/projects/:slug': {
      changeFreq: 'weekly',
      priority: '0.8',
      sitemapFilename: 'sitemap-blog.xml',
    },
  },
});
var tocOptions = {
  blogAreaSelector: '.blog-content',
  insertSelector: '#toc',
  level: ['h2', 'h3'],
};
var TocPlugin = scully_plugin_toc_1.getTocPlugin();
scully_1.setPluginConfig(TocPlugin, tocOptions);
exports.config = {
  projectRoot: './src',
  projectName: 'd-koppenhagen-website',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {
    '/projects/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './projects',
      },
    },
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: ['toc'],
      slug: {
        folder: './blog',
      },
    },
  },
};
