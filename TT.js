showMsg = function(msg){
	$("#model").modal();
	$("#data")[0].innerHTML = msg;
}
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
　　　　　　　　　　　　var reg= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
$(function(){
	//插入bootstrap
	$("head").append('<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">')
	$("head").append('<script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>')

	//插入提示框
	$("body").append('<div id = "model" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">'
  + '<div class="modal-dialog modal-sm">'
  + '<div class="modal-content">'
  +   '<div class="modal-header">'
  +     '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
  +     '<h4 class="modal-title" id="myModalLabel">Issue</h4>'
  +   '</div>'
  +   '<div class="modal-body">'
  +     '<p id = data>dddd</p>'
  +   '</div>'
  + '</div>'
  + '</div>'
  + '</div>')
	
})