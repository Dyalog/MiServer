intellisense.annotate(ej.Accordion.prototype, {
	'collapseAll' : function(){
		///<signature>
			///<summary>collapseAll the accordion widget collapse All the header and content panel Before we call this method, we must set "collapsible" is true. Then only collapseAll method will</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Accordion widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>disables the accordion widget disables All the header and content panel.</summary>
		///</signature>
	},
	'disableItems' : function(){
		///<signature>
			///<summary>enable the accordion widget Enables given index header and content panel.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>enable the accordion widget Enables all the headers and content panels.</summary>
		///</signature>
	},
	'enableItems' : function(){
		///<signature>
			///<summary>enable the accordion widget Enables given index header and content panel.</summary>
		///</signature>
	},
	'expandAll' : function(){
		///<signature>
			///<summary>expand All the accordion widget expand All the header and content panel Before we call this method, we must set "enableMultipleOpen" is true. Then only expandAll method will</summary>
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
			///<param name='options' type='<span class="param-type">array</span>' optional='false' ></param>
			///<param name='option' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'export' : function (type, url, exportMultipleChart){
		///<signature>
			///<summary>Exports chart as an image or to an excel file. Chart can be exported as an image only when exportCanvasRendering option is set to true.</summary>
			///<param name='type' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='url' type='<span class="param-type">string</span>' optional='false' ></param>
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
			///<summary>destroy the CheckBox widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the checkbox</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the checkbox</summary>
		///</signature>
	},
	'isChecked' : function(){
		///<signature>
			///<summary>To Check the status of checkbox</summary>
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
			///<summary>Hides the colorpicker popup, if in opended state.</summary>
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
			///<summary>Open the colorpicker popup.</summary>
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
			///<summary>Enables the DatePicker control.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current date value in the DatePicker control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the DatePicker popup, when in opened state.</summary>
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
			///<param name='node' type='Object' optional='false' >a JSON to define a node/connector or an array of nodes and connector</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addLabel' : function (nodeName, newLabel){
		///<signature>
			///<summary>Add a label to a node at runtime</summary>
			///<param name='nodeName' type='string' optional='false' >name of the node to which label will be added</param>
			///<param name='newLabel' type='Object' optional='false' >JSON for the new label to be added</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addPhase' : function (name, options){
		///<signature>
			///<summary>Add a phase to a swimlane at runtime</summary>
			///<param name='name' type='String' optional='false' >name of the swimlane to which the phase will be added</param>
			///<param name='options' type='Object' optional='false' >JSON object to define the phase to be added</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addPorts' : function (name, ports){
		///<signature>
			///<summary>Add a collection of ports to the node specified by name</summary>
			///<param name='name' type='String' optional='false' >name of the node to which the ports have to be added</param>
			///<param name='ports' type='Array' optional='false' >a collection of ports to be added to the specified node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addSelection' : function (node, clearSelection){
		///<signature>
			///<summary>Add the specified node to selection list</summary>
			///<param name='node' type='Object' optional='false' >the node to be selected</param>
			///<param name='clearSelection' type='Boolean ' optional='true' >to define whether to clear the existing selection or not</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'align' : function (direction){
		///<signature>
			///<summary>Align the selected objects based on the reference object and direction</summary>
			///<param name='direction' type='String' optional='false' >to specify the direction towards which the selected objects are to be aligned("left","right",top","bottom")</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringIntoView' : function (rect){
		///<signature>
			///<summary>Bring the specified portion of the diagram content to the diagram viewport</summary>
			///<param name='rect' type='Object' optional='false' >the rectangular region that is to be brought into diagram viewport</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringToCenter' : function (rect){
		///<signature>
			///<summary>Bring the specified portion of the diagram content to the center of the diagram viewport</summary>
			///<param name='rect' type='Object' optional='false' >the rectangular region that is to be brought to the center of diagram viewport</param>
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
			///<param name='options' type='Object ' optional='true' >options to export the desired region of diagram to the desired formats</param>
			///<param name='options.fileName' type='String' optional='false' >name of the file to be downloaded</param>
			///<param name='options.format' type='String' optional='false' >format of the exported file/data See <a href="global.html#fileformats">FileFormats</a></param>
			///<param name='options.mode' type='String' optional='false' >to set whether to export diagram as a file or as raw data See <a href="global.html#exportmodes">ExportModes</a></param>
			///<param name='options.region' type='String' optional='false' >to set the region of the diagram to be exported See <a href="global.html#region">Region</a></param>
			///<param name='options.bounds' type='Object' optional='false' >to export any custom region of diagram</param>
			///<param name='options.margin' type='Object' optional='false' >to set margin to the exported data</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'findNode' : function (name){
		///<signature>
			///<summary>Read a node/connector object by its name</summary>
			///<param name='name' type='String' optional='false' >name of the node/connector that is to be identified</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'fitToPage' : function (mode, region, margin){
		///<signature>
			///<summary>Fit the diagram content into diagram viewport</summary>
			///<param name='mode' type='String ' optional='true' >to set the mode of fit to command. See <a href="global.html#fitmode">FitMode</a></param>
			///<param name='region' type='String ' optional='true' >to set whether the region to be fit will be based on diagram elements or page settings <a href="global.html#region">Region</a></param>
			///<param name='margin' type='Object ' optional='true' >to set the required margin</param>
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
			///<param name='name' type='String' optional='false' >name of the node to which the label has to be inserted</param>
			///<param name='label' type='Object' optional='false' >JSON to define the new label</param>
			///<param name='index' type='Number ' optional='true' >index to insert the label into the node</param>
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
			///<param name='data' type='Object' optional='false' >JSON data to load the diagram</param>
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
			///<param name='direction' type='String' optional='false' >specifies the direction to move the selected objects ("left","right",top","bottom")</param>
			///<param name='delta' type='Number ' optional='true' >specifies the number of pixels by which the selected objects have to be moved</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'paste' : function (object, rename){
		///<signature>
			///<summary>Paste the selected object from internal clipboard to diagram</summary>
			///<param name='object' type='Object ' optional='true' >object to be added to diagram</param>
			///<param name='rename' type='Boolean ' optional='true' >to define whether the specified object is to be renamed or not</param>
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
			///<param name='node' type='Object ' optional='true' >the node/connector to be removed from diagram</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeSelection' : function (node){
		///<signature>
			///<summary>Remove a particular object from selection list</summary>
			///<param name='node' type='Object' optional='false' >the node/connector to be removed from selection list</param>
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
			///<param name='node' type='Object' optional='false' >the node/connector to be brought into view</param>
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
			///<param name='node' type='Object' optional='false' >node/connector that contains the label to be edited</param>
			///<param name='label' type='Object' optional='false' >to be edited</param>
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
			///<param name='options' type='Object' optional='false' >JSON to specify the diagram properties that have to be modified</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateConnector' : function (name, options){
		///<signature>
			///<summary>Update Connectors at runtime</summary>
			///<param name='name' type='String' optional='false' >name of the connector to be updated</param>
			///<param name='options' type='Object' optional='false' >JSON to specify the connector properties that have to be updated</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateLabel' : function (nodeName, label, options){
		///<signature>
			///<summary>Update the given label at runtime</summary>
			///<param name='nodeName' type='String' optional='false' >the name of node/connector which contains the label to be updated</param>
			///<param name='label' type='Object' optional='false' >the label to be modified</param>
			///<param name='options' type='Object' optional='false' >JSON to specify the label properties that have to be updated</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateNode' : function (name, options){
		///<signature>
			///<summary>Update nodes at runtime</summary>
			///<param name='name' type='String' optional='false' >name of the node that is to be updated</param>
			///<param name='options' type='Object' optional='false' >JSON to specify the properties of node that have to be updated</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updatePort' : function (nodeName, port, options){
		///<signature>
			///<summary>Update a port with its modified properties at runtime</summary>
			///<param name='nodeName' type='String' optional='false' >the name of node which contains the port to be updated</param>
			///<param name='port' type='Object' optional='false' >the port to be updated</param>
			///<param name='options' type='Object' optional='false' >JSON to specify the properties of the port that have to be updated</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateSelectedObject' : function (name){
		///<signature>
			///<summary>Update the specified node as selected object</summary>
			///<param name='name' type='String' optional='false' >name of the node to be updated as selected object</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateSelection' : function (showUserHandles){
		///<signature>
			///<summary>Update the selection at runtime</summary>
			///<param name='showUserHandles' type='Boolean ' optional='true' >to specify whether to show the user handles or not</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateUserHandles' : function (node){
		///<signature>
			///<summary>Update userhandles with respect to the given node</summary>
			///<param name='node' type='Object' optional='false' >node/connector with respect to which, the user handles have to be updated</param>
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
			///<param name='data' type='Object' optional='false' >to be upgraded</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'zoomTo' : function (zoom){
		///<signature>
			///<summary>Used to zoomIn/zoomOut diagram</summary>
			///<param name='zoom' type='Object' optional='false' >options to zoom the diagram(zoom factor, zoomin/zoomout)</param>
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
	'addItem' : function(){
		///<signature>
			///<summary>Adding a single item or an array of items into the DropDownList allows you to specify all the field attributes such as value, template, image URL, and html attributes for those items. </summary>
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
	'disableItemsByIndices' : function(){
		///<signature>
			///<summary>This property disables the set of items in the DropDownList.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>This property enables the DropDownList control.</summary>
		///</signature>
	},
	'enableItemsByIndices' : function(){
		///<signature>
			///<summary>Enables an Item or set of Items that are disabled in the DropDownList</summary>
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
	'selectItemsByIndices' : function(){
		///<signature>
			///<summary>This method is used to select the list of items in the DropDownList through the Index of the items.</summary>
		///</signature>
	},
	'selectItemByText' : function(){
		///<signature>
			///<summary>This method is used to select an item in the DropDownList by using the given text value.</summary>
		///</signature>
	},
	'selectItemByValue' : function(){
		///<signature>
			///<summary>This method is used to select an item in the DropDownList by using the given value.</summary>
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
	'unselectItemsByIndices' : function(){
		///<signature>
			///<summary>This method is used to unselect the list of items in the DropDownList through Index of the items.</summary>
		///</signature>
	},
	'unselectItemByText' : function(){
		///<signature>
			///<summary>This method is used to unselect an item in the DropDownList by using the given text value.</summary>
		///</signature>
	},
	'unselectItemByValue' : function(){
		///<signature>
			///<summary>This method is used to unselect an item in the DropDownList by using the given value.</summary>
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
	'disableMenuItem' : function(){
		///<signature>
			///<summary>Disable the particular context menu item.</summary>
		///</signature>
	},
	'disableToolbarItem' : function(){
		///<signature>
			///<summary>Disable the particular toolbar item.</summary>
		///</signature>
	},
	'enableMenuItem' : function(){
		///<signature>
			///<summary>Enable the particular context menu item.</summary>
		///</signature>
	},
	'enableToolbarItem' : function(){
		///<signature>
			///<summary>Enable the particular toolbar item</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refresh the content of the selected folder in FileExplorer control.</summary>
		///</signature>
	},
	'removeToolbarItem' : function(){
		///<signature>
			///<summary>Remove the particular toolbar item.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.ListView.prototype, {
	'addItem' : function(){
		///<signature>
			///<summary>To add item in the given index.</summary>
		///</signature>
	},
	'checkAllItem' : function(){
		///<signature>
			///<summary>To check all the items.</summary>
		///</signature>
	},
	'checkItem' : function(){
		///<signature>
			///<summary>To check item in the given index.</summary>
		///</signature>
	},
	'clear' : function(){
		///<signature>
			///<summary>To clear all the list item in the control before updating with new datasource.</summary>
		///</signature>
	},
	'deActive' : function(){
		///<signature>
			///<summary>To make the item in the given index to be default state.</summary>
		///</signature>
	},
	'disableItem' : function(){
		///<signature>
			///<summary>To disable item in the given index.</summary>
		///</signature>
	},
	'enableItem' : function(){
		///<signature>
			///<summary>To enable item in the given index.</summary>
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
	'getItemText' : function(){
		///<signature>
			///<summary>To get the text of the item in the given index.</summary>
		///</signature>
	},
	'hasChild' : function(){
		///<signature>
			///<summary>To check whether the item in the given index has child item.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the list.</summary>
		///</signature>
	},
	'hideItem' : function(){
		///<signature>
			///<summary>To hide item in the given index.</summary>
		///</signature>
	},
	'isChecked' : function(){
		///<signature>
			///<summary>To check whether item in the given index is checked.</summary>
		///</signature>
	},
	'loadAjaxContent' : function(){
		///<signature>
			///<summary>To load the ajax content while selecting the item.</summary>
		///</signature>
	},
	'removeCheckMark' : function(){
		///<signature>
			///<summary>To remove the check mark either for specific item in the given index or for all items.</summary>
		///</signature>
	},
	'removeItem' : function(){
		///<signature>
			///<summary>To remove item in the given index.</summary>
		///</signature>
	},
	'selectItem' : function(){
		///<signature>
			///<summary>To select item in the given index.</summary>
		///</signature>
	},
	'setActive' : function(){
		///<signature>
			///<summary>To make the item in the given index to be active state.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the list.</summary>
		///</signature>
	},
	'showItem' : function(){
		///<signature>
			///<summary>To show item in the given index.</summary>
		///</signature>
	},
	'unCheckAllItem' : function(){
		///<signature>
			///<summary>To uncheck all the items.</summary>
		///</signature>
	},
	'unCheckItem' : function(){
		///<signature>
			///<summary>To uncheck item in the given index.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.MaskEdit.prototype, {
	'clear' : function(){
		///<signature>
			///<summary>To clear the text in maskedit textbox control.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the maskedit textbox control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the maskedit textbox control.</summary>
		///</signature>
	},
	'get_StrippedValue' : function(){
		///<signature>
			///<summary>To obtained the pure value of the textvalue, removes all the symbols in maskedit textbox control.</summary>
		///</signature>
	},
	'get_UnstrippedValue' : function(){
		///<signature>
			///<summary>To obtained the textbox value as such that, Just replace all '_' to ' '(space) in maskedit textbox control.</summary>
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
			///<param name='{% highlight html %} itemtext{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' >Specifies the Menu Item Text to be disabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableItembyID' : function (itemid){
		///<signature>
			///<summary>Specifies the Menu Item to be disabled by using the Menu Item Id.</summary>
			///<param name='{% highlight html %} itemid{% endhighlight %}' type='<span class="param-type">string</span> | <span class="param-type">number</span>' optional='false' >Specifies the Menu Item id to be disabled</param>
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
			///<param name='{% highlight html %} itemtext{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' >Specifies the Menu Item Text to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableItembyID' : function (itemid){
		///<signature>
			///<summary>Specifies the Menu Item to be enabled by using the Menu Item Id.</summary>
			///<param name='{% highlight html %} itemid{% endhighlight %}' type='<span class="param-type">string</span> | <span class="param-type">number</span>' optional='false' >Specifies the Menu Item id to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'hideContextMenu' : function(){
		///<signature>
			///<summary>Hides the Context Menu control.</summary>
		///</signature>
	},
	'insert' : function (item, target){
		///<signature>
			///<summary>Insert the menu item as child of target node.</summary>
			///<param name='{% highlight html %} item{% endhighlight %}' type='<span class="param-type">ArrayObject</span>' optional='false' >Information about Menu item.</param>
			///<param name='{% highlight html %} target{% endhighlight %}' type='<span class="param-type">string</span> | <span class="param-type">Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertAfter' : function (item, target){
		///<signature>
			///<summary>Insert the menu item after the target node.</summary>
			///<param name='{% highlight html %} item{% endhighlight %}' type='<span class="param-type">ArrayObject</span>' optional='false' >Information about Menu item.</param>
			///<param name='{% highlight html %} target{% endhighlight %}' type='<span class="param-type">string</span> | <span class="param-type">Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertBefore' : function (item, target){
		///<signature>
			///<summary>Insert the menu item before the target node.</summary>
			///<param name='{% highlight html %} item{% endhighlight %}' type='<span class="param-type">ArrayObject</span>' optional='false' >Information about Menu item.</param>
			///<param name='{% highlight html %} target{% endhighlight %}' type='<span class="param-type">string</span> | <span class="param-type">Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'remove' : function (target){
		///<signature>
			///<summary>Remove Menu item.</summary>
			///<param name='{% highlight html %} target{% endhighlight %}' type='<span class="param-type">ArrayObject</span> | <span class="param-type">ArrayString</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showContextMenu' : function (locationX, locationY, targetElement, event){
		///<signature>
			///<summary>Shows the Context Menu .</summary>
			///<param name='{% highlight html %} locationX{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >x co-ordinate position of context menu.</param>
			///<param name='{% highlight html %} locationY{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >y co-ordinate position of context menu.</param>
			///<param name='{% highlight html %} targetElement{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >target element</param>
			///<param name='{% highlight html %} event{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >name of the event</param>
			///<returns type ='Syncfusion' />
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
intellisense.annotate(ej.OlapChart.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the OLAP Chart widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'doAjaxPost' : function(){
		///<signature>
			///<summary>Perform an asynchronous HTTP (Ajax) request.</summary>
		///</signature>
	},
	'renderChartFromJSON' : function(){
		///<signature>
			///<summary>This function receives the JSON formatted datasource to render the OLAP Chart control.</summary>
		///</signature>
	},
	'renderControlSuccess' : function(){
		///<signature>
			///<summary>This function receives the controls update from service-end which would be utilized for rendering the widget.</summary>
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
	'getPercent' : function(){
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
intellisense.annotate(ej.RadioButton.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the RadioButton widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
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
intellisense.annotate(ej.Rating.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Rating widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>To get the current value of rating control</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the rating control</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>user can refresh the rating control to identify changes</summary>
		///</signature>
	},
	'reset' : function(){
		///<signature>
			///<summary>To reset the rating value</summary>
		///</signature>
	},
	'setValue' : function(){
		///<signature>
			///<summary>To set the current value of rating control</summary>
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
			///<summary>Adds contextual tab or contextual tab set dynamically in the ribbon control with contextualtabs object and index position. When index is null, ribbon contextual tab or contextual tab set is added at the last index.</summary>
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
	'addTabGroup' : function (tabIndex, tabGroup, grpIndex){
		///<signature>
			///<summary>Adds tab group dynamically in the ribbon control with given tab index, tab group object and group index position. When group index is null, ribbon group is added at the last index.</summary>
			///<param name='tabIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='tabGroup' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='grpIndex' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addTabGroupContent' : function (tabIndex, grpIndex, subGrpIndex, content, contentIndex){
		///<signature>
			///<summary>Adds group content dynamically in the ribbon control with given tab index, group index, sub group index, content and content index position. When content index is null, content is added at the last index.</summary>
			///<param name='tabIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='grpIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='subGrpIndex' type='<span class="param-type">number</span>' optional='false' ></param>
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
			///<returns type ='thegivenindextabintheribboncontrol.' />
		///</signature>
	},
	'hideTab' : function (string){
		///<signature>
			///<summary>Hides the given text tab in the ribbon control.</summary>
			///<param name='string' type='<span class="param-type">srting</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isEnable' : function (string){
		///<signature>
			///<summary>Checks whether the given text tab in the ribbon control is enabled or not.</summary>
			///<param name='string' type='<span class="param-type">srting</span>' optional='false' ></param>
			///<returns type ='truewhenenabled,elsefalse..' />
		///</signature>
	},
	'isVisible' : function (string){
		///<signature>
			///<summary>Checks whether the given text tab in the ribbon control is visible or not.</summary>
			///<param name='string' type='<span class="param-type">srting</span>' optional='false' ></param>
			///<returns type ='truewhenvisible,elsefalse.' />
		///</signature>
	},
	'removeTab' : function (index){
		///<signature>
			///<summary>Removes the given index tab item from the ribbon control.</summary>
			///<param name='index' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTabText' : function (string, string){
		///<signature>
			///<summary>Sets new text to the given text tab in the ribbon control.</summary>
			///<param name='string' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='string' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showBackstage' : function(){
		///<signature>
			///<summary>Displays the ribbon backstage page.</summary>
		///</signature>
	},
	'showTab' : function (string){
		///<signature>
			///<summary>Displays the given text tab in the ribbon control.</summary>
			///<param name='string' type='<span class="param-type">srting</span>' optional='false' ></param>
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
			///<summary>Gets the selected html string from the RTE control.</summary>
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
	'removeToolbarItem' : function(){
		///<signature>
			///<summary>Removes the given tool from the RTE ToolBbar.</summary>
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
			///<summary>Sets the colorpicker model type rendered initially in the RTE control.</summary>
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
	'deleteAppointment' : function (guid){
		///<signature>
			///<summary>This method is used to delete the appointment based on the guid value passed to it.</summary>
			///<param name='guid' type='string' optional='false' >guid value of an appointment element</param>
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
			///<param name='id' type='string/number' optional='false' >Pass the id of an appointment, in case if a single appointment needs to be exported. Otherwise, it takes the null value.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'filterAppointments' : function (filterConditions){
		///<signature>
			///<summary>Searches the appointments from appointment list of Schedule control.</summary>
			///<param name='filterConditions' type='array' optional='false' >Holds array of one or more conditional objects for filtering the appointments based on it.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getAppointments' : function(){
		///<signature>
			///<summary>Gets the appointment list of Schedule control.</summary>
		///</signature>
	},
	'print' : function(){
		///<signature>
			///<summary>Prints the Scheduler.</summary>
		///</signature>
	},
	'refreshScroller' : function(){
		///<signature>
			///<summary>Refreshes the Scroller within Scheduler while using it with some other controls or application.</summary>
		///</signature>
	},
	'saveAppointment' : function (appointmentObject){
		///<signature>
			///<summary>It is used to save the appointment. The appointment obj is based on the argument passed along with this method.</summary>
			///<param name='appointmentObject' type='object' optional='false' >appointment object which includes appointment details</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'searchAppointments' : function (searchString, field, operator, ignoreCase){
		///<signature>
			///<summary>Searches the appointments from the appointment list of Schedule control.</summary>
			///<param name='searchString' type='object/string' optional='false' >Defines the search word or the filter condition, based on which the appointments are filtered from the list.</param>
			///<param name='field' type='string' optional='false' >Defines the field name on which the search is to be made.</param>
			///<param name='operator' type='enum/string' optional='false' >Defines the filterOperator value for the search operation.</param>
			///<param name='ignoreCase' type='boolean' optional='false' >Defines the ignoreCase value for performing the search operation.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>To refresh the Schedule control.</summary>
		///</signature>
	},
	'refreshAppointment' : function(){
		///<signature>
			///<summary>Refreshes only the appointments within the Schedule control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Scroller.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Scroller control all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
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
			///<summary>Returns horizontal scrollbar is shown or not.</summary>
		///</signature>
	},
	'isVScroll' : function(){
		///<signature>
			///<summary>Returns vertical scrollbar is shown or not.</summary>
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
	}
});
intellisense.annotate(ej.Splitter.prototype, {
	'addItem' : function (content, property, index){
		///<signature>
			///<summary>To add the new pane to splitter control.</summary>
			///<param name='{% highlight html %} content{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' >content of pane.</param>
			///<param name='{% highlight html %} property{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >pane properties.</param>
			///<param name='{% highlight html %} index{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >index of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapse' : function(){
		///<signature>
			///<summary>To collapse the splitter control pane.</summary>
		///</signature>
	},
	'expand' : function(){
		///<signature>
			///<summary>To expand the splitter control pane.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>To refresh the splitter control pane resizing.</summary>
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>To remove the new pane from the splitter control.</summary>
			///<param name='{% highlight html %} index{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >index of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Tab.prototype, {
	'addItem' : function (url, displayLabel, index){
		///<signature>
			///<summary>Add new tab items with given name, url and given index position, if index null it&rsquo;s add last item.</summary>
			///<param name='{% highlight html %} url{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' >URL name / tab id.</param>
			///<param name='{% highlight html %} displayLabel{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' >Tab Display name.</param>
			///<param name='{% highlight html %} index{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >Index position to placed , this is optional.</param>
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
	'removeItem' : function (index){
		///<signature>
			///<summary>Remove the given index tab item.</summary>
			///<param name='{% highlight html %} index{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >index of tab item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>This function is to show the tab control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.TagCloud.prototype, {
	'insert' : function(){
		///<signature>
			///<summary>Inserts a new item into the TagCloud</summary>
		///</signature>
	},
	'insertAt' : function(){
		///<signature>
			///<summary>Inserts a new item into the TagCloud at a particular position.</summary>
		///</signature>
	},
	'remove' : function (name){
		///<signature>
			///<summary>Removes the item from the TagCloud based on the name. It removes all the tags which have the corresponding name</summary>
			///<param name='{% highlight html %} name{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' >name of the tag.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeAt' : function (position){
		///<signature>
			///<summary>Removes the item from the TagCloud based on the position. It removes the tags from the the corresponding position only.</summary>
			///<param name='{% highlight html %} position{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >position of tag item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Tile.prototype, {
	'updateTemplate' : function(){
		///<signature>
			///<summary>Update the image template to another one.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.TimePicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>To disable the timepicker</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the timepicker</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>returns the current time value</summary>
		///</signature>
	},
	'setCurrentTime' : function(){
		///<signature>
			///<summary>updates the current system time to timepicker</summary>
		///</signature>
	}
});
intellisense.annotate(ej.ToggleButton.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>To destroy the toggle button</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the toggle button</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the toggle button</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Toolbar.prototype, {
	'deselectItem' : function(){
		///<signature>
			///<summary>To Deselect the Toolbar item</summary>
		///</signature>
	},
	'deselectItemByID' : function(){
		///<signature>
			///<summary>To Deselect the Toolbar item by id</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Toolbar widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To Disable all item in the Toolbar</summary>
		///</signature>
	},
	'disableItem' : function(){
		///<signature>
			///<summary>To disable an item the Toolbar</summary>
		///</signature>
	},
	'disableItemByID' : function(){
		///<signature>
			///<summary>To Disable the Toolbar item by item id in the Toolbar</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable all item in the Toolbar</summary>
		///</signature>
	},
	'enableItem' : function(){
		///<signature>
			///<summary>To enable an item the Toolbar</summary>
		///</signature>
	},
	'enableItemByID' : function(){
		///<signature>
			///<summary>To Disable the Toolbar item by item id in the Toolbar</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the Toolbar</summary>
		///</signature>
	},
	'removeItem' : function(){
		///<signature>
			///<summary>To Remove the Toolbar item</summary>
		///</signature>
	},
	'removeItemByID' : function(){
		///<signature>
			///<summary>To Remove the Toolbar item by id</summary>
		///</signature>
	},
	'selectItem' : function(){
		///<signature>
			///<summary>To Select the Toolbar item</summary>
		///</signature>
	},
	'selectItemByID' : function(){
		///<signature>
			///<summary>To Select the Toolbar item by id</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the Toolbar</summary>
		///</signature>
	}
});
intellisense.annotate(ej.TreeGrid.prototype, {
	'clearSelection' : function (index){
		///<signature>
			///<summary>To clear all the selection in treegrid</summary>
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
	'saveCell' : function(){
		///<signature>
			///<summary>To save the edited cell in treegrid</summary>
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
			///<param name='{% highlight html %} newNodeText{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >New node text or JSON object</param>
			///<param name='{% highlight html %} target{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
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
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
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
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableNode' : function (element){
		///<signature>
			///<summary>To disable the node in the TreeView.</summary>
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableNode' : function (element){
		///<signature>
			///<summary>To enable the node in the TreeView.</summary>
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ensureVisible' : function (element){
		///<signature>
			///<summary>To ensure that the TreeView node is visible in the TreeView. This method is useful if we need select a TreeView node dynamically.</summary>
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
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
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
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
	'getCount' : function(){
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
			///<param name='{% highlight html %} index{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >Index position of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getNode' : function (element){
		///<signature>
			///<summary>To get TreeView node data such as id, text, parentId, selected, checked, expanded, level, childs and index.</summary>
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getNodeIndex' : function (element){
		///<signature>
			///<summary>To get current index position of TreeView node.</summary>
			///<param name='{% highlight html %} element{% endhighlight %}' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
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
			///<summary> The AutoComplete control is a textbox control that provides a list of suggestions based on the user query.When the users enters the text in the text box, the control performs a search operation and provides a list of results in the suggestion pop up. There are several filter types available to perform the search. {% highlight js %} $(element).ejAutocomplete() {% endhighlight %} Example {:.example} {% highlight html %} <input type="text" id="autocomplete" /> <script> // Create AutoComplete $('#autocomplete').ejAutocomplete({ dataSource: window.carList,value:"Austin-Healey" }); </script> {% endhighlight %} Requires {:.require} * module:jQuery * module:jquery.easing.1.3.js * module:ej.core.js * module:ej.data.js * module:ej.autocomplete.js * module:ej.scroller.js ## Members ### addNewText<span class="type-signature type string">string</span> {:#members:addnewtext} Customize "Add New" text (label) to be added in the autocomplete popup list for the entered text when there are no suggestions for it. N> This property is applicable only when the “[MultiSelectMode](http://help.syncfusion.com/js/api/ejautocomplete#members:multiselectmode)” property is set as “VisualMode” and “[AllowAddNew](http://help.syncfusion.com/js/api/ejautocomplete#members:allowaddnew)” property is set as “true”. Default Value: {:.param} “Add New” Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ dataSource: window.carList, allowAddNew: true, addNewText: "Add New Car", multiSelectMode:"visualmode" }); {% endhighlight %} ### allowAddNew<span class="type-signature type boolean">boolean</span> {:#members:allowaddnew} Allows new values to be added to the autocomplete input other than the values in the suggestion list. Normally, when there are no suggestions it will display “No suggestions” label in the popup. N> This property will work only when the “[MultiSelectMode](http://help.syncfusion.com/js/api/ejautocomplete#members:multiselectmode)” property is set as “VisualMode” Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ allowAddNew: true, multiSelectMode: "visualmode" }); {% endhighlight %} ### allowSorting<span class="type-signature type boolean">boolean</span> {:#members:allowsorting} Enables or disables the sorting of suggestion list item. The default sort order is ascending order. You customize sort order. {%seealso%} [SortOrder](http://help.syncfusion.com/js/api/global.html#SortOrder) {%endseealso%} Default Value: {:.param} true Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ allowSorting: false }); {% endhighlight %} ### autoFocus<span class="type-signature type boolean">boolean</span> {:#members:autofocus} To focus the items in the suggestion list when the popup is shown. By default first item will be focused. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ autoFocus: true }); {% endhighlight %} ### caseSensitiveSearch<span class="type-signature type boolean">boolean</span> {:#members:casesensitivesearch} Enables or disables the case sensitive search. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ caseSensitiveSearch: true }); {% endhighlight %} ### cssClass<span class="type-signature type string">string</span> {:#members:cssclass} The root class for the **Autocomplete** textbox widget which helps in customizing its theme. Default Value: {:.param} ”” Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ cssClass: 'gradient-lime' }); {% endhighlight %} ### dataSource<span class="type-signature type JSONobject array">JSONobject/array</span> {:#members:datasource} The data source contains the list of data for the suggestions list. It can be a string array or json array. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ dataSource: window.carList, value: "Austin-Healey" }); {% endhighlight %} ### delaySuggestionTimeout<span class="type-signature type number">number</span> {:#members:delaysuggestiontimeout} The time delay (in milliseconds) after which the suggestion popup will be shown. Default Value: {:.param} 200 Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ delaySuggestionTimeout: 500 }); {% endhighlight %} ### delimiterChar<span class="type-signature type string">string</span> {:#members:delimiterchar} The special character which acts as a separator for the given words for multi-mode search i.e. the text after the delimiter are considered as a separate word or query for search operation. N> 1. This property is applicable only when the “[MultiSelectMode](http://help.syncfusion.com/js/api/ejautocomplete#members:multiselectmode)” property set as “Delimiter”. N> 2. The delimiter string should have a single character and must be a symbol. N> 3. Mostly the delimiter symbol is used as (comma ,) or (semi-colon ;) or any other special character. Default Value: {:.param} ’,’ Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ multiSelectMode: ej.MultiSelectMode.Delimiter, delimiterChar: ';' }); {% endhighlight %} ### emptyResultText<span class="type-signature type string">string</span> {:#members:emptyresulttext} The text to be displayed in the popup when there are no suggestions available for the entered text. N> This property is applicable only when the [showEmptyResultText](http://help.syncfusion.com/js/api/ejautocomplete#members:showemptyresulttext) property set as “true” Default Value: {:.param} “No suggestions” Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ emptyResultText: 'No Results Found' }); {% endhighlight %} ### enableAutoFill<span class="type-signature type boolean">boolean</span> {:#members:enableautofill} Fills the autocomplete textbox with the first matched item from the suggestion list automatically based on the entered text when enabled. N> This property works only when “[filterType](http://help.syncfusion.com/js/api/ejautocomplete#members:filtertype)” property is set as “startswith” Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ enableAutoFill: true }); {% endhighlight %} ### enabled<span class="type-signature type boolean">boolean</span> {:#members:enabled} Enables or disables the **Autocomplete** textbox widget. Default Value: {:.param} true Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ enabled: false }); {% endhighlight %} ### enableDistinct<span class="type-signature type boolean">boolean</span> {:#members:enabledistinct} Enables or disables displaying the duplicate names present in the search result. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ enableDistinct: true }); {% endhighlight %} ### enablePersistence<span class="type-signature type boolean">boolean</span> {:#members:enablepersistence} Allows the current model values to be saved in local storage or browser cookies for state maintenance when it is set to true. While refreshing the page, it retains the model value from browser cookies or local storage. N> [Local storage](http://www.w3schools.com/html/html5_webstorage.asp#) is supported only in Html5 supported browsers. If the browsers don’t have support for local storage, browser cookies will be used to maintain the state. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ enablePersistence: true }); {% endhighlight %} ### enableRTL<span class="type-signature type boolean">boolean</span> {:#members:enablertl} Displays the Autocomplete widget’s content from right to left when enabled. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ enableRTL: true }); {% endhighlight %} ### fields<span class="type-signature type JSONobject">JSONobject</span> {:#members:fields} Mapping fields for the suggestion items of the **Autocomplete** textbox widget. Default Value: {:.param} null <table> <tr> <td>fields.category[Deprecated]<br/><br/></td> <td>Used to group the suggestion list items. <br/><br/>Note: Since this is deprecated, we suggest you to use fields.groupBy API.<br/><br/></td> </tr> <tr> <td> fields.groupBy<br/><br/></td><td> Used to group the suggestion list items. <br/><br/></td> </tr> <tr> <td>fields.htmlAttributes<br/><br/></td> <td>Defines the html attributes such as id, class, styles for the item.<br/><br/></td> </tr> <tr> <td>fields.key<br/><br/></td> <td>Defines the specific field name which contains unique key values for the list items.<br/><br/></td> </tr> <tr> <td>fields.text<br/><br/></td> <td>Defines the specific field name in the data source to load the suggestion list with data.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ fields: { text: "name", key: "id" } }); {% endhighlight %} ### filterType<span class="type-signature type string">string</span> {:#members:filtertype} Specifies the search filter type. There are several types of search filter available such as ‘startswith’, ‘contains’, ‘endswith’, ‘lessthan’, ‘lessthanorequal’, ‘greaterthan’, ‘greaterthanorequal’, ‘equal’, ‘notequal’. Default Value: {:.param} ej.filterType.StartsWith Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ filterType: 'contains' }); {% endhighlight %} ### height<span class="type-signature type string">string</span> {:#members:height} The height of the Autocomplete textbox. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ height: 30 }); {% endhighlight %} ### highlightSearch<span class="type-signature type boolean">boolean</span> {:#members:highlightsearch} The search text can be highlighted in the AutoComplete suggestion list when enabled. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ highlightSearch: true }); {% endhighlight %} ### itemsCount<span class="type-signature type integer">integer</span> {:#members:itemscount} Number of items to be displayed in the suggestion list. Default Value: {:.param} 0 Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ itemsCount: 2 }); {% endhighlight %} ### minCharacter<span class="type-signature type integer">integer</span> {:#members:mincharacter} Minimum number of character to be entered in the Autocomplete textbox to show the suggestion list. Default Value: {:.param} 1 Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ minCharacter: 3 }); {% endhighlight %} ### multiSelectMode<span class="type-signature type enum">enum</span> {:#members:multiselectmode} Enables or disables selecting multiple values from the suggestion list. Multiple values can be selected through either of the following options, 1. Delimiter - Multiple values are separated using a given special character. 2. Visual mode - Each values are displayed in separate box with close button. {%seealso%} [MultiSelectMode](http://help.syncfusion.com/js/api/global.html#MultiSelectMode) {%endseealso%} Default Value: {:.param} ej.MultiSelectMode.None Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ multiSelectMode: ej.MultiSelectMode.Delimiter }); {% endhighlight %} ### popupHeight<span class="type-signature type string">string</span> {:#members:popupheight} The height of the suggestion list. Default Value: {:.param} “152px” Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ popupHeight: '100px' }); {% endhighlight %} ### popupWidth<span class="type-signature type string">string</span> {:#members:popupwidth} The width of the suggestion list. Default Value: {:.param} “auto” Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ popupWidth: '152px' }); {% endhighlight %} ### query<span class="type-signature type ej.Query">ej.Query</span> {:#members:query} The query to retrieve the data from the data source. Default Value: {:.param} null Example {:.example} {% highlight js %} var dataManger = ej.DataManager({ url: "http://mvc.syncfusion.com/Services/Northwnd.svc/" }); var query = ej.Query().from("Suppliers").select("ContactName"); $("#autocomplete").ejAutocomplete({ dataSource: dataManger, query: query, fields: { text: "ContactName" } }); {% endhighlight %} ### readOnly<span class="type-signature type boolean">boolean</span> {:#members:readonly} Indicates that the autocomplete textbox values can only be readable. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ readOnly: true }); {% endhighlight %} ### selectValueByKey [Deprecated] {:#members:selectvaluebykey} Sets the value for the Autocomplete textbox based on the given input key value. Example {:.example} {% highlight js %} $('#autocomplete').ejAutocomplete({ selectValueByKey: "15", fields: { text: "name", key: "key" } }); {% endhighlight %} ### showEmptyResultText<span class="type-signature type boolean">boolean</span> {:#members:showemptyresulttext} Enables or disables showing the message when there are no suggestions for the entered text. Default Value: {:.param} true Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ showEmptyResultText: false }); {% endhighlight %} ### showLoadingIcon<span class="type-signature type boolean">boolean</span> {:#members:showloadingicon} Enables or disables the loading icon to intimate the searching operation. The loading icon is visible when there is a time delay to perform the search. Default Value: {:.param} true Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ showLoadingIcon: false }); {% endhighlight %} ### showPopupButton<span class="type-signature type boolean">boolean</span> {:#members:showpopupbutton} Enables the showPopup button in autocomplete textbox. When the Showpopup button is clicked, it displays all the available data from the data source. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ showPopupButton: true }); {% endhighlight %} ### showRoundedCorner<span class="type-signature type boolean">boolean</span> {:#members:showroundedcorner} Enables or disables rounded corner. Default Value: {:.param} false Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ showRoundedCorner: true }); {% endhighlight %} ### sortOrder<span class="type-signature type enum">enum</span> {:#members:sortorder} Sort order specifies whether the suggestion list values has to be displayed in ascending or descending order. {%seealso%} [SortOrder](http://help.syncfusion.com/js/api/global.html#SortOrder) {%endseealso%} Default Value: {:.param} ej.SortOrder.Ascending Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ sortOrder: ej.SortOrder.Decending }); {% endhighlight %} ### template<span class="type-signature type string">string</span> {:#members:template} The template to display the suggestion list items with customized appearance. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ dataSource: window.mobileList, fields: { text: "pName" }, template: "<div><div class='product-text'>${pName}</div> <span class='product-quantity'> Quantity : ${quantity}</span></div>" }); {% endhighlight %} ### validationMessage<span class="type-signature type object">object</span> {:#members:validationmessage} The jQuery validation error message to be displayed on form validation. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ validationRules: { required: true }, validationMessage: { required: "Enter some value" } }); {% endhighlight %} ### validationRules<span class="type-signature type object">object</span> {:#members:validationrules} The jQuery validation rules for form validation. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ validationRules: { required: true } }); {% endhighlight %} ### value<span class="type-signature type string">string</span> {:#members:value} The value to be displayed in the autocomplete textbox. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ value: "USA" }); {% endhighlight %} ### visible<span class="type-signature type boolean">boolean</span> {:#members:visible} Enables or disables the visibility of the autocomplete textbox. Default Value: {:.param} true Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ visible: false }); {% endhighlight %} ### watermarkText<span class="type-signature type string">string</span> {:#members:watermarktext} The text to be displayed when the value of the autocomplete textbox is empty. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ watermarkText: 'Enter the car name' }); {% endhighlight %} ### width<span class="type-signature type string">string</span> {:#members:width} The width of the Autocomplete textbox. Default Value: {:.param} null Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ width: 200 }); {% endhighlight %} ## Methods ### clearText() {:#methods:cleartext} Clears the text in the Autocomplete textbox. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("clearText"); {% endhighlight %} ### destroy() {:#methods:destroy} Destroys the Autocomplete widget. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("destroy"); {% endhighlight %} ### disable() {:#methods:disable} Disables the autocomplete widget. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("disable"); {% endhighlight %} ### enable() {:#methods:enable} Enables the autocomplete widget. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("enable"); {% endhighlight %} ### getSelectedItems() {:#methods:getselecteditems} Returns objects (data object) of all the selected items in the autocomplete textbox. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("getSelectedItems"); {% endhighlight %} ### getValue() {:#methods:getvalue} Returns the current selected value from the Autocomplete textbox. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("getValue"); {% endhighlight %} ### search() {:#methods:search} Search the entered text and show it in the suggestion list if available. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("search"); {% endhighlight %} ### open() {:#methods:open} Open up the autocomplete suggestion popup with all list items. N> This method does not accept any arguments. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("open"); {% endhighlight %} ### selectValueByKey(key) {:#methods:selectvaluebykey} Sets the value of the Autocomplete textbox based on the given key value. <table> <tr> <th>Parameters<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>Key<br/><br/></td> <td>string<br/><br/></td> <td>The key value of the specific suggestion item.<br/><br/></td> </tr> </table> N> This method accepts string as an argument. Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("selectValueByKey","IND"); {% endhighlight %} ### selectValueByText(text) {:#methods:selectvaluebytext} Sets the value of the Autocomplete textbox based on the given input text value. <table> <tr> <th>Parameters<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>Text<br/><br/></td> <td>string<br/><br/></td> <td>The text (label) value of the specific suggestion item.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete("selectValueByText","India"); {% endhighlight %} ## Events ### actionSuccess {:#events:actionsuccess} Triggers when the data requested from AJAX will get successfully loaded in the **Autocomplete** widget. N> It internally uses jQuery ajaxSuccess event. For details refer [here](http://api.jquery.com/ajaxsuccess/#). Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ actionSuccess:function(arg){ //Action Success Code } }); {% endhighlight %} ### actionComplete {:#events:actioncomplete} Triggers when the AJAX requests complete. The request may get failed or succeed. N> It internally uses jQuery ajaxComplete event. For details refer [here](http://api.jquery.com/ajaxcomplete/#). Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ actionComplete:function(arg){ //Action Complete Code } }); {% endhighlight %} ### actionFailure {:#events:actionfailure} Triggers when the data requested from AJAX get failed. N> It internally uses jQuery ajaxError event. For details refer [here](http://api.jquery.com/ajaxerror/#). Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ actionFailure:function(arg){ //Action Failure Code } }); {% endhighlight %} ### change {:#events:change} Triggers when the text box value is changed. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>Boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>Object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>String<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> <tr> <td>argument.value<br/><br/></td> <td>String<br/><br/></td> <td>Value of the autocomplete textbox.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ change: function (argument) { //do something } }); {% endhighlight %} ### close {:#events:close} Triggers after the suggestion popup is closed. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>Object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>String<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ close: function (argument) { //do something } }); {% endhighlight %} ### create {:#events:create} Triggers when Autocomplete widget is created. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>string<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ create: function (argument) { //do something } }); {% endhighlight %} ### destroy {:#events:destroy} Triggers after the Autocomplete widget is destroyed. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>string<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ destroy: function (argument) { //do something } }); {% endhighlight %} ### focusIn {:#events:focusin} Triggers after the autocomplete textbox is focused. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>string<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> <tr> <td>argument.value<br/><br/></td> <td>string<br/><br/></td> <td>Value of the autocomplete textbox.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ focusIn: function (argument) { //do something } }); {% endhighlight %} ### focusOut {:#events:focusout} Triggers after the Autocomplete textbox gets out of the focus. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>string<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> <tr> <td>argument.value<br/><br/></td> <td>string<br/><br/></td> <td>Value of the autocomplete textbox.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ focusOut: function (argument) { //do something } }); {% endhighlight %} ### open {:#events:open} Triggers after the suggestion list is opened. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>string<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ open: function (argument) { //do something } }); {% endhighlight %} ### select {:#events:select} Triggers when an item has been selected from the suggestion list. <table> <tr> <th>Event Arguments<br/><br/></th> <th>Type<br/><br/></th> <th>Description<br/><br/></th> </tr> <tr> <td>argument.cancel<br/><br/></td> <td>boolean<br/><br/></td> <td>Set this option to true to cancel the event.<br/><br/></td> </tr> <tr> <td>argument.model<br/><br/></td> <td>object<br/><br/></td> <td>Instance of the autocomplete model object.<br/><br/></td> </tr> <tr> <td>argument.type<br/><br/></td> <td>string<br/><br/></td> <td>Name of the event.<br/><br/></td> </tr> <tr> <td>argument.value<br/><br/></td> <td>string<br/><br/></td> <td>Value of the autocomplete textbox.<br/><br/></td> </tr> <tr> <td>argument.text<br/><br/></td> <td>string<br/><br/></td> <td>Text of the selected item.<br/><br/></td> </tr> <tr> <td>argument.key<br/><br/></td> <td>string<br/><br/></td> <td>Key of the selected item.<br/><br/></td ></tr> <tr> <td>arugment.Item<br/><br/></td> <td>object<br/><br/></td> <td>Data object of the selected item.<br/><br/></td> </tr> </table> Example {:.example} {% highlight js %} $("#autocomplete").ejAutocomplete({ select: function (argument) { //do something } }); {% endhighlight %}</summary>
		///</signature>
	},
	'ejButton' : function (element){
		///<signature>
			///<summary> Custom Design for Html Button control. </summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for button</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejChart' : function(){
		///<signature>
			///<summary> Essential chart can be easily configured to the DOM element, such as div. You can create a Chart with highly customizable look and feel. </summary>
		///</signature>
	},
	'ejCheckBox' : function(){
		///<signature>
			///<summary> The Checkbox control allows you to check an option to perform an action. This control allows you to select true, false or an intermediate option. These checkboxes are supported with themes. The html check box control is rendered as Essential JavaScript Checkbox control. </summary>
		///</signature>
	},
	'ejColorPicker' : function (element){
		///<signature>
			///<summary> The ColorPicker control provides you a rich visual interface for color selection. You can select the color from the professionally designed palettes or custom color. By clicking a point on the color, you can change the active color to the color that is located under the pointer. </summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for color picker</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDatePicker' : function (element){
		///<signature>
			///<summary> Date selection with the input field. </summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for Date Picker.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDateTimePicker' : function (element){
		///<signature>
			///<summary> The DateTimePicker control is used to input the date and time with a specific format. It combines the DatePicker and TimePicker controls so that users can select the date and time with their desired format. </summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for Date Picker.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDiagram' : function(){
		///<signature>
			///<summary> The diagram control provides 2D surface to visualize the data as shapes, lines, text and images. It can be configured to DOM element such as DIV. </summary>
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
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for FileExplorer.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejGantt' : function(){
		///<signature>
			///<summary>. The Essential JavaScript Gantt control is designed to visualize and edit the project schedule, and track the project progress. </summary>
		///</signature>
	},
	'ejListView' : function(){
		///<signature>
			///<summary> The ListView widget builds interactive ListView interface. This control allows you to select an item from a list-like interface and display a set of data items in different layouts or views. Lists are used for displaying data, data navigation, result lists, and data entry. </summary>
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
			///<summary> Custom Design for Html OLAP Chart control. </summary>
		///</signature>
	},
	'ejProgressBar' : function(){
		///<signature>
			///<summary> The ProgressBar control is a graphical control element used to visualize the changing status of an extended operation. </summary>
		///</signature>
	},
	'ejRadioButton' : function(){
		///<signature>
			///<summary> The RadioButton control allows you to choose an option to perform an action. This control allows you to select true/false. </summary>
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
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for RTE.</param>
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
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for Slider.</param>
			///<returns type ='Syncfusion' />
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
	'ejTreeGrid' : function(){
		///<signature>
			///<summary> Custom Design for Html Tree grid control. </summary>
		///</signature>
	},
	'ejTreeView' : function (element){
		///<signature>
			///<summary> The TreeView can be easily configured with the DOM element, such as div or ul. you can create a TreeView with a highly customizable look and feel. </summary>
			///<param name='{% highlight html %} options{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' >settings for TreeView.</param>
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
