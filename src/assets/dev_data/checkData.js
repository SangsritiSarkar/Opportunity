import data from "./data4.json" assert { type: "json" };

let i = 0; 
data.forEach(item => {
	if (!item.tags) console.log(i, "->", false);
	i++;
})