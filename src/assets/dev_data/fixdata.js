import data from "./data5.json" assert { type: "json" };
import fs from "fs-extra";

data.forEach((item) => {
	if (item.tag) {
		item.tags = [...item.tag.split(",").map((t) => t.trim())];
		delete item.tag;
	}
	if (typeof item.tags == "string")
		item.tags = [...item.tags.split(",").map((t) => t.trim())];
	if (!item.tags) item.tags = [];
	if (item.paid && item.paid.trim().length > 0) {
		if (!item.stipend) {
			item.stipend = item.paid;
		}
		else if (item.stipend && item.stipend.trim().length === 0) {
			item.stipend = item.paid;
		}
	}

	delete item.stipendPeriod;
});

console.log(data[0]);

fs.writeJSONSync("./data6.json", data);
