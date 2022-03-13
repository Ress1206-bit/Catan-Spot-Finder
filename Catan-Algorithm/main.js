//40 and 210 need to be updated every game
import {
  hex1,hex2,hex3,hex4,hex5,hex6,hex7,hex8,hex9,hex10,hex11,hex12,hex13,hex14,hex15,hex16,hex17,hex18,hex19,num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12,num13,num14,num15,num16,num17,num18,num19
  } from './set.js';

const generate = document.getElementById("button3");
generate.onclick = function() { generater() };

const generater = () => {
  const hex1b = hex1.style.fontFamily;
  const hex2b = hex2.style.fontFamily;
  const hex3b = hex3.style.fontFamily;
  const hex4b = hex4.style.fontFamily;
  const hex5b = hex5.style.fontFamily;
  const hex6b = hex6.style.fontFamily;
  const hex7b = hex7.style.fontFamily;
  const hex8b = hex8.style.fontFamily;
  const hex9b = hex9.style.fontFamily;
  const hex10b = hex10.style.fontFamily;
  const hex11b = hex11.style.fontFamily;
  const hex12b = hex12.style.fontFamily;
  const hex13b = hex13.style.fontFamily;
  const hex14b = hex14.style.fontFamily;
  const hex15b = hex15.style.fontFamily;
  const hex16b = hex16.style.fontFamily;
  const hex17b = hex17.style.fontFamily;
  const hex18b = hex18.style.fontFamily;
  const hex19b = hex19.style.fontFamily;

  const zero = -3.25;
  const two = 1;
  const three = 4;
  const four = 8;
  const five = 11;
  const six = 14;
  const eight = 14;
  const nine = 11;
  const ten = 8;
  const eleven = 4;
  const twelve = 1;

  let woodRarity = 0;
  let brickRarity = 0
  let wheatRarity = 0;
  let oreRarity = 0;
  let sheepRarity = 0;
  let woodRarity1 = 0;
  let brickRarity1 = 0
  let wheatRarity1 = 0;
  let oreRarity1 = 0;
  let sheepRarity1 = 0;
  const pushNumber = (spot, hex, num) => { 
    let number;
    if(hex.style.fontFamily === "d0"){
      console.log('desert')
    }else{
      if(num){
        number = num.innerHTML;
      }else{
        console.log('undefined')
      }
      switch(number){
        case '2': spot.push(two); console.log('push two')
        break;
        case '3': spot.push(three);
        break;
        case '4': spot.push(four);
        break;
        case '5': spot.push(five);
        break;
        case '6': spot.push(six);
        break;
        case '8': spot.push(eight);
        break;
        case '9': spot.push(nine);
        break;
        case '10': spot.push(ten);
        break;
        case '11': spot.push(eleven);
        break;
        case '12': spot.push(twelve);
        break;
        default: console.log('desert');
        break;
      }
    }
    switch(hex.style.fontFamily){
      case "w8": spot.push(wo)
      break;
      case "b9": spot.push(br)
      break;
      case "w6": spot.push(wh)
      break;
      case "o7": spot.push(or)
      break;
      case "s3": spot.push(sh)
      break;
      case "d0": spot.push(zero, de);
      break;
    }
  }

  let wo = woodRarity1;
  let br = brickRarity1;
  let wh = wheatRarity1;
  let or = oreRarity1;
  let sh = sheepRarity1;
  let de = 0;

  let spot1 = [hex1b];
  pushNumber(spot1, hex1, num1)
  let spot2 = [hex2b];
  pushNumber(spot2, hex2, num2)
  let spot3 = [hex3b]; 
  pushNumber(spot3, hex3, num3)          
  let spot4 = [hex4b];
  pushNumber(spot4, hex4, num4)
  let spot5 = [hex5b];
  pushNumber(spot5, hex5, num5)
  let spot6 = [hex6b];
  pushNumber(spot6, hex6, num6)
  let spot7 = [hex7b];
  pushNumber(spot7, hex7, num7)
  let spot8 = [hex8b];
  pushNumber(spot8, hex8, num8)
  let spot9 = [hex9b];
  pushNumber(spot9, hex9, num9)
  let spot10 = [hex10b];
  pushNumber(spot10, hex10, num10)
  let spot11 = [hex11b];
  pushNumber(spot11, hex11, num11)
  let spot12 = [hex12b];
  pushNumber(spot12, hex12, num12)
  let spot13 = [hex13b];
  pushNumber(spot13, hex13, num13)
  let spot14 = [hex14b];
  pushNumber(spot14, hex14, num14)
  let spot15 = [hex15b];
  pushNumber(spot15, hex15, num15)
  let spot16 = [hex16b];
  pushNumber(spot16, hex16, num16)
  let spot17 = [hex17b];
  pushNumber(spot17, hex17, num17)
  let spot18 = [hex18b];
  pushNumber(spot18, hex18, num18)
  let spot19 = [hex19b];
  pushNumber(spot19, hex19, num19)




  const spots = [spot1, spot2, spot3, spot4, spot5, spot6, spot7, spot8, spot9, spot10, spot11, spot12, spot13, spot14, spot15, spot16, spot17, spot18, spot19];
  spots.forEach(element => {
      if(element[0] == "w8"){
        woodRarity += element[1];
      }
      if(element[0] == "b9"){
          brickRarity += element[1];
      }
      if(element[0] == "w6"){
          wheatRarity += element[1];
      }
      if(element[0] == "o7"){
          oreRarity += element[1];
      }
      if(element[0] == "s3"){
          sheepRarity += element[1];
      }
  })



  let rarity = [woodRarity, brickRarity, wheatRarity, oreRarity, sheepRarity];
  let rarest = rarity.reduce((a, b) => Math.min(a, b))
  console.log(rarest);

  switch(rarest) {
    case woodRarity:
          
          rarity = [brickRarity,wheatRarity, oreRarity, sheepRarity];
          woodRarity1 = 7;
      break;
    case brickRarity:
          
          rarity = [woodRarity,wheatRarity, oreRarity, sheepRarity];
          brickRarity1 = 7;
      break;
    case wheatRarity:
          
          rarity = [woodRarity, brickRarity, oreRarity, sheepRarity];
          wheatRarity1 = 7;
      break;
    case oreRarity:
          
          rarity = [woodRarity, brickRarity,wheatRarity, sheepRarity];
          oreRarity1 = 7;
      break;
    case sheepRarity:
          
          rarity = [woodRarity, brickRarity,wheatRarity, oreRarity];
          sheepRarity1 = 6;
        
  }



  rarest = rarity.reduce((a, b) => Math.min(a, b))
  switch(rarest) {
    case woodRarity:
          
          rarity = rarity.filter((id) => id !== woodRarity)
          woodRarity1 = 5;
      break;
    case brickRarity:
        
          rarity = rarity.filter((id) => id !== brickRarity)
          brickRarity1 = 5.5;
      break;
    case wheatRarity:
          
          rarity = rarity.filter((id) => id !== wheatRarity)
          wheatRarity1 = 5;
      break;
    case oreRarity:
          rarity = rarity.filter((id) => id !== oreRarity)
          oreRarity1 = 5.5;
      break;
    case sheepRarity:
          rarity = rarity.filter((id) => id !== sheepRarity)
          sheepRarity1 = 4.1;
  }

  rarest = rarity.reduce((a, b) => Math.min(a, b))
  switch(rarest) {
    case woodRarity:
          rarity = rarity.filter((id) => id !== woodRarity)
          woodRarity1 = 4;
      break;
    case brickRarity:
          rarity = rarity.filter((id) => id !== brickRarity);
          brickRarity1 = 4.5;
      break;
    case wheatRarity:
          rarity = rarity.filter((id) => id !== wheatRarity)
          wheatRarity1 = 4;
      break;
    case oreRarity:
          rarity = rarity.filter((id) => id !== oreRarity)
          oreRarity1 = 4.5;
      break;
    case sheepRarity:
          rarity = rarity.filter((id) => id !== sheepRarity)
          sheepRarity1 = 3;
  }
  if(rarest[0] > -1){
      rarest = rarity.reduce((a, b) => Math.min(a, b))
  switch(rarest) {
    case woodRarity:
          rarity = rarity.filter((id) => id !== woodRarity)
          woodRarity1 = 2;
      break;
    case brickRarity:
          rarity = rarity.filter((id) => id !== brickRarity);
          brickRarity1 = 2.25;
      break;
    case wheatRarity:
          rarity = rarity.filter((id) => id !== wheatRarity)
          wheatRarity1 = 2;
      break;
    case oreRarity:
          rarity = rarity.filter((id) => id !== oreRarity)
          oreRarity1 = 2.25;
      break;
    case sheepRarity:
          rarity = rarity.filter((id) => id !== sheepRarity)
          sheepRarity1 = 1;
  }
  }

  rarest = rarity.reduce((a, b) => Math.min(a, b))
  switch(rarest) {
    case woodRarity:
          rarity = rarity.filter((id) => id !== woodRarity)
          woodRarity1 = 1;
      break;
    case brickRarity:
          rarity = rarity.filter((id) => id !== brickRarity);
          brickRarity1 = 1;
      break;
    case wheatRarity:
          rarity = rarity.filter((id) => id !== wheatRarity)
          wheatRarity1 = 1;
      break;
    case oreRarity:
          rarity = rarity.filter((id) => id !== oreRarity)
          oreRarity1 = 1;
      break;
    case sheepRarity:
          rarity = rarity.filter((id) => id !== sheepRarity)
          sheepRarity1 = 0;
          break;
      default:
          console.log("Two material had equal rarity");
  }

  wo = woodRarity1;
  br = brickRarity1;
  wh = wheatRarity1;
  or = oreRarity1;
  sh = sheepRarity1;

  spot1 = [hex1b];
  pushNumber(spot1, hex1, num1)
  spot2 = [hex2b];
  pushNumber(spot2, hex2, num2)
  spot3 = [hex3b]; 
  pushNumber(spot3, hex3, num3)          
  spot4 = [hex4b];
  pushNumber(spot4, hex4, num4)
  spot5 = [hex5b];
  pushNumber(spot5, hex5, num5)
  spot6 = [hex6b];
  pushNumber(spot6, hex6, num6)
  spot7 = [hex7b];
  pushNumber(spot7, hex7, num7)
  spot8 = [hex8b];
  pushNumber(spot8, hex8, num8)
  spot9 = [hex9b];
  pushNumber(spot9, hex9, num9)
  spot10 = [hex10b];
  pushNumber(spot10, hex10, num10)
  spot11 = [hex11b];
  pushNumber(spot11, hex11, num11)
  spot12 = [hex12b];
  pushNumber(spot12, hex12, num12)
  spot13 = [hex13b];
  pushNumber(spot13, hex13, num13)
  spot14 = [hex14b];
  pushNumber(spot14, hex14, num14)
  spot15 = [hex15b];
  pushNumber(spot15, hex15, num15)
  spot16 = [hex16b];
  pushNumber(spot16, hex16, num16)
  spot17 = [hex17b];
  pushNumber(spot17, hex17, num17)
  spot18 = [hex18b];
  pushNumber(spot18, hex18, num18)
  spot19 = [hex19b];
  pushNumber(spot19, hex19, num19)


  const spot1a = parseInt(spot1[0].charAt(1)) + spot1[1] + spot1[2];
  const spot2a = parseInt(spot2[0].charAt(1)) + spot2[1] + spot2[2];
  const spot3a = parseInt(spot3[0].charAt(1)) + spot3[1] + spot3[2];           
  const spot4a = parseInt(spot4[0].charAt(1)) + spot4[1] + spot4[2];
  const spot5a = parseInt(spot5[0].charAt(1)) + spot5[1] + spot5[2];
  const spot6a = parseInt(spot6[0].charAt(1)) + spot6[1] + spot6[2];
  const spot7a = parseInt(spot7[0].charAt(1)) + spot7[1] + spot7[2];
  const spot8a = parseInt(spot8[0].charAt(1)) + spot8[1] + spot8[2];
  const spot9a = parseInt(spot9[0].charAt(1)) + spot9[1] + spot9[2];
  const spot10a = parseInt(spot10[0].charAt(1)) + spot10[1] + spot10[2];
  const spot11a = parseInt(spot11[0].charAt(1)) + spot11[1] + spot11[2];
  const spot12a = parseInt(spot12[0].charAt(1)) + spot12[1] + spot12[2];
  const spot13a = parseInt(spot13[0].charAt(1)) + spot13[1] + spot13[2];
  const spot14a = parseInt(spot14[0].charAt(1)) + spot14[1] + spot14[2];
  const spot15a = parseInt(spot15[0].charAt(1)) + spot15[1] + spot15[2];
  const spot16a = parseInt(spot16[0].charAt(1)) + spot16[1] + spot16[2];
  const spot17a = parseInt(spot17[0].charAt(1)) + spot17[1] + spot17[2];
  const spot18a = parseInt(spot18[0].charAt(1)) + spot18[1] + spot18[2];
  const spot19a = parseInt(spot19[0].charAt(1)) + spot19[1] + spot19[2];

  const area1s = "1,4,5";
  const area2s = "1,2,5";
  const area3s = "2,5,6";
  const area4s = "2,3,6";
  const area5s = "3,6,7";
  const area6s = "6,7,11";
  const area7s = "7,11,12";
  const area8s = "11,12,16";
  const area9s = "11,15,16";
  const area10s = "15,16,19";
  const area11s = "15,18,19";
  const area12s = "14,15,18";
  const area13s = "14,17,18";
  const area14s = "13,14,17";
  const area15s = "9,13,14";
  const area16s = "8,9,13";
  const area17s = "4,8,9";
  const area18s = "4,5,9";
  const area19s = "5,9,10";
  const area20s = "5,6,10";
  const area21s = "6,10,11";
  const area22s = "10,11,15";
  const area23s = "10,14,15";
  const area24s = "9,10,14";

  const area1 = spot1a + spot4a + spot5a;
  const area2 = spot1a + spot2a + spot5a;
  const area3 = spot2a + spot5a + spot6a;
  const area4 = spot2a + spot3a + spot6a;
  const area5 = spot3a + spot6a + spot7a;
  const area6 = spot6a + spot7a + spot11a;
  const area7 = spot7a + spot11a + spot12a;
  const area8 = spot11a + spot12a + spot16a;
  const area9 = spot11a + spot15a + spot16a;
  const area10 = spot15a + spot16a + spot19a;
  const area11 = spot15a + spot18a + spot19a;
  const area12 = spot14a + spot15a + spot18a;
  const area13 = spot14a + spot17a + spot18a;
  const area14 = spot13a + spot14a + spot17a;
  const area15 = spot9a + spot13a + spot14a;
  const area16 = spot8a + spot9a + spot13a;
  const area17 = spot4a + spot8a + spot9a;
  const area18 = spot4a + spot5a + spot9a;
  const area19 = spot5a + spot9a + spot10a;
  const area20 = spot5a + spot6a + spot10a;
  const area21 = spot6a + spot10a + spot11a;
  const area22 = spot10a + spot11a + spot15a;
  const area23 = spot10a + spot14a + spot15a;
  const area24 = spot9a + spot10a + spot14a;
  
console.log(area1);
console.log(area2);
console.log(area3);
console.log(area4);
console.log(area5);
console.log(area6);
console.log(area7);
console.log(area8);
console.log(area9) ;
console.log(area10);
console.log(area11);
console.log(area12);
console.log(area13);
console.log(area14);
console.log(area15);
console.log(area16);
console.log(area17);
console.log(area18);
console.log(area19);
console.log(area20);
console.log(area21);
console.log(area22);
console.log(area23);
console.log(area24);

  const AllAreasSpots = [area1s, area2s, area3s, area4s, area5s, area6s, area7s, area8s, area9s, area10s, area11s, area12s, area13s,area14s, area15s, area16s, area17s, area18s, area19s, area20s, area21s,area22s, area23s, area24s]

  const allAreas = [area1 + 0.0761, area2 + 0.0752, area3 + 0.08763, area4 + 0.0864, area5 + 0.05675, area6 + 0.06354, area7 + 0.03547, area8 + 0.025325, area9 + 0.0934, area10 + 0.0146751, area11 + 0.01752, area12 + 0.013563, area13 + 0.01344, area14 + 0.01245, area15 + 0.01416, area16 + 0.09717, area17 + 0.08618, area18 + 0.01945, area19 + 0.0345, area20 + 0.02541, area21 + 0.026472, area22 + 0.028462, area23 + 0.02293, area24 + 0.022454];

  const allAreas1 = [area1 + 0.0761, area2 + 0.0752, area3 + 0.08763, area4 + 0.0864, area5 + 0.05675, area6 + 0.06354, area7 + 0.03547, area8 + 0.025325, area9 + 0.0934, area10 + 0.0146751, area11 + 0.01752, area12 + 0.013563, area13 + 0.01344, area14 + 0.01245, area15 + 0.01416, area16 + 0.09717, area17 + 0.08618, area18 + 0.01945, area19 + 0.0345, area20 + 0.02541, area21 + 0.026472, area22 + 0.028462, area23 + 0.02293, area24 + 0.022454];

  let allAreasInOrder = allAreas.sort((a, b) => b-a);
  
  console.log(allAreasInOrder)
  let scoreElements = 1;
  allAreas.forEach(element => {
    let color;
    if(scoreElements < 17){
      if(scoreElements === 1){
          color = "gold"
      }else if(scoreElements === 2){
        color = "silver";
      } else if(scoreElements === 3){
        color = "#CD7F32";
      } else{
        color = "red"//"#d2af77"
      }
      switch(AllAreasSpots[allAreas1.indexOf(element)]){
        case area1s: document.getElementById('spot1').style.backgroundColor = color; document.getElementById('spot1').style.color = "black"; document.getElementById('spot1').innerHTML = "#" + scoreElements;
        break;
        case area2s: document.getElementById('spot2').style.backgroundColor = color; document.getElementById('spot2').style.color = "black"; document.getElementById('spot2').innerHTML = "#" + scoreElements;
        break;
        case area3s: document.getElementById('spot3').style.backgroundColor = color; document.getElementById('spot3').style.color = "black"; document.getElementById('spot3').innerHTML = "#" + scoreElements;
        break;
        case area4s: document.getElementById('spot4').style.backgroundColor = color; document.getElementById('spot4').style.color = "black"; document.getElementById('spot4').innerHTML = "#" + scoreElements;
        break;
        case area5s: document.getElementById('spot5').style.backgroundColor = color; document.getElementById('spot5').style.color = "black"; document.getElementById('spot5').innerHTML = "#" + scoreElements;
        break;
        case area6s: document.getElementById('spot6').style.backgroundColor = color; document.getElementById('spot6').style.color = "black"; document.getElementById('spot6').innerHTML = "#" + scoreElements;
        break;
        case area7s: document.getElementById('spot7').style.backgroundColor = color; document.getElementById('spot7').style.color = "black"; document.getElementById('spot7').innerHTML = "#" + scoreElements;
        break;
        case area8s: document.getElementById('spot8').style.backgroundColor = color; document.getElementById('spot8').style.color = "black"; document.getElementById('spot8').innerHTML = "#" + scoreElements;
        break;
        case area9s: document.getElementById('spot9').style.backgroundColor = color; document.getElementById('spot9').style.color = "black"; document.getElementById('spot9').innerHTML = "#" + scoreElements;
        break;
        case area10s: document.getElementById('spot10').style.backgroundColor = color; document.getElementById('spot10').style.color = "black"; document.getElementById('spot10').innerHTML = "#" + scoreElements;
        break;
        case area11s: document.getElementById('spot11').style.backgroundColor = color; document.getElementById('spot11').style.color = "black"; document.getElementById('spot11').innerHTML = "#" + scoreElements;
        break;
        case area12s: document.getElementById('spot12').style.backgroundColor = color; document.getElementById('spot12').style.color = "black"; document.getElementById('spot12').innerHTML = "#" + scoreElements;
        break;
        case area13s: document.getElementById('spot13').style.backgroundColor = color; document.getElementById('spot13').style.color = "black"; document.getElementById('spot13').innerHTML = "#" + scoreElements;
        break;
        case area14s: document.getElementById('spot14').style.backgroundColor = color; document.getElementById('spot14').style.color = "black"; document.getElementById('spot14').innerHTML = "#" + scoreElements;
        break;
        case area15s: document.getElementById('spot15').style.backgroundColor = color; document.getElementById('spot15').style.color = "black"; document.getElementById('spot15').innerHTML = "#" + scoreElements;
        break;
        case area16s: document.getElementById('spot16').style.backgroundColor = color; document.getElementById('spot16').style.color = "black"; document.getElementById('spot16').innerHTML = "#" + scoreElements;
        break;
        case area17s: document.getElementById('spot17').style.backgroundColor = color; document.getElementById('spot17').style.color = "black"; document.getElementById('spot17').innerHTML = "#" + scoreElements;
        break;
        case area18s: document.getElementById('spot18').style.backgroundColor = color; document.getElementById('spot18').style.color = "black"; document.getElementById('spot18').innerHTML = "#" + scoreElements;
        break;
        case area19s: document.getElementById('spot19').style.backgroundColor = color; document.getElementById('spot19').style.color = "black"; document.getElementById('spot19').innerHTML = "#" + scoreElements;
        break;
        case area20s: document.getElementById('spot20').style.backgroundColor = color; document.getElementById('spot20').style.color = "black"; document.getElementById('spot20').innerHTML = "#" + scoreElements;
        break;
        case area21s: document.getElementById('spot21').style.backgroundColor = color; document.getElementById('spot21').style.color = "black"; document.getElementById('spot21').innerHTML = "#" + scoreElements;
        break;
        case area22s: document.getElementById('spot22').style.backgroundColor = color; document.getElementById('spot22').style.color = "black"; document.getElementById('spot22').innerHTML = "#" + scoreElements;
        break;
        case area23s: document.getElementById('spot23').style.backgroundColor = color; document.getElementById('spot23').style.color = "black"; document.getElementById('spot23').innerHTML = "#" + scoreElements;
        break;
        case area24s: document.getElementById('spot24').style.backgroundColor = color; document.getElementById('spot24').style.color = "black"; document.getElementById('spot24').innerHTML = "#" + scoreElements;
        break;
        default: console.log("error");
        break;
      }
      scoreElements++;
    }
      console.log(`SPOTS:  ${AllAreasSpots[allAreas1.indexOf(element)]}     SCORE:  ${Math.round(100*(element/9))/100}`);
  })
}
