System.register("ej/core", ['angular2/src/facade/lang', 'angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lang_1, core_1, common_1;
    var firstVal, Utils, EJComponents, ComplexTagElement, ArrayTagElement;
    function CreateComplexDirective(args, ejArgs) {
        return core_1.Directive(args).Class({
            extends: ComplexTagElement,
            constructor: [ejArgs.type, function (widget) {
                    this.tags = ejArgs.tags;
                    this.complexProperties = ejArgs.complexes;
                    this.__parent = widget;
                    ComplexTagElement.call(this);
                }]
        });
    }
    exports_1("CreateComplexDirective", CreateComplexDirective);
    function CreateArrayTagDirective(property, selector, type) {
        return core_1.Directive({
            selector: selector,
            queries: {
                children: new core_1.ContentChildren(type)
            }
        }).Class({
            extends: ArrayTagElement,
            constructor: function () {
                ArrayTagElement.call(this, property);
            }
        });
    }
    exports_1("CreateArrayTagDirective", CreateArrayTagDirective);
    function CreateComponent(name, componentArgs, ejArgs) {
        componentArgs.changeDetection = core_1.ChangeDetectionStrategy.OnPush;
        var comp = core_1.Component(componentArgs);
        return comp.Class({
            extends: EJComponents,
            constructor: [core_1.ElementRef, core_1.ChangeDetectorRef, function (el, cdRef) {
                    this.tags = ejArgs.tags;
                    this.outputs = componentArgs.outputs;
                    this.twoways = ejArgs.twoways;
                    this.complexProperties = ejArgs.complexes;
                    EJComponents.call(this, name, el, cdRef);
                }]
        });
    }
    exports_1("CreateComponent", CreateComponent);
    function CreateControlValueAccessor(selector, component) {
        var EJDefaultValueAccessor;
        var constAccessor = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
            useExisting: core_1.forwardRef(function () { return EJDefaultValueAccessor; }), multi: true
        }));
        var valDirective = core_1.Directive({ selector: selector,
            host: { '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
            providers: [constAccessor]
        });
        EJDefaultValueAccessor = valDirective.Class({
            constructor: [component, function (host) {
                    this.host = host;
                }],
            onChange: function (_) { },
            onTouched: function () { },
            writeValue: function (value) {
                if (this.host.widget)
                    this.host.widget.option("model.value", value);
                else
                    this.host.model.value = value;
            },
            registerOnChange: function (fn) {
                this.onChange = fn;
            },
            registerOnTouched: function (fn) {
                this.onTouched = fn;
            }
        });
        return EJDefaultValueAccessor;
    }
    exports_1("CreateControlValueAccessor", CreateControlValueAccessor);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                exports_1({
                    "ContentChild": core_1_1["ContentChild"],
                    "Type": core_1_1["Type"],
                    "forwardRef": core_1_1["forwardRef"]
                });
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            firstVal = {};
            /** Internal Helpers */
            Utils = (function () {
                function Utils() {
                }
                Utils.IterateAndGetChanges = function (obj) {
                    if (ej.isNullOrUndefined(obj.tags) || obj.tags.length === 0)
                        return null;
                    var changes, res = {};
                    for (var i = 0, tags = obj.tags; i < tags.length; i++) {
                        var tag = tags[i], tagElement = obj["_" + tag.replace(/\./g, '_')];
                        if (!ej.isNullOrUndefined(tagElement) && tagElement.hasChanges) {
                            res[tag] = tagElement.getChangesAndReset();
                        }
                    }
                    return res;
                };
                Utils.AngularizeInputs = function (inputs, twoways) {
                    for (var i = 0, len = inputs.length; i < len; i++) {
                        var element = inputs[i];
                        inputs[i] = "model." + element + ": " + element;
                    }
                    for (var i = 0; i < twoways.length; i++) {
                        var element = twoways[i];
                        element = "model." + element + "_two:" + element;
                        inputs.push(element);
                    }
                    return inputs;
                };
                return Utils;
            }());
            exports_1("Utils", Utils);
            EJComponents = (function () {
                function EJComponents(name, el, cdRef) {
                    this.name = name;
                    this.el = el;
                    this.cdRef = cdRef;
                    this.model = {};
                    this._firstCheck = true;
                    //        this.__shadow = this.dom.getShadowRoot(this.el.nativeElement);
                    this.createEvents(this.outputs);
                    this.createTwoways(this.twoways);
                }
                EJComponents.prototype.createEvents = function (events) {
                    var model = this.model, self = this;
                    if (events && events.length) {
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            if (event.startsWith("model."))
                                continue;
                            self[event] = event !== "destroy" ? new core_1.EventEmitter() : new core_1.EventEmitter(false);
                        }
                    }
                    var complex = this.complexProperties;
                    if (complex && complex.length) {
                        for (var i = 0; i < complex.length; i++) {
                            var element = complex[i];
                            ej.createObject(element, {}, model);
                        }
                    }
                };
                EJComponents.prototype.createTwoways = function (twoways) {
                    if (!twoways)
                        return;
                    var model = this.model;
                    for (var i = 0; i < twoways.length; i++) {
                        var element = twoways[i];
                        if (element.indexOf(":") !== -1) {
                            element = element.replace(/:.+/g, "");
                        }
                        ej.createObject(element + "Change", new core_1.EventEmitter(), model);
                        ej.createObject(element, this.addTwoways(element), model);
                    }
                };
                EJComponents.prototype.addTwoways = function (prop) {
                    var self = this, model = this.model, value = firstVal; //, originalProp = prop.replace(/-/g, ".");
                    return function (newVal, isApp) {
                        if (value === firstVal) {
                            value = ej.getObject(prop + "_two", model);
                            if (value === undefined)
                                value = ej.getObject(prop, this === undefined || this.defaults === undefined ? {} : this.defaults);
                        }
                        if (newVal === undefined) {
                            return value;
                        }
                        if (value === newVal)
                            return;
                        value = newVal;
                        if (!isApp) {
                            ej.createObject(prop + "_two", newVal, model);
                            ej.getObject(prop + "Change", model).emit(newVal);
                        }
                    };
                };
                EJComponents.prototype.ngAfterContentInit = function () {
                    this._firstCheck = false;
                    for (var i = 0; i < this.tags.length; i++) {
                        var element = this.tags[i], item = this["_" + element.replace(/\./g, '_')];
                        if (!ej.isNullOrUndefined(item))
                            ej.createObject(element, item.getList(), this.model);
                    }
                    var model = this.model, self = this, events = this.outputs;
                    if (events) {
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            EJComponents.bindAndRaiseEvent(this, model, event);
                        }
                    }
                    this.widget = $(this.el.nativeElement)["ej" + this.name](this.model)["ej" + this.name]("instance");
                };
                EJComponents.bindAndRaiseEvent = function (instance, model, event) {
                    if (!event.startsWith("model.")) {
                        model[event] = function (params) {
                            instance[event]["emit"](params);
                        };
                    }
                };
                EJComponents.prototype.ngOnChanges = function (changes) {
                    if (this._firstCheck)
                        return;
                    var ngChanges = {};
                    for (var key in changes) {
                        var element = changes[key];
                        if (element.previousValue === element.currentValue)
                            break;
                        key = key.replace("model.", "");
                        if (key.endsWith("_two")) {
                            var oKey = key.replace("_two", ""), valFn = ej.getObject(oKey, this.widget["model"]);
                            valFn(element.currentValue, true);
                            ej.createObject(oKey, valFn, ngChanges);
                        }
                        ej.createObject(key, element.currentValue, ngChanges);
                    }
                    if (!$.isEmptyObject(ngChanges))
                        this.widget["option"](ngChanges);
                };
                EJComponents.prototype.ngAfterContentChecked = function () {
                    /// TODO: ChangeDetection Third/Multi level
                    var changes = Utils.IterateAndGetChanges(this);
                    for (var key in changes) {
                        if (changes.hasOwnProperty(key)) {
                            var element = changes[key];
                            this.widget["_" + key](element);
                        }
                    }
                };
                EJComponents.prototype.ngOnDestroy = function () {
                    this.widget.destroy();
                };
                return EJComponents;
            }());
            exports_1("EJComponents", EJComponents);
            ComplexTagElement = (function () {
                function ComplexTagElement() {
                    this.hasChanges = false;
                    this.__firstChange = true;
                    this.__valueChange = new core_1.EventEmitter();
                    var complexes = this.complexProperties;
                    for (var i = 0; complexes !== undefined && i < complexes.length; i++) {
                        var element = complexes[i];
                        ej.createObject(element, {}, this);
                    }
                }
                ComplexTagElement.prototype.ngOnInit = function () {
                    this.__firstChange = false;
                };
                ComplexTagElement.prototype.ensureCleanObject = function () {
                    var tags = this.tags;
                    for (var i = 0; i < tags.length; i++) {
                        var element = tags[i], tagElement = this["_" + element.replace(/\./g, '_')];
                        if (i === 0 && this[element])
                            return;
                        if (ej.isNullOrUndefined(tagElement))
                            continue;
                        ej.createObject(element, tagElement.getList(), this);
                    }
                };
                ComplexTagElement.prototype.ngOnChanges = function (changes) {
                    if (this.__firstChange)
                        return;
                    this.recentChanges = changes;
                    this.hasChanges = true;
                };
                ComplexTagElement.prototype.getChangesAndReset = function () {
                    if (this.hasChanges === false)
                        return;
                    var changes = this.recentChanges || {};
                    for (var key in changes) {
                        if (changes.hasOwnProperty(key)) {
                            changes[key] = changes[key].currentValue;
                        }
                    }
                    var contentChanges = Utils.IterateAndGetChanges(this);
                    if (!$.isEmptyObject(contentChanges)) {
                        for (var key in contentChanges) {
                            if (contentChanges.hasOwnProperty(key)) {
                                var element = contentChanges[key];
                                //this.el.nativeElement.
                                this.__parent.widget["_" + this.property.replace(/\./g, '_') + "_" + key](element);
                            }
                        }
                    }
                    this.hasChanges = false;
                    return changes;
                };
                ComplexTagElement.prototype.ngAfterContentChecked = function () {
                    var tags = this.tags;
                    for (var i = 0, len = tags.length; i < len; i++) {
                        var element = tags[i], tagElement = this["_" + element.replace(/\./g, '_')];
                        if (tagElement && tagElement.hasChanges)
                            this.hasChanges = true;
                    }
                };
                return ComplexTagElement;
            }());
            exports_1("ComplexTagElement", ComplexTagElement);
            ArrayTagElement = (function () {
                function ArrayTagElement(propertyName) {
                    this.propertyName = propertyName;
                    this.hasChanges = false;
                }
                // TODO: Need to consider dynamic child change
                ArrayTagElement.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    var index = 0;
                    this.list = this.children.map(function (child) {
                        child.__index = index++;
                        child.property = _this.propertyName;
                        return child;
                    });
                };
                ArrayTagElement.prototype.ngOnChanges = function (changes) {
                };
                ArrayTagElement.prototype.getList = function () {
                    var list = this.list;
                    for (var i = 0; i < list.length; i++) {
                        list[i].ensureCleanObject();
                    }
                    return list;
                };
                ArrayTagElement.prototype.getChangesAndReset = function () {
                    this.hasChanges = false;
                    return this.recentChanges;
                };
                ArrayTagElement.prototype.ngAfterContentChecked = function () {
                    var changes = {}, res = changes[this.propertyName] = [], childChange;
                    for (var i = 0, list = this.list; i < list.length; i++) {
                        var child = list[i];
                        if (child.hasChanges) {
                            childChange = child.getChangesAndReset();
                            if (!ej.isNullOrUndefined(childChange)) {
                                res.push({
                                    index: child.__index,
                                    change: childChange
                                });
                            }
                        }
                    }
                    if (res.length > 0) {
                        this.recentChanges = res;
                        this.hasChanges = true;
                    }
                };
                return ArrayTagElement;
            }());
            exports_1("ArrayTagElement", ArrayTagElement);
        }
    }
});
System.register("ej/accordion.component", ["ej/core"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_3;
    var Outputs, ComplexProperties, Inputs, AccordionComponent, EJ_ACCORDION_COMPONENTS;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            Outputs = ["activate", "ajaxBeforeLoad", "ajaxError", "ajaxLoad", "ajaxSuccess", "beforeActivate", "beforeInactivate", "create", "destroy", "inActivate"];
            ComplexProperties = ["ajaxSettings", "customIcon"];
            Inputs = core_3.Utils.AngularizeInputs(["ajaxSettings", "allowKeyboardNavigation", "collapseSpeed", "collapsible", "cssClass", "customIcon", "disabledItems", "enableAnimation", "enabled", "enabledItems", "enableMultipleOpen", "enablePersistence", "enableRTL", "events", "expandSpeed", "headerSize", "height", "heightAdjustMode", "htmlAttributes", "selectedItemIndex", "selectedItems", "showCloseButton", "showRoundedCorner", "width", "ajaxSettings.async", "ajaxSettings.cache", "ajaxSettings.contentType", "ajaxSettings.data", "ajaxSettings.dataType", "ajaxSettings.type", "customIcon.header", "customIcon.selectedHeader"], []);
            exports_2("AccordionComponent", AccordionComponent = core_3.CreateComponent("Accordion", {
                selector: 'ej-accordion',
                inputs: Inputs,
                outputs: Outputs,
                template: "<ng-content></ng-content>",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_2("EJ_ACCORDION_COMPONENTS", EJ_ACCORDION_COMPONENTS = [AccordionComponent]);
        }
    }
});
System.register("ej/autocomplete.component", ["ej/core"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_4;
    var Outputs, ComplexProperties, Inputs, AutocompleteComponent, AutocompleteValueAccessor, EJ_AUTOCOMPLETE_COMPONENTS;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            Outputs = ["actionSuccess", "actionComplete", "actionFailure", "change", "close", "create", "destroy", "focusIn", "focusOut", "open", "select"];
            ComplexProperties = [];
            Inputs = core_4.Utils.AngularizeInputs(["addNewText", "allowAddNew", "allowSorting", "autoFocus", "caseSensitiveSearch", "cssClass", "dataSource", "delaySuggestionTimeout", "delimiterChar", "emptyResultText", "enableAutoFill", "enabled", "enableDistinct", "enablePersistence", "enableRTL", "fields", "filterType", "height", "highlightSearch", "itemsCount", "minCharacter", "multiSelectMode", "popupHeight", "popupWidth", "query", "readOnly", "showEmptyResultText", "showLoadingIcon", "showPopupButton", "showRoundedCorner", "sortOrder", "template", "validationMessage", "validationRules", "value", "visible", "watermarkText", "width"], []);
            exports_3("AutocompleteComponent", AutocompleteComponent = core_4.CreateComponent("Autocomplete", {
                selector: '[ej-autocomplete]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_3("AutocompleteValueAccessor", AutocompleteValueAccessor = core_4.CreateControlValueAccessor("[ej-autocomplete]", AutocompleteComponent));
            exports_3("EJ_AUTOCOMPLETE_COMPONENTS", EJ_AUTOCOMPLETE_COMPONENTS = [AutocompleteComponent, AutocompleteValueAccessor]);
        }
    }
});
System.register("ej/barcode.component", ["ej/core"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_5;
    var Outputs, ComplexProperties, Inputs, BarcodeComponent, EJ_BARCODE_COMPONENTS;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            Outputs = ["load"];
            ComplexProperties = ["quietZone"];
            Inputs = core_5.Utils.AngularizeInputs(["barcodeToTextGapHeight", "barHeight", "darkBarColor", "displayText", "enabled", "encodeStartStopSymbol", "lightBarColor", "narrowBarWidth", "quietZone", "symbologyType", "text", "textColor", "wideBarWidth", "xDimension", "quietZone.all", "quietZone.bottom", "quietZone.left", "quietZone.right", "quietZone.top"], []);
            exports_4("BarcodeComponent", BarcodeComponent = core_5.CreateComponent("Barcode", {
                selector: 'ej-barcode',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_4("EJ_BARCODE_COMPONENTS", EJ_BARCODE_COMPONENTS = [BarcodeComponent]);
        }
    }
});
System.register("ej/bulletgraph.component", ["ej/core"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_6;
    var QualitativeRangeDirective, QualitativeRangesDirective, QuantitativeScaleSettingsFeatureMeasureDirective, QuantitativeScaleSettingsFeatureMeasuresDirective, Outputs, ComplexProperties, Inputs, BulletGraphComponent, EJ_BULLETGRAPH_COMPONENTS;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            exports_5("QualitativeRangeDirective", QualitativeRangeDirective = core_6.CreateComplexDirective({
                selector: "e-qualitativeranges>e-qualitativerange",
                inputs: ["rangeEnd", "rangeOpacity", "rangeStroke"],
                queries: {}
            }, {
                tags: [],
                type: core_6.forwardRef(function () { return BulletGraphComponent; })
            }));
            exports_5("QualitativeRangesDirective", QualitativeRangesDirective = core_6.CreateArrayTagDirective("qualitativeRanges", 'ej-bulletgraph>e-qualitativeranges', QualitativeRangeDirective));
            exports_5("QuantitativeScaleSettingsFeatureMeasureDirective", QuantitativeScaleSettingsFeatureMeasureDirective = core_6.CreateComplexDirective({
                selector: "e-quantitativescalesettings-featuremeasures>e-quantitativescalesettings-featuremeasure",
                inputs: ["category", "comparativeMeasureValue", "value"],
                queries: {}
            }, {
                tags: [],
                type: core_6.forwardRef(function () { return BulletGraphComponent; })
            }));
            exports_5("QuantitativeScaleSettingsFeatureMeasuresDirective", QuantitativeScaleSettingsFeatureMeasuresDirective = core_6.CreateArrayTagDirective("quantitativeScaleSettings.featureMeasures", 'ej-bulletgraph>e-quantitativescalesettings-featuremeasures', QuantitativeScaleSettingsFeatureMeasureDirective));
            Outputs = ["drawCaption", "drawCategory", "drawComparativeMeasureSymbol", "drawFeatureMeasureBar", "drawIndicator", "drawLabels", "drawQualitativeRanges", "load"];
            ComplexProperties = ["captionSettings", "quantitativeScaleSettings", "tooltipSettings", "captionSettings.font", "captionSettings.indicator", "captionSettings.indicator.font", "captionSettings.indicator.location", "captionSettings.indicator.symbol", "captionSettings.indicator.symbol.border", "captionSettings.indicator.symbol.size", "captionSettings.location", "captionSettings.subTitle", "captionSettings.subTitle.font", "captionSettings.subTitle.location", "quantitativeScaleSettings.comparativeMeasureSettings", "quantitativeScaleSettings.featuredMeasureSettings", "quantitativeScaleSettings.fields", "quantitativeScaleSettings.labelSettings", "quantitativeScaleSettings.labelSettings.font", "quantitativeScaleSettings.location", "quantitativeScaleSettings.majorTickSettings", "quantitativeScaleSettings.minorTickSettings"];
            Inputs = core_6.Utils.AngularizeInputs(["applyRangeStrokeToLabels", "applyRangeStrokeToTicks", "captionSettings", "comparativeMeasureValue", "enableAnimation", "flowDirection", "height", "isResponsive", "orientation", "qualitativeRangeSize", "quantitativeScaleLength", "quantitativeScaleSettings", "theme", "tooltipSettings", "value", "width", "captionSettings.enableTrim", "captionSettings.font", "captionSettings.font.color", "captionSettings.font.fontFamily", "captionSettings.font.fontStyle", "captionSettings.font.fontWeight", "captionSettings.font.opacity", "captionSettings.font.size", "captionSettings.indicator", "captionSettings.indicator.font", "captionSettings.indicator.location", "captionSettings.indicator.padding", "captionSettings.indicator.symbol", "captionSettings.indicator.text", "captionSettings.indicator.textAlignment", "captionSettings.indicator.textAnchor", "captionSettings.indicator.textAngle", "captionSettings.indicator.textPosition", "captionSettings.indicator.textSpacing", "captionSettings.indicator.visible", "captionSettings.location", "captionSettings.location.x", "captionSettings.location.y", "captionSettings.padding", "captionSettings.subTitle", "captionSettings.subTitle.font", "captionSettings.subTitle.location", "captionSettings.subTitle.padding", "captionSettings.subTitle.text", "captionSettings.subTitle.textAlignment", "captionSettings.subTitle.textAnchor", "captionSettings.subTitle.textAngle", "captionSettings.subTitle.textPosition", "captionSettings.text", "captionSettings.textAlignment", "captionSettings.textAnchor", "captionSettings.textAngle", "captionSettings.textPosition", "quantitativeScaleSettings.comparativeMeasureSettings", "quantitativeScaleSettings.comparativeMeasureSettings.stroke", "quantitativeScaleSettings.comparativeMeasureSettings.width", "quantitativeScaleSettings.featuredMeasureSettings", "quantitativeScaleSettings.featuredMeasureSettings.stroke", "quantitativeScaleSettings.featuredMeasureSettings.width", "quantitativeScaleSettings.fields", "quantitativeScaleSettings.fields.category", "quantitativeScaleSettings.fields.comparativeMeasure", "quantitativeScaleSettings.fields.dataSource", "quantitativeScaleSettings.fields.featureMeasures", "quantitativeScaleSettings.fields.query", "quantitativeScaleSettings.fields.tableName", "quantitativeScaleSettings.interval", "quantitativeScaleSettings.labelSettings", "quantitativeScaleSettings.labelSettings.font", "quantitativeScaleSettings.labelSettings.labelPlacement", "quantitativeScaleSettings.labelSettings.labelPrefix", "quantitativeScaleSettings.labelSettings.labelSuffix", "quantitativeScaleSettings.labelSettings.offset", "quantitativeScaleSettings.labelSettings.position", "quantitativeScaleSettings.labelSettings.size", "quantitativeScaleSettings.labelSettings.stroke", "quantitativeScaleSettings.location", "quantitativeScaleSettings.location.x", "quantitativeScaleSettings.location.y", "quantitativeScaleSettings.majorTickSettings", "quantitativeScaleSettings.majorTickSettings.size", "quantitativeScaleSettings.majorTickSettings.stroke", "quantitativeScaleSettings.majorTickSettings.width", "quantitativeScaleSettings.maximum", "quantitativeScaleSettings.minimum", "quantitativeScaleSettings.minorTickSettings", "quantitativeScaleSettings.minorTickSettings.size", "quantitativeScaleSettings.minorTickSettings.stroke", "quantitativeScaleSettings.minorTickSettings.width", "quantitativeScaleSettings.minorTicksPerInterval", "quantitativeScaleSettings.tickPlacement", "quantitativeScaleSettings.tickPosition", "tooltipSettings.captionTemplate", "tooltipSettings.enableCaptionTooltip", "tooltipSettings.template", "tooltipSettings.visible", "qualitativeRanges", "quantitativeScaleSettings.featureMeasures"], []);
            exports_5("BulletGraphComponent", BulletGraphComponent = core_6.CreateComponent("BulletGraph", {
                selector: 'ej-bulletgraph',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _qualitativeRanges: new core_6.ContentChild(QualitativeRangesDirective),
                    _quantitativeScaleSettings_featureMeasures: new core_6.ContentChild(QuantitativeScaleSettingsFeatureMeasuresDirective),
                }
            }, {
                tags: ["qualitativeRanges", "quantitativeScaleSettings.featureMeasures"],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_5("EJ_BULLETGRAPH_COMPONENTS", EJ_BULLETGRAPH_COMPONENTS = [BulletGraphComponent, QualitativeRangesDirective, QualitativeRangeDirective, QuantitativeScaleSettingsFeatureMeasuresDirective, QuantitativeScaleSettingsFeatureMeasureDirective]);
        }
    }
});
System.register("ej/button.component", ["ej/core"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_7;
    var Outputs, ComplexProperties, Inputs, ButtonComponent, EJ_BUTTON_COMPONENTS;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            Outputs = ["click", "create", "destroy"];
            ComplexProperties = [];
            Inputs = core_7.Utils.AngularizeInputs(["contentType", "cssClass", "enabled", "enableRTL", "height", "htmlAttributes", "imagePosition", "prefixIcon", "repeatButton", "showRoundedCorner", "size", "suffixIcon", "text", "timeInterval", "type", "width"], []);
            exports_6("ButtonComponent", ButtonComponent = core_7.CreateComponent("Button", {
                selector: 'ej-button',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_6("EJ_BUTTON_COMPONENTS", EJ_BUTTON_COMPONENTS = [ButtonComponent]);
        }
    }
});
System.register("ej/chart.component", ["ej/core"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_8;
    var stripLineDirective, StripLineCollectionDirective, AxisDirective, AxesDirective, TrendlineDirective, TrendlinesDirective, PointDirective, PointsDirective, SeriesDirective, SeriesCollectionDirective, IndicatorDirective, IndicatorsDirective, AnnotationDirective, AnnotationsDirective, PrimaryXAxisStripLineDirective, PrimaryXAxisStripLineCollectionDirective, PrimaryYAxisStripLineDirective, PrimaryYAxisStripLineCollectionDirective, PaletteDirective, PaletteCollectionDirective, ToolbarItemDirective, ToolbarItemsDirective, RowDefinitionDirective, RowDefinitionsDirective, ColumnDefinitionDirective, ColumnDefinitionsDirective, Outputs, ComplexProperties, Inputs, ChartComponent, EJ_CHART_COMPONENTS;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            }],
        execute: function() {
            exports_7("stripLineDirective", stripLineDirective = core_8.CreateComplexDirective({
                selector: "e-striplinecollection>e- stripline",
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("StripLineCollectionDirective", StripLineCollectionDirective = core_8.CreateArrayTagDirective("stripLine", 'e-axes>e-striplinecollection', stripLineDirective));
            exports_7("AxisDirective", AxisDirective = core_8.CreateComplexDirective({
                selector: "e-axes>e-axis",
                queries: {
                    _stripLine: new core_8.ContentChild(StripLineCollectionDirective),
                }
            }, {
                tags: ["stripLine"],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("AxesDirective", AxesDirective = core_8.CreateArrayTagDirective("axes", 'ej-chart>e-axes', AxisDirective));
            exports_7("TrendlineDirective", TrendlineDirective = core_8.CreateComplexDirective({
                selector: "e-trendlines>e-trendline",
                inputs: ["visibility", "type", "name", "fill", "width", "opacity", "dashArray", "forwardForecast", "backwardForecast", "polynomialOrder", "period"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("TrendlinesDirective", TrendlinesDirective = core_8.CreateArrayTagDirective("trendlines", 'e-series>e-trendlines', TrendlineDirective));
            exports_7("PointDirective", PointDirective = core_8.CreateComplexDirective({
                selector: "e-points>e-point",
                inputs: ["border", "visibleOnLegend", "showIntermediateSum", "showTotalSum", "close", "size", "fill", "high", "low", "marker", "open", "text", "x", "y"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("PointsDirective", PointsDirective = core_8.CreateArrayTagDirective("points", 'e-series>e-points', PointDirective));
            exports_7("SeriesDirective", SeriesDirective = core_8.CreateComplexDirective({
                selector: "e-seriescollection>e-series",
                inputs: ["bearFillColor", "border", "bullFillColor", "dashArray", "dataSource", "doughnutCoefficient", "doughnutSize", "drawType", "enableAnimation", "enableSmartLabels", "endAngle", "explode", "explodeAll", "explodeIndex", "explodeOffset", "fill", "font", "funnelHeight", "funnelWidth", "gapRatio", "isClosed", "isStacking", "isTransposed", "labelPosition", "lineCap", "lineJoin", "marker", "opacity", "palette", "pieCoefficient", "emptyPointSettings", "positiveFill", "connectorLine", "errorBar", "points", "pyramidMode", "query", "startAngle", "tooltip", "type", "visibility", "visibleOnLegend", "xAxisName", "xName", "yAxisName", "yName", "high", "low", "open", "close", "size", "trendlines", "highlightSettings", "selectionSettings"],
                queries: {
                    _Trendlines: new core_8.ContentChild(TrendlinesDirective),
                    _points: new core_8.ContentChild(PointsDirective),
                }
            }, {
                tags: ["Trendlines", "points"],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("SeriesCollectionDirective", SeriesCollectionDirective = core_8.CreateArrayTagDirective("series", 'ej-chart>e-seriescollection', SeriesDirective));
            exports_7("IndicatorDirective", IndicatorDirective = core_8.CreateComplexDirective({
                selector: "e-indicators>e-indicator",
                inputs: ["dPeriod", "enableAnimation", "fill", "histogram", "kPeriod", "longPeriod", "lowerLine", "macdLine", "macdType", "period", "periodLine", "seriesName", "shortPeriod", "standardDeviations", "tooltip", "trigger", "visibility", "type", "upperLine", "width", "xAxisName", "yAxisName"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("IndicatorsDirective", IndicatorsDirective = core_8.CreateArrayTagDirective("indicators", 'ej-chart>e-indicators', IndicatorDirective));
            exports_7("AnnotationDirective", AnnotationDirective = core_8.CreateComplexDirective({
                selector: "e-annotations>e-annotation",
                inputs: ["angle", "content", "coordinateUnit", "horizontalAlignment", "margin", "opacity", "region", "verticalAlignment", "visible", "x", "xAxisName", "y", "yAxisName"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("AnnotationsDirective", AnnotationsDirective = core_8.CreateArrayTagDirective("annotations", 'ej-chart>e-annotations', AnnotationDirective));
            exports_7("PrimaryXAxisStripLineDirective", PrimaryXAxisStripLineDirective = core_8.CreateComplexDirective({
                selector: "e-primaryxaxis-striplinecollection>e-primaryxaxis-stripline",
                inputs: ["borderColor", "color", "end", "font", "start", "startFromAxis", "text", "textAlignment", "visible", "width", "zIndex"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("PrimaryXAxisStripLineCollectionDirective", PrimaryXAxisStripLineCollectionDirective = core_8.CreateArrayTagDirective("primaryXAxis.stripLine", 'ej-chart>e-primaryxaxis-striplinecollection', PrimaryXAxisStripLineDirective));
            exports_7("PrimaryYAxisStripLineDirective", PrimaryYAxisStripLineDirective = core_8.CreateComplexDirective({
                selector: "e-primaryyaxis-striplinecollection>e-primaryyaxis-stripline",
                inputs: ["borderColor", "color", "end", "font", "start", "startFromAxis", "text", "textAlignment", "visible", "width", "zIndex"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("PrimaryYAxisStripLineCollectionDirective", PrimaryYAxisStripLineCollectionDirective = core_8.CreateArrayTagDirective("primaryYAxis.stripLine", 'ej-chart>e-primaryyaxis-striplinecollection', PrimaryYAxisStripLineDirective));
            exports_7("PaletteDirective", PaletteDirective = core_8.CreateComplexDirective({
                selector: "e-palettecollection>e-palette",
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("PaletteCollectionDirective", PaletteCollectionDirective = core_8.CreateArrayTagDirective("palette", 'ej-chart>e-palettecollection', PaletteDirective));
            exports_7("ToolbarItemDirective", ToolbarItemDirective = core_8.CreateComplexDirective({
                selector: "e-toolbaritems>e-toolbaritem",
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("ToolbarItemsDirective", ToolbarItemsDirective = core_8.CreateArrayTagDirective("toolbarItems", 'ej-chart>e-toolbaritems', ToolbarItemDirective));
            exports_7("RowDefinitionDirective", RowDefinitionDirective = core_8.CreateComplexDirective({
                selector: "e-rowdefinitions>e-rowdefinition",
                inputs: ["unit", "rowHeight", "lineColor", "lineWidth"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("RowDefinitionsDirective", RowDefinitionsDirective = core_8.CreateArrayTagDirective("rowDefinitions", 'ej-chart>e-rowdefinitions', RowDefinitionDirective));
            exports_7("ColumnDefinitionDirective", ColumnDefinitionDirective = core_8.CreateComplexDirective({
                selector: "e-columndefinitions>e-columndefinition",
                inputs: ["unit", "columnWidth", "lineColor", "lineWidth"],
                queries: {}
            }, {
                tags: [],
                type: core_8.forwardRef(function () { return ChartComponent; })
            }));
            exports_7("ColumnDefinitionsDirective", ColumnDefinitionsDirective = core_8.CreateArrayTagDirective("columnDefinitions", 'ej-chart>e-columndefinitions', ColumnDefinitionDirective));
            Outputs = ["animationComplete", "axesLabelRendering", "axesLabelsInitialize", "axesRangeCalculate", "axesTitleRendering", "chartAreaBoundsCalculate", "create", "destroy", "displayTextRendering", "legendBoundsCalculate", "legendItemClick", "legendItemMouseMove", "legendItemRendering", "load", "pointRegionClick", "pointRegionMouseMove", "preRender", "seriesRegionClick", "seriesRendering", "symbolRendering", "titleRendering", "toolTipInitialize", "trackAxisToolTip", "trackToolTip", "axisLabelClick", "axisLabelMouseMove", "chartClick", "chartMouseMove", "chartDoubleClick", "annotationClick", "afterResize", "beforeResize", "errorBarRendering", "scrollChanged", "scrollStart", "scrollEnd"];
            ComplexProperties = ["border", "exportSettings", "chartArea", "commonSeriesOptions", "crosshair", "legend", "primaryXAxis", "primaryYAxis", "size", "title", "zooming", "chartArea.border", "commonSeriesOptions.border", "commonSeriesOptions.font", "commonSeriesOptions.marker", "commonSeriesOptions.marker.border", "commonSeriesOptions.marker.dataLabel", "commonSeriesOptions.marker.dataLabel.border", "commonSeriesOptions.marker.dataLabel.connectorLine", "commonSeriesOptions.marker.dataLabel.font", "commonSeriesOptions.marker.dataLabel.margin", "commonSeriesOptions.marker.size", "commonSeriesOptions.tooltip", "commonSeriesOptions.tooltip.border", "commonSeriesOptions.emptyPointSettings", "commonSeriesOptions.emptyPointSettings.style", "commonSeriesOptions.emptyPointSettings.style.border", "commonSeriesOptions.connectorLine", "commonSeriesOptions.errorBar", "commonSeriesOptions.errorBar.cap", "commonSeriesOptions.highlightSettings", "commonSeriesOptions.highlightSettings.border", "commonSeriesOptions.selectionSettings", "commonSeriesOptions.selectionSettings.border", "crosshair.marker", "crosshair.marker.border", "crosshair.marker.size", "legend.border", "legend.font", "legend.itemStyle", "legend.itemStyle.border", "legend.location", "legend.size", "legend.title", "legend.title.font", "title.border", "primaryXAxis.alternateGridBand", "primaryXAxis.alternateGridBand.even", "primaryXAxis.alternateGridBand.odd", "primaryXAxis.axisLine", "primaryXAxis.crosshairLabel", "primaryXAxis.font", "primaryXAxis.majorGridLines", "primaryXAxis.majorTickLines", "primaryXAxis.minorGridLines", "primaryXAxis.minorTickLines", "primaryXAxis.range", "primaryXAxis.title", "primaryXAxis.title.font", "primaryYAxis.alternateGridBand", "primaryYAxis.alternateGridBand.even", "primaryYAxis.alternateGridBand.odd", "primaryYAxis.axisLine", "primaryYAxis.crosshairLabel", "primaryYAxis.font", "primaryYAxis.majorGridLines", "primaryYAxis.majorTickLines", "primaryYAxis.minorGridLines", "primaryYAxis.minorTickLines", "primaryYAxis.title", "primaryYAxis.title.font", "title.font", "title.subTitle", "title.subTitle.font", "title.subTitle.border"];
            Inputs = core_8.Utils.AngularizeInputs(["backGroundImageUrl", "border", "exportSettings", "chartArea", "commonSeriesOptions", "crosshair", "depth", "enable3D", "enableCanvasRendering", "enableRotation", "isResponsive", "legend", "locale", "Margin", "perspectiveAngle", "primaryXAxis", "primaryYAxis", "rotation", "sideBySideSeriesPlacement", "size", "theme", "tilt", "title", "wallSize", "zooming", "border.color", "border.opacity", "border.width", "exportSettings.filename", "exportSettings.action", "exportSettings.angle", "exportSettings.type", "exportSettings.orientation", "exportSettings.mode", "exportSettings.multipleExport", "chartArea.background", "chartArea.border", "chartArea.border.color", "chartArea.border.opacity", "chartArea.border.width", "commonSeriesOptions.border", "commonSeriesOptions.border.color", "commonSeriesOptions.border.dashArray", "commonSeriesOptions.border.width", "commonSeriesOptions.visibleOnLegend", "commonSeriesOptions.dashArray", "commonSeriesOptions.dataSource", "commonSeriesOptions.doughnutCoefficient", "commonSeriesOptions.doughnutSize", "commonSeriesOptions.drawType", "commonSeriesOptions.enableAnimation", "commonSeriesOptions.enableSmartLabels", "commonSeriesOptions.endAngle", "commonSeriesOptions.explode", "commonSeriesOptions.explodeAll", "commonSeriesOptions.explodeIndex", "commonSeriesOptions.explodeOffset", "commonSeriesOptions.fill", "commonSeriesOptions.font", "commonSeriesOptions.font.color", "commonSeriesOptions.font.fontFamily", "commonSeriesOptions.font.fontStyle", "commonSeriesOptions.font.fontWeight", "commonSeriesOptions.font.opacity", "commonSeriesOptions.font.size", "commonSeriesOptions.funnelHeight", "commonSeriesOptions.funnelWidth", "commonSeriesOptions.gapRatio", "commonSeriesOptions.isClosed", "commonSeriesOptions.isStacking", "commonSeriesOptions.isTransposed", "commonSeriesOptions.labelPosition", "commonSeriesOptions.lineCap", "commonSeriesOptions.lineJoin", "commonSeriesOptions.marker", "commonSeriesOptions.marker.border", "commonSeriesOptions.marker.dataLabel", "commonSeriesOptions.marker.fill", "commonSeriesOptions.marker.imageUrl", "commonSeriesOptions.marker.opacity", "commonSeriesOptions.marker.shape", "commonSeriesOptions.marker.size", "commonSeriesOptions.marker.visible", "commonSeriesOptions.opacity", "commonSeriesOptions.palette", "commonSeriesOptions.pieCoefficient", "commonSeriesOptions.pyramidMode", "commonSeriesOptions.startAngle", "commonSeriesOptions.tooltip", "commonSeriesOptions.tooltip.border", "commonSeriesOptions.tooltip.rx", "commonSeriesOptions.tooltip.ry", "commonSeriesOptions.tooltip.duration", "commonSeriesOptions.tooltip.enableAnimation", "commonSeriesOptions.tooltip.fill", "commonSeriesOptions.tooltip.format", "commonSeriesOptions.tooltip.opacity", "commonSeriesOptions.tooltip.template", "commonSeriesOptions.tooltip.visible", "commonSeriesOptions.type", "commonSeriesOptions.xAxisName", "commonSeriesOptions.xName", "commonSeriesOptions.yAxisName", "commonSeriesOptions.yName", "commonSeriesOptions.high", "commonSeriesOptions.low", "commonSeriesOptions.open", "commonSeriesOptions.close", "commonSeriesOptions.size", "commonSeriesOptions.emptyPointSettings", "commonSeriesOptions.emptyPointSettings.visible", "commonSeriesOptions.emptyPointSettings.displayMode", "commonSeriesOptions.emptyPointSettings.style", "commonSeriesOptions.positiveFill", "commonSeriesOptions.connectorLine", "commonSeriesOptions.connectorLine.width", "commonSeriesOptions.connectorLine.color", "commonSeriesOptions.connectorLine.dashArray", "commonSeriesOptions.connectorLine.opacity", "commonSeriesOptions.errorBar", "commonSeriesOptions.errorBar.visibility", "commonSeriesOptions.errorBar.type", "commonSeriesOptions.errorBar.mode", "commonSeriesOptions.errorBar.direction", "commonSeriesOptions.errorBar.verticalErrorValue", "commonSeriesOptions.errorBar.horizontalErrorValue", "commonSeriesOptions.errorBar.horizontalPositiveErrorValue", "commonSeriesOptions.errorBar.horizontalNegativeErrorValue", "commonSeriesOptions.errorBar.verticalPositiveErrorValue", "commonSeriesOptions.errorBar.verticalNegativeErrorValue", "commonSeriesOptions.errorBar.fill", "commonSeriesOptions.errorBar.width", "commonSeriesOptions.errorBar.cap", "commonSeriesOptions.highlightSettings", "commonSeriesOptions.highlightSettings.enable", "commonSeriesOptions.highlightSettings.mode", "commonSeriesOptions.highlightSettings.color", "commonSeriesOptions.highlightSettings.opacity", "commonSeriesOptions.highlightSettings.border", "commonSeriesOptions.highlightSettings.pattern", "commonSeriesOptions.highlightSettings.customPattern", "commonSeriesOptions.selectionSettings", "commonSeriesOptions.selectionSettings.enable", "commonSeriesOptions.selectionSettings.type", "commonSeriesOptions.selectionSettings.mode", "commonSeriesOptions.selectionSettings.rangeType", "commonSeriesOptions.selectionSettings.color", "commonSeriesOptions.selectionSettings.opacity", "commonSeriesOptions.selectionSettings.border", "commonSeriesOptions.selectionSettings.pattern", "commonSeriesOptions.selectionSettings.customPattern", "crosshair.marker", "crosshair.marker.border", "crosshair.marker.opacity", "crosshair.marker.size", "crosshair.marker.visible", "crosshair.type", "crosshair.visible", "legend.alignment", "legend.background", "legend.border", "legend.border.color", "legend.border.width", "legend.columnCount", "legend.enableScrollbar", "legend.fill", "legend.font", "legend.font.fontFamily", "legend.font.fontStyle", "legend.font.fontWeight", "legend.font.size", "legend.itemPadding", "legend.itemStyle", "legend.itemStyle.border", "legend.itemStyle.height", "legend.itemStyle.width", "legend.location", "legend.location.x", "legend.location.y", "legend.opacity", "legend.position", "legend.rowCount", "legend.shape", "legend.size", "legend.size.height", "legend.size.width", "legend.title", "legend.title.font", "legend.title.text", "legend.title.textAlignment", "legend.textOverflow", "legend.textWidth", "legend.visible", "primaryXAxis.alternateGridBand", "primaryXAxis.alternateGridBand.even", "primaryXAxis.alternateGridBand.odd", "primaryXAxis.isIndexed", "primaryXAxis.axisLine", "primaryXAxis.axisLine.dashArray", "primaryXAxis.axisLine.offset", "primaryXAxis.axisLine.visible", "primaryXAxis.axisLine.width", "primaryXAxis.columnIndex", "primaryXAxis.columnSpan", "primaryXAxis.crosshairLabel", "primaryXAxis.crosshairLabel.visible", "primaryXAxis.desiredIntervals", "primaryXAxis.edgeLabelPlacement", "primaryXAxis.enableTrim", "primaryXAxis.font", "primaryXAxis.font.fontFamily", "primaryXAxis.font.fontStyle", "primaryXAxis.font.fontWeight", "primaryXAxis.font.opacity", "primaryXAxis.font.size", "primaryXAxis.intervalType", "primaryXAxis.isInversed", "primaryXAxis.labelFormat", "primaryXAxis.labelIntersectAction", "primaryXAxis.labelPosition", "primaryXAxis.labelRotation", "primaryXAxis.logBase", "primaryXAxis.majorGridLines", "primaryXAxis.majorGridLines.dashArray", "primaryXAxis.majorGridLines.opacity", "primaryXAxis.majorGridLines.visible", "primaryXAxis.majorGridLines.width", "primaryXAxis.majorTickLines", "primaryXAxis.majorTickLines.size", "primaryXAxis.majorTickLines.visible", "primaryXAxis.majorTickLines.width", "primaryXAxis.maximumLabels", "primaryXAxis.maximumLabelWidth", "primaryXAxis.minorGridLines", "primaryXAxis.minorGridLines.dashArray", "primaryXAxis.minorGridLines.visible", "primaryXAxis.minorGridLines.width", "primaryXAxis.minorTickLines", "primaryXAxis.minorTickLines.size", "primaryXAxis.minorTickLines.visible", "primaryXAxis.minorTickLines.width", "primaryXAxis.minorTicksPerInterval", "primaryXAxis.name", "primaryXAxis.opposedPosition", "primaryXAxis.plotOffset", "primaryXAxis.range", "primaryXAxis.range.minimum", "primaryXAxis.range.maximum", "primaryXAxis.range.interval", "primaryXAxis.rangePadding", "primaryXAxis.roundingPlaces", "primaryXAxis.tickLinesPosition", "primaryXAxis.title", "primaryXAxis.title.enableTrim", "primaryXAxis.title.font", "primaryXAxis.title.maximumTitleWidth", "primaryXAxis.title.text", "primaryXAxis.title.visible", "primaryXAxis.valueType", "primaryXAxis.visible", "primaryXAxis.zoomFactor", "primaryXAxis.zoomPosition", "primaryYAxis.alternateGridBand", "primaryYAxis.alternateGridBand.even", "primaryYAxis.alternateGridBand.odd", "primaryYAxis.axisLine", "primaryYAxis.axisLine.dashArray", "primaryYAxis.axisLine.offset", "primaryYAxis.axisLine.visible", "primaryYAxis.axisLine.width", "primaryYAxis.crosshairLabel", "primaryYAxis.crosshairLabel.visible", "primaryYAxis.desiredIntervals", "primaryYAxis.edgeLabelPlacement", "primaryYAxis.enableTrim", "primaryYAxis.font", "primaryYAxis.font.fontFamily", "primaryYAxis.font.fontStyle", "primaryYAxis.font.fontWeight", "primaryYAxis.font.opacity", "primaryYAxis.font.size", "primaryYAxis.intervalType", "primaryYAxis.isInversed", "primaryYAxis.labelFormat", "primaryYAxis.labelIntersectAction", "primaryYAxis.labelPosition", "primaryYAxis.logBase", "primaryYAxis.majorGridLines", "primaryYAxis.majorGridLines.dashArray", "primaryYAxis.majorGridLines.opacity", "primaryYAxis.majorGridLines.visible", "primaryYAxis.majorGridLines.width", "primaryYAxis.majorTickLines", "primaryYAxis.majorTickLines.size", "primaryYAxis.majorTickLines.visible", "primaryYAxis.majorTickLines.width", "primaryYAxis.maximumLabels", "primaryYAxis.maximumLabelWidth", "primaryYAxis.minorGridLines", "primaryYAxis.minorGridLines.dashArray", "primaryYAxis.minorGridLines.visible", "primaryYAxis.minorGridLines.width", "primaryYAxis.minorTickLines", "primaryYAxis.minorTickLines.size", "primaryYAxis.minorTickLines.visible", "primaryYAxis.minorTickLines.width", "primaryYAxis.minorTicksPerInterval", "primaryYAxis.name", "primaryYAxis.opposedPosition", "primaryYAxis.plotOffset", "primaryYAxis.rangePadding", "primaryYAxis.roundingPlaces", "primaryYAxis.rowIndex", "primaryYAxis.rowSpan", "primaryYAxis.tickLinesPosition", "primaryYAxis.title", "primaryYAxis.title.enableTrim", "primaryYAxis.title.font", "primaryYAxis.title.maximumTitleWidth", "primaryYAxis.title.text", "primaryYAxis.title.visible", "primaryYAxis.valueType", "primaryYAxis.visible", "primaryYAxis.zoomFactor", "primaryYAxis.zoomPosition", "size.height", "size.width", "title.background", "title.border", "title.border.width", "title.border.color", "title.border.opacity", "title.border.cornerRadius", "title.font", "title.font.fontFamily", "title.font.fontStyle", "title.font.fontWeight", "title.font.opacity", "title.font.size", "title.subTitle", "title.subTitle.font", "title.subTitle.background", "title.subTitle.border", "title.subTitle.text", "title.subTitle.textAlignment", "title.text", "title.textAlignment", "zooming.enable", "zooming.enableDeferredZoom", "zooming.enableMouseWheel", "zooming.type", "zooming.toolbarItems", "annotations", "columnDefinitions", "indicators", "rowDefinitions", "series", "commonSeriesOptions.trendlines", "primaryXAxis.stripLine", "primaryYAxis.stripLine"], []);
            exports_7("ChartComponent", ChartComponent = core_8.CreateComponent("Chart", {
                selector: 'ej-chart',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _axes: new core_8.ContentChild(AxesDirective),
                    _series: new core_8.ContentChild(SeriesCollectionDirective),
                    _indicators: new core_8.ContentChild(IndicatorsDirective),
                    _annotations: new core_8.ContentChild(AnnotationsDirective),
                    _primaryXAxis_stripLine: new core_8.ContentChild(PrimaryXAxisStripLineCollectionDirective),
                    _primaryYAxis_stripLine: new core_8.ContentChild(PrimaryYAxisStripLineCollectionDirective),
                    _palette: new core_8.ContentChild(PaletteCollectionDirective),
                    _toolbarItems: new core_8.ContentChild(ToolbarItemsDirective),
                    _rowDefinitions: new core_8.ContentChild(RowDefinitionsDirective),
                    _columnDefinitions: new core_8.ContentChild(ColumnDefinitionsDirective),
                }
            }, {
                tags: ["axes", "series", "indicators", "annotations", "primaryXAxis.stripLine", "primaryYAxis.stripLine", "palette", "toolbarItems", "rowDefinitions", "columnDefinitions"],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_7("EJ_CHART_COMPONENTS", EJ_CHART_COMPONENTS = [ChartComponent, StripLineCollectionDirective, stripLineDirective, AxesDirective, AxisDirective, TrendlinesDirective, TrendlineDirective, PointsDirective, PointDirective, SeriesCollectionDirective, SeriesDirective, IndicatorsDirective, IndicatorDirective, AnnotationsDirective, AnnotationDirective, PrimaryXAxisStripLineCollectionDirective, PrimaryXAxisStripLineDirective, PrimaryYAxisStripLineCollectionDirective, PrimaryYAxisStripLineDirective, PaletteCollectionDirective, PaletteDirective, ToolbarItemsDirective, ToolbarItemDirective, RowDefinitionsDirective, RowDefinitionDirective, ColumnDefinitionsDirective, ColumnDefinitionDirective]);
        }
    }
});
System.register("ej/checkbox.component", ["ej/core"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_9;
    var Outputs, ComplexProperties, Inputs, CheckBoxComponent, EJ_CHECKBOX_COMPONENTS;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            }],
        execute: function() {
            Outputs = ["beforeChange", "change", "create", "destroy", "model.checkedChange: checkedChange"];
            ComplexProperties = [];
            Inputs = core_9.Utils.AngularizeInputs(["checkState", "cssClass", "enabled", "enablePersistence", "enableRTL", "enableTriState", "htmlAttributes", "id", "idPrefix", "name", "showRoundedCorner", "size", "text", "validationMessage", "validationRules", "value"], ["checked"]);
            exports_8("CheckBoxComponent", CheckBoxComponent = core_9.CreateComponent("CheckBox", {
                selector: 'ej-checkbox',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: ["checked"],
                complexes: ComplexProperties,
            }));
            exports_8("EJ_CHECKBOX_COMPONENTS", EJ_CHECKBOX_COMPONENTS = [CheckBoxComponent]);
        }
    }
});
System.register("ej/circulargauge.component", ["ej/core"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_10;
    var PointerDirective, PointersDirective, LabelDirective, LabelsDirective, TickDirective, TicksDirective, RangeDirective, RangesDirective, StateRangeDirective, StateRangesDirective, IndicatorDirective, IndicatorsDirective, SubGaugeDirective, SubGaugesDirective, CustomLabelDirective, CustomLabelsDirective, ScaleDirective, ScalesDirective, Outputs, ComplexProperties, Inputs, CircularGaugeComponent, EJ_CIRCULARGAUGE_COMPONENTS;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            exports_9("PointerDirective", PointerDirective = core_10.CreateComplexDirective({
                selector: "e-pointers>e-pointer",
                inputs: ["backgroundColor", "backNeedleLength", "border", "distanceFromScale", "gradients", "imageUrl", "length", "markerType", "needleType", "opacity", "placement", "pointerValueText", "showBackNeedle", "type", "value", "width"],
                queries: {}
            }, {
                tags: [],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("PointersDirective", PointersDirective = core_10.CreateArrayTagDirective("pointers", 'e-scales>e-pointers', PointerDirective));
            exports_9("LabelDirective", LabelDirective = core_10.CreateComplexDirective({
                selector: "e-labels>e-label",
                inputs: ["angle", "autoAngle", "color", "distanceFromScale", "font", "includeFirstValue", "opacity", "placement", "type", "unitText", "unitTextPosition"],
                queries: {}
            }, {
                tags: [],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("LabelsDirective", LabelsDirective = core_10.CreateArrayTagDirective("labels", 'e-scales>e-labels', LabelDirective));
            exports_9("TickDirective", TickDirective = core_10.CreateComplexDirective({
                selector: "e-ticks>e-tick",
                inputs: ["angle", "color", "distanceFromScale", "height", "placement", "type", "width"],
                queries: {}
            }, {
                tags: [],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("TicksDirective", TicksDirective = core_10.CreateArrayTagDirective("ticks", 'e-scales>e-ticks', TickDirective));
            exports_9("RangeDirective", RangeDirective = core_10.CreateComplexDirective({
                selector: "e-ranges>e-range",
                inputs: ["backgroundColor", "border", "distanceFromScale", "endValue", "endWidth", "gradients", "opacity", "placement", "size", "startValue", "startWidth"],
                queries: {}
            }, {
                tags: [],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("RangesDirective", RangesDirective = core_10.CreateArrayTagDirective("ranges", 'e-scales>e-ranges', RangeDirective));
            exports_9("StateRangeDirective", StateRangeDirective = core_10.CreateComplexDirective({
                selector: "e-stateranges>e-staterange",
                inputs: ["backgroundColor", "borderColor", "endValue", "font", "startValue", "text", "textColor"],
                queries: {}
            }, {
                tags: [],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("StateRangesDirective", StateRangesDirective = core_10.CreateArrayTagDirective("stateRanges", 'e-indicators>e-stateranges', StateRangeDirective));
            exports_9("IndicatorDirective", IndicatorDirective = core_10.CreateComplexDirective({
                selector: "e-indicators>e-indicator",
                inputs: ["height", "imageUrl", "position", "stateRanges", "type", "width"],
                queries: {
                    _stateRanges: new core_10.ContentChild(StateRangesDirective),
                }
            }, {
                tags: ["stateRanges"],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("IndicatorsDirective", IndicatorsDirective = core_10.CreateArrayTagDirective("indicators", 'e-scales>e-indicators', IndicatorDirective));
            exports_9("SubGaugeDirective", SubGaugeDirective = core_10.CreateComplexDirective({
                selector: "e-subgauges>e-subgauge",
                inputs: ["height", "position", "width"],
                queries: {}
            }, {
                tags: [],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("SubGaugesDirective", SubGaugesDirective = core_10.CreateArrayTagDirective("subGauges", 'e-scales>e-subgauges', SubGaugeDirective));
            exports_9("CustomLabelDirective", CustomLabelDirective = core_10.CreateComplexDirective({
                selector: "e-customlabels>e-customlabel",
                queries: {}
            }, {
                tags: [],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("CustomLabelsDirective", CustomLabelsDirective = core_10.CreateArrayTagDirective("customLabels", 'e-scales>e-customlabels', CustomLabelDirective));
            exports_9("ScaleDirective", ScaleDirective = core_10.CreateComplexDirective({
                selector: "e-scales>e-scale",
                inputs: ["backgroundColor", "border", "direction", "indicators", "labels", "majorIntervalValue", "maximum", "minimum", "minorIntervalValue", "opacity", "pointerCap", "pointers", "radius", "ranges", "shadowOffset", "showIndicators", "showLabels", "showPointers", "showRanges", "showScaleBar", "showTicks", "size", "startAngle", "subGauges", "sweepAngle", "ticks"],
                queries: {
                    _pointers: new core_10.ContentChild(PointersDirective),
                    _labels: new core_10.ContentChild(LabelsDirective),
                    _ticks: new core_10.ContentChild(TicksDirective),
                    _ranges: new core_10.ContentChild(RangesDirective),
                    _indicators: new core_10.ContentChild(IndicatorsDirective),
                    _subGauges: new core_10.ContentChild(SubGaugesDirective),
                    _customLabels: new core_10.ContentChild(CustomLabelsDirective),
                }
            }, {
                tags: ["pointers", "labels", "ticks", "ranges", "indicators", "subGauges", "customLabels"],
                type: core_10.forwardRef(function () { return CircularGaugeComponent; })
            }));
            exports_9("ScalesDirective", ScalesDirective = core_10.CreateArrayTagDirective("scales", 'ej-circulargauge>e-scales', ScaleDirective));
            Outputs = ["drawCustomLabel", "drawIndicators", "drawLabels", "drawPointerCap", "drawPointers", "drawRange", "drawTicks", "load", "mouseClick", "mouseClickMove", "mouseClickUp", "renderComplete", "model.valueChange: valueChange", "model.minimumChange: minimumChange", "model.maximumChange: maximumChange"];
            ComplexProperties = ["frame", "scales", "tooltip", "scales.border", "scales.pointerCap"];
            Inputs = core_10.Utils.AngularizeInputs(["animationSpeed", "backgroundColor", "distanceFromCorner", "enableAnimation", "frame", "gaugePosition", "height", "interiorGradient", "isRadialGradient", "isResponsive", "outerCustomLabelPosition", "radius", "readOnly", "scales", "theme", "tooltip", "width", "frame.backgroundImageUrl", "frame.frameType", "frame.halfCircleFrameEndAngle", "frame.halfCircleFrameStartAngle", "scales.backgroundColor", "scales.border", "scales.border.color", "scales.border.width", "scales.direction", "scales.majorIntervalValue", "scales.maximum", "scales.minimum", "scales.minorIntervalValue", "scales.opacity", "scales.pointerCap", "scales.pointerCap.backgroundColor", "scales.pointerCap.borderColor", "scales.pointerCap.borderWidth", "scales.pointerCap.interiorGradient", "scales.pointerCap.radius", "scales.radius", "scales.shadowOffset", "scales.showIndicators", "scales.showLabels", "scales.showPointers", "scales.showRanges", "scales.showScaleBar", "scales.showTicks", "scales.size", "scales.startAngle", "scales.sweepAngle", "tooltip.showCustomLabelTooltip", "tooltip.showLabelTooltip", "tooltip.templateID", "scales.indicators", "scales.labels", "scales.pointers", "scales.ranges", "scales.subGauges", "scales.ticks"], ["value", "minimum", "maximum"]);
            exports_9("CircularGaugeComponent", CircularGaugeComponent = core_10.CreateComponent("CircularGauge", {
                selector: 'ej-circulargauge',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _scales: new core_10.ContentChild(ScalesDirective),
                }
            }, {
                tags: ["scales"],
                twoways: ["value", "minimum", "maximum"],
                complexes: ComplexProperties,
            }));
            exports_9("EJ_CIRCULARGAUGE_COMPONENTS", EJ_CIRCULARGAUGE_COMPONENTS = [CircularGaugeComponent, PointersDirective, PointerDirective, LabelsDirective, LabelDirective, TicksDirective, TickDirective, RangesDirective, RangeDirective, StateRangesDirective, StateRangeDirective, IndicatorsDirective, IndicatorDirective, SubGaugesDirective, SubGaugeDirective, CustomLabelsDirective, CustomLabelDirective, ScalesDirective, ScaleDirective]);
        }
    }
});
System.register("ej/colorpicker.component", ["ej/core"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_11;
    var Outputs, ComplexProperties, Inputs, ColorPickerComponent, ColorPickerValueAccessor, EJ_COLORPICKER_COMPONENTS;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            }],
        execute: function() {
            Outputs = ["change", "close", "create", "destroy", "open", "select", "model.valueChange: valueChange", "model.opacityValueChange: opacityValueChange"];
            ComplexProperties = [];
            Inputs = core_11.Utils.AngularizeInputs(["buttonText", "buttonMode", "columns", "cssClass", "displayInline", "enabled", "enableOpacity", "htmlAttributes", "modelType", "palette", "presetType", "showApplyCancel", "showClearButton", "showPreview", "showRecentColors", "showTooltip", "toolIcon", "tooltipText"], ["value", "opacityValue"]);
            exports_10("ColorPickerComponent", ColorPickerComponent = core_11.CreateComponent("ColorPicker", {
                selector: '[ej-colorpicker]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: ["value", "opacityValue"],
                complexes: ComplexProperties,
            }));
            exports_10("ColorPickerValueAccessor", ColorPickerValueAccessor = core_11.CreateControlValueAccessor("[ej-colorpicker]", ColorPickerComponent));
            exports_10("EJ_COLORPICKER_COMPONENTS", EJ_COLORPICKER_COMPONENTS = [ColorPickerComponent, ColorPickerValueAccessor]);
        }
    }
});
System.register("ej/currencytextbox.component", ["ej/core"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_12;
    var Outputs, ComplexProperties, Inputs, CurrencyTextboxComponent, CurrencyTextboxValueAccessor, EJ_CURRENCYTEXTBOX_COMPONENTS;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            }],
        execute: function() {
            Outputs = ["change", "create", "destroy", "focusIn", "focusOut"];
            ComplexProperties = [];
            Inputs = core_12.Utils.AngularizeInputs(["cssClass", "decimalPlaces", "enabled", "enablePersistence", "enableRTL", "enableStrictMode", "groupSeparator", "height", "htmlAttributes", "incrementStep", "locale", "maxValue", "minValue", "name", "readOnly", "showRoundedCorner", "showSpinButton", "validateOnType", "validationMessage", "validationRules", "value", "watermarkText", "width"], []);
            exports_11("CurrencyTextboxComponent", CurrencyTextboxComponent = core_12.CreateComponent("CurrencyTextbox", {
                selector: '[ej-currencytextbox]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_11("CurrencyTextboxValueAccessor", CurrencyTextboxValueAccessor = core_12.CreateControlValueAccessor("[ej-currencytextbox]", CurrencyTextboxComponent));
            exports_11("EJ_CURRENCYTEXTBOX_COMPONENTS", EJ_CURRENCYTEXTBOX_COMPONENTS = [CurrencyTextboxComponent, CurrencyTextboxValueAccessor]);
        }
    }
});
System.register("ej/datepicker.component", ["ej/core"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_13;
    var Outputs, ComplexProperties, Inputs, DatePickerComponent, DatePickerValueAccessor, EJ_DATEPICKER_COMPONENTS;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            }],
        execute: function() {
            Outputs = ["beforeClose", "beforeDateCreate", "beforeOpen", "change", "close", "create", "destroy", "focusIn", "focusOut", "open", "select"];
            ComplexProperties = ["fields"];
            Inputs = core_13.Utils.AngularizeInputs(["allowEdit", "allowDrillDown", "buttonText", "cssClass", "dateFormat", "dayHeaderFormat", "depthLevel", "displayInline", "enableAnimation", "enabled", "enablePersistence", "enableRTL", "enableStrictMode", "fields", "headerFormat", "height", "highlightSection", "highlightWeekend", "htmlAttributes", "locale", "maxDate", "minDate", "readOnly", "showFooter", "showOtherMonths", "showPopupButton", "showRoundedCorner", "showTooltip", "specialDates", "startDay", "startLevel", "stepMonths", "tooltipFormat", "validationMessage", "validationRules", "value", "watermarkText", "width", "fields.date", "fields.iconClass", "fields.tooltip"], []);
            exports_12("DatePickerComponent", DatePickerComponent = core_13.CreateComponent("DatePicker", {
                selector: '[ej-datepicker]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_12("DatePickerValueAccessor", DatePickerValueAccessor = core_13.CreateControlValueAccessor("[ej-datepicker]", DatePickerComponent));
            exports_12("EJ_DATEPICKER_COMPONENTS", EJ_DATEPICKER_COMPONENTS = [DatePickerComponent, DatePickerValueAccessor]);
        }
    }
});
System.register("ej/datetimepicker.component", ["ej/core"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_14;
    var Outputs, ComplexProperties, Inputs, DateTimePickerComponent, DateTimePickerValueAccessor, EJ_DATETIMEPICKER_COMPONENTS;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
            }],
        execute: function() {
            Outputs = ["change", "close", "create", "destroy", "focusIn", "focusOut", "open"];
            ComplexProperties = ["buttonText", "timeDrillDown"];
            Inputs = core_14.Utils.AngularizeInputs(["buttonText", "cssClass", "dateTimeFormat", "dayHeaderFormat", "depthLevel", "enableAnimation", "enabled", "enablePersistence", "enableRTL", "enableStrictMode", "headerFormat", "height", "htmlAttributes", "interval", "locale", "maxDateTime", "minDateTime", "popupPosition", "readOnly", "showOtherMonths", "showPopupButton", "showRoundedCorner", "startDay", "startLevel", "stepMonths", "timeDisplayFormat", "timeDrillDown", "timePopupWidth", "validationMessage", "validationRules", "value", "width", "buttonText.done", "buttonText.timeNow", "buttonText.timeTitle", "buttonText.today", "timeDrillDown.enabled", "timeDrillDown.interval", "timeDrillDown.showMeridian", "timeDrillDown.autoClose"], []);
            exports_13("DateTimePickerComponent", DateTimePickerComponent = core_14.CreateComponent("DateTimePicker", {
                selector: '[ej-datetimepicker]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_13("DateTimePickerValueAccessor", DateTimePickerValueAccessor = core_14.CreateControlValueAccessor("[ej-datetimepicker]", DateTimePickerComponent));
            exports_13("EJ_DATETIMEPICKER_COMPONENTS", EJ_DATETIMEPICKER_COMPONENTS = [DateTimePickerComponent, DateTimePickerValueAccessor]);
        }
    }
});
System.register("ej/dialog.component", ["ej/core"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_15;
    var Outputs, ComplexProperties, Inputs, DialogComponent, EJ_DIALOG_COMPONENTS;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
            }],
        execute: function() {
            Outputs = ["beforeOpen", "ajaxError", "ajaxSuccess", "beforeClose", "close", "contentLoad", "create", "destroy", "drag", "dragStart", "dragStop", "open", "resize", "resizeStart", "resizeStop", "expand", "collapse"];
            ComplexProperties = [];
            Inputs = core_15.Utils.AngularizeInputs(["actionButtons", "allowDraggable", "allowKeyboardNavigation", "animation", "closeIconTooltip", "closeOnEscape", "containment", "contentType", "contentUrl", "cssClass", "enableAnimation", "enabled", "enableModal", "enablePersistence", "enableResize", "enableRTL", "faviconCSS", "height", "isResponsive", "locale", "maxHeight", "maxWidth", "minHeight", "minWidth", "position", "showHeader", "showOnInit", "showRoundedCorner", "target", "title", "tooltip", "width", "zIndex"], []);
            exports_14("DialogComponent", DialogComponent = core_15.CreateComponent("Dialog", {
                selector: 'ej-dialog',
                inputs: Inputs,
                outputs: Outputs,
                template: "<ng-content></ng-content>",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_14("EJ_DIALOG_COMPONENTS", EJ_DIALOG_COMPONENTS = [DialogComponent]);
        }
    }
});
System.register("ej/digitalgauge.component", ["ej/core"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_16;
    var ItemDirective, ItemsDirective, Outputs, ComplexProperties, Inputs, DigitalGaugeComponent, EJ_DIGITALGAUGE_COMPONENTS;
    return {
        setters:[
            function (core_16_1) {
                core_16 = core_16_1;
            }],
        execute: function() {
            exports_15("ItemDirective", ItemDirective = core_16.CreateComplexDirective({
                selector: "e-items>e-item",
                inputs: ["characterSettings", "enableCustomFont", "font", "position", "segmentSettings", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "textAlign", "textColor", "value"],
                queries: {}
            }, {
                tags: [],
                type: core_16.forwardRef(function () { return DigitalGaugeComponent; })
            }));
            exports_15("ItemsDirective", ItemsDirective = core_16.CreateArrayTagDirective("items", 'ej-digitalgauge>e-items', ItemDirective));
            Outputs = ["init", "itemRendering", "load", "renderComplete", "model.valueChange: valueChange"];
            ComplexProperties = ["frame", "items", "items.characterSettings", "items.font", "items.position", "items.segmentSettings"];
            Inputs = core_16.Utils.AngularizeInputs(["frame", "height", "isResponsive", "items", "matrixSegmentData", "segmentData", "themes", "width", "frame.backgroundImageUrl", "frame.innerWidth", "frame.outerWidth", "items.characterSettings", "items.characterSettings.count", "items.characterSettings.opacity", "items.characterSettings.spacing", "items.characterSettings.type", "items.enableCustomFont", "items.font", "items.font.fontFamily", "items.font.fontStyle", "items.font.size", "items.position", "items.position.x", "items.position.y", "items.segmentSettings", "items.segmentSettings.color", "items.segmentSettings.gradient", "items.segmentSettings.length", "items.segmentSettings.opacity", "items.segmentSettings.spacing", "items.segmentSettings.width", "items.shadowBlur", "items.shadowColor", "items.shadowOffsetX", "items.shadowOffsetY", "items.textAlign", "items.textColor", "items.value"], ["value"]);
            exports_15("DigitalGaugeComponent", DigitalGaugeComponent = core_16.CreateComponent("DigitalGauge", {
                selector: 'ej-digitalgauge',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _items: new core_16.ContentChild(ItemsDirective),
                }
            }, {
                tags: ["items"],
                twoways: ["value"],
                complexes: ComplexProperties,
            }));
            exports_15("EJ_DIGITALGAUGE_COMPONENTS", EJ_DIGITALGAUGE_COMPONENTS = [DigitalGaugeComponent, ItemsDirective, ItemDirective]);
        }
    }
});
System.register("ej/dropdownlist.component", ["ej/core"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_17;
    var Outputs, ComplexProperties, Inputs, DropDownListComponent, DropDownListValueAccessor, EJ_DROPDOWNLIST_COMPONENTS;
    return {
        setters:[
            function (core_17_1) {
                core_17 = core_17_1;
            }],
        execute: function() {
            Outputs = ["actionBegin", "actionComplete", "actionFailure", "actionSuccess", "beforePopupHide", "beforePopupShown", "cascade", "change", "checkChange", "create", "dataBound", "destroy", "popupHide", "popupResize", "popupShown", "popupResizeStart", "popupResizeStop", "search", "select", "model.valueChange: valueChange"];
            ComplexProperties = ["fields"];
            Inputs = core_17.Utils.AngularizeInputs(["cascadeTo", "caseSensitiveSearch", "cssClass", "dataSource", "delimiterChar", "enableAnimation", "enabled", "enableIncrementalSearch", "enableFilterSearch", "enablePersistence", "enablePopupResize", "enableRTL", "enableSorting", "fields", "filterType", "headerTemplate", "height", "htmlAttributes", "itemsCount", "maxPopupHeight", "minPopupHeight", "maxPopupWidth", "minPopupWidth", "multiSelectMode", "popupHeight", "popupWidth", "query", "readOnly", "selectedIndex", "showCheckbox", "showPopupOnLoad", "showRoundedCorner", "sortOrder", "targetID", "template", "text", "validationMessage", "validationRules", "watermarkText", "width", "virtualScrollMode", "fields.groupBy", "fields.htmlAttributes", "fields.id", "fields.imageAttributes", "fields.imageUrl", "fields.selected", "fields.spriteCssClass", "fields.tableName", "fields.text", "fields.value"], ["value"]);
            exports_16("DropDownListComponent", DropDownListComponent = core_17.CreateComponent("DropDownList", {
                selector: '[ej-dropdownlist]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: ["value"],
                complexes: ComplexProperties,
            }));
            exports_16("DropDownListValueAccessor", DropDownListValueAccessor = core_17.CreateControlValueAccessor("[ej-dropdownlist]", DropDownListComponent));
            exports_16("EJ_DROPDOWNLIST_COMPONENTS", EJ_DROPDOWNLIST_COMPONENTS = [DropDownListComponent, DropDownListValueAccessor]);
        }
    }
});
System.register("ej/fileexplorer.component", ["ej/core"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_18;
    var Outputs, ComplexProperties, Inputs, FileExplorerComponent, EJ_FILEEXPLORER_COMPONENTS;
    return {
        setters:[
            function (core_18_1) {
                core_18 = core_18_1;
            }],
        execute: function() {
            Outputs = ["beforeAjaxRequest", "beforeDownload", "beforeOpen", "beforeUpload", "copy", "createFolder", "cut", "layoutChange"];
            ComplexProperties = ["filterSettings", "gridSettings", "uploadSettings"];
            Inputs = core_18.Utils.AngularizeInputs(["ajaxAction", "ajaxDataType", "ajaxSettings", "allowMultiSelection", "cssClass", "enableResize", "enableRTL", "fileTypes", "filterSettings", "gridSettings", "height", "isResponsive", "layout", "locale", "maxHeight", "maxWidth", "minHeight", "minWidth", "path", "selectedFolder", "selectedItems", "showCheckbox", "showContextMenu", "showFooter", "showRoundedCorner", "showThumbnail", "showToolbar", "showNavigationPane", "tools", "uploadSettings", "width", "filterSettings.caseSensitiveSearch", "filterSettings.filterType", "gridSettings.allowSorting", "gridSettings.columns", "uploadSettings.maxFileSize", "uploadSettings.allowMultipleFile", "uploadSettings.autoUpload"], []);
            exports_17("FileExplorerComponent", FileExplorerComponent = core_18.CreateComponent("FileExplorer", {
                selector: 'ej-fileexplorer',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_17("EJ_FILEEXPLORER_COMPONENTS", EJ_FILEEXPLORER_COMPONENTS = [FileExplorerComponent]);
        }
    }
});
System.register("ej/gantt.component", ["ej/core"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_19;
    var StriplineDirective, StriplinesDirective, HolidayDirective, HolidaysDirective, SelectedCellIndexDirective, SelectedCellIndexesDirective, EditDialogFieldDirective, EditDialogFieldsDirective, AddDialogFieldDirective, AddDialogFieldsDirective, ColumnDialogFieldDirective, ColumnDialogFieldsDirective, Outputs, ComplexProperties, Inputs, GanttComponent, EJ_GANTT_COMPONENTS;
    return {
        setters:[
            function (core_19_1) {
                core_19 = core_19_1;
            }],
        execute: function() {
            exports_18("StriplineDirective", StriplineDirective = core_19.CreateComplexDirective({
                selector: "e-striplines>e-stripline",
                queries: {}
            }, {
                tags: [],
                type: core_19.forwardRef(function () { return GanttComponent; })
            }));
            exports_18("StriplinesDirective", StriplinesDirective = core_19.CreateArrayTagDirective("striplines", 'ej-gantt>e-striplines', StriplineDirective));
            exports_18("HolidayDirective", HolidayDirective = core_19.CreateComplexDirective({
                selector: "e-holidays>e-holiday",
                queries: {}
            }, {
                tags: [],
                type: core_19.forwardRef(function () { return GanttComponent; })
            }));
            exports_18("HolidaysDirective", HolidaysDirective = core_19.CreateArrayTagDirective("holidays", 'ej-gantt>e-holidays', HolidayDirective));
            exports_18("SelectedCellIndexDirective", SelectedCellIndexDirective = core_19.CreateComplexDirective({
                selector: "e-selectedcellindexes>e-selectedcellindex",
                queries: {}
            }, {
                tags: [],
                type: core_19.forwardRef(function () { return GanttComponent; })
            }));
            exports_18("SelectedCellIndexesDirective", SelectedCellIndexesDirective = core_19.CreateArrayTagDirective("selectedCellIndexes", 'ej-gantt>e-selectedcellindexes', SelectedCellIndexDirective));
            exports_18("EditDialogFieldDirective", EditDialogFieldDirective = core_19.CreateComplexDirective({
                selector: "e-editdialogfields>e-editdialogfield",
                queries: {}
            }, {
                tags: [],
                type: core_19.forwardRef(function () { return GanttComponent; })
            }));
            exports_18("EditDialogFieldsDirective", EditDialogFieldsDirective = core_19.CreateArrayTagDirective("editDialogFields", 'ej-gantt>e-editdialogfields', EditDialogFieldDirective));
            exports_18("AddDialogFieldDirective", AddDialogFieldDirective = core_19.CreateComplexDirective({
                selector: "e-adddialogfields>e-adddialogfield",
                queries: {}
            }, {
                tags: [],
                type: core_19.forwardRef(function () { return GanttComponent; })
            }));
            exports_18("AddDialogFieldsDirective", AddDialogFieldsDirective = core_19.CreateArrayTagDirective("addDialogFields", 'ej-gantt>e-adddialogfields', AddDialogFieldDirective));
            exports_18("ColumnDialogFieldDirective", ColumnDialogFieldDirective = core_19.CreateComplexDirective({
                selector: "e-columndialogfields>e-columndialogfield",
                queries: {}
            }, {
                tags: [],
                type: core_19.forwardRef(function () { return GanttComponent; })
            }));
            exports_18("ColumnDialogFieldsDirective", ColumnDialogFieldsDirective = core_19.CreateArrayTagDirective("columnDialogFields", 'ej-gantt>e-columndialogfields', ColumnDialogFieldDirective));
            Outputs = ["actionBegin", "actionComplete", "beginEdit", "collapsed", "collapsing", "contextMenuOpen", "endEdit", "expanded", "expanding", "load", "queryCellInfo", "queryTaskbarInfo", "rowDataBound", "rowSelected", "rowSelecting", "taskbarEdited", "taskbarEditing", "toolbarClick", "model.dataSourceChange: dataSourceChange", "model.selectedRowIndexChange: selectedRowIndexChange", "model.splitterSettings.positionChange: splitterSettings.positionChange"];
            ComplexProperties = ["splitterSettings", "editSettings", "scheduleHeaderSettings", "sizeSettings", "sortSettings", "toolbarSettings"];
            Inputs = core_19.Utils.AngularizeInputs(["allowColumnResize", "allowGanttChartEditing", "allowKeyboardNavigation", "allowMultiSorting", "allowSelection", "allowSorting", "enablePredecessorValidation", "baselineColor", "baselineEndDateMapping", "baselineStartDateMapping", "childMapping", "connectorLineBackground", "connectorlineWidth", "cssClass", "dateFormat", "durationMapping", "durationUnit", "splitterSettings", "editSettings", "enableAltRow", "enableCollapseAll", "enableContextMenu", "enableProgressBarResizing", "enableResize", "enableTaskbarDragTooltip", "enableTaskbarTooltip", "enableVirtualization", "endDateMapping", "highlightWeekends", "includeWeekend", "locale", "milestoneMapping", "parentProgressbarBackground", "parentTaskbarBackground", "parentTaskIdMapping", "predecessorMapping", "progressbarBackground", "progressbarHeight", "progressbarTooltipTemplate", "progressbarTooltipTemplateId", "progressMapping", "query", "renderBaseline", "resourceIdMapping", "resourceInfoMapping", "resourceNameMapping", "roundOffDayworkingTime", "rowHeight", "scheduleEndDate", "scheduleHeaderSettings", "scheduleStartDate", "selectedItem", "showColumnChooser", "showGridCellTooltip", "showGridExpandCellTooltip", "showProgressStatus", "showResourceNames", "showTaskNames", "sizeSettings", "sortSettings", "splitterPosition", "startDateMapping", "taskbarBackground", "taskbarEditingTooltipTemplate", "taskbarEditingTooltipTemplateId", "taskbarTooltipTemplate", "taskbarTooltipTemplateId", "taskIdMapping", "taskNameMapping", "toolbarSettings", "treeColumnIndex", "weekendBackground", "workingTimeScale", "splitterSettings.index", "editSettings.allowAdding", "editSettings.allowDeleting", "editSettings.allowEditing", "editSettings.editMode", "scheduleHeaderSettings.dayHeaderFormat", "scheduleHeaderSettings.hourHeaderFormat", "scheduleHeaderSettings.minutesPerInterval", "scheduleHeaderSettings.monthHeaderFormat", "scheduleHeaderSettings.scheduleHeaderType", "scheduleHeaderSettings.weekendBackground", "scheduleHeaderSettings.weekHeaderFormat", "scheduleHeaderSettings.yearHeaderFormat", "sizeSettings.height", "sizeSettings.width", "sortSettings.sortedColumns", "toolbarSettings.showToolBar", "toolbarSettings.toolbarItems"], ["dataSource", "selectedRowIndex", "splitterSettings.position"]);
            exports_18("GanttComponent", GanttComponent = core_19.CreateComponent("Gantt", {
                selector: 'ej-gantt',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _striplines: new core_19.ContentChild(StriplinesDirective),
                    _holidays: new core_19.ContentChild(HolidaysDirective),
                    _selectedCellIndexes: new core_19.ContentChild(SelectedCellIndexesDirective),
                    _editDialogFields: new core_19.ContentChild(EditDialogFieldsDirective),
                    _addDialogFields: new core_19.ContentChild(AddDialogFieldsDirective),
                    _columnDialogFields: new core_19.ContentChild(ColumnDialogFieldsDirective),
                }
            }, {
                tags: ["striplines", "holidays", "selectedCellIndexes", "editDialogFields", "addDialogFields", "columnDialogFields"],
                twoways: ["dataSource", "selectedRowIndex", "splitterSettings.position"],
                complexes: ComplexProperties,
            }));
            exports_18("EJ_GANTT_COMPONENTS", EJ_GANTT_COMPONENTS = [GanttComponent, StriplinesDirective, StriplineDirective, HolidaysDirective, HolidayDirective, SelectedCellIndexesDirective, SelectedCellIndexDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldsDirective, AddDialogFieldDirective, ColumnDialogFieldsDirective, ColumnDialogFieldDirective]);
        }
    }
});
System.register("ej/grid.component", ["ej/core"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_20;
    var ColumnDirective, ColumnsDirective, SummaryColumnDirective, SummaryColumnsDirective, SummaryRowDirective, SummaryRowsDirective, StackedHeaderColumnDirective, StackedHeaderColumnsDirective, StackedHeaderRowDirective, StackedHeaderRowsDirective, Outputs, ComplexProperties, Inputs, GridComponent, EJ_GRID_COMPONENTS;
    return {
        setters:[
            function (core_20_1) {
                core_20 = core_20_1;
            }],
        execute: function() {
            exports_19("ColumnDirective", ColumnDirective = core_20.CreateComplexDirective({
                selector: "e-columns>e-column",
                inputs: ["allowEditing", "allowFiltering", "allowGrouping", "allowSorting", "allowResizing", "showInColumnChooser", "commands", "cssClass", "customAttributes", "dataSource", "defaultValue", "disableHtmlEncode", "displayAsCheckBox", "editParams", "editTemplate", "editType", "field", "foreignKeyField", "foreignKeyValue", "format", "headerTemplateID", "headerText", "headerTextAlign", "isFrozen", "isIdentity", "isPrimaryKey", "isUnbound", "template", "templateID", "textAlign", "tooltip", "clipMode", "type", "validationRules", "visible", "width"],
                queries: {}
            }, {
                tags: [],
                type: core_20.forwardRef(function () { return GridComponent; })
            }));
            exports_19("ColumnsDirective", ColumnsDirective = core_20.CreateArrayTagDirective("columns", 'ej-grid>e-columns', ColumnDirective));
            exports_19("SummaryColumnDirective", SummaryColumnDirective = core_20.CreateComplexDirective({
                selector: "e-summarycolumns>e-summarycolumn",
                inputs: ["customSummaryValue", "dataMember", "displayColumn", "format", "prefix", "suffix", "summaryType", "template"],
                queries: {}
            }, {
                tags: [],
                type: core_20.forwardRef(function () { return GridComponent; })
            }));
            exports_19("SummaryColumnsDirective", SummaryColumnsDirective = core_20.CreateArrayTagDirective("summaryColumns", 'e-summaryrows>e-summarycolumns', SummaryColumnDirective));
            exports_19("SummaryRowDirective", SummaryRowDirective = core_20.CreateComplexDirective({
                selector: "e-summaryrows>e-summaryrow",
                inputs: ["showCaptionSummary", "showGroupSummary", "showTotalSummary", "summaryColumns", "title", "titleColumn"],
                queries: {
                    _summaryColumns: new core_20.ContentChild(SummaryColumnsDirective),
                }
            }, {
                tags: ["summaryColumns"],
                type: core_20.forwardRef(function () { return GridComponent; })
            }));
            exports_19("SummaryRowsDirective", SummaryRowsDirective = core_20.CreateArrayTagDirective("summaryRows", 'ej-grid>e-summaryrows', SummaryRowDirective));
            exports_19("StackedHeaderColumnDirective", StackedHeaderColumnDirective = core_20.CreateComplexDirective({
                selector: "e-stackedheadercolumns>e-stackedheadercolumn",
                inputs: ["column", "cssClass", "headerText", "textAlign"],
                queries: {}
            }, {
                tags: [],
                type: core_20.forwardRef(function () { return GridComponent; })
            }));
            exports_19("StackedHeaderColumnsDirective", StackedHeaderColumnsDirective = core_20.CreateArrayTagDirective("stackedHeaderColumns", 'e-stackedheaderrows>e-stackedheadercolumns', StackedHeaderColumnDirective));
            exports_19("StackedHeaderRowDirective", StackedHeaderRowDirective = core_20.CreateComplexDirective({
                selector: "e-stackedheaderrows>e-stackedheaderrow",
                inputs: ["stackedHeaderColumns"],
                queries: {
                    _stackedHeaderColumns: new core_20.ContentChild(StackedHeaderColumnsDirective),
                }
            }, {
                tags: ["stackedHeaderColumns"],
                type: core_20.forwardRef(function () { return GridComponent; })
            }));
            exports_19("StackedHeaderRowsDirective", StackedHeaderRowsDirective = core_20.CreateArrayTagDirective("stackedHeaderRows", 'ej-grid>e-stackedheaderrows', StackedHeaderRowDirective));
            Outputs = ["actionBegin", "actionComplete", "actionFailure", "batchAdd", "batchDelete", "beforeBatchAdd", "beforeBatchDelete", "beforeBatchSave", "beginEdit", "cellEdit", "cellSave", "cellSelected", "cellSelecting", "columnDrag", "columnDragStart", "columnDrop", "columnSelected", "columnSelecting", "contextClick", "contextOpen", "create", "dataBound", "destroy", "detailsCollapse", "detailsDataBound", "detailsExpand", "endAdd", "endDelete", "endEdit", "load", "mergeCellInfo", "queryCellInfo", "recordClick", "recordDoubleClick", "resized", "resizeEnd", "resizeStart", "rightClick", "rowDataBound", "rowSelected", "rowSelecting", "templateRefresh", "toolBarClick", "model.dataSourceChange: dataSourceChange", "model.pageSettings.currentPageChange: pageSettings.currentPageChange"];
            ComplexProperties = ["contextMenuSettings", "editSettings", "filterSettings", "groupSettings", "textWrapSettings", "pageSettings", "scrollSettings", "searchSettings", "selectionSettings", "sortSettings", "toolbarSettings"];
            Inputs = core_20.Utils.AngularizeInputs(["allowCellMerging", "allowGrouping", "allowKeyboardNavigation", "allowFiltering", "allowSorting", "allowMultiSorting", "allowPaging", "allowReordering", "allowResizeToFit", "allowResizing", "allowScrolling", "allowSearching", "allowSelection", "allowTextWrap", "allowMultipleExporting", "commonWidth", "gridLines", "childGrid", "columnLayout", "contextMenuSettings", "cssClass", "detailsTemplate", "editSettings", "enableAltRow", "enableAutoSaveOnSelectionChange", "enableHeaderHover", "enablePersistence", "enableResponsiveRow", "enableRowHover", "enableRTL", "enableTouch", "filterSettings", "groupSettings", "textWrapSettings", "isResponsive", "keySettings", "locale", "minWidth", "pageSettings", "query", "rowTemplate", "scrollSettings", "searchSettings", "selectedRowIndex", "selectionSettings", "selectionType", "showAddNewRow", "showColumnChooser", "showInColumnChooser", "showStackedHeader", "showSummary", "sortSettings", "toolbarSettings", "contextMenuSettings.contextMenuItems", "contextMenuSettings.customContextMenuItems", "contextMenuSettings.enableContextMenu", "contextMenuSettings.disableDefaultItems", "editSettings.allowAdding", "editSettings.allowDeleting", "editSettings.allowEditing", "editSettings.allowEditOnDblClick", "editSettings.dialogEditorTemplateID", "editSettings.editMode", "editSettings.externalFormTemplateID", "editSettings.formPosition", "editSettings.inlineFormTemplateID", "editSettings.rowPosition", "editSettings.showConfirmDialog", "editSettings.showDeleteConfirmDialog", "editSettings.titleColumn", "editSettings.showAddNewRow", "filterSettings.enableCaseSensitivity", "filterSettings.filterBarMode", "filterSettings.filterType", "filterSettings.maxFilterChoices", "filterSettings.showFilterBarMessage", "filterSettings.showPredicate", "groupSettings.captionFormat", "groupSettings.enableDropAreaAnimation", "groupSettings.enableDropAreaAutoSizing", "groupSettings.groupedColumns", "groupSettings.showDropArea", "groupSettings.showGroupedColumn", "groupSettings.showToggleButton", "groupSettings.showUngroupButton", "textWrapSettings.wrapMode", "pageSettings.enableQueryString", "pageSettings.enableTemplates", "pageSettings.pageCount", "pageSettings.pageSize", "pageSettings.showDefaults", "pageSettings.template", "pageSettings.totalPages", "pageSettings.totalRecordsCount", "pageSettings.printMode", "scrollSettings.allowVirtualScrolling", "scrollSettings.enableTouchScroll", "scrollSettings.frozenColumns", "scrollSettings.frozenRows", "scrollSettings.height", "scrollSettings.virtualScrollMode", "scrollSettings.width", "scrollSettings.scrollOneStepBy", "searchSettings.field", "searchSettings.key", "searchSettings.operator", "searchSettings.ignoreCase", "selectionSettings.enableToggle", "selectionSettings.selectionMode", "toolbarSettings.customToolbarItems", "toolbarSettings.showToolbar", "toolbarSettings.toolbarItems", "columns", "stackedHeaderRows", "summaryRows", "contextMenuSettings.subContextMenu", "filterSettings.filteredColumns", "sortSettings.sortedColumns"], ["dataSource", "pageSettings.currentPage"]);
            exports_19("GridComponent", GridComponent = core_20.CreateComponent("Grid", {
                selector: 'ej-grid',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _columns: new core_20.ContentChild(ColumnsDirective),
                    _summaryRows: new core_20.ContentChild(SummaryRowsDirective),
                    _stackedHeaderRows: new core_20.ContentChild(StackedHeaderRowsDirective),
                }
            }, {
                tags: ["columns", "summaryRows", "stackedHeaderRows"],
                twoways: ["dataSource", "pageSettings.currentPage"],
                complexes: ComplexProperties,
            }));
            exports_19("EJ_GRID_COMPONENTS", EJ_GRID_COMPONENTS = [GridComponent, ColumnsDirective, ColumnDirective, SummaryColumnsDirective, SummaryColumnDirective, SummaryRowsDirective, SummaryRowDirective, StackedHeaderColumnsDirective, StackedHeaderColumnDirective, StackedHeaderRowsDirective, StackedHeaderRowDirective]);
        }
    }
});
System.register("ej/kanban.component", ["ej/core"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_21;
    var ColumnDirective, ColumnsDirective, Outputs, ComplexProperties, Inputs, KanbanComponent, EJ_KANBAN_COMPONENTS;
    return {
        setters:[
            function (core_21_1) {
                core_21 = core_21_1;
            }],
        execute: function() {
            exports_20("ColumnDirective", ColumnDirective = core_21.CreateComplexDirective({
                selector: "e-columns>e-column",
                inputs: ["headerText", "key", "isCollapsed", "constraints", "headerTemplate", "width", "visible"],
                queries: {}
            }, {
                tags: [],
                type: core_21.forwardRef(function () { return KanbanComponent; })
            }));
            exports_20("ColumnsDirective", ColumnsDirective = core_21.CreateArrayTagDirective("columns", 'ej-kanban>e-columns', ColumnDirective));
            Outputs = ["actionBegin", "actionComplete", "actionFailure", "beginEdit", "beginAdd", "beforeCardSelect", "cardClick", "cardDrag", "cardDragStart", "cardDragStop", "cardDrop", "cardSelect", "cardDoubleClick", "model.dataSourceChange: dataSourceChange"];
            ComplexProperties = ["swimlaneSettings", "contextMenuSettings", "cardSettings", "editSettings", "fields", "scrollSettings", "searchSettings", "tooltipSettings"];
            Inputs = core_21.Utils.AngularizeInputs(["allowDragAndDrop", "allowTitle", "swimlaneSettings", "allowToggleColumn", "allowSearching", "allowSelection", "allowHover", "allowKeyboardNavigation", "allowScrolling", "contextMenuSettings", "cardSettings", "cssClass", "enableRTL", "enableTotalCount", "editSettings", "fields", "keyField", "isResponsive", "minWidth", "query", "keySettings", "scrollSettings", "searchSettings", "selectionType", "tooltipSettings", "locale", "swimlaneSettings.showCount", "contextMenuSettings.enable", "contextMenuSettings.disableDefaultItems", "cardSettings.template", "cardSettings.colorMapping", "editSettings.allowEditing", "editSettings.allowAdding", "editSettings.dialogTemplate", "editSettings.editMode", "fields.primaryKey", "fields.swimlaneKey", "fields.priority", "fields.content", "fields.tag", "fields.title", "fields.color", "fields.imageUrl", "scrollSettings.height", "scrollSettings.width", "scrollSettings.allowFreezeSwimlane", "searchSettings.fields", "searchSettings.key", "searchSettings.operator", "searchSettings.ignoreCase", "tooltipSettings.enable", "tooltipSettings.template", "columns", "filterSettings", "stackedHeaderRows", "contextMenuSettings.customMenuItems", "editSettings.editItems"], ["dataSource"]);
            exports_20("KanbanComponent", KanbanComponent = core_21.CreateComponent("Kanban", {
                selector: 'ej-kanban',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _columns: new core_21.ContentChild(ColumnsDirective),
                }
            }, {
                tags: ["columns"],
                twoways: ["dataSource"],
                complexes: ComplexProperties,
            }));
            exports_20("EJ_KANBAN_COMPONENTS", EJ_KANBAN_COMPONENTS = [KanbanComponent, ColumnsDirective, ColumnDirective]);
        }
    }
});
System.register("ej/lineargauge.component", ["ej/core"], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_22;
    var MarkerPointerDirective, MarkerPointersDirective, BarPointerDirective, BarPointersDirective, RangeDirective, RangesDirective, TickDirective, TicksDirective, StateRangeDirective, StateRangesDirective, IndicatorDirective, IndicatorsDirective, LabelDirective, LabelsDirective, CustomLabelDirective, CustomLabelsDirective, ScaleDirective, ScalesDirective, Outputs, ComplexProperties, Inputs, LinearGaugeComponent, EJ_LINEARGAUGE_COMPONENTS;
    return {
        setters:[
            function (core_22_1) {
                core_22 = core_22_1;
            }],
        execute: function() {
            exports_21("MarkerPointerDirective", MarkerPointerDirective = core_22.CreateComplexDirective({
                selector: "e-markerpointers>e-markerpointer",
                inputs: ["backgroundColor", "border", "distanceFromScale", "gradients", "length", "opacity", "placement", "type", "value", "width"],
                queries: {}
            }, {
                tags: [],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("MarkerPointersDirective", MarkerPointersDirective = core_22.CreateArrayTagDirective("markerPointers", 'e-scales>e-markerpointers', MarkerPointerDirective));
            exports_21("BarPointerDirective", BarPointerDirective = core_22.CreateComplexDirective({
                selector: "e-barpointers>e-barpointer",
                inputs: ["backgroundColor", "border", "distanceFromScale", "gradients", "opacity", "value", "width"],
                queries: {}
            }, {
                tags: [],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("BarPointersDirective", BarPointersDirective = core_22.CreateArrayTagDirective("barPointers", 'e-scales>e-barpointers', BarPointerDirective));
            exports_21("RangeDirective", RangeDirective = core_22.CreateComplexDirective({
                selector: "e-ranges>e-range",
                inputs: ["backgroundColor", "border", "distanceFromScale", "endValue", "endWidth", "gradients", "opacity", "placement", "startValue", "startWidth"],
                queries: {}
            }, {
                tags: [],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("RangesDirective", RangesDirective = core_22.CreateArrayTagDirective("ranges", 'e-scales>e-ranges', RangeDirective));
            exports_21("TickDirective", TickDirective = core_22.CreateComplexDirective({
                selector: "e-ticks>e-tick",
                inputs: ["angle", "color", "distanceFromScale", "height", "opacity", "placement", "type", "width"],
                queries: {}
            }, {
                tags: [],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("TicksDirective", TicksDirective = core_22.CreateArrayTagDirective("ticks", 'e-scales>e-ticks', TickDirective));
            exports_21("StateRangeDirective", StateRangeDirective = core_22.CreateComplexDirective({
                selector: "e-stateranges>e-staterange",
                inputs: ["backgroundColor", "borderColor", "endValue", "startValue", "text", "textColor"],
                queries: {}
            }, {
                tags: [],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("StateRangesDirective", StateRangesDirective = core_22.CreateArrayTagDirective("stateRanges", 'e-indicators>e-stateranges', StateRangeDirective));
            exports_21("IndicatorDirective", IndicatorDirective = core_22.CreateComplexDirective({
                selector: "e-indicators>e-indicator",
                inputs: ["backgroundColor", "border", "font", "height", "opacity", "position", "stateRanges", "textLocation", "type", "width"],
                queries: {
                    _stateRanges: new core_22.ContentChild(StateRangesDirective),
                }
            }, {
                tags: ["stateRanges"],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("IndicatorsDirective", IndicatorsDirective = core_22.CreateArrayTagDirective("indicators", 'e-scales>e-indicators', IndicatorDirective));
            exports_21("LabelDirective", LabelDirective = core_22.CreateComplexDirective({
                selector: "e-labels>e-label",
                inputs: ["angle", "distanceFromScale", "font", "includeFirstValue", "opacity", "placement", "textColor", "type", "unitText", "unitTextPlacement"],
                queries: {}
            }, {
                tags: [],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("LabelsDirective", LabelsDirective = core_22.CreateArrayTagDirective("labels", 'e-scales>e-labels', LabelDirective));
            exports_21("CustomLabelDirective", CustomLabelDirective = core_22.CreateComplexDirective({
                selector: "e-customlabels>e-customlabel",
                inputs: ["color", "font", "opacity", "position", "positionType", "textAngle", "value"],
                queries: {}
            }, {
                tags: [],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("CustomLabelsDirective", CustomLabelsDirective = core_22.CreateArrayTagDirective("customLabels", 'e-scales>e-customlabels', CustomLabelDirective));
            exports_21("ScaleDirective", ScaleDirective = core_22.CreateComplexDirective({
                selector: "e-scales>e-scale",
                inputs: ["backgroundColor", "barPointers", "border", "customLabels", "direction", "indicators", "labels", "length", "majorIntervalValue", "markerPointers", "maximum", "minimum", "minorIntervalValue", "opacity", "position", "ranges", "shadowOffset", "showBarPointers", "showCustomLabels", "showIndicators", "showLabels", "showMarkerPointers", "showRanges", "showTicks", "ticks", "type", "width"],
                queries: {
                    _markerPointers: new core_22.ContentChild(MarkerPointersDirective),
                    _barPointers: new core_22.ContentChild(BarPointersDirective),
                    _ranges: new core_22.ContentChild(RangesDirective),
                    _ticks: new core_22.ContentChild(TicksDirective),
                    _indicators: new core_22.ContentChild(IndicatorsDirective),
                    _labels: new core_22.ContentChild(LabelsDirective),
                    _customLabels: new core_22.ContentChild(CustomLabelsDirective),
                }
            }, {
                tags: ["markerPointers", "barPointers", "ranges", "ticks", "indicators", "labels", "customLabels"],
                type: core_22.forwardRef(function () { return LinearGaugeComponent; })
            }));
            exports_21("ScalesDirective", ScalesDirective = core_22.CreateArrayTagDirective("scales", 'ej-lineargauge>e-scales', ScaleDirective));
            Outputs = ["drawBarPointers", "drawCustomLabel", "drawIndicators", "drawLabels", "drawMarkerPointers", "drawRange", "drawTicks", "init", "load", "mouseClick", "mouseClickMove", "mouseClickUp", "renderComplete", "model.valueChange: valueChange", "model.minimumChange: minimumChange", "model.maximumChange: maximumChange"];
            ComplexProperties = ["frame", "scales", "tooltip", "scales.border", "scales.position"];
            Inputs = core_22.Utils.AngularizeInputs(["animationSpeed", "backgroundColor", "borderColor", "enableAnimation", "enableMarkerPointerAnimation", "isResponsive", "frame", "height", "labelColor", "orientation", "outerCustomLabelPosition", "pointerGradient1", "pointerGradient2", "readOnly", "scales", "theme", "tickColor", "tooltip", "width", "frame.backgroundImageUrl", "frame.innerWidth", "frame.outerWidth", "scales.backgroundColor", "scales.border", "scales.border.color", "scales.border.width", "scales.direction", "scales.length", "scales.majorIntervalValue", "scales.maximum", "scales.minimum", "scales.minorIntervalValue", "scales.opacity", "scales.position", "scales.position.x", "scales.position.y", "scales.shadowOffset", "scales.showBarPointers", "scales.showCustomLabels", "scales.showIndicators", "scales.showLabels", "scales.showMarkerPointers", "scales.showRanges", "scales.showTicks", "scales.type", "scales.width", "tooltip.showCustomLabelTooltip", "tooltip.showLabelTooltip", "tooltip.templateID", "scales.barPointers", "scales.customLabels", "scales.indicators", "scales.labels", "scales.markerPointers", "scales.ranges", "scales.ticks"], ["value", "minimum", "maximum"]);
            exports_21("LinearGaugeComponent", LinearGaugeComponent = core_22.CreateComponent("LinearGauge", {
                selector: 'ej-lineargauge',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _scales: new core_22.ContentChild(ScalesDirective),
                }
            }, {
                tags: ["scales"],
                twoways: ["value", "minimum", "maximum"],
                complexes: ComplexProperties,
            }));
            exports_21("EJ_LINEARGAUGE_COMPONENTS", EJ_LINEARGAUGE_COMPONENTS = [LinearGaugeComponent, MarkerPointersDirective, MarkerPointerDirective, BarPointersDirective, BarPointerDirective, RangesDirective, RangeDirective, TicksDirective, TickDirective, StateRangesDirective, StateRangeDirective, IndicatorsDirective, IndicatorDirective, LabelsDirective, LabelDirective, CustomLabelsDirective, CustomLabelDirective, ScalesDirective, ScaleDirective]);
        }
    }
});
System.register("ej/listbox.component", ["ej/core"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var core_23;
    var Outputs, ComplexProperties, Inputs, ListBoxComponent, EJ_LISTBOX_COMPONENTS;
    return {
        setters:[
            function (core_23_1) {
                core_23 = core_23_1;
            }],
        execute: function() {
            Outputs = ["actionBegin", "actionSuccess", "actionComplete", "actionFailure", "actionBeforeSuccess", "change", "checkChange", "create", "destroy", "focusIn", "focusOut", "itemDrag", "itemDragStart", "itemDragStop", "itemDrop", "select", "unselect", "model.valueChange: valueChange"];
            ComplexProperties = [];
            Inputs = core_23.Utils.AngularizeInputs(["allowDrag", "allowDrop", "allowMultiSelection", "allowVirtualScrolling", "caseSensitiveSearch", "cascadeTo", "cssClass", "dataSource", "enabled", "enableIncrementalSearch", "enablePersistence", "enableRTL", "fields", "height", "itemsCount", "totalItemsCount", "itemRequestCount", "loadDataOnInit", "query", "selectedIndex", "showCheckbox", "showRoundedCorner", "template", "virtualScrollMode", "width", "targetID"], ["value"]);
            exports_22("ListBoxComponent", ListBoxComponent = core_23.CreateComponent("ListBox", {
                selector: 'ej-listbox',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: ["value"],
                complexes: ComplexProperties,
            }));
            exports_22("EJ_LISTBOX_COMPONENTS", EJ_LISTBOX_COMPONENTS = [ListBoxComponent]);
        }
    }
});
System.register("ej/listview.component", ["ej/core"], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_24;
    var ItemDirective, ItemsDirective, Outputs, ComplexProperties, Inputs, ListViewComponent, EJ_LISTVIEW_COMPONENTS;
    return {
        setters:[
            function (core_24_1) {
                core_24 = core_24_1;
            }],
        execute: function() {
            exports_23("ItemDirective", ItemDirective = core_24.CreateComplexDirective({
                selector: "e-items>e-item",
                queries: {}
            }, {
                tags: [],
                type: core_24.forwardRef(function () { return ListViewComponent; })
            }));
            exports_23("ItemsDirective", ItemsDirective = core_24.CreateArrayTagDirective("items", 'ej-listview>e-items', ItemDirective));
            Outputs = ["ajaxBeforeLoad", "ajaxComplete", "ajaxError", "ajaxSuccess", "load", "loadComplete", "mouseDown", "mouseUP", "model.dataSourceChange: dataSourceChange"];
            ComplexProperties = [];
            Inputs = core_24.Utils.AngularizeInputs(["cssClass", "enableAjax", "enableCache", "enableCheckMark", "enableFiltering", "enableGroupList", "enablePersistence", "fieldSettings", "headerBackButtonText", "headerTitle", "height", "persistSelection", "preventSelection", "query", "renderTemplate", "selectedItemIndex", "showHeader", "templateId", "width"], ["dataSource"]);
            exports_23("ListViewComponent", ListViewComponent = core_24.CreateComponent("ListView", {
                selector: 'ej-listview',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _items: new core_24.ContentChild(ItemsDirective),
                }
            }, {
                tags: ["items"],
                twoways: ["dataSource"],
                complexes: ComplexProperties,
            }));
            exports_23("EJ_LISTVIEW_COMPONENTS", EJ_LISTVIEW_COMPONENTS = [ListViewComponent, ItemsDirective, ItemDirective]);
        }
    }
});
System.register("ej/maskedit.component", ["ej/core"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var core_25;
    var Outputs, ComplexProperties, Inputs, MaskEditComponent, MaskEditValueAccessor, EJ_MASKEDIT_COMPONENTS;
    return {
        setters:[
            function (core_25_1) {
                core_25 = core_25_1;
            }],
        execute: function() {
            Outputs = ["change", "create", "destroy", "focusIn", "focusOut", "keydown", "keyPress", "keyup", "mouseout", "mouseover"];
            ComplexProperties = [];
            Inputs = core_25.Utils.AngularizeInputs(["cssClass", "customCharacter", "enabled", "enablePersistence", "height", "hidePromptOnLeave", "htmlAttributes", "inputMode", "maskFormat", "name", "readOnly", "showError", "showRoundedCorner", "textAlign", "validationMessage", "validationRules", "value", "watermarkText", "width"], []);
            exports_24("MaskEditComponent", MaskEditComponent = core_25.CreateComponent("MaskEdit", {
                selector: '[ej-maskedit]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_24("MaskEditValueAccessor", MaskEditValueAccessor = core_25.CreateControlValueAccessor("[ej-maskedit]", MaskEditComponent));
            exports_24("EJ_MASKEDIT_COMPONENTS", EJ_MASKEDIT_COMPONENTS = [MaskEditComponent, MaskEditValueAccessor]);
        }
    }
});
System.register("ej/menu.component", ["ej/core"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var core_26;
    var Outputs, ComplexProperties, Inputs, MenuComponent, EJ_MENU_COMPONENTS;
    return {
        setters:[
            function (core_26_1) {
                core_26 = core_26_1;
            }],
        execute: function() {
            Outputs = ["beforeOpen", "click", "close", "open", "create", "destroy", "keydown", "mouseout", "mouseover"];
            ComplexProperties = ["fields"];
            Inputs = core_26.Utils.AngularizeInputs(["animationType", "contextMenuTarget", "cssClass", "enableAnimation", "enableCenterAlign", "enabled", "enableRTL", "enableSeparator", "excludeTarget", "fields", "height", "htmlAttributes", "menuType", "openOnClick", "orientation", "showRootLevelArrows", "showSubLevelArrows", "subMenuDirection", "titleText", "width", "fields.child", "fields.dataSource", "fields.htmlAttribute", "fields.id", "fields.imageAttribute", "fields.imageUrl", "fields.linkAttribute", "fields.parentId", "fields.query", "fields.spriteCssClass", "fields.tableName", "fields.text", "fields.url"], []);
            exports_25("MenuComponent", MenuComponent = core_26.CreateComponent("Menu", {
                selector: 'ej-menu',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_25("EJ_MENU_COMPONENTS", EJ_MENU_COMPONENTS = [MenuComponent]);
        }
    }
});
System.register("ej/numerictextbox.component", ["ej/core"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var core_27;
    var Outputs, ComplexProperties, Inputs, NumericTextboxComponent, NumericTextboxValueAccessor, EJ_NUMERICTEXTBOX_COMPONENTS;
    return {
        setters:[
            function (core_27_1) {
                core_27 = core_27_1;
            }],
        execute: function() {
            Outputs = ["change", "create", "destroy", "focusIn", "focusOut"];
            ComplexProperties = [];
            Inputs = core_27.Utils.AngularizeInputs(["cssClass", "decimalPlaces", "enabled", "enablePersistence", "enableRTL", "enableStrictMode", "groupSeparator", "height", "htmlAttributes", "incrementStep", "locale", "maxValue", "minValue", "name", "readOnly", "showRoundedCorner", "showSpinButton", "validateOnType", "validationMessage", "validationRules", "value", "watermarkText", "width"], []);
            exports_26("NumericTextboxComponent", NumericTextboxComponent = core_27.CreateComponent("NumericTextbox", {
                selector: '[ej-numerictextbox]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_26("NumericTextboxValueAccessor", NumericTextboxValueAccessor = core_27.CreateControlValueAccessor("[ej-numerictextbox]", NumericTextboxComponent));
            exports_26("EJ_NUMERICTEXTBOX_COMPONENTS", EJ_NUMERICTEXTBOX_COMPONENTS = [NumericTextboxComponent, NumericTextboxValueAccessor]);
        }
    }
});
System.register("ej/pdfviewer.component", ["ej/core"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var core_28;
    var Outputs, ComplexProperties, Inputs, PdfViewerComponent, EJ_PDFVIEWER_COMPONENTS;
    return {
        setters:[
            function (core_28_1) {
                core_28 = core_28_1;
            }],
        execute: function() {
            Outputs = ["documentLoad", "pageChange", "zoomChange", "destroy"];
            ComplexProperties = ["toolbarSettings"];
            Inputs = core_28.Utils.AngularizeInputs(["locale", "toolbarSettings", "toolbarItems", "serviceUrl", "pageCount", "currentPageNumber", "zoomPercentage", "pdfService", "toolbarSettings.showToolTip"], []);
            exports_27("PdfViewerComponent", PdfViewerComponent = core_28.CreateComponent("PdfViewer", {
                selector: 'ej-pdfviewer',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_27("EJ_PDFVIEWER_COMPONENTS", EJ_PDFVIEWER_COMPONENTS = [PdfViewerComponent]);
        }
    }
});
System.register("ej/percentagetextbox.component", ["ej/core"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var core_29;
    var Outputs, ComplexProperties, Inputs, PercentageTextboxComponent, PercentageTextboxValueAccessor, EJ_PERCENTAGETEXTBOX_COMPONENTS;
    return {
        setters:[
            function (core_29_1) {
                core_29 = core_29_1;
            }],
        execute: function() {
            Outputs = ["change", "create", "destroy", "focusIn", "focusOut"];
            ComplexProperties = [];
            Inputs = core_29.Utils.AngularizeInputs(["cssClass", "decimalPlaces", "enabled", "enablePersistence", "enableRTL", "enableStrictMode", "groupSeparator", "height", "htmlAttributes", "incrementStep", "locale", "maxValue", "minValue", "name", "readOnly", "showRoundedCorner", "showSpinButton", "validateOnType", "validationMessage", "validationRules", "value", "watermarkText", "width"], []);
            exports_28("PercentageTextboxComponent", PercentageTextboxComponent = core_29.CreateComponent("PercentageTextbox", {
                selector: '[ej-percentagetextbox]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_28("PercentageTextboxValueAccessor", PercentageTextboxValueAccessor = core_29.CreateControlValueAccessor("[ej-percentagetextbox]", PercentageTextboxComponent));
            exports_28("EJ_PERCENTAGETEXTBOX_COMPONENTS", EJ_PERCENTAGETEXTBOX_COMPONENTS = [PercentageTextboxComponent, PercentageTextboxValueAccessor]);
        }
    }
});
System.register("ej/pivotgrid.component", ["ej/core"], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var core_30;
    var Outputs, ComplexProperties, Inputs, PivotGridComponent, EJ_PIVOTGRID_COMPONENTS;
    return {
        setters:[
            function (core_30_1) {
                core_30 = core_30_1;
            }],
        execute: function() {
            Outputs = ["afterServiceInvoke", "beforeServiceInvoke", "cellContext", "cellSelection", "columnHeaderHyperlinkClick", "drillSuccess", "load", "renderComplete", "renderFailure", "renderSuccess", "rowHeaderHyperlinkClick", "summaryCellHyperlinkClick", "valueCellHyperlinkClick"];
            ComplexProperties = ["dataSource", "hyperlinkSettings", "serviceMethodSettings"];
            Inputs = core_30.Utils.AngularizeInputs(["analysisMode", "cssClass", "currentReport", "dataSource", "customObject", "enableCellContext", "enableCellSelection", "enableCollapseByDefault", "enableColumnGrandTotal", "enableConditionalFormatting", "enableDeferUpdate", "enableGroupingBar", "enableGrandTotal", "enableJSONRendering", "enablePivotFieldList", "enableRowGrandTotal", "enableRTL", "enableToolTip", "enableVirtualScrolling", "hyperlinkSettings", "isNamedSets", "isResponsive", "jsonRecords", "layout", "locale", "operationalMode", "serviceMethodSettings", "url", "dataSource.catalog", "dataSource.columns", "dataSource.cube", "dataSource.data", "dataSource.rows", "dataSource.filters", "hyperlinkSettings.enableColumnHeaderHyperlink", "hyperlinkSettings.enableRowHeaderHyperlink", "hyperlinkSettings.enableSummaryCellHyperlink", "hyperlinkSettings.enableValueCellHyperlink", "serviceMethodSettings.drillDown", "serviceMethodSettings.exportPivotGrid", "serviceMethodSettings.deferUpdate", "serviceMethodSettings.fetchMembers", "serviceMethodSettings.filtering", "serviceMethodSettings.initialize", "serviceMethodSettings.nodeDropped", "serviceMethodSettings.nodeStateModified", "serviceMethodSettings.paging", "serviceMethodSettings.sorting", "dataSource.values"], []);
            exports_29("PivotGridComponent", PivotGridComponent = core_30.CreateComponent("PivotGrid", {
                selector: 'ej-pivotgrid',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_29("EJ_PIVOTGRID_COMPONENTS", EJ_PIVOTGRID_COMPONENTS = [PivotGridComponent]);
        }
    }
});
System.register("ej/progressbar.component", ["ej/core"], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var core_31;
    var Outputs, ComplexProperties, Inputs, ProgressBarComponent, EJ_PROGRESSBAR_COMPONENTS;
    return {
        setters:[
            function (core_31_1) {
                core_31 = core_31_1;
            }],
        execute: function() {
            Outputs = ["change", "complete", "create", "destroy", "start"];
            ComplexProperties = [];
            Inputs = core_31.Utils.AngularizeInputs(["cssClass", "enabled", "enablePersistence", "enableRTL", "height", "htmlAttributes", "maxValue", "minValue", "percentage", "showRoundedCorner", "text", "value", "width"], []);
            exports_30("ProgressBarComponent", ProgressBarComponent = core_31.CreateComponent("ProgressBar", {
                selector: 'ej-progressbar',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_30("EJ_PROGRESSBAR_COMPONENTS", EJ_PROGRESSBAR_COMPONENTS = [ProgressBarComponent]);
        }
    }
});
System.register("ej/radialmenu.component", ["ej/core"], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var core_32;
    var Outputs, ComplexProperties, Inputs, RadialMenuComponent, EJ_RADIALMENU_COMPONENTS;
    return {
        setters:[
            function (core_32_1) {
                core_32 = core_32_1;
            }],
        execute: function() {
            Outputs = ["click", "open", "close"];
            ComplexProperties = [];
            Inputs = core_32.Utils.AngularizeInputs(["autoOpen", "backImageClass", "cssClass", "enableAnimation", "imageClass", "radius", "targetElementId", "position"], []);
            exports_31("RadialMenuComponent", RadialMenuComponent = core_32.CreateComponent("RadialMenu", {
                selector: 'ej-radialmenu',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_31("EJ_RADIALMENU_COMPONENTS", EJ_RADIALMENU_COMPONENTS = [RadialMenuComponent]);
        }
    }
});
System.register("ej/radiobutton.component", ["ej/core"], function(exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var core_33;
    var Outputs, ComplexProperties, Inputs, RadioButtonComponent, RadioButtonValueAccessor, EJ_RADIOBUTTON_COMPONENTS;
    return {
        setters:[
            function (core_33_1) {
                core_33 = core_33_1;
            }],
        execute: function() {
            Outputs = ["beforeChange", "change", "create", "destroy"];
            ComplexProperties = [];
            Inputs = core_33.Utils.AngularizeInputs(["checked", "cssClass", "enabled", "enablePersistence", "enableRTL", "htmlAttributes", "id", "idPrefix", "name", "size", "text", "validationMessage", "validationRules", "value"], []);
            exports_32("RadioButtonComponent", RadioButtonComponent = core_33.CreateComponent("RadioButton", {
                selector: '[ej-radiobutton]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_32("RadioButtonValueAccessor", RadioButtonValueAccessor = core_33.CreateControlValueAccessor("[ej-radiobutton]", RadioButtonComponent));
            exports_32("EJ_RADIOBUTTON_COMPONENTS", EJ_RADIOBUTTON_COMPONENTS = [RadioButtonComponent, RadioButtonValueAccessor]);
        }
    }
});
System.register("ej/rangenavigator.component", ["ej/core"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var core_34;
    var PointDirective, PointsDirective, SeriesDirective, SeriesCollectionDirective, Outputs, ComplexProperties, Inputs, RangeNavigatorComponent, EJ_RANGENAVIGATOR_COMPONENTS;
    return {
        setters:[
            function (core_34_1) {
                core_34 = core_34_1;
            }],
        execute: function() {
            exports_33("PointDirective", PointDirective = core_34.CreateComplexDirective({
                selector: "e-points>e-point",
                queries: {}
            }, {
                tags: [],
                type: core_34.forwardRef(function () { return RangeNavigatorComponent; })
            }));
            exports_33("PointsDirective", PointsDirective = core_34.CreateArrayTagDirective("points", 'e-series>e-points', PointDirective));
            exports_33("SeriesDirective", SeriesDirective = core_34.CreateComplexDirective({
                selector: "e-seriescollection>e-series",
                queries: {
                    _points: new core_34.ContentChild(PointsDirective),
                }
            }, {
                tags: ["points"],
                type: core_34.forwardRef(function () { return RangeNavigatorComponent; })
            }));
            exports_33("SeriesCollectionDirective", SeriesCollectionDirective = core_34.CreateArrayTagDirective("series", 'ej-rangenavigator>e-seriescollection', SeriesDirective));
            Outputs = ["load", "loaded", "rangeChanged", "scrollChanged", "scrollStart", "scrollEnd"];
            ComplexProperties = ["border", "labelSettings", "navigatorStyleSettings", "rangeSettings", "selectedRangeSettings", "scrollRangeSettings", "sizeSettings", "tooltipSettings", "valueAxisSettings", "labelSettings.higherLevel", "labelSettings.higherLevel.border", "labelSettings.higherLevel.gridLineStyle", "labelSettings.higherLevel.style", "labelSettings.higherLevel.style.font", "labelSettings.lowerLevel", "labelSettings.lowerLevel.border", "labelSettings.lowerLevel.gridLineStyle", "labelSettings.lowerLevel.style", "labelSettings.lowerLevel.style.font", "labelSettings.style", "labelSettings.style.font", "navigatorStyleSettings.border", "navigatorStyleSettings.majorGridLineStyle", "navigatorStyleSettings.minorGridLineStyle", "navigatorStyleSettings.highlightSettings", "navigatorStyleSettings.highlightSettings.border", "navigatorStyleSettings.selectionSettings", "navigatorStyleSettings.selectionSettings.border", "tooltipSettings.font", "valueAxisSettings.axisLine", "valueAxisSettings.font", "valueAxisSettings.majorGridLines", "valueAxisSettings.majorTickLines"];
            Inputs = core_34.Utils.AngularizeInputs(["allowSnapping", "border", "dataSource", "enableDeferredUpdate", "enableScrollbar", "enableRTL", "isResponsive", "labelSettings", "locale", "navigatorStyleSettings", "padding", "rangePadding", "rangeSettings", "selectedData", "selectedRangeSettings", "scrollRangeSettings", "sizeSettings", "theme", "tooltipSettings", "valueAxisSettings", "valueType", "xName", "yName", "border.color", "border.opacity", "border.width", "labelSettings.higherLevel", "labelSettings.higherLevel.border", "labelSettings.higherLevel.fill", "labelSettings.higherLevel.gridLineStyle", "labelSettings.higherLevel.intervalType", "labelSettings.higherLevel.labelPlacement", "labelSettings.higherLevel.position", "labelSettings.higherLevel.style", "labelSettings.higherLevel.visible", "labelSettings.lowerLevel", "labelSettings.lowerLevel.border", "labelSettings.lowerLevel.fill", "labelSettings.lowerLevel.gridLineStyle", "labelSettings.lowerLevel.intervalType", "labelSettings.lowerLevel.labelPlacement", "labelSettings.lowerLevel.position", "labelSettings.lowerLevel.style", "labelSettings.lowerLevel.visible", "labelSettings.style", "labelSettings.style.font", "labelSettings.style.horizontalAlignment", "navigatorStyleSettings.background", "navigatorStyleSettings.border", "navigatorStyleSettings.border.color", "navigatorStyleSettings.border.dashArray", "navigatorStyleSettings.border.width", "navigatorStyleSettings.leftThumbTemplate", "navigatorStyleSettings.majorGridLineStyle", "navigatorStyleSettings.majorGridLineStyle.color", "navigatorStyleSettings.majorGridLineStyle.visible", "navigatorStyleSettings.minorGridLineStyle", "navigatorStyleSettings.minorGridLineStyle.color", "navigatorStyleSettings.minorGridLineStyle.visible", "navigatorStyleSettings.opacity", "navigatorStyleSettings.rightThumbTemplate", "navigatorStyleSettings.selectedRegionColor", "navigatorStyleSettings.selectedRegionOpacity", "navigatorStyleSettings.thumbColor", "navigatorStyleSettings.thumbRadius", "navigatorStyleSettings.thumbStroke", "navigatorStyleSettings.unselectedRegionColor", "navigatorStyleSettings.unselectedRegionOpacity", "navigatorStyleSettings.highlightSettings", "navigatorStyleSettings.highlightSettings.enable", "navigatorStyleSettings.highlightSettings.color", "navigatorStyleSettings.highlightSettings.opacity", "navigatorStyleSettings.highlightSettings.border", "navigatorStyleSettings.selectionSettings", "navigatorStyleSettings.selectionSettings.enable", "navigatorStyleSettings.selectionSettings.color", "navigatorStyleSettings.selectionSettings.opacity", "navigatorStyleSettings.selectionSettings.border", "rangeSettings.end", "rangeSettings.start", "selectedRangeSettings.end", "selectedRangeSettings.start", "scrollRangeSettings.end", "scrollRangeSettings.start", "sizeSettings.height", "sizeSettings.width", "tooltipSettings.backgroundColor", "tooltipSettings.font", "tooltipSettings.font.color", "tooltipSettings.font.family", "tooltipSettings.font.fontStyle", "tooltipSettings.font.opacity", "tooltipSettings.font.size", "tooltipSettings.font.weight", "tooltipSettings.labelFormat", "tooltipSettings.tooltipDisplayMode", "tooltipSettings.visible", "valueAxisSettings.axisLine", "valueAxisSettings.axisLine.visible", "valueAxisSettings.font", "valueAxisSettings.font.size", "valueAxisSettings.majorGridLines", "valueAxisSettings.majorGridLines.visible", "valueAxisSettings.majorTickLines", "valueAxisSettings.majorTickLines.size", "valueAxisSettings.majorTickLines.visible", "valueAxisSettings.majorTickLines.width", "valueAxisSettings.rangePadding", "valueAxisSettings.visible"], []);
            exports_33("RangeNavigatorComponent", RangeNavigatorComponent = core_34.CreateComponent("RangeNavigator", {
                selector: 'ej-rangenavigator',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _series: new core_34.ContentChild(SeriesCollectionDirective),
                }
            }, {
                tags: ["series"],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_33("EJ_RANGENAVIGATOR_COMPONENTS", EJ_RANGENAVIGATOR_COMPONENTS = [RangeNavigatorComponent, PointsDirective, PointDirective, SeriesCollectionDirective, SeriesDirective]);
        }
    }
});
System.register("ej/rating.component", ["ej/core"], function(exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var core_35;
    var Outputs, ComplexProperties, Inputs, RatingComponent, EJ_RATING_COMPONENTS;
    return {
        setters:[
            function (core_35_1) {
                core_35 = core_35_1;
            }],
        execute: function() {
            Outputs = ["change", "click", "create", "destroy", "mouseout", "mouseover", "model.valueChange: valueChange"];
            ComplexProperties = [];
            Inputs = core_35.Utils.AngularizeInputs(["allowReset", "cssClass", "enabled", "enablePersistence", "height", "incrementStep", "maxValue", "minValue", "orientation", "precision", "readOnly", "shapeHeight", "shapeWidth", "showTooltip", "width"], ["value"]);
            exports_34("RatingComponent", RatingComponent = core_35.CreateComponent("Rating", {
                selector: 'ej-rating',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: ["value"],
                complexes: ComplexProperties,
            }));
            exports_34("EJ_RATING_COMPONENTS", EJ_RATING_COMPONENTS = [RatingComponent]);
        }
    }
});
System.register("ej/reportviewer.component", ["ej/core"], function(exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var core_36;
    var Outputs, ComplexProperties, Inputs, ReportViewerComponent, EJ_REPORTVIEWER_COMPONENTS;
    return {
        setters:[
            function (core_36_1) {
                core_36 = core_36_1;
            }],
        execute: function() {
            Outputs = ["destroy", "drillThrough", "renderingBegin", "renderingComplete", "reportError", "reportExport", "reportLoaded", "viewReportClick"];
            ComplexProperties = ["exportSettings", "pageSettings", "toolbarSettings"];
            Inputs = core_36.Utils.AngularizeInputs(["enablePageCache", "exportSettings", "isResponsive", "locale", "pageSettings", "printMode", "printOptions", "processingMode", "renderMode", "reportPath", "reportServerUrl", "reportServiceUrl", "toolbarSettings", "zoomFactor", "exportSettings.exportOptions", "exportSettings.excelFormat", "exportSettings.wordFormat", "pageSettings.orientation", "pageSettings.paperSize", "toolbarSettings.click", "toolbarSettings.items", "toolbarSettings.showToolbar", "toolbarSettings.showTooltip", "toolbarSettings.templateId", "dataSources", "parameters"], []);
            exports_35("ReportViewerComponent", ReportViewerComponent = core_36.CreateComponent("ReportViewer", {
                selector: 'ej-reportviewer',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_35("EJ_REPORTVIEWER_COMPONENTS", EJ_REPORTVIEWER_COMPONENTS = [ReportViewerComponent]);
        }
    }
});
System.register("ej/ribbon.component", ["ej/core"], function(exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var core_37;
    var PageDirective, ApplicationTabBackstageSettingsPagesDirective, ContentGroupDirective, ContentGroupsDirective, ContentDirective, ContentsDirective, GroupDirective, GroupsDirective, TabDirective, TabsDirective, Outputs, ComplexProperties, Inputs, RibbonComponent, EJ_RIBBON_COMPONENTS;
    return {
        setters:[
            function (core_37_1) {
                core_37 = core_37_1;
            }],
        execute: function() {
            exports_36("PageDirective", PageDirective = core_37.CreateComplexDirective({
                selector: "e-applicationtab-backstagesettings-pages>e-page",
                inputs: ["id", "text", "itemType", "contentID", "enableSeparator"],
                queries: {}
            }, {
                tags: [],
                type: core_37.forwardRef(function () { return RibbonComponent; })
            }));
            exports_36("ApplicationTabBackstageSettingsPagesDirective", ApplicationTabBackstageSettingsPagesDirective = core_37.CreateArrayTagDirective("applicationTab.backstageSettings.pages", 'ej-ribbon>e-applicationtab-backstagesettings-pages', PageDirective));
            exports_36("ContentGroupDirective", ContentGroupDirective = core_37.CreateComplexDirective({
                selector: "e-contentgroups>e-contentgroup",
                inputs: ["buttonSettings", "columns", "contentID", "cssClass", "customGalleryItems", "customToolTip", "dropdownSettings", "enableSeparator", "expandedColumns", "galleryItems", "id", "isBig", "itemHeight", "itemWidth", "splitButtonSettings", "text", "toggleButtonSettings", "toolTip", "quickAccessMode", "type"],
                queries: {}
            }, {
                tags: [],
                type: core_37.forwardRef(function () { return RibbonComponent; })
            }));
            exports_36("ContentGroupsDirective", ContentGroupsDirective = core_37.CreateArrayTagDirective("groups", 'e-content>e-contentgroups', ContentGroupDirective));
            exports_36("ContentDirective", ContentDirective = core_37.CreateComplexDirective({
                selector: "e-contents>e-content",
                inputs: ["defaults", "groups"],
                queries: {
                    _groups: new core_37.ContentChild(ContentGroupsDirective),
                }
            }, {
                tags: ["groups"],
                type: core_37.forwardRef(function () { return RibbonComponent; })
            }));
            exports_36("ContentsDirective", ContentsDirective = core_37.CreateArrayTagDirective("content", 'e-groups>e-contents', ContentDirective));
            exports_36("GroupDirective", GroupDirective = core_37.CreateComplexDirective({
                selector: "e-groups>e-group",
                inputs: ["alignType", "content", "contentID", "customContent", "enableGroupExpander", "groupExpanderSettings", "text", "type"],
                queries: {
                    _content: new core_37.ContentChild(ContentsDirective),
                }
            }, {
                tags: ["content"],
                type: core_37.forwardRef(function () { return RibbonComponent; })
            }));
            exports_36("GroupsDirective", GroupsDirective = core_37.CreateArrayTagDirective("groups", 'e-tabs>e-groups', GroupDirective));
            exports_36("TabDirective", TabDirective = core_37.CreateComplexDirective({
                selector: "e-tabs>e-tab",
                inputs: ["groups", "id", "text"],
                queries: {
                    _groups: new core_37.ContentChild(GroupsDirective),
                }
            }, {
                tags: ["groups"],
                type: core_37.forwardRef(function () { return RibbonComponent; })
            }));
            exports_36("TabsDirective", TabsDirective = core_37.CreateArrayTagDirective("tabs", 'ej-ribbon>e-tabs', TabDirective));
            Outputs = ["beforeTabRemove", "create", "destroy", "groupClick", "groupExpand", "galleryItemClick", "backstageItemClick", "collapse", "expand", "tabAdd", "tabClick", "tabCreate", "tabRemove", "tabSelect", "toggleButtonClick", "qatMenuItemClick"];
            ComplexProperties = ["collapsePinSettings", "expandPinSettings", "applicationTab", "applicationTab.backstageSettings"];
            Inputs = core_37.Utils.AngularizeInputs(["allowResizing", "buttonDefaults", "showQAT", "collapsePinSettings", "expandPinSettings", "applicationTab", "selectedItemIndex", "locale", "width", "collapsePinSettings.toolTip", "collapsePinSettings.customToolTip", "expandPinSettings.toolTip", "expandPinSettings.customToolTip", "applicationTab.backstageSettings", "applicationTab.backstageSettings.text", "applicationTab.backstageSettings.height", "applicationTab.backstageSettings.width", "applicationTab.backstageSettings.headerWidth", "applicationTab.menuItemID", "applicationTab.menuSettings", "applicationTab.type", "contextualTabs", "tabs", "applicationTab.backstageSettings.pages", "tabs.groups.content", "tabs.groups.content.groups.customGalleryItems", "tabs.groups.content.groups.galleryItems"], []);
            exports_36("RibbonComponent", RibbonComponent = core_37.CreateComponent("Ribbon", {
                selector: 'ej-ribbon',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _applicationTab_backstageSettings_pages: new core_37.ContentChild(ApplicationTabBackstageSettingsPagesDirective),
                    _tabs: new core_37.ContentChild(TabsDirective),
                }
            }, {
                tags: ["applicationTab.backstageSettings.pages", "tabs"],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_36("EJ_RIBBON_COMPONENTS", EJ_RIBBON_COMPONENTS = [RibbonComponent, ApplicationTabBackstageSettingsPagesDirective, PageDirective, ContentGroupsDirective, ContentGroupDirective, ContentsDirective, ContentDirective, GroupsDirective, GroupDirective, TabsDirective, TabDirective]);
        }
    }
});
System.register("ej/rotator.component", ["ej/core"], function(exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var core_38;
    var Outputs, ComplexProperties, Inputs, RotatorComponent, EJ_ROTATOR_COMPONENTS;
    return {
        setters:[
            function (core_38_1) {
                core_38 = core_38_1;
            }],
        execute: function() {
            Outputs = ["change", "create", "destroy", "pagerClick", "start", "stop", "thumbItemClick"];
            ComplexProperties = ["fields"];
            Inputs = core_38.Utils.AngularizeInputs(["allowKeyboardNavigation", "animationSpeed", "animationType", "circularMode", "cssClass", "dataSource", "delay", "displayItemsCount", "enableAutoPlay", "enabled", "enableRTL", "fields", "frameSpace", "isResponsive", "navigateSteps", "orientation", "pagerPosition", "query", "showCaption", "showNavigateButton", "showPager", "showPlayButton", "showThumbnail", "slideHeight", "slideWidth", "startIndex", "stopOnHover", "thumbnailSourceID", "fields.linkAttribute", "fields.targetAttribute", "fields.text", "fields.thumbnailText", "fields.thumbnailUrl", "fields.url"], []);
            exports_37("RotatorComponent", RotatorComponent = core_38.CreateComponent("Rotator", {
                selector: 'ej-rotator',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_37("EJ_ROTATOR_COMPONENTS", EJ_ROTATOR_COMPONENTS = [RotatorComponent]);
        }
    }
});
System.register("ej/rte.component", ["ej/core"], function(exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var core_39;
    var Outputs, ComplexProperties, Inputs, RTEComponent, RTEValueAccessor, EJ_RTE_COMPONENTS;
    return {
        setters:[
            function (core_39_1) {
                core_39 = core_39_1;
            }],
        execute: function() {
            Outputs = ["change", "create", "contextMenuClick", "destroy", "execute", "keydown", "keyup", "preRender", "model.valueChange: valueChange"];
            ComplexProperties = ["fileBrowser", "imageBrowser", "tools"];
            Inputs = core_39.Utils.AngularizeInputs(["allowEditing", "allowKeyboardNavigation", "autoFocus", "autoHeight", "colorCode", "colorPaletteColumns", "colorPaletteRows", "cssClass", "enabled", "enableHtmlEncode", "enablePersistence", "enableResize", "enableRTL", "enableXHTML", "enableTabKeyNavigation", "externalCSS", "fileBrowser", "fontName", "fontSize", "format", "height", "htmlAttributes", "iframeAttributes", "imageBrowser", "isResponsive", "locale", "maxHeight", "maxLength", "maxWidth", "minHeight", "minWidth", "name", "showClearAll", "showClearFormat", "showCustomTable", "showContextMenu", "showDimensions", "showFontOption", "showFooter", "showHtmlSource", "showHtmlTagInfo", "showToolbar", "showCharCount", "showWordCount", "tableColumns", "tableRows", "tools", "undoStackLimit", "validationRules", "validationMessage", "width", "zoomStep", "fileBrowser.ajaxAction", "fileBrowser.extensionAllow", "fileBrowser.filePath", "imageBrowser.ajaxAction", "imageBrowser.extensionAllow", "imageBrowser.filePath", "tools.alignment", "tools.casing", "tools.clear", "tools.clipboard", "tools.edit", "tools.doAction", "tools.effects", "tools.font", "tools.formatStyle", "tools.images", "tools.indenting", "tools.links", "tools.lists", "tools.media", "tools.style", "tools.tables", "tools.view", "tools.print", "tools.customOrderedList", "tools.customUnorderedList"], ["value"]);
            exports_38("RTEComponent", RTEComponent = core_39.CreateComponent("RTE", {
                selector: '[ej-rte]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: ["value"],
                complexes: ComplexProperties,
            }));
            exports_38("RTEValueAccessor", RTEValueAccessor = core_39.CreateControlValueAccessor("[ej-rte]", RTEComponent));
            exports_38("EJ_RTE_COMPONENTS", EJ_RTE_COMPONENTS = [RTEComponent, RTEValueAccessor]);
        }
    }
});
System.register("ej/schedule.component", ["ej/core"], function(exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var core_40;
    var ResourceDirective, ResourcesDirective, Outputs, ComplexProperties, Inputs, ScheduleComponent, EJ_SCHEDULE_COMPONENTS;
    return {
        setters:[
            function (core_40_1) {
                core_40 = core_40_1;
            }],
        execute: function() {
            exports_39("ResourceDirective", ResourceDirective = core_40.CreateComplexDirective({
                selector: "e-resources>e-resource",
                inputs: ["field", "title", "name", "allowMultiple", "resourceSettings"],
                queries: {}
            }, {
                tags: [],
                type: core_40.forwardRef(function () { return ScheduleComponent; })
            }));
            exports_39("ResourcesDirective", ResourcesDirective = core_40.CreateArrayTagDirective("resources", 'ej-schedule>e-resources', ResourceDirective));
            Outputs = ["actionBegin", "actionComplete", "appointmentClick", "beforeAppointmentRemove", "beforeAppointmentChange", "appointmentHover", "beforeAppointmentCreate", "appointmentWindowOpen", "beforeContextMenuOpen", "cellClick", "cellDoubleClick", "cellHover", "drag", "dragStart", "dragStop", "menuItemClick", "navigation", "queryCellInfo", "reminder", "resize", "resizeStart", "resizeStop", "overflowButtonClick", "overflowButtonHover", "keyDown", "appointmentCreated", "appointmentChanged", "appointmentRemoved", "model.appointmentSettings.dataSourceChange: appointmentSettings.dataSourceChange", "model.currentViewChange: currentViewChange", "model.currentDateChange: currentDateChange"];
            ComplexProperties = ["appointmentSettings", "categorizeSettings", "contextMenuSettings", "group", "workHours", "prioritySettings", "reminderSettings", "renderDates", "timeZoneCollection", "agendaViewSettings", "tooltipSettings", "timeScale", "contextMenuSettings.menuItems"];
            Inputs = core_40.Utils.AngularizeInputs(["allowDragAndDrop", "allowKeyboardNavigation", "appointmentSettings", "appointmentTemplateId", "cssClass", "categorizeSettings", "cellHeight", "cellWidth", "contextMenuSettings", "dateFormat", "showAppointmentNavigator", "enableAppointmentResize", "enableLoadOnDemand", "enablePersistence", "enableRTL", "endHour", "group", "height", "workHours", "isDST", "isResponsive", "locale", "maxDate", "minDate", "orientation", "prioritySettings", "readOnly", "reminderSettings", "renderDates", "resourceHeaderTemplateId", "showAllDayRow", "showCurrentTimeIndicator", "showHeaderBar", "showLocationField", "showQuickWindow", "startHour", "timeMode", "timeZone", "timeZoneCollection", "width", "enableRecurrenceValidation", "agendaViewSettings", "firstDayOfWeek", "tooltipSettings", "timeScale", "showDeleteConfirmationDialog", "allDayCellsTemplateId", "workCellsTemplateId", "dateHeaderTemplateId", "showOverflowButton", "appointmentDragArea", "showNextPrevMonth", "appointmentSettings.query", "appointmentSettings.tableName", "appointmentSettings.id", "appointmentSettings.startTime", "appointmentSettings.endTime", "appointmentSettings.subject", "appointmentSettings.description", "appointmentSettings.recurrence", "appointmentSettings.recurrenceRule", "appointmentSettings.allDay", "appointmentSettings.resourceFields", "appointmentSettings.categorize", "appointmentSettings.location", "appointmentSettings.priority", "appointmentSettings.startTimeZone", "appointmentSettings.endTimeZone", "categorizeSettings.allowMultiple", "categorizeSettings.enable", "categorizeSettings.dataSource", "categorizeSettings.id", "categorizeSettings.text", "categorizeSettings.color", "categorizeSettings.fontColor", "contextMenuSettings.enable", "contextMenuSettings.menuItems", "contextMenuSettings.menuItems.appointment", "contextMenuSettings.menuItems.cells", "group.resources", "workHours.highlight", "workHours.start", "workHours.end", "prioritySettings.enable", "prioritySettings.dataSource", "prioritySettings.text", "prioritySettings.value", "prioritySettings.template", "reminderSettings.enable", "reminderSettings.alertBefore", "renderDates.start", "renderDates.end", "timeZoneCollection.dataSource", "timeZoneCollection.text", "timeZoneCollection.id", "timeZoneCollection.value", "agendaViewSettings.daysInAgenda", "agendaViewSettings.dateColumnTemplateId", "agendaViewSettings.timeColumnTemplateId", "tooltipSettings.enable", "tooltipSettings.templateId", "timeScale.enable", "timeScale.minorSlotCount", "timeScale.majorSlot", "timeScale.minorSlotTemplateId", "timeScale.majorSlotTemplateId", "resources"], ["appointmentSettings.dataSource", "currentView", "currentDate"]);
            exports_39("ScheduleComponent", ScheduleComponent = core_40.CreateComponent("Schedule", {
                selector: 'ej-schedule',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _resources: new core_40.ContentChild(ResourcesDirective),
                }
            }, {
                tags: ["resources"],
                twoways: ["appointmentSettings.dataSource", "currentView", "currentDate"],
                complexes: ComplexProperties,
            }));
            exports_39("EJ_SCHEDULE_COMPONENTS", EJ_SCHEDULE_COMPONENTS = [ScheduleComponent, ResourcesDirective, ResourceDirective]);
        }
    }
});
System.register("ej/scroller.component", ["ej/core"], function(exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var core_41;
    var Outputs, ComplexProperties, Inputs, ScrollerComponent, EJ_SCROLLER_COMPONENTS;
    return {
        setters:[
            function (core_41_1) {
                core_41 = core_41_1;
            }],
        execute: function() {
            Outputs = ["create", "destroy"];
            ComplexProperties = [];
            Inputs = core_41.Utils.AngularizeInputs(["autoHide", "buttonSize", "enabled", "enablePersistence", "enableRTL", "enableTouchScroll", "height", "scrollerSize", "scrollLeft", "scrollOneStepBy", "scrollTop", "targetPane", "width"], []);
            exports_40("ScrollerComponent", ScrollerComponent = core_41.CreateComponent("Scroller", {
                selector: 'ej-scroller',
                inputs: Inputs,
                outputs: Outputs,
                template: "<ng-content></ng-content>",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_40("EJ_SCROLLER_COMPONENTS", EJ_SCROLLER_COMPONENTS = [ScrollerComponent]);
        }
    }
});
System.register("ej/slider.component", ["ej/core"], function(exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var core_42;
    var Outputs, ComplexProperties, Inputs, SliderComponent, EJ_SLIDER_COMPONENTS;
    return {
        setters:[
            function (core_42_1) {
                core_42 = core_42_1;
            }],
        execute: function() {
            Outputs = ["change", "create", "destroy", "slide", "start", "stop", "model.valueChange: valueChange"];
            ComplexProperties = [];
            Inputs = core_42.Utils.AngularizeInputs(["animationSpeed", "cssClass", "enableAnimation", "enabled", "enablePersistence", "enableRTL", "height", "htmlAttributes", "incrementStep", "largeStep", "maxValue", "minValue", "orientation", "readOnly", "showRoundedCorner", "showScale", "showSmallTicks", "showTooltip", "sliderType", "smallStep", "width"], ["value"]);
            exports_41("SliderComponent", SliderComponent = core_42.CreateComponent("Slider", {
                selector: 'ej-slider',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: ["value"],
                complexes: ComplexProperties,
            }));
            exports_41("EJ_SLIDER_COMPONENTS", EJ_SLIDER_COMPONENTS = [SliderComponent]);
        }
    }
});
System.register("ej/splitter.component", ["ej/core"], function(exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var core_43;
    var Outputs, ComplexProperties, Inputs, SplitterComponent, EJ_SPLITTER_COMPONENTS;
    return {
        setters:[
            function (core_43_1) {
                core_43 = core_43_1;
            }],
        execute: function() {
            Outputs = ["beforeExpandCollapse", "create", "destroy", "expandCollapse", "resize"];
            ComplexProperties = [];
            Inputs = core_43.Utils.AngularizeInputs(["allowKeyboardNavigation", "animationSpeed", "cssClass", "enableAnimation", "enableRTL", "height", "htmlAttributes", "isResponsive", "orientation", "width"], []);
            exports_42("SplitterComponent", SplitterComponent = core_43.CreateComponent("Splitter", {
                selector: 'ej-splitter',
                inputs: Inputs,
                outputs: Outputs,
                template: "<ng-content></ng-content>",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_42("EJ_SPLITTER_COMPONENTS", EJ_SPLITTER_COMPONENTS = [SplitterComponent]);
        }
    }
});
System.register("ej/spreadsheet.component", ["ej/core"], function(exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var core_44;
    var RangeSettingDirective, RangeSettingsDirective, SheetDirective, SheetsDirective, Outputs, ComplexProperties, Inputs, SpreadsheetComponent, EJ_SPREADSHEET_COMPONENTS;
    return {
        setters:[
            function (core_44_1) {
                core_44 = core_44_1;
            }],
        execute: function() {
            exports_43("RangeSettingDirective", RangeSettingDirective = core_44.CreateComplexDirective({
                selector: "e-rangesettings>e-rangesetting",
                inputs: ["dataSource", "headerStyles", "primaryKey", "query", "showHeader", "startCell"],
                queries: {}
            }, {
                tags: [],
                type: core_44.forwardRef(function () { return SpreadsheetComponent; })
            }));
            exports_43("RangeSettingsDirective", RangeSettingsDirective = core_44.CreateArrayTagDirective("rangeSettings", 'e-sheets>e-rangesettings', RangeSettingDirective));
            exports_43("SheetDirective", SheetDirective = core_44.CreateComplexDirective({
                selector: "e-sheets>e-sheet",
                inputs: ["colCount", "columnWidth", "dataSource", "fieldAsColumnHeader", "headerStyles", "primaryKey", "query", "rangeSettings", "rowCount", "showGridlines", "showHeader", "showHeadings", "startCell"],
                queries: {
                    _rangeSettings: new core_44.ContentChild(RangeSettingsDirective),
                }
            }, {
                tags: ["rangeSettings"],
                type: core_44.forwardRef(function () { return SpreadsheetComponent; })
            }));
            exports_43("SheetsDirective", SheetsDirective = core_44.CreateArrayTagDirective("sheets", 'ej-spreadsheet>e-sheets', SheetDirective));
            Outputs = ["actionBegin", "actionComplete", "autoFillBegin", "autoFillComplete", "beforeBatchSave", "beforeCellFormat", "beforeCellSelect", "beforeDrop", "beforeOpen", "beforePanelOpen", "cellClick", "cellEdit", "cellFormatting", "cellHover", "cellSave", "contextMenuClick", "drag", "dragStart", "drop", "editRangeBegin", "editRangeComplete", "load", "loadComplete", "menuClick", "openFailure", "pagerClick", "ribbonClick", "seriesRendering", "tabClick", "tabSelect"];
            ComplexProperties = ["autoFillSettings", "chartSettings", "exportSettings", "formatSettings", "importSettings", "pictureSettings", "printSettings", "scrollSettings", "selectionSettings"];
            Inputs = core_44.Utils.AngularizeInputs(["activeSheetIndex", "allowAutoCellType", "allowAutoFill", "allowAutoSum", "allowCellFormatting", "allowCellType", "allowCharts", "allowClipboard", "allowComments", "allowConditionalFormats", "allowDataValidation", "allowDelete", "allowDragAndDrop", "allowEditing", "allowFiltering", "allowFormatAsTable", "allowFormatPainter", "allowFormulaBar", "allowFreezing", "allowHyperlink", "allowImport", "allowInsert", "allowKeyboardNavigation", "allowLockCell", "allowMerging", "allowResizing", "allowSearching", "allowSelection", "allowSorting", "allowUndoRedo", "allowWrap", "apWidth", "autoFillSettings", "chartSettings", "columnCount", "columnWidth", "cssClass", "customFormulas", "enableContextMenu", "enablePivotTable", "exportSettings", "formatSettings", "importOnLoad", "importSettings", "locale", "pictureSettings", "printSettings", "rowCount", "rowHeight", "scrollSettings", "selectionSettings", "sheetCount", "showRibbon", "undoRedoStep", "userName", "autoFillSettings.fillType", "autoFillSettings.showFillOptions", "chartSettings.height", "chartSettings.width", "exportSettings.allowExporting", "exportSettings.csvUrl", "exportSettings.excelUrl", "exportSettings.password", "formatSettings.allowCellBorder", "formatSettings.allowDecimalPlaces", "formatSettings.allowFontFamily", "importSettings.importMapper", "importSettings.importUrl", "importSettings.password", "pictureSettings.allowPictures", "pictureSettings.height", "pictureSettings.width", "printSettings.allowPageSetup", "printSettings.allowPageSize", "printSettings.allowPrinting", "scrollSettings.allowScrolling", "scrollSettings.allowSheetOnDemand", "scrollSettings.allowVirtualScrolling", "scrollSettings.height", "scrollSettings.isResponsive", "scrollSettings.scrollMode", "scrollSettings.width", "selectionSettings.activeCell", "selectionSettings.animationTime", "selectionSettings.enableAnimation", "selectionSettings.selectionType", "selectionSettings.selectionUnit", "sheets"], []);
            exports_43("SpreadsheetComponent", SpreadsheetComponent = core_44.CreateComponent("Spreadsheet", {
                selector: 'ej-spreadsheet',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _sheets: new core_44.ContentChild(SheetsDirective),
                }
            }, {
                tags: ["sheets"],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_43("EJ_SPREADSHEET_COMPONENTS", EJ_SPREADSHEET_COMPONENTS = [SpreadsheetComponent, RangeSettingsDirective, RangeSettingDirective, SheetsDirective, SheetDirective]);
        }
    }
});
System.register("ej/tab.component", ["ej/core"], function(exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var core_45;
    var Outputs, ComplexProperties, Inputs, TabComponent, EJ_TAB_COMPONENTS;
    return {
        setters:[
            function (core_45_1) {
                core_45 = core_45_1;
            }],
        execute: function() {
            Outputs = ["itemActive", "ajaxBeforeLoad", "ajaxError", "ajaxLoad", "ajaxSuccess", "beforeActive", "beforeItemRemove", "create", "destroy", "itemAdd", "itemRemove", "model.selectedItemIndexChange: selectedItemIndexChange"];
            ComplexProperties = ["ajaxSettings"];
            Inputs = core_45.Utils.AngularizeInputs(["ajaxSettings", "allowKeyboardNavigation", "collapsible", "cssClass", "disabledItemIndex", "enableAnimation", "enabled", "enabledItemIndex", "enablePersistence", "enableRTL", "enableTabScroll", "events", "headerPosition", "headerSize", "height", "heightAdjustMode", "htmlAttributes", "idPrefix", "showCloseButton", "showReloadIcon", "showRoundedCorner", "width", "ajaxSettings.async", "ajaxSettings.cache", "ajaxSettings.contentType", "ajaxSettings.data", "ajaxSettings.dataType", "ajaxSettings.type"], ["selectedItemIndex"]);
            exports_44("TabComponent", TabComponent = core_45.CreateComponent("Tab", {
                selector: 'ej-tab',
                inputs: Inputs,
                outputs: Outputs,
                template: "<ng-content></ng-content>",
                queries: {}
            }, {
                tags: [],
                twoways: ["selectedItemIndex"],
                complexes: ComplexProperties,
            }));
            exports_44("EJ_TAB_COMPONENTS", EJ_TAB_COMPONENTS = [TabComponent]);
        }
    }
});
System.register("ej/tagcloud.component", ["ej/core"], function(exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    var core_46;
    var Outputs, ComplexProperties, Inputs, TagCloudComponent, EJ_TAGCLOUD_COMPONENTS;
    return {
        setters:[
            function (core_46_1) {
                core_46 = core_46_1;
            }],
        execute: function() {
            Outputs = ["click", "create", "destroy", "mouseout", "mouseover"];
            ComplexProperties = ["fields"];
            Inputs = core_46.Utils.AngularizeInputs(["cssClass", "dataSource", "enableRTL", "fields", "format", "maxFontSize", "minFontSize", "query", "showTitle", "titleImage", "titleText", "fields.frequency", "fields.htmlAttributes", "fields.text", "fields.url"], []);
            exports_45("TagCloudComponent", TagCloudComponent = core_46.CreateComponent("TagCloud", {
                selector: 'ej-tagcloud',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_45("EJ_TAGCLOUD_COMPONENTS", EJ_TAGCLOUD_COMPONENTS = [TagCloudComponent]);
        }
    }
});
System.register("ej/tileview.component", ["ej/core"], function(exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    var core_47;
    var Outputs, ComplexProperties, Inputs, TileViewComponent, EJ_TILEVIEW_COMPONENTS;
    return {
        setters:[
            function (core_47_1) {
                core_47 = core_47_1;
            }],
        execute: function() {
            Outputs = ["mouseDown", "mouseUp"];
            ComplexProperties = ["badge", "caption", "livetile"];
            Inputs = core_47.Utils.AngularizeInputs(["badge", "caption", "cssClass", "enablePersistence", "height", "imageClass", "imagePosition", "imageTemplateId", "imageUrl", "livetile", "tileSize", "width", "showRoundedCorner", "allowSelection", "backgroundColor", "badge.enabled", "badge.maxValue", "badge.minValue", "badge.text", "badge.value", "badge.position", "caption.enabled", "caption.text", "caption.alignment", "caption.position", "caption.icon", "livetile.enabled", "livetile.imageClass", "livetile.imageTemplateId", "livetile.imageUrl", "livetile.type", "livetile.updateInterval", "livetile.text"], []);
            exports_46("TileViewComponent", TileViewComponent = core_47.CreateComponent("TileView", {
                selector: 'ej-tileview',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_46("EJ_TILEVIEW_COMPONENTS", EJ_TILEVIEW_COMPONENTS = [TileViewComponent]);
        }
    }
});
System.register("ej/timepicker.component", ["ej/core"], function(exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
    var core_48;
    var Outputs, ComplexProperties, Inputs, TimePickerComponent, TimePickerValueAccessor, EJ_TIMEPICKER_COMPONENTS;
    return {
        setters:[
            function (core_48_1) {
                core_48 = core_48_1;
            }],
        execute: function() {
            Outputs = ["beforeChange", "beforeOpen", "change", "close", "create", "destroy", "focusIn", "focusOut", "open", "select"];
            ComplexProperties = [];
            Inputs = core_48.Utils.AngularizeInputs(["cssClass", "enableAnimation", "enabled", "enablePersistence", "enableRTL", "enableStrictMode", "height", "hourInterval", "htmlAttributes", "interval", "locale", "maxTime", "minTime", "minutesInterval", "popupHeight", "popupWidth", "readOnly", "secondsInterval", "showPopupButton", "showRoundedCorner", "timeFormat", "value", "width"], []);
            exports_47("TimePickerComponent", TimePickerComponent = core_48.CreateComponent("TimePicker", {
                selector: '[ej-timepicker]',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_47("TimePickerValueAccessor", TimePickerValueAccessor = core_48.CreateControlValueAccessor("[ej-timepicker]", TimePickerComponent));
            exports_47("EJ_TIMEPICKER_COMPONENTS", EJ_TIMEPICKER_COMPONENTS = [TimePickerComponent, TimePickerValueAccessor]);
        }
    }
});
System.register("ej/togglebutton.component", ["ej/core"], function(exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    var core_49;
    var Outputs, ComplexProperties, Inputs, ToggleButtonComponent, EJ_TOGGLEBUTTON_COMPONENTS;
    return {
        setters:[
            function (core_49_1) {
                core_49 = core_49_1;
            }],
        execute: function() {
            Outputs = ["change", "click", "create", "destroy"];
            ComplexProperties = [];
            Inputs = core_49.Utils.AngularizeInputs(["activePrefixIcon", "activeSuffixIcon", "activeText", "contentType", "cssClass", "defaultPrefixIcon", "defaultSuffixIcon", "defaultText", "enabled", "enablePersistence", "enableRTL", "height", "htmlAttributes", "imagePosition", "preventToggle", "showRoundedCorner", "size", "toggleState", "type", "width"], []);
            exports_48("ToggleButtonComponent", ToggleButtonComponent = core_49.CreateComponent("ToggleButton", {
                selector: 'ej-togglebutton',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_48("EJ_TOGGLEBUTTON_COMPONENTS", EJ_TOGGLEBUTTON_COMPONENTS = [ToggleButtonComponent]);
        }
    }
});
System.register("ej/toolbar.component", ["ej/core"], function(exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    var core_50;
    var Outputs, ComplexProperties, Inputs, ToolbarComponent, EJ_TOOLBAR_COMPONENTS;
    return {
        setters:[
            function (core_50_1) {
                core_50 = core_50_1;
            }],
        execute: function() {
            Outputs = ["click", "create", "destroy", "itemHover", "itemLeave"];
            ComplexProperties = [];
            Inputs = core_50.Utils.AngularizeInputs(["cssClass", "dataSource", "enabled", "enableRTL", "enableSeparator", "fields", "height", "hide", "isResponsive", "orientation", "query", "showRoundedCorner", "width", "fields.group", "fields.htmlAttributes", "fields.id", "fields.imageAttributes", "fields.imageUrl", "fields.spriteCssClass", "fields.text", "fields.tooltipText"], []);
            exports_49("ToolbarComponent", ToolbarComponent = core_50.CreateComponent("Toolbar", {
                selector: 'ej-toolbar',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_49("EJ_TOOLBAR_COMPONENTS", EJ_TOOLBAR_COMPONENTS = [ToolbarComponent]);
        }
    }
});
System.register("ej/tooltip.component", ["ej/core"], function(exports_50, context_50) {
    "use strict";
    var __moduleName = context_50 && context_50.id;
    var core_51;
    var Outputs, ComplexProperties, Inputs, TooltipComponent, EJ_TOOLTIP_COMPONENTS;
    return {
        setters:[
            function (core_51_1) {
                core_51 = core_51_1;
            }],
        execute: function() {
            Outputs = ["beforeClose", "beforeOpen", "click", "close", "create", "destroy", "hover", "open", "tracking"];
            ComplexProperties = ["animation", "position", "position.target", "position.stem"];
            Inputs = core_51.Utils.AngularizeInputs(["allowKeyboardNavigation", "animation", "associate", "autoCloseTimeout", "closeMode", "collision", "containment", "content", "cssClass", "enabled", "enableRTL", "enableInteraction", "height", "isBalloon", "position", "showRoundedCorner", "target", "template", "title", "trigger", "width", "animation.effect", "animation.speed", "position.target", "position.target.horizontal", "position.target.vertical", "position.stem", "position.stem.horizontal", "position.stem.vertical"], []);
            exports_50("TooltipComponent", TooltipComponent = core_51.CreateComponent("Tooltip", {
                selector: 'ej-tooltip',
                inputs: Inputs,
                outputs: Outputs,
                template: "<ng-content></ng-content>",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_50("EJ_TOOLTIP_COMPONENTS", EJ_TOOLTIP_COMPONENTS = [TooltipComponent]);
        }
    }
});
System.register("ej/treegrid.component", ["ej/core"], function(exports_51, context_51) {
    "use strict";
    var __moduleName = context_51 && context_51.id;
    var core_52;
    var ColumnDirective, ColumnsDirective, SelectedCellIndexDirective, SelectedCellIndexesDirective, ColumnDialogFieldDirective, ColumnDialogFieldsDirective, Outputs, ComplexProperties, Inputs, TreeGridComponent, EJ_TREEGRID_COMPONENTS;
    return {
        setters:[
            function (core_52_1) {
                core_52 = core_52_1;
            }],
        execute: function() {
            exports_51("ColumnDirective", ColumnDirective = core_52.CreateComplexDirective({
                selector: "e-columns>e-column",
                inputs: ["allowFiltering", "allowSorting", "editType", "field", "filterEditType", "headerText", "visible", "headerTemplateID", "isFrozen", "allowFreezing"],
                queries: {}
            }, {
                tags: [],
                type: core_52.forwardRef(function () { return TreeGridComponent; })
            }));
            exports_51("ColumnsDirective", ColumnsDirective = core_52.CreateArrayTagDirective("columns", 'ej-treegrid>e-columns', ColumnDirective));
            exports_51("SelectedCellIndexDirective", SelectedCellIndexDirective = core_52.CreateComplexDirective({
                selector: "e-selectedcellindexes>e-selectedcellindex",
                queries: {}
            }, {
                tags: [],
                type: core_52.forwardRef(function () { return TreeGridComponent; })
            }));
            exports_51("SelectedCellIndexesDirective", SelectedCellIndexesDirective = core_52.CreateArrayTagDirective("selectedCellIndexes", 'ej-treegrid>e-selectedcellindexes', SelectedCellIndexDirective));
            exports_51("ColumnDialogFieldDirective", ColumnDialogFieldDirective = core_52.CreateComplexDirective({
                selector: "e-columndialogfields>e-columndialogfield",
                queries: {}
            }, {
                tags: [],
                type: core_52.forwardRef(function () { return TreeGridComponent; })
            }));
            exports_51("ColumnDialogFieldsDirective", ColumnDialogFieldsDirective = core_52.CreateArrayTagDirective("columnDialogFields", 'ej-treegrid>e-columndialogfields', ColumnDialogFieldDirective));
            Outputs = ["actionBegin", "actionComplete", "beginEdit", "collapsed", "collapsing", "contextMenuOpen", "endEdit", "expanded", "expanding", "load", "queryCellInfo", "rowDataBound", "rowDrag", "rowDragStart", "rowDragStop", "rowSelected", "rowSelecting", "toolbarClick", "model.dataSourceChange: dataSourceChange", "model.selectedRowIndexChange: selectedRowIndexChange"];
            ComplexProperties = ["contextMenuSettings", "dragTooltip", "editSettings", "sizeSettings", "sortSettings", "toolbarSettings"];
            Inputs = core_52.Utils.AngularizeInputs(["allowColumnResize", "allowDragAndDrop", "allowFiltering", "allowKeyboardNavigation", "allowMultiSorting", "allowSelection", "allowSorting", "altRowTemplateID", "childMapping", "contextMenuSettings", "headerTextOverflow", "dragTooltip", "editSettings", "enableAltRow", "enableCollapseAll", "enableResize", "enableVirtualization", "filterBarMode", "idMapping", "parentIdMapping", "query", "rowHeight", "rowTemplateID", "selectionType", "showColumnChooser", "showGridCellTooltip", "showGridExpandCellTooltip", "sizeSettings", "sortSettings", "toolbarSettings", "treeColumnIndex", "contextMenuSettings.contextMenuItems", "contextMenuSettings.showContextMenu", "dragTooltip.showTooltip", "dragTooltip.tooltipItems", "dragTooltip.tooltipTemplate", "editSettings.allowAdding", "editSettings.allowDeleting", "editSettings.allowEditing", "editSettings.editMode", "editSettings.rowPosition", "sizeSettings.height", "sizeSettings.width", "sortSettings.sortedColumns", "toolbarSettings.showToolBar", "toolbarSettings.toolbarItems", "columns"], ["dataSource", "selectedRowIndex"]);
            exports_51("TreeGridComponent", TreeGridComponent = core_52.CreateComponent("TreeGrid", {
                selector: 'ej-treegrid',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _columns: new core_52.ContentChild(ColumnsDirective),
                    _selectedCellIndexes: new core_52.ContentChild(SelectedCellIndexesDirective),
                    _columnDialogFields: new core_52.ContentChild(ColumnDialogFieldsDirective),
                }
            }, {
                tags: ["columns", "selectedCellIndexes", "columnDialogFields"],
                twoways: ["dataSource", "selectedRowIndex"],
                complexes: ComplexProperties,
            }));
            exports_51("EJ_TREEGRID_COMPONENTS", EJ_TREEGRID_COMPONENTS = [TreeGridComponent, ColumnsDirective, ColumnDirective, SelectedCellIndexesDirective, SelectedCellIndexDirective, ColumnDialogFieldsDirective, ColumnDialogFieldDirective]);
        }
    }
});
System.register("ej/treeview.component", ["ej/core"], function(exports_52, context_52) {
    "use strict";
    var __moduleName = context_52 && context_52.id;
    var core_53;
    var Outputs, ComplexProperties, Inputs, TreeViewComponent, EJ_TREEVIEW_COMPONENTS;
    return {
        setters:[
            function (core_53_1) {
                core_53 = core_53_1;
            }],
        execute: function() {
            Outputs = ["beforeAdd", "beforeCollapse", "beforeCut", "beforeDelete", "beforeEdit", "beforeExpand", "beforeLoad", "beforePaste", "beforeSelect", "create", "destroy", "inlineEditValidation", "keyPress", "loadError", "loadSuccess", "nodeAdd", "nodeCheck", "nodeClick", "nodeCollapse", "nodeCut", "nodeDelete", "nodeDrag", "nodeDragStart", "nodeDragStop", "nodeDropped", "nodeEdit", "nodeExpand", "nodePaste", "nodeSelect", "nodeUncheck"];
            ComplexProperties = ["fields", "sortSettings"];
            Inputs = core_53.Utils.AngularizeInputs(["allowDragAndDrop", "allowDragAndDropAcrossControl", "allowDropSibling", "allowDropChild", "allowEditing", "allowKeyboardNavigation", "autoCheck", "autoCheckParentNode", "cssClass", "enableAnimation", "enabled", "enableMultipleExpand", "enablePersistence", "enableRTL", "expandOn", "fields", "height", "htmlAttributes", "loadOnDemand", "selectedNode", "showCheckbox", "sortSettings", "template", "width", "fields.child", "fields.dataSource", "fields.expanded", "fields.hasChild", "fields.htmlAttribute", "fields.id", "fields.imageAttribute", "fields.imageUrl", "fields.isChecked", "fields.linkAttribute", "fields.parentId", "fields.query", "fields.selected", "fields.spriteCssClass", "fields.tableName", "fields.text", "sortSettings.allowSorting", "sortSettings.sortOrder"], []);
            exports_52("TreeViewComponent", TreeViewComponent = core_53.CreateComponent("TreeView", {
                selector: 'ej-treeview',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {}
            }, {
                tags: [],
                twoways: [],
                complexes: ComplexProperties,
            }));
            exports_52("EJ_TREEVIEW_COMPONENTS", EJ_TREEVIEW_COMPONENTS = [TreeViewComponent]);
        }
    }
});
System.register("ej/web.all", ["ej/grid.component", "ej/chart.component", "ej/rangenavigator.component", "ej/bulletgraph.component", "ej/circulargauge.component", "ej/lineargauge.component", "ej/digitalgauge.component", "ej/spreadsheet.component", "ej/datepicker.component", "ej/gantt.component", "ej/treegrid.component", "ej/colorpicker.component", "ej/dialog.component", "ej/scroller.component", "ej/barcode.component", "ej/pdfviewer.component", "ej/numerictextbox.component", "ej/currencytextbox.component", "ej/percentagetextbox.component", "ej/timepicker.component", "ej/toolbar.component", "ej/menu.component", "ej/autocomplete.component", "ej/maskedit.component", "ej/treeview.component", "ej/schedule.component", "ej/kanban.component", "ej/ribbon.component", "ej/pivotgrid.component", "ej/rating.component", "ej/listbox.component", "ej/listview.component", "ej/rotator.component", "ej/rte.component", "ej/dropdownlist.component", "ej/radialmenu.component", "ej/tileview.component", "ej/accordion.component", "ej/tab.component", "ej/checkbox.component", "ej/radiobutton.component", "ej/togglebutton.component", "ej/datetimepicker.component", "ej/progressbar.component", "ej/tagcloud.component", "ej/button.component", "ej/tooltip.component", "ej/slider.component", "ej/fileexplorer.component", "ej/reportviewer.component", "ej/splitter.component"], function(exports_53, context_53) {
    "use strict";
    var __moduleName = context_53 && context_53.id;
    return {
        setters:[
            function (grid_component_1_1) {
                exports_53({
                    "EJ_GRID_COMPONENTS": grid_component_1_1["EJ_GRID_COMPONENTS"],
                    "GridComponent": grid_component_1_1["GridComponent"],
                    "ColumnsDirective": grid_component_1_1["ColumnsDirective"],
                    "ColumnDirective": grid_component_1_1["ColumnDirective"],
                    "SummaryColumnsDirective": grid_component_1_1["SummaryColumnsDirective"],
                    "SummaryColumnDirective": grid_component_1_1["SummaryColumnDirective"],
                    "SummaryRowsDirective": grid_component_1_1["SummaryRowsDirective"],
                    "SummaryRowDirective": grid_component_1_1["SummaryRowDirective"],
                    "StackedHeaderColumnsDirective": grid_component_1_1["StackedHeaderColumnsDirective"],
                    "StackedHeaderColumnDirective": grid_component_1_1["StackedHeaderColumnDirective"],
                    "StackedHeaderRowsDirective": grid_component_1_1["StackedHeaderRowsDirective"],
                    "StackedHeaderRowDirective": grid_component_1_1["StackedHeaderRowDirective"]
                });
            },
            function (chart_component_1_1) {
                exports_53({
                    "EJ_CHART_COMPONENTS": chart_component_1_1["EJ_CHART_COMPONENTS"],
                    "ChartComponent": chart_component_1_1["ChartComponent"],
                    "StripLineCollectionDirective": chart_component_1_1["StripLineCollectionDirective"],
                    "stripLineDirective": chart_component_1_1["stripLineDirective"],
                    "AxesDirective": chart_component_1_1["AxesDirective"],
                    "AxisDirective": chart_component_1_1["AxisDirective"],
                    "TrendlinesDirective": chart_component_1_1["TrendlinesDirective"],
                    "TrendlineDirective": chart_component_1_1["TrendlineDirective"],
                    "PointsDirective": chart_component_1_1["PointsDirective"],
                    "PointDirective": chart_component_1_1["PointDirective"],
                    "SeriesCollectionDirective": chart_component_1_1["SeriesCollectionDirective"],
                    "SeriesDirective": chart_component_1_1["SeriesDirective"],
                    "IndicatorsDirective": chart_component_1_1["IndicatorsDirective"],
                    "IndicatorDirective": chart_component_1_1["IndicatorDirective"],
                    "AnnotationsDirective": chart_component_1_1["AnnotationsDirective"],
                    "AnnotationDirective": chart_component_1_1["AnnotationDirective"],
                    "PrimaryXAxisStripLineCollectionDirective": chart_component_1_1["PrimaryXAxisStripLineCollectionDirective"],
                    "PrimaryXAxisStripLineDirective": chart_component_1_1["PrimaryXAxisStripLineDirective"],
                    "PrimaryYAxisStripLineCollectionDirective": chart_component_1_1["PrimaryYAxisStripLineCollectionDirective"],
                    "PrimaryYAxisStripLineDirective": chart_component_1_1["PrimaryYAxisStripLineDirective"],
                    "PaletteCollectionDirective": chart_component_1_1["PaletteCollectionDirective"],
                    "PaletteDirective": chart_component_1_1["PaletteDirective"],
                    "ToolbarItemsDirective": chart_component_1_1["ToolbarItemsDirective"],
                    "ToolbarItemDirective": chart_component_1_1["ToolbarItemDirective"],
                    "RowDefinitionsDirective": chart_component_1_1["RowDefinitionsDirective"],
                    "RowDefinitionDirective": chart_component_1_1["RowDefinitionDirective"],
                    "ColumnDefinitionsDirective": chart_component_1_1["ColumnDefinitionsDirective"],
                    "ColumnDefinitionDirective": chart_component_1_1["ColumnDefinitionDirective"]
                });
            },
            function (rangenavigator_component_1_1) {
                exports_53({
                    "EJ_RANGENAVIGATOR_COMPONENTS": rangenavigator_component_1_1["EJ_RANGENAVIGATOR_COMPONENTS"],
                    "RangeNavigatorComponent": rangenavigator_component_1_1["RangeNavigatorComponent"],
                    "PointsDirective": rangenavigator_component_1_1["PointsDirective"],
                    "PointDirective": rangenavigator_component_1_1["PointDirective"],
                    "SeriesCollectionDirective": rangenavigator_component_1_1["SeriesCollectionDirective"],
                    "SeriesDirective": rangenavigator_component_1_1["SeriesDirective"]
                });
            },
            function (bulletgraph_component_1_1) {
                exports_53({
                    "EJ_BULLETGRAPH_COMPONENTS": bulletgraph_component_1_1["EJ_BULLETGRAPH_COMPONENTS"],
                    "BulletGraphComponent": bulletgraph_component_1_1["BulletGraphComponent"],
                    "QualitativeRangesDirective": bulletgraph_component_1_1["QualitativeRangesDirective"],
                    "QualitativeRangeDirective": bulletgraph_component_1_1["QualitativeRangeDirective"],
                    "QuantitativeScaleSettingsFeatureMeasuresDirective": bulletgraph_component_1_1["QuantitativeScaleSettingsFeatureMeasuresDirective"],
                    "QuantitativeScaleSettingsFeatureMeasureDirective": bulletgraph_component_1_1["QuantitativeScaleSettingsFeatureMeasureDirective"]
                });
            },
            function (circulargauge_component_1_1) {
                exports_53({
                    "EJ_CIRCULARGAUGE_COMPONENTS": circulargauge_component_1_1["EJ_CIRCULARGAUGE_COMPONENTS"],
                    "CircularGaugeComponent": circulargauge_component_1_1["CircularGaugeComponent"],
                    "PointersDirective": circulargauge_component_1_1["PointersDirective"],
                    "PointerDirective": circulargauge_component_1_1["PointerDirective"],
                    "LabelsDirective": circulargauge_component_1_1["LabelsDirective"],
                    "LabelDirective": circulargauge_component_1_1["LabelDirective"],
                    "TicksDirective": circulargauge_component_1_1["TicksDirective"],
                    "TickDirective": circulargauge_component_1_1["TickDirective"],
                    "RangesDirective": circulargauge_component_1_1["RangesDirective"],
                    "RangeDirective": circulargauge_component_1_1["RangeDirective"],
                    "StateRangesDirective": circulargauge_component_1_1["StateRangesDirective"],
                    "StateRangeDirective": circulargauge_component_1_1["StateRangeDirective"],
                    "IndicatorsDirective": circulargauge_component_1_1["IndicatorsDirective"],
                    "IndicatorDirective": circulargauge_component_1_1["IndicatorDirective"],
                    "SubGaugesDirective": circulargauge_component_1_1["SubGaugesDirective"],
                    "SubGaugeDirective": circulargauge_component_1_1["SubGaugeDirective"],
                    "CustomLabelsDirective": circulargauge_component_1_1["CustomLabelsDirective"],
                    "CustomLabelDirective": circulargauge_component_1_1["CustomLabelDirective"],
                    "ScalesDirective": circulargauge_component_1_1["ScalesDirective"],
                    "ScaleDirective": circulargauge_component_1_1["ScaleDirective"]
                });
            },
            function (lineargauge_component_1_1) {
                exports_53({
                    "EJ_LINEARGAUGE_COMPONENTS": lineargauge_component_1_1["EJ_LINEARGAUGE_COMPONENTS"],
                    "LinearGaugeComponent": lineargauge_component_1_1["LinearGaugeComponent"],
                    "MarkerPointersDirective": lineargauge_component_1_1["MarkerPointersDirective"],
                    "MarkerPointerDirective": lineargauge_component_1_1["MarkerPointerDirective"],
                    "BarPointersDirective": lineargauge_component_1_1["BarPointersDirective"],
                    "BarPointerDirective": lineargauge_component_1_1["BarPointerDirective"],
                    "RangesDirective": lineargauge_component_1_1["RangesDirective"],
                    "RangeDirective": lineargauge_component_1_1["RangeDirective"],
                    "TicksDirective": lineargauge_component_1_1["TicksDirective"],
                    "TickDirective": lineargauge_component_1_1["TickDirective"],
                    "StateRangesDirective": lineargauge_component_1_1["StateRangesDirective"],
                    "StateRangeDirective": lineargauge_component_1_1["StateRangeDirective"],
                    "IndicatorsDirective": lineargauge_component_1_1["IndicatorsDirective"],
                    "IndicatorDirective": lineargauge_component_1_1["IndicatorDirective"],
                    "LabelsDirective": lineargauge_component_1_1["LabelsDirective"],
                    "LabelDirective": lineargauge_component_1_1["LabelDirective"],
                    "CustomLabelsDirective": lineargauge_component_1_1["CustomLabelsDirective"],
                    "CustomLabelDirective": lineargauge_component_1_1["CustomLabelDirective"],
                    "ScalesDirective": lineargauge_component_1_1["ScalesDirective"],
                    "ScaleDirective": lineargauge_component_1_1["ScaleDirective"]
                });
            },
            function (digitalgauge_component_1_1) {
                exports_53({
                    "EJ_DIGITALGAUGE_COMPONENTS": digitalgauge_component_1_1["EJ_DIGITALGAUGE_COMPONENTS"],
                    "DigitalGaugeComponent": digitalgauge_component_1_1["DigitalGaugeComponent"],
                    "ItemsDirective": digitalgauge_component_1_1["ItemsDirective"],
                    "ItemDirective": digitalgauge_component_1_1["ItemDirective"]
                });
            },
            function (spreadsheet_component_1_1) {
                exports_53({
                    "EJ_SPREADSHEET_COMPONENTS": spreadsheet_component_1_1["EJ_SPREADSHEET_COMPONENTS"],
                    "SpreadsheetComponent": spreadsheet_component_1_1["SpreadsheetComponent"],
                    "RangeSettingsDirective": spreadsheet_component_1_1["RangeSettingsDirective"],
                    "RangeSettingDirective": spreadsheet_component_1_1["RangeSettingDirective"],
                    "SheetsDirective": spreadsheet_component_1_1["SheetsDirective"],
                    "SheetDirective": spreadsheet_component_1_1["SheetDirective"]
                });
            },
            function (datepicker_component_1_1) {
                exports_53({
                    "EJ_DATEPICKER_COMPONENTS": datepicker_component_1_1["EJ_DATEPICKER_COMPONENTS"],
                    "DatePickerComponent": datepicker_component_1_1["DatePickerComponent"],
                    "DatePickerValueAccessor": datepicker_component_1_1["DatePickerValueAccessor"]
                });
            },
            function (gantt_component_1_1) {
                exports_53({
                    "EJ_GANTT_COMPONENTS": gantt_component_1_1["EJ_GANTT_COMPONENTS"],
                    "GanttComponent": gantt_component_1_1["GanttComponent"],
                    "StriplinesDirective": gantt_component_1_1["StriplinesDirective"],
                    "StriplineDirective": gantt_component_1_1["StriplineDirective"],
                    "HolidaysDirective": gantt_component_1_1["HolidaysDirective"],
                    "HolidayDirective": gantt_component_1_1["HolidayDirective"],
                    "SelectedCellIndexesDirective": gantt_component_1_1["SelectedCellIndexesDirective"],
                    "SelectedCellIndexDirective": gantt_component_1_1["SelectedCellIndexDirective"],
                    "EditDialogFieldsDirective": gantt_component_1_1["EditDialogFieldsDirective"],
                    "EditDialogFieldDirective": gantt_component_1_1["EditDialogFieldDirective"],
                    "AddDialogFieldsDirective": gantt_component_1_1["AddDialogFieldsDirective"],
                    "AddDialogFieldDirective": gantt_component_1_1["AddDialogFieldDirective"],
                    "ColumnDialogFieldsDirective": gantt_component_1_1["ColumnDialogFieldsDirective"],
                    "ColumnDialogFieldDirective": gantt_component_1_1["ColumnDialogFieldDirective"]
                });
            },
            function (treegrid_component_1_1) {
                exports_53({
                    "EJ_TREEGRID_COMPONENTS": treegrid_component_1_1["EJ_TREEGRID_COMPONENTS"],
                    "TreeGridComponent": treegrid_component_1_1["TreeGridComponent"],
                    "ColumnsDirective": treegrid_component_1_1["ColumnsDirective"],
                    "ColumnDirective": treegrid_component_1_1["ColumnDirective"],
                    "SelectedCellIndexesDirective": treegrid_component_1_1["SelectedCellIndexesDirective"],
                    "SelectedCellIndexDirective": treegrid_component_1_1["SelectedCellIndexDirective"],
                    "ColumnDialogFieldsDirective": treegrid_component_1_1["ColumnDialogFieldsDirective"],
                    "ColumnDialogFieldDirective": treegrid_component_1_1["ColumnDialogFieldDirective"]
                });
            },
            function (colorpicker_component_1_1) {
                exports_53({
                    "EJ_COLORPICKER_COMPONENTS": colorpicker_component_1_1["EJ_COLORPICKER_COMPONENTS"],
                    "ColorPickerComponent": colorpicker_component_1_1["ColorPickerComponent"],
                    "ColorPickerValueAccessor": colorpicker_component_1_1["ColorPickerValueAccessor"]
                });
            },
            function (dialog_component_1_1) {
                exports_53({
                    "EJ_DIALOG_COMPONENTS": dialog_component_1_1["EJ_DIALOG_COMPONENTS"],
                    "DialogComponent": dialog_component_1_1["DialogComponent"]
                });
            },
            function (scroller_component_1_1) {
                exports_53({
                    "EJ_SCROLLER_COMPONENTS": scroller_component_1_1["EJ_SCROLLER_COMPONENTS"],
                    "ScrollerComponent": scroller_component_1_1["ScrollerComponent"]
                });
            },
            function (barcode_component_1_1) {
                exports_53({
                    "EJ_BARCODE_COMPONENTS": barcode_component_1_1["EJ_BARCODE_COMPONENTS"],
                    "BarcodeComponent": barcode_component_1_1["BarcodeComponent"]
                });
            },
            function (pdfviewer_component_1_1) {
                exports_53({
                    "EJ_PDFVIEWER_COMPONENTS": pdfviewer_component_1_1["EJ_PDFVIEWER_COMPONENTS"],
                    "PdfViewerComponent": pdfviewer_component_1_1["PdfViewerComponent"]
                });
            },
            function (numerictextbox_component_1_1) {
                exports_53({
                    "EJ_NUMERICTEXTBOX_COMPONENTS": numerictextbox_component_1_1["EJ_NUMERICTEXTBOX_COMPONENTS"],
                    "NumericTextboxComponent": numerictextbox_component_1_1["NumericTextboxComponent"],
                    "NumericTextboxValueAccessor": numerictextbox_component_1_1["NumericTextboxValueAccessor"]
                });
            },
            function (currencytextbox_component_1_1) {
                exports_53({
                    "EJ_CURRENCYTEXTBOX_COMPONENTS": currencytextbox_component_1_1["EJ_CURRENCYTEXTBOX_COMPONENTS"],
                    "CurrencyTextboxComponent": currencytextbox_component_1_1["CurrencyTextboxComponent"],
                    "CurrencyTextboxValueAccessor": currencytextbox_component_1_1["CurrencyTextboxValueAccessor"]
                });
            },
            function (percentagetextbox_component_1_1) {
                exports_53({
                    "EJ_PERCENTAGETEXTBOX_COMPONENTS": percentagetextbox_component_1_1["EJ_PERCENTAGETEXTBOX_COMPONENTS"],
                    "PercentageTextboxComponent": percentagetextbox_component_1_1["PercentageTextboxComponent"],
                    "PercentageTextboxValueAccessor": percentagetextbox_component_1_1["PercentageTextboxValueAccessor"]
                });
            },
            function (timepicker_component_1_1) {
                exports_53({
                    "EJ_TIMEPICKER_COMPONENTS": timepicker_component_1_1["EJ_TIMEPICKER_COMPONENTS"],
                    "TimePickerComponent": timepicker_component_1_1["TimePickerComponent"],
                    "TimePickerValueAccessor": timepicker_component_1_1["TimePickerValueAccessor"]
                });
            },
            function (toolbar_component_1_1) {
                exports_53({
                    "EJ_TOOLBAR_COMPONENTS": toolbar_component_1_1["EJ_TOOLBAR_COMPONENTS"],
                    "ToolbarComponent": toolbar_component_1_1["ToolbarComponent"]
                });
            },
            function (menu_component_1_1) {
                exports_53({
                    "EJ_MENU_COMPONENTS": menu_component_1_1["EJ_MENU_COMPONENTS"],
                    "MenuComponent": menu_component_1_1["MenuComponent"]
                });
            },
            function (autocomplete_component_1_1) {
                exports_53({
                    "EJ_AUTOCOMPLETE_COMPONENTS": autocomplete_component_1_1["EJ_AUTOCOMPLETE_COMPONENTS"],
                    "AutocompleteComponent": autocomplete_component_1_1["AutocompleteComponent"],
                    "AutocompleteValueAccessor": autocomplete_component_1_1["AutocompleteValueAccessor"]
                });
            },
            function (maskedit_component_1_1) {
                exports_53({
                    "EJ_MASKEDIT_COMPONENTS": maskedit_component_1_1["EJ_MASKEDIT_COMPONENTS"],
                    "MaskEditComponent": maskedit_component_1_1["MaskEditComponent"],
                    "MaskEditValueAccessor": maskedit_component_1_1["MaskEditValueAccessor"]
                });
            },
            function (treeview_component_1_1) {
                exports_53({
                    "EJ_TREEVIEW_COMPONENTS": treeview_component_1_1["EJ_TREEVIEW_COMPONENTS"],
                    "TreeViewComponent": treeview_component_1_1["TreeViewComponent"]
                });
            },
            function (schedule_component_1_1) {
                exports_53({
                    "EJ_SCHEDULE_COMPONENTS": schedule_component_1_1["EJ_SCHEDULE_COMPONENTS"],
                    "ScheduleComponent": schedule_component_1_1["ScheduleComponent"],
                    "ResourcesDirective": schedule_component_1_1["ResourcesDirective"],
                    "ResourceDirective": schedule_component_1_1["ResourceDirective"]
                });
            },
            function (kanban_component_1_1) {
                exports_53({
                    "EJ_KANBAN_COMPONENTS": kanban_component_1_1["EJ_KANBAN_COMPONENTS"],
                    "KanbanComponent": kanban_component_1_1["KanbanComponent"],
                    "ColumnsDirective": kanban_component_1_1["ColumnsDirective"],
                    "ColumnDirective": kanban_component_1_1["ColumnDirective"]
                });
            },
            function (ribbon_component_1_1) {
                exports_53({
                    "EJ_RIBBON_COMPONENTS": ribbon_component_1_1["EJ_RIBBON_COMPONENTS"],
                    "RibbonComponent": ribbon_component_1_1["RibbonComponent"],
                    "ApplicationTabBackstageSettingsPagesDirective": ribbon_component_1_1["ApplicationTabBackstageSettingsPagesDirective"],
                    "PageDirective": ribbon_component_1_1["PageDirective"],
                    "ContentGroupsDirective": ribbon_component_1_1["ContentGroupsDirective"],
                    "ContentGroupDirective": ribbon_component_1_1["ContentGroupDirective"],
                    "ContentsDirective": ribbon_component_1_1["ContentsDirective"],
                    "ContentDirective": ribbon_component_1_1["ContentDirective"],
                    "GroupsDirective": ribbon_component_1_1["GroupsDirective"],
                    "GroupDirective": ribbon_component_1_1["GroupDirective"],
                    "TabsDirective": ribbon_component_1_1["TabsDirective"],
                    "TabDirective": ribbon_component_1_1["TabDirective"]
                });
            },
            function (pivotgrid_component_1_1) {
                exports_53({
                    "EJ_PIVOTGRID_COMPONENTS": pivotgrid_component_1_1["EJ_PIVOTGRID_COMPONENTS"],
                    "PivotGridComponent": pivotgrid_component_1_1["PivotGridComponent"]
                });
            },
            function (rating_component_1_1) {
                exports_53({
                    "EJ_RATING_COMPONENTS": rating_component_1_1["EJ_RATING_COMPONENTS"],
                    "RatingComponent": rating_component_1_1["RatingComponent"]
                });
            },
            function (listbox_component_1_1) {
                exports_53({
                    "EJ_LISTBOX_COMPONENTS": listbox_component_1_1["EJ_LISTBOX_COMPONENTS"],
                    "ListBoxComponent": listbox_component_1_1["ListBoxComponent"]
                });
            },
            function (listview_component_1_1) {
                exports_53({
                    "EJ_LISTVIEW_COMPONENTS": listview_component_1_1["EJ_LISTVIEW_COMPONENTS"],
                    "ListViewComponent": listview_component_1_1["ListViewComponent"],
                    "ItemsDirective": listview_component_1_1["ItemsDirective"],
                    "ItemDirective": listview_component_1_1["ItemDirective"]
                });
            },
            function (rotator_component_1_1) {
                exports_53({
                    "EJ_ROTATOR_COMPONENTS": rotator_component_1_1["EJ_ROTATOR_COMPONENTS"],
                    "RotatorComponent": rotator_component_1_1["RotatorComponent"]
                });
            },
            function (rte_component_1_1) {
                exports_53({
                    "EJ_RTE_COMPONENTS": rte_component_1_1["EJ_RTE_COMPONENTS"],
                    "RTEComponent": rte_component_1_1["RTEComponent"],
                    "RTEValueAccessor": rte_component_1_1["RTEValueAccessor"]
                });
            },
            function (dropdownlist_component_1_1) {
                exports_53({
                    "EJ_DROPDOWNLIST_COMPONENTS": dropdownlist_component_1_1["EJ_DROPDOWNLIST_COMPONENTS"],
                    "DropDownListComponent": dropdownlist_component_1_1["DropDownListComponent"],
                    "DropDownListValueAccessor": dropdownlist_component_1_1["DropDownListValueAccessor"]
                });
            },
            function (radialmenu_component_1_1) {
                exports_53({
                    "EJ_RADIALMENU_COMPONENTS": radialmenu_component_1_1["EJ_RADIALMENU_COMPONENTS"],
                    "RadialMenuComponent": radialmenu_component_1_1["RadialMenuComponent"]
                });
            },
            function (tileview_component_1_1) {
                exports_53({
                    "EJ_TILEVIEW_COMPONENTS": tileview_component_1_1["EJ_TILEVIEW_COMPONENTS"],
                    "TileViewComponent": tileview_component_1_1["TileViewComponent"]
                });
            },
            function (accordion_component_1_1) {
                exports_53({
                    "EJ_ACCORDION_COMPONENTS": accordion_component_1_1["EJ_ACCORDION_COMPONENTS"],
                    "AccordionComponent": accordion_component_1_1["AccordionComponent"]
                });
            },
            function (tab_component_1_1) {
                exports_53({
                    "EJ_TAB_COMPONENTS": tab_component_1_1["EJ_TAB_COMPONENTS"],
                    "TabComponent": tab_component_1_1["TabComponent"]
                });
            },
            function (checkbox_component_1_1) {
                exports_53({
                    "EJ_CHECKBOX_COMPONENTS": checkbox_component_1_1["EJ_CHECKBOX_COMPONENTS"],
                    "CheckBoxComponent": checkbox_component_1_1["CheckBoxComponent"]
                });
            },
            function (radiobutton_component_1_1) {
                exports_53({
                    "EJ_RADIOBUTTON_COMPONENTS": radiobutton_component_1_1["EJ_RADIOBUTTON_COMPONENTS"],
                    "RadioButtonComponent": radiobutton_component_1_1["RadioButtonComponent"],
                    "RadioButtonValueAccessor": radiobutton_component_1_1["RadioButtonValueAccessor"]
                });
            },
            function (togglebutton_component_1_1) {
                exports_53({
                    "EJ_TOGGLEBUTTON_COMPONENTS": togglebutton_component_1_1["EJ_TOGGLEBUTTON_COMPONENTS"],
                    "ToggleButtonComponent": togglebutton_component_1_1["ToggleButtonComponent"]
                });
            },
            function (datetimepicker_component_1_1) {
                exports_53({
                    "EJ_DATETIMEPICKER_COMPONENTS": datetimepicker_component_1_1["EJ_DATETIMEPICKER_COMPONENTS"],
                    "DateTimePickerComponent": datetimepicker_component_1_1["DateTimePickerComponent"],
                    "DateTimePickerValueAccessor": datetimepicker_component_1_1["DateTimePickerValueAccessor"]
                });
            },
            function (progressbar_component_1_1) {
                exports_53({
                    "EJ_PROGRESSBAR_COMPONENTS": progressbar_component_1_1["EJ_PROGRESSBAR_COMPONENTS"],
                    "ProgressBarComponent": progressbar_component_1_1["ProgressBarComponent"]
                });
            },
            function (tagcloud_component_1_1) {
                exports_53({
                    "EJ_TAGCLOUD_COMPONENTS": tagcloud_component_1_1["EJ_TAGCLOUD_COMPONENTS"],
                    "TagCloudComponent": tagcloud_component_1_1["TagCloudComponent"]
                });
            },
            function (button_component_1_1) {
                exports_53({
                    "EJ_BUTTON_COMPONENTS": button_component_1_1["EJ_BUTTON_COMPONENTS"],
                    "ButtonComponent": button_component_1_1["ButtonComponent"]
                });
            },
            function (tooltip_component_1_1) {
                exports_53({
                    "EJ_TOOLTIP_COMPONENTS": tooltip_component_1_1["EJ_TOOLTIP_COMPONENTS"],
                    "TooltipComponent": tooltip_component_1_1["TooltipComponent"]
                });
            },
            function (slider_component_1_1) {
                exports_53({
                    "EJ_SLIDER_COMPONENTS": slider_component_1_1["EJ_SLIDER_COMPONENTS"],
                    "SliderComponent": slider_component_1_1["SliderComponent"]
                });
            },
            function (fileexplorer_component_1_1) {
                exports_53({
                    "EJ_FILEEXPLORER_COMPONENTS": fileexplorer_component_1_1["EJ_FILEEXPLORER_COMPONENTS"],
                    "FileExplorerComponent": fileexplorer_component_1_1["FileExplorerComponent"]
                });
            },
            function (reportviewer_component_1_1) {
                exports_53({
                    "EJ_REPORTVIEWER_COMPONENTS": reportviewer_component_1_1["EJ_REPORTVIEWER_COMPONENTS"],
                    "ReportViewerComponent": reportviewer_component_1_1["ReportViewerComponent"]
                });
            },
            function (splitter_component_1_1) {
                exports_53({
                    "EJ_SPLITTER_COMPONENTS": splitter_component_1_1["EJ_SPLITTER_COMPONENTS"],
                    "SplitterComponent": splitter_component_1_1["SplitterComponent"]
                });
            }],
        execute: function() {
        }
    }
});
