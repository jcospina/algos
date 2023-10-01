
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let lastWorkingStation = -1;
    let tank = 0;
    for (let i = 0; i < gas.length * 2; i++) {
        const index = i % gas.length;
        if (lastWorkingStation === index) {
            return index;
        }
        tank += gas[index] - cost[index];
        if (tank >= 0 && lastWorkingStation < 0) {
            lastWorkingStation = index;
        } else if (tank < 0) {
            lastWorkingStation = -1;
            tank = 0;
        }
    }
    return -1;
};

const gas = [2,3,4];
const cost = [3,4,4];
console.log(canCompleteCircuit(gas, cost))
