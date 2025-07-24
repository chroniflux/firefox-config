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
