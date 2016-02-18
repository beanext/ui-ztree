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
            restrict: 'EA',
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
                scope.$watch('zTree.nodes', function (newValue) {
                    if (newValue && !scope.zTree.tools) {
                        scope.zTree.tools = $.fn.zTree.init(element, _settings, scope.zTree.nodes);
                        if (scope.zTree.expand !== false) {
                            scope.zTree.tools.expandAll(true);
                        }
                        angular.forEach(scope.zTree.tools.getNodesByParam('initSelected', true), function (node) {
                            scope.zTree.tools.selectNode(node, 1);
                        })
                    } else if (newValue && scope.zTree.tools) {
                        scope.zTree.tools.refresh();
                    }
                })
            }
        };
    }]);
})(window, window.jQuery, window.angular)

