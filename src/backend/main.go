package main

import (
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func handlePost(w http.ResponseWriter, r *http.Request) {
	log.Println(r.Body)
	b, err := io.ReadAll(r.Body)
	if err != nil {
		log.Println(err)
		return
	}
	dir, err := os.Getwd()
	if err != nil {
		log.Println(err)
		return
	}

	f, err := os.CreateTemp(dir, "*.json")
	if err != nil {
		log.Println(err)
	}

	_, _ = f.Write(b)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", handlePost).Methods("POST")

	srv := &http.Server{
		Addr:    ":8080",
		Handler: r,
	}
	srv.ListenAndServe()
}
