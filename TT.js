showMsg = function(msg){
	$("#model").modal();
	$("#data")[0].innerHTML = msg;
}
$(function(){
	$("body").append('<div id = "model" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">'
  + '<div class="modal-dialog modal-sm">'
  + '<div class="modal-content">'
  +   '<div class="modal-header">'
  +     '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
  +     '<h4 class="modal-title" id="myModalLabel">提示</h4>'
  +   '</div>'
  +   '<div class="modal-body">'
  +     '<p id = data>dddd</p>'
  +   '</div>'
  + '</div>'
  + '</div>'
  + '</div>')
})