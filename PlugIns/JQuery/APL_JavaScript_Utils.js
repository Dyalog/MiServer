var APLJaxReturn = function(obj) {
  $.each(obj, function (i, d) {
    if (typeof (d.replace) !== "undefined") { $(d.replace).html(d.data); } 
    else if (typeof (d.append) !== "undefined") { $(d.append).append(d.data); } 
    else if (typeof (d.prepend) !== "undefined") { $(d.prepend).prepend(d.data); } 
    else if (typeof (d.execute) !== "undefined") { eval(d.execute); } 
    else if (typeof (d.assign) !== "undefined") { eval (d.assign + "= d.data"); } 
    else { alert(JSON.stringify(d)); }
  });
}

var APLstringify = function(obj) {
  if (obj instanceof Date) { return obj.toString(); } 
  else if ("object" === typeof obj) {
  	seen = [];
    var replacer = function(key, value) {
      if (value != null && typeof value == "object") {
        if (seen.indexOf(value) >= 0) {
          return;
        }
        seen.push(value);
      }
      return value;
    };
    return JSON.stringify(obj,replacer);
  } else {
    return obj;
  }
}

var JSONSubset = function(model, selectors) {
  if (selectors == "*") { 
  	return JSON.stringify(model); 
  } 
  else {
    var arr = {};
    var sel = selectors.split(" ");
    for (var s in sel) {
      if (model[sel[s]] === undefined) arr[sel[s]] = null;
      else arr[sel[s]] = model[sel[s]];
    }
    return JSON.stringify(arr);
  }
}