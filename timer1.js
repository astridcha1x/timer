let timing = process.argv.slice(2);

// -- TIMER FUNCTION IMPLEMENTATION -- //

const timer = function(time) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(time);
  }, time);
};

// -- SYSTEM SOUND IMPLEMENTATION -- //

for (const time of timing) {
  timer(time * 1000);
};