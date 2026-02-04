Step 5: Bonus (Optional)

1.Add a shutdown() method to the RobotClass that sets the robot's isActive property to false and prints: "The robot has been shut down.". 2.Create a RobotManager class that holds an array of robots and can perform actions like:

•Adding a new robot.

•Listing all robots. •Finding a robot by its name.

// RobotClass definition
class RobotClass {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.isActive = true;
    }
    shutdown() {
        this.isActive = false;
        console.log("The robot has been shut down.");
    }
    getStatus() {
        return this.isActive ? "Active" : "Inactive";

    }

    performTask(task) {
        if (this.isActive) {
            console.log(`${this.name} is performing task: ${task}`);
        }   
        