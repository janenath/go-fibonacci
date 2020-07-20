package main

import ( 
	"net/http"
	"log"
	"strconv"
	"encoding/json"
	"github.com/julienschmidt/httprouter"
)


func Fibonacci(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	num, error := strconv.Atoi(ps.ByName("number"))

	if error != nil {
		http.Error(w, "invalid input: please enter whole number 1-100", http.StatusInternalServerError)
		return
	}

	fibonacciResult, error := json.Marshal(fib(num))
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Write(fibonacciResult)

}

func fib(n int) []uint64 {
	if n == 1 {
		return []uint64{0}
	}
	if n == 2 {
		return []uint64{0, 1}
	}

	fib := []uint64{0, 1, 1}
	for i := 1; i < n-2; i++ {
		fib = append(fib, fib[len(fib)-1]+fib[len(fib)-2])
	}

	return fib
}


func main() {
	router := httprouter.New() 
	router.GET("/api/fibonacci/:number", Fibonacci)
	log.Fatal(http.ListenAndServe(":8080", router)) 
}