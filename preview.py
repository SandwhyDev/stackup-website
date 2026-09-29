"""Local static preview with the same extensionless page URL as Vercel."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit
import sys


class CleanUrlHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if urlsplit(path).path == "/privacy-policy":
            path = "/privacy-policy.html"
        return super().translate_path(path)


port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
print(f"Preview: http://127.0.0.1:{port}/")
ThreadingHTTPServer(("127.0.0.1", port), CleanUrlHandler).serve_forever()
