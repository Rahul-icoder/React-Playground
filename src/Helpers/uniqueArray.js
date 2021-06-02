export const unique = (arr) =>{
	const uniqueArr = new Set([...arr])
	return [...uniqueArr];
}