/*****************
 * cellBlockA.js *
 *****************
 *
 * Good morning, Dr. Eval.
 *
 * It wasn't easy, but I've managed to get your computer down
 * to you. This system might be unfamiliar, but the underlying
 * code is still JavaScript. Just like we predicted.
 *
 * Now, let's get what we came here for and then get you out of
 * here. Easy peasy.
 *
 * I've given you as much access to their code as I could, but
 * it's not perfect. The red background indicates lines that
 * are off-limits from editing.
 *
 * The code currently places blocks in a rectangle surrounding
 * you. All you need to do is make a gap. You don't even need
 * to do anything extra. In fact, you should be doing less.
 */
 
 
 
 /*
 Notes-1
 
 Removing both the loops,stops the wall creation.
 
 */

function startLevel(map) {
    map.displayChapter('Chapter 1\nBreakout');

    map.placePlayer(7, 5);
    
    

    map.placeObject(15, 12, 'computer');

    map.placeObject(map.getWidth()-7, map.getHeight()-5, 'exit');
}

function onExit(map) {
    if (!map.getPlayer().hasItem('computer')) {
        map.writeStatus("Don't forget to pick up the computer!");
        return false;
    } else {
        return true;
    }
}
 
