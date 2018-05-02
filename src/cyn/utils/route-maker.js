const makeRoute=(str,replacements,data)=>{
	for(let i in replacements){
		str = str.replace(`{${i}}`,data[replacements[i]]);
	}
	return str;
}
export default makeRoute;