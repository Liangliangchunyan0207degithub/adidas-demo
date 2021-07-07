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
            aa: '1111',
            bb: 11
        };
    }
    NewItemList.prototype.onLoad = function (options) {
        console.log(this.data.aa, this.data.bb, this.data.dataList, options);
        this.getItemList();
    };
    ;
    NewItemList.prototype.getItemList = function (type) {
        var _this = this;
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
            }
        });
    };
    ;
    NewItemList.prototype.onReachBottom = function () {
        this.getItemList(1);
    };
    ;
    NewItemList.prototype.onPullDownRefresh = function () {
        this.getItemList(0);
    };
    return NewItemList;
}());
Page(new NewItemList());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUF3QkE7SUFBQTtRQUNFLFNBQUksR0FBaUI7WUFDbkIsUUFBUSxFQUFFLEVBQ1Q7WUFDRCxFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxFQUFFO1NBQ1AsQ0FBQztJQWtDSixDQUFDO0lBakNDLDRCQUFNLEdBQU4sVUFBTyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFBQSxDQUFDO0lBQ0YsaUNBQVcsR0FBWCxVQUFZLElBQWE7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsNkJBQTZCO1lBQ2xDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBUCxVQUFRLEdBQVE7Z0JBQ2QsSUFBSSxJQUFJLEVBQUU7b0JBRVIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLGtDQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNyRCxDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBRUwsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO3FCQUN4QixDQUFDLENBQUE7b0JBQ0YsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUE7aUJBQ3pCO1lBRUgsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFBQSxDQUFDO0lBQ0YsbUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUFBLENBQUM7SUFDRix1Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUFFRCxJQUFJLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogY2h1bnlhbi5saWFuZyA8Y2h1bnlhbi5saWFuZ0BoYW5kLWNoaW5hLmNvbT5cclxuICogQERhdGU6IDIwMjEtMDctMDYgMTg6MTM6NDhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNy0wNyAxNjozMDo1N1xyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuLy8g5a6a5LmJ5a6e5L6LXHJcbmludGVyZmFjZSBpdGVtTGlzdERhdGEge1xyXG4gIGRhdGFMaXN0OiBkYXRhTGlzdEludGVyZmFjZVtdLFxyXG4gIGFhOiBzdHJpbmcsXHJcbiAgYmI6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgZGF0YUxpc3RJbnRlcmZhY2Uge1xyXG4gIGlkOiBudW1iZXIsXHJcbiAgaW1nVXJsOiBzdHJpbmcsXHJcbiAgdGFnTGlzdDogc3RyaW5nW10sXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHByaWNlOiBudW1iZXIsXHJcbiAgaXNIb3Q6IGJvb2xlYW4sXHJcbiAgSG90TmFtZTogc3RyaW5nLFxyXG4gIFJhbmtpbmc6IG51bWJlclxyXG59XHJcblxyXG5jbGFzcyBOZXdJdGVtTGlzdCB7XHJcbiAgZGF0YTogaXRlbUxpc3REYXRhID0ge1xyXG4gICAgZGF0YUxpc3Q6IFtcclxuICAgIF0sXHJcbiAgICBhYTogJzExMTEnLFxyXG4gICAgYmI6IDExXHJcbiAgfTtcclxuICBvbkxvYWQob3B0aW9uczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuYWEsIHRoaXMuZGF0YS5iYiwgdGhpcy5kYXRhLmRhdGFMaXN0LCBvcHRpb25zKVxyXG4gICAgdGhpcy5nZXRJdGVtTGlzdCgpXHJcbiAgfTtcclxuICBnZXRJdGVtTGlzdCh0eXBlPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vZ2V0TGlzdFwiLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGUpIHsgLy8g5LiK5ouJ5Yqg6L29XHJcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBkYXRhTGlzdDogWy4uLl90aGlzLmRhdGEuZGF0YUxpc3QsIC4uLnJlcy5kYXRhLmxpc3RdXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIOS4i+aLieWIt+aWsFxyXG4gICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZGF0YUxpc3Q6IHJlcy5kYXRhLmxpc3RcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH07XHJcbiAgb25SZWFjaEJvdHRvbSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0SXRlbUxpc3QoMSlcclxuICB9O1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRJdGVtTGlzdCgwKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblBhZ2UobmV3IE5ld0l0ZW1MaXN0KCkpXHJcbiJdfQ==