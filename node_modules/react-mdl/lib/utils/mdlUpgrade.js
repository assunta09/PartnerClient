'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDLComponent = require('./MDLComponent');

var _MDLComponent2 = _interopRequireDefault(_MDLComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
    var render = Component.prototype.render;

    Component.prototype.render = function rendr() {
        // eslint-disable-line no-param-reassign
        var renderBound = render.bind(this);
        return _react2.default.createElement(
            _MDLComponent2.default,
            null,
            renderBound()
        );
    };

    return Component;
};