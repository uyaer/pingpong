function trace(str) {
    var log = "";
    for (var i = 0; i < arguments.length; i++) {
        log += arguments[i] + ",";
    }
    cc.log(log);
}

function int(val) {
    return parseInt(val);
}

/**
 * 产生包含min,max的整数
 * @param min
 * @param max
 * @returns {*}
 */
function randomInt(min, max) {
    return min + Math.ceil(Math.random() * (max - min));
}

function limit(val, min, max) {
    return Math.max(min, Math.min(val, max));
}

/**
 * 是否在2根值的中央
 * @param val
 * @param min
 * @param max
 * @returns {boolean}
 */
function isLimit(val, min, max) {
    if (val >= min && val <= max) {
        return true;
    }
    return false;
}

/**
 * =====================  hack plugins  ===================
 */

/**
 * 通过name寻找Node
 * @param root
 * @param name
 */
ccui.helper.seekNodeByName = function(root,name){
    if (!root)
        return null;
    if (root.getName() == name)
        return root;
    var arrayRootChildren = root.getChildren();
    var length = arrayRootChildren.length;
    for (var i = 0; i < length; i++) {
        var child = arrayRootChildren[i];
        var res = ccui.helper.seekNodeByName(child, name);
        if (res != null)
            return res;
    }
    return null;
}

