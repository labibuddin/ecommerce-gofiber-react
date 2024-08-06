FROM golang:alpine3.19

WORKDIR /app

RUN go install github.com/air-verse/air@latest

COPY . .
RUN go mod tidy