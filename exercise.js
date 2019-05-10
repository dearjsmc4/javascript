
// 1
var x = 15;
if ( x > 10 && x < 20 ) {
    console.log(x);
}

// 2
for ( var i = 0 ; i < 10 ; i+=2 ) {
    console.log(i);
}

// 3
var even = '';
for ( var i = 0 ; i < 10 ; i+=2 ) {
    even = even + i;
}
console.log(even);

// 4
for ( var i = 9 ; i > 0 ; i-=2 ) {
    console.log(i);
}

//5 
var i = 0;
while(i < 10){
    console.log(i);
    i += 2;
}

// 6
var i = 9;
while(i > 0){
    console.log(i);
    i -= 2;
}

// 7 
var a = 0;
for (var i = 0; i < 10; i++) {
    a += i;
}
console.log(a);

//8
var a = 0;
for ( var i = 0; i < 20; i++ ) {
    if ( i % 2 !== 0 && i % 3 !== 0 ) {
        a += i;
    }
}
console.log(a);

// 9
var a = 0;
for ( var i = 0; i < 20; i++ ) {
    if ( i % 2 === 0 || i % 3 === 0 ) {
        a += i;
    }
}
console.log(a);

// 10
for ( var i = 1; i <= 6; i++ ) {
    for ( var a = 1; a <= 6; a++ ) {
        if ( a + i === 6 ) {
            console.log(`[${i}, ${a}]`);
        }
    }
}

// 11
var line = '';
for ( var i = 1; i <= 5; i++ ) {
    for ( var a = 0; a < i; a++ ) {
        line = line + "*";
    }
    line = line + "\n";
}
console.log(line);

// 12
var line = '';
for ( var i = 5; i >= 1; i-- ) {
    for ( var s = 5; s > i; s--) {
        line = line + " ";
    }
    for (var a = 0; a < i; a++ ) {
        line = line + "*";
    }
    line = line + "\n";
}
console.log(line);

// 13
var line = '';
for ( var i = 5; i >= 1; i-- ) {
    for ( var a = 0; a < i; a++ ) {
        line = line + "*";
    }
    line = line + "\n";
}
console.log(line);

// 14
var line = '';
for ( var i = 1; i <= 5; i++ ) {
    for ( var s = 5; s > i; s--) {
        line = line + " ";
    }
    for ( var a = 0; a < i; a++ ) {
        line = line + "*";
    }
    line = line + "\n";
}
console.log(line);

// 15
var line = '';
for ( var i = 1; i <= 5; i++ ) {
    for ( var s = 5; s > i; s--) {
        line = line + " ";
    }
    for ( var a = 0; a < i * 2 - 1; a++ ) {
        line = line + "*";
    }
    line = line + "\n";
}
console.log(line);

// 16
var line = '';
for ( var i = 5; i >= 1; i-- ) {
    for ( var s = 5; s > i; s--) {
        line = line + " ";
    }
    for ( var a = 0; a < i * 2 - 1; a++ ) {
        line = line + "*";
    }
    line = line + "\n";
}
console.log(line);
