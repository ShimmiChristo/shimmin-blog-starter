#!/bin/bash

set -u

if [[ $# -gt 1 ]]; then
  echo "Usage: npm run image:convert [-- <folder>]" >&2
  exit 1
fi

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
folder=${1:-"$script_dir/../photos-to-convert"}

if [[ ! -d "$folder" ]]; then
  echo "Folder not found: $folder" >&2
  exit 1
fi

if ! command -v sips >/dev/null 2>&1; then
  echo "This script requires macOS's sips utility." >&2
  exit 1
fi

converted=0
skipped=0
failed=0

while IFS= read -r -d '' image; do
  jpg="${image%.*}.jpg"

  if [[ -e "$jpg" ]]; then
    echo "Skipping (JPG already exists): $jpg"
    ((skipped += 1))
    continue
  fi

  if sips -s format jpeg "$image" --out "$jpg" >/dev/null; then
    echo "Converted: $image -> $jpg"
    ((converted += 1))
  else
    echo "Failed to convert: $image" >&2
    ((failed += 1))
  fi
done < <(find "$folder" -type f \( -iname '*.heic' -o -iname '*.heif' \) -print0)

echo "Done. Converted: $converted; skipped: $skipped; failed: $failed."

if [[ $failed -gt 0 ]]; then
  exit 1
fi