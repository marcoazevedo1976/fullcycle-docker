FROM golang:1.17-alpine3.15 AS builder
WORKDIR /usr/full-cycle
COPY full-cycle-rocks.go /usr/full-cycle
RUN go build /usr/full-cycle/full-cycle-rocks.go

FROM scratch
COPY --from=builder /usr/full-cycle/full-cycle-rocks /
CMD ["/full-cycle-rocks"]