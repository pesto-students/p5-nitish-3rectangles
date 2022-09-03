console.log("hello world");

function createIncrement() {
    let count = 0;
    function increment() {
      count++;
      // console.log(`Count is ${count}`);
    }
  
    let message = `Count is ${count}`;
    function log() {
        message = `Count is ${count}`;
      console.log(message);
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log(); // What is logged?