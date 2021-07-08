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
                                        dataList: res.data.list
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
    onReachBottom: function () {
        if (!this.data.showPrelodImg) {
            this.getItemList(1);
        }
    },
    onPullDownRefresh: function () {
        this.setData({
            dataList: [],
            showPrelodImg: false,
            leftList: [],
            rightList: [],
            loadingImgSite: "left"
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsSUFBSSxVQUFVLEdBQVcsQ0FBQyxDQUFBO0FBQzFCLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQTtBQUMzQixJQUFJLEtBQVUsQ0FBQztBQUNmLElBQUksQ0FBQztJQUNILElBQUksRUFBZ0I7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsS0FBSztRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFDRCxNQUFNLEVBQU4sVUFBTyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxJQUFhO1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osYUFBYSxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSw2QkFBNkI7WUFDbEMsUUFBUSxFQUFFLE1BQU07WUFDVixPQUFPLEVBQWIsVUFBYyxHQUFROzs7Ozs7Z0NBQ3BCLElBQUksSUFBSSxFQUFFO29DQUVSLEtBQUssQ0FBQyxPQUFPLENBQUM7d0NBQ1osUUFBUSxrQ0FBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQ0FDckQsQ0FBQyxDQUFBO2lDQUNIO3FDQUFNO29DQUNMLEtBQUssQ0FBQyxPQUFPLENBQUM7d0NBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtxQ0FDeEIsQ0FBQyxDQUFBO29DQUNGLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO2lDQUN6QjtnQ0FHRCxLQUFLLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0NBQzNCLEtBQTBCLEtBQUssQ0FBQyxJQUFJLEVBQWxDLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBQSxDQUFlO3NDQUNWLEVBQWIsS0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7OztxQ0FBYixDQUFBLGNBQWEsQ0FBQTtnQ0FBckIsSUFBSTtnQ0FDYixVQUFVLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUN2RSxXQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFBOztnQ0FBMUMsU0FBMEMsQ0FBQzs7O2dDQUYxQixJQUFhLENBQUE7OztnQ0FJaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQ0FDWixhQUFhLEVBQUUsS0FBSztpQ0FDckIsQ0FBQyxDQUFBOzs7OzthQUNIO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWEsRUFBYjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3BCO0lBRUgsQ0FBQztJQUVELGlCQUFpQixFQUFqQjtRQUVFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7WUFDYixjQUFjLEVBQUUsTUFBTTtTQUN2QixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxTQUFTLEVBQVQsVUFBVSxRQUE2QixFQUFFLFNBQThCO1FBQXZFLG1CQVlDO1FBWEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLE9BQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxFQUFFO2dCQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ2hELEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7b0JBQ2xCLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUMzQixXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUdGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IGNodW55YW4ubGlhbmcgPGNodW55YW4ubGlhbmdAaGFuZC1jaGluYS5jb20+XHJcbiAqIEBEYXRlOiAyMDIxLTA3LTA2IDE4OjEzOjQ4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDctMDggMTY6NTc6MzdcclxuICogQERlc2NyaXB0aW9uOiBcclxuICovXHJcbi8vIOWumuS5ieWunuS+i1xyXG5pbnRlcmZhY2UgaXRlbUxpc3REYXRhIHtcclxuICBkYXRhTGlzdDogZGF0YUxpc3RJbnRlcmZhY2VbXSxcclxuICBzaG93UHJlbG9kSW1nOiBib29sZWFuLFxyXG4gIGxlZnRMaXN0OiBkYXRhTGlzdEludGVyZmFjZVtdLFxyXG4gIHJpZ2h0TGlzdDogZGF0YUxpc3RJbnRlcmZhY2VbXSxcclxufVxyXG5cclxuaW50ZXJmYWNlIGRhdGFMaXN0SW50ZXJmYWNlIHtcclxuICBpZDogbnVtYmVyLFxyXG4gIGltZ1VybDogc3RyaW5nLFxyXG4gIHRhZ0xpc3Q6IHN0cmluZ1tdLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBwcmljZTogbnVtYmVyLFxyXG4gIGlzSG90OiBib29sZWFuLFxyXG4gIEhvdE5hbWU6IHN0cmluZyxcclxuICBSYW5raW5nOiBudW1iZXJcclxufVxyXG5sZXQgbGVmdEhlaWdodDogbnVtYmVyID0gMFxyXG5sZXQgcmlnaHRIZWlnaHQ6IG51bWJlciA9IDBcclxubGV0IHF1ZXJ5OiBhbnk7XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IDxpdGVtTGlzdERhdGE+e1xyXG4gICAgZGF0YUxpc3Q6IFtdLFxyXG4gICAgc2hvd1ByZWxvZEltZzogZmFsc2UsXHJcbiAgICBsZWZ0TGlzdDogW10sXHJcbiAgICByaWdodExpc3Q6IFtdLFxyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLmRhdGFMaXN0LCBvcHRpb25zKVxyXG4gICAgdGhpcy5nZXRJdGVtTGlzdCgpXHJcbiAgfSxcclxuICBnZXRJdGVtTGlzdCh0eXBlPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvd1ByZWxvZEltZzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9nZXRMaXN0XCIsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIGFzeW5jIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZSkgeyAvLyDkuIrmi4nliqDovb1cclxuXHJcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZGF0YUxpc3Q6IFsuLi5fdGhpcy5kYXRhLmRhdGFMaXN0LCAuLi5yZXMuZGF0YS5saXN0XVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgeyAvLyDkuIvmi4nliLfmlrBcclxuICAgICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBkYXRhTGlzdDogcmVzLmRhdGEubGlzdFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K+35rGC5pWw5o2u6K6h566X6auY5bqmXHJcbiAgICAgICAgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XHJcbiAgICAgICAgY29uc3QgeyBsZWZ0TGlzdCwgcmlnaHRMaXN0IH0gPSBfdGhpcy5kYXRhXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHJlcy5kYXRhLmxpc3QpIHtcclxuICAgICAgICAgIGxlZnRIZWlnaHQgPD0gcmlnaHRIZWlnaHQgPyBsZWZ0TGlzdC5wdXNoKGl0ZW0pIDogcmlnaHRMaXN0LnB1c2goaXRlbSk7IC8v5Yik5pat5Lik6L656auY5bqm77yM5p2l6KeJ5b6X5re75Yqg5Yiw6YKj6L65XHJcbiAgICAgICAgICBhd2FpdCBfdGhpcy5nZXRIZWlnaHQobGVmdExpc3QsIHJpZ2h0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2hvd1ByZWxvZEltZzogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8vIOS4iuaLieWKoOi9vVxyXG4gIG9uUmVhY2hCb3R0b20oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5zaG93UHJlbG9kSW1nKSB7XHJcbiAgICAgIHRoaXMuZ2V0SXRlbUxpc3QoMSlcclxuICAgIH1cclxuXHJcbiAgfSxcclxuICAvLyDkuIvmi4nliLfmlrBcclxuICBvblB1bGxEb3duUmVmcmVzaCgpOiB2b2lkIHtcclxuICAgIC8vIOmHjee9ruaVsOaNrlxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZGF0YUxpc3Q6IFtdLFxyXG4gICAgICBzaG93UHJlbG9kSW1nOiBmYWxzZSxcclxuICAgICAgbGVmdExpc3Q6IFtdLFxyXG4gICAgICByaWdodExpc3Q6IFtdLFxyXG4gICAgICBsb2FkaW5nSW1nU2l0ZTogXCJsZWZ0XCJcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldEl0ZW1MaXN0KDApXHJcbiAgfSxcclxuICAvLyDojrflj5bpq5jluqZcclxuICBnZXRIZWlnaHQobGVmdExpc3Q6IGRhdGFMaXN0SW50ZXJmYWNlW10sIHJpZ2h0TGlzdDogZGF0YUxpc3RJbnRlcmZhY2VbXSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpOiB2b2lkID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKHsgbGVmdExpc3QsIHJpZ2h0TGlzdCB9LCAoKSA9PiB7XHJcbiAgICAgICAgcXVlcnkuc2VsZWN0KCcubGVmdC1pdGVtJykuYm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcXVlcnkuc2VsZWN0KCcucmlnaHQtaXRlbScpLmJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHF1ZXJ5LmV4ZWMoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBsZWZ0SGVpZ2h0ID0gcmVzWzBdLmhlaWdodDsgLy/ojrflj5blt6bovrnliJfooajnmoTpq5jluqZcclxuICAgICAgICAgIHJpZ2h0SGVpZ2h0ID0gcmVzWzFdLmhlaWdodDsgLy/ojrflj5blj7PovrnliJfooajnmoTpq5jluqZcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxufSlcclxuIl19