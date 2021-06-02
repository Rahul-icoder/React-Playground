export const throating = (fun,delay) =>{
	let timer = null;
	return (...args) =>{
		if(!timer){
			timer = setTimout(()=>{
				fun.apply(this,args)
				timer = null
			}delay)
		}
	}
}