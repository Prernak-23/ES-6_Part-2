
let map_index=0;
  let findCombo=function combo(map,str,l,r){
      if(l==r){
       map_index++;
      insertInToMap(map,map_index,str);
    }
    else{
      for(let i=l; i<=r; i++){
        str=swap(str,l,i);
        combo(map,str, l+1, r); 
	str = swap(str,l,i);      
      }
    }
  }
let swap= function (a,  i,  j) 
	{ 	  let strToArr=a.split('');
		temp = strToArr[i]; 
		strToArr[i] = strToArr[j];
		strToArr[j] = temp; 
		return strToArr.join('');
	} 
let insertInToMap=function (map,key,value)
{
  map.set(key,value);
}
  //Testing function 
let map=new Map();
findCombo(map,"abc",0 ,2);
console.log(map);
