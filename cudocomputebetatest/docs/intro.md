---
sidebar_position: 1
slug: /
---

# Introduction

This demo site was built with [Docusaurus](https://docusaurus.io/), [Redocusaurus](https://github.com/rohit-gohri/redocusaurus) and [Netlify](https://www.netlify.com/). 

:::info
This site is just a prototype framework built to try out these tools. There is no content other than this page and the API specifications.
:::

## git
Create a repository on your machine, and push it up to github.

## Docusaurus
Docusaurus renders markdown into HTML. It builds your site as a [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) on your local machine, which enables you to see your edits rendered in realtime. The site is configured with the `docusaurus.config.js` as and `sidebars.js` files. This requires some basic Javascript knowledge, especially how to create and edit arrays and objects.

Docusaurus was installed and deployed following [these instructions](https://docusaurus.io/docs/deployment).

## Netlify
Netlify publishes your site from git. Creating a new site in Netlify using the **New Site From Git** option integrates Netlify with your git repository. This means that when you push a branch to remote (hence creating a PR) you will see Netlify checks and previews in the PR's Conversation tab in git. Clicking on the deploy preview will show you the site as it is going to be published. 

## Redocusaurus
This tool consumes OpenApi spec 3.0 `yaml` files and renders them into your docusaurus site. I have included a couple of example specifications. [Follow these instructions](https://github.com/rohit-gohri/redocusaurus/tree/main/packages/redocusaurus) to import an OAS file into your site using Redocusaurus. It is based on [Redoc](https://redocly.com/), but specifically for Docusaurus.

:::note
In order to display the link to the specs in the sidebar, I had to manually force the URLs using type 'link' rather than type 'file' [see instructions](https://github.com/rohit-gohri/redocusaurus/tree/main/packages/redocusaurus). 
:::


