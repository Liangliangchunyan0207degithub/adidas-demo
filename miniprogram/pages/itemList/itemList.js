"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var leftHeight = 0;
var rightHeight = 0;
var query;
Page({
    data: {
        dataList: [],
        showPrelodImg: false,
        leftList: [],
        rightList: [],
        refresherTriggered: false,
        placeholderArray: [
            "上衣",
            "短裤",
            "女鞋",
            "男鞋"
        ]
    },
    onLoad: function (options) {
        console.log(this.data.dataList, options);
        this.getItemList();
    },
    getItemList: function (type) {
        var _this = this;
        _this.setData({
            showPrelodImg: true
        });
        wx.request({
            url: "https://example.com/getList",
            dataType: 'json',
            success: function (res) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, leftList, rightList, _i, _b, item;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (type) {
                                    _this.setData({
                                        dataList: __spreadArray(__spreadArray([], _this.data.dataList), res.data.list)
                                    });
                                }
                                else {
                                    _this.setData({
                                        dataList: res.data.list,
                                        refresherTriggered: false
                                    });
                                    wx.stopPullDownRefresh();
                                }
                                query = wx.createSelectorQuery();
                                _a = _this.data, leftList = _a.leftList, rightList = _a.rightList;
                                _i = 0, _b = res.data.list;
                                _c.label = 1;
                            case 1:
                                if (!(_i < _b.length)) return [3, 4];
                                item = _b[_i];
                                leftHeight <= rightHeight ? leftList.push(item) : rightList.push(item);
                                return [4, _this.getHeight(leftList, rightList)];
                            case 2:
                                _c.sent();
                                _c.label = 3;
                            case 3:
                                _i++;
                                return [3, 1];
                            case 4:
                                _this.setData({
                                    showPrelodImg: false,
                                });
                                return [2];
                        }
                    });
                });
            }
        });
    },
    loadMore: function () {
        console.log('是否执行');
        if (!this.data.showPrelodImg) {
            this.getItemList(1);
        }
    },
    handlerefresh: function () {
        this.setData({
            dataList: [],
            showPrelodImg: false,
            leftList: [],
            rightList: [],
            loadingImgSite: "left",
            refresherTriggered: true
        });
        this.getItemList(0);
    },
    getHeight: function (leftList, rightList) {
        var _this_1 = this;
        return new Promise(function (resolve, reject) {
            _this_1.setData({ leftList: leftList, rightList: rightList }, function () {
                query.select('.left-item').boundingClientRect();
                query.select('.right-item').boundingClientRect();
                query.exec(function (res) {
                    leftHeight = res[0].height;
                    rightHeight = res[1].height;
                    resolve();
                });
            });
        });
    },
    goDetail: function () {
        wx.navigateTo({
            url: '../searchPage/searchPage'
        });
    },
    getSearchItem: function (item) {
        console.log(item, '搜索的值');
        wx.navigateTo({
            url: "../searchPage/searchPage?searchValue=" + item.detail.item
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsSUFBSSxVQUFVLEdBQVcsQ0FBQyxDQUFBO0FBQzFCLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQTtBQUMzQixJQUFJLEtBQVUsQ0FBQztBQUNmLElBQUksQ0FBQztJQUNILElBQUksRUFBZ0I7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsS0FBSztRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2Isa0JBQWtCLEVBQUUsS0FBSztRQUN6QixnQkFBZ0IsRUFBRTtZQUNoQixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1NBQ0w7S0FDRjtJQUNELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLElBQWE7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxRQUFRLEVBQUUsTUFBTTtZQUNWLE9BQU8sRUFBYixVQUFjLEdBQVE7Ozs7OztnQ0FDcEIsSUFBSSxJQUFJLEVBQUU7b0NBRVIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3Q0FDWixRQUFRLGtDQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFB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QyxNQUFNLENBQUMsSUFBTTtTQUNoRSxDQUFDLENBQUE7SUFDSixDQUFDO0NBR0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogY2h1bnlhbi5saWFuZyA8Y2h1bnlhbi5saWFuZ0BoYW5kLWNoaW5hLmNvbT5cclxuICogQERhdGU6IDIwMjEtMDctMDYgMTg6MTM6NDhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNy0xMiAyMjozNDowNlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuLy8g5a6a5LmJ5a6e5L6LXHJcbmludGVyZmFjZSBpdGVtTGlzdERhdGEge1xyXG4gIGRhdGFMaXN0OiBkYXRhTGlzdEludGVyZmFjZVtdLFxyXG4gIHNob3dQcmVsb2RJbWc6IGJvb2xlYW4sXHJcbiAgbGVmdExpc3Q6IGRhdGFMaXN0SW50ZXJmYWNlW10sXHJcbiAgcmlnaHRMaXN0OiBkYXRhTGlzdEludGVyZmFjZVtdLFxyXG4gIHJlZnJlc2hlclRyaWdnZXJlZDogYm9vbGVhbixcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueSxcclxufVxyXG5cclxuaW50ZXJmYWNlIGRhdGFMaXN0SW50ZXJmYWNlIHtcclxuICBpZDogbnVtYmVyLFxyXG4gIGltZ1VybDogc3RyaW5nLFxyXG4gIHRhZ0xpc3Q6IHN0cmluZ1tdLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwcmljZTogbnVtYmVyLFxyXG4gIGlzSG90OiBib29sZWFuLFxyXG4gIEhvdE5hbWU6IHN0cmluZyxcclxuICBSYW5raW5nOiBudW1iZXJcclxufVxyXG5sZXQgbGVmdEhlaWdodDogbnVtYmVyID0gMFxyXG5sZXQgcmlnaHRIZWlnaHQ6IG51bWJlciA9IDBcclxubGV0IHF1ZXJ5OiBhbnk7XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IDxpdGVtTGlzdERhdGE+e1xyXG4gICAgZGF0YUxpc3Q6IFtdLFxyXG4gICAgc2hvd1ByZWxvZEltZzogZmFsc2UsXHJcbiAgICBsZWZ0TGlzdDogW10sXHJcbiAgICByaWdodExpc3Q6IFtdLFxyXG4gICAgcmVmcmVzaGVyVHJpZ2dlcmVkOiBmYWxzZSxcclxuICAgIHBsYWNlaG9sZGVyQXJyYXk6IFtcclxuICAgICAgXCLkuIrooaNcIixcclxuICAgICAgXCLnn63oo6RcIixcclxuICAgICAgXCLlpbPpnotcIixcclxuICAgICAgXCLnlLfpnotcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLmRhdGFMaXN0LCBvcHRpb25zKVxyXG4gICAgdGhpcy5nZXRJdGVtTGlzdCgpXHJcbiAgfSxcclxuICBnZXRJdGVtTGlzdCh0eXBlPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvd1ByZWxvZEltZzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9nZXRMaXN0XCIsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIGFzeW5jIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZSkgeyAvLyDkuIrmi4nliqDovb1cclxuXHJcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZGF0YUxpc3Q6IFsuLi5fdGhpcy5kYXRhLmRhdGFMaXN0LCAuLi5yZXMuZGF0YS5saXN0XVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgeyAvLyDkuIvmi4nliLfmlrBcclxuICAgICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBkYXRhTGlzdDogcmVzLmRhdGEubGlzdCxcclxuICAgICAgICAgICAgcmVmcmVzaGVyVHJpZ2dlcmVkOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K+35rGC5pWw5o2u6K6h566X6auY5bqmXHJcbiAgICAgICAgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XHJcbiAgICAgICAgY29uc3QgeyBsZWZ0TGlzdCwgcmlnaHRMaXN0IH0gPSBfdGhpcy5kYXRhXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHJlcy5kYXRhLmxpc3QpIHtcclxuICAgICAgICAgIGxlZnRIZWlnaHQgPD0gcmlnaHRIZWlnaHQgPyBsZWZ0TGlzdC5wdXNoKGl0ZW0pIDogcmlnaHRMaXN0LnB1c2goaXRlbSk7IC8v5Yik5pat5Lik6L656auY5bqm77yM5p2l6KeJ5b6X5re75Yqg5Yiw6YKj6L65XHJcbiAgICAgICAgICBhd2FpdCBfdGhpcy5nZXRIZWlnaHQobGVmdExpc3QsIHJpZ2h0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2hvd1ByZWxvZEltZzogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8vIOS4iuaLieWKoOi9vVxyXG4gIGxvYWRNb3JlKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ+aYr+WQpuaJp+ihjCcpXHJcbiAgICBpZiAoIXRoaXMuZGF0YS5zaG93UHJlbG9kSW1nKSB7XHJcbiAgICAgIHRoaXMuZ2V0SXRlbUxpc3QoMSlcclxuICAgIH1cclxuXHJcbiAgfSxcclxuICAvLyDkuIvmi4nliLfmlrBcclxuICBoYW5kbGVyZWZyZXNoKCk6IHZvaWQge1xyXG4gICAgLy8g6YeN572u5pWw5o2uXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBkYXRhTGlzdDogW10sXHJcbiAgICAgIHNob3dQcmVsb2RJbWc6IGZhbHNlLFxyXG4gICAgICBsZWZ0TGlzdDogW10sXHJcbiAgICAgIHJpZ2h0TGlzdDogW10sXHJcbiAgICAgIGxvYWRpbmdJbWdTaXRlOiBcImxlZnRcIixcclxuICAgICAgcmVmcmVzaGVyVHJpZ2dlcmVkOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdGhpcy5nZXRJdGVtTGlzdCgwKVxyXG4gIH0sXHJcbiAgLy8g6I635Y+W6auY5bqmXHJcbiAgZ2V0SGVpZ2h0KGxlZnRMaXN0OiBkYXRhTGlzdEludGVyZmFjZVtdLCByaWdodExpc3Q6IGRhdGFMaXN0SW50ZXJmYWNlW10pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGxlZnRMaXN0LCByaWdodExpc3QgfSwgKCkgPT4ge1xyXG4gICAgICAgIHF1ZXJ5LnNlbGVjdCgnLmxlZnQtaXRlbScpLmJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHF1ZXJ5LnNlbGVjdCgnLnJpZ2h0LWl0ZW0nKS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBxdWVyeS5leGVjKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgbGVmdEhlaWdodCA9IHJlc1swXS5oZWlnaHQ7IC8v6I635Y+W5bem6L655YiX6KGo55qE6auY5bqmXHJcbiAgICAgICAgICByaWdodEhlaWdodCA9IHJlc1sxXS5oZWlnaHQ7IC8v6I635Y+W5Y+z6L655YiX6KGo55qE6auY5bqmXHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9LFxyXG4gIC8vIOi3s+i9rOmhtemdolxyXG4gIGdvRGV0YWlsKCk6IHZvaWQge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL3NlYXJjaFBhZ2Uvc2VhcmNoUGFnZSdcclxuICAgIH0pXHJcbiAgfSxcclxuICAvLyDojrflj5bmkJzntKLnmoTlgLxcclxuICBnZXRTZWFyY2hJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coaXRlbSwgJ+aQnOe0oueahOWAvCcpXHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBgLi4vc2VhcmNoUGFnZS9zZWFyY2hQYWdlP3NlYXJjaFZhbHVlPSR7aXRlbS5kZXRhaWwuaXRlbX1gXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG59KVxyXG4iXX0=