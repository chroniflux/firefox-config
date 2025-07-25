/****************************************************************************
 * FINAL USER OVERRIDES FOR BETTERFOX                                      *
 * Performance-first with privacy considerations for Mac                    *
****************************************************************************/

/** ESSENTIAL PERFORMANCE OPTIMIZATIONS **/

// Enable disk cache - Critical for performance on Mac's fast SSDs
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 512000); // 512MB

// Memory optimizations for Mac's ample RAM
user_pref("image.mem.decode_bytes_at_a_time", 65536); // 2x Betterfox
user_pref("media.memory_cache_max_size", 131072); // 2x for 4K video
user_pref("gfx.canvas.accelerated.cache-size", 1024); // 2x for Retina
user_pref("gfx.content.skia-font-cache-size", 40); // 2x for fonts

// Hardware video decoding - NOT default on Mac, real performance impact
user_pref("media.hardware-video-decoding.force-enabled", true);

// ONLY if you have 16GB+ RAM - default is 4
user_pref("dom.ipc.processCount", 8);

// Memory optimizations - Good for many tabs
user_pref("browser.sessionstore.max_tabs_undo", 10); // Default: 25
user_pref("browser.sessionhistory.max_entries", 25); // Default: 50

/** NETWORK PERFORMANCE (BALANCED) **/

// DNS prefetching - Major performance boost
user_pref("network.dns.disablePrefetch", false);
// Consider removing for privacy - HTTPS DNS prefetch reveals more
user_pref("network.dns.disablePrefetchFromHTTPS", false);

// Speculative connections - Good performance/privacy balance
user_pref("browser.urlbar.speculativeConnect.enabled", true);
user_pref("browser.places.speculativeConnect.enabled", true);

// Prefetching - Significant performance gains
user_pref("network.prefetch-next", true);
user_pref("network.predictor.enabled", true);
user_pref("network.predictor.enable-prefetch", true);
user_pref("network.predictor.enable-hover-on-ssl", true);

// Speculative parallel limit - Balances performance and privacy
user_pref("network.http.speculative-parallel-limit", 6);

// OCSP checking - significant latency on HTTPS connections
// Betterfox: 0 (disabled) - Consider 1 (enabled but non-blocking)
user_pref("security.OCSP.enabled", 1);

/** MAC TRANSPARENCY SUPPORT **/

user_pref("browser.tabs.allow_transparent_browser", true);
user_pref("widget.transparent-windows", true);
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);

/** THEME SUPPORT **/

user_pref("svg.context-properties.content.enabled", true); // For gwfox icons
user_pref("sidebar.animation.enabled", false); // Performance

/** ACCESSIBILITY **/

user_pref("accessibility.browsewithcaret", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Search suggestions - improves search responsiveness
// Betterfox: false - Consider enabling for URL bar only
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// Session restore interval - balances performance and privacy
user_pref("browser.sessionstore.interval", 180000);

// Elastic scrolling - Mac users expect this, NOT default
user_pref("apz.overscroll.enabled", true);
