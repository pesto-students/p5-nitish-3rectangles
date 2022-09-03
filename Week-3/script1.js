

  function memoize(fn)
  {
    const cache = new Map();

    function wrap(...args)
    {
        let key = args.toString();
        if( cache.has(key)) // if already computed just return the ans
        {
            console.log(cache.get(key) );
            return cache.get(key);
        }
        else // compute and then store
        {
            let val = fn(...args);
            cache.set(key, val);
            console.log(val);
            return val;
        }
    }

    return wrap;
  }
 
  function add(...args) {
   
    return args.reduce(function (aac, cur) {
    
      return aac + cur;
    });
  }
  
  const memoizeAdd = memoize(add);
  memoizeAdd(100,100);//returns 200
  memoizeAdd(100);//returns 100
  memoizeAdd(100,200)//returns 300
  memoizeAdd(100,100)//returns 200 without computing