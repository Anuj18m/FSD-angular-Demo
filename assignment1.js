var RobotClass = /** @class */ (function () {
    function RobotClass(name, age, batteryLevel) {
        var _this = this;
        this.status = function () {
            return "Robot Name: ".concat(_this.name, ", Age: ").concat(_this.age, ", Battery Level: ").concat(_this.batteryLevel, "%, Active: ").concat(_this.isActive);
        };
        this.shutdown = function () {
            _this.isActive = false;
            console.log("".concat(_this.name, " is shutting down."));
        };
        this.name = name;
        this.age = age;
        this.batteryLevel = batteryLevel;
        this.isActive = true;
    }
    RobotClass.prototype.chargeBattery = function (amount) {
        this.batteryLevel += amount;
        if (this.batteryLevel > 100) {
            this.batteryLevel = 100;
        }
        console.log("".concat(this.name, " charged. Current battery level: ").concat(this.batteryLevel, "%"));
    };
    RobotClass.prototype.performTask = function (task) {
        if (!this.isActive) {
            return "Robot is inactive.";
        }
        if (this.batteryLevel <= 20) {
            return "Battery is too low to perform tasks!";
        }
        this.batteryLevel -= 20;
        return "Robo is performing ".concat(task);
    };
    return RobotClass;
}());
// class RobotManager{
//     robots: RobotClass[] = [];
//     addRobot(robot: RobotClass): void {
//         this.robots.push(robot);
//     }
//     listRobots(): void {
//         this.robots.forEach(robot => {
//             console.log(robot.status());
//         });
//     findRobotByName(name: string): RobotClass | undefined {
//         return this.robots.find(robot => robot.name === name);
//     }   
//     removeRobotByName(name: string): void {
//         this.robots = this.robots.filter(robot => robot.name !== name);
//     }
//     }
var Robot1 = new RobotClass('Robo-1', 5, 70);
var Robot2 = new RobotClass('Robo-2', 3, 10);
console.log('Status of Robo-1', Robot1.status());
Robot1.chargeBattery(30);
console.log('Status of Robo-1', Robot1.status());
console.log(Robot1.performTask("cleaning"));
console.log('Status of Robo-1', Robot1.status());
console.log('Status of Robo-2', Robot2.status());
