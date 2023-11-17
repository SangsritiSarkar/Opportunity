import React from "react";

function _interopDefaultLegacy(e) {
	return e && typeof e === "object" && "default" in e ? e : { default: e };
}

const React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) {
			if (ar || !(i in from)) {
				if (!ar) ar = Array.prototype.slice.call(from, 0, i);
				ar[i] = from[i];
			}
		}
		return to.concat(ar || Array.prototype.slice.call(from));
	}
	return to.concat(Array.prototype.slice.call(from));
}

const Icon = function ({ type }) {
	switch (type) {
	case "success":
		return React__default.default.createElement(Success, null);
	case "warning":
		return React__default.default.createElement(Warning, null);
	case "error":
		return React__default.default.createElement(Error, null);
	default:
		return React__default.default.createElement(Info, null);
	}
};

const Success = function () {
	return React__default.default.createElement(
		"svg",
		{
			viewBox: "64 64 896 896",
			focusable: "false",
			"data-icon": "check-circle",
			width: "1em",
			height: "1em",
			fill: "#52c41a",
			"aria-hidden": "true",
		},
		React__default.default.createElement("path", {
			d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
		})
	);
};

const Info = function () {
	return React__default.default.createElement(
		"svg",
		{
			viewBox: "64 64 896 896",
			focusable: "false",
			"data-icon": "info-circle",
			width: "1em",
			height: "1em",
			fill: "#1890ff",
			"aria-hidden": "true",
		},
		React__default.default.createElement("path", {
			d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm0-368c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V344c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v24z",
		})
	);
};

const Warning = function () {
	return React__default.default.createElement(
		"svg",
		{
			viewBox: "64 64 896 896",
			focusable: "false",
			"data-icon": "exclamation-circle",
			width: "1em",
			height: "1em",
			fill: "#faad14",
			"aria-hidden": "true",
		},
		React__default.default.createElement("path", {
			d: "M972 512c0 229.8-186.2 416-416 416S140 741.8 140 512 326.2 96 556 96s416 186.2 416 416zm-356 32v-64c0-17.6 14.4-32 32-32s32 14.4 32 32v64c0 17.6-14.4 32-32 32s-32-14.4-32-32zm0 128v160c0 17.6 14.4 32 32 32s32-14.4 32-32v-160c0-17.6-14.4-32-32-32s-32 14.4-32 32z",
		})
	);
};

const Error = function () {
	return React__default.default.createElement(
		"svg",
		{
			viewBox: "64 64 896 896",
			focusable: "false",
			"data-icon": "close-circle",
			width: "1em",
			height: "1em",
			fill: "#ff4d4f",
			"aria-hidden": "true",
		},
		React__default.default.createElement("path", {
			d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 760.9c-193.1 0-349.9-156.8-349.9-349.9S318.9 125.1 512 125.1s349.9 156.8 349.9 349.9S705.1 824.9 512 824.9zM687 383.8l-44.3 44.3-98.7-98.6-98.6 98.6-44.3-44.3 98.6-98.6-98.6-98.7 44.3-44.3 98.6 98.6 98.7-98.6 44.3 44.3-98.6 98.6L687 383.8z",
		})
	);
};

const AlertContainer = function (_a) {
	var _b = _a.floatingTime,
		floatingTime = _b === void 0 ? 3000 : _b,
		{alertStyle} = _a,
		{containerStyle} = _a;
	var _c = React.useState([]),
		alerts = _c[0],
		setAlerts = _c[1];
	var handler = React.useCallback(function (_a) {
		var {detail} = _a;
		setAlerts(function (prevAlerts) {
			return __spreadArray(
				__spreadArray([], prevAlerts, true),
				[detail],
				false
			);
		});
		setTimeout(function () {
			setAlerts(function (prevAlerts) {
				return prevAlerts.slice(1, prevAlerts.length);
			});
		}, floatingTime);
	}, []);
	React.useEffect(function () {
		window.addEventListener("toastAlert", handler);
		return function () {
			window.removeEventListener("toastAlert", handler);
		};
	}, []);
	return React__default["default"].createElement(
		"div",
		{ id: `--react--toast-container`, style: containerStyle },
		alerts.map(function (_a, idx) {
			var {message} = _a,
				{type} = _a;
			return React__default["default"].createElement(
				"div",
				{
					className: `--react--toast-alert-${_a.type}`,
					key: idx,
					style: alertStyle,
				},
				React__default["default"].createElement(Icon, {
					type: type,
				}),
				React__default["default"].createElement("p", null, message)
			);
		})
	);
};

const alert = function (detail) {
	window.dispatchEvent(
		new CustomEvent("toastAlert", {
			detail: detail,
		})
	);
};

// module.exports = Icon;
export { AlertContainer };
export { alert };

// Object.defineProperty(exports, '__esModule', { value: true });

//# sourceMappingURL=index.js.map
