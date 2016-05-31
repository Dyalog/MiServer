intellisense.annotate(ej.Accordion.prototype, {
	'addItem' : function (header_name, content, index, isAjaxReq){
		///<signature>
			///<summary>AddItem method is used to add the panel in dynamically. It receives the following parameters</summary>
			///<param name=' header_name' type='<span class="param-type">string</span>' optional='false' >specify the name of the header</param>
			///<param name=' content' type='<span class="param-type">string</span>' optional='false' >content of the new panel</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >insertion place of the new panel</param>
			///<param name=' isAjaxReq' type='<span class="param-type">boolean</span>' optional='false' >Enable or disable the AJAX request to the added panel</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>This method used to collapse the all the expanded items in accordion at a time.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Accordion widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the accordion widget includes all the headers and content panels.</summary>
		///</signature>
	},
	'disableItems' : function (index){
		///<signature>
			///<summary>Disable the accordion widget item based on specified header index.</summary>
			///<param name=' index' type='<span class="param-type">array</span>' optional='false' >index values to disable the panels</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the accordion widget includes all the headers and content panels.</summary>
		///</signature>
	},
	'enableItems' : function (index){
		///<signature>
			///<summary>Enable the accordion widget item based on specified header index.</summary>
			///<param name=' index' type='<span class="param-type">array</span>' optional='false' >index values to enable the panels</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expandAll' : function(){
		///<signature>
			///<summary>To expand all the accordion widget items.</summary>
		///</signature>
	},
	'getItemsCount' : function(){
		///<signature>
			///<summary>Returns the total number of panels in the control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the visible Accordion control.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>The refresh method is used to adjust the control size based on the parent element dimension.</summary>
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>RemoveItem method is used to remove the specified index panel.It receives the parameter as number.</summary>
			///<param name=' index ' type='<span class="param-type">number</span>' optional='false' >specify the index value for remove the accordion panel.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Shows the hidden Accordion control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Autocomplete.prototype, {
	'clearText' : function(){
		///<signature>
			///<summary>Clears the text in the Autocomplete textbox.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the Autocomplete widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the autocomplete widget.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the autocomplete widget.</summary>
		///</signature>
	},
	'getSelectedItems' : function(){
		///<signature>
			///<summary>Returns objects (data object) of all the selected items in the autocomplete textbox.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current selected value from the Autocomplete textbox.</summary>
		///</signature>
	},
	'search' : function(){
		///<signature>
			///<summary>Search the entered text and show it in the suggestion list if available.</summary>
		///</signature>
	},
	'open' : function(){
		///<signature>
			///<summary>Open up the autocomplete suggestion popup with all list items.</summary>
		///</signature>
	},
	'selectValueByKey' : function(){
		///<signature>
			///<summary>Sets the value of the Autocomplete textbox based on the given key value.</summary>
		///</signature>
	},
	'selectValueByText' : function(){
		///<signature>
			///<summary>Sets the value of the Autocomplete textbox based on the given input text value.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Button.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the button widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the button</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the button</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Chart.prototype, {
	'animate' : function (options){
		///<signature>
			///<summary>Animates the series and/or indicators in Chart. When parameter is not passed to this method, then all the series and indicators present in Chart are animated.</summary>
			///<param name='options' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'export' : function (type, URL, exportMultipleChart){
		///<signature>
			///<summary>Exports chart as an image or to an excel file. Chart can be exported as an image only when exportCanvasRendering option is set to true.</summary>
			///<param name='type' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='URL' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name=' exportMultipleChart' type='<span class="param-type">boolean</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'redraw' : function(){
		///<signature>
			///<summary>Redraws the entire chart. You can call this method whenever you update, add or remove points from the data source or whenever you want to refresh the UI.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.CheckBox.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the CheckBox widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disable the CheckBox to prevent all user interactions.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the CheckBox</summary>
		///</signature>
	},
	'isChecked' : function(){
		///<signature>
			///<summary>To Check the status of CheckBox</summary>
		///</signature>
	}
});
intellisense.annotate(ej.CircularGauge.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the circular gauge widget. all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'exportImage' : function (){
		///<signature>
			///<summary>To export Image</summary>
			///<param name='{% highlight html %} argument.fileName{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.fileType{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getBackNeedleLength' : function (){
		///<signature>
			///<summary>To get BackNeedleLength</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getCustomLabelAngle' : function (){
		///<signature>
			///<summary>To get CustomLabelAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getCustomLabelValue' : function (){
		///<signature>
			///<summary>To get CustomLabelValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelAngle' : function (){
		///<signature>
			///<summary>To get LabelAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelDistanceFromScale' : function (){
		///<signature>
			///<summary>To get LabelDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelPlacement' : function (){
		///<signature>
			///<summary>To get LabelPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelStyle' : function (){
		///<signature>
			///<summary>To get LabelStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMajorIntervalValue' : function (){
		///<signature>
			///<summary>To get MajorIntervalValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMarkerDistanceFromScale' : function (){
		///<signature>
			///<summary>To get MarkerDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMarkerStyle' : function (){
		///<signature>
			///<summary>To get MarkerStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMaximumValue' : function (){
		///<signature>
			///<summary>To get MaximumValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMinimumValue' : function (){
		///<signature>
			///<summary>To get MinimumValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMinorIntervalValue' : function (){
		///<signature>
			///<summary>To get MinorIntervalValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getNeedleStyle' : function (){
		///<signature>
			///<summary>To get NeedleStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerCapBorderWidth' : function (){
		///<signature>
			///<summary>To get PointerCapBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerCapRadius' : function (){
		///<signature>
			///<summary>To get PointerCapRadius</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerLength' : function (){
		///<signature>
			///<summary>To get PointerLength</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerNeedleType' : function (){
		///<signature>
			///<summary>To get PointerNeedleType</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerPlacement' : function (){
		///<signature>
			///<summary>To get PointerPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerValue' : function (){
		///<signature>
			///<summary>To get PointerValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerWidth' : function (){
		///<signature>
			///<summary>To get PointerWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeBorderWidth' : function (){
		///<signature>
			///<summary>To get RangeBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeDistanceFromScale' : function (){
		///<signature>
			///<summary>To get RangeDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeEndValue' : function (){
		///<signature>
			///<summary>To get RangeEndValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangePosition' : function (){
		///<signature>
			///<summary>To get RangePosition</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeSize' : function (){
		///<signature>
			///<summary>To get RangeSize</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeStartValue' : function (){
		///<signature>
			///<summary>To get RangeStartValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleBarSize' : function (){
		///<signature>
			///<summary>To get ScaleBarSize</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleBorderWidth' : function (){
		///<signature>
			///<summary>To get ScaleBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleDirection' : function (){
		///<signature>
			///<summary>To get ScaleDirection</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleRadius' : function (){
		///<signature>
			///<summary>To get ScaleRadius</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getStartAngle' : function (){
		///<signature>
			///<summary>To get StartAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getSubGaugeLocation' : function (){
		///<signature>
			///<summary>To get SubGaugeLocation</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.GaugeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getSweepAngle' : function (){
		///<signature>
			///<summary>To get SweepAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickAngle' : function (){
		///<signature>
			///<summary>To get TickAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickDistanceFromScale' : function (){
		///<signature>
			///<summary>To get TickDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickHeight' : function (){
		///<signature>
			///<summary>To get TickHeight</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickPlacement' : function (){
		///<signature>
			///<summary>To get TickPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickStyle' : function (){
		///<signature>
			///<summary>To get TickStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickWidth' : function (){
		///<signature>
			///<summary>To get TickWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'includeFirstValue' : function (){
		///<signature>
			///<summary>To set includeFirstValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'redraw' : function (){
		///<signature>
			///<summary>Switching the redraw option for the gauge</summary>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setBackNeedleLength' : function (){
		///<signature>
			///<summary>To set BackNeedleLength</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setCustomLabelAngle' : function (){
		///<signature>
			///<summary>To set CustomLabelAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setCustomLabelValue' : function (){
		///<signature>
			///<summary>To set CustomLabelValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelAngle' : function (){
		///<signature>
			///<summary>To set LabelAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.angle{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelDistanceFromScale' : function (){
		///<signature>
			///<summary>To set LabelDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelPlacement' : function (){
		///<signature>
			///<summary>To set LabelPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelStyle' : function (){
		///<signature>
			///<summary>To set LabelStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMajorIntervalValue' : function (){
		///<signature>
			///<summary>To set MajorIntervalValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMarkerDistanceFromScale' : function (){
		///<signature>
			///<summary>To set MarkerDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMarkerStyle' : function (){
		///<signature>
			///<summary>To set MarkerStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMaximumValue' : function (){
		///<signature>
			///<summary>To set MaximumValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMinimumValue' : function (){
		///<signature>
			///<summary>To set MinimumValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMinorIntervalValue' : function (){
		///<signature>
			///<summary>To set MinorIntervalValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setNeedleStyle' : function (){
		///<signature>
			///<summary>To set NeedleStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerCapBorderWidth' : function (){
		///<signature>
			///<summary>To set PointerCapBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerCapRadius' : function (){
		///<signature>
			///<summary>To set PointerCapRadius</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerLength' : function (){
		///<signature>
			///<summary>To set PointerLength</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerNeedleType' : function (){
		///<signature>
			///<summary>To set PointerNeedleType</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerPlacement' : function (){
		///<signature>
			///<summary>To set PointerPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerValue' : function (){
		///<signature>
			///<summary>To set PointerValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerWidth' : function (){
		///<signature>
			///<summary>To set PointerWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeBorderWidth' : function (){
		///<signature>
			///<summary>To set RangeBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeDistanceFromScale' : function (){
		///<signature>
			///<summary>To set RangeDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeEndValue' : function (){
		///<signature>
			///<summary>To set RangeEndValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangePosition' : function (){
		///<signature>
			///<summary>To set RangePosition</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeSize' : function (){
		///<signature>
			///<summary>To set RangeSize</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeStartValue' : function (){
		///<signature>
			///<summary>To set RangeStartValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleBarSize' : function (){
		///<signature>
			///<summary>To set ScaleBarSize</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleBorderWidth' : function (){
		///<signature>
			///<summary>To set ScaleBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleDirection' : function (){
		///<signature>
			///<summary>To set ScaleDirection</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleRadius' : function (){
		///<signature>
			///<summary>To set ScaleRadius</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setStartAngle' : function (){
		///<signature>
			///<summary>To set StartAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setSubGaugeLocation' : function (){
		///<signature>
			///<summary>To set SubGaugeLocation</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.GaugeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setSweepAngle' : function (){
		///<signature>
			///<summary>To set SweepAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickAngle' : function (){
		///<signature>
			///<summary>To set TickAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickDistanceFromScale' : function (){
		///<signature>
			///<summary>To set TickDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickHeight' : function (){
		///<signature>
			///<summary>To set TickHeight</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickPlacement' : function (){
		///<signature>
			///<summary>To set TickPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickStyle' : function (){
		///<signature>
			///<summary>To set TickStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickWidth' : function (){
		///<signature>
			///<summary>To set TickWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.tickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.ColorPicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the color picker control</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the color picker control</summary>
		///</signature>
	},
	'getColor' : function(){
		///<signature>
			///<summary>Gets the selected color in RGB format</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Gets the selected color value as string</summary>
		///</signature>
	},
	'hexCodeToRGB' : function(){
		///<signature>
			///<summary>To Convert color value from hexCode to RGB</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the ColorPicker popup, if in opened state.</summary>
		///</signature>
	},
	'HSVToRGB' : function(){
		///<signature>
			///<summary>Convert color value from HSV to RGB</summary>
		///</signature>
	},
	'RGBToHEX' : function(){
		///<signature>
			///<summary>Convert color value from RGB to HEX</summary>
		///</signature>
	},
	'RGBToHSV' : function(){
		///<signature>
			///<summary>Convert color value from RGB to HSV</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Open the ColorPicker popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.DatePicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the DatePicker control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the DatePicker control, if it is in disabled state.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current date value in the DatePicker control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Close the DatePicker popup, if it is in opened state.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Opens the DatePicker popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.DateTimePicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the DateTimePicker control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the DateTimePicker control.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current datetime value in the DateTimePicker.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides or closes the DateTimePicker popup.</summary>
		///</signature>
	},
	'setCurrentDateTime' : function(){
		///<signature>
			///<summary>Updates the current system date value and time value to the DateTimePicker.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Shows or opens the DateTimePicker popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Diagram.prototype, {
	'add' : function (node){
		///<signature>
			///<summary>Add nodes and connectors to diagram at runtime</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addLabel' : function (nodeName, newLabel){
		///<signature>
			///<summary>Add a label to a node at runtime</summary>
			///<param name='nodeName' type='string' optional='false' ></param>
			///<param name='newLabel' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addPhase' : function (name, options){
		///<signature>
			///<summary>Add a phase to a swimlane at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addPorts' : function (name, ports){
		///<signature>
			///<summary>Add a collection of ports to the node specified by name</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='ports' type='array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addSelection' : function (node, clearSelection){
		///<signature>
			///<summary>Add the specified node to selection list</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<param name='[clearSelection]' type='boolean' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'align' : function (direction){
		///<signature>
			///<summary>Align the selected objects based on the reference object and direction</summary>
			///<param name='direction' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringIntoView' : function (rect){
		///<signature>
			///<summary>Bring the specified portion of the diagram content to the diagram viewport</summary>
			///<param name='rect' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringToCenter' : function (rect){
		///<signature>
			///<summary>Bring the specified portion of the diagram content to the center of the diagram viewport</summary>
			///<param name='rect' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringToFront' : function(){
		///<signature>
			///<summary>Visually move the selected object over all other intersected objects</summary>
		///</signature>
	},
	'clear' : function(){
		///<signature>
			///<summary>Remove all the elements from diagram</summary>
		///</signature>
	},
	'clearSelection' : function(){
		///<signature>
			///<summary>Remove the current selection in diagram</summary>
		///</signature>
	},
	'copy' : function(){
		///<signature>
			///<summary>Copy the selected object to internal clipboard and get the copied object</summary>
		///</signature>
	},
	'cut' : function(){
		///<signature>
			///<summary>Cut the selected object from diagram to diagram internal clipboard</summary>
		///</signature>
	},
	'exportDiagram' : function (options){
		///<signature>
			///<summary>Export the diagram as downloadable files or as data</summary>
			///<param name='[options]' type='<span class="param-type">Object</span>' optional='false' ></param>
			///<param name='fileName' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='format' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='mode' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='region' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='bounds' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='margin' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'findNode' : function (name){
		///<signature>
			///<summary>Read a node/connector object by its name</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'fitToPage' : function (mode, region, margin){
		///<signature>
			///<summary>Fit the diagram content into diagram viewport</summary>
			///<param name='[mode]' type='string' optional='false' ></param>
			///<param name='[region]' type='string' optional='false' ></param>
			///<param name='[margin]' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'group' : function(){
		///<signature>
			///<summary>Group the selected nodes and connectors</summary>
		///</signature>
	},
	'insertLabel' : function (name, label, index){
		///<signature>
			///<summary>Insert a label into a node's label collection at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='label' type='object' optional='false' ></param>
			///<param name='[index]' type='number' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'layout' : function(){
		///<signature>
			///<summary>Refresh the diagram with the specified layout</summary>
		///</signature>
	},
	'load' : function (data){
		///<signature>
			///<summary>Load the diagram</summary>
			///<param name='data' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'moveForward' : function(){
		///<signature>
			///<summary>Visually move the selected object over its closest intersected object</summary>
		///</signature>
	},
	'nudge' : function (direction, delta){
		///<signature>
			///<summary>Move the selected objects by either one pixel or by the pixels specified through argument</summary>
			///<param name='direction' type='string' optional='false' ></param>
			///<param name='[delta]' type='number' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'paste' : function (object, rename){
		///<signature>
			///<summary>Paste the selected object from internal clipboard to diagram</summary>
			///<param name='[object]' type='object' optional='false' ></param>
			///<param name='[rename]' type='boolean' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'print' : function(){
		///<signature>
			///<summary>Print the diagram as image</summary>
		///</signature>
	},
	'redo' : function(){
		///<signature>
			///<summary>Restore the last action that was reverted</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refresh the diagram at runtime</summary>
		///</signature>
	},
	'remove' : function (node){
		///<signature>
			///<summary>Remove either the given node/connector or the selected element from diagram</summary>
			///<param name='[node]' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeSelection' : function (node){
		///<signature>
			///<summary>Remove a particular object from selection list</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'sameHeight' : function(){
		///<signature>
			///<summary>Scale the selected objects to the height of the first selected object</summary>
		///</signature>
	},
	'sameSize' : function(){
		///<signature>
			///<summary>Scale the selected objects to the size of the first selected object</summary>
		///</signature>
	},
	'sameWidth' : function(){
		///<signature>
			///<summary>Scale the selected objects to the width of the first selected object</summary>
		///</signature>
	},
	'save' : function(){
		///<signature>
			///<summary>Returns the diagram as serialized JSON</summary>
		///</signature>
	},
	'scrollToNode' : function (node){
		///<signature>
			///<summary>Bring the node into view</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectAll' : function(){
		///<signature>
			///<summary>Select all nodes and connector in diagram</summary>
		///</signature>
	},
	'sendBackward' : function(){
		///<signature>
			///<summary>Visually move the selected object behind its closest intersected object</summary>
		///</signature>
	},
	'sendToBack' : function(){
		///<signature>
			///<summary>Visually move the selected object behind all other intersected objects</summary>
		///</signature>
	},
	'spaceAcross' : function(){
		///<signature>
			///<summary>Update the horizontal space between the selected objects as equal and within the selection boundary</summary>
		///</signature>
	},
	'spaceDown' : function(){
		///<signature>
			///<summary>Update the vertical space between the selected objects as equal and within the selection boundary</summary>
		///</signature>
	},
	'startLabelEdit' : function (node, label){
		///<signature>
			///<summary>Move the specified label to edit mode</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<param name='label' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'undo' : function(){
		///<signature>
			///<summary>Reverse the last action that was performed</summary>
		///</signature>
	},
	'ungroup' : function(){
		///<signature>
			///<summary>Ungroup the selected group</summary>
		///</signature>
	},
	'update' : function (options){
		///<signature>
			///<summary>Update diagram at runtime</summary>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateConnector' : function (name, options){
		///<signature>
			///<summary>Update Connectors at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateLabel' : function (nodeName, label, options){
		///<signature>
			///<summary>Update the given label at runtime</summary>
			///<param name='nodeName' type='string' optional='false' ></param>
			///<param name='label' type='object' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'updateNode' : function (name, options){
		///<signature>
			///<summary>Update nodes at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updatePort' : function (nodeName, port, options){
		///<signature>
			///<summary>Update a port with its modified properties at runtime</summary>
			///<param name='nodeName' type='string' optional='false' ></param>
			///<param name='port' type='object' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateSelectedObject' : function (name){
		///<signature>
			///<summary>Update the specified node as selected object</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateSelection' : function (showUserHandles){
		///<signature>
			///<summary>Update the selection at runtime</summary>
			///<param name='[showUserHandles]' type='boolean' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateUserHandles' : function (node){
		///<signature>
			///<summary>Update userhandles with respect to the given node</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateViewPort' : function(){
		///<signature>
			///<summary>Update the diagram viewport at runtime</summary>
		///</signature>
	},
	'upgrade' : function (data){
		///<signature>
			///<summary>Upgrade the diagram from old version</summary>
			///<param name='data' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'zoomTo' : function (zoom){
		///<signature>
			///<summary>Used to zoomIn/zoomOut diagram</summary>
			///<param name='zoom' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Dialog.prototype, {
	'close<span class="signature">' : function (){
		///<signature>
			///<summary>Closes the dialog widget dynamically.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapse<span class="signature">' : function (){
		///<signature>
			///<summary>Collapses the content area when it is expanded.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'destroy<span class="signature">' : function (){
		///<signature>
			///<summary>Destroys the Dialog widget. </summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expand<span class="signature">' : function (){
		///<signature>
			///<summary>Expands the content area when it is collapsed.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isOpened<span class="signature">' : function (){
		///<signature>
			///<summary>Checks whether the Dialog widget is opened or not. This methods returns Boolean value.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isOpen<span class="signature">' : function (){
		///<signature>
			///<summary>Checks whether the Dialog widget is opened or not. This methods returns Boolean value.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'maximize<span class="signature">' : function (){
		///<signature>
			///<summary>Maximizes the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'minimize<span class="signature">' : function (){
		///<signature>
			///<summary>Minimizes the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'open<span class="signature">' : function (){
		///<signature>
			///<summary>Opens the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pin<span class="signature">' : function (){
		///<signature>
			///<summary>Pins the dialog in its current position.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'restore<span class="signature">' : function (){
		///<signature>
			///<summary>Restores the dialog.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unpin<span class="signature">' : function (){
		///<signature>
			///<summary>Unpins the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTitle<span class="signature">' : function (title){
		///<signature>
			///<summary>Sets the title for the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setContent<span class="signature">' : function (content){
		///<signature>
			///<summary>Sets the content for the Dialog widget dynamically. </summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'focus<span class="signature">' : function (){
		///<signature>
			///<summary>Sets the focus on the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Draggable.prototype, {
	'_destroy' : function(){
		///<signature>
			///<summary>destroy in the dragable.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.DropDownList.prototype, {
	'addItem' : function (data){
		///<signature>
			///<summary>Adding a single item or an array of items into the DropDownList allows you to specify all the field attributes such as value, template, image URL, and HTML attributes for those items. </summary>
			///<param name='data' type='object|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'checkAll' : function(){
		///<signature>
			///<summary>This method is used to select all the items in the DropDownList.</summary>
		///</signature>
	},
	'clearText' : function(){
		///<signature>
			///<summary>Clears the text in the DropDownList textbox.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the DropDownList widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>This property is used to disable the DropDownList widget.</summary>
		///</signature>
	},
	'disableItemsByIndices' : function (index){
		///<signature>
			///<summary>This property disables the set of items in the DropDownList.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>This property enables the DropDownList control.</summary>
		///</signature>
	},
	'enableItemsByIndices' : function (index){
		///<signature>
			///<summary>Enables an Item or set of Items that are disabled in the DropDownList</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getItemDataByValue' : function (value){
		///<signature>
			///<summary>This method retrieves the items using given value.</summary>
			///<param name='value' type='string|number|object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getListData' : function(){
		///<signature>
			///<summary>This method is used to retrieve the items that are bound with the DropDownList.</summary>
		///</signature>
	},
	'getSelectedItem' : function(){
		///<signature>
			///<summary>This method is used to get the selected items in the DropDownList.</summary>
		///</signature>
	},
	'getSelectedValue' : function(){
		///<signature>
			///<summary>This method is used to retrieve the items value that are selected in the DropDownList.</summary>
		///</signature>
	},
	'hidePopup' : function(){
		///<signature>
			///<summary>This method hides the suggestion popup in the DropDownList.</summary>
		///</signature>
	},
	'selectItemsByIndices' : function (indices){
		///<signature>
			///<summary>This method is used to select the list of items in the DropDownList through the Index of the items.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItemByText' : function (text){
		///<signature>
			///<summary>This method is used to select an item in the DropDownList by using the given text value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItemByValue' : function (value){
		///<signature>
			///<summary>This method is used to select an item in the DropDownList by using the given value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showPopup' : function(){
		///<signature>
			///<summary>This method shows the DropDownList control with the suggestion popup.</summary>
		///</signature>
	},
	'unCheckAll' : function(){
		///<signature>
			///<summary>This method is used to unselect all the items in the DropDownList.</summary>
		///</signature>
	},
	'unselectItemsByIndices' : function (indices){
		///<signature>
			///<summary>This method is used to unselect the list of items in the DropDownList through Index of the items.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unselectItemByText' : function (text){
		///<signature>
			///<summary>This method is used to unselect an item in the DropDownList by using the given text value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unselectItemByValue' : function (value){
		///<signature>
			///<summary>This method is used to unselect an item in the DropDownList by using the given value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Droppable.prototype, {
	'_destroy' : function(){
		///<signature>
			///<summary>destroy in the Droppable.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.FileExplorer.prototype, {
	'adjustSize' : function(){
		///<signature>
			///<summary>Refresh the size of FileExplorer control.</summary>
		///</signature>
	},
	'disableMenuItem' : function (item){
		///<signature>
			///<summary>Disable the particular context menu item.</summary>
			///<param name=' item' type='<span class="param-type">string | element</span>' optional='false' >Id of the menu item/ Menu element to be disabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableToolbarItem' : function (item){
		///<signature>
			///<summary>Disable the particular toolbar item.</summary>
			///<param name=' item' type='<span class="param-type">string | element</span>' optional='false' >Id of the toolbar item/ Tool item element to be disabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableMenuItem' : function (item){
		///<signature>
			///<summary>Enable the particular context menu item.</summary>
			///<param name=' item' type='<span class="param-type">string | Element</span>' optional='false' >Id of the menu item/ Menu element to be Enabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableToolbarItem' : function (item){
		///<signature>
			///<summary>Enable the particular toolbar item</summary>
			///<param name=' item' type='<span class="param-type">string | Element</span>' optional='false' >Id of the tool item/ Tool item element to be Enabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refresh the content of the selected folder in FileExplorer control.</summary>
		///</signature>
	},
	'removeToolbarItem' : function (item){
		///<signature>
			///<summary>Remove the particular toolbar item.</summary>
			///<param name=' item' type='<span class="param-type">string | Element</span>' optional='false' >Id of the tool item/ tool item element to be removed </param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.GroupButton.prototype, {
	'deselectItem' : function(){
		///<signature>
			///<summary>Remove the selection state of the specified the button element from the GroupButton</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the GroupButton widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the GroupButton control</summary>
		///</signature>
	},
	'disableItem' : function(){
		///<signature>
			///<summary>Disable the specified button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the disabled ejGroupButton control.</summary>
		///</signature>
	},
	'enableItem' : function(){
		///<signature>
			///<summary>Enable the specified disabled button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'getIndex' : function(){
		///<signature>
			///<summary>Returns the index value for specified button element in the GroupButton control.</summary>
		///</signature>
	},
	'getSelectedItem' : function(){
		///<signature>
			///<summary>This method returns the list of active state button elements from the GroupButton control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the GroupButton control</summary>
		///</signature>
	},
	'hideItem' : function(){
		///<signature>
			///<summary>Hide the specified button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'isDisabled' : function(){
		///<signature>
			///<summary>Returns the disabled state of the specified element button element in GroupButton as Boolean.</summary>
		///</signature>
	},
	'isSelected' : function(){
		///<signature>
			///<summary>Returns the state of the specified button element as Boolean.</summary>
		///</signature>
	},
	'selectItem' : function(){
		///<signature>
			///<summary>Public method used to select the specified button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Shows the GroupButton control, if its hide.</summary>
		///</signature>
	},
	'showItem' : function(){
		///<signature>
			///<summary>Show the specified hidden button element from the ejGroupButton control. </summary>
		///</signature>
	}
});
intellisense.annotate(ej.Kanban.prototype, {
	'addCard' : function (primaryKey,card){
		///<signature>
			///<summary>Add a new card in kanban control.If parameters are not given default dialog will be open</summary>
			///<param name='primaryKey' type='<span class="param-type">string</span>' optional='true' ></param>
			///<param name='card' type='<span class="param-type">array</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'clearSearch' : function(){
		///<signature>
			///<summary>Method used for send a clear search request to kanban.</summary>
		///</signature>
	},
	'clearSelection' : function(){
		///<signature>
			///<summary>It is used to clear all the card selection.</summary>
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>Collapse all the swimlane rows in kanban.</summary>
		///</signature>
	},
	'columns' : function (column,key,action){
		///<signature>
			///<summary>Add or remove columns in kanban columns collections</summary>
			///<param name='column details' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<param name='key value' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<param name='action' type='<span class="param-type">string</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'cancelEdit' : function(){
		///<signature>
			///<summary>Send a cancel request of add/edit card in kanban</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the kanban widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'deleteCard' : function (Key){
		///<signature>
			///<summary>Delete a card in kanban control.</summary>
			///<param name='Key' type='<span class="param-type">string/number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'dataSource' : function (datasource){
		///<signature>
			///<summary>Refresh the kanban with new data source.</summary>
			///<param name='datasource' type='<span class="param-type">array</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'endEdit' : function(){
		///<signature>
			///<summary>Send a save request in kanban when any card is in edit/new add card state.</summary>
		///</signature>
	},
	'toggleColumn' : function (headerText or $div){
		///<signature>
			///<summary>toggleColumn based on the headerText in kanban.</summary>
			///<param name=' headerText ' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'toggleCard' : function ($div or id){
		///<signature>
			///<summary>Expand or collapse the card based on the state of target "div"</summary>
			///<param name=' key ' type='<span class="param-type">string/number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'toggleSwimlane' : function ($div or key){
		///<signature>
			///<summary>Expand or collapse the swimlane row based on the state of target "div"</summary>
			///<param name=' $div ' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expandAll' : function(){
		///<signature>
			///<summary>Expand all the swimlane rows in kanban.</summary>
		///</signature>
	},
	'getVisibleColumnNames' : function(){
		///<signature>
			///<summary>Used for get the names of all the visible column name collections in kanban.</summary>
		///</signature>
	},
	'getScrollObject' : function(){
		///<signature>
			///<summary>Get the scroller object of kanban.</summary>
		///</signature>
	},
	'getColumnByHeaderText' : function (headerText){
		///<signature>
			///<summary>Get the column details based on the given header text in kanban.</summary>
			///<param name=' headerText ' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'hideColumns' : function (headerText){
		///<signature>
			///<summary>Hide columns from the kanban based on the header text</summary>
			///<param name=' headerText ' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refreshTemplate' : function(){
		///<signature>
			///<summary>Refresh the template of the kanban</summary>
		///</signature>
	},
	'refresh' : function (templateRefresh){
		///<signature>
			///<summary>Refresh the kanban contents.The template refreshment is based on the argument passed along with this method</summary>
			///<param name=' templateRefresh ' type='<span class="param-type">boolean</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'searchCards' : function (searchString){
		///<signature>
			///<summary>Send a search request to kanban with specified string passed in it.</summary>
			///<param name='{% highlight html %} searchString{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setValidationToField' : function (name, rules){
		///<signature>
			///<summary>Method used for set validation to a field during editing.</summary>
			///<param name='name' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='rules' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'startEdit' : function ($div or key){
		///<signature>
			///<summary>Send an edit card request in kanban.Parameter will be HTML element or primary key</summary>
			///<param name=' $div ' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showColumns' : function (headerText){
		///<signature>
			///<summary>Show columns in the kanban based on the header text.</summary>
			///<param name=' headerText ' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateCard' : function (key,data){
		///<signature>
			///<summary>Update a card in kanban control based on key and JSON data given.</summary>
			///<param name=' key ' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name=' data ' type='<span class="param-type">array</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.LinearGauge.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the linear gauge all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'exportImage' : function (){
		///<signature>
			///<summary>To export Image</summary>
			///<param name='{% highlight html %} argument.fileName{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.fileType{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getBarDistanceFromScale' : function (){
		///<signature>
			///<summary>To get Bar Distance From Scale in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getBarPointerValue' : function (){
		///<signature>
			///<summary>To get Bar Pointer Value in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getBarWidth' : function (){
		///<signature>
			///<summary>To get Bar Width in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getCustomLabelAngle' : function (){
		///<signature>
			///<summary>To get CustomLabel Angle in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getCustomLabelValue' : function (){
		///<signature>
			///<summary>To get CustomLabel Value in string</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelAngle' : function (){
		///<signature>
			///<summary>To get Label Angle in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelPlacement' : function (){
		///<signature>
			///<summary>To get LabelPlacement in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelStyle' : function (){
		///<signature>
			///<summary>To get LabelStyle in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelXDistanceFromScale' : function (){
		///<signature>
			///<summary>To get Label XDistance From Scale in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getLabelYDistanceFromScale' : function (){
		///<signature>
			///<summary>To get PointerValue in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMajorIntervalValue' : function (){
		///<signature>
			///<summary>To get Major Interval Value in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMarkerStyle' : function (){
		///<signature>
			///<summary>To get MarkerStyle in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMaximumValue' : function (){
		///<signature>
			///<summary>To get Maximum Value in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMinimumValue' : function (){
		///<signature>
			///<summary>To get PointerValue in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getMinorIntervalValue' : function (){
		///<signature>
			///<summary>To get Minor Interval Value in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerDistanceFromScale' : function (){
		///<signature>
			///<summary>To get Pointer Distance From Scale in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerHeight' : function (){
		///<signature>
			///<summary>To get PointerHeight in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerPlacement' : function (){
		///<signature>
			///<summary>To get Pointer Placement in String</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerValue' : function (){
		///<signature>
			///<summary>To get PointerValue in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getPointerWidth' : function (){
		///<signature>
			///<summary>To get PointerWidth in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeBorderWidth' : function (){
		///<signature>
			///<summary>To get Range Border Width in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeDistanceFromScale' : function (){
		///<signature>
			///<summary>To get Range Distance From Scale in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeEndValue' : function (){
		///<signature>
			///<summary>To get Range End Value in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeEndWidth' : function (){
		///<signature>
			///<summary>To get Range End Width in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangePosition' : function (){
		///<signature>
			///<summary>To get Range Position in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeStartValue' : function (){
		///<signature>
			///<summary>To get Range Start Value in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getRangeStartWidth' : function (){
		///<signature>
			///<summary>To get Range Start Width in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleBarLength' : function (){
		///<signature>
			///<summary>To get ScaleBarLength in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleBarSize' : function (){
		///<signature>
			///<summary>To get Scale Bar Size in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleBorderWidth' : function (){
		///<signature>
			///<summary>To get Scale Border Width in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleDirection' : function (){
		///<signature>
			///<summary>To get Scale Direction in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleLocation' : function (){
		///<signature>
			///<summary>To get Scale Location in object</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getScaleStyle' : function (){
		///<signature>
			///<summary>To get Scale Style in string</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickAngle' : function (){
		///<signature>
			///<summary>To get Tick Angle in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickHeight' : function (){
		///<signature>
			///<summary>To get Tick Height in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickPlacement' : function (){
		///<signature>
			///<summary>To get getTickPlacement in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickStyle' : function (){
		///<signature>
			///<summary>To get Tick Style in string</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickWidth' : function (){
		///<signature>
			///<summary>To get Tick Width in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickXDistanceFromScale' : function (){
		///<signature>
			///<summary>To get get Tick XDistance From Scale in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getTickYDistanceFromScale' : function (){
		///<signature>
			///<summary>To get Tick YDistance From Scale in number</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'scales' : function(){
		///<signature>
			///<summary>Specifies the scales.</summary>
		///</signature>
	},
	'setBarDistanceFromScale' : function (){
		///<signature>
			///<summary>To set setBarDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setBarPointerValue' : function (){
		///<signature>
			///<summary>To set setBarPointerValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setBarWidth' : function (){
		///<signature>
			///<summary>To set setBarWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setCustomLabelAngle' : function (){
		///<signature>
			///<summary>To set setCustomLabelAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setCustomLabelValue' : function (){
		///<signature>
			///<summary>To set setCustomLabelValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.customLabelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelAngle' : function (){
		///<signature>
			///<summary>To set setLabelAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.angle{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelPlacement' : function (){
		///<signature>
			///<summary>To set setLabelPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelStyle' : function (){
		///<signature>
			///<summary>To set setLabelStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelXDistanceFromScale' : function (){
		///<signature>
			///<summary>To set setLabelXDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setLabelYDistanceFromScale' : function (){
		///<signature>
			///<summary>To set setLabelYDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.labelIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMajorIntervalValue' : function (){
		///<signature>
			///<summary>To set setMajorIntervalValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMarkerStyle' : function (){
		///<signature>
			///<summary>To set setMarkerStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMaximumValue' : function (){
		///<signature>
			///<summary>To set setMaximumValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMinimumValue' : function (){
		///<signature>
			///<summary>To set setMinimumValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setMinorIntervalValue' : function (){
		///<signature>
			///<summary>To set setMinorIntervalValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerDistanceFromScale' : function (){
		///<signature>
			///<summary>To set setPointerDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerHeight' : function (){
		///<signature>
			///<summary>To set PointerHeight</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.height{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerPlacement' : function (){
		///<signature>
			///<summary>To set setPointerPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerValue' : function (){
		///<signature>
			///<summary>To set PointerValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setPointerWidth' : function (){
		///<signature>
			///<summary>To set PointerWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.pointerIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.width{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeBorderWidth' : function (){
		///<signature>
			///<summary>To set setRangeBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeDistanceFromScale' : function (){
		///<signature>
			///<summary>To set setRangeDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeEndValue' : function (){
		///<signature>
			///<summary>To set setRangeEndValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeEndWidth' : function (){
		///<signature>
			///<summary>To set setRangeEndWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangePosition' : function (){
		///<signature>
			///<summary>To set setRangePosition</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeStartValue' : function (){
		///<signature>
			///<summary>To set setRangeStartValue</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setRangeStartWidth' : function (){
		///<signature>
			///<summary>To set setRangeStartWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.rangeIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleBarLength' : function (){
		///<signature>
			///<summary>To set setScaleBarLength</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleBarSize' : function (){
		///<signature>
			///<summary>To set setScaleBarSize</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleBorderWidth' : function (){
		///<signature>
			///<summary>To set setScaleBorderWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleDirection' : function (){
		///<signature>
			///<summary>To set setScaleDirection</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleLocation' : function (){
		///<signature>
			///<summary>To set setScaleLocation</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setScaleStyle' : function (){
		///<signature>
			///<summary>To set setScaleStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickAngle' : function (){
		///<signature>
			///<summary>To set setTickAngle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.angle{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickHeight' : function (){
		///<signature>
			///<summary>To set setTickHeight</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickPlacement' : function (){
		///<signature>
			///<summary>To set setTickPlacement</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickStyle' : function (){
		///<signature>
			///<summary>To set setTickStyle</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickWidth' : function (){
		///<signature>
			///<summary>To set setTickWidth</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickXDistanceFromScale' : function (){
		///<signature>
			///<summary>To set setTickXDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTickYDistanceFromScale' : function (){
		///<signature>
			///<summary>To set setTickYDistanceFromScale</summary>
			///<param name='{% highlight html %} argument.scaleIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} argument.TickIndex{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %} arguemnt.value{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.ListView.prototype, {
	'addItem' : function (item, index){
		///<signature>
			///<summary>To add item in the given index.</summary>
			///<param name=' item' type='<span class="param-type">string</span>' optional='false' >Specifies the item to be added in ListView</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index where item to be added</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'checkAllItem' : function(){
		///<signature>
			///<summary>To check all the items.</summary>
		///</signature>
	},
	'checkItem' : function (index){
		///<signature>
			///<summary>To check item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index of the item to be checked</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'clear' : function(){
		///<signature>
			///<summary>To clear all the list item in the control before updating with new datasource.</summary>
		///</signature>
	},
	'deActive' : function (index){
		///<signature>
			///<summary>To make the item in the given index to be default state.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index to make the item to be in default state.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableItem' : function (index){
		///<signature>
			///<summary>To disable item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to be disabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableItem' : function (index){
		///<signature>
			///<summary>To enable item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getActiveItem' : function(){
		///<signature>
			///<summary>To get the active item.</summary>
		///</signature>
	},
	'getActiveItemText' : function(){
		///<signature>
			///<summary>To get the text of the active item.</summary>
		///</signature>
	},
	'getCheckedItems' : function(){
		///<signature>
			///<summary>To get all the checked items.</summary>
		///</signature>
	},
	'getCheckedItemsText' : function(){
		///<signature>
			///<summary>To get the text of all the checked items.</summary>
		///</signature>
	},
	'getItemsCount' : function(){
		///<signature>
			///<summary>To get the total item count.</summary>
		///</signature>
	},
	'getItemText' : function (index){
		///<signature>
			///<summary>To get the text of the item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">string|number</span>' optional='false' >Specifies the index value to get the text value.</param>
			///<returns type ='' />
		///</signature>
	},
	'hasChild' : function (index){
		///<signature>
			///<summary>To check whether the item in the given index has child item.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to check the item has child or not.</param>
			///<returns type ='' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the list.</summary>
		///</signature>
	},
	'hideItem' : function (index){
		///<signature>
			///<summary>To hide item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to hide the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isChecked' : function(){
		///<signature>
			///<summary>To check whether item in the given index is checked.</summary>
		///</signature>
	},
	'loadAjaxContent' : function (item){
		///<signature>
			///<summary>To load the AJAX content while selecting the item.</summary>
			///<param name=' item' type='<span class="param-type">string</span>' optional='false' >Specifies the item to load the AJAX content.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeCheckMark' : function (index){
		///<signature>
			///<summary>To remove the check mark either for specific item in the given index or for all items.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to remove the checkbox.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>To remove item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to remove the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItem' : function (index){
		///<signature>
			///<summary>To select item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to select the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setActive' : function (index){
		///<signature>
			///<summary>To make the item in the given index to be active state.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to make the item in active state.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the list.</summary>
		///</signature>
	},
	'showItem' : function (index){
		///<signature>
			///<summary>To show item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to show the hided item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unCheckAllItem' : function(){
		///<signature>
			///<summary>To uncheck all the items.</summary>
		///</signature>
	},
	'unCheckItem' : function (index){
		///<signature>
			///<summary>To uncheck item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to uncheck the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Map.prototype, {
	'navigateTo' : function (latitude, longitude, level){
		///<signature>
			///<summary>Method for navigating to specific shape based on latitude, longitude and zoom level.</summary>
			///<param name='{% highlight html %}latitude{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %}longitude{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %}level{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pan' : function (direction){
		///<signature>
			///<summary>Method to perform map panning</summary>
			///<param name='{% highlight html %}direction{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Method to reload the map.</summary>
		///</signature>
	},
	'refreshLayers' : function(){
		///<signature>
			///<summary>Method to reload the shapeLayers with updated values</summary>
		///</signature>
	},
	'refreshNavigationControl' : function (navigation){
		///<signature>
			///<summary>Method to reload the navigation control with updated values.</summary>
			///<param name='{% highlight html %}navigation{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'zoom' : function (level, isAnimate){
		///<signature>
			///<summary>Method to perform map zooming.</summary>
			///<param name='{% highlight html %}level{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %}isAnimate{% endhighlight %}' type='<span class="param-type">boolean</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.MaskEdit.prototype, {
	'clear' : function(){
		///<signature>
			///<summary>To clear the text in mask edit textbox control.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the mask edit textbox control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the mask edit textbox control.</summary>
		///</signature>
	},
	'get_StrippedValue' : function(){
		///<signature>
			///<summary>To obtained the pure value of the text value, removes all the symbols in mask edit textbox control.</summary>
		///</signature>
	},
	'get_UnstrippedValue' : function(){
		///<signature>
			///<summary>To obtained the textbox value as such that, Just replace all '_' to ' '(space) in mask edit textbox control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Menu.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the Menu control.</summary>
		///</signature>
	},
	'disableItem' : function (itemtext){
		///<signature>
			///<summary>Specifies the Menu Item to be disabled by using the Menu Item Text.</summary>
			///<param name=' itemtext' type='<span class="param-type">string</span>' optional='false' >Specifies the Menu Item Text to be disabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableItembyID' : function (itemid){
		///<signature>
			///<summary>Specifies the Menu Item to be disabled by using the Menu Item Id.</summary>
			///<param name=' itemid' type='<span class="param-type">string|number</span>' optional='false' >Specifies the Menu Item id to be disabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the Menu control.</summary>
		///</signature>
	},
	'enableItem' : function (itemtext){
		///<signature>
			///<summary>Specifies the Menu Item to be enabled by using the Menu Item Text.</summary>
			///<param name=' itemtext' type='<span class="param-type">string</span>' optional='false' >Specifies the Menu Item Text to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableItembyID' : function (itemid){
		///<signature>
			///<summary>Specifies the Menu Item to be enabled by using the Menu Item Id.</summary>
			///<param name=' itemid' type='<span class="param-type">string|number</span>' optional='false' >Specifies the Menu Item id to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the Context Menu control.</summary>
		///</signature>
	},
	'hideItems' : function(){
		///<signature>
			///<summary>Hides the specific items in Menu control.</summary>
		///</signature>
	},
	'insert' : function (item, target){
		///<signature>
			///<summary>Insert the menu item as child of target node.</summary>
			///<param name=' item' type='<span class="param-type">Object</span>' optional='false' >Information about Menu item.</param>
			///<param name=' target' type='<span class="param-type">string|Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertAfter' : function (item, target){
		///<signature>
			///<summary>Insert the menu item after the target node.</summary>
			///<param name=' item' type='<span class="param-type">Object</span>' optional='false' >Information about Menu item.</param>
			///<param name=' target' type='<span class="param-type">string|Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertBefore' : function (item, target){
		///<signature>
			///<summary>Insert the menu item before the target node.</summary>
			///<param name=' item' type='<span class="param-type">Object</span>' optional='false' >Information about Menu item.</param>
			///<param name=' target' type='<span class="param-type">string|Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'remove' : function (target){
		///<signature>
			///<summary>Remove Menu item.</summary>
			///<param name=' target' type='<span class="param-type">object|array</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function (locationX, locationY, targetElement, event){
		///<signature>
			///<summary>To show the Menu control.</summary>
			///<param name=' locationX' type='<span class="param-type">number</span>' optional='false' >x co-ordinate position of context menu.</param>
			///<param name=' locationY' type='<span class="param-type">number</span>' optional='false' >y co-ordinate position of context menu.</param>
			///<param name=' targetElement' type='<span class="param-type">object</span>' optional='false' >target element</param>
			///<param name=' event' type='<span class="param-type">object</span>' optional='false' >name of the event</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showItems' : function(){
		///<signature>
			///<summary>Show the specific items in Menu control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.NavigationDrawer.prototype, {
	'close' : function(){
		///<signature>
			///<summary>To close the navigation drawer control</summary>
		///</signature>
	},
	'open' : function(){
		///<signature>
			///<summary>To open the navigation drawer control</summary>
		///</signature>
	},
	'toggle' : function(){
		///<signature>
			///<summary>To Toggle the navigation drawer control</summary>
		///</signature>
	}
});
intellisense.annotate(ej..prototype, {
	'getJSONData' : function(){
		///<signature>
			///<summary>This function gets the datasource, action and grid layout for rendering the PivotGrid.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.OlapChart.prototype, {
	'doAjaxPost' : function (){
		///<signature>
			///<summary>Perform an asynchronous HTTP (AJAX) request.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'doPostBack' : function (){
		///<signature>
			///<summary>Perform an asynchronous HTTP (FullPost) submit.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'exportOlapChart' : function (){
		///<signature>
			///<summary>Exports the OlapChart to an appropriate format based on the parameter passed.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'renderChartFromJSON' : function (){
		///<signature>
			///<summary>This function receives the JSON formatted datasource to render the OlapChart control.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'renderControlSuccess' : function (){
		///<signature>
			///<summary>This function receives the update from service-end, which would be utilized for rendering the widget.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.PdfViewer.prototype, {
	'goToPage' : function(){
		///<signature>
			///<summary>Navigates to the specific page in the PDF document. If the page is not available for the given pageNumber, PDF viewer retains the existing page in view. </summary>
		///</signature>
	},
	'goToLastPage' : function(){
		///<signature>
			///<summary>Navigates to the last page of the PDF document.</summary>
		///</signature>
	},
	'goToFirstPage' : function(){
		///<signature>
			///<summary>Navigates to the first page of PDF document.</summary>
		///</signature>
	},
	'goToNextPage' : function(){
		///<signature>
			///<summary>Navigates to the next page of the PDF document.</summary>
		///</signature>
	},
	'goToPreviousPage' : function(){
		///<signature>
			///<summary>Navigates to the previous page of the PDF document.</summary>
		///</signature>
	},
	'showPageNavigationTools' : function(){
		///<signature>
			///<summary>Shows/hides the page navigation tools in the toolbar</summary>
		///</signature>
	},
	'showMagnificationTools' : function(){
		///<signature>
			///<summary>Shows/hides the zoom tools in the tool bar.</summary>
		///</signature>
	},
	'showToolbar' : function(){
		///<signature>
			///<summary>Shows/hides the tool bar in the PDF viewer.</summary>
		///</signature>
	},
	'load' : function(){
		///<signature>
			///<summary>Loads the document with the filename and displays it in PDF viewer.</summary>
		///</signature>
	},
	'fitToPage' : function(){
		///<signature>
			///<summary>Scales the page to fit the page in the container in the control.</summary>
		///</signature>
	},
	'fitToWidth' : function(){
		///<signature>
			///<summary>Scales the page to fit the page width to the width of the container in the control.</summary>
		///</signature>
	},
	'zoomIn' : function(){
		///<signature>
			///<summary>Magnifies the page to the next value in the zoom drop down list.</summary>
		///</signature>
	},
	'zoomOut' : function(){
		///<signature>
			///<summary>Shrinks the page to the previous value in the magnification in the drop down list.</summary>
		///</signature>
	},
	'zoomTo' : function(){
		///<signature>
			///<summary>Scales the page to the specified percentage ranging from 50 to 400. If the given zoomValue is less than 50 or greater than 400; the PDF viewer scales the page to 50 and 400 respectively.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.ProgressBar.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the progressbar widget</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the progressbar control</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the progressbar control</summary>
		///</signature>
	},
	'getPercentage' : function(){
		///<signature>
			///<summary>Returns the current progress value in percent.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current progress value</summary>
		///</signature>
	}
});
intellisense.annotate(ej.RadialSlider.prototype, {
	'show' : function(){
		///<signature>
			///<summary>To show the radialslider</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the radialslider</summary>
		///</signature>
	}
});
intellisense.annotate(ej.RadioButton.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>To disable the RadioButton</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the RadioButton</summary>
		///</signature>
	}
});
intellisense.annotate(ej.RangeNavigator.prototype, {
	'_destroy ' : function(){
		///<signature>
			///<summary>destroy the range navigator widget</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Rating.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the Rating widget all events bound will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>To get the current value of rating control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the rating control.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>User can refresh the rating control to identify changes.</summary>
		///</signature>
	},
	'reset' : function(){
		///<signature>
			///<summary>To reset the rating value.</summary>
		///</signature>
	},
	'setValue' : function (value){
		///<signature>
			///<summary>To set the rating value.</summary>
			///<param name=' value' type='<span class="param-type">string|number</span>' optional='false' >Specifies the rating value.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the rating control</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Resizable.prototype, {
	'_destroy' : function(){
		///<signature>
			///<summary>destroy in the Resizable.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Ribbon.prototype, {
	'addContextualTabs' : function (contextualTabSet, index){
		///<signature>
			///<summary>Adds contextual tab or contextual tab set dynamically in the ribbon control with contextual tabs object and index position. When index is null, ribbon contextual tab or contextual tab set is added at the last index.</summary>
			///<param name='contextualTabSet' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='index' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addTab' : function (tabText, ribbonGroups, index){
		///<signature>
			///<summary>Adds tab dynamically in the ribbon control with given name, tab group array and index position. When index is null, ribbon tab is added at the last index.</summary>
			///<param name='tabText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='ribbonGroups' type='<span class="param-type">array</span>' optional='false' ></param>
			///<param name='index' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addTabGroup' : function (tabIndex, tabGroup, groupIndex){
		///<signature>
			///<summary>Adds tab group dynamically in the ribbon control with given tab index, tab group object and group index position. When group index is null, ribbon group is added at the last index.</summary>
			///<param name='tabIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='tabGroup' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='groupIndex' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addTabGroupContent' : function (tabIndex, groupIndex, subGroupIndex, content, contentIndex){
		///<signature>
			///<summary>Adds group content dynamically in the ribbon control with given tab index, group index, sub group index, content and content index position. When content index is null, content is added at the last index.</summary>
			///<param name='tabIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='groupIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='subGroupIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='content' type='<span class="param-type">object</span>' optional='true' ></param>
			///<param name='contentIndex' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'hideBackstage' : function(){
		///<signature>
			///<summary>Hides the ribbon backstage page.</summary>
		///</signature>
	},
	'collapse' : function(){
		///<signature>
			///<summary>Collapses the ribbon tab content.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the ribbon widget. All the events bound using this._on are unbound automatically and the ribbon control is moved to pre-init state.</summary>
		///</signature>
	},
	'expand' : function(){
		///<signature>
			///<summary>Expands the ribbon tab content.</summary>
		///</signature>
	},
	'getTabText' : function (index){
		///<signature>
			///<summary>Gets text of the given index tab in the ribbon control.</summary>
			///<param name='index' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'hideTab' : function (text){
		///<signature>
			///<summary>Hides the given text tab in the ribbon control.</summary>
			///<param name='text' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isEnable' : function (text){
		///<signature>
			///<summary>Checks whether the given text tab in the ribbon control is enabled or not.</summary>
			///<param name='text' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'isVisible' : function (text){
		///<signature>
			///<summary>Checks whether the given text tab in the ribbon control is visible or not.</summary>
			///<param name='text' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'removeTab' : function (index){
		///<signature>
			///<summary>Removes the given index tab item from the ribbon control.</summary>
			///<param name='index' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTabText' : function (tabText, newText){
		///<signature>
			///<summary>Sets new text to the given text tab in the ribbon control.</summary>
			///<param name='tabText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='newText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showBackstage' : function(){
		///<signature>
			///<summary>Displays the ribbon backstage page.</summary>
		///</signature>
	},
	'showTab' : function (text){
		///<signature>
			///<summary>Displays the given text tab in the ribbon control.</summary>
			///<param name='text' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Rotator.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the Rotator control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the Rotator control.</summary>
		///</signature>
	},
	'getIndex' : function(){
		///<signature>
			///<summary>This method is used to get the current slide index.</summary>
		///</signature>
	},
	'gotoIndex' : function (index){
		///<signature>
			///<summary>This method is used to move a slide to the specified index.</summary>
			///<param name='{% highlight html %} index{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >index of an slide</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pause' : function(){
		///<signature>
			///<summary>This method is used to pause autoplay.</summary>
		///</signature>
	},
	'play' : function(){
		///<signature>
			///<summary>This method is used to move slides continuously (or start autoplay) in the specified autoplay direction.</summary>
		///</signature>
	},
	'slideNext' : function(){
		///<signature>
			///<summary>This method is used to move to the next slide from the current slide. If the current slide is the last slide, then the first slide will be treated as the next slide.</summary>
		///</signature>
	},
	'slidePrevious' : function(){
		///<signature>
			///<summary>This method is used to move to the previous slide from the current slide. If the current slide is the first slide, then the last slide will be treated as the previous slide.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.RTE.prototype, {
	'createRange' : function(){
		///<signature>
			///<summary>Returns the range object.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the RTE control.</summary>
		///</signature>
	},
	'disableToolbarItem' : function(){
		///<signature>
			///<summary>Disables the corresponding tool in the RTE ToolBar.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the RTE control.</summary>
		///</signature>
	},
	'enableToolbarItem' : function(){
		///<signature>
			///<summary>Enables the corresponding tool in the toolbar when the tool is disabled.</summary>
		///</signature>
	},
	'executeCommand' : function(){
		///<signature>
			///<summary>Performs the action value based on the given command. </summary>
		///</signature>
	},
	'focus' : function(){
		///<signature>
			///<summary>Focuses the RTE control.</summary>
		///</signature>
	},
	'getCommandStatus' : function(){
		///<signature>
			///<summary>Gets the command status of the selected text based on the given comment in the RTE control.</summary>
		///</signature>
	},
	'getDocument' : function(){
		///<signature>
			///<summary>Gets the HTML string from the RTE control.</summary>
		///</signature>
	},
	'getHtml' : function(){
		///<signature>
			///<summary>Gets the HTML string from the RTE control.</summary>
		///</signature>
	},
	'getSelectedHtml' : function(){
		///<signature>
			///<summary>Gets the selected HTML string from the RTE control.</summary>
		///</signature>
	},
	'getText' : function(){
		///<signature>
			///<summary>Gets the content as string from the RTE control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the RTE control.</summary>
		///</signature>
	},
	'insertMenuOption' : function (){
		///<signature>
			///<summary>Inserts new item to the target contextmenu node. </summary>
			///<param name=' option ' type='<span class="param-type">object</span>' optional='false' > Object data’s for inserting the new item to the context menu. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th>Description</th> </tr></param>
			///<param name=' newItem ' type='<span class="param-type">string</span>' optional='false' > Target menu item text. </param>
			///<param name=' targetItem ' type='<span class="param-type">string</span>' optional='false' > Target menu item text </param>
			///<param name=' insertType ' type='<span class="param-type">string </span>' optional='false' > Menu item insertion type - insert||insertAfter||insertBefore”. </param>
			///<param name=' menuType ' type='<span class="param-type">object</span>' optional='false' > menu visibility types. - text:boolean, image: boolean, hyperlink: boolean, table: boolean </param>
			///<param name=' spriteCssClass ' type='<span class="param-type">string</span>' optional='false' > Sprite CSS class name for menu item icon. </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pasteContent' : function(){
		///<signature>
			///<summary>This method helps to insert/paste the content at the current cursor (caret) position or the selected content to be replaced with our text by passing the value as parameter to the pasteContent method in the Editor.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refreshes the RTE control.</summary>
		///</signature>
	},
	'removeMenuOption ' : function (){
		///<signature>
			///<summary>Removes the target menu item from the RTE contextmenu.</summary>
			///<param name=' option ' type='<span class="param-type">string</span>' optional='false' > Target Node text. </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeToolbarItem' : function(){
		///<signature>
			///<summary>Removes the given tool from the RTE Toolbar.</summary>
		///</signature>
	},
	'selectAll' : function(){
		///<signature>
			///<summary>Selects all the contents within the RTE.</summary>
		///</signature>
	},
	'selectRange' : function(){
		///<signature>
			///<summary>Selects the contents in the given range.</summary>
		///</signature>
	},
	'setColorPickerType' : function(){
		///<signature>
			///<summary>Sets the color picker model type rendered initially in the RTE control.</summary>
		///</signature>
	},
	'setHtml' : function(){
		///<signature>
			///<summary>Sets the HTML string from the RTE control.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Displays the RTE control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Schedule.prototype, {
	'deleteAppointment' : function (data){
		///<signature>
			///<summary>This method is used to delete the appointment based on the guid value or the appointment data passed to it.</summary>
			///<param name='data' type='string|object' optional='false' >GUID value of an appointment element or an appointment object</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the Schedule widget. All the events bound using this._on are unbound automatically and the control is moved to pre-init state.</summary>
		///</signature>
	},
	'exportSchedule' : function (action, serverEvent, id){
		///<signature>
			///<summary>Exports the appointments from the Schedule control.</summary>
			///<param name='action' type='string' optional='false' >It refers the controller action name to redirect. (For MVC)</param>
			///<param name='serverEvent' type='string' optional='false' >It refers the server event name.(For ASP)</param>
			///<param name='id' type='string|number' optional='false' >Pass the id of an appointment, in case if a single appointment needs to be exported. Otherwise, it takes the null value.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'filterAppointments' : function (filterConditions){
		///<signature>
			///<summary>Searches and filters the appointments from appointment list of Schedule control.</summary>
			///<param name='filterConditions' type='array' optional='false' >Holds array of one or more conditional objects for filtering the appointments based on it.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getAppointments' : function(){
		///<signature>
			///<summary>Gets the complete appointment list of Schedule control.</summary>
		///</signature>
	},
	'print' : function (data){
		///<signature>
			///<summary>Prints the entire Scheduler or a single appointment based on the appointment data passed as an argument to it. Simply calling the print() method, without passing any argument will print the entire Scheduler. </summary>
			///<param name='data' type='object' optional='false' >Either accepts no arguments at all or else accepts an appointment object.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refreshScroller' : function(){
		///<signature>
			///<summary>Refreshes the Scroller of Scheduler while using it within some other controls or application.</summary>
		///</signature>
	},
	'saveAppointment' : function (appointmentObject){
		///<signature>
			///<summary>It is used to save the appointment. The appointment object is based on the argument passed to this method.</summary>
			///<param name='appointmentObject' type='object' optional='false' >appointment object which includes appointment details</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getSlotByElement' : function (element){
		///<signature>
			///<summary>Retrieves the time slot information (start/end time and resource details) of the given element. The parameter is optional - as when no element is passed to it, the currently selected cell information will be retrieved. When multiple cells are selected in the Scheduler, it is not necessary to provide the parameter.</summary>
			///<param name='element' type='object' optional='false' >TD element object rendered as Scheduler work cell</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'searchAppointments' : function (searchString, field, operator, ignoreCase){
		///<signature>
			///<summary>Searches the appointments from the appointment list of Schedule control based on the provided search string in its argument list.</summary>
			///<param name='searchString' type='object|string' optional='false' >Defines the search word or the filter condition, based on which the appointments are filtered from the list.</param>
			///<param name='field' type='string' optional='false' >Defines the field name on which the search is to be made.</param>
			///<param name='operator' type='enum|string' optional='false' >Defines the filterOperator value for the search operation.</param>
			///<param name='ignoreCase' type='boolean' optional='false' >Defines the ignoreCase value for performing the search operation.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refreshes the entire Schedule control.</summary>
		///</signature>
	},
	'refreshAppointment' : function(){
		///<signature>
			///<summary>Refreshes only the appointment elements within the Schedule control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Scroller.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Scroller control, unbind the all ej control related events automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>User disables the Scroller control at any time.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>User enables the Scroller control at any time.</summary>
		///</signature>
	},
	'isHScroll' : function(){
		///<signature>
			///<summary>Returns true if horizontal scrollbar is shown, else return false.</summary>
		///</signature>
	},
	'isVScroll' : function(){
		///<signature>
			///<summary>Returns true if vertical scrollbar is shown, else return false.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>User refreshes the Scroller control at any time.</summary>
		///</signature>
	},
	'scrollX' : function(){
		///<signature>
			///<summary>Scroller moves to given pixel in X (left) position. We can also specify the animation speed,in which the scroller has to move while re-positioning it.</summary>
		///</signature>
	},
	'scrollY' : function(){
		///<signature>
			///<summary>Scroller moves to given pixel in Y (top) position. We can also specify the animation speed,in which the scroller has to move while re-positioning it.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Slider.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>To disable the slider</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the slider</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>To get value from slider handle</summary>
		///</signature>
	},
	'setValue' : function(){
		///<signature>
			///<summary>To set value to slider handle</summary>
		///</signature>
	}
});
intellisense.annotate(ej.SplitButton.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the split button widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the split button</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To Enable the split button</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To Hide the list content of the split button.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the list content of the split button.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Splitter.prototype, {
	'addItem' : function (content, property, index){
		///<signature>
			///<summary>To add a new pane to splitter control.</summary>
			///<param name=' content' type='<span class="param-type">string</span>' optional='false' >content of pane.</param>
			///<param name=' property' type='<span class="param-type">object</span>' optional='false' >pane properties.</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of pane.</param>
			///<returns type ='' />
		///</signature>
	},
	'collapse' : function (paneIndex){
		///<signature>
			///<summary>To collapse the splitter control pane.</summary>
			///<param name=' paneIndex' type='<span class="param-type">number</span>' optional='false' >index number of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expand' : function (paneIndex){
		///<signature>
			///<summary>To expand the splitter control pane.</summary>
			///<param name=' paneIndex' type='<span class="param-type">number</span>' optional='false' >index number of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>To refresh the splitter control pane resizing.</summary>
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>To remove a specified pane from the splitter control.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Tab.prototype, {
	'addItem' : function (url, displayLabel, index, cssClass, id){
		///<signature>
			///<summary>Add new tab items with given name, URL and given index position, if index null it&rsquo;s add last item.</summary>
			///<param name=' URL' type='<span class="param-type">string</span>' optional='false' >URL name / tab id.</param>
			///<param name=' displayLabel' type='<span class="param-type">string</span>' optional='false' >Tab Display name.</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Index position to placed , this is optional.</param>
			///<param name=' cssClass' type='<span class="param-type">string</span>' optional='false' >specifies cssClass, this is optional.</param>
			///<param name=' id' type='<span class="param-type">string</span>' optional='false' >specifies id of tab, this is optional.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the tab control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the tab control.</summary>
		///</signature>
	},
	'getItemsCount' : function(){
		///<signature>
			///<summary>This function get the number of tab rendered</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>This function hides the tab control.</summary>
		///</signature>
	},
	'hideItem' : function (index){
		///<signature>
			///<summary>This function hides the specified item tab in tab control.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of tab item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>Remove the given index tab item.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of tab item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>This function is to show the tab control.</summary>
		///</signature>
	},
	'showItem' : function (index){
		///<signature>
			///<summary>This function helps to show the specified hidden tab item in tab control.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of tab item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.TagCloud.prototype, {
	'insert' : function (name){
		///<signature>
			///<summary>Inserts a new item into the TagCloud</summary>
			///<param name=' name' type=' string' optional='false' >Insert new item into the TagCloud</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertAt' : function (name,position){
		///<signature>
			///<summary>Inserts a new item into the TagCloud at a particular position.</summary>
			///<param name=' name' type=' string' optional='false' >Inserts a new item into the TagCloud</param>
			///<param name=' position' type=' number' optional='false' >Inserts a new item into the TagCloud with the specified position</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'remove' : function (name){
		///<signature>
			///<summary>Removes the item from the TagCloud based on the name. It removes all the tags which have the corresponding name</summary>
			///<param name=' name' type='<span class="param-type">string</span>' optional='false' >name of the tag.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeAt' : function (position){
		///<signature>
			///<summary>Removes the item from the TagCloud based on the position. It removes the tags from the the corresponding position only.</summary>
			///<param name=' position' type='<span class="param-type">number</span>' optional='false' >position of tag item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Tile.prototype, {
	'updateTemplate' : function (name){
		///<signature>
			///<summary>Update the image template of tile item to another one.</summary>
			///<param name=' name' type=' string' optional='false' >UpdateTemplate by using id</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.TimePicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Allows you to disable the TimePicker. </summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Allows you to enable the TimePicker. </summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>It returns the current time value.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>This method will hide the TimePicker control popup.</summary>
		///</signature>
	},
	'setCurrentTime' : function(){
		///<signature>
			///<summary>Updates the current system time in TimePicker.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>This method will show the TimePicker control popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.ToggleButton.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Allows you to destroy the ToggleButton widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the ToggleButton to prevent all user interactions.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the ToggleButton.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Toolbar.prototype, {
	'deselectItem' : function (element){
		///<signature>
			///<summary>Deselect the specified Toolbar item.</summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be deselected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'deselectItemByID' : function (ID){
		///<signature>
			///<summary>Deselect the Toolbar item based on specified id.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be deselected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Allows you to destroy the Toolbar widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable all items in the Toolbar control.</summary>
		///</signature>
	},
	'disableItem' : function (element){
		///<signature>
			///<summary>Disable the specified Toolbar item. </summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be disabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableItemByID' : function (ID){
		///<signature>
			///<summary>Disable the Toolbar item based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be disabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the Toolbar if it is in disabled state.</summary>
		///</signature>
	},
	'enableItem' : function (element){
		///<signature>
			///<summary>Enable the Toolbar item based on specified item.</summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be enabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableItemByID' : function (ID){
		///<signature>
			///<summary>Enable the Toolbar item based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be enabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the Toolbar</summary>
		///</signature>
	},
	'removeItem' : function (element){
		///<signature>
			///<summary>Remove the item from toolbar, based on specified item. </summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be removed</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeItemByID' : function (ID){
		///<signature>
			///<summary>Remove the item from toolbar, based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be removed</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItem' : function (element){
		///<signature>
			///<summary>Selects the item from toolbar, based on specified item.</summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be selected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItemByID' : function (ID){
		///<signature>
			///<summary>Selects the item from toolbar, based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be selected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the Toolbar.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Tooltip.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the Tooltip control.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the Tooltip control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the Tooltip control.</summary>
		///</signature>
	},
	'hide' : function ([effect],[func]){
		///<signature>
			///<summary>Hide the Tooltip popup.</summary>
			///<param name='effect' type=' <span class="param-type">string</span>' optional='true' > <span class="optional">optional</span> Determines the type of effect that takes place when hiding the tooltip.</param>
			///<param name='func' type=' <span class="param-type"> function </span> ' optional='true' > <span class="optional">optional</span> custom effect takes place when hiding the tooltip.</param>
			///<returns type ='' />
		///</signature>
	},
	'refresh' : function (target){
		///<signature>
			///<summary>This will change the Tooltip position dynamically with the different element. </summary>
			///<param name='target' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'show' : function ([effect],[func]){
		///<signature>
			///<summary>Shows the Tooltip popup.</summary>
			///<param name='effect' type='<span class="param-type">string</span>' optional='true' ><span class="optional">optional</span>Determines the type of effect that takes place when showing the tooltip.</param>
			///<param name='func' type='<span class="param-type">function</span>' optional='true' ><span class="optional">optional</span>custom effect takes place when showing the tooltip.</param>
			///<returns type ='' />
		///</signature>
	}
});
intellisense.annotate(ej.TreeGrid.prototype, {
	'clearSelection' : function (index){
		///<signature>
			///<summary>To clear all the selection in TreeGrid</summary>
			///<param name='index' type='number' optional='false' >you can pass a row index to clear the row selection.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>To collapse all the parent items in tree grid</summary>
		///</signature>
	},
	'hideColumn' : function (headerText){
		///<signature>
			///<summary>To hide the column by using header text</summary>
			///<param name='headerText' type='string' optional='false' >you can pass a header text of a column to hide.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function (dataSource, query){
		///<signature>
			///<summary>To refresh the changes in tree grid</summary>
			///<param name='dataSource' type='array' optional='false' >Pass which data source you want to show in tree grid</param>
			///<param name='query' type='object' optional='false' >Pass which data you want to show in tree grid</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'freezePrecedingColumns ' : function (field){
		///<signature>
			///<summary>Freeze all the columns preceding to the column specified by the field name.</summary>
			///<param name='field' type='string' optional='false' >Freeze all Columns before this field column.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'freezeColumn ' : function (field, isFrozen){
		///<signature>
			///<summary>Freeze/unfreeze the specified column.</summary>
			///<param name='field' type='string' optional='false' >Freeze/Unfreeze this field column.</param>
			///<param name='isFrozen' type='boolean' optional='false' >Decides to Freeze/Unfreeze this field column.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'saveCell' : function(){
		///<signature>
			///<summary>To save the edited cell in TreeGrid</summary>
		///</signature>
	},
	'search' : function (searchString){
		///<signature>
			///<summary>To search an item with search string provided at the run time</summary>
			///<param name='searchString' type='string' optional='false' >you can pass a searchString to search the tree grid</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showColumn' : function (headerText){
		///<signature>
			///<summary>To show the column by using header text</summary>
			///<param name='headerText' type='string' optional='false' >you can pass a header text of a column to show.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'sortColumn' : function (columnName, columnSortDirection){
		///<signature>
			///<summary>To sorting the data based on the particular fields</summary>
			///<param name='columnName' type='string' optional='false' >you can pass a name of column to sort.</param>
			///<param name='columnSortDirection' type='string' optional='false' >you can pass a sort direction to sort the column.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.TreeView.prototype, {
	'addNode' : function (newNodeText, target){
		///<signature>
			///<summary>To add a Node or collection of nodes in TreeView. If target tree node is specified, then the given nodes are added as child of target tree node, otherwise nodes are added in TreeView.  </summary>
			///<param name=' newNodeText' type='<span class="param-type">string|object</span>' optional='false' >New node text or JSON object</param>
			///<param name=' target' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addNodes' : function (collection, target){
		///<signature>
			///<summary>To add a collection of nodes in TreeView. If target tree node is specified, then the given nodes are added as child of target tree node, otherwise nodes are added in TreeView.  </summary>
			///<param name=' collection' type='<span class="param-type">object|Array</span>' optional='false' >New node details in JSON object</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'checkAll' : function(){
		///<signature>
			///<summary>To check all the nodes in TreeView.</summary>
		///</signature>
	},
	'checkNode' : function (element){
		///<signature>
			///<summary>To check a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>To collapse all the TreeView nodes.</summary>
		///</signature>
	},
	'collapseNode' : function (element){
		///<signature>
			///<summary>To collapse a particular node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node|object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableNode' : function (element){
		///<signature>
			///<summary>To disable the node in the TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableNode' : function (element){
		///<signature>
			///<summary>To enable the node in the TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ensureVisible' : function (element){
		///<signature>
			///<summary>To ensure that the TreeView node is visible in the TreeView. This method is useful if we need select a TreeView node dynamically.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'expandAll' : function(){
		///<signature>
			///<summary>To expand all the TreeView nodes.</summary>
		///</signature>
	},
	'expandNode' : function (element){
		///<signature>
			///<summary>To expandNode particular node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getCheckedNodes' : function(){
		///<signature>
			///<summary>To get currently checked nodes in TreeView.</summary>
		///</signature>
	},
	'getCheckedNodesIndex' : function(){
		///<signature>
			///<summary>To get currently checked nodes indexes in TreeView.</summary>
		///</signature>
	},
	'getNodeCount' : function(){
		///<signature>
			///<summary>To get number of nodes in TreeView.</summary>
		///</signature>
	},
	'getExpandedNodes' : function(){
		///<signature>
			///<summary>To get currently expanded nodes in TreeView.</summary>
		///</signature>
	},
	'getExpandedNodesIndex' : function(){
		///<signature>
			///<summary>To get currently expanded nodes indexes in TreeView.</summary>
		///</signature>
	},
	'getNodeByIndex' : function (index){
		///<signature>
			///<summary>To get TreeView node by using index position in TreeView.</summary>
			///<param name=' index ' type='<span class="param-type">number</span>' optional='false' >Index position of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getNode' : function (element){
		///<signature>
			///<summary>To get TreeView node data such as id, text, parentId, selected, checked, expanded, level, childs and index.</summary>
			///<param name=' element' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getNodeIndex' : function (element){
		///<signature>
			///<summary>To get current index position of TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getParent' : function (element){
		///<signature>
			///<summary>To get immediate parent TreeView node of particular TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getSelectedNode' : function(){
		///<signature>
			///<summary>To get the currently selected node in TreeView.</summary>
		///</signature>
	},
	'getSelectedNodeIndex' : function(){
		///<signature>
			///<summary>To get the index position of currently selected node in TreeView.</summary>
		///</signature>
	},
	'getText' : function (element){
		///<signature>
			///<summary>To get the text of a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getTreeData' : function(){
		///<signature>
			///<summary>To get the updated datasource of TreeView after performing some operation like drag and drop, node editing, adding and removing node.</summary>
		///</signature>
	},
	'getVisibleNodes' : function(){
		///<signature>
			///<summary>To get currently visible nodes in TreeView.</summary>
		///</signature>
	},
	'hasChildNode' : function (element){
		///<signature>
			///<summary>To check a node having child or not.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To show nodes in TreeView.</summary>
		///</signature>
	},
	'hideNode' : function (element){
		///<signature>
			///<summary>To hide particular node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertAfter' : function (newNodeText, target){
		///<signature>
			///<summary>To add a Node or collection of nodes after the particular TreeView node.  </summary>
			///<param name=' newNodeText ' type='<span class="param-type">string|object</span>' optional='false' >New node text or JSON object</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertBefore' : function (newNodeText, target){
		///<signature>
			///<summary>To add a Node or collection of nodes before the particular TreeView node.  </summary>
			///<param name=' newNodeText ' type='<span class="param-type">string|object</span>' optional='false' >New node text or JSON object</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isNodeChecked' : function (element){
		///<signature>
			///<summary>To check the given TreeView node is checked or unchecked.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isChildLoaded' : function (element){
		///<signature>
			///<summary>To check whether the child nodes are loaded of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isDisabled' : function (element){
		///<signature>
			///<summary>To check the given TreeView node is disabled or enabled.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isExist' : function (element){
		///<signature>
			///<summary>To check the given node is exist in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isExpanded' : function (element){
		///<signature>
			///<summary>To get the expand status of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isSelected' : function (element){
		///<signature>
			///<summary>To get the select status of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isVisible' : function (element){
		///<signature>
			///<summary>To get the visibility status of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'loadData' : function (newNodeText, target){
		///<signature>
			///<summary>To load the TreeView nodes from the particular URL. If target tree node is specified, then the given nodes are added as child of target tree node, otherwise nodes are added in TreeView.  </summary>
			///<param name=' URL ' type='<span class="param-type">string</span>' optional='false' >URL location, the data returned from the URL will be loaded in TreeView</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'moveNode' : function (sourceNode, destionationNode, index){
		///<signature>
			///<summary>To move the TreeView node with in same TreeView. The new poistion of given TreeView node will be based on destionation node and index position.  </summary>
			///<param name=' sourceNode ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<param name=' destinationNode ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<param name=' index ' type='<span class="param-type">number</span>' optional='false' >New index position of given source node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>To refresh the TreeView</summary>
		///</signature>
	},
	'removeAll' : function(){
		///<signature>
			///<summary>To remove all the nodes in TreeView.</summary>
		///</signature>
	},
	'removeNode' : function (element){
		///<signature>
			///<summary>To remove a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectNode' : function (element){
		///<signature>
			///<summary>To select a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show nodes in TreeView.</summary>
		///</signature>
	},
	'showNode' : function (element){
		///<signature>
			///<summary>To show a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unCheckAll' : function(){
		///<signature>
			///<summary>To uncheck all the nodes in TreeView.</summary>
		///</signature>
	},
	'uncheckNode' : function (element){
		///<signature>
			///<summary>To uncheck a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unselectNode' : function (element){
		///<signature>
			///<summary>To unselect the node in the TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateText' : function (target, newText){
		///<signature>
			///<summary>To edit or update the text of the TreeView node.  </summary>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<param name=' newText ' type='<span class="param-type">string</span>' optional='false' >New text</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Uploadbox.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>The destroy method destroys the control and brings the control to a pre-init state. All the events of the Upload control is bound by using this._on unbinds automatically.  </summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the Uploadbox control</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the Uploadbox control</summary>
		///</signature>
	}
});
intellisense.annotate(ej.WaitingPopup.prototype, {
	'hide' : function(){
		///<signature>
			///<summary>To hide the waiting popup</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refreshes the WaitingPopup control by resetting the pop-up panel position and content position</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the waiting popup</summary>
		///</signature>
	}
});
intellisense.annotate(jQuery.fn, {
	'ejAccordion' : function(){
		///<signature>
			///<summary> The Accordion control is an interface where lists of items can be collapsed or expanded. It has several collapsible panels where only one can be expanded at a time that is useful for dashboards where space is limited. Each Accordion control has a template for its header and its content. </summary>
		///</signature>
	},
	'ejAutocomplete' : function(){
		///<signature>
			///<summary> The AutoComplete control is a textbox control that provides a list of suggestions based on the user query.When the users enters the text in the text box, the control performs a search operation and provides a list of results in the suggestion pop up. There are several filter types available to perform the search. </summary>
		///</signature>
	},
	'ejButton' : function (element){
		///<signature>
			///<summary> Custom Design for Html Button control. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for button</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejChart' : function(){
		///<signature>
			///<summary> <ts root="datavisualization" /> Essential chart can be easily configured to the DOM element, such as div. You can create a Chart with highly customizable look and feel. </summary>
		///</signature>
	},
	'ejCheckBox' : function(){
		///<signature>
			///<summary> The CheckBox control allows you to check an option to perform an action. This control allows you to select true, false or an intermediate option. These CheckBoxes are supported with themes. The html CheckBox control is rendered as Essential JavaScript CheckBox control. </summary>
		///</signature>
	},
	'ejCircularGauge' : function (element){
		///<signature>
			///<summary> <ts root="datavisualization" /> The Circular gauge can be easily configured to the DOM element, such as div. you can create a circular gauge with a highly customizable look and feel. $(element).ejCircularGauge(options) <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} options{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">For setting the Circular gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $(function () { $("#CoreCircularGauge").ejCircularGauge({ }); }); </script>{% endhighlight %} Requires {:.require} * module:jQuery * module:ej.common.all * module:excanvas.js ## Members ### animationSpeed `number` {:#members:animationspeed} Specifies animationSpeed of circular gauge #### Default Value * 500 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ animationSpeed: 500,scales: [{ pointers: [{ value: 50 }] }] }); </script>{% endhighlight %} ### backgroundColor `string` {:#members:backgroundcolor} Specifies the background color of circular gauge. #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ backgroundColor : "#F234F4" }); </script>{% endhighlight %} ### distanceFromCorner `number` {:#members:distancefromcorner} Specify distanceFromCorner value of circular gauge #### Default Value * center #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ gaugePosition:"center", distanceFromCorner :25}); </script>{% endhighlight %} ### enableAnimation `boolean` {:#members:enableanimation} Specify animate value of circular gauge #### Default Value * true #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ enableAnimation: true,scales: [{ pointers: [{ value: 50 }] }] }); </script>{% endhighlight %} ### frame `object` {:#members:frame} Specify the frame of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ frame:{frameType:ej.datavisualization.CircularGauge.Frame.FullCircle, backgroundImageUrl:"", halfCircleFrameStartAngle:180, halfCircleFrameEndAngle:360} }); </script>{% endhighlight %} ### frame.backgroundImageUrl `string` {:#members:frame.backgroundimageurl} Specify the URL of the frame background image for circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ frame:{backgroundImageUrl : "Sun.jpg" }}); </script>{% endhighlight %} ### frame.frameType `enum` {:#members:frame.frametype} <ts name = "ej.datavisualization.CircularGauge.FrameType"/> Specifies the frameType of circular gauge. See <a href="global.html#Frame">Frame</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> FullCircle</td> <td class="type">string</td> <td class="description">Specify the full circle frame</td> </tr> <tr> <td class="name"> HalfCircle</td> <td class="type">string</td> <td class="description">Specify the half circle frame</td> </tr> </tbody> </table> #### Default Value * FullCircle #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ frame:{frameType : "halfcircle"} }); </script>{% endhighlight %} ### frame.halfCircleFrameEndAngle `number` {:#members:frame.halfcircleframeendangle} Specifies the end angle for the half circular frame. #### Default Value * 360 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ frame:{frameType : "halfCircle",halfCircleFrameEndAngle: 270}}); </script>{% endhighlight %} ### frame.halfCircleFrameStartAngle `number` {:#members:frame.halfcircleframestartangle} Specifies the start angle for the half circular frame. #### Default Value * 180 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ frame:{frameType : "halfcircle",halfCircleFrameStartAngle: 0} }); </script>{% endhighlight %} ### gaugePosition `enum` {:#members:gaugeposition} <ts name = "ej.datavisualization.CircularGauge.gaugePosition"/> Specify gaugePosition value of circular gauge See GaugePosition <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> TopLeft</td> <td class="type">string</td> <td class="description">The gauge will be placed TopLeft corner in container</td> </tr> <tr> <td class="name"> TopRight</td> <td class="type">string</td> <td class="description">The gauge will be placed TopRight corner in container</td> </tr> <tr> <td class="name"> TopCenter</td> <td class="type">string</td> <td class="description">The gauge will be placed in TopCenter</td> </tr> <tr> <td class="name"> MiddleLeft</td> <td class="type">string</td> <td class="description">The gauge will be placed in MiddleLeft</td> </tr> <tr> <td class="name"> MiddleRight</td> <td class="type">string</td> <td class="description">The gauge will be placed in MiddleRight</td> </tr> <tr> <td class="name"> Center</td> <td class="type">string</td> <td class="description">The gauge will be placed center of the container</td> </tr> <tr> <td class="name"> BottomLeft</td> <td class="type">string</td> <td class="description">The gauge will be placed BottomLeft corner in container</td> </tr> <tr> <td class="name"> BottomRight</td> <td class="type">string</td> <td class="description">he gauge will be placed in BottomRight corner in container</td> </tr> <tr> <td class="name"> BottomCenter</td> <td class="type">string</td> <td class="description">he gauge will be placed in BottomCenter</td> </tr> </tbody> </table> #### Default Value * center #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ gaugePosition:"center" }); </script>{% endhighlight %} ### height `number` {:#members:height} Specifies the height of circular gauge. #### Default Value * 360 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ height: 400 }); </script>{% endhighlight %} ### interiorGradient `object` {:#members:interiorgradient} Specifies the interiorGradient of circular gauge. #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ interiorGradient: { colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } }); </script>{% endhighlight %} ### isRadialGradient `boolean` {:#members:isradialgradient} Specify isRadialGradient value of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ isRadialGradient : true }); </script>{% endhighlight %} ### isResponsive `boolean` {:#members:isresponsive} Specify isResponsive value of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ isResponsive : true }); </script>{% endhighlight %} ### maximum `number` {:#members:maximum} Specifies the maximum value of circular gauge. #### Default Value * 100 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ maximum: 120 }); </script>{% endhighlight %} ### minimum `number` {:#members:minimum} Specifies the minimum value of circular gauge. #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ minimum: 10 }); </script>{% endhighlight %} ### outerCustomLabelPosition `enum` {:#members:outercustomlabelposition} <ts name = "ej.datavisualization.CircularGauge.CustomLabelPositionType"/> Specify outerCustomLabelPosition value of circular gauge See <a href="global.html#OuterCustomLabelPosition">OuterCustomLabelPosition</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Top</td> <td class="type">string</td> <td class="description">Sets the label position as top</td> </tr> <tr> <td class="name"> Bottom</td> <td class="type">string</td> <td class="description">Sets the label position as Bottom</td> </tr> <tr> <td class="name"> Right</td> <td class="type">string</td> <td class="description">Sets the label position as Right</td> </tr> <tr> <td class="name"> Left</td> <td class="type">string</td> <td class="description">Sets the label position as Left</td> </tr> </tbody> </table> #### Default Value * bottom #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ outerCustomLabelPosition:"top" }); </script>{% endhighlight %} ### radius `number` {:#members:radius} Specifies the radius of circular gauge. #### Default Value * 180 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ radius: 100 }); </script>{% endhighlight %} ### readOnly `boolean` {:#members:readonly} Specify readonly value of circular gauge #### Default Value * true #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ readOnly : false }); </script>{% endhighlight %} ### scales `object` {:#members:scales} Specify the pointers, ticks, labels, indicators, ranges of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, size: 6, border:{width: 1.5} }] }); </script>{% endhighlight %} ### scales.backgroundColor `string` {:#members:scales.backgroundcolor} Specify backgroundColor for the scale of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, backgroundColor: "#1BA1E2" }] }); </script>{% endhighlight %} ### scales.border `object` {:#members:scales.border} Specify border for scales of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ border:{color:null, width:1.5 }}] }); </script>{% endhighlight %} ### scales.border.color `string` {:#members:scales.border.color} Specify border color for scales of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, border:[{color: "#1BA1E2" }]}] }); </script>{% endhighlight %} ### scales.border.width `number` {:#members:scales.border.width} Specify border width of circular gauge #### Default Value * 1.5 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, border:{width: 1.5} }] }); </script>{% endhighlight %} ### scales.direction `enum` {:#members:scales.direction} <ts name = "ej.datavisualization.CircularGauge.Direction"/> Specify scale direction of circular gauge. See <a href="global.html#Directions">Directions</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Clockwise</td> <td class="type">string</td> <td class="description">Specify the clockwise direction </td> </tr> <tr> <td class="name"> CounterClockwise</td> <td class="type">string</td> <td class="description">Specify the counterclockwise direction</td> </tr> </tbody> </table> #### Default Value * Clockwise #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ direction: "counterclockwise" }] }); </script>{% endhighlight %} ### scales.indicators `Array` {:#members:scales.indicators} Specify representing state of circular gauge #### Default Value * Array #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ height: 30,width: 10,type: "circle",value: 0,position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243", borderColor: "#5DF243", text: "", textColor: "#870505" }, { endValue: 200, startValue: 70, backgroundColor: "#145608", borderColor: "#145608", text: "", textColor: "#870505" }]}]}]}); </script>{% endhighlight %} ### scales.indicators.height `number` {:#members:scales.indicators.height} Specify indicator height of circular gauge #### Default Value * 15 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ height: 30,type: "circle",value: 0,position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.imageUrl `string` {:#members:scales.indicators.imageurl} Specify imageUrl of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "image",value: 0,imageUrl:"Sun.jpeg",position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.position `object` {:#members:scales.indicators.position} Specify position of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y: 150 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.position.x `number` {:#members:scales.indicators.position.x} Specify x-axis of position of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185,y:0 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.position.y `number` {:#members:scales.indicators.position.y} Specify y-axis of position of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x:0,y: 185 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges `Array` {:#members:scales.indicators.stateranges} Specify the various states of circular gauge #### Default Value * Array #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y:300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges.backgroundColor `string` {:#members:scales.indicators.stateranges.backgroundcolor} Specify backgroundColor for indicator of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y:300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "Red" }, { endValue: 200, startValue: 70, backgroundColor: "Yellow"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges.borderColor `string` {:#members:scales.indicators.stateranges.bordercolor} Specify borderColor for indicator of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y:300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243",borderColor:"Red" }, { endValue: 200, startValue: 70, backgroundColor: "#145608", borderColor:"yellow"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges.endValue `number` {:#members:scales.indicators.stateranges.endvalue} Specify end value for each specified state of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y:300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges.font `object` {:#members:scales.indicators.stateranges.font} Specify value of the font as the indicator when the indicator style is set with the value "text" of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators: true, indicators: [{ width: 30, type: "text", value: 0, position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, text: "staterange1" }, { endValue: 200, startValue: 70, text: "staterange1", font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" } }]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges.startValue `number` {:#members:scales.indicators.stateranges.startvalue} Specify start value for each specified state of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y:300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges.text `string` {:#members:scales.indicators.stateranges.text} Specify value of the text as the indicator when the indicator style is set with the value "text" of circular gauge #### Default Value * "" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators: true, indicators: [{ width: 30, type: "text", value: 0, position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, text: "staterange1" }, { endValue: 200, startValue: 70, text: "staterange1" }]}]}]}); </script>{% endhighlight %} ### scales.indicators.stateRanges.textColor `string` {:#members:scales.indicators.stateranges.textcolor} Specify value of the textColor as the indicator when the indicator style is set with the value "text" of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators: true, indicators: [{ width: 30, type: "text", value: 0, position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, text: "staterange1", textColor: "Yellow" }, { endValue: 200, startValue: 70, text: "staterange1", textColor: "Yellow" }]}]}]}); </script>{% endhighlight %} ### scales.indicators.type `enum` {:#members:scales.indicators.type} <ts name = "ej.datavisualization.CircularGauge.IndicatorTypes"/> Specify indicator style of circular gauge. See <a href="global.html#IndicatorType">IndicatorType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Rectangle</td> <td class="type">string</td> <td class="description">Style of the indicator will be rectangle</td> </tr> <tr> <td class="name"> Circle</td> <td class="type">string</td> <td class="description">Style of the indicator will be circle</td> </tr> <tr> <td class="name"> Text</td> <td class="type">string</td> <td class="description">Style of the indicator will be text</td> </tr> <tr> <td class="name"> RoundedRectangle</td> <td class="type">string</td> <td class="description">Style of the indicator will be roundedrectangle</td> </tr> <tr> <td class="name"> Image</td> <td class="type">string</td> <td class="description">Style of the indicator will be image</td> </tr> </tbody> </table> #### Default Value * Circle #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.indicators.width `number` {:#members:scales.indicators.width} Specify indicator width of circular gauge #### Default Value * 15 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{ width: 30,type: "circle",value: 0,position: { x: 185, y: 300 }, stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" }, { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]}); </script>{% endhighlight %} ### scales.labels `Array` {:#members:scales.labels} Specify the text values displayed in a meaningful manner alongside the ticks of circular gauge #### Default Value * Array #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ angle: 10, opacity: 0.4 }] }] }); </script>{% endhighlight %} ### scales.labels.angle `number` {:#members:scales.labels.angle} Specify the angle for the labels of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ angle: 10 }] }] }); </script>{% endhighlight %} ### scales.labels.autoAngle `boolean` {:#members:scales.labels.autoangle} Specify labels autoAngle value of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels:[{autoAngle: true}] }] }); </script>{% endhighlight %} ### scales.labels.color `string` {:#members:scales.labels.color} Specify label color of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ color: "Red" }] }] }); </script>{% endhighlight %} ### scales.labels.distanceFromScale `number` {:#members:scales.labels.distancefromscale} Specify distanceFromScale value for labels of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ distanceFromScales: 10 }] }] }); </script>{% endhighlight %} ### scales.labels.font `object` {:#members:scales.labels.font} Specify font for labels of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { size: "12px", fontFamily: "Segou", fontStyle: "Bold" } }] }] }); </script>{% endhighlight %} ### scales.labels.font.fontFamily `string` {:#members:scales.labels.font.fontfamily} Specify font fontFamily for labels of circular gauge #### Default Value * "Arial" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { fontFamily: "Arial" } }] }] }); </script>{% endhighlight %} ### scales.labels.font.fontStyle `string` {:#members:scales.labels.font.fontstyle} Specify font Style for labels of circular gauge #### Default Value * "Bold" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { fontStyle: "Bold" } }] }] }); </script>{% endhighlight %} ### scales.labels.font.size `string` {:#members:scales.labels.font.size} Specify font size for labels of circular gauge #### Default Value * "11px" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { size: "12px" } }] }] }); </script>{% endhighlight %} ### scales.labels.includeFirstValue `boolean` {:#members:scales.labels.includefirstvalue} Specify includeFirstValue of circular gauge #### Default Value * true #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ includeFirstValue: false }] }] }); </script>{% endhighlight %} ### scales.labels.opacity `number` {:#members:scales.labels.opacity} Specify opacity value for labels of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ opacity: 0.4 }] }] }); </script>{% endhighlight %} ### scales.labels.placement `enum` {:#members:scales.labels.placement} <ts name = "ej.datavisualization.CircularGauge.Placement"/> Specify label placement of circular gauge. See <a href="global.html#LabelPlacement">LabelPlacement</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Near</td> <td class="type">string</td> <td class="description">Specify the label placement as near</td> </tr> <tr> <td class="name"> Far</td> <td class="type">string</td> <td class="description">Specify the label placement as far</td> </tr> <td class="name"> Center</td> <td class="type">string</td> <td class="description">Specify the label placement as center</td> </tr> </tbody> </table> #### Default Value * Near #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ placement: "near" }] }] }); </script>{% endhighlight %} ### scales.labels.type `enum` {:#members:scales.labels.type} <ts name = "ej.datavisualization.CircularGauge.LabelType"/> Specify label Style of circular gauge. See <a href="global.html#LabelType">LabelType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Major</td> <td class="type">string</td> <td class="description"> Label style will be major</td> </tr> <tr> <td class="name"> Minor</td> <td class="type">string</td> <td class="description">Label style will be minor</td> </tr> </tbody> </table> #### Default Value * Major #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ type: "major" }] }] }); </script>{% endhighlight %} ### scales.labels.unitText `string` {:#members:scales.labels.unittext} Specify unitText of circular gauge #### Default Value * "" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ unitText: "kmph" }] }] }); </script>{% endhighlight %} ### scales.labels.unitTextPosition `enum` {:#members:scales.labels.unittextposition} <ts name = "ej.datavisualization.CircularGauge.UnitTextPlacement"/> Specify unitTextPosition of circular gauge. See UnitTextPosition <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Back</td> <td class="type">string</td> <td class="description">The unit text will be placed back of the gauge</td> </tr> <tr> <td class="name"> Front</td> <td class="type">string</td> <td class="description">The unit text will be placed front of the gauge</td> </tr> </tbody> </table> #### Default Value * Back #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ unitText: "kmph",unitTextPosition: "front" }] }] }); </script>{% endhighlight %} ### scales.majorIntervalValue `number` {:#members:scales.majorintervalvalue} Specify majorIntervalValue of circular gauge #### Default Value * 10 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ majorIntervalValue: 5 }] }); </script>{% endhighlight %} ### scales.maximum `number` {:#members:scales.maximum} Specify maximum scale value of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ maximum: 200 }] }); </script>{% endhighlight %} ### scales.minimum `number` {:#members:scales.minimum} Specify minimum scale value of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ minimum: 20 }] }); </script>{% endhighlight %} ### scales.minorIntervalValue `number` {:#members:scales.minorintervalvalue} Specify minorIntervalValue of circular gauge #### Default Value * 2 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ minorIntervalValue: 1 }] }); </script>{% endhighlight %} ### scales.opacity `number` {:#members:scales.opacity} Specify opacity value of circular gauge #### Default Value * 1 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, opacity:0.5 }] }); </script>{% endhighlight %} ### scales.pointerCap `object` {:#members:scales.pointercap} Specify pointer cap of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{radius: 7, borderWidth:3, interiorGradient:null, borderColor:null } }] }); </script>{% endhighlight %} ### scales.pointerCap.backgroundColor `string` {:#members:scales.pointercap.backgroundcolor} Specify cap backgroundColor of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap: {backgroundColor: "Green"} }] }); </script>{% endhighlight %} ### scales.pointerCap.borderColor `string` {:#members:scales.pointercap.bordercolor} Specify cap borderColor of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap: {borderColor: "Brown" }}] }); </script>{% endhighlight %} ### scales.pointerCap.borderWidth `number` {:#members:scales.pointercap.borderwidth} Specify pointerCap borderWidth value of circular gauge #### Default Value * 3 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{borderWidth: 8 } }] }); </script>{% endhighlight %} ### scales.pointerCap.interiorGradient `object` {:#members:scales.pointercap.interiorgradient} Specify cap interiorGradient value of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{interiorGradient: {colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}}] }); </script>{% endhighlight %} ### scales.pointerCap.radius `number` {:#members:scales.pointercap.radius} Specify pointerCap Radius value of circular gauge #### Default Value * 7 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{radius: 10} }] }); </script>{% endhighlight %} ### scales.pointers `Array` {:#members:scales.pointers} Specify pointers value of circular gauge #### Default Value * Array #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ distanceFromScale: 0, showBackNeedle: false }] }] }); </script>{% endhighlight %} ### scales.pointers.backgroundColor `string` {:#members:scales.pointers.backgroundcolor} Specify backgroundColor for the pointer of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ backgroundColor: "#1A1A1A" }] }] }); </script>{% endhighlight %} ### scales.pointers.backNeedleLength `number` {:#members:scales.pointers.backneedlelength} Specify backNeedleLength of circular gauge #### Default Value * 10 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true, backNeedleLength: 10 }] }] }); </script>{% endhighlight %} ### scales.pointers.border `object` {:#members:scales.pointers.border} Specify the border for pointers of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers:[{border:{color:null, width:1.5 }}]}] }); </script>{% endhighlight %} ### scales.pointers.border.color `string` {:#members:scales.pointers.border.color} Specify border color for pointer of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ border:{color: "#1A1A1A"} }] }] }); </script>{% endhighlight %} ### scales.pointers.border.width `number` {:#members:scales.pointers.border.width} Specify border width for pointers of circular gauge #### Default Value * 1.5 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ border:{width: 1.5 }}] }] }); </script>{% endhighlight %} ### scales.pointers.distanceFromScale `number` {:#members:scales.pointers.distancefromscale} Specify distanceFromScale value for pointers of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ distanceFromScale: 10 }] }] }); </script>{% endhighlight %} ### scales.pointers.gradients `object` {:#members:scales.pointers.gradients} Specify pointer gradients of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ gradients: {colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}] }] }); </script>{% endhighlight %} ### scales.pointers.imageUrl `string` {:#members:scales.pointers.imageurl} Specify pointer image of circular gauge.It is applicable for both marker as well as needle type pointers. #### Default Value * NULL #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "image", imageUrl: "football.png" }] }] }); </script>{% endhighlight %} ### scales.pointers.length `number` {:#members:scales.pointers.length} Specify pointer length of circular gauge #### Default Value * 150 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ length: 50 }] }] }); </script>{% endhighlight %} ### scales.pointers.markerType `enum` {:#members:scales.pointers.markertype} <ts name = "ej.datavisualization.CircularGauge.MarkerType"/> Specify marker Style value of circular gauge. See <a href="global.html#MarkerType">MarkerType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Rectangle</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be rectangle</td> </tr> <tr> <td class="name"> Circle</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be circle</td> </tr> <tr> <td class="name"> Triangle</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be triangle</td> </tr> <tr> <td class="name"> Ellipse</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be ellipse</td> </tr> <tr> <td class="name"> Diamond</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be diamond</td> </tr> <tr> <td class="name"> Pentagon</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be pentagon</td> </tr> <tr> <td class="name"> Slider</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be slider</td> </tr> <tr> <td class="name"> Pointer</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be pointer</td> </tr> <tr> <td class="name"> Wedge</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be wedge</td> </tr> <tr> <td class="name"> Trapezoid</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be trapezoid</td> </tr> <tr> <td class="name"> RoundedRectangle</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be rounded rectangle</td> </tr> <tr> <td class="name"> Image</td> <td class="type">string</td> <td class="description">Marker style of circular gauge will be image</td> </tr> </tbody> </table> #### Default Value * Rectangle #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle" }] }] }); </script>{% endhighlight %} ### scales.pointers.needleType `enum` {:#members:scales.pointers.needletype} <ts name = "ej.datavisualization.CircularGauge.NeedleType"/> Specify needle Style value of circular gauge. See <a href="global.html#NeedleType">NeedleType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Triangle</td> <td class="type">string</td> <td class="description">Needle style of circular gauge will be triangle</td> </tr> <tr> <td class="name"> Rectangle</td> <td class="type">string</td> <td class="description">Needle style of circular gauge will be rectangle</td> </tr> <tr> <td class="name"> Arrow</td> <td class="type">string</td> <td class="description">Needle style of circular gauge will be arrow</td> </tr> <tr> <td class="name"> Image</td> <td class="type">string</td> <td class="description">Needle style of circular gauge will be image</td> </tr> <tr> <td class="name"> Trapezoid</td> <td class="type">string</td> <td class="description">Needle style of circular gauge will be trapezoid</td> </tr> </tbody> </table> #### Default Value * Triangle #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ needleType: "triangle" }] }] }); </script>{% endhighlight %} ### scales.pointers.opacity `number` {:#members:scales.pointers.opacity} Specify opacity value for pointer of circular gauge #### Default Value * 1 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ opacity: 0.3 }] }] }); </script>{% endhighlight %} ### scales.pointers.placement `enum` {:#members:scales.pointers.placement} <ts ref = "ej.datavisualization.CircularGauge.Placement"/> Specify pointer Placement value of circular gauge. See <a href="global.html#PointerPlacement">PointerPlacement</a> #### Default Value * Near #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ placement: "far" }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText `object` {:#members:scales.pointers.pointervaluetext} Specify pointer value text of circular gauge. #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: false, distance: 20, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "#8c8c8c", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.angle `number` {:#members:scales.pointers.pointervaluetext.angle} Specify pointer text angle of circular gauge. #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 20, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "Red", opacity: 0.5, autoAngle: false, angle: 30, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.autoAngle `boolean` {:#members:scales.pointers.pointervaluetext.autoangle} Specify pointer text auto angle of circular gauge. #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 20, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "Red", opacity: 0.5, autoAngle: true, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.color `string` {:#members:scales.pointers.pointervaluetext.color} Specify pointer value text color of circular gauge. #### Default Value * #8c8c8c #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 20, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "Red", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.distance `number` {:#members:scales.pointers.pointervaluetext.distance} Specify pointer value text distance from pointer of circular gauge. #### Default Value * 20 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 30, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "#8c8c8c", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.font `object` {:#members:scales.pointers.pointervaluetext.font} Specify pointer value text font option of circular gauge. #### Default Value * object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 30, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "#8c8c8c", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.font.fontFamily `string` {:#members:scales.pointers.pointervaluetext.font.fontfamily} Specify pointer value text font family of circular gauge. #### Default Value * Arial #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 30, font: { size: "12px", fontFamily: "Seogo UI", fontStyle: "Bold" }, color: "#8c8c8c", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.font.fontStyle `string` {:#members:scales.pointers.pointervaluetext.font.fontstyle} Specify pointer value text font style of circular gauge. #### Default Value * Bold #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 30, font: { size: "12px", fontFamily: "Seogo UI", fontStyle: "Normal" }, color: "#8c8c8c", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.font.size `string` {:#members:scales.pointers.pointervaluetext.font.size} Specify pointer value text size of circular gauge. #### Default Value * 11px #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 30, font: { size: "12px", fontFamily: "Arial", fontStyle: "Bold" }, color: "#8c8c8c", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.opacity `number` {:#members:scales.pointers.pointervaluetext.opacity} Specify pointer value text opacity of circular gauge. #### Default Value * 1 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 20, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "Red", opacity: 0.5, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.pointerValueText.showValue `boolean` {:#members:scales.pointers.pointervaluetext.showvalue} enable pointer value text visibility of circular gauge. #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle", pointerValueText:{ showValue: true, distance: 20, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" }, color: "#8c8c8c", opacity: 1, autoAngle: false, angle: 0, } }] }] }); </script>{% endhighlight %} ### scales.pointers.showBackNeedle `boolean` {:#members:scales.pointers.showbackneedle} Specify showBackNeedle value of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true, backNeedleLength: 10 }] }] }); </script>{% endhighlight %} ### scales.pointers.type `enum` {:#members:scales.pointers.type} <ts name = "ej.datavisualization.CircularGauge.PointerType"/> Specify pointer type value of circular gauge. See <a href="global.html#PointerType">PointerType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Needle</td> <td class="type">string</td> <td class="description">Specify the pointer type as needle</td> </tr> <tr> <td class="name"> Marker</td> <td class="type">string</td> <td class="description">Specify the pointer type as marker</td> </tr> </tbody> </table> #### Default Value * Needle #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker" }] }] }); </script>{% endhighlight %} ### scales.pointers.value `number` {:#members:scales.pointers.value} Specify value of the pointer of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ value: 50 }] }] }); </script>{% endhighlight %} ### scales.pointers.width `number` {:#members:scales.pointers.width} Specify pointer width of circular gauge #### Default Value * 7 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ width: 7 }] }] }); </script>{% endhighlight %} ### scales.radius `number` {:#members:scales.radius} Specify scale radius of circular gauge #### Default Value * 170 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, radius: 100 }] }); </script>{% endhighlight %} ### scales.ranges `Array` {:#members:scales.ranges} Specify ranges value of circular gauge #### Default Value * Array #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true [{ ranges: [{ distanceFromScale: 25, size: 5}] }] }]}); </script>{% endhighlight %} ### scales.ranges.backgroundColor `string` {:#members:scales.ranges.backgroundcolor} Specify backgroundColor for the ranges of circular gauge #### Default Value * "#32b3c6" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,backgroundColor: "Red" }] }]}); </script>{% endhighlight %} ### scales.ranges.border `object` {:#members:scales.ranges.border} Specify border for ranges of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ranges:[{border:{color:null, width:1.5 }}]}] }); </script>{% endhighlight %} ### scales.ranges.border.color `string` {:#members:scales.ranges.border.color} Specify border color for ranges of circular gauge #### Default Value * "#32b3c6" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,border:{color: "#32b3c6"} }] }] }); </script>{% endhighlight %} ### scales.ranges.border.width `number` {:#members:scales.ranges.border.width} Specify border width for ranges of circular gauge #### Default Value * 1.5 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,distanceFromScale: -25,border:{width: 1.5} }] }] }); </script>{% endhighlight %} ### scales.ranges.distanceFromScale `number` {:#members:scales.ranges.distancefromscale} Specify distanceFromScale value for ranges of circular gauge #### Default Value * 25 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); </script>{% endhighlight %} ### scales.ranges.endValue `number` {:#members:scales.ranges.endvalue} Specify endValue for ranges of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true, ranges: [{ startValue: 10, endValue: 100,distanceFromScale: -25 }] }]}); </script>{% endhighlight %} ### scales.ranges.endWidth `number` {:#members:scales.ranges.endwidth} Specify endWidth for ranges of circular gauge #### Default Value * 10 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); </script>{% endhighlight %} ### scales.ranges.gradients `object` {:#members:scales.ranges.gradients} Specify range gradients of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{startValue: 10, endValue: 100, gradients: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}] }]}); </script>{% endhighlight %} ### scales.ranges.opacity `number` {:#members:scales.ranges.opacity} Specify opacity value for ranges of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,distanceFromScale: -25,opacity: 0.5 }] }] }); </script>{% endhighlight %} ### scales.ranges.placement `enum` {:#members:scales.ranges.placement} <ts ref = "ej.datavisualization.CircularGauge.Placement"/> Specify placement of circular gauge. See <a href="global.html#RangePlacement">RangePlacement</a> #### Default Value * Near #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70,placement: "center"}]}]}); </script>{% endhighlight %} ### scales.ranges.size `number` {:#members:scales.ranges.size} Specify size of the range value of circular gauge #### Default Value * 5 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70,size:5}]}]}); </script>{% endhighlight %} ### scales.ranges.startValue `number` {:#members:scales.ranges.startvalue} Specify startValue for ranges of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); </script>{% endhighlight %} ### scales.ranges.startWidth `number` {:#members:scales.ranges.startwidth} Specify startWidth of circular gauge #### Default Value * [Array.number] scale.ranges.startWidth = 10 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,distanceFromScale: -25 }] }]}); </script>{% endhighlight %} ### scales.shadowOffset `number` {:#members:scales.shadowoffset} Specify shadowOffset value of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ shadowOffset: 1}] }); </script>{% endhighlight %} ### scales.showIndicators `boolean` {:#members:scales.showindicators} Specify showIndicators of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showIndicators: false }] }); </script>{% endhighlight %} ### scales.showLabels `boolean` {:#members:scales.showlabels} Specify showLabels of circular gauge #### Default Value * true #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showLabels: true }] }); </script>{% endhighlight %} ### scales.showPointers `boolean` {:#members:scales.showpointers} Specify showPointers of circular gauge #### Default Value * true #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showPointers: true }] }); </script>{% endhighlight %} ### scales.showRanges `boolean` {:#members:scales.showranges} Specify showRanges of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showRanges: false }] }); </script>{% endhighlight %} ### scales.showScaleBar `boolean` {:#members:scales.showscalebar} Specify showScaleBar of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true }] }); </script>{% endhighlight %} ### scales.showTicks `boolean` {:#members:scales.showticks} Specify showTicks of circular gauge #### Default Value * true #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showTicks: true }] }); </script>{% endhighlight %} ### scales.size `number` {:#members:scales.size} Specify scaleBar size of circular gauge #### Default Value * 6 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, size: 6 }] }); </script>{% endhighlight %} ### scales.startAngle `number` {:#members:scales.startangle} Specify startAngle of circular gauge #### Default Value * 115 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ startAngle: 90 }] }); </script>{% endhighlight %} ### scales.subGauges `Array` {:#members:scales.subgauges} Specify subGauge of circular gauge #### Default Value * Array #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 200, y: 150 }}]}]}); </script>{% endhighlight %} ### scales.subGauges.height `number` {:#members:scales.subgauges.height} Specify subGauge Height of circular gauge #### Default Value * 150 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 400,width: 200,position: { x: 200, y: 100 }}]}]}); </script>{% endhighlight %} ### scales.subGauges.position `object` {:#members:scales.subgauges.position} Specify position for sub-gauge of circular gauge #### Default Value * Object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 200, y: 150 }}]}]}); </script>{% endhighlight %} ### scales.subGauges.position.x `number` {:#members:scales.subgauges.position.x} Specify x-axis position for sub-gauge of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 200, y: 0 }}]}]}); </script>{% endhighlight %} ### scales.subGauges.position.y `number` {:#members:scales.subgauges.position.y} Specify y-axis position for sub-gauge of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 0, y: 150 }}]}]}); </script>{% endhighlight %} ### scales.subGauges.width `number` {:#members:scales.subgauges.width} Specify subGauge Width of circular gauge #### Default Value * 150 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 300,position: { x: 200, y: 150 }}]}]}); </script>{% endhighlight %} ### scales.sweepAngle `number` {:#members:scales.sweepangle} Specify sweepAngle of circular gauge #### Default Value * 310 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ sweepAngle: 200 }] }); </script>{% endhighlight %} ### scales.ticks `Array` {:#members:scales.ticks} Specify ticks of circular gauge #### Default Value * Array #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ angle: 10, distanceFromScale: 10 }] }] }); </script>{% endhighlight %} ### scales.ticks.angle `number` {:#members:scales.ticks.angle} Specify the angle for the ticks of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ angle: 10 }] }] }); </script>{% endhighlight %} ### scales.ticks.color `string` {:#members:scales.ticks.color} Specify tick color of circular gauge #### Default Value * null #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ color: "#777777" }] }] }); </script>{% endhighlight %} ### scales.ticks.distanceFromScale `number` {:#members:scales.ticks.distancefromscale} Specify distanceFromScale value for ticks of circular gauge #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ distanceFromScale: 10 }] }] }); </script>{% endhighlight %} ### scales.ticks.height `number` {:#members:scales.ticks.height} Specify tick height of circular gauge #### Default Value * 16 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ height: 16 }] }] }); </script>{% endhighlight %} ### scales.ticks.placement `enum` {:#members:scales.ticks.placement} <ts ref = "ej.datavisualization.CircularGauge.Placement"/> Specify tick placement of circular gauge. See <a href="global.html#TickPlacement">TickPlacement</a> #### Default Value * Near #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ placement: "near" }] }] }); </script>{% endhighlight %} ### scales.ticks.type `enum` {:#members:scales.ticks.type} <ts ref = "ej.datavisualization.CircularGauge.LabelType"/> Specify tick Style of circular gauge. See <a href="global.html#TickType">TickType</a> #### Default Value * Major #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ type: "major" }] }] }); </script>{% endhighlight %} ### scales.ticks.width `number` {:#members:scales.ticks.width} Specify tick width of circular gauge #### Default Value * 3 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ width: 3 }] }] }); </script>{% endhighlight %} ### theme `string` {:#members:theme} Specify the theme of circular gauge. #### Default Value * "flatlight" #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ theme : "flatlight" }); </script>{% endhighlight %} ### tooltip `object` {:#members:tooltip} Specify tooltip option of circular gauge #### Default Value * object #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ tooltip:{showLabelTooltip: true,showCustomLabelTooltip: true,templateID: null} }); </script>{% endhighlight %} ### tooltip.showCustomLabelTooltip `boolean` {:#members:tooltip.showcustomlabeltooltip} enable showCustomLabelTooltip of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ tooltip:{showCustomLabelTooltip: true} }); </script>{% endhighlight %} ### tooltip.showLabelTooltip `boolean` {:#members:tooltip.showlabeltooltip} enable showLabelTooltip of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ tooltip:{showLabelTooltip: true} }); </script>{% endhighlight %} ### tooltip.templateID `string` {:#members:tooltip.templateid} Specify tooltip templateID of circular gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ tooltip:{showLabelTooltip: true, templateID: "template1"} }); </script>{% endhighlight %} ### value `number` {:#members:value} Specifies the value of circular gauge. #### Default Value * 0 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ value: 30 }); </script>{% endhighlight %} ### width `number` {:#members:width} Specifies the width of circular gauge. #### Default Value * 360 #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ width: 400 }); </script>{% endhighlight %} ## Methods ### destroy() {:#methods:destroy} destroy the circular gauge widget. all events bound using this._on will be unbind automatically and bring the control to pre-init state. #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.destroy(); </script>{% endhighlight %} ### exportImage() {:#methods:exportimage} To export Image <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.fileName{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">fileName for the Image</td> </tr> <tr> <td class="name">{% highlight html %} argument.fileType{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">fileType for the Image</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.exportImage("myImage","jpeg"); </script>{% endhighlight %} ### getBackNeedleLength() {:#methods:getbackneedlelength} To get BackNeedleLength <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true }] }] }); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getBackNeedleLength(0, 0); </script>{% endhighlight %} ### getCustomLabelAngle() {:#methods:getcustomlabelangle} To get CustomLabelAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{textAngle:30,value:"MyLabel",position:{x:250,y:300},color:"#fc0606",font:{size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getCustomLabelAngle(0, 0); </script>{% endhighlight %} ### getCustomLabelValue() {:#methods:getcustomlabelvalue} To get CustomLabelValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{textAngle:30,value:"MyLabel",position:{x:250,y:300},color:"#fc0606",font:{size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getCustomLabelValue(0, 0); </script>{% endhighlight %} ### getLabelAngle() {:#methods:getlabelangle} To get LabelAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getLabelAngle(0, 0); </script>{% endhighlight %} ### getLabelDistanceFromScale() {:#methods:getlabeldistancefromscale} To get LabelDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getLabelDistanceFromScale(0, 0); </script>{% endhighlight %} ### getLabelPlacement() {:#methods:getlabelplacement} To get LabelPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getLabelPlacement(0, 0); </script>{% endhighlight %} ### getLabelStyle() {:#methods:getlabelstyle} To get LabelStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getLabelStyle(0, 0); </script>{% endhighlight %} ### getMajorIntervalValue() {:#methods:getmajorintervalvalue} To get MajorIntervalValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getMajorIntervalValue(0); </script>{% endhighlight %} ### getMarkerDistanceFromScale() {:#methods:getmarkerdistancefromscale} To get MarkerDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getMarkerDistanceFromScale(0, 0); </script>{% endhighlight %} ### getMarkerStyle() {:#methods:getmarkerstyle} To get MarkerStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getMarkerStyle(0, 0); </script>{% endhighlight %} ### getMaximumValue() {:#methods:getmaximumvalue} To get MaximumValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getMaximumValue(0); </script>{% endhighlight %} ### getMinimumValue() {:#methods:getminimumvalue} To get MinimumValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getMinimumValue(0); </script>{% endhighlight %} ### getMinorIntervalValue() {:#methods:getminorintervalvalue} To get MinorIntervalValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getMinorIntervalValue(0); </script>{% endhighlight %} ### getNeedleStyle() {:#methods:getneedlestyle} To get NeedleStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getNeedleStyle(0, 0); </script>{% endhighlight %} ### getPointerCapBorderWidth() {:#methods:getpointercapborderwidth} To get PointerCapBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getPointerCapBorderWidth(0); </script>{% endhighlight %} ### getPointerCapRadius() {:#methods:getpointercapradius} To get PointerCapRadius <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getPointerCapRadius(0); </script>{% endhighlight %} ### getPointerLength() {:#methods:getpointerlength} To get PointerLength <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getPointerLength(0, 0); </script>{% endhighlight %} ### getPointerNeedleType() {:#methods:getpointerneedletype} To get PointerNeedleType <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getPointerNeedleType(0, 0); </script>{% endhighlight %} ### getPointerPlacement() {:#methods:getpointerplacement} To get PointerPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getPointerPlacement(0, 0); </script>{% endhighlight %} ### getPointerValue() {:#methods:getpointervalue} To get PointerValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getPointerValue(0, 0); </script>{% endhighlight %} ### getPointerWidth() {:#methods:getpointerwidth} To get PointerWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getPointerWidth(0, 0); </script>{% endhighlight %} ### getRangeBorderWidth() {:#methods:getrangeborderwidth} To get RangeBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getRangeBorderWidth(0, 0); </script>{% endhighlight %} ### getRangeDistanceFromScale() {:#methods:getrangedistancefromscale} To get RangeDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getRangeDistanceFromScale(0, 0); </script>{% endhighlight %} ### getRangeEndValue() {:#methods:getrangeendvalue} To get RangeEndValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getRangeEndValue(0, 0); </script>{% endhighlight %} ### getRangePosition() {:#methods:getrangeposition} To get RangePosition <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getRangePosition(0, 0); </script>{% endhighlight %} ### getRangeSize() {:#methods:getrangesize} To get RangeSize <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getRangeSize(0, 0); </script>{% endhighlight %} ### getRangeStartValue() {:#methods:getrangestartvalue} To get RangeStartValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getRangeStartValue(0, 0); </script>{% endhighlight %} ### getScaleBarSize() {:#methods:getscalebarsize} To get ScaleBarSize <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getScaleBarSize(0); </script>{% endhighlight %} ### getScaleBorderWidth() {:#methods:getscaleborderwidth} To get ScaleBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, size: 6, border:{Width: 1.5} }] }); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getScaleBorderWidth(0); </script>{% endhighlight %} ### getScaleDirection() {:#methods:getscaledirection} To get ScaleDirection <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getScaleDirection(0); </script>{% endhighlight %} ### getScaleRadius() {:#methods:getscaleradius} To get ScaleRadius <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getScaleRadius(0); </script>{% endhighlight %} ### getStartAngle() {:#methods:getstartangle} To get StartAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getStartAngle(0); </script>{% endhighlight %} ### getSubGaugeLocation() {:#methods:getsubgaugelocation} To get SubGaugeLocation <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.GaugeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">GaugeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 400,width: 200,position: { x: 200, y: 150 }}]}]}); circulargaugeObj.getSubGaugeLocation(0, 0); </script>{% endhighlight %} ### getSweepAngle() {:#methods:getsweepangle} To get SweepAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getSweepAngle(0); </script>{% endhighlight %} ### getTickAngle() {:#methods:gettickangle} To get TickAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getTickAngle(0, 0); </script>{% endhighlight %} ### getTickDistanceFromScale() {:#methods:gettickdistancefromscale} To get TickDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getTickDistanceFromScale(0, 0); </script>{% endhighlight %} ### getTickHeight() {:#methods:gettickheight} To get TickHeight <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getTickHeight(0, 0); </script>{% endhighlight %} ### getTickPlacement() {:#methods:gettickplacement} To get TickPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getTickPlacement(0, 0); </script>{% endhighlight %} ### getTickStyle() {:#methods:gettickstyle} To get TickStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getTickStyle(0, 0); </script>{% endhighlight %} ### getTickWidth() {:#methods:gettickwidth} To get TickWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.getTickWidth(0, 0); </script>{% endhighlight %} ### includeFirstValue() {:#methods:includefirstvalue} To set includeFirstValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.includeFirstValue(0, 0, false); </script>{% endhighlight %} ### redraw() {:#methods:redraw} Switching the redraw option for the gauge <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">redraw value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.redraw("scale"); </script>{% endhighlight %} ### setBackNeedleLength() {:#methods:setbackneedlelength} To set BackNeedleLength <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true }] }] }); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setBackNeedleLength(0, 0, 10); </script>{% endhighlight %} ### setCustomLabelAngle() {:#methods:setcustomlabelangle} To set CustomLabelAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{value:"MyLabel",position:{x:250,y:300},color:"#fc0606",font: { size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setCustomLabelAngle(0, 0, 10); </script>{% endhighlight %} ### setCustomLabelValue() {:#methods:setcustomlabelvalue} To set CustomLabelValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{value:"MyLabel",position:{x:180,y:300},color:"#fc0606",font:{size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setCustomLabelValue(0, 0, "CircularGauge"); </script>{% endhighlight %} ### setLabelAngle() {:#methods:setlabelangle} To set LabelAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">angle value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setLabelAngle(0, 0, 10); </script>{% endhighlight %} ### setLabelDistanceFromScale() {:#methods:setlabeldistancefromscale} To set LabelDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setLabelDistanceFromScale(0, 0, 10); </script>{% endhighlight %} ### setLabelPlacement() {:#methods:setlabelplacement} To set LabelPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setLabelPlacement(0, 0, "far"); </script>{% endhighlight %} ### setLabelStyle() {:#methods:setlabelstyle} To set LabelStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">labelIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setLabelStyle(0, 0, "major"); </script>{% endhighlight %} ### setMajorIntervalValue() {:#methods:setmajorintervalvalue} To set MajorIntervalValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setMajorIntervalValue(0, 10); </script>{% endhighlight %} ### setMarkerDistanceFromScale() {:#methods:setmarkerdistancefromscale} To set MarkerDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setMarkerDistanceFromScale(0, 0, 10); </script>{% endhighlight %} ### setMarkerStyle() {:#methods:setmarkerstyle} To set MarkerStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setMarkerStyle(0, 0, "rectangle"); </script>{% endhighlight %} ### setMaximumValue() {:#methods:setmaximumvalue} To set MaximumValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setMaximumValue(0, 130); </script>{% endhighlight %} ### setMinimumValue() {:#methods:setminimumvalue} To set MinimumValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setMinimumValue(0, 10); </script>{% endhighlight %} ### setMinorIntervalValue() {:#methods:setminorintervalvalue} To set MinorIntervalValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setMinorIntervalValue(0, 2); </script>{% endhighlight %} ### setNeedleStyle() {:#methods:setneedlestyle} To set NeedleStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setNeedleStyle(0, 0, "arrow"); </script>{% endhighlight %} ### setPointerCapBorderWidth() {:#methods:setpointercapborderwidth} To set PointerCapBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setPointerCapBorderWidth(0, 5); </script>{% endhighlight %} ### setPointerCapRadius() {:#methods:setpointercapradius} To set PointerCapRadius <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setPointerCapRadius(0, 10); </script>{% endhighlight %} ### setPointerLength() {:#methods:setpointerlength} To set PointerLength <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setPointerLength(0, 0, 90); </script>{% endhighlight %} ### setPointerNeedleType() {:#methods:setpointerneedletype} To set PointerNeedleType <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setPointerNeedleType(0, 0, "triangle"); </script>{% endhighlight %} ### setPointerPlacement() {:#methods:setpointerplacement} To set PointerPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setPointerPlacement(0, 0,"near"); </script>{% endhighlight %} ### setPointerValue() {:#methods:setpointervalue} To set PointerValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setPointerValue(0, 0, 10); </script>{% endhighlight %} ### setPointerWidth() {:#methods:setpointerwidth} To set PointerWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setPointerWidth(0, 0, 10); </script>{% endhighlight %} ### setRangeBorderWidth() {:#methods:setrangeborderwidth} To set RangeBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setRangeBorderWidth(0, 0, 5); </script>{% endhighlight %} ### setRangeDistanceFromScale() {:#methods:setrangedistancefromscale} To set RangeDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setRangeDistanceFromScale(0, 0, 10); </script>{% endhighlight %} ### setRangeEndValue() {:#methods:setrangeendvalue} To set RangeEndValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setRangeEndValue(0, 0, 70); </script>{% endhighlight %} ### setRangePosition() {:#methods:setrangeposition} To set RangePosition <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setRangePosition(0, 0, "far"); </script>{% endhighlight %} ### setRangeSize() {:#methods:setrangesize} To set RangeSize <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setRangeSize(0, 0, 10); </script>{% endhighlight %} ### setRangeStartValue() {:#methods:setrangestartvalue} To set RangeStartValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setRangeStartValue(0, 0, 10); </script>{% endhighlight %} ### setScaleBarSize() {:#methods:setscalebarsize} To set ScaleBarSize <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setScaleBarSize(0, 160); </script>{% endhighlight %} ### setScaleBorderWidth() {:#methods:setscaleborderwidth} To set ScaleBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, size: 6, border:{width: 1.5} }] }); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setScaleBorderWidth(0, 3); </script>{% endhighlight %} ### setScaleDirection() {:#methods:setscaledirection} To set ScaleDirection <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setScaleDirection(0, "clockwise"); </script>{% endhighlight %} ### setScaleRadius() {:#methods:setscaleradius} To set ScaleRadius <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setScaleRadius(0, 140); </script>{% endhighlight %} ### setStartAngle() {:#methods:setstartangle} To set StartAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setStartAngle(0, 10); </script>{% endhighlight %} ### setSubGaugeLocation() {:#methods:setsubgaugelocation} To set SubGaugeLocation <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.GaugeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">GaugeIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <div id="subGauge1"> </div> <script> $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]}); $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 400,width: 200,position: { x: 200, y: 150 }}]}]}); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setSubGaugeLocation(0, 0, {x:50,y:100}); </script>{% endhighlight %} ### setSweepAngle() {:#methods:setsweepangle} To set SweepAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setSweepAngle(0, 220); </script>{% endhighlight %} ### setTickAngle() {:#methods:settickangle} To set TickAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setTickAngle(0, 0, 10); </script>{% endhighlight %} ### setTickDistanceFromScale() {:#methods:settickdistancefromscale} To set TickDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setTickDistanceFromScale(0, 0, 15); </script>{% endhighlight %} ### setTickHeight() {:#methods:settickheight} To set TickHeight <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setTickHeight(0, 0, 10); </script>{% endhighlight %} ### setTickPlacement() {:#methods:settickplacement} To set TickPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setTickPlacement(0, 0, "near"); </script>{% endhighlight %} ### setTickStyle() {:#methods:settickstyle} To set TickStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setTickStyle(0, 0, "minor"); </script>{% endhighlight %} ### setTickWidth() {:#methods:settickwidth} To set TickWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.tickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">tickIndex value for the gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"></div> <script> $("#CoreCircularGauge").ejCircularGauge(); var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge"); circulargaugeObj.setTickWidth(0, 0, 5); </script>{% endhighlight %} ## Events ### drawCustomLabel {:#events:drawcustomlabel} Triggers while the custom labels are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the custom label</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the custom label belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the custom label style</td> </tr> <tr> <td class="name">{% highlight html %} customLabelElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the current custom label element.</td> </tr> <tr> <td class="name">{% highlight html %} customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the custom label.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ drawCustomLabel: function (args) {} }); </script>{% endhighlight %} ### drawIndicators {:#events:drawindicators} Triggers while the indicators are being started to drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the indicator</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the indicator belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the indicator style</td> </tr> <tr> <td class="name">{% highlight html %} indicatorElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the current indicator element.</td> </tr> <tr> <td class="name">{% highlight html %} indicatorIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the indicator.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ drawIndicators: function (args) {} }); </script>{% endhighlight %} ### drawLabels {:#events:drawlabels} Triggers while the labels are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the labels</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the label belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the label style</td> </tr> <tr> <td class="name">{% highlight html %} label{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the label object of the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the labels.</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the current label element.</td> </tr> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the label.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} pointerValue{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the label.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ drawLabels: function (args) {} }); </script>{% endhighlight %} ### drawPointerCap {:#events:drawpointercap} Triggers while the pointer cap is being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the pointer cap.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer cap style</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ drawPointerCap: function (args) {} }); </script>{% endhighlight %} ### drawPointers {:#events:drawpointers} Triggers while the pointers are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the pointer</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} pointer{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the pointer object of the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the pointer.</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the current pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the pointer.</td> </tr> <tr> <td class="name">{% highlight html %} value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the pointer.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ drawPointers: function (args) {} }); </script>{% endhighlight %} ### drawRange {:#events:drawrange} Triggers when the ranges begin to be getting drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the range</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the range belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the range style</td> </tr> <tr> <td class="name">{% highlight html %} rangeElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the current range element.</td> </tr> <tr> <td class="name">{% highlight html %} rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the range.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ drawRange: function (args) {} }); </script>{% endhighlight %} ### drawTicks {:#events:drawticks} Triggers while the ticks are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the ticks</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the tick belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the ticks style</td> </tr> <tr> <td class="name">{% highlight html %} tick{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the tick object of the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the tick.</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the current tick element.</td> </tr> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the tick.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} pointerValue{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the label value of the tick.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ drawTicks: function (args) {} }); </script>{% endhighlight %} ### load {:#events:load} Triggers while the gauge start to Load. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the entire scale element.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CircularGauge1"></div> <script> $("#CircularGauge1").ejCircularGauge({ load: function (args) {} }); </script> {% endhighlight %} ### mouseClick {:#events:mouseclick} Triggers when the left mouse button is clicked. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the name of the event</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} pointer{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the pointer object <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the pointer Index</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the pointer.</td> </tr> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the pointer.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the pointer.</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ mouseClick: function (args) {} }); </script>{% endhighlight %} ### mouseClickMove {:#events:mouseclickmove} Triggers when clicking and dragging the mouse pointer over the gauge pointer. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the name of the event</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} pointer{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the pointer object <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the pointer Index</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the pointer.</td> </tr> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the pointer.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the pointer.</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ mouseClickMove: function (args) {} }); </script>{% endhighlight %} ### mouseClickUp {:#events:mouseclickup} Triggers when the mouse click is released. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the name of the event</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} pointer{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the pointer object <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the pointer Index</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the pointer.</td> </tr> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the pointer.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the startX and startY of the pointer.</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ mouseClickUp: function (args) {} }); </script>{% endhighlight %} ### renderComplete {:#events:rendercomplete} Triggers when the rendering of the gauge is completed. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the entire scale element.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="CoreCircularGauge"> </div> <script> $("#CoreCircularGauge").ejCircularGauge({ renderComplete: function (args) {} }); </script>{% endhighlight %}</summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejColorPicker' : function (element){
		///<signature>
			///<summary> The ColorPicker control provides you a rich visual interface for color selection. You can select the color from the professionally designed palettes or custom color. By clicking a point on the color, you can change the active color to the color that is located under the pointer. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for color picker</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDatePicker' : function (element){
		///<signature>
			///<summary> Input field that display the DatePicker calendar as popup to select and set the date value </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for Date Picker.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDateTimePicker' : function (element){
		///<signature>
			///<summary> The DateTimePicker control is used to input the date and time with a specific format. It combines the DatePicker and TimePicker controls so that users can select the date and time with their desired format. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for Date Picker.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDiagram' : function(){
		///<signature>
			///<summary> <ts root="datavisualization" /> The diagram control provides 2D surface to visualize the data as shapes, lines, text and images. It can be configured to DOM element such as DIV. </summary>
		///</signature>
	},
	'ejDialog' : function (element){
		///<signature>
			///<summary> The Dialog control displays a Dialog window within a web page. The Dialog enables a message to be displayed, such as supplementary content like images and text, and an interactive content like forms. </summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDraggable' : function(){
		///<signature>
			///<summary> Plugin to make any DOM element draggable. </summary>
		///</signature>
	},
	'ejDropDownList' : function(){
		///<signature>
			///<summary> The DropDownList control provides a list of options to choose an item from the list. It can including other HTML elements such as images, textboxes, check box, radio buttons, and so on. </summary>
		///</signature>
	},
	'ejDroppable' : function(){
		///<signature>
			///<summary> Plugin to make any DOM element Droppable. </summary>
		///</signature>
	},
	'ejFileExplorer' : function (element){
		///<signature>
			///<summary> FileExplorer provides a Windows Explorer-like functionality for any web application. It allows end-users to browse, select and upload files or change the folder structure by renaming, moving and deleting files or folders. File and folder management capabilities are fully customizable and can be disabled when necessary. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for FileExplorer.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejGantt' : function(){
		///<signature>
			///<summary>. The Essential JavaScript Gantt control is designed to visualize and edit the project schedule, and track the project progress. </summary>
		///</signature>
	},
	'ejGroupButton' : function (element){
		///<signature>
			///<summary> The Essential JavaScript Group Button widget helps to display multiple buttons which are stacked together in a single line and used as a navigation component. Also it manages the checked/unchecked state for a set of buttons, since it supports radio and check button modes. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >Settings for GroupButton</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejKanban' : function(){
		///<signature>
			///<summary> The Kanban can be easily configured to the DOM element, such as div. you can create a Kanban with a highly customizable look and feel. </summary>
		///</signature>
	},
	'ejLinearGauge' : function (element){
		///<signature>
			///<summary> <ts root="datavisualization" /> The Linear gauge can be easily configured to the DOM element, such as div. you can create a linear gauge with a highly customizable look and feel. $(element).ejLinearGauge(options) <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} options{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">For setting the Linear gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $('#LinearGauge1').ejLinearGauge(); </script>{% endhighlight %} Requires {:.require} * module:jQuery * module:ej.common.all * module:excanvas.js ## Members ### animationSpeed `number` {:#members:animationspeed} Specifies the animationSpeed #### Default Value * 500 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ animationSpeed: 1000, value:50}); </script> {% endhighlight %} ### backgroundColor `string` {:#members:backgroundcolor} Specifies the backgroundColor for Linear gauge. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ backgroundColor: "Red" }); </script> {% endhighlight %} ### borderColor `string` {:#members:bordercolor} Specifies the borderColor for Linear gauge. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ borderColor: "Red" }); </script> {% endhighlight %} ### enableAnimation `boolean` {:#members:enableanimation} Specifies the animate state #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ enableAnimation: true, value:50}); </script> {% endhighlight %} ### enableMarkerPointerAnimation `boolean` {:#members:enablemarkerpointeranimation} Specifies the animate state for marker pointer #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ enableMarkerPointerAnimation: true, value:50}); </script> {% endhighlight %} ### isResponsive `boolean` {:#members:isresponsive} Specifies the can resize state. #### Default Value * false #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ isResponsive: true }); </script> {% endhighlight %} ### frame `object` {:#members:frame} Specify frame of linear gauge #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"> </div> <script> $("#LinearGauge1").ejLinearGauge({ frame: { backgroundImageUrl:null, outerWidth:12, innerWidth:8 } }); </script>{% endhighlight %} ### frame.backgroundImageUrl `string` {:#members:frame-backgroundimageurl} Specifies the frame background image URL of linear gauge #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ frame:{backgroundImageUrl: "bg.png"} }); </script> {% endhighlight %} ### frame.innerWidth `number` {:#members:frame-innerwidth} Specifies the frame InnerWidth #### Default Value * 8 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ frame:{innerWidth: 9}}); </script> {% endhighlight %} ### frame.outerWidth `number` {:#members:frame-outerwidth} Specifies the frame OuterWidth #### Default Value * 12 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ frame:{outerWidth: 13 }}); </script> {% endhighlight %} ### height `number` {:#members:height} Specifies the height of Linear gauge. #### Default Value * 400 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ height: 360 }); </script> {% endhighlight %} ### labelColor `string` {:#members:labelcolor} Specifies the labelColor for Linear gauge. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ labelColor: "Red" }); </script> {% endhighlight %} ### maximum `number` {:#members:maximum} Specifies the maximum value of Linear gauge. #### Default Value * 100 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ maximum: 110 }); </script> {% endhighlight %} ### minimum `number` {:#members:minimum} Specifies the minimum value of Linear gauge. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ minimum: 10 }); </script> {% endhighlight %} ### orientation `string` {:#members:orientation} Specifies the orientation for Linear gauge. #### Default Value * "Vertical" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ orientation: "Vertical" }); </script> {% endhighlight %} ### outerCustomLabelPosition `enum` {:#members:outercustomlabelposition} <ts name = "ej.datavisualization.LinearGauge.OuterCustomLabelPosition"/> Specify labelPosition value of Linear gauge See <a href="global.html#OuterCustomLabelPosition">OuterCustomLabelPosition</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Left</td> <td class="type">string</td> <td class="description">Label will be placed on left side of the gauge</td> </tr> <tr> <td class="name"> Right</td> <td class="type">string</td> <td class="description">Label will be placed on right side of the gauge</td> </tr> <tr> <td class="name"> Top</td> <td class="type">string</td> <td class="description">Label will be placed on top of the gauge</td> </tr> <tr> <td class="name"> Bottom</td> <td class="type">string</td> <td class="description">Label will be placed on bottom of the gauge</td> </tr> </tbody> </table> #### Default Value * bottom #### Example {% highlight html %} <div id="CoreLinearGauge"> </div> <script> $("#CoreLinearGauge").ejLinearGauge({ outerCustomLabelPosition:"top" }); </script>{% endhighlight %} ### pointerGradient1 `object` {:#members:pointergradient1} Specifies the pointerGradient1 for Linear gauge. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ pointerGradient1: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } }); </script> {% endhighlight %} ### pointerGradient2 `object` {:#members:pointergradient2} Specifies the pointerGradient2 for Linear gauge. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ pointerGradient2: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } }); </script> {% endhighlight %} ### readOnly `boolean` {:#members:readonly} Specifies the read only state. #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ readOnly: false }); </script> {% endhighlight %} ### scales `object` {:#members:scales} Specifies the scales #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{}]}); </script> {% endhighlight %} ### scales.backgroundColor `string` {:#members:scales-backgroundcolor} Specifies the backgroundColor of the Scale. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{backgroundColor:"red"}]}); </script> {% endhighlight %} ### scales.barPointers `Array` {:#members:scales-barpointers} Specifies the scaleBar Gradient of bar pointer #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{}]}]}); </script> {% endhighlight %} ### scales.barPointers.backgroundColor `string` {:#members:scales-barpointers-backgroundcolor} Specifies the backgroundColor of bar pointer #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, backgroundColor: "red"}]}]}); </script> {% endhighlight %} ### scales.barPointers.border `object` {:#members:scales-barpointers-border} Specifies the border of bar pointer #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, border:{color: "red", width:1.5}}]}]}); </script> {% endhighlight %} ### scales.barPointers.border.color `string` {:#members:scales-barpointers-border-color} Specifies the border Color of bar pointer #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, border:{color: "red"}}]}]}); </script> {% endhighlight %} ### scales.barPointers.border.width `number` {:#members:scales-barpointers-border-width} Specifies the border Width of bar pointer #### Default Value * 1.5 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, border:{width: 2}}]}]}); </script> {% endhighlight %} ### scales.barPointers.distanceFromScale `number` {:#members:scales-barpointers-distancefromscale} Specifies the distanceFromScale of bar pointer #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, distanceFromScale: 20}]}]}); </script> {% endhighlight %} ### scales.barPointers.gradients `object` {:#members:scales-barpointers-gradients} Specifies the scaleBar Gradient of bar pointer #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, gradients: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}]}]}); </script> {% endhighlight %} ### scales.barPointers.opacity `number` {:#members:scales-barpointers-opacity} Specifies the opacity of bar pointer #### Default Value * 1 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.barPointers.value `number` {:#members:scales-barpointers-value} Specifies the value of bar pointer #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value: 100}]}]}); </script> {% endhighlight %} ### scales.barPointers.width `number` {:#members:scales-barpointers-width} Specifies the pointer Width of bar pointer #### Default Value * width=30 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{barPointers:[{value:50, width: 25}]}]}); </script> {% endhighlight %} ### scales.border `object` {:#members:scales-border} Specifies the border of the Scale. #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{border:{color:"red", width:1.5}}]}); </script> {% endhighlight %} ### scales.border.color `string` {:#members:scales-border-color} Specifies the border color of the Scale. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{border:{color:"red"}}]}); </script> {% endhighlight %} ### scales.border.width `number` {:#members:scales-border-width} Specifies the border width of the Scale. #### Default Value * 1.5 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{border:{width:2.5}}]}); </script> {% endhighlight %} ### scales.customLabels `Array` {:#members:scales-customlabels} Specifies the customLabel #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.color `number` {:#members:scales-customlabels-color} Specifies the label Color in customLabels #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"yellow", font: { size: "20px",fontFamily: "Arial", fontStyle: "Bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.font `object` {:#members:scales-customlabels-font} Specifies the font in customLabels #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.font.fontFamily `string` {:#members:scales-customlabels-font-fontfamily} Specifies the fontFamily in customLabels #### Default Value * "Arial" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.font.fontStyle `enum` {:#members:scales-customlabels-font-fontstyle} <ts name = "ej.datavisualization.LinearGauge.FontStyle"/> Specifies the fontStyle in customLabels. See <a href="global.html#FontStyle">FontStyle</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Bold</td> <td class="type">string</td> <td class="description">Sets the font style as bold</td> </tr> <tr> <td class="name"> Italic</td> <td class="type">string</td> <td class="description">Sets the font style as italic</td> </tr> <tr> <td class="name"> Regular</td> <td class="type">string</td> <td class="description">Sets the font style as regular</td> </tr> <tr> <td class="name"> Strikeout</td> <td class="type">string</td> <td class="description">Sets the font style as strikeout</td> </tr> <tr> <td class="name"> Underline</td> <td class="type">string</td> <td class="description">Sets the font style as underline</td> </tr> </tbody> </table> #### Default Value * Bold #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.font.size `string` {:#members:scales-customlabels-font-size} Specifies the font size in customLabels #### Default Value * "11px" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.opacity `string` {:#members:scales-customlabels-opacity} Specifies the opacity in customLabels #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606",opacity:0.5, font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.position `object` {:#members:scales-customlabels-position} Specifies the position in customLabels #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"LinearGauge", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.position.x `number` {:#members:scales-customlabels-position-x} Specifies the position x in customLabels #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ textAngle: 20,value:"LinearGauge", position:{x:10,y:50}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.position.y `number` {:#members:scales-customlabels-position-y} Specifies the y in customLabels #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ textAngle: 20,value:"LinearGauge", position:{x:49,y:10}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.positionType `object` {:#members:scales-customlabels-positiontype} Specifies the positionType in customLabels.See <a href="global.html#CustomLabelPositionType">CustomLabelPositionType</a> #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ positionType:"outer",value:"LinearGauge", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.textAngle `number` {:#members:scales-customlabels-textangle} Specifies the textAngle in customLabels #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ textAngle: 20,value:"LinearGauge", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.customLabels.value `string` {:#members:scales-customlabels-value} Specifies the label Value in customLabels #### Default Value * "" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"LinearGauge", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); </script> {% endhighlight %} ### scales.direction `enum` {:#members:scales-direction} <ts name = "ej.datavisualization.LinearGauge.Direction"/> Specifies the scale Direction of the Scale. See <a href="global.html#Directions">Directions</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Clockwise</td> <td class="type">string</td> <td class="description">Specify the scale direction as clockwise</td> </tr> <tr> <td class="name"> CounterClockwise</td> <td class="type">string</td> <td class="description">Specify the scale direction as counterclockwise</td> </tr> </tbody> </table> #### Default Value * CounterClockwise #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{direction:ej.datavisualization.LinearGauge.Directions.Clockwise}]}); </script> {% endhighlight %} ### scales.indicators `Array` {:#members:scales-indicators} Specifies the indicator #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({scales: [{showBarPointers: false, showIndicators: true, length: 310, indicators: [{ font: {size: "11px",fontFamily: "Arial",fontStyle: "bold"},height: 30, type: "rectangle",width: 30,position: {x: 60,y: 70},textLocation: {x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 50,backgroundColor: "Red",borderColor: "Green",textColor: null}], value: 0, backgroundColor: "Red", border:{color: "Red", width: 1.5}, opacity: NaN}]}]}); </script> {% endhighlight %} ### scales.indicators.backgroundColor `string` {:#members:scales-indicators-backgroundcolor} Specifies the backgroundColor in bar indicators #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}], backgroundColor:"green"}]}]}); </script> {% endhighlight %} ### scales.indicators.border `number` {:#members:scales-indicators-border} Specifies the border in bar indicators #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}], border:{color:"red", width: 5}}]}]}); </script> {% endhighlight %} ### scales.indicators.border.color `string` {:#members:scales-indicators-border-color} Specifies the border Color in bar indicators #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}], border:{color: "Red"}}]}]}); </script> {% endhighlight %} ### scales.indicators.border.width `number` {:#members:scales-indicators-border-width} Specifies the border Width in bar indicators #### Default Value * 1.5 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}], border:{width: 5}}]}]}); </script> {% endhighlight %} ### scales.indicators.font `object` {:#members:scales-indicators-font} Specifies the font of bar indicators #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "bold" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.font.fontFamily `string` {:#members:scales-indicators-font-fontfamily} Specifies the fontFamily of font in bar indicators #### Default Value * "Arial" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Segoe UI", fontStyle: "bold" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.font.fontStyle `enum` {:#members:scales-indicators-font-fontstyle} <ts ref = "ej.datavisualization.LinearGauge.FontStyle"/> Specifies the fontStyle of font in bar indicators. See <a href="global.html#FontStyle">FontStyle</a> #### Default Value * ej.datavisualization.LinearGauge.FontStyle.Bold #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.font.size `string` {:#members:scales-indicators-font-size} Specifies the size of font in bar indicators #### Default Value * "11px" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "20px", fontFamily: "Arial", fontStyle: "bold" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.height `number` {:#members:scales-indicators-height} Specifies the indicator Height of bar indicators #### Default Value * 30 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ type: "rectangle",height: 50, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.indicators.opacity `number` {:#members:scales-indicators-opacity} Specifies the opacity in bar indicators #### Default Value * NaN #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ readonly:false, scales: [{showBarPointers: false, showIndicators: true, indicators: [{height: 30, type: "rectangle",position: {x: 80,y: 110}, stateRanges: [{endValue: 80,startValue: 50,backgroundColor: "Red",borderColor: "Green",textColor: null}], value: 0, backgroundColor: "Red", border:{color: "Green"}, opacity:0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.position `object` {:#members:scales-indicators-position} Specifies the position in bar indicators #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.indicators.position.x `number` {:#members:scales-indicators-position-x} Specifies the x position in bar indicators #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 20,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.indicators.position.y `number` {:#members:scales-indicators-position-y} Specifies the y position in bar indicators #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 100}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.indicators.stateRanges `Array` {:#members:scales-indicators-stateranges} Specifies the state ranges in bar indicators #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.stateRanges.backgroundColor `string` {:#members:scales-indicators-stateranges-backgroundcolor} Specifies the backgroundColor in bar indicators state ranges #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Red",borderColor: "Green"}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.indicators.stateRanges.borderColor `string` {:#members:scales-indicators-stateranges-bordercolor} Specifies the borderColor in bar indicators state ranges #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.indicators.stateRanges.endValue `number` {:#members:scales-indicators-stateranges-endvalue} Specifies the endValue in bar indicators state ranges #### Default Value * 60 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 }, stateRanges: [{ endValue: 90, startValue: 40, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.stateRanges.startValue `number` {:#members:scales-indicators-stateranges-startvalue} Specifies the startValue in bar indicators state ranges #### Default Value * 50 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 }, stateRanges: [{ endValue: 90, startValue: 40, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.stateRanges.text `string` {:#members:scales-indicators-stateranges-text} Specifies the text in bar indicators state ranges #### Default Value * "" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 20, y: 100 }, stateRanges: [{ endValue: 90, startValue: 40, textColor: "Green", text: "Linear Gauge" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.stateRanges.textColor `string` {:#members:scales-indicators-stateranges-textcolor} Specifies the textColor in bar indicators state ranges #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 }, stateRanges: [{ endValue: 90, startValue: 40, textColor: "Red", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.textLocation `object` {:#members:scales-indicators-textlocation} Specifies the textLocation in bar indicators #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.textLocation.x `number` {:#members:scales-indicators-textlocation-x} Specifies the textLocation position in bar indicators #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 0 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.textLocation.y `number` {:#members:scales-indicators-textlocation-y} Specifies the Y position in bar indicators #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30, type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 }, stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.indicators.type `enum` {:#members:scales-indicators-type} <ts name = "ej.datavisualization.LinearGauge.IndicatorTypes"/> Specifies the indicator Style of font in bar indicators <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Rectangle</td> <td class="type">string</td> <td class="description">Style of the indicator will be rectangle</td> </tr> <tr> <td class="name"> Circle</td> <td class="type">string</td> <td class="description">Style of the indicator will be Circle</td> </tr> <tr> <td class="name"> RoundedRectangle</td> <td class="type">string</td> <td class="description">Style of the indicator will be rounded rectangle</td> </tr> <tr> <td class="name"> Text</td> <td class="type">string</td> <td class="description">Style of the indicator will be text</td> </tr> </tbody> </table> #### Default Value * ej.datavisualization.LinearGauge.IndicatorType.Rectangle #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ height: 30,type: "rectangle",width: 30, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.indicators.width `number` {:#members:scales-indicators-width} Specifies the indicator Width in bar indicators #### Default Value * 30 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{ type: "rectangle",width: 50, position: { x: 0,y: 0}, stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}], border:{width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.labels `Array` {:#members:scales-labels} Specifies the labels. #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{distanceFromScale:{y:1}}]}]}); </script> {% endhighlight %} ### scales.labels.angle `number` {:#members:scales-labels-angle} Specifies the angle of labels. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{angle:30}]}]}); </script> {% endhighlight %} ### scales.labels.distanceFromScale `object` {:#members:scales-labels-distancefromscale} Specifies the DistanceFromScale of labels. #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{distanceFromScale:{x:10, y:10}}]}]}); </script> {% endhighlight %} ### scales.labels.distanceFromScale.x `number` {:#members:scales-labels-distancefromscale-x} Specifies the xDistanceFromScale of labels. #### Default Value * -10 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{distanceFromScale:{x:10}}]}]}); </script> {% endhighlight %} ### scales.labels.distanceFromScale.y `number` {:#members:scales-labels-distancefromscale-y} Specifies the yDistanceFromScale of labels. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{distanceFromScale:{y:20}}]}]}); </script> {% endhighlight %} ### scales.labels.font `object` {:#members:scales-labels-font} Specifies the font of labels. #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{font:{size: "11px"}}]}]}); </script> {% endhighlight %} ### scales.labels.font.fontFamily `string` {:#members:scales-labels-font-fontfamily} Specifies the fontFamily of font. #### Default Value * "Arial" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{font:{fontFamily: "Segoe UI"}}]}]}); </script> {% endhighlight %} ### scales.labels.font.fontStyle `enum` {:#members:scales-labels-font-fontstyle} <ts ref = "ej.datavisualization.LinearGauge.FontStyle"/> Specifies the fontStyle of font.See <a href="global.html#FontStyle">FontStyle</a> #### Default Value * ej.datavisualization.LinearGauge.FontStyle.Bold #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{font:{fontStyle: ej.datavisualization.LinearGauge.FontStyle.Normal}}]}]}); </script> {% endhighlight %} ### scales.labels.font.size `string` {:#members:scales-labels-font-size} Specifies the size of font. #### Default Value * "11px" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{font:{size: "18px"}}]}]}); </script> {% endhighlight %} ### scales.labels.includeFirstValue `boolean` {:#members:scales-labels-includefirstvalue} need to includeFirstValue. #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{includeFirstValue: false}]}]}); </script> {% endhighlight %} ### scales.labels.opacity `number` {:#members:scales-labels-opacity} Specifies the opacity of label. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.labels.placement `enum` {:#members:scales-labels-placement} <ts name = "ej.datavisualization.LinearGauge.PointerPlacement"/> Specifies the label Placement of label. See <a href="global.html#LabelPlacement">LabelPlacement</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Near</td> <td class="type">string</td> <td class="description">Specify the label placement as near</td> </tr> <tr> <td class="name"> Far</td> <td class="type">string</td> <td class="description">Specify the label placement as far</td> </tr> <tr> <td class="name"> Center</td> <td class="type">string</td> <td class="description">Specify the label placement as center</td> </tr> </tbody> </table> #### Default Value * Near #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{placement: ej.datavisualization.LinearGauge.LabelPlacement.Far}]}]}); </script> {% endhighlight %} ### scales.labels.textColor `string` {:#members:scales-labels-textcolor} Specifies the textColor of font. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{textColor: "green"}]}]}); </script> {% endhighlight %} ### scales.labels.type `enum` {:#members:scales-labels-type} <ts name = "ej.datavisualization.LinearGauge.ScaleType"/> Specifies the label Style of label. See <a href="global.html#LabelType">LabelType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Major</td> <td class="type">string</td> <td class="description">Specifies the label style as major</td> </tr> <tr> <td class="name"> Minor</td> <td class="type">string</td> <td class="description">Specifies the label style as minor</td> </tr> </tbody> </table> #### Default Value * ej.datavisualization.LinearGauge.LabelType.Major #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{type: ej.datavisualization.LinearGauge.LabelType.Major}]}]}); </script> {% endhighlight %} ### scales.labels.unitText `string` {:#members:scales-labels-unittext} Specifies the unitText of label. #### Default Value * "" #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{unitText: "F"}]}]}); </script> {% endhighlight %} ### scales.labels.unitTextPlacement `enum` {:#members:scales-labels-unittextplacement} <ts name = "ej.datavisualization.LinearGauge.UnitTextPlacement"/> Specifies the unitText Position of label.See <a href="global.html#UnitTextPlacement">UnitTextPlacement</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Back</td> <td class="type">string</td> <td class="description">The unit text will be placed on back side of the gauge</td> </tr> <tr> <td class="name"> From</td> <td class="type">string</td> <td class="description">The unit text will be placed on front side of the gauge</td> </tr> </tbody> </table> #### Default Value * Back #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{labels:[{unitText: "F",unitTextPlacement: "front"}]}]}); </script> {% endhighlight %} ### scales.length `number` {:#members:scales-length} Specifies the scaleBar Length. #### Default Value * 290 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{length:300}]}); </script> {% endhighlight %} ### scales.majorIntervalValue `number` {:#members:scales-majorintervalvalue} Specifies the majorIntervalValue of the Scale. #### Default Value * 10 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{majorIntervalValue:10}]}); </script> {% endhighlight %} ### scales.markerPointers `Array` {:#members:scales-markerpointers} Specifies the markerPointers #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{type: "triangle"}]}]}); </script> {% endhighlight %} ### scales.markerPointers.backgroundColor `string` {:#members:scales-markerpointers-backgroundcolor} Specifies the backgroundColor of marker pointer #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{backgroundColor: "blue"}]}]}); </script> {% endhighlight %} ### scales.markerPointers.border `object` {:#members:scales-markerpointers-border} Specifies the border of marker pointer #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{border:{color: "blue", width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.markerPointers.border.color `string` {:#members:scales-markerpointers-border-color} Specifies the border color of marker pointer #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{border:{color: "blue", width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.markerPointers.border.width `number` {:#members:scales-markerpointers-border-width} Specifies the border of marker pointer #### Default Value * number #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{border:{color: "blue", width: 1.5}}]}]}); </script> {% endhighlight %} ### scales.markerPointers.distanceFromScale `number` {:#members:scales-markerpointers-distancefromscale} Specifies the distanceFromScale of marker pointer #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{distanceFromScale: 2}]}]}); </script> {% endhighlight %} ### scales.markerPointers.gradients `object` {:#members:scales-markerpointers-gradients} Specifies the pointer Gradient of marker pointer #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{gradients: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}]}]}); </script> {% endhighlight %} ### scales.markerPointers.length `number` {:#members:scales-markerpointers-length} Specifies the pointer Length of marker pointer #### Default Value * 30 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{length: 25}]}]}); </script> {% endhighlight %} ### scales.markerPointers.opacity `number` {:#members:scales-markerpointers-opacity} Specifies the opacity of marker pointer #### Default Value * 1 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{opacity: 0.5}]}]}); </script> {% endhighlight %} ### scales.markerPointers.placement `enum` {:#members:scales-markerpointers-placement} <ts ref = "ej.datavisualization.LinearGauge.PointerPlacement"/> Specifies the pointer Placement of marker pointer See <a href="global.html#PointerPlacement">PointerPlacement</a> #### Default Value * Far #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{placement: ej.datavisualization.LinearGauge.PointerPlacement.Near}]}]}); </script> {% endhighlight %} ### scales.markerPointers.type `enum` {:#members:scales-markerpointers-type} <ts name = "ej.datavisualization.LinearGauge.MarkerType"/> Specifies the marker Style of marker pointerSee <a href="global.html#MarkerType">MarkerType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Rectangle</td> <td class="type">string</td> <td class="description">Style of the marker will be rectangle</td> </tr> <tr> <td class="name"> Triangle</td> <td class="type">string</td> <td class="description">Style of the marker will be triangle</td> </tr> <tr> <td class="name"> Ellipse</td> <td class="type">string</td> <td class="description">Style of the marker will be ellipse</td> </tr> <tr> <td class="name"> Diamond</td> <td class="type">string</td> <td class="description">Style of the marker will be diamond</td> </tr> <tr> <td class="name"> Pentagon</td> <td class="type">string</td> <td class="description">Style of the marker will be pentagon</td> </tr> <tr> <td class="name"> Circle</td> <td class="type">string</td> <td class="description">Style of the marker will be circle</td> </tr> <tr> <td class="name"> Star</td> <td class="type">string</td> <td class="description">Style of the marker will be star</td> </tr> <tr> <td class="name"> Slider</td> <td class="type">string</td> <td class="description">Style of the marker will be slider</td> </tr> <tr> <td class="name"> Pointer</td> <td class="type">string</td> <td class="description">Style of the marker will be pointer</td> </tr> <tr> <td class="name"> Wedge</td> <td class="type">string</td> <td class="description">Style of the marker will be wedge</td> </tr> <tr> <td class="name"> Trapezoid</td> <td class="type">string</td> <td class="description">Style of the marker will be trapezoid</td> </tr> <tr> <td class="name"> RoundedRectangle</td> <td class="type">string</td> <td class="description">Style of the marker will be rounded rectangle</td> </tr> </tbody> </table> #### Default Value * Triangle #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{type: ej.datavisualization.LinearGauge.MarkerType.Rectangle}]}]}); </script> {% endhighlight %} ### scales.markerPointers.value `number` {:#members:scales-markerpointers-value} Specifies the value of marker pointer #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{value: 25}]}]}); </script> {% endhighlight %} ### scales.markerPointers.width `number` {:#members:scales-markerpointers-width} Specifies the pointer Width of marker pointer #### Default Value * 30 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{markerPointers:[{width: 25}]}]}); </script> {% endhighlight %} ### scales.maximum `number` {:#members:scales-maximum} Specifies the maximum of the Scale. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{maximum:110}]}); </script> {% endhighlight %} ### scales.minimum `number` {:#members:scales-minimum} Specifies the minimum of the Scale. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{minimum:10}]}); </script> {% endhighlight %} ### scales.minorIntervalValue `number` {:#members:scales-minorintervalvalue} Specifies the minorIntervalValue of the Scale. #### Default Value * 2 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{minorIntervalValue:1}]}); </script> {% endhighlight %} ### scales.opacity `number` {:#members:scales-opacity} Specifies the opacity of the Scale. #### Default Value * NaN #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{opacity:0.2}]}); </script> {% endhighlight %} ### scales.position `object` {:#members:scales-position} Specifies the position #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{position:{x:30, y:30}}]}); </script> {% endhighlight %} ### scales.position.x `number` {:#members:scales-position-x} Specifies the Horizontal position #### Default Value * 50 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{position:{x:30}}]}); </script> {% endhighlight %} ### scales.position.y `number` {:#members:scales-position-y} Specifies the vertical position #### Default Value * 50 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{position:{y:30}}]}); </script> {% endhighlight %} ### scales.ranges `Array` {:#members:scales-ranges} Specifies the ranges in the tick. #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ranges:[{endWidth:4}]}]}); </script> {% endhighlight %} ### scales.ranges.backgroundColor `string` {:#members:scales-ranges-backgroundcolor} Specifies the backgroundColor in the ranges. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "Green" }] }] }); </script> {% endhighlight %} ### scales.ranges.border `object` {:#members:scales-ranges-border} Specifies the border in the ranges. #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649", border:{color: "Green", width:1.5} }] }] }); </script> {% endhighlight %} ### scales.ranges.border.color `string` {:#members:scales-ranges-border-color} Specifies the border color in the ranges. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649", border:{color: "Green"} }] }] }); </script> {% endhighlight %} ### scales.ranges.border.width `number` {:#members:scales-ranges-border-width} Specifies the border width in the ranges. #### Default Value * 1.5 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649", border:{width:1.5} }] }] }); </script> {% endhighlight %} ### scales.ranges.distanceFromScale `number` {:#members:scales-ranges-distancefromscale} Specifies the distanceFromScale in the ranges. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",distanceFromScale: 10 }] }] }); </script> {% endhighlight %} ### scales.ranges.endValue `number` {:#members:scales-ranges-endvalue} Specifies the endValue in the ranges. #### Default Value * 60 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); </script> {% endhighlight %} ### scales.ranges.endWidth `number` {:#members:scales-ranges-endwidth} Specifies the endWidth in the ranges. #### Default Value * 10 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); </script> {% endhighlight %} ### scales.ranges.gradients `object` {:#members:scales-ranges-gradients} Specifies the range Gradient in the ranges. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",gradients:{ colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } }] }] }); </script> {% endhighlight %} ### scales.ranges.opacity `number` {:#members:scales-ranges-opacity} Specifies the opacity in the ranges. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",opacity: 0.3 }] }] }); </script> {% endhighlight %} ### scales.ranges.placement `enum` {:#members:scales-ranges-placement} <ts ref = "ej.datavisualization.LinearGauge.PointerPlacement"/> Specifies the range Position in the ranges. See <a href="global.html#RangePlacement">RangePlacement</a> #### Default Value * Center #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",placement: "center" }] }] }); </script> {% endhighlight %} ### scales.ranges.startValue `number` {:#members:scales-ranges-startvalue} Specifies the startValue in the ranges. #### Default Value * 20 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 10, backgroundColor: "#E94649" }] }] }); </script> {% endhighlight %} ### scales.ranges.startWidth `number` {:#members:scales-ranges-startwidth} Specifies the startWidth in the ranges. #### Default Value * 10 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 20, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); </script> {% endhighlight %} ### scales.shadowOffset `number` {:#members:scales-shadowoffset} Specifies the shadowOffset. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{shadowOffset:1}]}); </script> {% endhighlight %} ### scales.showBarPointers `boolean` {:#members:scales-showbarpointers} Specifies the showBarPointers state. #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showBarPointers:false}]}); </script> {% endhighlight %} ### scales.showCustomLabels `boolean` {:#members:scales-showcustomlabels} Specifies the showCustomLabels state. #### Default Value * false #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true}]}); </script> {% endhighlight %} ### scales.showIndicators `boolean` {:#members:scales-showindicators} Specifies the showIndicators state. #### Default Value * false #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showIndicators:true}]}); </script> {% endhighlight %} ### scales.showLabels `boolean` {:#members:scales-showlabels} Specifies the showLabels state. #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showLabels:false}]}); </script> {% endhighlight %} ### scales.showMarkerPointers `boolean` {:#members:scales-showmarkerpointers} Specifies the showMarkerPointers state. #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showMarkerPointers:false}]}); </script> {% endhighlight %} ### scales.showRanges `boolean` {:#members:scales-showranges} Specifies the showRanges state. #### Default Value * false #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showRanges:false}]}); </script> {% endhighlight %} ### scales.showTicks `boolean` {:#members:scales-showticks} Specifies the showTicks state. #### Default Value * true #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showTicks:false}]}); </script> {% endhighlight %} ### scales.ticks `Array` {:#members:scales-ticks} Specifies the ticks in the scale. #### Default Value * Array #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{angle:30}]}]}); </script> {% endhighlight %} ### scales.ticks.angle `number` {:#members:scales-ticks-angle} Specifies the angle in the tick. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{angle:20}]}]}); </script> {% endhighlight %} ### scales.ticks.color `string` {:#members:scales-ticks-color} Specifies the tick Color in the tick. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{color:"Blue"}]}]}); </script> {% endhighlight %} ### scales.ticks.distanceFromScale `object` {:#members:scales-ticks-distancefromscale} Specifies the DistanceFromScale in the tick. #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{distanceFromScale:{x:10, y:10}}]}]}); </script> {% endhighlight %} ### scales.ticks.distanceFromScale.x `number` {:#members:scales-ticks-distancefromscale-x} Specifies the xDistanceFromScale in the tick. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{distanceFromScale:{x:10}}]}]}); </script> {% endhighlight %} ### scales.ticks.distanceFromScale.y `number` {:#members:scales-ticks-distancefromscale-y} Specifies the yDistanceFromScale in the tick. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{distanceFromScale:{y:10}}]}]}); </script> {% endhighlight %} ### scales.ticks.height `number` {:#members:scales-ticks-height} Specifies the tick Height in the tick. #### Default Value * 10 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{height:8}]}]}); </script> {% endhighlight %} ### scales.ticks.opacity `number` {:#members:scales-ticks-opacity} Specifies the opacity in the tick. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{opacity:0.5}]}]}); </script> {% endhighlight %} ### scales.ticks.placement `enum` {:#members:scales-ticks-placement} <ts ref = "ej.datavisualization.LinearGauge.PointerPlacement"/> Specifies the tick Placement in the tick. See <a href="global.html#TickPlacement">TickPlacement</a> #### Default Value * Near #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{placement:ej.datavisualization.LinearGauge.TickPlacement.Far}]}]}); </script> {% endhighlight %} ### scales.ticks.type `enum` {:#members:scales-ticks-type} <ts name = "ej.datavisualization.LinearGauge.TicksType"/> Specifies the tick Style in the tick. See <a href="global.html#TickType">TickType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Majorinterval</td> <td class="type">string</td> <td class="description">Sets the tick style as major interval</td> </tr> <tr> <td class="name"> Minorinterval</td> <td class="type">string</td> <td class="description">Sets the tick style as minor interval</td> </tr> </tbody> </table> #### Default Value * MajorInterval #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{type:ej.datavisualization.LinearGauge.TickType.MajorInterval}]}]}); </script> {% endhighlight %} ### scales.ticks.width `number` {:#members:scales-ticks-width} Specifies the tick Width in the tick. #### Default Value * 3 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{ticks:[{width:4}]}]}); </script> {% endhighlight %} ### scales.type `enum` {:#members:scales-type} <ts name = "ej.datavisualization.LinearGauge.ScaleType"/> Specifies the scaleBar type .See <a href="global.html#ScaleType">ScaleType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Rectangle</td> <td class="type">string</td> <td class="description">Type of the scale bar will be rectangle</td> </tr> <tr> <td class="name"> RoundedRectangle</td> <td class="type">string</td> <td class="description">Type of the scale bar will be roundedrectangle</td> </tr> <tr> <td class="name"> Thermometer</td> <td class="type">string</td> <td class="description">Type of the scale bar will be thermometer</td> </tr> </tbody> </table> #### Default Value * Rectangle #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{type:ej.datavisualization.LinearGauge.ScaleType.Rectangle}]}); </script> {% endhighlight %} ### scales.width `number` {:#members:scales-width} Specifies the scaleBar width. #### Default Value * 30 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{width:25}]}); </script> {% endhighlight %} ### theme `enum` {:#members:theme} <ts name = "ej.datavisualization.LinearGauge.Themes"/> Specifies the theme for Linear gauge. See LinearGauge.Themes <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> FlatLight</td> <td class="type">string</td> <td class="description">Theme of linear gauge will be flatlight</td> </tr> <tr> <td class="name"> FlatDark</td> <td class="type">string</td> <td class="description">Theme of linear gauge will be flatdark</td> </tr> </tbody> </table> #### Default Value * flatlight #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ theme: ej.datavisualization.LinearGauge.flatdark }); </script> {% endhighlight %} ### tickColor `string` {:#members:tickcolor} Specifies the tick Color for Linear gauge. #### Default Value * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ tickColor: "Red" }); </script> {% endhighlight %} ### tooltip `object` {:#members:tooltip} Specify tooltip options of linear gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreLinearGauge"> </div> <script> $("#CoreLinearGauge").ejLinearGauge({ tooltip:{showLabelTooltip: true,showCustomLabelTooltip: true,templateID: null} }); </script>{% endhighlight %} ### tooltip.showCustomLabelTooltip `boolean` {:#members:tooltip-showcustomlabeltooltip} Specify showCustomLabelTooltip value of linear gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreLinearGauge"> </div> <script> $("#CoreLinearGauge").ejLinearGauge({ tooltip:{showCustomLabelTooltip: true} }); </script>{% endhighlight %} ### tooltip.showLabelTooltip `boolean` {:#members:tooltip-showlabeltooltip} Specify showLabelTooltip value of linear gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreLinearGauge"> </div> <script> $("#CoreLinearGauge").ejLinearGauge({ tooltip:{showLabelTooltip: true} }); </script>{% endhighlight %} ### tooltip.templateID `string` {:#members:tooltip-templateid} Specify templateID value of linear gauge #### Default Value * false #### Example {% highlight html %} <div id="CoreLinearGauge"> </div> <script> $("#CoreLinearGauge").ejLinearGauge({ tooltip:{showLabelTooltip: true, templateID: true} }); </script>{% endhighlight %} ### value `number` {:#members:value} Specifies the value of the Gauge. #### Default Value * 0 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ size: 5.5}); </script> {% endhighlight %} ### width `number` {:#members:width} Specifies the width of Linear gauge. #### Default Value * 150 #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ width: 360 }); </script> {% endhighlight %} ## Methods ### destroy() {:#methods:destroy} destroy the linear gauge all events bound using this._on will be unbind automatically and bring the control to pre-init state. #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var linearGaugeobj = $("#LinearGauge1").data("ejLinearGauge"); linearGaugeobj.destroy(); </script>{% endhighlight %} ### exportImage() {:#methods:exportimage} To export Image <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.fileName{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">for the Image</td> </tr> <tr> <td class="name">{% highlight html %} argument.fileType{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">for the Image</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.exportImage("myImage","jpeg"); </script>{% endhighlight %} ### getBarDistanceFromScale() {:#methods:getbardistancefromscale} To get Bar Distance From Scale in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({value:50}); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getBarDistanceFromScale(0,0); </script>{% endhighlight %} ### getBarPointerValue() {:#methods:getbarpointervalue} To get Bar Pointer Value in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({value:50}); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getBarPointerValue(0,0); </script>{% endhighlight %} ### getBarWidth() {:#methods:getbarwidth} To get Bar Width in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({value:50}); // get Bar Width in number var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getBarWidth(0,0); </script>{% endhighlight %} ### getCustomLabelAngle() {:#methods:getcustomlabelangle} To get CustomLabel Angle in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getCustomLabelAngle(0,0); </script>{% endhighlight %} ### getCustomLabelValue() {:#methods:getcustomlabelvalue} To get CustomLabel Value in string <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getCustomLabelValue(0,0); </script>{% endhighlight %} ### getLabelAngle() {:#methods:getlabelangle} To get Label Angle in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getLabelAngle(0,0); </script>{% endhighlight %} ### getLabelPlacement() {:#methods:getlabelplacement} To get LabelPlacement in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getLabelPlacement(0,0); </script>{% endhighlight %} ### getLabelStyle() {:#methods:getlabelstyle} To get LabelStyle in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getLabelStyle(0,0); </script>{% endhighlight %} ### getLabelXDistanceFromScale() {:#methods:getlabelxdistancefromscale} To get Label XDistance From Scale in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getLabelXDistanceFromScale(0,0); </script>{% endhighlight %} ### getLabelYDistanceFromScale() {:#methods:getlabelydistancefromscale} To get PointerValue in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getLabelYDistanceFromScale(0,0); </script>{% endhighlight %} ### getMajorIntervalValue() {:#methods:getmajorintervalvalue} To get Major Interval Value in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getMajorIntervalValue(0); </script>{% endhighlight %} ### getMarkerStyle() {:#methods:getmarkerstyle} To get MarkerStyle in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getMarkerStyle(0,0); </script>{% endhighlight %} ### getMaximumValue() {:#methods:getmaximumvalue} To get Maximum Value in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getMaximumValue(0); </script>{% endhighlight %} ### getMinimumValue() {:#methods:getminimumvalue} To get PointerValue in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getMinimumValue(0,0); </script>{% endhighlight %} ### getMinorIntervalValue() {:#methods:getminorintervalvalue} To get Minor Interval Value in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getMinorIntervalValue(0); </script>{% endhighlight %} ### getPointerDistanceFromScale() {:#methods:getpointerdistancefromscale} To get Pointer Distance From Scale in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getPointerDistanceFromScale(0,0); </script>{% endhighlight %} ### getPointerHeight() {:#methods:getpointerheight} To get PointerHeight in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getPointerHeight(0,0); </script>{% endhighlight %} ### getPointerPlacement() {:#methods:getpointerplacement} To get Pointer Placement in String <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getPointerPlacement(0,0); </script>{% endhighlight %} ### getPointerValue() {:#methods:getpointervalue} To get PointerValue in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getPointerValue(0,0); </script>{% endhighlight %} ### getPointerWidth() {:#methods:getpointerwidth} To get PointerWidth in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getPointerWidth(0,0); </script>{% endhighlight %} ### getRangeBorderWidth() {:#methods:getrangeborderwidth} To get Range Border Width in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getRangeBorderWidth(0,0); </script>{% endhighlight %} ### getRangeDistanceFromScale() {:#methods:getrangedistancefromscale} To get Range Distance From Scale in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getRangeDistanceFromScale(0,0); </script>{% endhighlight %} ### getRangeEndValue() {:#methods:getrangeendvalue} To get Range End Value in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getRangeEndValue(0,0); </script>{% endhighlight %} ### getRangeEndWidth() {:#methods:getrangeendwidth} To get Range End Width in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getRangeEndWidth(0,0); </script>{% endhighlight %} ### getRangePosition() {:#methods:getrangeposition} To get Range Position in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getRangePosition(0,0); </script>{% endhighlight %} ### getRangeStartValue() {:#methods:getrangestartvalue} To get Range Start Value in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getRangeStartValue(0,0); </script>{% endhighlight %} ### getRangeStartWidth() {:#methods:getrangestartwidth} To get Range Start Width in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getRangeStartWidth(0,0); </script>{% endhighlight %} ### getScaleBarLength() {:#methods:getscalebarlength} To get ScaleBarLength in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getScaleBarLength(0); </script>{% endhighlight %} ### getScaleBarSize() {:#methods:getscalebarsize} To get Scale Bar Size in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getScaleBarSize(0,0); </script>{% endhighlight %} ### getScaleBorderWidth() {:#methods:getscaleborderwidth} To get Scale Border Width in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getScaleBorderWidth(0); </script>{% endhighlight %} ### getScaleDirection() {:#methods:getscaledirection} To get Scale Direction in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getScaleDirection(0,0); </script>{% endhighlight %} ### getScaleLocation() {:#methods:getscalelocation} To get Scale Location in object <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getScaleLocation(0); </script>{% endhighlight %} ### getScaleStyle() {:#methods:getscalestyle} To get Scale Style in string <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getScaleStyle(0); </script>{% endhighlight %} ### getTickAngle() {:#methods:gettickangle} To get Tick Angle in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getTickAngle(0,0); </script>{% endhighlight %} ### getTickHeight() {:#methods:gettickheight} To get Tick Height in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getTickHeight(0,0); </script>{% endhighlight %} ### getTickPlacement() {:#methods:gettickplacement} To get getTickPlacement in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getTickPlacement(0,0); </script>{% endhighlight %} ### getTickStyle() {:#methods:gettickstyle} To get Tick Style in string <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getTickStyle(0,0); </script>{% endhighlight %} ### getTickWidth() {:#methods:gettickwidth} To get Tick Width in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getTickWidth(0,0); </script>{% endhighlight %} ### getTickXDistanceFromScale() {:#methods:gettickxdistancefromscale} To get get Tick XDistance From Scale in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getTickXDistanceFromScale(0,0); </script>{% endhighlight %} ### getTickYDistanceFromScale() {:#methods:gettickydistancefromscale} To get Tick YDistance From Scale in number <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.getTickYDistanceFromScale(0,0); </script>{% endhighlight %} ### scales() {:#methods:scales} Specifies the scales. #### Default Value {:.param} * null #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{minimum:5}]}); </script> {% endhighlight %} ### setBarDistanceFromScale() {:#methods:setbardistancefromscale} To set setBarDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex,value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Bar DistanceFromScale value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setBarDistanceFromScale(0,0,30); </script>{% endhighlight %} ### setBarPointerValue() {:#methods:setbarpointervalue} To set setBarPointerValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Bar Pointer Value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setBarPointerValue(0,0,30); </script>{% endhighlight %} ### setBarWidth() {:#methods:setbarwidth} To set setBarWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Bar Width for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setBarWidth(0,0,30); </script>{% endhighlight %} ### setCustomLabelAngle() {:#methods:setcustomlabelangle} To set setCustomLabelAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Custom Label Angle for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setCustomLabelAngle(0,0,30); </script>{% endhighlight %} ### setCustomLabelValue() {:#methods:setcustomlabelvalue} To set setCustomLabelValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">customLabelIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">CustomLabel value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]}); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setCustomLabelValue(0,0,"text"); </script>{% endhighlight %} ### setLabelAngle() {:#methods:setlabelangle} To set setLabelAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Label Angle for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setLabelAngle(0,0,20); </script>{% endhighlight %} ### setLabelPlacement() {:#methods:setlabelplacement} To set setLabelPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Label Placement for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setLabelPlacement(0,0,"far"); </script>{% endhighlight %} ### setLabelStyle() {:#methods:setlabelstyle} To set setLabelStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">Label Style for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setLabelStyle(0,0,"major"); </script>{% endhighlight %} ### setLabelXDistanceFromScale() {:#methods:setlabelxdistancefromscale} To set setLabelXDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Label XDistance From Scale for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setLabelXDistanceFromScale(0,0,20); </script>{% endhighlight %} ### setLabelYDistanceFromScale() {:#methods:setlabelydistancefromscale} To set setLabelYDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.labelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Label YDistance From Scale for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setLabelYDistanceFromScale(0,0,20); </script>{% endhighlight %} ### setMajorIntervalValue() {:#methods:setmajorintervalvalue} To set setMajorIntervalValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Major Interval Value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setMajorIntervalValue(0,5); </script>{% endhighlight %} ### setMarkerStyle() {:#methods:setmarkerstyle} To set setMarkerStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">marker Style for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setMarkerStyle(0,0,"triangle"); </script>{% endhighlight %} ### setMaximumValue() {:#methods:setmaximumvalue} To set setMaximumValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">MaximumValue for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setMaximumValue(0,20); </script>{% endhighlight %} ### setMinimumValue() {:#methods:setminimumvalue} To set setMinimumValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">MinimumValue for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setMinimumValue(0,20); </script>{% endhighlight %} ### setMinorIntervalValue() {:#methods:setminorintervalvalue} To set setMinorIntervalValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Minor Interval Value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setMinorIntervalValue(0,2); </script>{% endhighlight %} ### setPointerDistanceFromScale() {:#methods:setpointerdistancefromscale} To set setPointerDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setPointerDistanceFromScale(0,0,30); </script>{% endhighlight %} ### setPointerHeight() {:#methods:setpointerheight} To set PointerHeight <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.height{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setPointerHeight(0,0,30); </script>{% endhighlight %} ### setPointerPlacement() {:#methods:setpointerplacement} To set setPointerPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointer placement for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setPointerPlacement(0,0,"far"); </script>{% endhighlight %} ### setPointerValue() {:#methods:setpointervalue} To set PointerValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Pointer value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setPointerValue(0,0,30); </script>{% endhighlight %} ### setPointerWidth() {:#methods:setpointerwidth} To set PointerWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.pointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">pointerIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.width{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Pointer width for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setPointerWidth(0,0,30); </script>{% endhighlight %} ### setRangeBorderWidth() {:#methods:setrangeborderwidth} To set setRangeBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Range Border Width for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setRangeBorderWidth(0,0,2); </script>{% endhighlight %} ### setRangeDistanceFromScale() {:#methods:setrangedistancefromscale} To set setRangeDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Range Distance FromScale for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setRangeDistanceFromScale(0,0,20); </script>{% endhighlight %} ### setRangeEndValue() {:#methods:setrangeendvalue} To set setRangeEndValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Range end value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setRangeEndValue(0,0,20); </script>{% endhighlight %} ### setRangeEndWidth() {:#methods:setrangeendwidth} To set setRangeEndWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Range End Width for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setRangeEndWidth(0,0,20); </script>{% endhighlight %} ### setRangePosition() {:#methods:setrangeposition} To set setRangePosition <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Range Position for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setRangePosition(0,0,20); </script>{% endhighlight %} ### setRangeStartValue() {:#methods:setrangestartvalue} To set setRangeStartValue <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">range start value for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setRangeStartValue(0,0,20); </script>{% endhighlight %} ### setRangeStartWidth() {:#methods:setrangestartwidth} To set setRangeStartWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">rangeIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Range Start Width for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] }); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setRangeStartWidth(0,0,20); </script>{% endhighlight %} ### setScaleBarLength() {:#methods:setscalebarlength} To set setScaleBarLength <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Scale Bar Length for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setScaleBarLength(0,150); </script>{% endhighlight %} ### setScaleBarSize() {:#methods:setscalebarsize} To set setScaleBarSize <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">ScaleBarSize for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setScaleBarSize(0,20); </script>{% endhighlight %} ### setScaleBorderWidth() {:#methods:setscaleborderwidth} To set setScaleBorderWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Scale Border Width for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setScaleBorderWidth(0,10); </script>{% endhighlight %} ### setScaleDirection() {:#methods:setscaledirection} To set setScaleDirection <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Scale Direction for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setScaleDirection(0,"counterclockwise"); </script>{% endhighlight %} ### setScaleLocation() {:#methods:setscalelocation} To set setScaleLocation <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">Scale position for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setScaleLocation(0,{x:20,y:20}); </script>{% endhighlight %} ### setScaleStyle() {:#methods:setscalestyle} To set setScaleStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setScaleStyle(0,"thermometer"); </script>{% endhighlight %} ### setTickAngle() {:#methods:settickangle} To set setTickAngle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Tick Angle for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setTickAngle(0,0,20); </script>{% endhighlight %} ### setTickHeight() {:#methods:settickheight} To set setTickHeight <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Tick Height for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setTickHeight(0,0,10); </script>{% endhighlight %} ### setTickPlacement() {:#methods:settickplacement} To set setTickPlacement <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Tick Placement for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setTickPlacement(0,0,"far"); </script>{% endhighlight %} ### setTickStyle() {:#methods:settickstyle} To set setTickStyle <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">Tick Style for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setTickStyle(0,0,"major"); </script>{% endhighlight %} ### setTickWidth() {:#methods:settickwidth} To set setTickWidth <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Tick Width for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setTickWidth(0,0,5); </script>{% endhighlight %} ### setTickXDistanceFromScale() {:#methods:settickxdistancefromscale} To set setTickXDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Tick XDistance From Scale for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setTickXDistanceFromScale(0,0,20); </script>{% endhighlight %} ### setTickYDistanceFromScale() {:#methods:settickydistancefromscale} To set setTickYDistanceFromScale <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} argument.scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">scaleIndex value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} argument.TickIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">value for the Gauge</td> </tr> <tr> <td class="name">{% highlight html %} arguemnt.value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">Tick YDistance From Scale for Gauge</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge(); var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge"); LinearGaugeObj.setTickYDistanceFromScale(0,0,20); </script>{% endhighlight %} ## Events ### drawBarPointers {:#events:drawbarpointers} Triggers while the bar pointer are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the pointer</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} barElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the current Bar pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} barPointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the bar pointer.</td> </tr> <tr> <td class="name">{% highlight html %} PointerValue{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the bar pointer.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ drawBarPointers: function (args) {} }); </script> {% endhighlight %} ### drawCustomLabel {:#events:drawcustomlabel} Triggers while the customLabel are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the customLabel</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the customLabel style</td> </tr> <tr> <td class="name">{% highlight html %} customLabelElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the current customLabel element.</td> </tr> <tr> <td class="name">{% highlight html %} customLabelIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the customLabel.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ drawCustomLabel: function (args) {} }); </script> {% endhighlight %} ### drawIndicators {:#events:drawindicators} Triggers while the Indicator are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the Indicator</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the Indicator style</td> </tr> <tr> <td class="name">{% highlight html %} IndicatorElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the current Indicator element.</td> </tr> <tr> <td class="name">{% highlight html %} IndicatorIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the Indicator.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ drawIndicators: function (args) {} }); </script> {% endhighlight %} ### drawLabels {:#events:drawlabels} Triggers while the label are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the label</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the label belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the label style</td> </tr> <tr> <td class="name">{% highlight html %} label{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the label style <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the label.</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the current label element.</td> </tr> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the label.</td> </tr> <tr> <td class="name">{% highlight html %} value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the label value of the label.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ drawLabels: function (args) {} }); </script> {% endhighlight %} ### drawMarkerPointers {:#events:drawmarkerpointers} Triggers while the marker are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the pointer</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the ticks style</td> </tr> <tr> <td class="name">{% highlight html %} markerElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the current marker pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} markerPointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the marker pointer.</td> </tr> <tr> <td class="name">{% highlight html %} pointerValue{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the marker pointer.</td> </tr> <tr> <td class="name">{% highlight html %} pointerAngle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the marker pointer.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ drawMarkerPointers: function (args) {} }); </script> {% endhighlight %} ### drawRange {:#events:drawrange} Triggers while the range are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the range</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the range style</td> </tr> <tr> <td class="name">{% highlight html %} rangeElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the current range element.</td> </tr> <tr> <td class="name">{% highlight html %} rangeIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the range.</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ drawRange: function (args) {} }); </script> {% endhighlight %} ### drawTicks {:#events:drawticks} Triggers while the ticks are being drawn on the gauge. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the ticks</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the options of the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the tick belongs.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the ticks style</td> </tr> <tr> <td class="name">{% highlight html %} tick{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the ticks style <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} angle{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the angle of the tick.</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the current tick element.</td> </tr> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the index of the tick.</td> </tr> <tr> <td class="name">{% highlight html %} value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the tick value of the tick.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ drawTicks: function (args) {} }); </script> {% endhighlight %} ### init {:#events:init} Triggers when the gauge is initialized. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the entire scale element.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ init: function (args) {} }); </script> {% endhighlight %} ### load {:#events:load} Triggers while the gauge start to Load. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the entire scale element.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ load: function (args) {} }); </script> {% endhighlight %} ### mouseClick {:#events:mouseclick} Triggers when the left mouse button is clicked. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element* @param {Object} args.markerpointer returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} markerpointerindex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the pointer Index</td> </tr> <tr> <td class="name">{% highlight html %} markerpointerelement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} markerpointervalue{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the pointer.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the pointer.</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"> </div> <script> $("#LinearGauge1").ejLinearGauge({ mouseClick: function (args) {} }); </script>{% endhighlight %} ### mouseClickMove {:#events:mouseclickmove} Triggers when clicking and dragging the mouse pointer over the gauge pointer. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} markerpointer{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} index{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the pointer Index</td> </tr> <tr> <td class="name">{% highlight html %} element{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} value{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the pointer.</td> </tr> </tbody> </table> </td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the pointer.</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"> </div> <script> $("#LinearGauge1").ejLinearGauge({ mouseClickMove: function (args) {} }); </script>{% endhighlight %} ### mouseClickUp {:#events:mouseclickup} Triggers when the mouse click is released. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the scale element.</td> </tr> <tr> <td class="name">{% highlight html %} scaleIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the scaleIndex to which the pointer belongs.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element* @param {Object} args.markerpointer returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} markerpointerIndex{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the pointer Index</td> </tr> <tr> <td class="name">{% highlight html %} markerpointerElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the pointer element.</td> </tr> <tr> <td class="name">{% highlight html %} markerpointerValue{% endhighlight %}</td> <td class="type"><span class="param-type">number</span></td> <td class="description last">returns the value of the pointer.</td> </tr> <tr> <td class="name">{% highlight html %} style{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the pointer style</td> </tr> <tr> <td class="name">{% highlight html %} position{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the startX and startY of the pointer.</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"> </div> <script> $("#LinearGauge1").ejLinearGauge({ mouseClickUp: function (args) {} }); </script>{% endhighlight %} ### renderComplete {:#events:rendercomplete} Triggers while the rendering of the gauge completed. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} object{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the object of the gauge.</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">returns the cancel option value</td> </tr> <tr> <td class="name">{% highlight html %} Model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the gauge model</td> </tr> <tr> <td class="name">{% highlight html %} scaleElement{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the entire scale element.</td> </tr> <tr> <td class="name">{% highlight html %} context{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the context element</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="LinearGauge1"></div> <script> $("#LinearGauge1").ejLinearGauge({ renderComplete: function (args) {} }); </script> {% endhighlight %}</summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejListView' : function(){
		///<signature>
			///<summary> The ListView widget builds interactive ListView interface. This control allows you to select an item from a list-like interface and display a set of data items in different layouts or views. Lists are used for displaying data, data navigation, result lists, and data entry. </summary>
		///</signature>
	},
	'ejMap' : function(){
		///<signature>
			///<summary> <ts root="datavisualization" /> The map can be easily configured to the DOM element, such as div and can be created with a highly customized look and feel. </summary>
		///</signature>
	},
	'ejMaskEdit' : function(){
		///<signature>
			///<summary> The MaskEdit control provides an easy and reliable way of collecting user input and displaying standard data in a specific format. Some common uses of the MaskEdit control are IP address editors, phone number editors, and Social Security number editors. </summary>
		///</signature>
	},
	'ejMenu' : function(){
		///<signature>
			///<summary> The Menu control supports displaying a Menu created from list items. The Menu is based on a hierarchy of UL and LI elements where the list items are rendered as sub-menu items. </summary>
		///</signature>
	},
	'ejNavigationDrawer' : function(){
		///<signature>
			///<summary> The Navigation Drawer is a sliding panel that displays the list of navigation options on demand. That is, by default, it is not visible but you can display it onto the left/right side of the screen by swiping or by clicking with desired target icon. </summary>
		///</signature>
	},
	'ejOlapChart' : function(){
		///<signature>
			///<summary> The OlapChart is a lightweight control that reads OLAP information and visualizes it in graphical format with the ability to drill up and down. </summary>
		///</signature>
	},
	'ejPdfViewer' : function(){
		///<signature>
			///<summary> PDF viewer JS is visualization component to view PDF documents. It is powered by HTML5/JavaScript and provides various control customizations. </summary>
		///</signature>
	},
	'ejProgressBar' : function(){
		///<signature>
			///<summary> The ProgressBar control is a graphical control element used to visualize the changing status of an extended operation. </summary>
		///</signature>
	},
	'ejRadialSlider' : function(){
		///<signature>
			///<summary> The RadialSlider provides an optimized interface for selecting a numeric value using a touch interface. Value is returned based on direct needle selection or needle move. It can also be customized as a full circle, half circle, or any portion of a circle, based on startAngle and endAngle </summary>
		///</signature>
	},
	'ejRadioButton' : function(){
		///<signature>
			///<summary> The RadioButton control allows you to choose an option to perform an action. This control allows you to select true/false. </summary>
		///</signature>
	},
	'ejRangeNavigator' : function (element){
		///<signature>
			///<summary> <ts root="datavisualization" /> The range navigator can be easily configured to the DOM element, such as div. You can create a range navigator with a highly customizable look and feel. $(element).ejRangeNavigator(options, options) <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} options{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">settings for range navigator</td> </tr> <tr> <td class="name">{% highlight html %} options{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">settings for range navigator</td> </tr> </tbody> </table> #### Example {% highlight html %} <div id="container"></div> <script> // Create RangeNavigator $('#container').ejRangeNavigator(); </script>{% endhighlight %} Requires {:.require} * module:jQuery * module:jquery.globalize.min.js * module:ej.core.js * module:ej.data.js * module:ej.chart.js * module:ej.rangenavigator.js ## Members ### allowSnapping `boolean` {:#members:allowsnapping} Toggles the placement of slider exactly on the place it left or on the nearest interval. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ allowSnapping: true; }); </script> {% endhighlight %} ### border `object` {:#members:border} Options for customizing the color, opacity and width of the chart border. Try it: [JS Playground Sample](http://jsplayground.syncfusion.com/wxxv2rq1) ### border.color `string` {:#members:border-color} Border color of rangenavigator. When enable the scrollbar, the default color will be set as "#B4B4B4". #### Default Value * "transparent" #### Example {% highlight js %} $("#container").ejRangeNavigator({ border: { color: "green" } }); {% endhighlight %} ### border.opacity `number` {:#members:border-opacity} Opacity of the rangeNavigator border. #### Default Value * 1 #### Example {% highlight js %} $("#container").ejRangeNavigator({ border: { opacity: 0.5 } }); {% endhighlight %} ### border.width `number` {:#members:border-width} Width of the RangeNavigator border. #### Default Value * 1 #### Example {% highlight js %} $("#container").ejRangeNavigator({ border: { width: 2 } }); {% endhighlight %} ### dataSource `object` {:#members:datasource} Specifies the data source for range navigator. #### Example {% highlight html %} $("#container").ejRangeNavigator({ dataSource:"data1", xName: "X", yName: "Y" });{% endhighlight %} ### enableDeferredUpdate `boolean` {:#members:enabledeferredupdate} Toggles the redrawing of chart on moving the sliders. #### Default Value * true #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ enableDeferredUpdate:false, }); </script> {% endhighlight %} ### enableScrollbar `boolean` {:#members:enablescrollbar} Enable the scrollbar option in the rangenavigator. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ enableScrollbar: true, }); </script> {% endhighlight %} ### enableRTL `boolean` {:#members:enablertl} Toggles the direction of rendering the range navigator control. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ enableRTL: true, }); </script> {% endhighlight %} ### isResponsive `boolean` {:#members:isresponsive} Sets a value whether to make the range navigator responsive on resize. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ isResponsive: true; }); </script> {% endhighlight %} ### labelSettings `object` {:#members:labelsettings} Options for customizing the labels colors, font, style, size, horizontalAlignment and opacity. ### labelSettings.higherLevel `object` {:#members:labelsettings-higherlevel} Options for customizing the higher level labels in range navigator. ### labelSettings.higherLevel.border `object` {:#members:labelsettings-higherlevel-border} Options for customizing the border of grid lines in higher level. ### labelSettings.higherLevel.border.color `string` {:#members:labelsettings-higherlevel-border-color} Specifies the border color of grid lines. #### Default Value * "transparent" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ border :{color:"#ff0000"}}}, }); </script>{% endhighlight %} ### labelSettings.higherLevel.border.width `string` {:#members:labelsettings-higherlevel-border-width} Specifies the border width of grid lines. #### Default Value * "0.5" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ border :{width:1}}}, }); </script>{% endhighlight %} ### labelSettings.higherLevel.fill `string` {:#members:labelsettings-higherlevel-fill} Specifies the fill color of higher level labels. #### Default Value * "transparent" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ fill:"days"}}, }); </script>{% endhighlight %} ### labelSettings.higherLevel.gridLineStyle `object` {:#members:labelsettings-higherlevel-gridlinestyle} Options for customizing the grid line colors, width, dashArray, border. ### labelSettings.higherLevel.gridLineStyle.color `string` {:#members:labelsettings-higherlevel-gridlinestyle-color} Specifies the color of grid lines in higher level. #### Default Value * "#B5B5B5" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ gridLineStyle :{color:"#ff0000"}}}, });{% endhighlight %} ### labelSettings.higherLevel.gridLineStyle.dashArray `string` {:#members:labelsettings-higherlevel-gridlinestyle-dasharray} Specifies the dashArray of grid lines in higher level. #### Default Value * "20 5 0" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ gridLineStyle :{dashArray:"20 10 5"}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.gridLineStyle.width `string` {:#members:labelsettings-higherlevel-gridlinestyle-width} Specifies the width of grid lines in higher level. #### Default Value * "#B5B5B5" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ gridLineStyle :{width:1}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.intervalType `enum` {:#members:labelsettings-higherlevel-intervaltype} <ts name="ej.datavisualization.RangeNavigator.IntervalType"/> Specifies the intervalType for higher level labels. See <a href="global.html#IntervalType">IntervalType</a> <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Years</td> <td class="type">string</td> <td class="description last">The labels are displayed with year as intervals between them </td> </tr> <tr> <td class="name"> Quarters</td> <td class="type">string</td> <td class="description last">The labels are displayed with quarter as intervals between them</td> </tr> <tr> <td class="name"> Months</td> <td class="type">string</td> <td class="description last">The labels are displayed with months as intervals between them</td> </tr> <tr> <td class="name"> Weeks</td> <td class="type">string</td> <td class="description last">The labels are displayed with weeks as intervals between them</td> </tr> <tr> <td class="name"> Days</td> <td class="type">string</td> <td class="description last">The labels are displayed with days as intervals between them</td> </tr> <tr> <td class="name"> Hours</td> <td class="type">string</td> <td class="description last">The labels are displayed with hours as intervals between them</td> </tr> <tr> <td class="name"> Minutes</td> <td class="type">string</td> <td class="description last">The labels are displayed with minutes as intervals between them</td> </tr> </tbody> </table> #### Default Value * "auto" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ intervalType:"days"}}, }); </script>{% endhighlight %} ### labelSettings.higherLevel.labelPlacement `enum` {:#members:labelsettings-higherlevel-labelplacement} <ts name="ej.datavisualization.RangeNavigator.LabelPlacement"/> Specifies the position of the labels to render either inside or outside of plot area <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Inside</td> <td class="type">string</td> <td class="description last">The Labels are displayed inside the Range Navigator </td> </tr> <tr> <td class="name"> Outside</td> <td class="type">string</td> <td class="description last">The Labels are displayed outside the Range Navigator</td> </tr> </tbody> </table> Specifies the position of the labels to render either inside or outside of plot area. See <a href="global.html#LabelPlacement">LabelPlacement</a> #### Default Value * "outside" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ labelPlacement:"inside"}}, }); </script>{% endhighlight %} ### labelSettings.higherLevel.position `enum` {:#members:labelsettings-higherlevel-position} <ts name="ej.datavisualization.RangeNavigator.Position"/> Specifies the position of the labels in higher level <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Top</td> <td class="type">string</td> <td class="description last">Labels are placed on top of the slider</td> </tr> <tr> <td class="name"> Bottom</td> <td class="type">string</td> <td class="description last">Labels are placed at the bottom of the slider</td> </tr> </tbody> </table> Specifies the position of the labels in higher level.See <a href="global.html#Position">Position</a> #### Default Value * "top" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ position:"bottom"}}, }); </script>{% endhighlight %} ### labelSettings.higherLevel.style `object` {:#members:labelsettings-higherlevel-style} Options for customizing the style of higher level labels. ### labelSettings.higherLevel.style.font `object` {:#members:labelsettings-higherlevel-style-font} Options for customizing the font properties. ### labelSettings.higherLevel.style.font.color `string` {:#members:labelsettings-higherlevel-style-font-color} Specifies the label font color. Labels render with the specified font color. #### Default Value * "black" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ style:{font:{color: "red"}}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.style.font.fontFamily `string` {:#members:labelsettings-higherlevel-style-font-fontfamily} Specifies the label font family. Labels render with the specified font family. #### Default Value * "Segoe UI" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ style:{font:{fontFamily: "Algerian"}}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.style.font.fontStyle `string` {:#members:labelsettings-higherlevel-style-font-fontstyle} Specifies the label font style. Labels render with the specified font style. #### Default Value * "Normal" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ style:{font:{fontStyle: "Italic"}}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.style.font.fontWeight `string` {:#members:labelsettings-higherlevel-style-font-fontweight} Specifies the label font weight. Labels render with the specified font weight. #### Default Value * "regular" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ style:{font:{fontWeight: "regular"}}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.style.font.opacity `number` {:#members:labelsettings-higherlevel-style-font-opacity} Specifies the label opacity. Labels render with the specified opacity. #### Default Value * 1 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ style:{font:{opacity: "14px"}}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.style.font.size `string` {:#members:labelsettings-higherlevel-style-font-size} Specifies the label font size. Labels render with the specified font size. #### Default Value * "12px" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ style:{font:{size: "14px"}}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.style.horizontalAlignment `string` {:#members:labelsettings-higherlevel-style-horizontalalignment} Specifies the horizontal text alignment of the text in label. #### Default Value * "middle" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ style:{horizontalAlignment: "left"}}}, }); </script> {% endhighlight %} ### labelSettings.higherLevel.visible `boolean` {:#members:labelsettings-higherlevel-visible} Toggles the visibility of higher level labels. #### Default Value * true #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{higherLevel:{ visible:false}}, }); </script>{% endhighlight %} ### labelSettings.lowerLevel `object` {:#members:labelsettings-lowerlevel} Options for customizing the labels in lower level. ### labelSettings.lowerLevel.border `object` {:#members:labelsettings-lowerlevel-border} Options for customizing the border of grid lines in lower level. ### labelSettings.lowerLevel.border.color `string` {:#members:labelsettings-lowerlevel-border-color} Specifies the border color of grid lines. #### Default Value * "transparent" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ border :{color:"#ff0000"}}}, }); </script>{% endhighlight %} ### labelSettings.lowerLevel.border.width `string` {:#members:labelsettings-lowerlevel-border-width} Specifies the border width of grid lines. #### Default Value * "0.5" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ border :{width:1}}}, }); </script>{% endhighlight %} ### labelSettings.lowerLevel.fill `string` {:#members:labelsettings-lowerlevel-fill} Specifies the fill color of labels in lower level. #### Default Value * "transparent" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ fill:"days"}}, }); </script>{% endhighlight %} ### labelSettings.lowerLevel.gridLineStyle `object` {:#members:labelsettings-lowerlevel-gridlinestyle} Options for customizing the grid lines in lower level. ### labelSettings.lowerLevel.gridLineStyle.color `string` {:#members:labelsettings-lowerlevel-gridlinestyle-color} Specifies the color of grid lines in lower level. #### Default Value * "#B5B5B5" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ gridLineStyle :{color:"#ff0000"}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.gridLineStyle.dashArray `string` {:#members:labelsettings-lowerlevel-gridlinestyle-dasharray} Specifies the dashArray of gridLines in lowerLevel. #### Default Value * "20 5 0" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ lowerLevel:{ gridLineStyle :{dashArray:"20 10 5"}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.gridLineStyle.width `string` {:#members:labelsettings-lowerlevel-gridlinestyle-width} Specifies the width of grid lines in lower level. #### Default Value * "#B5B5B5" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ gridLineStyle :{width:1}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.intervalType `enum` {:#members:labelsettings-lowerlevel-intervaltype} <ts ref="ej.datavisualization.RangeNavigator.IntervalType"/> Specifies the intervalType of the labels in lower level.See <a href="global.html#IntervalType">IntervalType</a> #### Default Value * "auto" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ intervalType:"days"}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.labelPlacement `enum` {:#members:labelsettings-lowerlevel-labelplacement} <ts ref="ej.datavisualization.RangeNavigator.LabelPlacement"/> Specifies the position of the labels to render either inside or outside of plot area. See <a href="global.html#LabelPlacement">LabelPlacement</a> #### Default Value * "outside" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ labelPlacement:"inside"}}, }); </script>{% endhighlight %} ### labelSettings.lowerLevel.position `enum` {:#members:labelsettings-lowerlevel-position} <ts ref="ej.datavisualization.RangeNavigator.Position"/> Specifies the position of the labels in lower level.See <a href="global.html#Position">Position</a> #### Default Value * "bottom" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ position:"bottom"}}, }); </script>{% endhighlight %} ### labelSettings.lowerLevel.style `object` {:#members:labelsettings-lowerlevel-style} Options for customizing the style of labels. ### labelSettings.lowerLevel.style.font `object` {:#members:labelsettings-lowerlevel-style-font} Options for customizing the font of labels. ### labelSettings.lowerLevel.style.font.color `string` {:#members:labelsettings-lowerlevel-style-font-color} Specifies the color of labels. Label text render in this specified color. #### Default Value * "black" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ style:{font:{color: "red"}}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.style.font.fontFamily `string` {:#members:labelsettings-lowerlevel-style-font-fontfamily} Specifies the font family of labels. Label text render in this specified font family. #### Default Value * "Segoe UI" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ style:{font:{fontFamily: "Algerian"}}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.style.font.fontStyle `string` {:#members:labelsettings-lowerlevel-style-font-fontstyle} Specifies the font style of labels. Label text render in this specified font style. #### Default Value * "Normal" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ style:{font:{fontStyle: "Italic"}}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.style.font.fontWeight `string` {:#members:labelsettings-lowerlevel-style-font-fontweight} Specifies the font weight of labels. Label text render in this specified font weight. #### Default Value * "regular" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ style:{font:{fontWeight: "regular"}}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.style.font.opacity `string` {:#members:labelsettings-lowerlevel-style-font-opacity} Specifies the opacity of labels. Label text render in this specified opacity. #### Default Value * "12px" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ style:{font:{opacity: "14px"}}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.style.font.size `string` {:#members:labelsettings-lowerlevel-style-font-size} Specifies the size of labels. Label text render in this specified size. #### Default Value * "12px" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ style:{font:{size: "14px"}}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.style.horizontalAlignment `string` {:#members:labelsettings-lowerlevel-style-horizontalalignment} Specifies the horizontal text alignment of the text in label. #### Default Value * "middle" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ style:{horizontalAlignment: "left"}}}, }); </script> {% endhighlight %} ### labelSettings.lowerLevel.visible `boolean` {:#members:labelsettings-lowerlevel-visible} Toggles the visibility of labels in lower level. #### Default Value * true #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{lowerLevel:{ visible:false}}, }); </script>{% endhighlight %} ### labelSettings.style `object` {:#members:labelsettings-style} Options for customizing the style of labels in range navigator. ### labelSettings.style.font `object` {:#members:labelsettings-style-font} Options for customizing the font of labels in range navigator. ### labelSettings.style.font.color `string` {:#members:labelsettings-style-font-color} Specifies the label color. This color is applied to the labels in range navigator. #### Default Value * "#FFFFFF" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{style:{ font:{color:"#ff0000"}}}, }); </script>{% endhighlight %} ### labelSettings.style.font.family `string` {:#members:labelsettings-style-font-family} Specifies the label font family. Labels render with the specified font family. #### Default Value * "Segoe UI" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{style:{ font:{family:"Arial"}}}, }); </script>{% endhighlight %} ### labelSettings.style.font.opacity ` number` {:#members:labelsettings-style-font-opacity} Specifies the label font opacity. Labels render with the specified font opacity. #### Default Value * 1 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{style:{ font:{opacity:0.5}}} }); </script>{% endhighlight %} ### labelSettings.style.font.size `string` {:#members:labelsettings-style-font-size} Specifies the label font size. Labels render with the specified font size. #### Default Value * "1px" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{style:{ font:{size:"12px"}}}, }); </script>{% endhighlight %} ### labelSettings.style.font.style `enum` {:#members:labelsettings-style-font-style} <ts name="ej.datavisualization.RangeNavigator.FontStyle"/> Specifies the label font style. Labels render with the specified font style.. <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Normal</td> <td class="type">string</td> <td class="description last">The labels are displayed in the default format</td> </tr> <tr> <td class="name"> Bold</td> <td class="type">string</td> <td class="description last">The labels are displayed in Bold format</td> </tr> <tr> <td class="name"> Italic</td> <td class="type">string</td> <td class="description last">The labels are displayed in the italic format</td> </tr> </tbody> </table> Specifies the label font style. Labels render with the specified font style..See <a href="global.html#FontStyle">FontStyle</a> #### Default Value * "Normal" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{style:{ font:{style:"Noraml"}}}, }); </script>{% endhighlight %} ### labelSettings.style.font.weight `enum` {:#members:labelsettings-style-font-weight} <ts name="ej.datavisualization.RangeNavigator.FontWeight"/> Specifies the label font weight <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Regular</td> <td class="type">string</td> <td class="description last">The Labels are displayed in the default manner</td> </tr> <tr> <td class="name">Lighter</td> <td class="type">string</td> <td class="description last">The Labels are displayed lighter than the normal text</td> </tr> </tbody> </table> Specifies the label font weight. Labels render with the specified font weight. See <a href="global.html#FontWeight">FontWeight</a> #### Default Value * "regular" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{style:{ font:{weight:"Regular"}}}, }); </script>{% endhighlight %} ### labelSettings.style.horizontalAlignment `enum` {:#members:labelsettings-style-horizontalalignment} <ts name="ej.datavisualization.RangeNavigator.HorizontalAlignment"/> Specifies the horizontalAlignment of the label in RangeNavigator <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> </tr> </thead> <tbody> <tr> <td class="name"> Middle</td> <td class="type">string</td> <td class="description last">The labels are aligned to the center </td> </tr> <tr> <td class="name"> Left</td> <td class="type">string</td> <td class="description last">The labels are aligned to the left</td> </tr> <tr> <td class="name"> Right</td> <td class="type">string</td> <td class="description last">The labels are aligned to the right</td> </tr> </tbody> </table> Specifies the horizontalAlignment of the label in range navigator. See <a href="global.html#HorizontalAlignment">HorizontalAlignment</a> #### Default Value * "middle" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ labelSettings:{style:{ horizontalAlignment:"middle"}}, }); </script>{% endhighlight %} ### locale `string` {:#members:locale} This property is to specify the localization of range navigator. #### Default Value * "en-US" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ locale: "en-US", }); </script> {% endhighlight %} ### navigatorStyleSettings `object` {:#members:navigatorstylesettings} Options for customizing the range navigator. ### navigatorStyleSettings.background `string` {:#members:navigatorstylesettings-background} Specifies the background color of range navigator. #### Default Value * "#dddddd" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ background:"#ff0000"}, }); </script> {% endhighlight %} ### navigatorStyleSettings.border `object` {:#members:navigatorstylesettings-border} Options for customizing the border color and width of range navigator. ### navigatorStyleSettings.border.color `string` {:#members:navigatorstylesettings-border-color} Specifies the border color of range navigator. #### Default Value * "transparent" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ border:{color:"#ff0000"}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.border.dashArray `string` {:#members:navigatorstylesettings-border-dasharray} Specifies the dash array of range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ border:{dashArray:"2,3"}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.border.width ` number` {:#members:navigatorstylesettings-border-width} Specifies the border width of range navigator. #### Default Value * 0.5 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ border:{width:1}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.leftThumbTemplate `string` {:#members:navigatorstylesettings-leftthumbtemplate} Specifies the left side thumb template in range navigator we can give either div id or HTML string #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ leftThumbTemplate:"item"}, }); </script> {% endhighlight %} ### navigatorStyleSettings.majorGridLineStyle `object` {:#members:navigatorstylesettings-majorgridlinestyle} Options for customizing the major grid lines. ### navigatorStyleSettings.majorGridLineStyle.color `string` {:#members:navigatorstylesettings-majorgridlinestyle-color} Specifies the color of major grid lines in range navigator. #### Default Value * "#B5B5B5" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ majorGridLineStyle:{color:"#ff0000"}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.majorGridLineStyle.visible `boolean` {:#members:navigatorstylesettings-majorgridlinestyle-visible} Toggles the visibility of major grid lines. #### Default Value * true #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ majorGridLineStyle:{visible:false}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.minorGridLineStyle `object` {:#members:navigatorstylesettings-minorgridlinestyle} Options for customizing the minor grid lines. ### navigatorStyleSettings.minorGridLineStyle.color `string` {:#members:navigatorstylesettings-minorgridlinestyle-color} Specifies the color of minor grid lines in range navigator. #### Default Value * "#B5B5B5" #### Example {% highlight html %} //Gets or sets color of majorGridLines in range navigator, after initialization: //Gets the color of majorGridLines in range navigator $("#container").ejRangeNavigator("option", "navigatorStyleSettings.majorGridLineStyle.color"); //Sets the color of majorGridLines in range navigator{% endhighlight %} ### navigatorStyleSettings.minorGridLineStyle.visible `boolean` {:#members:navigatorstylesettings-minorgridlinestyle-visible} Toggles the visibility of minor grid lines. #### Default Value * true #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ majorGridLineStyle:{visible:false}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.opacity ` number` {:#members:navigatorstylesettings-opacity} Specifies the opacity of RangeNavigator. #### Default Value * 1 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ opacity:0.5}, }); </script> {% endhighlight %} ### navigatorStyleSettings.rightThumbTemplate `string` {:#members:navigatorstylesettings-rightthumbtemplate} Specifies the right side thumb template in range navigator we can give either div id or HTML string #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ rightThumbTemplate:"item"}, }); </script> {% endhighlight %} ### navigatorStyleSettings.selectedRegionColor `string` {:#members:navigatorstylesettings-selectedregioncolor} Specifies the color of the selected region in range navigator. #### Default Value * "#EFEFEF" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ selectedRegionColor:"#ff0000"}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.selectedRegionOpacity `number` {:#members:navigatorstylesettings-selectedregionopacity} Specifies the opacity of Selected Region. #### Default Value * 0 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ selectedRegionOpacity:0.5}, }); </script> {% endhighlight %} ### navigatorStyleSettings.thumbColor `string` {:#members:navigatorstylesettings-thumbcolor} Specifies the color of the thumb in range navigator. #### Default Value * "#2382C3" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ thumbColor:"#ff0000"}, }); </script> {% endhighlight %} ### navigatorStyleSettings.thumbRadius `number` {:#members:navigatorstylesettings-thumbradius} Specifies the radius of the thumb in range navigator. #### Default Value * 10 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ thumbRadius:15}, }); </script> {% endhighlight %} ### navigatorStyleSettings.thumbStroke `string` {:#members:navigatorstylesettings-thumbstroke} Specifies the stroke color of the thumb in range navigator. #### Default Value * "#303030" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ thumbStroke:"#ff0000"}, }); </script> {% endhighlight %} ### navigatorStyleSettings.unselectedRegionColor `string` {:#members:navigatorstylesettings-unselectedregioncolor} Specifies the color of the unselected region in range navigator. #### Default Value * "#5EABDE" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ unselectedRegionColor:"#ff0000"}, }); </script> {% endhighlight %} ### navigatorStyleSettings.unselectedRegionOpacity `number` {:#members:navigatorstylesettings-unselectedregionopacity} Specifies the opacity of Unselected Region. #### Default Value * 0.3 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ unselectedRegionOpacity:0.5}, }); </script> {% endhighlight %} ### navigatorStyleSettings.highlightSettings `object` {:#members:navigatorstylesettings-highlightsettings} Contains the options for highlighting the range navigator on mouse over. ### navigatorStyleSettings.highlightSettings.enable `boolean` {:#members:navigatorstylesettings-highlightsettings-enable} Enable the highlight settings in range navigator. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ highlightSettings:{enable: true}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.highlightSettings.color `string` {:#members:navigatorstylesettings-highlightsettings-color} To set the color to the highlight. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ highlightSettings:{color: "red"}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.highlightSettings.opacity `number` {:#members:navigatorstylesettings-highlightsettings-opacity} To set the opacity to the highlight. #### Default Value * 0.5 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ highlightSettings:{opacity: 0.4}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.highlightSettings.border `object` {:#members:navigatorstylesettings-highlightsettings-border} Contains the border properties for highlighting rectangle. ### navigatorStyleSettings.highlightSettings.border.color `string` {:#members:navigatorstylesettings-highlightsettings-border-color} To set the border color to the highlight. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ highlightSettings:{border: {color: "yellow"}}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.highlightSettings.border.width `number` {:#members:navigatorstylesettings-highlightsettings-border-width} To set the border width to the highlight. #### Default Value * 1 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ highlightSettings:{border: {width: 1.4}}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.selectionSettings `object` {:#members:navigatorstylesettings-selectionsettings} Contains the options for selection the range navigator on mouse over. ### navigatorStyleSettings.selectionSettings.enable `boolean` {:#members:navigatorstylesettings-selectionsettings-enable} Enable the selection settings in range navigator. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ selectionSettings:{enable: true}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.selectionSettings.color `string` {:#members:navigatorstylesettings-selectionsettings-color} To set the color to the selection. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ selectionSettings:{color: "red"}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.selectionSettings.opacity `number` {:#members:navigatorstylesettings-selectionsettings-opacity} To set the opacity to the selection. #### Default Value * 0.5 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ selectionSettings:{opacity: 0.4}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.selectionSettings.border `object` {:#members:navigatorstylesettings-selectionsettings-border} Contains the border properties for selecting the rectangle. ### navigatorStyleSettings.selectionSettings.border.color `string` {:#members:navigatorstylesettings-selectionsettings-border-color} To set the border color to the selection. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ selectionSettings:{border: {color: "yellow"}}}, }); </script> {% endhighlight %} ### navigatorStyleSettings.selectionSettings.border.width `number` {:#members:navigatorstylesettings-selectionsettings-border-width} To set the border width to the selection. #### Default Value * 1 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ navigatorStyleSettings:{ selectionSettings:{border: {width: 1.4}}}, }); </script> {% endhighlight %} ### padding `string` {:#members:padding} Padding specifies the gap between the container and the range navigator. #### Default Value * "0" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ padding: "15"; }); </script> {% endhighlight %} ### rangePadding `enum` {:#members:rangepadding} <ts name="ej.datavisualization.RangeNavigator.RangePadding"/> If the range is not given explicitly, range will be calculated automatically. <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Additional</td> <td class="type">string</td> <td class="description last">The range is added with an extra interval when the RangePadding is set as Additional</td> </tr> <tr> <td class="name"> Normal</td> <td class="type">string</td> <td class="description last">The automatic range calculation differs based on the data when the RangePadding is set as Normal </td> </tr> <tr> <td class="name"> None</td> <td class="type">string</td> <td class="description last">The Range is calculated based on the minimum and maximum value in the data when the RangePadding is set as None</td> </tr> <tr> <td class="name"> Round</td> <td class="type">string</td> <td class="description last">The Range is rounded to the nearest possible values when the RangePadding is set as Round</td> </tr> </tbody> </table> If the range is not given explicitly, range will be calculated automatically. You can customize the automatic range calculation using rangePadding. See <a href="global.html#RangePadding">RangePadding</a> #### Default Value * "none" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ rangePadding: "normal", }); </script> {% endhighlight %} ### rangeSettings `object` {:#members:rangesettings} Options for customizing the starting and ending ranges. ### rangeSettings.end `string` {:#members:rangesettings-end} Specifies the ending range of range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ rangeSettings:{end:"01/05/1993"} }); </script> {% endhighlight %} ### rangeSettings.start `string` {:#members:rangesettings-start} Specifies the starting range of range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ rangeSettings:{start:"01/05/1993"}, });{% endhighlight %} ### selectedData `object` {:#members:selecteddata} selectedData is for getting the data when the "rangeChanged" event trigger from client side. ### selectedRangeSettings `object` {:#members:selectedrangesettings} Options for customizing the start and end range values. ### selectedRangeSettings.end `string` {:#members:selectedrangesettings-end} Specifies the ending range of range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ selectedRangeSettings:{end:"01/05/1993"}, }); </script> {% endhighlight %} ### selectedRangeSettings.start `string` {:#members:selectedrangesettings-start} Specifies the starting range of range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ selectedRangeSettings:{start:"01/05/1992"}, }); </script> {% endhighlight %} ### scrollRangeSettings `object` {:#members:scrollrangesettings} Options for rendering scrollbar based on the start and end range values. ### scrollRangeSettings.end `string` {:#members:scrollrangesettings-end} Specifies the ending range of range navigator scrollbar and that should be greater than the rangenavigator datasource end value. #### Default Value * null #### Example {% highlight js %} $("#container").ejRangeNavigator({ scrollRangeSettings:{end:"01/05/1993"}, }); {% endhighlight %} ### scrollRangeSettings.start `string` {:#members:scrollrangesettings-start} Specifies the starting range of range navigator scrollbar and that should be less than the rangenavigator datasource start value. #### Default Value * null #### Example {% highlight js %} $("#container").ejRangeNavigator({ scrollRangeSettings:{start:"01/05/1992"}, }); {% endhighlight %} ### sizeSettings `object` {:#members:sizesettings} Contains property to customize the hight and width of range navigator. ### sizeSettings.height `string` {:#members:sizesettings-height} Specifies height of the range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ sizeSettings: { height : "130" }, }); </script> {% endhighlight %} ### sizeSettings.width `string` {:#members:sizesettings-width} Specifies width of the range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ sizeSettings: { width : "900" }, }); </script> {% endhighlight %} ### theme `string` {:#members:theme} By specifying this property the user can change the theme of the range navigator. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ theme: "flatdark"; }); </script> {% endhighlight %} ### tooltipSettings `object` {:#members:tooltipsettings} Options for customizing the tooltip in range navigator. #### Example {% highlight html %} $("#container").ejRangeNavigator({ tooltipSettings: { visible: true, labelFormat: "MMM/dd/yyyy", tooltipDisplayMode: "always", tooltipDisplayMode: "always" }, });{% endhighlight %} ### tooltipSettings.backgroundColor `string` {:#members:tooltipsettings-backgroundcolor} Specifies the background color of tooltip. #### Default Value * "#303030" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{backgroundColor: "#303030"}, }); </script> {% endhighlight %} ### tooltipSettings.font `object` {:#members:tooltipsettings-font} Options for customizing the font in tooltip. ### tooltipSettings.font.color `string` {:#members:tooltipsettings-font-color} Specifies the color of text in tooltip. Tooltip text render in the specified color. #### Default Value * "#FFFFFF" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{font:{color : "FFFFFF"}}, }); </script>{% endhighlight %} ### tooltipSettings.font.family `string` {:#members:tooltipsettings-font-family} Specifies the font family of text in tooltip. Tooltip text render in the specified font family. #### Default Value * "Segoe UI" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{font:{family:"Arial"}} }); </script>{% endhighlight %} ### tooltipSettings.font.fontStyle `string` {:#members:tooltipsettings-font-fontstyle} Specifies the font style of text in tooltip. Tooltip text render in the specified font style. #### Default Value * ej.datavisualization.RangeNavigator.fontStyle.Normal #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{font:{fontStyle:"Normal"}} }); </script>{% endhighlight %} ### tooltipSettings.font.opacity ` number` {:#members:tooltipsettings-font-opacity} Specifies the opacity of text in tooltip. Tooltip text render in the specified opacity. #### Default Value * 1 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{ font:{opacity:0.5}} }); </script>{% endhighlight %} ### tooltipSettings.font.size `string` {:#members:tooltipsettings-font-size} Specifies the size of text in tooltip. Tooltip text render in the specified size. #### Default Value * "10px" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{font:{size:"12px"}}, }); </script>{% endhighlight %} ### tooltipSettings.font.weight `string` {:#members:tooltipsettings-font-weight} Specifies the weight of text in tooltip. Tooltip text render in the specified weight. #### Default Value * ej.datavisualization.RangeNavigator.weight.Regular #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{ font:{weight:"regular"}}, }); </script>{% endhighlight %} ### tooltipSettings.labelFormat `string` {:#members:tooltipsettings-labelformat} Specifies the format of text to be displayed in tooltip. #### Default Value * "MM/dd/yyyy" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings: { labelFormat: "MM/dd/yyyy"} }); </script> {% endhighlight %} ### tooltipSettings.tooltipDisplayMode `string` {:#members:tooltipsettings-tooltipdisplaymode} Specifies the mode of displaying the tooltip. Neither to display the tooltip always nor on demand. #### Default Value * null #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{tooltipDisplayMode: "always"}, }); </script> {% endhighlight %} ### tooltipSettings.visible `boolean` {:#members:tooltipsettings-visible} Toggles the visibility of tooltip. #### Default Value * true #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ tooltipSettings:{visible: true} }); </script> {% endhighlight %} ### valueAxisSettings `object` {:#members:valueaxissettings} Options for configuring minor grid lines, major grid lines, axis line of axis. ### valueAxisSettings.axisLine `object` {:#members:valueaxissettings-axisline} Options for customizing the axis line. ### valueAxisSettings.axisLine.visible `string` {:#members:valueaxissettings-axisline-visible} Toggles the visibility of axis line. #### Default Value * "none" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{axisLine: {visible: true}} }); </script> {% endhighlight %} ### valueAxisSettings.font `object` {:#members:valueaxissettings-font} Options for customizing the font of the axis. ### valueAxisSettings.font.size `string` {:#members:valueaxissettings-font-size} Text in axis render with the specified size. #### Default Value * "0px" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{font: {size: '12px'}} }); </script> {% endhighlight %} ### valueAxisSettings.majorGridLines `object` {:#members:valueaxissettings-majorgridlines} Options for customizing the major grid lines. ### valueAxisSettings.majorGridLines.visible `boolean` {:#members:valueaxissettings-majorgridlines-visible} Toggles the visibility of major grid lines. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{majorGridLines: {visible: true}} }); </script> {% endhighlight %} ### valueAxisSettings.majorTickLines `object` {:#members:valueaxissettings-majorticklines} Options for customizing the major tick lines in axis. ### valueAxisSettings.majorTickLines.size `number` {:#members:valueaxissettings-majorticklines-size} Specifies the size of the majorTickLines in range navigator #### Default Value * 0 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{majorTickLines: {size: 3}} }); </script> {% endhighlight %} ### valueAxisSettings.majorTickLines.visible `boolean` {:#members:valueaxissettings-majorticklines-visible} Toggles the visibility of major tick lines. #### Default Value * true #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{majorTickLines: {visible: false}} }); </script> {% endhighlight %} ### valueAxisSettings.majorTickLines.width `number` {:#members:valueaxissettings-majorticklines-width} Specifies width of the major tick lines. #### Default Value * 0 #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{majorTickLines: {width: 3}} }); </script> {% endhighlight %} ### valueAxisSettings.rangePadding `string` {:#members:valueaxissettings-rangepadding} If the range is not given explicitly, range will be calculated automatically. You can customize the automatic range calculation using rangePadding. #### Default Value * "none" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{rangePadding: "normal"}, }); </script> {% endhighlight %} ### valueAxisSettings.visible `boolean` {:#members:valueaxissettings-visible} Toggles the visibility of axis in range navigator. #### Default Value * false #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueAxisSettings:{visble: true} }); </script> {% endhighlight %} ### valueType `enum` {:#members:valuetype} <ts name='ej.datavisualization.RangeNavigator.ValueType'/> You can plot data of type date time or numeric. This property determines the type of data that this axis will handle. <table class="props"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name"> Numeric</td> <td class="type">string</td> <td class="description last">The numeric data is used in the RangeNavigator then the ValueType is set as Numeric</td> </tr> <tr> <td class="name"> DateTime</td> <td class="type">string</td> <td class="description last">The default value type of Range Navigator is DateTime and it represents the DateTime Values</td> </tr> </tbody> </table> #### Default Value * "datetime" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ valueType: "numeric", }); </script> {% endhighlight %} ### xName `object` {:#members:xname} Specifies the xName for dataSource. This is used to take the x values from dataSource #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ dataSource:"data1", xName: "X" }); </script> {% endhighlight %} ### yName `object` {:#members:yname} Specifies the yName for dataSource. This is used to take the y values from dataSource #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ dataSource:"data1", yName: "Y" }); </script> {% endhighlight %} ### zoomSettings.zoomFactor `string` {:#members:zoomsettings-zoomfactor} This property determines the factor by which the axis is scaled. Value must be specified between 0 and 1. #### Default Value * "1" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ zoomFactor:"1" }); </script> {% endhighlight %} ### zoomSettings.zoomPosition `string` {:#members:zoomsettings-zoomposition} This property determines the starting position of the zoomed axis. Value must be specified between 0 and 1. #### Default Value * "0" #### Example {% highlight html %} <div id="RangeNavigator"></div> <script> $("#container").ejRangeNavigator({ zoomPosition:"0", }); </script> {% endhighlight %} ## Methods ### _destroy () {:#methods:_destroy} destroy the range navigator widget #### Example {% highlight html %} <div id="container"></div> <script> // Destroy range navigator var obj = $("#container").data("ejRangeNavigator"); obj.destroy(); // destroy the range navigator </script>{% endhighlight %} {% highlight html %} <div id="container"></div> <script> $("#container").ejRangeNavigator("destroy"); </script>{% endhighlight %} ## Events ### load {:#events:load} Fires on load of range navigator. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} Data{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">parameters from range navigator</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">if the event should be canceled; otherwise, false.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the range navigator model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} //load event for chart $("#container").ejRangeNavigator({ load: function (args) {} });{% endhighlight %} ### loaded {:#events:loaded} Fires after range navigator is loaded. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} Data{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">parameters from range navigator</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">if the event should be canceled; otherwise, false.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the range navigator model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} //loaded event for chart $("#container").ejRangeNavigator({ loaded: function (args) {} });{% endhighlight %} ### rangeChanged {:#events:rangechanged} Fires on changing the range of range navigator. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} Data{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">parameters from range navigator</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">if the event should be canceled; otherwise, false.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the range navigator model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight html %} //rangeChanged event for chart $("#container").ejRangeNavigator({ rangeChanged: function (args) {} });{% endhighlight %} ### scrollChanged {:#events:scrollchanged} Fires on changing the scrollbar position of range navigator. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} data{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">parameters from RangeNavigator</td> </tr> <tr> <td class="name">{% highlight html %} dataoldRange{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the scrollbar position old start and end range value on changing scrollbar</td> </tr> <tr> <td class="name">{% highlight html %} datanewRange{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the scrollbar position new start and end range value on changing scrollbar</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">if the event should be canceled; otherwise, false.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the RangeNavigator model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight js %} //scrollbarChanged event for rangenavigator $("#container").ejRangeNavigator({ scrollChanged: function (args) {} });{% endhighlight %} ### scrollStart {:#events:scrollstart} Fires on when starting to change the scrollbar position of range navigator. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} data{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">parameters from RangeNavigator</td> </tr> <tr> <td class="name">{% highlight html %} datastartRange{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the scrollbar position starting range value on changing scrollbar</td> </tr> <tr> <td class="name">{% highlight html %} dataendRange{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the scrollbar position end range value on changing scrollbar</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">if the event should be canceled; otherwise, false.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the RangeNavigator model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight js %} //scrollbarChanged event for rangenavigator $("#container").ejRangeNavigator({ scrollStart: function (args) {} });{% endhighlight %} ### scrollEnd {:#events:scrollend} Fires on changes ending the scrollbar position of range navigator. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th class="last">Description</th> </tr> </thead> <tbody> <tr> <td class="name">{% highlight html %} data{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">parameters from RangeNavigator</td> </tr> <tr> <td class="name">{% highlight html %} dataoldRange{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the scrollbar position old start and end range value on change end of scrollbar</td> </tr> <tr> <td class="name">{% highlight html %} datanewRange{% endhighlight %}</td> <td class="type"><span class="param-type">Object</span></td> <td class="description last">returns the scrollbar position new start and end range value on change end of scrollbar</td> </tr> <tr> <td class="name">{% highlight html %} cancel{% endhighlight %}</td> <td class="type"><span class="param-type">boolean</span></td> <td class="description last">if the event should be canceled; otherwise, false.</td> </tr> <tr> <td class="name">{% highlight html %} model{% endhighlight %}</td> <td class="type"><span class="param-type">object</span></td> <td class="description last">returns the RangeNavigator model</td> </tr> <tr> <td class="name">{% highlight html %} type{% endhighlight %}</td> <td class="type"><span class="param-type">string</span></td> <td class="description last">returns the name of the event</td> </tr> </tbody> </table> #### Example {% highlight js %} //scrollbarChanged event for rangenavigator $("#container").ejRangeNavigator({ scrollEnd: function (args) {} });{% endhighlight %}</summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejRating' : function(){
		///<signature>
			///<summary> The Rating control provides an intuitive Rating experience that enables you to select a number of stars that represent a Rating. You can configure the item size, orientation and the number of displayed items in the Rating control. You can also customize the Rating star image by using custom CSS. </summary>
		///</signature>
	},
	'ejResizable' : function(){
		///<signature>
			///<summary> Plugin to make any DOM element Resizable. </summary>
		///</signature>
	},
	'ejRibbon' : function(){
		///<signature>
			///<summary> The ribbon can be easily configured to the DOM element, such as div. You can create a ribbon with a highly customizable look and feel. </summary>
		///</signature>
	},
	'ejRotator' : function(){
		///<signature>
			///<summary> The Rotator control displays a set of slides. Each slide may contain images or images with content, or content with user-defined transition between them. </summary>
		///</signature>
	},
	'ejRTE' : function (element){
		///<signature>
			///<summary> Rich text editor is a component that help you to display or edit the content including tables, hyperlinks, paragraphs, lists, video, and images. The editor supports file and folder management using FileExplorer component. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for RTE.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejSchedule' : function(){
		///<signature>
			///<summary> An Event calendar that manages the list of various activities like events/appointments. </summary>
		///</signature>
	},
	'ejScroller' : function(){
		///<signature>
			///<summary> The Scroller control has a sliding document whose position corresponds to a value. The document has text, HTML content or images. You can also customize the Scroller control by resizing the scrolling bar and changing the theme. </summary>
		///</signature>
	},
	'ejSlider' : function(){
		///<signature>
			///<summary> The Slider provides support to select a value from a particular range as well as selects a range value. The Slider has a sliding base on which the handles are moved. There are three types of Sliders such as default Slider, min-range Slider and range Slider. </summary>
		///</signature>
	},
	'ejSplitButton' : function(){
		///<signature>
			///<summary> The Split button allows you to perform an action using clicking the button and choosing extra options from the dropdown button. The Split button also can display both text and images. </summary>
		///</signature>
	},
	'ejSplitter' : function (element){
		///<signature>
			///<summary> The Splitter is a layout control that enables you to divide a Web page into distinct areas by inserting resizable panes. You can create any number of Splitter panes and place them inside the Splitter control. The split bars are inserted automatically in between the adjacent panes. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for Splitter.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejSymbolPalette' : function(){
		///<signature>
			///<summary> <ts root="datavisualization" /> The symbol palette control allows to predefine the frequently used nodes and connectors and to drag and drop those nodes/connectors to drawing area </summary>
		///</signature>
	},
	'ejTab' : function(){
		///<signature>
			///<summary> The Tab control is an interface where list of items are expanded from a single item. Each Tab panel defines its header text or header template, as well as a content template. Tab items are dynamically added and removed. Tabs can be loaded with AJAX content that is useful for building dashboards where space is limited. </summary>
		///</signature>
	},
	'ejTagCloud' : function(){
		///<signature>
			///<summary> The TagCloud allows the user to display a list of links or tags with a structured cloud format where the importance of the tags can differentiate with varied font sizes, colors, and styles. </summary>
		///</signature>
	},
	'ejTile' : function(){
		///<signature>
			///<summary> The Web Tiles are simple, opaque rectangles or squares and they are arrayed on the start screen in a grid-like pattern. Tapping or selecting a Tile, launches the app or does some other action that is represented by the Tile. Tiles are arranged in a group separated by columns that looks like a start screen of a device and it can be either static or live. </summary>
		///</signature>
	},
	'ejTimePicker' : function(){
		///<signature>
			///<summary> The TimePicker control for JavaScript allows users to select a time value. The available times can be restricted to a range by setting minimum and maximum time values. The TimePicker sets the time as a mask to prevent users from entering invalid values. </summary>
		///</signature>
	},
	'ejToggleButton' : function(){
		///<signature>
			///<summary> The Toggle Button allows you to perform the toggle option by using checked and unchecked state. This Toggle Button can be helpful to user to check their states. The Toggle Button control displays both text and images. </summary>
		///</signature>
	},
	'ejToolbar' : function(){
		///<signature>
			///<summary> The Toolbar control supports displaying a list of tools within a web page. This control is capable of customizing toolbar items with any functionality by using enriched client-side methods. This control is composed of collection of unordered lists containing text and images contained into a div. </summary>
		///</signature>
	},
	'ejTooltip' : function (element){
		///<signature>
			///<summary> The Tooltip control will display a popup hint when the user hover/click/focus to the element. </summary>
			///<param name='options' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejTreeGrid' : function(){
		///<signature>
			///<summary> Custom Design for HTML TreeGrid control. </summary>
		///</signature>
	},
	'ejTreeView' : function (element){
		///<signature>
			///<summary> The TreeView can be easily configured with the DOM element, such as div or ul. you can create a TreeView with a highly customizable look and feel. </summary>
			///<param name=' options ' type='<span class="param-type">object</span>' optional='false' >settings for TreeView.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejUploadbox' : function(){
		///<signature>
			///<summary> The Uploadbox control supports uploading files into the designated server, regardless of the file format and size. The Uploadbox control helps you with the selection of files to upload to the server. </summary>
		///</signature>
	},
	'ejWaitingPopup' : function(){
		///<signature>
			///<summary> The WaitingPopup control for JavaScript is a visual element that provides support for displaying a pop-up indicator over a target area and preventing the end user’s interaction with the target area while loading. </summary>
		///</signature>
	}
});
