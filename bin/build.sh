#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${DIR} && cd ..

zip -r sessioncamfix.zip -@ < bin/files
cd $PWD



