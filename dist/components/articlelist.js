'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var articlelist = function (_wepy$component) {
  _inherits(articlelist, _wepy$component);

  function articlelist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, articlelist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = articlelist.__proto__ || Object.getPrototypeOf(articlelist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      moves: []
    }, _this.events = {}, _this.methods = {
      'g-request': function gRequest(url, $event) {
        var self = _this;
        //console.log('articlelist.component methods response')
        _wepy2.default.request({
          'url': url,
          'success': function success(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data.data.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                var time = (0, _moment2.default)(item.occur_time);
                item.day = time.dayOfYear();
                console.log(time.month());
                item.otherdata = time.weekYear() + '-' + time.month();
                item.profile = item.content.substr(0, 25) + '...';
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            self.moves = data.data.data;
            self.$apply();
          }
        });
      },
      'skiparticlepage': function skiparticlepage(item) {
        _wepy2.default.navigateTo({ url: 'articlepage?item=' + JSON.stringify(item) });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return articlelist;
}(_wepy2.default.component);

exports.default = articlelist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVsaXN0LmpzIl0sIm5hbWVzIjpbImFydGljbGVsaXN0IiwicHJvcHMiLCJkYXRhIiwibW92ZXMiLCJldmVudHMiLCJtZXRob2RzIiwidXJsIiwiJGV2ZW50Iiwic2VsZiIsInJlcXVlc3QiLCJpdGVtIiwidGltZSIsIm9jY3VyX3RpbWUiLCJkYXkiLCJkYXlPZlllYXIiLCJjb25zb2xlIiwibG9nIiwibW9udGgiLCJvdGhlcmRhdGEiLCJ3ZWVrWWVhciIsInByb2ZpbGUiLCJjb250ZW50Iiwic3Vic3RyIiwiJGFwcGx5IiwibmF2aWdhdGVUbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPO0FBQ0xDLGFBQU87QUFERixLLFFBR1BDLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSLG1CQUFhLGtCQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDNUIsWUFBSUMsWUFBSjtBQUNBO0FBQ0EsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYLGlCQUFPSCxHQURJO0FBRVgscUJBQVcsaUJBQVVKLElBQVYsRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsbUNBQWlCQSxLQUFLQSxJQUFMLENBQVVBLElBQTNCLDhIQUFpQztBQUFBLG9CQUF4QlEsSUFBd0I7O0FBQy9CLG9CQUFJQyxPQUFPLHNCQUFPRCxLQUFLRSxVQUFaLENBQVg7QUFDQUYscUJBQUtHLEdBQUwsR0FBV0YsS0FBS0csU0FBTCxFQUFYO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVlMLEtBQUtNLEtBQUwsRUFBWjtBQUNBUCxxQkFBS1EsU0FBTCxHQUFpQlAsS0FBS1EsUUFBTCxLQUFrQixHQUFsQixHQUF3QlIsS0FBS00sS0FBTCxFQUF6QztBQUNBUCxxQkFBS1UsT0FBTCxHQUFlVixLQUFLVyxPQUFMLENBQWFDLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkIsSUFBNkIsS0FBNUM7QUFDRDtBQVB3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVF6QmQsaUJBQUtMLEtBQUwsR0FBYUQsS0FBS0EsSUFBTCxDQUFVQSxJQUF2QjtBQUNBTSxpQkFBS2UsTUFBTDtBQUNEO0FBWlUsU0FBYjtBQWNELE9BbEJPO0FBbUJSLHlCQUFtQix5QkFBQ2IsSUFBRCxFQUFVO0FBQzNCLHVCQUFLYyxVQUFMLENBQWdCLEVBQUVsQixLQUFLLHNCQUFzQm1CLEtBQUtDLFNBQUwsQ0FBZWhCLElBQWYsQ0FBN0IsRUFBaEI7QUFDRDtBQXJCTyxLOzs7O0VBUjZCLGVBQUtpQixTOztrQkFBekIzQixXIiwiZmlsZSI6ImFydGljbGVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhcnRpY2xlbGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG1vdmVzOiBbXVxyXG4gICAgfTtcclxuICAgIGV2ZW50cyA9IHtcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAnZy1yZXF1ZXN0JzogKHVybCwgJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYXJ0aWNsZWxpc3QuY29tcG9uZW50IG1ldGhvZHMgcmVzcG9uc2UnKVxyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAndXJsJzogdXJsLFxyXG4gICAgICAgICAgJ3N1Y2Nlc3MnOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGRhdGEuZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHRpbWUgPSBtb21lbnQoaXRlbS5vY2N1cl90aW1lKVxyXG4gICAgICAgICAgICAgIGl0ZW0uZGF5ID0gdGltZS5kYXlPZlllYXIoKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbWUubW9udGgoKSlcclxuICAgICAgICAgICAgICBpdGVtLm90aGVyZGF0YSA9IHRpbWUud2Vla1llYXIoKSArICctJyArIHRpbWUubW9udGgoKVxyXG4gICAgICAgICAgICAgIGl0ZW0ucHJvZmlsZSA9IGl0ZW0uY29udGVudC5zdWJzdHIoMCwgMjUpICsgJy4uLidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLm1vdmVzID0gZGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgICdza2lwYXJ0aWNsZXBhZ2UnOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ2FydGljbGVwYWdlP2l0ZW09JyArIEpTT04uc3RyaW5naWZ5KGl0ZW0pIH0pXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4iXX0=