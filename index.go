package main

func main() {
	println(fib(5))
}

func fib(x int) int {
	if x < 3 {
		return 1
	}
	return fib(x-1) + fib(x-2)
}
