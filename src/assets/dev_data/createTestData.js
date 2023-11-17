import data from "./data5.json" assert { type: "json" };
import fs from "fs-extra";

data.forEach((item) => {
	delete item.paid;
	item.tags = item.tags.filter(tag => tag.trim().length > 0);
	if (item.tags.length == 0) delete item.tags;
	if (item.country && item.country.trim().length == 0) delete item.country;
	if (item.stipend && item.stipend.trim().length == 0) delete item.stipend;
	if (item.org && item.org.trim().length === 0) delete item.org;
	if (item.type && item.type.trim().length == 0) delete item.type;
	if (item.description && item.description.trim().length == 0)
		delete item.description;
	if (item.deadline && item.deadline.trim().length == 0) delete item.deadline;
});

console.log(data[0]);

fs.writeJSONSync("./test_data.json", data);
