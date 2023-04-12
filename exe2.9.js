function fishTank (input){

    let length = Number (input[0]);
    let width = Number (input[1]);
    let hight = Number (input[2]);
    let percent = Number (input[3]);

    let aquariumVolume = length*width*hight;
    let VolumeLiters = aquariumVolume * 0.001;
   
    let neededLiterWater= VolumeLiters * 0.83;



    console.log(neededLiterWater);

}


fishTank(["85 ","75 ","47 ","17 "])