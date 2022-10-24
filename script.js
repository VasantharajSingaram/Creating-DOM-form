function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);//want to create element(tagname is element)
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);//want to create element(tagname is element)
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
    }
    function createlinebreak(tagname){
        var ele=document.createElement(tagname);
        return ele;
    
    }
//creating DOM form

    var fname=createlabels("label","for","fname","First Name");
    var b1=createlinebreak("br");
    var input1=createinput("input","type","text","id","fname");
    var b2=createlinebreak("br");

    var mname=createlabels("label","for","mname","Middle Name");
    var b3=createlinebreak("br");
    var input2=createinput("input","type","text","id","mname");
    var b4=createlinebreak("br");

    var lname=createlabels("label","for","lname","Last Name");
    var b5=createlinebreak("br");
    var input3=createinput("input","type","text","id","lname");
    var b6=createlinebreak("br");

    var phone=createlabels("label","for","phone","Phone Number");
    var b7=createlinebreak("br");
    var input4=createinput("input","type","tel","id","phone");
    var b8=createlinebreak("br");

    document.body.append(fname,b1,input1,b2,mname,b3,input2,b4,lname,b5,input3,b6,phone,b7,input4,b8);