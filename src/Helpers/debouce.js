export const debouce = (fun,delay) => {
	let timer;
	return (...args) =>{
		let context = this;
		if(timer) clearTimeout(timer);
		timer = setTimeout(()=>{
			fun.apply(context,args);
		},delay)
	}
}
