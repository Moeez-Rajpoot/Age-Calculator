const Inputbox = document.getElementById("datePicker");
Inputbox.max = new Date().toISOString().split("T")[0];
const Display = document.getElementById("text");

function Calculate(params) {

    let dateofbirth =  new Date(Inputbox.value);

    let y1 = dateofbirth.getFullYear();
    let m1 = dateofbirth.getMonth()+1;
    let d1 = dateofbirth.getDate();

    let Currentdate = new Date();

    let y2 = Currentdate.getFullYear();
    let m2 = Currentdate.getMonth()+1;
    let d2 = Currentdate.getDate();

    let Myyear =  y2 - y1;
    let MyMon = m2 - m1;
    let Myday = d2 - d1;


    console.log("After Sub Y = " + Myyear);
    console.log("After Sub M = " + MyMon);
    console.log("After Sub D = " + Myday);


   
    if (Myyear <= 0) {
        console.log("My Year is :" + Myyear);
        Myyear =0;
        
        if (MyMon <= 0 ) {
            console.log(MyMon);
            MyMon =0;       
        }

        if (Myday <= 0) {
            console.log(Myday);
            Myday=0;   
        }
    }
    else {
   
    if(MyMon < 0 )
    {
        console.log("UPDATE MON")
        Myyear--;
        MyMon += 12;

        if (Myday < 0) {
            MyMon--;
            Myday +=  daysInMonth;
            }

    }

        const daysInMonth = new Date(
            Currentdate.getFullYear(),
            Currentdate.getMonth() + 1,
            0
          ).getDate();
        
    }
    Display.innerText = "You are "+ Myyear + " Years " + MyMon + " Months " + Myday + " Days Old. ";
    Display.style.display="flex";

    }

   
    
