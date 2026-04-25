from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = 3015


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript",
        ".css": "text/css",
        ".png": "image/png",
    }


if __name__ == "__main__":
    server = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print(f"Serving Matcha Vera presentation at http://127.0.0.1:{PORT}")
    server.serve_forever()
