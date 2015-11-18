/**
 * Created by user on 18.11.2015.
 */
//['T','y','i','I','o','O','a','A','H','K','x','X','c','C','B','M'];//English for ukrainian
var ala = ['T','y','o','O','a','A','H','K','x','X','c','C','B','M'];//English 0
var alb = ['Т','у','о','О','а','А','Н','К','х','Х','с','С','В','М'];//Russian 1

/*
* l - current letter in text
* b - current byte in mmessage
* c - counter*/

 function writeLetter(l,b,c){
    var x0 = al0.find(l);
    var x1 = al1.find(l);
    if (x0 || x1){
        if (x1 && b==0){
            l = al0[x1];
        } else if (x0 && b==1) {
            l = al0[x0];
        }
       c--;//decrement counter of message
    } else {
        //count hui
    }
    return l;
}

/*
* m - message in binary
* t - text container
* */

 function write(m,t){
    var i;
    var c = m.length;
    for (i = t.length;i >= 0 ;i--){
        t[i] = writeLetter(t[i],m[c],c);
        if(c <= 0){
            break;
            console.log('Message ended');
        }
    }
    console.log('done');
}