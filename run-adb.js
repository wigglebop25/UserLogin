const { exec } = require('child_process');
const path = require('path');

const adbPath = 'C:\\Users\\hh326\\Downloads\\platform-tools-latest-windows\\platform-tools\\adb.exe';

const commands = [
  `"${adbPath}" reverse tcp:8081 tcp:8081`,
  `"${adbPath}" shell am start -a android.intent.action.VIEW -d "exp://localhost:8081"`
];

function runCommand(index) {
  if (index >= commands.length) {
    console.log('All ADB commands executed successfully.');
    return;
  }

  const cmd = commands[index];
  console.log(`Executing: ${cmd}`);
  
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${cmd}`);
      console.error(error.message);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    runCommand(index + 1);
  });
}

runCommand(0);
