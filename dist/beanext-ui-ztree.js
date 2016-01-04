/**
 * Created by ethan on 15-12-08.
 */
/**
 * @ngdoc overview
 * @name bui.ztree
 * @description
 * # Beanext UI Component ztree
 */
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
    module.exports = 'bui.ztree';
}
(function (_, $, angular, undefined) {
    angular.module('bui.ztree', []).directive('buiZtree', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                zTree: '='
            },
            replace: true,
            template: '<ul></ul>',
            link: function (scope, element, attr, ctrl) {
                if (!$ || !$.fn.zTree) {
                    return;
                }
                var treeId = attr.id ? attr.id : 'node' + new Date().getTime();
                if (!attr.id) {
                    element.attr('id', treeId);
                }
                if (!element.hasClass('ztree')) {
                    element.addClass('ztree');
                }
                var _settings = scope.zTree.settings || {};
                var zNodes = scope.zTree.nodes || [];
                $timeout(function () {
                    scope.zTree.tools = $.fn.zTree.init(element, _settings, zNodes);
                })
            }
        };
    }]);
})(window, window.jQuery, window.angular)

