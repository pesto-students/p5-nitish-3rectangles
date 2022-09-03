function createStack() {
    let items = [];
  
    function push(element) {
      items.push(element);
    }
  
    function pop() {
      return items.pop();
    }
  
    function peek() {
      return items[items.length - 1];
    }
  
    function isEmpty() {
      return items.length === 0;
    }
  
    function size() {
      return items.length;
    }
  
    function clear() {
      items = [];
    }
  
    return {
      clear,
      push,
      pop,
      peek,
      isEmpty,
      size,
    };
  }

  conststack=createStack();
  stack.push(10);
  stack.push(5);
  stack.pop();// => 5stack.items;// => undefined