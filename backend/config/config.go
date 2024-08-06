package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

// Config func untuk mendapatkan .env value
func Config(key string) string {
	//load .env file
	err := godotenv.Load(".env")
	if err != nil{
		fmt.Print("Error loading .env file")
	}

	return os.Getenv(key)
}