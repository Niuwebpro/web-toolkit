"""Build installable plugin ZIPs using only the Python standard library."""
from pathlib import Path
import json
import zipfile

root = Path(__file__).resolve().parents[1]
output = root / "dist"
output.mkdir(exist_ok=True)
for slug in ["dark-mode-toggle"]:
    plugin = root / "plugins" / slug
    version = json.loads((plugin / "block.json").read_text())["version"]
    destination = output / f"{slug}-{version}.zip"
    with zipfile.ZipFile(destination, "w", zipfile.ZIP_DEFLATED) as archive:
        for source in sorted(plugin.rglob("*")):
            if source.is_file():
                archive.write(source, Path(slug) / source.relative_to(plugin))
        archive.write(root / "LICENSE", Path(slug) / "LICENSE")
    print(destination)
