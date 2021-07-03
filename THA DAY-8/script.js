booked_seat =0;
remaining_seat = 36;
const box = document.querySelectorAll(".all")

box.forEach(function(all){
    all.addEventListener("click", () =>{
        if(all.classList.contains('boxclicked')){
            all.classList.remove('boxclicked')
            unbooked();
        }
        else{
            all.classList.add('boxclicked');
            booked();
        }
    })
});

const booked_number = document.getElementById("booked");
const remaining_number = document.getElementById("remaining");

booked_number.textContent = booked_seat;
remaining_number.textContent = remaining_seat;

function booked(){
    booked_seat++;
    remaining_seat-=1;
    booked_number.textContent = booked_seat;
    remaining_number.textContent = remaining_seat;
}
function unbooked(){
    booked_seat-=1;
    remaining_seat+=1;
    booked_number.textContent = booked_seat;
    remaining_number.textContent = remaining_seat;
}