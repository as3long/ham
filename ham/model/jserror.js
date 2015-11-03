var jserror=module.exports;

jserror.log=function(obj){
    Ham.model.table("jserror").add(obj);
}