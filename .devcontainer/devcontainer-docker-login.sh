#!/usr/bin/env bash
set -e

# only log in if not already logged in
if ! docker info 2>/dev/null | grep -q 'Username:'; then
  echo "Logging in to Docker registry..."
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin "$DOCKER_REGISTRY"
else
  echo "Already logged in to Docker registry."
fi
