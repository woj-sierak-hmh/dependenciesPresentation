#! /usr/bin/env bash
cd docs/presentation
zip -r presentation.zip .
mv presentation.zip ../presentation.pptx
cd ..
mv presentation backup-remove-me
