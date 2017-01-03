import React from 'react';

export default [
  {
    icon: 'random',
    title: 'App Analytics',
    contents: [
      {href: '/appreport/', title: 'App Report'},
      {href: '/rankinghistory/', title: 'Category Rankings'},
      {href: '/review/', title: 'Review Analysis'},
      {href: '/salesmetrics/', title: 'Sales Metrics'},
      {href: '/forecast/', title: 'Forecast'}
    ]
  },
  {
    icon: 'file-text-o',
    title: 'ASO Report',
    betaTag: true,
    href: '/asoreport/'
  },
  {
    icon: 'th',
    title: 'ASO Intelligence',
    contents: [
      {href: '/keyword/', title: 'Keyword Tracking'},
      {href: '/keywordsuggestion/', title: 'Keyword Suggestions'},
      {href: '/keywordinvestigator/', title: 'Keyword Investigator '},
      {href: '/keywordresearch/', title: 'Keyword Research'},
      {href: '/keywordintelligence/', title: 'Keyword Intelligence'},
      {href: '/potentialcompetitors/', title: 'Competitor Analysis'}
    ]
  },{
    icon: 'apple',
    title: 'Search Ads',
    href: '/searchads/'
  },{
    icon: 'check-square-o',
    title: 'Recommended Actions',
    href: '/recommendedactions/',
    badge: '1'
  },{
    icon: 'line-chart',
    title: 'Market Intelligence',
    href: '/marketintelligence/'
  },{
    icon: 'bell-o',
    title: <span className="text-info">Custom Alerts</span>,
    href: '/customalerts/'
  },
  {icon: 'area-chart',
    title: 'Top Charts',
    contents: [
      {href:'/leaderboard/top/', title: 'Top Charts'},
      {href:'/leaderboard/new/', title: 'New Apps'},
      {href:'/leaderboard/biggest-mover/', title: 'Biggest Movers'},
      {href:'/leaderboard/biggest-loser/', title: 'Biggest Losers'},
      {href:'/leaderboard/publisher/', title: 'Publisher Leaderboard'}
    ]
  }
];
