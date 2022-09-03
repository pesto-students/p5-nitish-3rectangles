output:
Count is 0

Reason:  
count is forming closure with increment() and log() function.

Behind The Scenes
when createIncrement() func is called execution context is created, is created and  GEC is pushed in call stack.

in memory block  variable memory is created and initialised with ' COunt is 0'.

before removing gec from call stack,
log() function is binded with the variable  message which forms a closure.

similarly increment function is binded to variable count. 
the lexigraphical scope of members are binded through their addresses and not the copy. 


Execution Steps:
increment stores reference of increment() function with its closure.
when its invoked three times. the value stored in count increments to 3.
when log function is invoked. it prints the value in message variable.
##NOTE: the message variable isnt executed hence no change in the value of message variable, instead
if  following was executed.
output would had been: Count is 3
``` JavaScript

function log() {
        message = `Count is ${count}`;
      console.log(message);
    }
```
