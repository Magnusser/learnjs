
    console.log("I heard you was a pedophile.");

    //start of var num

    var num = 2;
    console.log(num);

    num = num + 2;

    num = 5 + 2 * 4 / 6 - 6;

    num += 3;
    num -= 4;
    num *= 4;
    num /= 4;
    num++;
    num--;
    num = 11 % 2;
    num = 2;
    num = num**3;
    console.log(typeof num);

    //end of var num
    //start of string

    let string = 'I heard you was a pedophile.';


    string += '.. WHAT!';
    console.log(string);
    console.log(typeof string);

    //end of string
    //start of bool area

    let bool = true;
    bool = false;

    bool = true && false;
    bool = true || false;
    bool = !bool;
    bool = false && true || true && !false;
    num = 10;
    bool = 2 > num;
    bool = 2 < num;
    bool = 10 == num;
    bool = 10 <= num;
    bool = 10 >= num;
    bool = 10 != num;
    bool = '10' === num;
    bool = '10' !== num;
    console.log(bool);
    console.log(typeof bool);

    //end of bool area
    //start of null/undefined

    let novalue = null;
    let novalue2 = undefined;
    console.log(novalue2); //undefined
    num = 0 * -1;
    num = 0.1 + 0.2;
    console.log(num);

    //end of null/undefined
    //start of array

    let array = [1, 2, 3, 4];
    array = ["four", undefined, null, 1];
    console.log(array);
    console.log(array[0]); //prints the position
    array[0] = 7;
    console.log(array[0]);
    array = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    console.log(array[1][1]); //valib spetsiifilise numbri
    array = [ [ [ [ [5] ] ] ] ];
    console.log(array[0][0][0][0][0]);

    //end of array
    //start of obj

    let obj = {
        name: "Magnus",
        age: "17",
        eyeColor: "Green",
        favclasses: ["monk", "druid", "warlock"]
    };

    console.log(obj); //broad term
    console.log(obj.favclasses); //specific term
    console.log(obj.favclasses[1]); //specificer term
    console.log(console);
    console.log(array.length);
    console.log(string.length);
    console.log(string [0]);