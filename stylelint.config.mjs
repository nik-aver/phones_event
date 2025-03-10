/** @type {import("stylelint").Config} */

export default {
    extends: ["stylelint-config-standard"],
    overrides: [
        {
            customSyntax: "postcss-html",
            files: ["**/*.{html,vue}"],
        },
    ],
    plugins: [
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-high-performance-animation",
        "stylelint-order",
    ],
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    rules: {
        "alpha-value-notation": "percentage",
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: ["blockless-after-same-name-blockless", "after-comment"],
            },
        ],
        "at-rule-property-required-list": {
            "font-face": ["font-display", "font-family", "font-style", "src"],
        },
        "color-hex-alpha": "never",
        "color-hex-length": "long",
        "color-named": "never",
        "declaration-block-no-redundant-longhand-properties": null,
        "declaration-no-important": true,
        "declaration-property-unit-allowed-list": {
            "line-height": [],
        },
        "declaration-property-value-disallowed-list": {
            transform: ["/rotate/", "/scale/", "/translate/"],
        },
        "declaration-property-value-no-unknown": [
            true,
            {
                ignoreProperties: {
                    "/.+/": "/^v-bind/",
                },
            },
        ],
        "font-weight-notation": "numeric",
        "function-no-unknown": [
            true,
            {
                ignoreFunctions: ["v-bind"],
            },
        ],
        "function-url-no-scheme-relative": true,
        "keyframe-selector-notation": "percentage",
        "media-feature-name-value-no-unknown": true,
        "property-no-vendor-prefix": [
            true,
            {
                ignoreProperties: ["background-clip", "text-fill-color"],
            },
        ],
        "no-unknown-animations": true,
        "selector-class-pattern": null,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["deep", "global"],
            },
        ],
        "value-keyword-case": [
            "lower",
            {
                camelCaseSvgKeywords: true,
                ignoreFunctions: ["v-bind"],
            },
        ],
        "plugin/declaration-block-no-ignored-properties": true,
        "plugin/no-low-performance-animation-properties": [
            true,
            {
                ignore: "paint-properties",
            },
        ],
        "order/order": ["custom-properties", "declarations"],
        "order/properties-order": [
            [
                "syntax",
                "all",
                "container",
                "container-name",
                "container-type",
                "content",

                // Positioning

                "float",
                "clear",

                "position",
                "top",
                "right",
                "bottom",
                "left",
                "z-index",

                "transform",
                "transform-box",
                "transform-origin",
                "transform-style",
                "translate",
                "rotate",
                "scale",
                "skew",
                "perspective",
                "perspective-origin",

                // Box-model

                "box-sizing",

                "contain",
                "contain-intrinsic-size",
                "contain-intrinsic-width",
                "contain-intrinsic-height",
                "contain-intrinsic-block-size",
                "contain-intrinsic-inline-size",

                "display",
                "box-orient",
                "box-decoration-break",

                "masonry-auto-flow",

                "grid",
                "grid-area",
                "grid-auto-flow",
                "grid-auto-rows",
                "grid-auto-columns",
                "grid-row",
                "grid-row-start",
                "grid-row-end",
                "grid-row-gap",
                "grid-column",
                "grid-column-start",
                "grid-column-end",
                "grid-column-gap",
                "grid-template",
                "grid-template-areas",
                "grid-template-rows",
                "grid-template-columns",
                "grid-gap",

                "flex",
                "flex-flow",
                "flex-direction",
                "flex-wrap",
                "flex-basis",
                "flex-shrink",
                "flex-grow",

                "vertical-align",

                "place-content",
                "place-items",
                "place-self",
                "justify-tracks",
                "justify-content",
                "justify-items",
                "justify-self",
                "align-tracks",
                "align-content",
                "align-items",
                "align-self",

                "order",

                "columns",
                "column-count",
                "column-width",
                "column-fill",
                "column-span",

                "gap",
                "row-gap",
                "column-gap",

                "width",
                "max-width",
                "min-width",
                "height",
                "max-height",
                "min-height",
                "block-size",
                "max-block-size",
                "min-block-size",
                "inline-size",
                "max-inline-size",
                "min-inline-size",

                "margin",
                "margin-top",
                "margin-right",
                "margin-bottom",
                "margin-left",
                "margin-block",
                "margin-block-start",
                "margin-block-end",
                "margin-inline",
                "margin-inline-start",
                "margin-inline-end",
                "margin-trim",

                "padding",
                "padding-top",
                "padding-right",
                "padding-bottom",
                "padding-left",
                "padding-block",
                "padding-block-start",
                "padding-block-end",
                "padding-inline",
                "padding-inline-start",
                "padding-inline-end",

                "inset",
                "inset-block",
                "inset-block-start",
                "inset-block-end",
                "inset-inline",
                "inset-inline-start",
                "inset-inline-end",

                // Typography

                "line-clamp",
                "orphans",
                "widows",

                "font",
                "font-family",
                "font-weight",
                "font-size",
                "font-size-adjust",
                "font-style",
                "font-display",
                "font-stretch",
                "font-feature-settings",
                "font-synthesis",
                "font-synthesis-small-caps",
                "font-synthesis-weight",
                "font-synthesis-style",
                "font-variant",
                "font-variant-alternates",
                "font-variant-caps",
                "font-variant-east-asian",
                "font-variant-emoji",
                "font-variant-ligatures",
                "font-variant-numeric",
                "font-variant-position",
                "font-variation-settings",
                "font-language-override",
                "font-kerning",
                "font-optical-sizing",
                "font-palette",
                "color",
                "size-adjust",
                "line-gap-override",
                "line-height",
                "line-height-step",
                "line-break",
                "letter-spacing",

                "text-rendering",
                "text-size-adjust",
                "text-justify",
                "text-align",
                "text-align-last",
                "text-orientation",
                "text-indent",
                "text-fill-color",
                "text-decoration",
                "text-decoration-line",
                "text-decoration-color",
                "text-decoration-style",
                "text-decoration-thickness",
                "text-decoration-skip",
                "text-decoration-skip-ink",
                "text-underline-offset",
                "text-underline-position",
                "text-transform",
                "text-emphasis",
                "text-emphasis-style",
                "text-emphasis-color",
                "text-emphasis-position",
                "text-wrap",
                "text-overflow",
                "text-shadow",
                "text-combine-upright",

                "word-break",
                "word-spacing",
                "white-space",
                "white-space-collapse",

                "initial-letter",
                "initial-letter-align",

                "overflow-wrap",
                "hyphens",
                "hyphenate-character",
                "hyphenate-limit-chars",
                "hanging-punctuation",
                "quotes",

                "tab-size",
                "caret-color",

                "src",
                "base-palette",
                "ascent-override",
                "descent-override",
                "override-colors",

                "direction",
                "writing-mode",
                "unicode-bidi",
                "unicode-range",
                "ruby-align",
                "ruby-position",

                "math-depth",
                "math-shift",
                "math-style",

                // Appearance

                "appearance",
                "tap-highlight-color",
                "visibility",
                "content-visibility",
                "backface-visibility",
                "opacity",

                "clip",
                "clip-path",

                "overflow",
                "overflow-x",
                "overflow-y",
                "overflow-block",
                "overflow-inline",
                "overflow-clip-margin",
                "overflow-anchor",

                "resize",
                "scrollbar-color",
                "scrollbar-width",
                "scrollbar-gutter",

                "page",
                "page-break-before",
                "page-break-after",
                "page-break-inside",
                "page-orientation",
                "break-before",
                "break-after",
                "break-inside",
                "size",

                "border-collapse",
                "border-spacing",
                "border",
                "border-width",
                "border-style",
                "border-color",
                "border-top",
                "border-top-width",
                "border-top-style",
                "border-top-color",
                "border-right",
                "border-right-width",
                "border-right-style",
                "border-right-color",
                "border-bottom",
                "border-bottom-width",
                "border-bottom-style",
                "border-bottom-color",
                "border-left",
                "border-left-width",
                "border-left-style",
                "border-left-color",
                "border-block",
                "border-block-width",
                "border-block-style",
                "border-block-color",
                "border-block-start",
                "border-block-start-width",
                "border-block-start-style",
                "border-block-start-color",
                "border-block-end",
                "border-block-end-width",
                "border-block-end-style",
                "border-block-end-color",
                "border-inline",
                "border-inline-width",
                "border-inline-style",
                "border-inline-color",
                "border-inline-start",
                "border-inline-start-width",
                "border-inline-start-style",
                "border-inline-start-color",
                "border-inline-end",
                "border-inline-end-width",
                "border-inline-end-style",
                "border-inline-end-color",
                "border-radius",
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-right-radius",
                "border-bottom-left-radius",
                "border-start-start-radius",
                "border-start-end-radius",
                "border-end-end-radius",
                "border-end-start-radius",
                "border-image",
                "border-image-outset",
                "border-image-repeat",
                "border-image-slice",
                "border-image-source",
                "border-image-width",

                "column-rule",
                "column-rule-width",
                "column-rule-style",
                "column-rule-color",

                "outline",
                "outline-color",
                "outline-style",
                "outline-width",
                "outline-offset",

                "aspect-ratio",
                "object-fit",
                "object-position",
                "image-orientation",
                "image-rendering",
                "image-resolution",

                "background",
                "background-clip",
                "background-color",
                "background-image",
                "background-origin",
                "background-position",
                "background-position-x",
                "background-position-y",
                "background-repeat",
                "background-size",
                "background-attachment",
                "background-blend-mode",

                "mask",
                "mask-clip",
                "mask-composite",
                "mask-image",
                "mask-mode",
                "mask-origin",
                "mask-position",
                "mask-repeat",
                "mask-size",
                "mask-type",
                "mask-border",
                "mask-border-mode",
                "mask-border-outset",
                "mask-border-repeat",
                "mask-border-slice",
                "mask-border-source",
                "mask-border-width",

                "shape-image-threshold",
                "shape-margin",
                "shape-outside",

                "filter",
                "backdrop-filter",
                "paint-order",
                "isolation",
                "mix-blend-mode",

                "accent-color",
                "color-scheme",
                "forced-color-adjust",
                "print-color-adjust",

                "box-shadow",

                "list-style",
                "list-style-image",
                "list-style-position",
                "list-style-type",

                "table-layout",
                "caption-side",
                "empty-cells",

                // SVG-presentation

                "fill",
                "fill-opacity",
                "fill-rule",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-opacity",
                "stroke-width",

                // Transition

                "transition",
                "transition-property",
                "transition-duration",
                "transition-timing-function",
                "transition-delay",

                "animation",
                "animation-name",
                "animation-duration",
                "animation-timing-function",
                "animation-delay",
                "animation-iteration-count",
                "animation-direction",
                "animation-fill-mode",
                "animation-play-state",
                "animation-composition",
                "animation-timeline",
                "animation-range",
                "animation-range-start",
                "animation-range-end",

                "timeline-scope",

                "view-timeline",
                "view-timeline-name",
                "view-timeline-axis",
                "view-timeline-inset",
                "view-transition-name",

                "scroll-margin",
                "scroll-margin-block",
                "scroll-margin-block-start",
                "scroll-margin-block-end",
                "scroll-margin-inline",
                "scroll-margin-inline-start",
                "scroll-margin-inline-end",
                "scroll-margin-top",
                "scroll-margin-right",
                "scroll-margin-bottom",
                "scroll-margin-left",
                "scroll-padding",
                "scroll-padding-block",
                "scroll-padding-block-start",
                "scroll-padding-block-end",
                "scroll-padding-inline",
                "scroll-padding-inline-start",
                "scroll-padding-inline-end",
                "scroll-padding-top",
                "scroll-padding-right",
                "scroll-padding-bottom",
                "scroll-padding-left",
                "scroll-snap-type",
                "scroll-snap-align",
                "scroll-snap-stop",
                "scroll-behavior",
                "scroll-timeline",
                "scroll-timeline-name",
                "scroll-timeline-axis",
                "overscroll-behavior",
                "overscroll-behavior-x",
                "overscroll-behavior-y",
                "overscroll-behavior-block",
                "overscroll-behavior-inline",

                "offset",
                "offset-anchor",
                "offset-distance",
                "offset-path",
                "offset-position",
                "offset-rotate",

                // Interaction

                "counter-set",
                "counter-increment",
                "counter-reset",
                "system",
                "symbols",
                "additive-symbols",
                "negative",
                "range",
                "prefix",
                "suffix",
                "speak-as",

                "cursor",
                "pointer-events",
                "touch-action",
                "user-select",

                "will-change",
            ],
            {
                emptyLineBeforeUnspecified: "always",
                unspecified: "bottomAlphabetical",
            },
        ],
    },
};
