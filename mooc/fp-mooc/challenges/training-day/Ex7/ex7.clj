
(comment
   Exercise 7
   Write the function (average a b), which returns the average of its two
   parameters:
   (average 2 4) ;=> 3
   (average 1 2)) ;=> 3/2)


(defn average [a b] (/ (+ a b ) 2))

(average 2 4) ;=> 3
