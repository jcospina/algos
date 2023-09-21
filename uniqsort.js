const uniqSort = (arr) => {
	const breadcrumbs = {};
	return arr.filter((element) => {
        if (breadcrumbs[element]) {
            return false;
        }
        breadcrumbs[element] = true;
        return true;
    }).sort((a,b) => a - b);
};

const repeated = [4,3,2,3,2,2,2];
console.log(uniqSort(repeated));