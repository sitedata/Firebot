"use strict";

(function() {

    angular
        .module("firebotApp")
        .factory("controlHelper", function() {
            let service = {};

            service.controlKinds = [
                {
                    kind: "button",
                    display: "Button",
                    description: "A simple button.",
                    iconClass: "fa-bullseye-pointer"
                },
                {
                    kind: "label",
                    display: "Label",
                    description: "Just some text that can't be interacted with.",
                    iconClass: "fa-tag"
                },
                {
                    kind: "textbox",
                    display: "Textbox",
                    description: "A way for viewers to input text.",
                    iconClass: "fa-font"
                },
                {
                    kind: "joystick",
                    display: "Joystick",
                    description: "Allows viewers to control your mouse.",
                    iconClass: "fa-gamepad"
                },
                {
                    kind: "screen",
                    display: "Mouse",
                    description: "Another mouse control. Tracks viewers cursor position over the stream area.",
                    iconClass: "fa-mouse-pointer"
                }
            ];

            service.controlSettings = {
                button: {
                    kind: "button",
                    name: "Button",
                    description: "A simple button.",
                    iconClass: "fa-bullseye-pointer",
                    grid: true,
                    resizable: true,
                    hasSettings: true,
                    minSize: {
                        width: 6,
                        height: 4
                    },
                    maxSize: {
                        width: 20,
                        height: 15
                    },
                    effects: true,
                    canCooldown: true
                },
                label: {
                    kind: "label",
                    name: "Label",
                    description: "Just some text that can't be interacted with.",
                    iconClass: "fa-tag",
                    grid: true,
                    resizable: true,
                    minSize: {
                        width: 6,
                        height: 4
                    },
                    maxSize: {
                        width: 20,
                        height: 15
                    },
                    effects: false,
                    hasSettings: true,
                    canCooldown: false
                },
                textbox: {
                    kind: "textbox",
                    name: "Textbox",
                    description: "A way for viewers to input text.",
                    iconClass: "fa-font",
                    grid: true,
                    resizable: true,
                    minSize: {
                        width: 15,
                        height: 4
                    },
                    maxSize: {
                        width: 20,
                        height: 15
                    },
                    effects: true,
                    hasSettings: true,
                    canCooldown: true
                },
                joystick: {
                    kind: "joystick",
                    name: "Joystick",
                    description: "Allows viewers to control your mouse.",
                    iconClass: "fa-gamepad",
                    grid: true,
                    resizable: false,
                    minSize: {
                        width: 12,
                        height: 12
                    },
                    maxSize: {
                        width: 12,
                        height: 12
                    },
                    effects: true,
                    hasSettings: false,
                    canCooldown: false
                }

                /*,  // Hiding this control type until we figure out how we wanna handle it
                screen: {
                    kind: "screen",
                    name: "Mouse",
                    description: "Another mouse control. Tracks viewers cursor position over the stream area.",
                    iconClass: "fa-mouse-pointer",
                    grid: false,
                    resizable: false,
                    minSize: {
                        width: 0,
                        height: 0
                    },
                    maxSize: {
                        width: 0,
                        height: 0
                    },
                    effects: true,
                    hasSettings: false,
                    canCooldown: false
                }*/
            };

            service.controlSupportsCooldowns = function(kind) {
                if (!kind) return false;

                return service.controlSettings[kind].canCooldown;
            };

            return service;
        });
}());
