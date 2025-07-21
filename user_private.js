user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.theme.native-theme", true);
user_pref("browser.tabs.allow_transparent_browser", true);

user_pref("browser.cache.disk.enable", true);
user_pref("browser.sessionhistory.max_total_viewers", 8);
user_pref("browser.contentblocking.category", "standard");
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.speculativeConnect.enabled", true);
user_pref("browser.safeBrowse.downloads.remote.enabled", true);

user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);
user_pref("network.prefetch-next", true);
user_pref("network.predictor.enabled", true);
user_pref("network.predictor.enable-prefetch", true);
user_pref("network.http.speculative-parallel-limit", 6);
user_pref("network.http.pacing.requests.enabled", true);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

user_pref("security.OCSP.enabled", 1);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("network.cookie.sameSite.laxByDefault", true);

user_pref("security.tls.enable_0rtt_data", true);
user_pref("network.http.http3.enable", true); // 启用HTTP/3以获得更好性能
user_pref("gfx.webrender.all", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("network.trr.mode", 2); // 启用DoH作为备选
