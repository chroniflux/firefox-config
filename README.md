# Firefox Configuration: GWfox + Betterfox Enhanced

**A powerful Firefox configuration that combines the stunning visual design of GWfox with the performance optimizations of Betterfox, creating the ultimate browsing experience.**

## 🌟 What is this?

This project automatically merges two of the most popular Firefox enhancement projects:

- **[GWfox](https://github.com/akkva/gwfox)** by [akkva](https://github.com/akkva) - A beautiful, modern Firefox theme with vertical tabs and native platform integration
- **[Betterfox](https://github.com/yokoffing/Betterfox)** by [yokoffing](https://github.com/yokoffing) - Performance, privacy, and security optimizations for Firefox

The result is a Firefox setup that looks amazing and performs exceptionally well, with automatic updates and customization options.

## 🔍 Key Settings Explained

### Performance Optimizations
- **HTTP/3 enabled**: `network.http.http3.enable = true`
- **Hardware acceleration**: `gfx.webrender.all = true`
- **Memory management**: Smart tab unloading and caching
- **Prefetching**: Balanced approach for faster browsing

### Privacy & Security
- **Global Privacy Control**: `privacy.globalprivacycontrol.enabled = true`
- **Tracking protection**: Enhanced blocking of trackers
- **Telemetry disabled**: No data sent to Mozilla
- **HTTPS enforcement**: Stricter certificate validation

### UI Enhancements
- **Vertical tabs**: More efficient screen space usage
- **Minimal interface**: Clean, distraction-free browsing
- **Native integration**: Platform-specific optimizations
- **Transparency effects**: Modern visual design

## 🔄 Automatic Updates

This configuration automatically stays up-to-date with:
- **GWfox updates**: Latest UI improvements and bug fixes
- **Betterfox updates**: New performance and privacy enhancements
- **Security patches**: Important Firefox security configurations

The update process runs daily at 11:00 UTC and can be triggered manually.

## 🚨 Important Notes

### Before Installing
- **Create a backup** of your current Firefox profile
- **Test with a new profile** first to ensure compatibility
- **Review the settings** to understand what will be changed

### Compatibility
- **Firefox 138+** required for full functionality
- **Platform support**: Windows, macOS, Linux
- **Profile isolation**: Each profile needs its own copy

### Performance Impact
- Initial startup may be slightly slower due to customizations
- Overall browsing performance should be significantly improved
- Memory usage optimized for modern systems

## 🛠️ Troubleshooting

### Theme Not Loading
1. Verify `toolkit.legacyUserProfileCustomizations.stylesheets` is `true`
2. Check that the `chrome` folder is in the correct profile directory
3. Restart Firefox completely

### Settings Not Applied
1. Ensure `user.js` is in the profile root directory
2. Check Firefox console (`Ctrl+Shift+J`) for errors
3. Verify no conflicting extensions or other user.js files

### Performance Issues
1. Check if hardware acceleration is working: `about:support`
2. Review your `user_private.js` for conflicting settings
3. Consider adding problematic settings to `user_blocklist.txt`

## 📊 Blocked Settings

The following types of settings are filtered out to maintain optimal performance:

- **Memory cache limits**: Removed artificial memory restrictions
- **Connection limits**: Avoided potentially slower connection settings
- **Cache behaviors**: Filtered settings that could reduce responsiveness
- **Prefetch restrictions**: Maintained smart prefetching for speed

See `user_blocklist.txt` for the complete list.

## 🤝 Contributing

1. **Fork this repository**
2. **Test your changes** thoroughly
3. **Update documentation** if needed
4. **Submit a pull request**

## 📜 License

This project combines configurations from:
- **GWfox**: MIT License - UI customizations
- **Betterfox**: MIT License - Performance and privacy settings

## 🙏 Credits

- **[akkva/gwfox](https://github.com/akkva/gwfox)**: Beautiful Firefox theme and UI customizations
- **[yokoffing/Betterfox](https://github.com/yokoffing/Betterfox)**: Performance and privacy optimizations
