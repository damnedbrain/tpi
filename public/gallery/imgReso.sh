#!/bin/bash

for img in ~/Documents/Repos/tpi/public/gallery/*.{jpg,png}; do
	identify -format "%f: %wx%h\n" "$img"
done
