export default {
  //App related
  appSearch: '/v3/store/${storeName}/app/search?region=${region}&query=${query}',
  appRegions: '/v3/store/${storeName}/app/${trackId}/regions',
  appVersionHistory: '/v3/store/${storeName}/app/${trackId}/version-history',

  getClientIP: '/get-client-ip',

  //Keyword
  keywordInfo: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/keyword-info/${keyword}',
  keywordAnalysis: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/keyword-analysis?apiKey=${apiKey}',
  keywordAnalysisHistory: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/keyword-analysis-history?apiKey=${apiKey}&numDays=${numDays}',
  keywordRankingDistribution: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/keyword-ranking-distribution/${startDate}/${endDate}?apiKey=${apiKey}',
  keywordRankingHistory: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/keyword-ranking-history/${startDate}/${endDate}?apiKey=${apiKey}',
  keywordsPlain: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/keywords-plain?apiKey=${apiKey}',
  keywordRecommendation: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/keyword-recommendation?apiKey=${apiKey}',
  relativeKeywords: '/v3/relative-keywords/?keyword=${keyword}&region=${region}&apiKey=${apiKey}',
  relatedKeywords: '/v3/related-keywords/?keyword=${keyword}&region=${region}&apiKey=${apiKey}',
  trendingKeywords: '/v3/trending-keywords/?region=${region}&apiKey=${apiKey}',

  categoryRankingSummary: '/v3/store/${storeName}/app/${trackId}/${device}/category-rankings-summary/${startDate}/${endDate}?apiKey=${apiKey}',
  categoryRankings: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/category-rankings/${startDate}/${endDate}?apiKey=${apiKey}',
  categoryRankingsHourly: '/v3/store/app/${trackId}/${region}/${device}/category-rankings-hourly/${startDate}/${endDate}?apiKey=${apiKey}',
  reviewHistory: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/reviews/${startDate}/${endDate}?apiKey=${apiKey}',
  ratingHistory: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/ratings/${startDate}/${endDate}?apiKey=${apiKey}',
  reviewWordDensity: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/word-freq/${startDate}/${endDate}?apiKey=${apiKey}',
  topAppsForKeyword: '/v3/store/${storeName}/app/${trackId}/top-apps?region=${region}&device=${device}&keyword=${keyword}&apiKey=${apiKey}',

  //Download Estimation
  downloadEstimation: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/download-estimation/${startDate}/${endDate}?apikey=${apikey}',
  downloadEstimationBulk: '/v3/store/${storeName}/app/${region}/${device}/download-estimation/${startDate}/${endDate}?apikey=${apikey}&trackIds=${trackIds}',
  downloadEstimationCredit: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/download-estimation/${startDate}/${endDate}?canUseCredit=1&apikey=${apikey}',
  downloadEstimationDummyData: '/staticdata/dummy_data_for_download_estimation_${region}_${version}.json',

  dummyDataForDataHistory: '/staticdata/dummy_data_for_data_history.json',

  //Revenue Estimation
  revenueEstimation: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/revenue-estimation/${startDate}/${endDate}?apikey=${apikey}',
  revenueEstimationBulk: '/v3/store/${storeName}/app/${region}/${device}/revenue-estimation/${startDate}/${endDate}?apikey=${apikey}&trackIds=${trackIds}',
  revenueEstimationCredit: '/v3/store/${storeName}/app/${trackId}/${region}/${device}/revenue-estimation/${startDate}/${endDate}?canUseCredit=1&apikey=${apikey}',

  //Dau & Mau
  dauEstimation: '/v3/store/${storeName}/app/${trackId}/${countryCode}/${device}/estimate-dau-daily/${startDate}/${endDate}?apikey=${apikey}',
  dauEstimationCredit: '/v3/store/${storeName}/app/${trackId}/${countryCode}/${device}/estimate-dau-daily/${startDate}/${endDate}?canUseCredit=1&apikey=${apikey}',
  mauEstimation: '/v3/store/${storeName}/app/${trackId}/${countryCode}/${device}/estimate-mau-daily/${startDate}/${endDate}?apikey=${apikey}',
  mauEstimationCredit: '/v3/store/${storeName}/app/${trackId}/${countryCode}/${device}/estimate-mau-daily/${startDate}/${endDate}?canUseCredit=1&apikey=${apikey}',

  //Charts
  topApps: '/v3/store/${storeName}/${region}/${device}/${category}/${listType}/top-apps/${date}',
  newApps: '/v3/store/${storeName}/${region}/${device}/${category}/${listType}/new-apps/${date}',
  publisherLeaderboard: '/v3/store/${storeName}/publisher-leaderboard/${start}/${pageSize}/?categoryId=${categoryId}&apiKey=${apiKey}',

  //
  publisher: '/v3/store/${storeName}/publisher/${name}',
  appsByDomain: '/v3/store/${storeName}/apps-by-domain/${domainName}?apiKey=${apiKey}',
  countrySummary: '/v3/store/${storeName}/country-summary/${trackId}/${region}/${startDate}/${endDate}?apikey=${apikey}',
  countrySummaryCredit: '/v3/store/${storeName}/country-summary/${trackId}/${region}/${startDate}/${endDate}?canUseCredit=1&apikey=${apikey}',
  keywordDownloads: '/v3/store/${storeName}/${trackId}/${countryCode}/keyword-dowloads?apiKey=${apiKey}',
  keywordDownloadsCredits: '/v3/store/${storeName}/${trackId}/${countryCode}/keyword-dowloads?canUseCredit=1&apiKey=${apiKey}'
};
