"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var NewItemList = (function () {
    function NewItemList() {
        this.data = {
            dataList: [],
            showPrelodImg: false
        };
    }
    NewItemList.prototype.onLoad = function (options) {
        console.log(this.data.dataList, options);
        this.getItemList();
    };
    ;
    NewItemList.prototype.getItemList = function (type) {
        var _this = this;
        _this.setData({
            showPrelodImg: true
        });
        wx.request({
            url: "https://example.com/getList",
            dataType: 'json',
            success: function (res) {
                if (type) {
                    _this.setData({
                        dataList: __spreadArray(__spreadArray([], _this.data.dataList), res.data.list)
                    });
                }
                else {
                    _this.setData({
                        dataList: res.data.list
                    });
                    wx.stopPullDownRefresh();
                }
                _this.setData({
                    showPrelodImg: false
                });
            }
        });
    };
    ;
    NewItemList.prototype.onReachBottom = function () {
        console.log(this.data.showPrelodImg);
        if (!this.data.showPrelodImg) {
            this.getItemList(1);
        }
    };
    ;
    NewItemList.prototype.onPullDownRefresh = function () {
        this.getItemList(0);
    };
    ;
    NewItemList.prototype.getImgSize = function (option) {
        var imageWidth = option.detail.width;
        var imageHeight = option.detail.height;
    };
    return NewItemList;
}());
Page(new NewItemList());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUF1QkE7SUFBQTtRQUNFLFNBQUksR0FBaUI7WUFDbkIsUUFBUSxFQUFFLEVBQ1Q7WUFDRCxhQUFhLEVBQUUsS0FBSztTQUNyQixDQUFDO0lBb0RKLENBQUM7SUFuREMsNEJBQU0sR0FBTixVQUFPLE9BQVk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUFBLENBQUM7SUFDRixpQ0FBVyxHQUFYLFVBQVksSUFBYTtRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFFaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsNkJBQTZCO1lBQ2xDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBUCxVQUFRLEdBQVE7Z0JBQ2QsSUFBSSxJQUFJLEVBQUU7b0JBRVIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLGtDQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNyRCxDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBRUwsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO3FCQUN4QixDQUFDLENBQUE7b0JBQ0YsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUE7aUJBQ3pCO2dCQUVELEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVGLG1DQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEI7SUFFSCxDQUFDO0lBQUEsQ0FBQztJQUVGLHVDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUFBLENBQUM7SUFFRixnQ0FBVSxHQUFWLFVBQVcsTUFBVztRQUNwQixJQUFJLFVBQVUsR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUM1QyxJQUFJLFdBQVcsR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTtJQUNoRCxDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBRUQsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IGNodW55YW4ubGlhbmcgPGNodW55YW4ubGlhbmdAaGFuZC1jaGluYS5jb20+XHJcbiAqIEBEYXRlOiAyMDIxLTA3LTA2IDE4OjEzOjQ4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDctMDcgMjE6MTI6MTFcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbi8vIOWumuS5ieWunuS+i1xyXG5pbnRlcmZhY2UgaXRlbUxpc3REYXRhIHtcclxuICBkYXRhTGlzdDogZGF0YUxpc3RJbnRlcmZhY2VbXSxcclxuICBzaG93UHJlbG9kSW1nOiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBkYXRhTGlzdEludGVyZmFjZSB7XHJcbiAgaWQ6IG51bWJlcixcclxuICBpbWdVcmw6IHN0cmluZyxcclxuICB0YWdMaXN0OiBzdHJpbmdbXSxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcHJpY2U6IG51bWJlcixcclxuICBpc0hvdDogYm9vbGVhbixcclxuICBIb3ROYW1lOiBzdHJpbmcsXHJcbiAgUmFua2luZzogbnVtYmVyXHJcbn1cclxuXHJcbmNsYXNzIE5ld0l0ZW1MaXN0IHtcclxuICBkYXRhOiBpdGVtTGlzdERhdGEgPSB7XHJcbiAgICBkYXRhTGlzdDogW1xyXG4gICAgXSxcclxuICAgIHNob3dQcmVsb2RJbWc6IGZhbHNlXHJcbiAgfTtcclxuICBvbkxvYWQob3B0aW9uczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuZGF0YUxpc3QsIG9wdGlvbnMpXHJcbiAgICB0aGlzLmdldEl0ZW1MaXN0KClcclxuICB9O1xyXG4gIGdldEl0ZW1MaXN0KHR5cGU/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3dQcmVsb2RJbWc6IHRydWVcclxuICAgIH0pXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vZ2V0TGlzdFwiLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGUpIHsgLy8g5LiK5ouJ5Yqg6L29XHJcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBkYXRhTGlzdDogWy4uLl90aGlzLmRhdGEuZGF0YUxpc3QsIC4uLnJlcy5kYXRhLmxpc3RdXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIOS4i+aLieWIt+aWsFxyXG4gICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZGF0YUxpc3Q6IHJlcy5kYXRhLmxpc3RcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaG93UHJlbG9kSW1nOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuICAvLyDkuIrmi4nliqDovb1cclxuICBvblJlYWNoQm90dG9tKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLnNob3dQcmVsb2RJbWcpXHJcbiAgICBpZiAoIXRoaXMuZGF0YS5zaG93UHJlbG9kSW1nKSB7XHJcbiAgICAgIHRoaXMuZ2V0SXRlbUxpc3QoMSlcclxuICAgIH1cclxuXHJcbiAgfTtcclxuICAvLyDkuIvmi4nliLfmlrBcclxuICBvblB1bGxEb3duUmVmcmVzaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0SXRlbUxpc3QoMClcclxuICB9O1xyXG4gIC8vIOiOt+WPluWbvueJh+WwuuWvuFxyXG4gIGdldEltZ1NpemUob3B0aW9uOiBhbnkpOiB2b2lkIHtcclxuICAgIGxldCBpbWFnZVdpZHRoOiBudW1iZXIgPSBvcHRpb24uZGV0YWlsLndpZHRoXHJcbiAgICBsZXQgaW1hZ2VIZWlnaHQ6IG51bWJlciA9IG9wdGlvbi5kZXRhaWwuaGVpZ2h0XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUGFnZShuZXcgTmV3SXRlbUxpc3QoKSlcclxuIl19