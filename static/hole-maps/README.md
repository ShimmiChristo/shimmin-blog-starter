# Hole map images

Place top-down (birds eye) hole images here, one subfolder per course, named
to match the `image` path referenced in
[src/data/shot-tracker.json](../../src/data/shot-tracker.json), for example:

```
hole-maps/crookedTree/hole-1.png
hole-maps/crookedTree/hole-2.png
hole-maps/bayHarborPreserveLinks/hole-14.png
```

Files in this folder are served as-is at `/hole-maps/<filename>` (no
build-time processing). Portrait images work best — see
[docs/shot-tracker.md](../../docs/shot-tracker.md) for
the full data format used to plot shot trails on top of these images.
