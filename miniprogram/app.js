"use strict";
App({
    globalData: {
        navBarHeight: 0,
        statusHeight: 0,
        navBarWidth: 0
    },
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
        var systemInfo = wx.getSystemInfoSync();
        var rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
        var gap = rect.top - systemInfo.statusBarHeight;
        var navBarHeight = 2 * gap + rect.height;
        this.globalData.navBarHeight = navBarHeight;
        this.globalData.statusHeight = systemInfo.statusBarHeight;
        this.globalData.navBarWidth = systemInfo.windowWidth - rect.width - (systemInfo.windowWidth - rect.right) * 2;
        console.log(this.globalData.navBarWidth, rect, '宽度');
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixZQUFZLEVBQUUsQ0FBQztRQUNmLFlBQVksRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLENBQUM7S0FDZjtJQUNELFFBQVEsRUFBUjtRQUVFLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFdkIsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUNGLElBQUksVUFBVSxHQUFRLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFRLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLCtCQUErQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRyxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDeEQsSUFBSSxZQUFZLEdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFBO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM3RyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGNodW55YW4ubGlhbmcgPGNodW55YW4ubGlhbmdAaGFuZC1jaGluYS5jb20+XG4gKiBARGF0ZTogMjAyMS0wNy0wNiAxNzoyMzoyNVxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNy0xMiAxNDo0OTowMFxuICogQERlc2NyaXB0aW9uOiBcbiAqL1xuLy8gYXBwLnRzXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7XG4gICAgbmF2QmFySGVpZ2h0OiAwLFxuICAgIHN0YXR1c0hlaWdodDogMCxcbiAgICBuYXZCYXJXaWR0aDogMFxuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgfSxcbiAgICB9KVxuICAgIGxldCBzeXN0ZW1JbmZvOiBhbnkgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgIGxldCByZWN0OiBhbnkgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0ID8gd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDsgLy/og7blm4rmjInpkq7kvY3nva7kv6Hmga9cbiAgICBsZXQgZ2FwOiBudW1iZXIgPSByZWN0LnRvcCAtIHN5c3RlbUluZm8uc3RhdHVzQmFySGVpZ2h0O1xuICAgIGxldCBuYXZCYXJIZWlnaHQ6IG51bWJlciA9IDIgKiBnYXAgKyByZWN0LmhlaWdodFxuICAgIHRoaXMuZ2xvYmFsRGF0YS5uYXZCYXJIZWlnaHQgPSBuYXZCYXJIZWlnaHRcbiAgICB0aGlzLmdsb2JhbERhdGEuc3RhdHVzSGVpZ2h0ID0gc3lzdGVtSW5mby5zdGF0dXNCYXJIZWlnaHRcbiAgICB0aGlzLmdsb2JhbERhdGEubmF2QmFyV2lkdGggPSBzeXN0ZW1JbmZvLndpbmRvd1dpZHRoIC0gcmVjdC53aWR0aCAtIChzeXN0ZW1JbmZvLndpbmRvd1dpZHRoIC0gcmVjdC5yaWdodCkgKiAyXG4gICAgY29uc29sZS5sb2codGhpcy5nbG9iYWxEYXRhLm5hdkJhcldpZHRoLCByZWN0LCAn5a695bqmJylcbiAgfSxcbn0pIl19