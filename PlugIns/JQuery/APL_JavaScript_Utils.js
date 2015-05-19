function APLJaxReturn(obj) {
    $.each(obj, function (i, d) {
        if (typeof (d.replace) !== "undefined") { $(d.replace).html(d.data);}
        else if (typeof (d.append) !== "undefined") { $(d.append).append(d.data);} 
        else if (typeof (d.prepend) !== "undefined") { $(d.prepend).prepend(d.data);} 
        else if (typeof (d.execute) !== "undefined") { eval(d.execute);}
        else {alert(JSON.stringify(d));}
    });
}
function JSONSubset(model, selectors) {
    if (selectors == "*") {
        return JSON.stringify(model);
    } else {
        var arr = {};
        var sel = selectors.split(" ");
        for (var s in sel) {
            if (model[sel[s]] === undefined) arr[sel[s]] = null;
            else arr[sel[s]] = model[sel[s]];
        }
        return JSON.stringify(arr);
    }
}