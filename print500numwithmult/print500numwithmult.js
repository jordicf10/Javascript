/*
    Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
    1
    2
    3
    4 (Múltiplo de 4)
    5-

    ————————————————————-
    6
    7
    8 (Múltiplo de 4)
    9 (Múltiplo de 9)
    10
     */
    /*let linea= -1;
    for(i=1;i<=500;i++) {
        linea++;
        if (linea % 5 == 0) {

            if (linea % 4 == 0 && linea % 9 == 0) {
                document.write(i + " ( Múltiplo de 4 y Múltiplo de 9 ) " + "<br>");
            }
            document.write("------------------------" + "<br>" + (linea + 1) + "<br>");
            /*}else if(linea%4==0 && linea%9==0){
                document.write(i + " ( Múltiplo de 4 y Múltiplo de 9 ) " + "<br>");
        }else if (linea % 4 == 0 && linea % 9 == 0) {
            document.write(i + " ( Múltiplo de 4 y Múltiplo de 9 ) " + "<br>");
        } else if (i % 4 == 0 && i % 9 == 0) {
            document.write(i + " ( Múltiplo de 4 y Múltiplo de 9 ) " + "<br>");
        } else if (i % 4 == 0) {
            document.write(i + " ( Múltiplo de 4 )" + "<br>");
        } else if (i % 9 == 0) {
            document.write(i + " ( Múltiplo de 9 )" + "<br>");
        } else {
            document.write(i + "<br>");

        }
    }*/

    document.write("<h1>Welcome user to a num table and its multiples</h1>")
    for(i=1;i<=500;i++){
        document.write(i);
        if(i%4==0 && i%9==0){
            document.write(" (Múltiplo de 4 y múltiplo de 9)".fontcolor('blue'));
        }
        else if(i%4==0){
            document.write(" (Múltiplo de 4)");
        }
        else if(i%9==0){
            document.write(" (Múltiplo de 9)");
        }

        document.write("<br>");
        if(i%5==0){
            document.write("<hr>");
        }
    }
