var x = 10;
function something() {
    console.log(x);
    function something1() {
        let x = 20;
        console.log(x);
    };
    something1();
}

something();
