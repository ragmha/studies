 # GARBAGE COLLECTION

Memory in Javascript is managed automatically by the runtime. The runtime decides when/if to release any allocated memory. This decision process is called `Garbage Collection`.

Every javascript runtime has their own algorithm for garbage collection, but most use a variation of Mark & Sweep. The Mark & Sweep algorithm works by marking references to memory (variables, functions, etc) which are still reachable from active code. Any reference which is not marked, is swept into the garbage (i.e. the memory is freed).

1.  Fire up a new tab in Chrome

2.  Open the DevTools > Timeline tab

3.  Ensure the settings are like so: http://i.imgur.com/RMovIw4.png
  * a) Frames View is unselected (allows seeing memory graphs)

  * b) Flame Chart View is selected (allows seeing where execution time
   is spent)

  * c) Only "Memory" is selected from the options

4.  Click the solid gray record button to begin capturing data

5.  Visit http://www.stackoverflow.com (or your favourite website)

6.  Click the now-red record button to stop capturing data

7.  You should now see something similar to: `http://i.imgur.com/ZCNMrI1.png`

8.  The part we're interested in is when memory suddenly drops:
  `http://i.imgur.com/FyMyRVI.png`

9.  Click this drop in memory to select it

10. Now look for the yellow event called `GC Event`: `http://i.imgur.com/3ieSxIZ.png`

11. Clicking this event will reveal information about total memory garbage collected, and how long it took.
