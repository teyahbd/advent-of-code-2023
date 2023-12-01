#!/bin/bash
echo "☃️ Hello! Which day do you want to run?"

read day

cd ./day-$day

echo "Here's your output:"

ts-node index.ts