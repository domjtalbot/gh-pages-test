#!/bin/bash

ls -1

# Start both Docker build commands in the background
docker build -f ./.devcontainer/images/dockerfile.base-debian -t ghpage-test:base-debian . &

# Wait for all background jobs to finish
wait
