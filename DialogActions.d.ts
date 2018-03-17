





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-6caac13806331f9675860df98a99b39a.css" />
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-c4d5af25254cfc8bb30ae5cb6f074c97.css" />
  
  
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-83dc1f7ebc9c7461fe1eab799b56c4c4.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>material-ui/DialogActions.d.ts at c70b518cca49d31d06da29da2a5ed42ff9fee255 · mui-org/material-ui · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 27 million people use GitHub to discover, fork, and contribute to over 80 million projects.">
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/33663932?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="mui-org/material-ui" /><meta property="og:url" content="https://github.com/mui-org/material-ui" /><meta property="og:description" content="material-ui - React components that implement Google&#39;s Material Design." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="FC79:752F:D6612C:1901C82:5AAB36C1" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="FC79:752F:D6612C:1901C82:5AAB36C1" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="hydro-events-url" content="https://github.com/hydro_browser_events" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MGI1MDc4OTUyYjUzYTkxNjJlNzIwMGI0ZDA1ZmJhMjBiNDQ4ODE1OTBmMjU3N2RlZThmNDc0NDA2ZmFkNDZhZHx7InJlbW90ZV9hZGRyZXNzIjoiMjA4LjU0LjgwLjIxOCIsInJlcXVlc3RfaWQiOiJGQzc5Ojc1MkY6RDY2MTJDOjE5MDFDODI6NUFBQjM2QzEiLCJ0aW1lc3RhbXAiOjE1MjExNzAxMTMsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="ddeb9ee733133e8d4a29d71b5aaeef0c08662bac">

  <meta http-equiv="x-pjax-version" content="7524d712737433494c84e5354fea1ca5">
  

      <link href="https://github.com/mui-org/material-ui/commits/c70b518cca49d31d06da29da2a5ed42ff9fee255.atom" rel="alternate" title="Recent Commits to material-ui:c70b518cca49d31d06da29da2a5ed42ff9fee255" type="application/atom+xml">

  <meta name="description" content="material-ui - React components that implement Google&#39;s Material Design.">
  <meta name="go-import" content="github.com/mui-org/material-ui git https://github.com/mui-org/material-ui.git">

  <meta name="octolytics-dimension-user_id" content="33663932" /><meta name="octolytics-dimension-user_login" content="mui-org" /><meta name="octolytics-dimension-repository_id" content="23083156" /><meta name="octolytics-dimension-repository_nwo" content="mui-org/material-ui" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="23083156" /><meta name="octolytics-dimension-repository_network_root_nwo" content="mui-org/material-ui" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/mui-org/material-ui/blob/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scoped-search-url="/mui-org/material-ui/search" data-unscoped-search-url="/search" action="/mui-org/material-ui/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a class="header-search-scope no-underline" href="/mui-org/material-ui/blob/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fmui-org%2Fmaterial-ui%2Fblob%2Fc70b518cca49d31d06da29da2a5ed42ff9fee255%2Fsrc%2FDialog%2FDialogActions.d.ts" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main"
      class="application-main "
      >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      





  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fmui-org%2Fmaterial-ui"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/mui-org/material-ui/watchers"
     aria-label="1190 users are watching this repository">
    1,190
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmui-org%2Fmaterial-ui"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/mui-org/material-ui/stargazers"
      aria-label="34015 users starred this repository">
      34,015
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmui-org%2Fmaterial-ui"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/mui-org/material-ui/network" class="social-count"
       aria-label="6220 users forked this repository">
      6,220
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/mui-org">mui-org</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/mui-org/material-ui">material-ui</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /mui-org/material-ui" href="/mui-org/material-ui">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /mui-org/material-ui/issues" href="/mui-org/material-ui/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">133</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /mui-org/material-ui/pulls" href="/mui-org/material-ui/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">13</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /mui-org/material-ui/pulse" href="/mui-org/material-ui/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/mui-org/material-ui/blob/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:a83da9a8787735dfb867324ff253fef8 -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Tree:</i>
      <span class="js-select-button css-truncate-target">c70b518cca</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mui-org/material-ui/blob/master/src/Dialog/DialogActions.d.ts"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mui-org/material-ui/blob/v1-beta/src/Dialog/DialogActions.d.ts"
               data-name="v1-beta"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v1-beta
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.37/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.37"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.37">
                v1.0.0-beta.37
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.36/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.36"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.36">
                v1.0.0-beta.36
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.35/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.35"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.35">
                v1.0.0-beta.35
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.34/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.34"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.34">
                v1.0.0-beta.34
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.33/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.33"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.33">
                v1.0.0-beta.33
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.32/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.32"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.32">
                v1.0.0-beta.32
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.31/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.31"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.31">
                v1.0.0-beta.31
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.30/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.30"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.30">
                v1.0.0-beta.30
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.29/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.29"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.29">
                v1.0.0-beta.29
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.28/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.28"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.28">
                v1.0.0-beta.28
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.27/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.27">
                v1.0.0-beta.27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.26/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.26"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.26">
                v1.0.0-beta.26
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.25/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.25"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.25">
                v1.0.0-beta.25
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.24/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.24"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.24">
                v1.0.0-beta.24
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.23/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.23"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.23">
                v1.0.0-beta.23
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.22/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.22">
                v1.0.0-beta.22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.21/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.21">
                v1.0.0-beta.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.20/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.20">
                v1.0.0-beta.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.19/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.19">
                v1.0.0-beta.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.18/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.18">
                v1.0.0-beta.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.17/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.17">
                v1.0.0-beta.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.16/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.16">
                v1.0.0-beta.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.15/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.15">
                v1.0.0-beta.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.13/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.13">
                v1.0.0-beta.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.12/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.12">
                v1.0.0-beta.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.11/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.11">
                v1.0.0-beta.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.10/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.10">
                v1.0.0-beta.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.9/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.9">
                v1.0.0-beta.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.8/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.8">
                v1.0.0-beta.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.7/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.7">
                v1.0.0-beta.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.6/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.6">
                v1.0.0-beta.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.5/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.5">
                v1.0.0-beta.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.4/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.4">
                v1.0.0-beta.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.3/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.3">
                v1.0.0-beta.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.2/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.2">
                v1.0.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-beta.1/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.1">
                v1.0.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.22/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.22">
                v1.0.0-alpha.22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.21/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.21">
                v1.0.0-alpha.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.20/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.20">
                v1.0.0-alpha.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.19/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.19">
                v1.0.0-alpha.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.18/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.18">
                v1.0.0-alpha.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.17/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.17">
                v1.0.0-alpha.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.16/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.16">
                v1.0.0-alpha.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.15/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.15">
                v1.0.0-alpha.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.14/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.14">
                v1.0.0-alpha.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.13/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.13">
                v1.0.0-alpha.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.12/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.12">
                v1.0.0-alpha.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.11/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.11">
                v1.0.0-alpha.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.10/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.10">
                v1.0.0-alpha.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.9/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.9">
                v1.0.0-alpha.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.8/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.8">
                v1.0.0-alpha.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.7/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.7">
                v1.0.0-alpha.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.6/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.6">
                v1.0.0-alpha.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.5/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.5">
                v1.0.0-alpha.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.4/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.4">
                v1.0.0-alpha.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.3/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.3">
                v1.0.0-alpha.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.2/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.2">
                v1.0.0-alpha.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v1.0.0-alpha.1/src/Dialog/DialogActions.d.ts"
              data-name="v1.0.0-alpha.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-alpha.1">
                v1.0.0-alpha.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.20.0/src/Dialog/DialogActions.d.ts"
              data-name="v0.20.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.20.0">
                v0.20.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.19.4/src/Dialog/DialogActions.d.ts"
              data-name="v0.19.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.19.4">
                v0.19.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.19.3/src/Dialog/DialogActions.d.ts"
              data-name="v0.19.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.19.3">
                v0.19.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.19.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.19.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.19.2">
                v0.19.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.19.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.19.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.19.1">
                v0.19.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.19.0/src/Dialog/DialogActions.d.ts"
              data-name="v0.19.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.19.0">
                v0.19.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.7/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.7">
                v0.18.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.6/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.6">
                v0.18.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.5/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.5">
                v0.18.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.4/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.4">
                v0.18.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.3/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.3">
                v0.18.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.2">
                v0.18.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.1">
                v0.18.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.18.0/src/Dialog/DialogActions.d.ts"
              data-name="v0.18.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.18.0">
                v0.18.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.17.4/src/Dialog/DialogActions.d.ts"
              data-name="v0.17.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.4">
                v0.17.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.17.3/src/Dialog/DialogActions.d.ts"
              data-name="v0.17.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.3">
                v0.17.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.17.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.17.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.2">
                v0.17.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.17.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.17.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.1">
                v0.17.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.17.0/src/Dialog/DialogActions.d.ts"
              data-name="v0.17.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.17.0">
                v0.17.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.7/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.7">
                v0.16.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.6/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.6">
                v0.16.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.5/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.5">
                v0.16.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.4/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.4">
                v0.16.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.3/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.3">
                v0.16.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.2">
                v0.16.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.1">
                v0.16.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.0/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.0">
                v0.16.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.0-rc2/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.0-rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.0-rc2">
                v0.16.0-rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.16.0-rc1/src/Dialog/DialogActions.d.ts"
              data-name="v0.16.0-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.16.0-rc1">
                v0.16.0-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.4/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.4">
                v0.15.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.3/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.3">
                v0.15.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.2">
                v0.15.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.1">
                v0.15.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.0/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.0">
                v0.15.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.0-beta.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.0-beta.2">
                v0.15.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.0-beta.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.0-beta.1">
                v0.15.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.0-alpha.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.0-alpha.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.0-alpha.2">
                v0.15.0-alpha.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.15.0-alpha.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.15.0-alpha.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.15.0-alpha.1">
                v0.15.0-alpha.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.14.4/src/Dialog/DialogActions.d.ts"
              data-name="v0.14.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.14.4">
                v0.14.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.14.3/src/Dialog/DialogActions.d.ts"
              data-name="v0.14.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.14.3">
                v0.14.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.14.2/src/Dialog/DialogActions.d.ts"
              data-name="v0.14.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.14.2">
                v0.14.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mui-org/material-ui/tree/v0.14.1/src/Dialog/DialogActions.d.ts"
              data-name="v0.14.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.14.1">
                v0.14.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/mui-org/material-ui/find/c70b518cca49d31d06da29da2a5ed42ff9fee255"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy
            for="blob-path"
            aria-label="Copy file path to clipboard"
            class="btn btn-sm BtnGroup-item tooltipped tooltipped-s"
            data-copied-hint="Copied!">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" rel="nofollow" href="/mui-org/material-ui/tree/c70b518cca49d31d06da29da2a5ed42ff9fee255"><span>material-ui</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" rel="nofollow" href="/mui-org/material-ui/tree/c70b518cca49d31d06da29da2a5ed42ff9fee255/src"><span>src</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" rel="nofollow" href="/mui-org/material-ui/tree/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog"><span>Dialog</span></a></span><span class="separator">/</span><strong class="final-path">DialogActions.d.ts</strong>
    </div>
  </div>


  <include-fragment src="/mui-org/material-ui/contributors/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts" class="commit-tease">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>

  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/mui-org/material-ui/raw/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/mui-org/material-ui/blame/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/mui-org/material-ui/commits/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      12 lines (7 sloc)
      <span class="file-info-divider"></span>
    351 Bytes
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-typescript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-c1">*</span> <span class="pl-k">as</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">&#39;</span>react<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> { <span class="pl-smi">StandardProps</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">&#39;</span>..<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">interface</span> <span class="pl-en">DialogActionsProps</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">extends</span> <span class="pl-e">StandardProps</span>&lt;<span class="pl-en">React</span>.<span class="pl-en">HTMLAttributes</span>&lt;<span class="pl-en">HTMLDivElement</span>&gt;, <span class="pl-en">DialogActionsClassKey</span>&gt; {}</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">type</span> <span class="pl-en">DialogActionsClassKey</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>root<span class="pl-pds">&#39;</span></span> <span class="pl-k">|</span> <span class="pl-s"><span class="pl-pds">&#39;</span>action<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">declare</span> <span class="pl-k">const</span> DialogActions<span class="pl-k">:</span> <span class="pl-en">React</span>.<span class="pl-en">ComponentType</span>&lt;<span class="pl-en">DialogActionsProps</span>&gt;;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-smi">DialogActions</span>;</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/mui-org/material-ui/blame/c70b518cca49d31d06da29da2a5ed42ff9fee255/src/Dialog/DialogActions.d.ts">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/mui-org/material-ui/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.21932s from unicorn-681020582-9xx90">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-terms-of-service/" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to blog, text:blog" href="https://github.com/blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" type="application/javascript" src="https://assets-cdn.github.com/assets/compat-af4f19572e1d43f69746f70aa5f01dc9.js"></script>
    <script crossorigin="anonymous" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-4864edf87c8541242ad2c01d7a701855.js"></script>
    
    <script crossorigin="anonymous" async="async" type="application/javascript" src="https://assets-cdn.github.com/assets/github-68a09d5675b3bba5fbb9221e6f7b907a.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  

  </body>
</html>

