const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

    rl.question(`${questions[0]}\n`, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question(`${questions[1]}\n`, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question(`${questions[2]}\n`, (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question(`${questions[3]}\n`, (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question(`${questions[4]}\n`, (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              rl.question(`${questions[5]}\n`, (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);              
                rl.question(`${questions[6]}\n`, (answer) => {
                  console.log(`Thank you for your valuable feedback: ${answer}`);
                    rl.close();
                  });
                });
              });
            });
          });
        });          
      });