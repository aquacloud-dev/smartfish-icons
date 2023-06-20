#!/bin/bash

steps=3
tarball_name="package.tgz"

if [ -f "$tarball_name" ]; then
	steps=4
fi

echo "[1/$steps] Preparing..."
cp "package.json" "dist/"
cd "dist" || exit

echo "[2/$steps] Generating tarball..."
pkg=$(npm pack --pack-destination .. -q)
printf "    → %s\n" "$pkg"
cd ..

if [ -f "$tarball_name" ]; then
	echo "[3/$steps] Removing old $tarball_name"
	rm "$tarball_name"
fi

echo "[$steps/$steps] Renaming $pkg ~> $tarball_name"
mv "$pkg" "$tarball_name"
