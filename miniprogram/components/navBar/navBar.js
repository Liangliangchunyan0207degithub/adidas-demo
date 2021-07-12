"use strict";
var app1 = getApp();
var timer;
Component({
    properties: {
        inputValue: {
            type: String,
            value: ""
        },
        placeholderArray: {
            type: Array,
            value: []
        }
    },
    data: {
        navBarHeight: 0,
        statusHeight: 0,
        navBarWidth: 0,
        top: 0,
        pageNumber: 1,
    },
    pageLifetimes: {
        show: function () {
            this.moveToTop();
        },
    },
    attached: function () {
        var navBarHeight = app1.globalData.navBarHeight;
        var statusHeight = app1.globalData.statusHeight;
        var navBarWidth = app1.globalData.navBarWidth;
        var pageNumber = getCurrentPages().length;
        console.log(pageNumber, '页面数');
        this.setData({
            navBarHeight: navBarHeight,
            statusHeight: statusHeight,
            navBarWidth: navBarWidth,
            pageNumber: pageNumber
        });
    },
    ready: function () {
        console.log('11111');
    },
    methods: {
        goBack: function () {
            this.triggerEvent("goBack");
        },
        confirm: function (e) {
            this.triggerEvent("confirm", e.detail);
        },
        moveToTop: function () {
            var _this = this;
            var index = 0;
            timer = setInterval(function () {
                if (index >= _this.data.placeholderArray.length) {
                    index = 0;
                }
                _this.setData({
                    top: index * 60
                });
                index = index + 1;
            }, 1000);
        },
        clickItem: function (e) {
            this.triggerEvent("getItem", e.target.dataset);
            clearInterval(timer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2QmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2QmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRQSxJQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUN0QixJQUFJLEtBQVUsQ0FBQTtBQUNkLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEVBQUU7U0FDVjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLENBQUM7UUFDZixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxDQUFDO1FBQ2QsR0FBRyxFQUFFLENBQUM7UUFDTixVQUFVLEVBQUUsQ0FBQztLQUNkO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsSUFBSTtZQUNGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNsQixDQUFDO0tBQ0Y7SUFFRCxRQUFRLEVBQVI7UUFDRSxJQUFJLFlBQVksR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQTtRQUN2RCxJQUFJLFlBQVksR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQTtRQUN2RCxJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQTtRQUNyRCxJQUFJLFVBQVUsR0FBVyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUE7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFlBQVksY0FBQTtZQUNaLFlBQVksY0FBQTtZQUNaLFdBQVcsYUFBQTtZQUNYLFVBQVUsWUFBQTtTQUNYLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFDRCxLQUFLO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBS0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFOO1lBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM3QixDQUFDO1FBQ0QsT0FBTyxFQUFQLFVBQVEsQ0FBTTtZQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxDQUFDO1FBRUQsU0FBUyxFQUFUO1lBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ2hCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQTtZQUNyQixLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUNsQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtvQkFDL0MsS0FBSyxHQUFHLENBQUMsQ0FBQTtpQkFDVjtnQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLEdBQUcsRUFBRSxLQUFLLEdBQUcsRUFBRTtpQkFDaEIsQ0FBQyxDQUFBO2dCQUNGLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNWLENBQUM7UUFFRCxTQUFTLEVBQVQsVUFBVSxDQUFNO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM5QyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsQ0FBQztLQUVGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogY2h1bnlhbi5saWFuZyA8Y2h1bnlhbi5saWFuZ0BoYW5kLWNoaW5hLmNvbT5cclxuICogQERhdGU6IDIwMjEtMDctMTEgMjA6NTc6MjhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNy0xMiAxNjo1NDozNVxyXG4gKiBARGVzY3JpcHRpb246XHJcbiAqL1xyXG4vLyBpbXBvcnQgeyBJQXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcclxuXHJcbmNvbnN0IGFwcDEgPSBnZXRBcHAoKTtcclxubGV0IHRpbWVyOiBhbnlcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBpbnB1dFZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6IFwiXCJcclxuICAgIH0sXHJcbiAgICBwbGFjZWhvbGRlckFycmF5OiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICB2YWx1ZTogW11cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBuYXZCYXJIZWlnaHQ6IDAsXHJcbiAgICBzdGF0dXNIZWlnaHQ6IDAsXHJcbiAgICBuYXZCYXJXaWR0aDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICBzaG93KCkge1xyXG4gICAgICB0aGlzLm1vdmVUb1RvcCgpXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgbGV0IG5hdkJhckhlaWdodDogbnVtYmVyID0gYXBwMS5nbG9iYWxEYXRhLm5hdkJhckhlaWdodFxyXG4gICAgbGV0IHN0YXR1c0hlaWdodDogbnVtYmVyID0gYXBwMS5nbG9iYWxEYXRhLnN0YXR1c0hlaWdodFxyXG4gICAgbGV0IG5hdkJhcldpZHRoOiBudW1iZXIgPSBhcHAxLmdsb2JhbERhdGEubmF2QmFyV2lkdGhcclxuICAgIGxldCBwYWdlTnVtYmVyOiBudW1iZXIgPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGhcclxuICAgIGNvbnNvbGUubG9nKHBhZ2VOdW1iZXIsICfpobXpnaLmlbAnKVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbmF2QmFySGVpZ2h0LFxyXG4gICAgICBzdGF0dXNIZWlnaHQsXHJcbiAgICAgIG5hdkJhcldpZHRoLFxyXG4gICAgICBwYWdlTnVtYmVyXHJcbiAgICB9KVxyXG5cclxuICB9LFxyXG4gIHJlYWR5KCkge1xyXG4gICAgY29uc29sZS5sb2coJzExMTExJylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiZ29CYWNrXCIpXHJcbiAgICB9LFxyXG4gICAgY29uZmlybShlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoXCJjb25maXJtXCIsIGUuZGV0YWlsKVxyXG4gICAgfSxcclxuICAgIC8vIOiuvue9ruWQkeS4iuenu+WKqOWumuaXtuWZqFxyXG4gICAgbW92ZVRvVG9wKCk6IHZvaWQge1xyXG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMFxyXG4gICAgICB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPj0gX3RoaXMuZGF0YS5wbGFjZWhvbGRlckFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgaW5kZXggPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdG9wOiBpbmRleCAqIDYwXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbmRleCA9IGluZGV4ICsgMVxyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSxcclxuICAgIC8vIOeCueWHu+afkOS4gOmhuVxyXG4gICAgY2xpY2tJdGVtKGU6IGFueSkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcImdldEl0ZW1cIiwgZS50YXJnZXQuZGF0YXNldClcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgIH1cclxuXHJcbiAgfVxyXG59KSJdfQ==